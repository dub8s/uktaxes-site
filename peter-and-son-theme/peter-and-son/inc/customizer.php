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
		'instagram'    => 'peterandsonmeatdeliveries',
		'address_1'    => 'Unit A2C, East Lee Road Trading Estate',
		'address_2'    => 'Waltham Cross, Waltham Abbey EN9 1AS',
		'maps_url'     => 'https://www.google.com/maps/search/?api=1&query=Peter+%26+Son+Meat+Deliveries+Unit+A2C+East+Lee+Road+Trading+Estate+Waltham+Cross+EN9+1AS',
		'rating'       => '5.0',
		'review_count' => '17',
		'hero_style'   => 'photo',
		// Company details from Companies House (company 14727788).
		'legal_name'        => 'Peter & Son Meat Deliveries Ltd',
		'company_number'    => '14727788',
		'registered_in'     => 'England and Wales',
		'registered_office' => 'F04 1st Floor, Knightrider House, Knightrider Street, Maidstone, Kent, ME15 6LU',
		'vat_number'        => '',
		'ico_number'        => '',
	);
}

/**
 * Photo slots. `file` is the name used in the Claude Design project; copying
 * a file with that name into assets/img/ also works without the Customizer.
 */
function ps_image_slots() {
	// With the photo header, the van-loading photo moves up to the header, so
	// step 2 and the gallery shuffle along to avoid showing a photo twice.
	$photo_hero = 'none' !== ps_opt( 'hero_style' );
	return array(
		'logo'      => array( 'label' => __( 'Header wordmark (gold)', 'peter-and-son' ), 'file' => 'wordmark-gold.png' ),
		'watermark' => array( 'label' => __( 'Hero bull watermark', 'peter-and-son' ), 'file' => 'bull-watermark.png' ),
		'hero'      => array( 'label' => __( 'Header photo (loading the van)', 'peter-and-son' ), 'file' => 'loading.jpg' ),
		'badges'    => array( 'label' => __( 'Trust badges strip', 'peter-and-son' ), 'file' => 'trust-badges.png' ),
		'step1'     => array( 'label' => __( 'Step 1 – Cut to your spec', 'peter-and-son' ), 'file' => 'cut-dry-aged.jpg' ),
		'step2'     => array( 'label' => __( 'Step 2 – Packed cold', 'peter-and-son' ), 'file' => $photo_hero ? 'beef-box.jpg' : 'loading.jpg' ),
		'step3'     => array( 'label' => __( 'Step 3 – At your door', 'peter-and-son' ), 'file' => 'smithfield.jpg' ),
		'peter'     => array( 'label' => __( 'Portrait of Peter', 'peter-and-son' ), 'file' => 'peter.jpg' ),
		'savoy'     => array( 'label' => __( 'Vans at The Savoy', 'peter-and-son' ), 'file' => 'savoy-wide.jpg' ),
		'gallery1'  => array( 'label' => __( 'Gallery – the team (large)', 'peter-and-son' ), 'file' => 'team.jpg' ),
		'gallery2'  => array( 'label' => __( 'Gallery – small photo 1', 'peter-and-son' ), 'file' => $photo_hero ? 'cut-ribeye.jpg' : 'beef-box.jpg' ),
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

	$wp_customize->add_section( 'ps_header', array(
		'title' => __( 'Header', 'peter-and-son' ),
		'panel' => 'ps_panel',
	) );
	$wp_customize->add_setting( 'ps_hero_style', array(
		'default'           => $defaults['hero_style'],
		'sanitize_callback' => function ( $value ) {
			return in_array( $value, array( 'photo', 'none' ), true ) ? $value : 'photo';
		},
	) );
	$wp_customize->add_control( 'ps_hero_style', array(
		'label'   => __( 'Header style', 'peter-and-son' ),
		'type'    => 'radio',
		'section' => 'ps_header',
		'choices' => array(
			'photo' => __( 'Photo on the right, fading into the background', 'peter-and-son' ),
			'none'  => __( 'No photo: text and logo watermark only', 'peter-and-son' ),
		),
	) );

	$wp_customize->add_section( 'ps_legal', array(
		'title'       => __( 'Company & legal details', 'peter-and-son' ),
		'panel'       => 'ps_panel',
		'description' => __( 'Shown in the footer and on the Privacy Policy, Cookie Policy and Terms pages. UK law requires a limited company to show its registered name, number, place of registration and registered office on its website. Leave VAT or ICO number blank if you do not have one and it is simply left out.', 'peter-and-son' ),
	) );
	$legal = array(
		'legal_name'        => __( 'Registered company name', 'peter-and-son' ),
		'company_number'    => __( 'Company number', 'peter-and-son' ),
		'registered_in'     => __( 'Registered in', 'peter-and-son' ),
		'registered_office' => __( 'Registered office address', 'peter-and-son' ),
		'vat_number'        => __( 'VAT number (if VAT registered)', 'peter-and-son' ),
		'ico_number'        => __( 'ICO registration number', 'peter-and-son' ),
	);
	foreach ( $legal as $key => $label ) {
		$wp_customize->add_setting( 'ps_' . $key, array(
			'default'           => $defaults[ $key ],
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'ps_' . $key, array(
			'label'   => $label,
			'type'    => 'text',
			'section' => 'ps_legal',
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
