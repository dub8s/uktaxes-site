<?php
/**
 * Fallback template for pages and posts (privacy policy, blog, etc.).
 * The landing page itself is templates/landing.php.
 *
 * @package peter-and-son
 */

get_header();
?>
<main id="main" class="page-body">
	<div class="wrap">
		<?php if ( is_singular() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article <?php post_class(); ?>>
					<h1><?php the_title(); ?></h1>
					<div class="entry-content"><?php the_content(); ?></div>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<h1><?php echo is_home() ? esc_html( single_post_title( '', false ) ? single_post_title( '', false ) : __( 'News', 'peter-and-son' ) ) : wp_kses_post( get_the_archive_title() ); ?></h1>
			<div class="post-list">
				<?php if ( have_posts() ) : ?>
					<?php while ( have_posts() ) : the_post(); ?>
						<article <?php post_class(); ?>>
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<div class="entry-content"><?php the_excerpt(); ?></div>
						</article>
					<?php endwhile; ?>
					<?php the_posts_pagination(); ?>
				<?php else : ?>
					<p><?php esc_html_e( 'Nothing here yet.', 'peter-and-son' ); ?></p>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	</div>
</main>
<?php
get_footer();
