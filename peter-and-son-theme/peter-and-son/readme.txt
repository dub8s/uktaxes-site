=== Peter and Son ===

One-page landing theme for Peter and Son Meat Deliveries, rebuilt from the
Claude Design mock-up as a normal WordPress theme (no React, no page builder).

== Install ==
1. WordPress admin → Appearance → Themes → Add New Theme → Upload Theme.
2. Choose peter-and-son.zip, Install, then Activate.
3. Visit the site: the landing page is the home page straight away
   (front-page.php is used whatever "Your homepage displays" is set to).

== Add your photos and logos ==
Appearance → Customize → Peter and Son → Photos. Each slot (hero, the three
steps, Peter's portrait, the Savoy photo, five gallery photos, header
wordmark, watermark, trust badges, footer monogram) shows a dark placeholder
until you pick an image.

Alternative: copy the original files from the Claude Design project into
assets/img/ with their original names (cut-ribeye.jpg, peter.jpg,
wordmark-gold.png, trust-badges.png ...). See inc/customizer.php for the list.

== Contact details ==
Appearance → Customize → Peter and Son → Contact details: phones, email,
Instagram, address, Google Maps link, rating and review count, announcement
bar text, and the address enquiries are emailed to.

== Enquiry form ==
Every "Request a price list" submission is saved under Enquiries in the
admin menu AND emailed. Many hosts can't send email from a fresh WordPress
install; if the emails don't arrive, install an SMTP plugin (e.g. WP Mail
SMTP). Enquiries are still saved in the admin either way.

== Footer links ==
Appearance → Menus: create a menu (e.g. Privacy policy) and assign it to
"Footer links". Other pages (privacy policy etc.) use the same header/footer.

== Editing the text ==
Headings, reviews and opening hours live in front-page.php.
