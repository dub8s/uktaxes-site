import type { Metadata } from "next";
import type { Calculator } from "./calculators";
import type { BlogPost } from "./blog";

export const SITE_URL = "https://uktaxes.co.uk";
export const SITE_NAME = "uktaxes.co.uk";

export function calculatorMetadata(calculator: Calculator): Metadata {
  const url = `${SITE_URL}/${calculator.slug}`;

  return {
    title: calculator.h1,
    description: calculator.description,
    alternates: { canonical: url },
    openGraph: {
      title: calculator.h1,
      description: calculator.description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: calculator.h1,
      description: calculator.description,
    },
  };
}

export function blogPostMetadata(post: BlogPost): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

/**
 * FAQPage + WebApplication + BreadcrumbList in one JSON-LD graph, per
 * https://nextjs.org/docs/app/guides/json-ld.
 */
export function calculatorJsonLd(calculator: Calculator) {
  const url = `${SITE_URL}/${calculator.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: calculator.name,
        url,
        description: calculator.description,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: calculator.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: calculator.name, item: url },
        ],
      },
    ],
  };
}

export function blogPostJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  const blogPosting = {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  if (!post.faqs || post.faqs.length === 0) {
    return { "@context": "https://schema.org", ...blogPosting };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      blogPosting,
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
