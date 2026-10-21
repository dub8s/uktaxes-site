=== Peter and Son ===

One-page landing theme for Peter and Son Meat Deliveries, rebuilt from the
Claude Design mock-up as a normal WordPress theme (no React, no page builder).

== Install ==
1. WordPress admin → Appearance → Themes → Add New Theme → Upload Theme.
2. Choose peter-and-son.zip, Install, then Activate.
3. Click "Set up pages" in the blue notice at the top of the admin. This:
   - creates a "Home" page using the Landing page template and makes it the homepage
     (Settings → Reading);
   - publishes a Privacy Policy, Cookie Policy and Terms of Use with your company
     details (it replaces WordPress's unpublished sample privacy policy, but never
     changes pages you've already published);
   - adds those three pages to the footer menu;
   - switches permalinks to "Post name" (/privacy-policy/) if they were still "Plain".

== SEO ==
Every page has a "Search appearance (SEO)" box under the editor for the title shown in
Google and the meta description. The Home page comes filled in. The theme also adds
social sharing tags (the preview shown when the link is shared). If you install Yoast,
Rank Math, SEOPress or All in One SEO, the theme's box switches off and the plugin
takes over.

== Company & legal details ==
Appearance → Customize → Peter and Son → Company & legal details. Pre-filled from
Companies House (company 14727788). Add your VAT number and ICO registration number if
you have them; blank fields are left out. These details appear in the footer and on the
legal pages automatically.

== Photos and logos ==
The original photos and logos from the Claude Design project are bundled in
assets/img/, so the page looks complete as soon as the theme is activated.

To swap any of them: Appearance → Customize → Peter and Son → Photos. An image
chosen there replaces the bundled one; clear it to go back to the bundled file.
You can also overwrite a file in assets/img/ with one of the same name.

== Contact details ==
Appearance → Customize → Peter and Son → Contact details: phones, email,
Instagram, address, Google Maps link, rating and review count, announcement
bar text, and the address enquiries are emailed to.

== Enquiry form ==
Every "Request a price list" submission is saved under Enquiries in the
admin menu AND emailed. Many hosts can't send email from a fresh WordPress
install; if the emails don't arrive, install an SMTP plugin (e.g. WP Mail
SMTP). Enquiries are still saved in the admin either way.

== Editing the text ==
Headings, reviews and opening hours live in templates/landing.php. The legal pages
are normal WordPress pages: edit them in Pages like any other.
