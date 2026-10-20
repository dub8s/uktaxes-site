<?php
/**
 * Not found.
 *
 * @package peter-and-son
 */

get_header();
?>
<main id="main" class="page-body">
	<div class="wrap">
		<h1><?php esc_html_e( 'Page not found', 'peter-and-son' ); ?></h1>
		<p class="entry-content"><?php esc_html_e( 'Sorry, that page doesn’t exist.', 'peter-and-son' ); ?></p>
		<p><a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back to the home page', 'peter-and-son' ); ?></a></p>
	</div>
</main>
<?php
get_footer();
