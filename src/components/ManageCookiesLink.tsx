"use client";

import { clearStoredConsent } from "@/lib/consent";

export default function ManageCookiesLink() {
  return (
    <button
      type="button"
      onClick={() => clearStoredConsent()}
      className="rounded-sm text-left text-xs text-muted transition-colors underline-offset-2 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      Manage cookie preferences
    </button>
  );
}
