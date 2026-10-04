declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export type TrackingEventName =
  | 'phone_click'
  | 'whatsapp_click'
  | 'quote_request'
  | 'form_submit'
  | 'service_click'
  | 'scroll_90'
  | 'contact_click';

export const trackEvent = (
  eventName: TrackingEventName,
  parameters: Record<string, unknown> = {}
) => {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    city: 'Dhaka',
    country: 'Bangladesh',
    ...parameters,
  };

  // Push to Google Tag Manager / Google Analytics 4 dataLayer if present
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    // Also dispatch a custom event for any in-app listeners
    try {
      window.dispatchEvent(
        new CustomEvent('analytics_event', { detail: payload })
      );
    } catch {
      // ignore
    }
  }

  // Safe developer feedback in console without UI spam
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug(`[Analytics Tracked] ${eventName}:`, payload);
  }
};

/**
 * Initializes a 90% scroll listener to fire scroll_90 conversion event
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return () => {};

  let fired = false;

  const handleScroll = () => {
    if (fired) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight > 0 && (scrollTop / docHeight) >= 0.9) {
      fired = true;
      trackEvent('scroll_90', { scroll_percentage: 90 });
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};
