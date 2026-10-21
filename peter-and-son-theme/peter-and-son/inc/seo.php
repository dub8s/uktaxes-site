<?php
/**
 * Basic SEO: a "Search appearance" box on pages for the title and meta
 * description, plus social sharing tags. Steps aside automatically when an
 * SEO plugin (Yoast, Rank Math, SEOPress, All in One SEO) is active.
 *
 * @package peter-and-son
 */

defined( 'ABSPATH' ) || exit;

/** Whether a dedicated SEO plugin is handling titles and meta tags. */
function ps_seo_plugin_active() {
	return defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' ) || defined( 'SEOPRESS_VERSION' ) || defined( 'AIOSEO_VERSION' );
}

/** SEO title and description for the current page, falling back to sensible defaults. */
function ps_seo_data() {
	$post_id = is_singular() ? get_queried_object_id() : 0;
	$title   = $post_id ? get_post_meta( $post_id, '_ps_seo_title', true ) : '';
	$desc    = $post_id ? get_post_meta( $post_id, '_ps_seo_description', true ) : '';

	if ( '' === $desc && $post_id && has_excerpt( $post_id ) ) {
		$desc = get_the_excerpt( $post_id );
	}
	if ( '' === $desc && ( is_front_page() || ps_is_landing() ) ) {
		$desc = get_bloginfo( 'description' );
	}
	return array(
		'title'       => $title,
		'description' => wp_strip_all_tags( $desc ),
	);
}

add_filter( 'pre_get_document_title', function ( $title ) {
	if ( ps_seo_plugin_active() ) {
		return $title;
	}
	$seo = ps_seo_data();
	return '' !== $seo['title'] ? esc_html( $seo['title'] ) : $title;
} );

add_action( 'wp_head', function () {
	if ( ps_seo_plugin_active() ) {
		return;
	}
	$seo   = ps_seo_data();
	$title = wp_get_document_title();
	$url   = is_front_page() ? home_url( '/' ) : ( is_singular() ? get_permalink() : '' );
	$image = '';
	$id    = (int) get_theme_mod( 'ps_img_hero' );
	if ( $id && wp_attachment_is_image( $id ) ) {
		$image = wp_get_attachment_image_url( $id, 'large' );
	} elseif ( file_exists( get_template_directory() . '/assets/img/' . ps_image_slots()['hero']['file'] ) ) {
		$image = get_template_directory_uri() . '/assets/img/' . ps_image_slots()['hero']['file'];
	}

	if ( '' !== $seo['description'] ) {
		printf( '<meta name="description" content="%s">' . "\n", esc_attr( $seo['description'] ) );
	}
	printf( '<meta property="og:locale" content="en_GB">' . "\n" );
	printf( '<meta property="og:type" content="%s">' . "\n", is_front_page() ? 'website' : 'article' );
	printf( '<meta property="og:site_name" content="%s">' . "\n", esc_attr( get_bloginfo( 'name' ) ) );
	printf( '<meta property="og:title" content="%s">' . "\n", esc_attr( $title ) );
	if ( $url ) {
		printf( '<meta property="og:url" content="%s">' . "\n", esc_url( $url ) );
	}
	if ( '' !== $seo['description'] ) {
		printf( '<meta property="og:description" content="%s">' . "\n", esc_attr( $seo['description'] ) );
	}
	if ( $image ) {
		printf( '<meta property="og:image" content="%s">' . "\n", esc_url( $image ) );
		echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
	}
}, 2 );

// The "Search appearance" box on the page editor.
add_action( 'add_meta_boxes_page', function () {
	if ( ps_seo_plugin_active() ) {
		return;
	}
	add_meta_box( 'ps_seo', __( 'Search appearance (SEO)', 'peter-and-son' ), function ( $post ) {
		wp_nonce_field( 'ps_seo_save', 'ps_seo_nonce' );
		$title = get_post_meta( $post->ID, '_ps_seo_title', true );
		$desc  = get_post_meta( $post->ID, '_ps_seo_description', true );
		?>
		<p>
			<label for="ps_seo_title"><strong><?php esc_html_e( 'SEO title', 'peter-and-son' ); ?></strong></label><br>
			<input type="text" id="ps_seo_title" name="ps_seo_title" value="<?php echo esc_attr( $title ); ?>" class="widefat" maxlength="120">
			<span class="description"><?php esc_html_e( 'Shown as the blue link in Google. Aim for 50–60 characters. Leave blank to use the page title.', 'peter-and-son' ); ?></span>
		</p>
		<p>
			<label for="ps_seo_description"><strong><?php esc_html_e( 'Meta description', 'peter-and-son' ); ?></strong></label><br>
			<textarea id="ps_seo_description" name="ps_seo_description" class="widefat" rows="3" maxlength="320"><?php echo esc_textarea( $desc ); ?></textarea>
			<span class="description"><?php esc_html_e( 'The snippet under the link in Google. Aim for 120–155 characters.', 'peter-and-son' ); ?></span>
		</p>
		<?php
	}, 'page', 'normal', 'high' );
} );

add_action( 'save_post_page', function ( $post_id ) {
	if ( ! isset( $_POST['ps_seo_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['ps_seo_nonce'] ), 'ps_seo_save' ) ) {
		return;
	}
	if ( ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) || ! current_user_can( 'edit_page', $post_id ) ) {
		return;
	}
	update_post_meta( $post_id, '_ps_seo_title', sanitize_text_field( wp_unslash( isset( $_POST['ps_seo_title'] ) ? $_POST['ps_seo_title'] : '' ) ) );
	update_post_meta( $post_id, '_ps_seo_description', sanitize_textarea_field( wp_unslash( isset( $_POST['ps_seo_description'] ) ? $_POST['ps_seo_description'] : '' ) ) );
} );

// Tell editors of the Home page where its content actually lives.
add_action( 'enqueue_block_editor_assets', function () {
	$post_id = isset( $_GET['post'] ) ? (int) $_GET['post'] : 0; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only.
	if ( ! $post_id || 'templates/landing.php' !== get_page_template_slug( $post_id ) ) {
		return;
	}
	$message = __( 'This page uses the Landing page template, so text typed here is not shown. Change photos and contact details in Appearance → Customize → Peter and Son, and the SEO title and description in the "Search appearance" box below.', 'peter-and-son' );
	wp_add_inline_script(
		'wp-notices',
		sprintf( 'wp.domReady(function(){wp.data.dispatch("core/notices").createNotice("info",%s,{isDismissible:true});});', wp_json_encode( $message ) ),
		'after'
	);
} );
