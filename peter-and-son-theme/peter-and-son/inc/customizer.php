<?php
/**
 * Customizer: Appearance → Customize → Peter and Son.
 *
 * @package peter-and-son
 */

defined( 'ABSPATH' ) || exit;

/** Default contact details, taken from the design. */
function ps_defaults() {
	return array(
		'announcement' => 'Serving kitchens across London · First drops from 4am',
		'phone'        => '020 3370 2200',
		'mobile'       => '07449 315 690',
		'email'        => 'info@peterandson.co.uk',
		'enquiry_to'   => '',
		'instagram'    => 'peterandsonmeatdeliveries',
		'address_1'    => 'Unit A2C, East Lee Road Trading Estate',
		'address_2'    => 'Waltham Cross, Waltham Abbey EN9 1AS',
		'maps_url'     => 'https://www.google.com/maps/search/?api=1&query=Peter+%26+Son+Meat+Deliveries+Unit+A2C+East+Lee+Road+Trading+Estate+Waltham+Cross+EN9+1AS',
		'rating'       => '5.0',
		'review_count' => '17',
	);
}

/**
 * Photo slots. `file` is the name used in the Claude Design project; copying
 * a file with that name into assets/img/ also works without the Customizer.
 */
function ps_image_slots() {
	return array(
		'logo'      => array( 'label' => __( 'Header wordmark (gold)', 'peter-and-son' ), 'file' => 'wordmark-gold.png' ),
		'watermark' => array( 'label' => __( 'Hero bull watermark', 'peter-and-son' ), 'file' => 'bull-watermark.png' ),
		'hero'      => array( 'label' => __( 'Hero photo (ribeye on the block)', 'peter-and-son' ), 'file' => 'cut-ribeye.jpg' ),
		'badges'    => array( 'label' => __( 'Trust badges strip', 'peter-and-son' ), 'file' => 'trust-badges.png' ),
		'step1'     => array( 'label' => __( 'Step 1 – Cut to your spec', 'peter-and-son' ), 'file' => 'cut-dry-aged.jpg' ),
		'step2'     => array( 'label' => __( 'Step 2 – Packed cold', 'peter-and-son' ), 'file' => 'loading.jpg' ),
		'step3'     => array( 'label' => __( 'Step 3 – At your door', 'peter-and-son' ), 'file' => 'smithfield.jpg' ),
		'peter'     => array( 'label' => __( 'Portrait of Peter', 'peter-and-son' ), 'file' => 'peter.jpg' ),
		'savoy'     => array( 'label' => __( 'Vans at The Savoy', 'peter-and-son' ), 'file' => 'savoy-wide.jpg' ),
		'gallery1'  => array( 'label' => __( 'Gallery – the team (large)', 'peter-and-son' ), 'file' => 'team.jpg' ),
		'gallery2'  => array( 'label' => __( 'Gallery – beef box', 'peter-and-son' ), 'file' => 'beef-box.jpg' ),
		'gallery3'  => array( 'label' => __( 'Gallery – unit sign and van', 'peter-and-son' ), 'file' => 'sign-van.jpg' ),
		'gallery4'  => array( 'label' => __( 'Gallery – ribeye on the block', 'peter-and-son' ), 'file' => 'cut-ribeye-2.jpg' ),
		'gallery5'  => array( 'label' => __( 'Gallery – side of the van', 'peter-and-son' ), 'file' => 'van-side.jpg' ),
		'monogram'  => array( 'label' => __( 'Footer bull monogram', 'peter-and-son' ), 'file' => 'bull-monogram-gold.png' ),
	);
}

add_action( 'customize_register', function ( WP_Customize_Manager $wp_customize ) {
	$wp_customize->add_panel( 'ps_panel', array(
		'title'    => __( 'Peter and Son', 'peter-and-son' ),
		'priority' => 30,
	) );

	$wp_customize->add_section( 'ps_contact', array(
		'title' => __( 'Contact details', 'peter-and-son' ),
		'panel' => 'ps_panel',
	) );

	$fields = array(
		'announcement' => array( __( 'Announcement bar text', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'phone'        => array( __( 'Landline', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'mobile'       => array( __( 'Mobile', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'email'        => array( __( 'Public email address', 'peter-and-son' ), 'email', 'sanitize_email' ),
		'enquiry_to'   => array( __( 'Send enquiry form to (leave blank to use the public email)', 'peter-and-son' ), 'email', 'sanitize_email' ),
		'instagram'    => array( __( 'Instagram handle (without @)', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'address_1'    => array( __( 'Address line 1', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'address_2'    => array( __( 'Address line 2', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'maps_url'     => array( __( 'Google Maps link', 'peter-and-son' ), 'url', 'esc_url_raw' ),
		'rating'       => array( __( 'Google rating', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
		'review_count' => array( __( 'Number of Google reviews', 'peter-and-son' ), 'text', 'sanitize_text_field' ),
	);
	$defaults = ps_defaults();
	foreach ( $fields as $key => $field ) {
		$wp_customize->add_setting( 'ps_' . $key, array(
			'default'           => $defaults[ $key ],
			'sanitize_callback' => $field[2],
		) );
		$wp_customize->add_control( 'ps_' . $key, array(
			'label'   => $field[0],
			'type'    => $field[1],
			'section' => 'ps_contact',
		) );
	}

	$wp_customize->add_section( 'ps_photos', array(
		'title'       => __( 'Photos', 'peter-and-son' ),
		'panel'       => 'ps_panel',
		'description' => __( 'Upload the photos and logos for the landing page. Anything left empty shows a dark placeholder.', 'peter-and-son' ),
	) );
	foreach ( ps_image_slots() as $key => $slot ) {
		$wp_customize->add_setting( 'ps_img_' . $key, array( 'sanitize_callback' => 'absint' ) );
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'ps_img_' . $key, array(
			'label'     => $slot['label'],
			'section'   => 'ps_photos',
			'mime_type' => 'image',
		) ) );
	}
} );
