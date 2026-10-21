<?php
/**
 * Template Name: Landing page
 *
 * The one-page Peter and Son landing page. Assigned to the "Home" page, which
 * is set as the site's homepage by Appearance → Set up pages.
 *
 * @package peter-and-son
 */

get_header();

$ps_phone    = ps_opt( 'phone' );
$ps_mobile   = ps_opt( 'mobile' );
$ps_email    = ps_opt( 'email' );
$ps_insta    = ps_opt( 'instagram' );
$ps_maps     = ps_opt( 'maps_url' );
$ps_rating   = ps_opt( 'rating' );
$ps_reviews  = ps_opt( 'review_count' );
$ps_plain    = 'none' === ps_opt( 'hero_style' );
?>
<main id="main">

<section class="hero<?php echo $ps_plain ? ' hero--plain' : ''; ?>" id="top">
	<?php ps_image( 'watermark', '', array( 'class' => 'wm', 'loading' => 'eager' ), false ); ?>
	<div class="hero-copy">
		<h1>
			<span class="over on-dark"><?php esc_html_e( 'Meat supplier to London kitchens', 'peter-and-son' ); ?></span>
			<span class="h1-main ps-gold-text"><?php esc_html_e( 'PRIME CUTS, DELIVERED.', 'peter-and-son' ); ?></span>
		</h1>
		<p class="lede"><?php esc_html_e( 'Family butchers in Waltham Cross. We cut premium beef and lamb by hand and deliver it fresh to restaurants, hotels and caterers across London. Trusted by top chefs for over twenty years.', 'peter-and-son' ); ?></p>
		<div class="ctas">
			<?php if ( $ps_phone ) : ?>
				<a class="btn btn-gold btn-lg" href="<?php echo esc_attr( ps_tel( $ps_phone ) ); ?>"><?php echo ps_icon( 'phone' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php echo esc_html( sprintf( /* translators: %s: phone number */ __( 'Call %s', 'peter-and-son' ), $ps_phone ) ); ?></a>
			<?php endif; ?>
			<?php if ( $ps_email ) : ?>
				<a class="btn btn-on-dark btn-lg" href="<?php echo esc_url( 'mailto:' . $ps_email . '?subject=' . rawurlencode( __( 'Price list request', 'peter-and-son' ) ) ); ?>"><?php echo ps_icon( 'mail' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php esc_html_e( 'Email us', 'peter-and-son' ); ?></a>
			<?php endif; ?>
		</div>
		<div class="rating"><a href="#reviews">
			<?php ps_stars(); ?>
			<span><b><?php echo esc_html( $ps_rating ); ?></b> <?php echo esc_html( sprintf( /* translators: %s: number of reviews */ __( 'from %s Google reviews', 'peter-and-son' ), $ps_reviews ) ); ?></span>
		</a></div>
	</div>
	<?php if ( ! $ps_plain ) : ?>
		<figure class="hero-img">
			<?php ps_image( 'hero', __( 'The Peter and Son team loading an order into a refrigerated van', 'peter-and-son' ), array( 'loading' => 'eager', 'fetchpriority' => 'high' ) ); ?>
		</figure>
	<?php endif; ?>
</section>

<section class="sec" id="how">
	<div class="wrap">
		<div class="sec-head">
			<div>
				<p class="over"><?php esc_html_e( 'How it works', 'peter-and-son' ); ?></p>
				<h2 class="h2"><?php echo wp_kses( __( 'From our block<br>to your kitchen', 'peter-and-son' ), array( 'br' => array() ) ); ?></h2>
			</div>
			<p class="lede" style="margin:0;max-width:420px"><?php esc_html_e( 'Tell us what you need. We cut it, chill it and bring it to you — on time, every time.', 'peter-and-son' ); ?></p>
		</div>
		<div class="steps">
			<?php
			$ps_steps = array(
				array( 'step1', __( 'Cut to your spec', 'peter-and-son' ), __( 'Every order is prepared by hand at our unit — the cut, the trim and the weight you ask for.', 'peter-and-son' ), __( 'Bone-in sirloin on the block', 'peter-and-son' ) ),
				array( 'step2', __( 'Packed cold', 'peter-and-son' ), __( 'Boxed and loaded straight into our refrigerated vans, so the cold chain never breaks.', 'peter-and-son' ), $ps_plain ? __( 'Loading the refrigerated van', 'peter-and-son' ) : __( 'Unboxing a case of grass-fed beef', 'peter-and-son' ) ),
				array( 'step3', __( 'At your door by morning', 'peter-and-son' ), __( 'Drops start at 4am across London, so the meat is in your fridge before prep begins.', 'peter-and-son' ), __( 'Two Peter and Son vans in central London', 'peter-and-son' ) ),
			);
			foreach ( $ps_steps as $ps_i => $ps_step ) :
				?>
				<article class="step">
					<div class="ph"><?php ps_image( $ps_step[0], $ps_step[3] ); ?></div>
					<div class="body"><span class="n"><?php echo (int) $ps_i + 1; ?></span><h3><?php echo esc_html( $ps_step[1] ); ?></h3><p><?php echo esc_html( $ps_step[2] ); ?></p></div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="sec peter" id="peter">
	<div class="wrap grid">
		<figure class="portrait"><?php ps_image( 'peter', __( 'Peter, owner of Peter and Son, in front of the delivery van', 'peter-and-son' ) ); ?></figure>
		<div>
			<p class="over"><?php esc_html_e( 'The name on the van', 'peter-and-son' ); ?></p>
			<h2 class="h2"><?php esc_html_e( 'Meet Peter', 'peter-and-son' ); ?></h2>
			<p class="lede"><?php esc_html_e( 'Peter has spent more than twenty years in the meat trade. Peter and Son is his family business — a small team that knows every cut, every customer and every early-morning drop.', 'peter-and-son' ); ?></p>
			<blockquote><?php esc_html_e( '“If it isn’t good enough for my own table, it doesn’t go on the van.”', 'peter-and-son' ); ?></blockquote>
			<div class="sig">
				<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/favicon.png' ); ?>" alt="" width="44" height="44" loading="lazy">
				<div><b><?php esc_html_e( 'Peter', 'peter-and-son' ); ?></b><span><?php esc_html_e( 'Owner, Peter and Son', 'peter-and-son' ); ?></span></div>
			</div>
			<div class="facts">
				<?php foreach ( array( __( 'Family business', 'peter-and-son' ), __( 'Custom orders', 'peter-and-son' ), __( 'HACCP certified', 'peter-and-son' ), __( 'Halal certified', 'peter-and-son' ) ) as $ps_fact ) : ?>
					<span class="ps-tag"><?php echo esc_html( $ps_fact ); ?></span>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section class="sec trusted dark" id="kitchens">
	<div class="wrap grid">
		<figure class="photo">
			<?php ps_image( 'savoy', __( 'Two Peter and Son vans at the entrance of The Savoy', 'peter-and-son' ) ); ?>
			<figcaption class="cap"><?php esc_html_e( 'Morning drop · The Savoy, Strand', 'peter-and-son' ); ?></figcaption>
		</figure>
		<div>
			<p class="over"><?php esc_html_e( 'Trusted by top chefs', 'peter-and-son' ); ?></p>
			<h2 class="h2"><?php esc_html_e( 'Supplying London’s finest kitchens', 'peter-and-son' ); ?></h2>
			<p class="lede"><?php esc_html_e( 'From landmark hotels to neighbourhood restaurants, chefs rely on us for consistent quality and deliveries that arrive when we say they will.', 'peter-and-son' ); ?></p>
			<div class="stats">
				<div><strong class="ps-gold-text">20+</strong><span><?php esc_html_e( 'Years in the trade', 'peter-and-son' ); ?></span></div>
				<div><strong class="ps-gold-text"><?php echo esc_html( $ps_rating ); ?></strong><span><?php esc_html_e( 'Google rating', 'peter-and-son' ); ?></span></div>
				<div><strong class="ps-gold-text">4am</strong><span><?php esc_html_e( 'First drops', 'peter-and-son' ); ?></span></div>
			</div>
		</div>
	</div>
</section>

<section class="sec reviews" id="reviews">
	<div class="wrap">
		<div class="sec-head">
			<div>
				<p class="over"><?php echo esc_html( sprintf( /* translators: 1: rating, 2: number of reviews */ __( '%1$s from %2$s Google reviews', 'peter-and-son' ), $ps_rating, $ps_reviews ) ); ?></p>
				<h2 class="h2"><?php esc_html_e( 'What chefs say', 'peter-and-son' ); ?></h2>
			</div>
			<?php ps_stars(); ?>
		</div>
		<div class="feature">
			<blockquote><?php esc_html_e( '“Top quality meat. Since we moved to Peter and Son, we never have issues. They understand who we are as a business — and Peter has become a good friend.”', 'peter-and-son' ); ?></blockquote>
			<div class="who"><b>Jon C.</b><span><?php esc_html_e( 'Executive Head Chef', 'peter-and-son' ); ?><br>Wolfox, Savoy Court</span></div>
		</div>
		<div class="rv">
			<?php
			$ps_list = array(
				array( __( 'I’ve worked with Peter across various restaurants. Whether it was meeting tight deadlines or finding creative solutions for specific needs, he never failed to deliver.', 'peter-and-son' ), 'Andreas K.', __( 'Restaurateur', 'peter-and-son' ) ),
				array( __( 'We’ve been using these guys for our burgers for some time now. Excellent on both product quality and customer service. Highly recommended.', 'peter-and-son' ), 'The Finsbury Pub', __( 'Pub kitchen', 'peter-and-son' ) ),
				array( __( 'Peter is a gentleman and always there to support our business, no matter the day or time of night.', 'peter-and-son' ), 'Jamil T.', __( 'Trade customer', 'peter-and-son' ) ),
				array( __( 'Excellent quality — especially the Australian wagyu and lumina lamb. Mr Peter is friendly and always available when you call.', 'peter-and-son' ), 'Ronald M.', __( 'Chef, Wolfox Savoy', 'peter-and-son' ) ),
				array( __( 'Always top-level service from Peter and his team. The meat arrives at the highest standard, which makes my life much easier on prep and quality.', 'peter-and-son' ), 'U. I.', __( 'Chef', 'peter-and-son' ) ),
				array( __( 'We were delighted with the quick delivery and friendly communication, but mostly with the fantastic quality of the meat. We’re hooked.', 'peter-and-son' ), 'Nikita Z.', __( 'Private dinner order', 'peter-and-son' ) ),
			);
			foreach ( $ps_list as $ps_r ) :
				?>
				<article>
					<?php ps_stars(); ?>
					<p>“<?php echo esc_html( $ps_r[0] ); ?>”</p>
					<div class="who"><b><?php echo esc_html( $ps_r[1] ); ?></b><span><?php echo esc_html( $ps_r[2] ); ?></span></div>
				</article>
			<?php endforeach; ?>
		</div>
		<div class="rv-foot">
			<span class="src"><?php esc_html_e( 'Taken from verified Google reviews. Names shortened for privacy.', 'peter-and-son' ); ?></span>
			<?php if ( $ps_maps ) : ?>
				<a class="btn btn-ghost btn-sm" href="<?php echo esc_url( $ps_maps ); ?>" target="_blank" rel="noopener"><?php esc_html_e( 'Read all on Google', 'peter-and-son' ); ?><?php echo ps_icon( 'arrow-right' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a>
			<?php endif; ?>
		</div>
	</div>
</section>

<section class="sec">
	<div class="wrap">
		<p class="over"><?php esc_html_e( 'On the block, on the road', 'peter-and-son' ); ?></p>
		<h2 class="h2"><?php echo wp_kses( __( 'The people behind<br>every delivery', 'peter-and-son' ), array( 'br' => array() ) ); ?></h2>
		<div class="gal">
			<figure class="big"><?php ps_image( 'gallery1', __( 'Peter and the Peter and Son team', 'peter-and-son' ) ); ?><figcaption class="cap"><?php esc_html_e( 'The team · Waltham Cross', 'peter-and-son' ); ?></figcaption></figure>
			<figure><?php ps_image( 'gallery2', $ps_plain ? __( 'Unboxing a case of grass-fed beef', 'peter-and-son' ) : __( 'Ribeye being cut by hand on a wooden block', 'peter-and-son' ) ); ?></figure>
			<figure><?php ps_image( 'gallery3', __( 'Peter and Son unit sign and van', 'peter-and-son' ) ); ?></figure>
			<figure><?php ps_image( 'gallery4', __( 'Ribeye on the block', 'peter-and-son' ) ); ?></figure>
			<figure><?php ps_image( 'gallery5', __( 'Side of a Peter and Son van', 'peter-and-son' ) ); ?></figure>
		</div>
	</div>
</section>

<section class="sec contact" id="contact">
	<div class="wrap grid">
		<div>
			<p class="over"><?php esc_html_e( 'Custom orders', 'peter-and-son' ); ?></p>
			<h2 class="h2"><?php esc_html_e( 'Tell us what you need', 'peter-and-son' ); ?></h2>
			<p class="lede"><?php esc_html_e( 'Tailored orders for restaurants, hotels and caterers. Call or email us with your list and we’ll come back with a price.', 'peter-and-son' ); ?></p>
			<div class="info">
				<div><h4><?php esc_html_e( 'Find us', 'peter-and-son' ); ?></h4>
					<p class="addr"><?php echo esc_html( ps_opt( 'address_1' ) ); ?><br><?php echo esc_html( ps_opt( 'address_2' ) ); ?></p>
					<?php if ( $ps_maps ) : ?>
						<a class="btn btn-secondary btn-sm" href="<?php echo esc_url( $ps_maps ); ?>" target="_blank" rel="noopener"><?php echo ps_icon( 'map-pin' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php esc_html_e( 'Get directions', 'peter-and-son' ); ?></a>
					<?php endif; ?>
				</div>
				<div><h4><?php esc_html_e( 'Opening hours', 'peter-and-son' ); ?></h4>
					<table class="hours"><tbody>
						<?php
						$ps_hours = array(
							__( 'Monday', 'peter-and-son' )    => '04:00–12:00',
							__( 'Tuesday', 'peter-and-son' )   => '',
							__( 'Wednesday', 'peter-and-son' ) => '04:00–12:00',
							__( 'Thursday', 'peter-and-son' )  => '04:00–12:00',
							__( 'Friday', 'peter-and-son' )    => '04:00–12:00',
							__( 'Saturday', 'peter-and-son' )  => '04:00–12:00',
							__( 'Sunday', 'peter-and-son' )    => '',
						);
						foreach ( $ps_hours as $ps_day => $ps_time ) :
							?>
							<tr<?php echo $ps_time ? '' : ' class="off"'; ?>><td><?php echo esc_html( $ps_day ); ?></td><td><?php echo $ps_time ? esc_html( $ps_time ) : esc_html__( 'Closed', 'peter-and-son' ); ?></td></tr>
						<?php endforeach; ?>
					</tbody></table>
				</div>
			</div>
		</div>

		<div class="callcard">
			<h3><?php esc_html_e( 'Get a price list', 'peter-and-son' ); ?></h3>
			<p class="sub"><?php esc_html_e( 'Call the team, or email us your list and we’ll come back with a price.', 'peter-and-son' ); ?></p>
			<?php if ( $ps_phone ) : ?>
				<a class="callrow callrow-main" href="<?php echo esc_attr( ps_tel( $ps_phone ) ); ?>">
					<?php echo ps_icon( 'phone' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<span><small><?php esc_html_e( 'Call us', 'peter-and-son' ); ?></small><b class="mono"><?php echo esc_html( $ps_phone ); ?></b></span>
				</a>
			<?php endif; ?>
			<?php if ( $ps_mobile ) : ?>
				<a class="callrow" href="<?php echo esc_attr( ps_tel( $ps_mobile ) ); ?>">
					<?php echo ps_icon( 'smartphone' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<span><small><?php esc_html_e( 'Mobile', 'peter-and-son' ); ?></small><b class="mono"><?php echo esc_html( $ps_mobile ); ?></b></span>
				</a>
			<?php endif; ?>
			<?php if ( $ps_email ) : ?>
				<a class="callrow" href="<?php echo esc_url( 'mailto:' . $ps_email . '?subject=' . rawurlencode( __( 'Price list request', 'peter-and-son' ) ) ); ?>">
					<?php echo ps_icon( 'mail' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<span><small><?php esc_html_e( 'Email', 'peter-and-son' ); ?></small><b><?php echo esc_html( $ps_email ); ?></b></span>
				</a>
			<?php endif; ?>
			<?php if ( $ps_insta ) : ?>
				<a class="callrow" href="<?php echo esc_url( 'https://instagram.com/' . $ps_insta ); ?>" target="_blank" rel="noopener">
					<?php echo ps_icon( 'instagram' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					<span><small><?php esc_html_e( 'Instagram', 'peter-and-son' ); ?></small><b>@<?php echo esc_html( $ps_insta ); ?></b></span>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>

</main>
<?php
get_footer();
