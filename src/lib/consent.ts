"use client";

export type ConsentState = "granted" | "denied";

const STORAGE_KEY = "cookie-consent";

/** Fired on window whenever the stored consent choice changes. */
const CONSENT_EVENT = "cookie-consent-change";

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setStoredConsent(state: ConsentState) {
  window.localStorage.setItem(STORAGE_KEY, state);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Clears the stored choice so the consent banner is shown again. */
export function clearStoredConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** For useSyncExternalStore: subscribes to same-tab and cross-tab consent changes. */
export function subscribeToConsent(callback: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
