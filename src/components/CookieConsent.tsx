"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { type ConsentState, getStoredConsent, setStoredConsent, subscribeToConsent } from "@/lib/consent";

function getServerSnapshot(): ConsentState | null {
  return null;
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, getStoredConsent, getServerSnapshot);

  if (consent !== null) return null;

  const choose = (state: ConsentState) => setStoredConsent(state);

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          We use essential cookies to run this site. With your permission, we&apos;d also like to
          use analytics cookies to understand how the site is used. They won&apos;t be set
          unless you accept. See our{" "}
          <Link href="/cookie-policy" className="text-primary hover:underline">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="secondary" className="flex-1 sm:flex-none" onClick={() => choose("denied")}>
            Reject non-essential
          </Button>
          <Button variant="dark" className="flex-1 sm:flex-none" onClick={() => choose("granted")}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
