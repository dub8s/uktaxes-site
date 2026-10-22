<?php
/**
 * Site footer.
 *
 * @package peter-and-son
 */

$ps_phone  = ps_opt( 'phone' );
$ps_mobile = ps_opt( 'mobile' );
$ps_email  = ps_opt( 'email' );
$ps_insta  = ps_opt( 'instagram' );
?>
<footer class="ftr">
	<div class="wrap">
		<div class="grid">
			<div>
				<?php
				if ( ! ps_image( 'monogram', __( 'Peter and Son', 'peter-and-son' ), array( 'class' => 'monogram' ), false ) ) {
					printf( '<img class="monogram" src="%s" alt="%s" width="72" height="72" loading="lazy">', esc_url( get_template_directory_uri() . '/assets/img/favicon.png' ), esc_attr__( 'Peter and Son', 'peter-and-son' ) );
				}
				?>
				<p><?php esc_html_e( 'Family halal butchers. Premium halal meat, cut by hand and delivered fresh across London.', 'peter-and-son' ); ?></p>
			</div>
			<div class="col">
				<h4><?php esc_html_e( 'Contact', 'peter-and-son' ); ?></h4>
				<?php if ( $ps_phone ) : ?><a href="<?php echo esc_attr( ps_tel( $ps_phone ) ); ?>"><?php echo esc_html( $ps_phone ); ?></a><?php endif; ?>
				<?php if ( $ps_mobile ) : ?><a href="<?php echo esc_attr( ps_tel( $ps_mobile ) ); ?>"><?php echo esc_html( $ps_mobile ); ?></a><?php endif; ?>
				<?php if ( $ps_email ) : ?><a href="<?php echo esc_url( 'mailto:' . $ps_email ); ?>"><?php echo esc_html( $ps_email ); ?></a><?php endif; ?>
				<?php if ( $ps_insta ) : ?><a href="<?php echo esc_url( 'https://instagram.com/' . $ps_insta ); ?>" target="_blank" rel="noopener">@<?php echo esc_html( $ps_insta ); ?></a><?php endif; ?>
			</div>
			<div><?php ps_badges( 'badges-dark' ); ?></div>
		</div>
		<div class="legal">
			<span>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> Peter and Son Meat Deliveries</span>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'footer',
				'container'      => false,
				'items_wrap'     => '<span class="legal-links">%3$s</span>',
				'depth'          => 1,
				'fallback_cb'    => false,
				'walker'         => new class() extends Walker_Nav_Menu {
					public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
						$output .= '<a href="' . esc_url( $item->url ) . '">' . esc_html( $item->title ) . '</a>';
					}
					public function end_el( &$output, $item, $depth = 0, $args = null ) {}
				},
			) );
			?>
			<span><?php echo esc_html( ps_trading_address() ); ?></span>
		</div>
		<?php if ( ps_company_statement() ) : ?>
			<p class="company"><?php echo esc_html( ps_company_statement() ); ?></p>
		<?php endif; ?>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
