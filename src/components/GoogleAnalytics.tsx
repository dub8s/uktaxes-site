"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { type ConsentState, getStoredConsent, subscribeToConsent } from "@/lib/consent";

// TODO: set NEXT_PUBLIC_GA_MEASUREMENT_ID in the deployment environment once a real
// Google Analytics 4 property exists. Until then this component renders nothing.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function getServerSnapshot(): ConsentState | null {
  return null;
}

/**
 * Loads Google Analytics only once the visitor has accepted analytics cookies
 * (see CookieConsent.tsx). Nothing is requested from Google before that.
 */
export default function GoogleAnalytics() {
  const consent = useSyncExternalStore(subscribeToConsent, getStoredConsent, getServerSnapshot);

  if (!GA_MEASUREMENT_ID || consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
