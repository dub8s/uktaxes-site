<?php
/**
 * One-click setup: creates the Home, Privacy Policy, Cookie Policy and Terms
 * of Use pages, makes Home the homepage, and adds the legal pages to the
 * footer menu. Safe to run more than once: pages that already exist are left
 * as they are.
 *
 * @package peter-and-son
 */

defined( 'ABSPATH' ) || exit;

/** The pages the theme creates, keyed by slug. */
function ps_setup_page_defs() {
	return array(
		'home'           => array(
			'title'    => __( 'Home', 'peter-and-son' ),
			'template' => 'templates/landing.php',
			'seo'      => array(
				'title'       => 'Meat Supplier to London Restaurants & Hotels | Peter and Son',
				'description' => 'Family butchers in Waltham Cross supplying premium meat to London restaurants, hotels and caterers. Cut to order, delivered from 4am. Call for a price list.',
			),
		),
		'privacy-policy' => array(
			'title' => __( 'Privacy Policy', 'peter-and-son' ),
			'file'  => 'privacy-policy.html',
			'seo'   => array( 'description' => 'How Peter & Son Meat Deliveries Ltd collects, uses and protects personal information, and your rights under UK data protection law.' ),
		),
		'cookie-policy'  => array(
			'title' => __( 'Cookie Policy', 'peter-and-son' ),
			'file'  => 'cookie-policy.html',
			'seo'   => array( 'description' => 'The cookies used on the Peter and Son Meat Deliveries website. Visitors are not tracked: no analytics or advertising cookies.' ),
		),
		'terms'          => array(
			'title' => __( 'Terms of Use', 'peter-and-son' ),
			'file'  => 'terms.html',
			'seo'   => array( 'description' => 'Terms of use for the Peter and Son Meat Deliveries website, including our company details.' ),
		),
	);
}

/**
 * Run the setup. Returns the page IDs keyed by slug, and which were newly
 * created or filled in.
 */
function ps_run_setup() {
	global $wp_rewrite;

	// Readable URLs (/privacy-policy/) are better for visitors and search engines.
	if ( '' === get_option( 'permalink_structure' ) ) {
		$wp_rewrite->set_permalink_structure( '/%postname%/' );
	}

	$ids     = array();
	$written = array();
	foreach ( ps_setup_page_defs() as $slug => $def ) {
		$page = null;
		if ( 'privacy-policy' === $slug && get_option( 'wp_page_for_privacy_policy' ) ) {
			$page = get_post( (int) get_option( 'wp_page_for_privacy_policy' ) );
		}
		if ( ! $page || 'trash' === $page->post_status ) {
			$page = get_page_by_path( $slug );
		}

		// WordPress creates an unpublished sample privacy policy on install; replace that one.
		$replace_draft = $page && 'privacy-policy' === $slug && 'draft' === $page->post_status && ! get_post_meta( $page->ID, '_ps_managed', true );

		if ( $page && 'trash' !== $page->post_status && ! $replace_draft ) {
			$ids[ $slug ] = $page->ID;
			continue;
		}

		$postarr = array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => $def['title'],
			'post_name'    => $slug,
			'post_content' => '',
		);
		if ( $replace_draft ) {
			$postarr['ID'] = $page->ID;
		}
		$id = wp_insert_post( $postarr, true );
		if ( is_wp_error( $id ) ) {
			continue;
		}
		$ids[ $slug ] = $id;
		$written[]    = $slug;
		update_post_meta( $id, '_ps_managed', 1 );
		if ( ! empty( $def['template'] ) ) {
			update_post_meta( $id, '_wp_page_template', $def['template'] );
		}
		if ( ! empty( $def['seo']['title'] ) ) {
			update_post_meta( $id, '_ps_seo_title', $def['seo']['title'] );
		}
		if ( ! empty( $def['seo']['description'] ) ) {
			update_post_meta( $id, '_ps_seo_description', $def['seo']['description'] );
		}
	}

	// Fill in the legal text now every page has a URL to link to.
	foreach ( $written as $slug ) {
		$defs = ps_setup_page_defs();
		if ( empty( $defs[ $slug ]['file'] ) ) {
			continue;
		}
		$content = file_get_contents( get_template_directory() . '/inc/pages/' . $defs[ $slug ]['file'] ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents -- local theme file.
		$content = preg_replace_callback( '/\{\{url:([a-z-]+)\}\}/', function ( $m ) use ( $ids ) {
			return isset( $ids[ $m[1] ] ) ? esc_url( get_permalink( $ids[ $m[1] ] ) ) : esc_url( home_url( '/' . $m[1] . '/' ) );
		}, $content );
		wp_update_post( array( 'ID' => $ids[ $slug ], 'post_content' => $content ) );
	}

	if ( isset( $ids['home'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $ids['home'] );
	}
	if ( isset( $ids['privacy-policy'] ) ) {
		update_option( 'wp_page_for_privacy_policy', $ids['privacy-policy'] );
	}

	// Footer menu with the legal pages, unless one is already assigned.
	$locations = get_nav_menu_locations();
	if ( empty( $locations['footer'] ) ) {
		$menu    = wp_get_nav_menu_object( 'Footer links' );
		$menu_id = $menu ? $menu->term_id : wp_create_nav_menu( 'Footer links' );
		if ( ! is_wp_error( $menu_id ) && ! wp_get_nav_menu_items( $menu_id ) ) {
			foreach ( array( 'privacy-policy', 'cookie-policy', 'terms' ) as $slug ) {
				if ( isset( $ids[ $slug ] ) ) {
					wp_update_nav_menu_item( $menu_id, 0, array(
						'menu-item-object-id' => $ids[ $slug ],
						'menu-item-object'    => 'page',
						'menu-item-type'      => 'post_type',
						'menu-item-status'    => 'publish',
					) );
				}
			}
		}
		if ( ! is_wp_error( $menu_id ) ) {
			$locations['footer'] = $menu_id;
			set_theme_mod( 'nav_menu_locations', $locations );
		}
	}

	flush_rewrite_rules();
	update_option( 'ps_setup_done', PS_VERSION );
	return array( 'ids' => $ids, 'written' => $written );
}

add_action( 'admin_post_ps_setup', function () {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'Sorry, you are not allowed to do that.', 'peter-and-son' ) );
	}
	check_admin_referer( 'ps_setup' );
	ps_run_setup();
	wp_safe_redirect( admin_url( 'edit.php?post_type=page&ps_setup=done' ) );
	exit;
} );

add_action( 'admin_notices', function () {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( isset( $_GET['ps_setup'] ) && 'done' === $_GET['ps_setup'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- display only.
		printf(
			'<div class="notice notice-success is-dismissible"><p><strong>%s</strong> %s</p></div>',
			esc_html__( 'Peter and Son pages are set up.', 'peter-and-son' ),
			esc_html__( 'Home is now your homepage, and the Privacy Policy, Cookie Policy and Terms of Use are published and linked in the footer. Check the company details in Appearance → Customize → Peter and Son → Company & legal details.', 'peter-and-son' )
		);
		return;
	}
	if ( get_option( 'ps_setup_done' ) ) {
		return;
	}
	$url = wp_nonce_url( admin_url( 'admin-post.php?action=ps_setup' ), 'ps_setup' );
	printf(
		'<div class="notice notice-info"><p><strong>%1$s</strong> %2$s</p><p><a class="button button-primary" href="%3$s">%4$s</a></p></div>',
		esc_html__( 'Finish setting up the Peter and Son theme.', 'peter-and-son' ),
		esc_html__( 'This creates a Home page using the landing page and makes it your homepage, publishes a Privacy Policy, Cookie Policy and Terms of Use with your company details, and adds them to the footer. Existing pages are not changed, apart from WordPress\'s unpublished sample privacy policy.', 'peter-and-son' ),
		esc_url( $url ),
		esc_html__( 'Set up pages', 'peter-and-son' )
	);
} );

/**
 * Bring pages created by an earlier version up to date. Only text and SEO
 * settings that are still exactly as the theme wrote them are changed, so
 * anything edited by hand is left alone.
 */
add_action( 'admin_init', function () {
	$done = get_option( 'ps_setup_done' );
	if ( ! $done || version_compare( $done, PS_VERSION, '>=' ) ) {
		return;
	}

	if ( version_compare( $done, '1.2.0', '<' ) ) {
		// 1.2.0: the enquiry form was removed and the halal wording toned down.
		$home = (int) get_option( 'page_on_front' );
		if ( $home && get_post_meta( $home, '_ps_managed', true ) ) {
			$seo = ps_setup_page_defs()['home']['seo'];
			if ( 'Halal Meat Supplier to London Restaurants & Hotels | Peter and Son' === get_post_meta( $home, '_ps_seo_title', true ) ) {
				update_post_meta( $home, '_ps_seo_title', $seo['title'] );
			}
			if ( 0 === strpos( get_post_meta( $home, '_ps_seo_description', true ), 'Family-run halal butchers in Waltham Cross' ) ) {
				update_post_meta( $home, '_ps_seo_description', $seo['description'] );
			}
		}
		$replacements = array(
			'<li><strong>Enquiries.</strong> When you use the "Request a price list" form we collect your name, business name, email address, phone number, the type of kitchen you run and what you need. We also collect whatever you tell us when you phone, email or message us on Instagram.</li>' => '<li><strong>Enquiries.</strong> When you phone, email or message us on Instagram, we collect your name, business name, contact details and whatever you tell us about what you need.</li>',
			'<tr><td>Keep the website secure and prevent spam and misuse of the enquiry form</td>' => '<tr><td>Keep the website secure and working</td>',
			'enquiries are stored in a password-protected system that only our team can access,' => 'the information we hold is kept in password-protected systems,',
			', introducing viruses, or sending spam or false enquiries through the contact form.' => ' or introducing viruses.',
		);
		$pages = get_posts( array( 'post_type' => 'page', 'post_status' => 'any', 'numberposts' => -1, 'meta_key' => '_ps_managed', 'meta_value' => 1 ) ); // phpcs:ignore WordPress.DB.SlowDBQuery -- runs once.
		foreach ( $pages as $page ) {
			$content = str_replace( array_keys( $replacements ), array_values( $replacements ), $page->post_content );
			if ( $content !== $page->post_content ) {
				wp_update_post( array( 'ID' => $page->ID, 'post_content' => $content ) );
			}
		}
	}

	update_option( 'ps_setup_done', PS_VERSION );
} );
