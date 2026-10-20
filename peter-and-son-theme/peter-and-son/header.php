<?php
/**
 * Site header: announcement bar, logo, section links and call button.
 *
 * @package peter-and-son
 */

$ps_phone = ps_opt( 'phone' );
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'peter-and-son' ); ?></a>

<header class="hdr">
	<?php if ( ps_opt( 'announcement' ) ) : ?>
		<div class="ann"><?php echo esc_html( ps_opt( 'announcement' ) ); ?></div>
	<?php endif; ?>
	<div class="wrap bar">
		<a class="home-link" href="<?php echo esc_url( is_front_page() ? '#top' : home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'Peter and Son home', 'peter-and-son' ); ?>">
			<?php if ( ! ps_image( 'logo', __( 'Peter and Son Meat Deliveries', 'peter-and-son' ), array( 'class' => 'logo', 'loading' => 'eager' ), false ) ) : ?>
				<span class="logo-text"><b class="ps-gold-text">PETER AND SON</b><span>meat deliveries</span></span>
			<?php endif; ?>
		</a>
		<nav aria-label="<?php esc_attr_e( 'Sections', 'peter-and-son' ); ?>">
			<a href="<?php echo esc_url( ps_anchor( 'how' ) ); ?>"><?php esc_html_e( 'How it works', 'peter-and-son' ); ?></a>
			<a href="<?php echo esc_url( ps_anchor( 'peter' ) ); ?>"><?php esc_html_e( 'About', 'peter-and-son' ); ?></a>
			<a href="<?php echo esc_url( ps_anchor( 'kitchens' ) ); ?>"><?php esc_html_e( 'Our kitchens', 'peter-and-son' ); ?></a>
			<a href="<?php echo esc_url( ps_anchor( 'contact' ) ); ?>"><?php esc_html_e( 'Contact', 'peter-and-son' ); ?></a>
		</nav>
		<?php if ( $ps_phone ) : ?>
			<div class="callbtn"><a class="btn btn-on-dark btn-sm" href="<?php echo esc_attr( ps_tel( $ps_phone ) ); ?>"><?php echo ps_icon( 'phone' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php echo esc_html( $ps_phone ); ?></a></div>
		<?php endif; ?>
	</div>
</header>
