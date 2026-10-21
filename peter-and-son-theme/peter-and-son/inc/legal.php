<?php
/**
 * Company details for the legal pages and footer.
 *
 * The legal pages use shortcodes rather than typed-in details, so changing a
 * phone number or adding a VAT number in the Customizer updates every page.
 *
 * @package peter-and-son
 */

defined( 'ABSPATH' ) || exit;

/** Trading address on one line. */
function ps_trading_address() {
	return trim( ps_opt( 'address_1' ) . ', ' . ps_opt( 'address_2' ), ', ' );
}

/**
 * [ps_info key="..."] prints one company detail.
 * Keys: legal_name, company_number, registered_in, registered_office,
 * vat_number, ico_number, address, phone, mobile, email.
 */
add_shortcode( 'ps_info', function ( $atts ) {
	$key = isset( $atts['key'] ) ? sanitize_key( $atts['key'] ) : '';
	if ( 'address' === $key ) {
		return esc_html( ps_trading_address() );
	}
	$value = ps_opt( $key );
	if ( 'email' === $key && $value ) {
		return sprintf( '<a href="%1$s">%2$s</a>', esc_url( 'mailto:' . $value ), esc_html( $value ) );
	}
	if ( in_array( $key, array( 'phone', 'mobile' ), true ) && $value ) {
		return sprintf( '<a href="%1$s">%2$s</a>', esc_attr( ps_tel( $value ) ), esc_html( $value ) );
	}
	return esc_html( $value );
} );

/** [ps_company_details] prints the full list of company and contact details, skipping blanks. */
add_shortcode( 'ps_company_details', function () {
	$rows = array(
		__( 'Company name', 'peter-and-son' )      => esc_html( ps_opt( 'legal_name' ) ),
		__( 'Trading as', 'peter-and-son' )        => esc_html__( 'Peter and Son Meat Deliveries', 'peter-and-son' ),
		__( 'Registered in', 'peter-and-son' )     => esc_html( ps_opt( 'registered_in' ) ),
		__( 'Company number', 'peter-and-son' )    => esc_html( ps_opt( 'company_number' ) ),
		__( 'Registered office', 'peter-and-son' ) => esc_html( ps_opt( 'registered_office' ) ),
		__( 'Trading address', 'peter-and-son' )   => esc_html( ps_trading_address() ),
		__( 'VAT number', 'peter-and-son' )        => esc_html( ps_opt( 'vat_number' ) ),
		__( 'ICO registration', 'peter-and-son' )  => esc_html( ps_opt( 'ico_number' ) ),
		__( 'Phone', 'peter-and-son' )             => do_shortcode( '[ps_info key="phone"]' ),
		__( 'Mobile', 'peter-and-son' )            => do_shortcode( '[ps_info key="mobile"]' ),
		__( 'Email', 'peter-and-son' )             => do_shortcode( '[ps_info key="email"]' ),
	);
	$html = '<table class="ps-details"><tbody>';
	foreach ( $rows as $label => $value ) {
		if ( '' !== $value ) {
			$html .= '<tr><th scope="row">' . esc_html( $label ) . '</th><td>' . $value . '</td></tr>';
		}
	}
	return $html . '</tbody></table>';
} );

/**
 * Footer statement required of limited companies on their websites
 * (Company, LLP and Business (Names and Trading Disclosures) Regulations 2015).
 */
function ps_company_statement() {
	$parts = array();
	if ( ps_opt( 'legal_name' ) ) {
		$parts[] = ps_opt( 'legal_name' );
	}
	if ( ps_opt( 'company_number' ) ) {
		$parts[] = ps_opt( 'registered_in' )
			/* translators: 1: place of registration, 2: company number */
			? sprintf( __( 'Registered in %1$s, company no. %2$s', 'peter-and-son' ), ps_opt( 'registered_in' ), ps_opt( 'company_number' ) )
			/* translators: %s: company number */
			: sprintf( __( 'Company no. %s', 'peter-and-son' ), ps_opt( 'company_number' ) );
	}
	if ( ps_opt( 'registered_office' ) ) {
		/* translators: %s: registered office address */
		$parts[] = sprintf( __( 'Registered office: %s', 'peter-and-son' ), ps_opt( 'registered_office' ) );
	}
	if ( ps_opt( 'vat_number' ) ) {
		/* translators: %s: VAT number */
		$parts[] = sprintf( __( 'VAT no. %s', 'peter-and-son' ), ps_opt( 'vat_number' ) );
	}
	return implode( ' · ', $parts );
}
