// lib/fpixel.ts

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID as string;

function fbq(...args: unknown[]): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args);
  }
}

export const initPixel = (): void => {
  fbq('init', pixelId);
};

export const pageview = (): void => {
  fbq('track', 'PageView');
};

export const trackEvent = (name: string, params: Record<string, unknown> = {}): void => {
  fbq('track', name, params);
};
