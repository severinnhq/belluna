

export const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID as string;

// fire a raw fbq event
function fbq(...args: any[]) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq(...args);
  }
}

export const initPixel = () => {
  fbq('init', pixelId);
};

export const pageview = () => {
  fbq('track', 'PageView');
};

export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  fbq('track', name, params);
};
