"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { type ConsentState, getStoredConsent, subscribeToConsent } from "@/lib/consent";

// Falls back to the real property ID directly, since the Measurement ID isn't
// sensitive (it's publicly visible in every page's source once GA is running)
// and this avoids depending on the env var reaching the deployed build.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-8GYBDZF0E0";

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
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
