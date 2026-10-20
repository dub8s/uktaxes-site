<?php
/**
 * "Request a price list" form: saves each enquiry in wp-admin → Enquiries
 * and emails it, so nothing is lost if the server cannot send mail.
 *
 * @package peter-and-son
 */

defined( 'ABSPATH' ) || exit;

const PS_ENQUIRY_FIELDS = array( 'business', 'email', 'phone', 'kitchen', 'needs' );

add_action( 'init', function () {
	register_post_type( 'ps_enquiry', array(
		'labels'          => array(
			'name'          => __( 'Enquiries', 'peter-and-son' ),
			'singular_name' => __( 'Enquiry', 'peter-and-son' ),
			'edit_item'     => __( 'Enquiry', 'peter-and-son' ),
			'not_found'     => __( 'No enquiries yet.', 'peter-and-son' ),
		),
		'public'          => false,
		'show_ui'         => true,
		'menu_icon'       => 'dashicons-email-alt',
		'menu_position'   => 25,
		'supports'        => array( 'title', 'editor' ),
		'capability_type' => 'post',
		'capabilities'    => array( 'create_posts' => 'do_not_allow' ),
		'map_meta_cap'    => true,
	) );
} );

/** The kitchen types offered in the form. */
function ps_kitchen_types() {
	return array(
		__( 'Restaurant', 'peter-and-son' ),
		__( 'Hotel', 'peter-and-son' ),
		__( 'Catering & events', 'peter-and-son' ),
		__( 'Retail', 'peter-and-son' ),
		__( 'Other', 'peter-and-son' ),
	);
}

function ps_handle_enquiry() {
	$back = wp_get_referer() ? wp_get_referer() : home_url( '/' );
	$back = remove_query_arg( 'enquiry', strtok( $back, '#' ) );
	$fail = add_query_arg( 'enquiry', 'error', $back ) . '#contact';

	// Bots fill the hidden field, or submit faster than a person can type.
	$started = isset( $_POST['ps_ts'] ) ? (int) $_POST['ps_ts'] : 0; // phpcs:ignore WordPress.Security.NonceVerification.Missing -- public form, no session to protect.
	if ( ! empty( $_POST['ps_website'] ) || ( $started && time() - $started < 3 ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
		wp_safe_redirect( add_query_arg( 'enquiry', 'sent', $back ) . '#contact' );
		exit;
	}

	$name = isset( $_POST['ps_name'] ) ? sanitize_text_field( wp_unslash( $_POST['ps_name'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Missing
	$data = array();
	foreach ( PS_ENQUIRY_FIELDS as $field ) {
		$raw            = isset( $_POST[ 'ps_' . $field ] ) ? wp_unslash( $_POST[ 'ps_' . $field ] ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Missing, WordPress.Security.ValidationSanitization.InputNotSanitized -- sanitised below.
		$data[ $field ] = 'needs' === $field ? sanitize_textarea_field( $raw ) : sanitize_text_field( $raw );
	}
	$data['email'] = sanitize_email( $data['email'] );

	if ( '' === $name || ! is_email( $data['email'] ) ) {
		wp_safe_redirect( $fail );
		exit;
	}

	$title   = $data['business'] ? $name . ' — ' . $data['business'] : $name;
	$post_id = wp_insert_post( array(
		'post_type'    => 'ps_enquiry',
		'post_status'  => 'private',
		'post_title'   => $title,
		'post_content' => $data['needs'],
		'meta_input'   => array_combine(
			array_map( function ( $f ) { return '_ps_' . $f; }, PS_ENQUIRY_FIELDS ),
			array_values( $data )
		),
	) );

	$to = ps_opt( 'enquiry_to' ) ? ps_opt( 'enquiry_to' ) : ps_opt( 'email' );
	if ( ! is_email( $to ) ) {
		$to = get_option( 'admin_email' );
	}
	$body = sprintf(
		"Name: %s\nBusiness: %s\nEmail: %s\nPhone: %s\nType of kitchen: %s\n\nWhat they need:\n%s\n",
		$name,
		$data['business'],
		$data['email'],
		$data['phone'],
		$data['kitchen'],
		$data['needs']
	);
	if ( $post_id && ! is_wp_error( $post_id ) ) {
		$body .= "\nView in WordPress: " . admin_url( 'post.php?post=' . $post_id . '&action=edit' ) . "\n";
	}
	wp_mail(
		$to,
		/* translators: %s: customer's name and business */
		sprintf( __( 'Price list request from %s', 'peter-and-son' ), $title ),
		$body,
		array( 'Reply-To: ' . $name . ' <' . $data['email'] . '>' )
	);

	if ( ! $post_id || is_wp_error( $post_id ) ) {
		wp_safe_redirect( $fail );
		exit;
	}
	wp_safe_redirect( add_query_arg( 'enquiry', 'sent', $back ) . '#contact' );
	exit;
}
add_action( 'admin_post_nopriv_ps_enquiry', 'ps_handle_enquiry' );
add_action( 'admin_post_ps_enquiry', 'ps_handle_enquiry' );

// Show the enquiry details in the admin list and on the edit screen.
add_filter( 'manage_ps_enquiry_posts_columns', function ( $cols ) {
	return array(
		'cb'          => $cols['cb'],
		'title'       => __( 'Name', 'peter-and-son' ),
		'ps_email'    => __( 'Email', 'peter-and-son' ),
		'ps_phone'    => __( 'Phone', 'peter-and-son' ),
		'ps_kitchen'  => __( 'Kitchen', 'peter-and-son' ),
		'date'        => $cols['date'],
	);
} );
add_action( 'manage_ps_enquiry_posts_custom_column', function ( $col, $post_id ) {
	$value = get_post_meta( $post_id, '_' . $col, true );
	if ( 'ps_email' === $col && $value ) {
		printf( '<a href="mailto:%1$s">%1$s</a>', esc_attr( $value ) );
	} elseif ( 'ps_phone' === $col && $value ) {
		printf( '<a href="%s">%s</a>', esc_attr( ps_tel( $value ) ), esc_html( $value ) );
	} else {
		echo esc_html( $value );
	}
}, 10, 2 );
add_action( 'add_meta_boxes_ps_enquiry', function () {
	add_meta_box( 'ps_enquiry_details', __( 'Contact details', 'peter-and-son' ), function ( $post ) {
		echo '<table class="form-table"><tbody>';
		foreach ( array( 'business' => __( 'Business', 'peter-and-son' ), 'email' => __( 'Email', 'peter-and-son' ), 'phone' => __( 'Phone', 'peter-and-son' ), 'kitchen' => __( 'Type of kitchen', 'peter-and-son' ) ) as $key => $label ) {
			printf( '<tr><th>%s</th><td>%s</td></tr>', esc_html( $label ), esc_html( get_post_meta( $post->ID, '_ps_' . $key, true ) ) );
		}
		echo '</tbody></table>';
	}, 'ps_enquiry', 'normal', 'high' );
} );
