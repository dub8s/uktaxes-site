<?php
/**
 * Peter and Son theme setup.
 *
 * @package peter-and-son
 */

defined( 'ABSPATH' ) || exit;

define( 'PS_VERSION', '1.0.0' );

require get_template_directory() . '/inc/icons.php';
require get_template_directory() . '/inc/customizer.php';
require get_template_directory() . '/inc/enquiries.php';

add_action( 'after_setup_theme', function () {
	load_theme_textdomain( 'peter-and-son', get_template_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'responsive-embeds' );
	register_nav_menus( array( 'footer' => __( 'Footer links (e.g. Privacy policy)', 'peter-and-son' ) ) );
} );

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'peter-and-son', get_stylesheet_uri(), array(), PS_VERSION );
	wp_enqueue_script( 'peter-and-son', get_template_directory_uri() . '/assets/js/main.js', array(), PS_VERSION, array( 'in_footer' => true, 'strategy' => 'defer' ) );

	// The landing page is hand-built, so it needs none of the block editor's styles.
	if ( is_front_page() ) {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'classic-theme-styles' );
		wp_dequeue_style( 'global-styles' );
	}
}, 20 );

// Preload the two fonts used above the fold.
add_action( 'wp_head', function () {
	foreach ( array( 'alfa-slab-one-latin', 'archivo-latin' ) as $font ) {
		printf( '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n", esc_url( get_template_directory_uri() . '/assets/fonts/' . $font . '.woff2' ) );
	}
}, 1 );

// Use the bull monogram as the browser icon until a Site Icon is set in the Customizer.
add_action( 'wp_head', function () {
	if ( ! has_site_icon() ) {
		printf( '<link rel="icon" href="%s" type="image/png">' . "\n", esc_url( get_template_directory_uri() . '/assets/img/favicon.png' ) );
	}
} );

add_filter( 'document_title_separator', function () {
	return '—';
} );

/**
 * Get a theme option set in Appearance → Customize → Peter and Son.
 */
function ps_opt( $key ) {
	$defaults = ps_defaults();
	return get_theme_mod( 'ps_' . $key, isset( $defaults[ $key ] ) ? $defaults[ $key ] : '' );
}

/** Phone number reduced to digits for tel: links. */
function ps_tel( $number ) {
	return 'tel:' . preg_replace( '/[^0-9+]/', '', $number );
}

/** Link to a section on the landing page; works from inner pages too. */
function ps_anchor( $id ) {
	return is_front_page() ? '#' . $id : home_url( '/#' . $id );
}

/**
 * Print an image chosen in the Customizer.
 *
 * Falls back to a file of the same name in assets/img/ (so the original
 * Claude Design images can simply be copied in), then to a placeholder.
 *
 * @param string $key   Image slot, e.g. 'hero'.
 * @param string $alt   Alt text.
 * @param array  $attr  Extra attributes for the <img>.
 * @param bool   $placeholder Whether to print a placeholder when nothing is set.
 * @return bool Whether an actual image was printed.
 */
function ps_image( $key, $alt, $attr = array(), $placeholder = true ) {
	$slots = ps_image_slots();
	$id    = (int) get_theme_mod( 'ps_img_' . $key );
	$attr  = array_merge( array( 'alt' => $alt, 'loading' => 'lazy', 'decoding' => 'async' ), $attr );

	if ( $id && wp_attachment_is_image( $id ) ) {
		echo wp_get_attachment_image( $id, 'full', false, $attr );
		return true;
	}

	$file = isset( $slots[ $key ] ) ? $slots[ $key ]['file'] : '';
	if ( $file && file_exists( get_template_directory() . '/assets/img/' . $file ) ) {
		$attr['src'] = get_template_directory_uri() . '/assets/img/' . $file;
		$html        = '<img';
		foreach ( $attr as $name => $value ) {
			$html .= ' ' . $name . '="' . esc_attr( $value ) . '"';
		}
		echo $html . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- attributes escaped above.
		return true;
	}

	if ( $placeholder ) {
		$label = isset( $slots[ $key ] ) ? $slots[ $key ]['label'] : $alt;
		printf(
			'<div class="ps-ph" role="img" aria-label="%1$s"><span>%2$s</span></div>',
			esc_attr( $alt ),
			esc_html( sprintf( /* translators: %s: image name */ __( '%s — add a photo in Appearance → Customize → Peter and Son → Photos', 'peter-and-son' ), $label ) )
		);
	}
	return false;
}

/** Five outlined gold stars. */
function ps_stars() {
	echo '<span class="stars" aria-hidden="true">' . str_repeat( ps_icon( 'star' ), 5 ) . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static SVG.
}

/** Trust badges image, or a typed fallback row if no image is set. */
function ps_badges( $class = '' ) {
	$alt = __( 'Halal, Family business, HACCP certified, 20 years experience', 'peter-and-son' );
	if ( ps_image( 'badges', $alt, array( 'class' => $class ), false ) ) {
		return;
	}
	echo '<div class="badge-row">';
	foreach ( array( __( 'Halal', 'peter-and-son' ), __( 'Family business', 'peter-and-son' ), __( 'HACCP certified', 'peter-and-son' ), __( '20 years experience', 'peter-and-son' ) ) as $badge ) {
		echo '<span>' . esc_html( $badge ) . '</span>';
	}
	echo '</div>';
}
