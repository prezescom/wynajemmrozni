// Google Analytics integration for wynajemmrozni.pl landing page
// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag with send_page_view disabled to prevent duplicates
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      send_page_view: false
    });
  `;
  document.head.appendChild(script2);

  // Send initial page view manually
  setTimeout(() => {
    trackPageView(window.location.pathname);
  }, 100);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('event', 'page_view', {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title
  });
};

// Track outbound clicks with reliable delivery
export const trackOutboundClick = (
  url: string,
  linkText: string,
  section: string,
  callback?: () => void
) => {
  if (typeof window === 'undefined' || !window.gtag) {
    callback && callback();
    return;
  }

  window.gtag('event', 'cta_click', {
    link_url: url,
    link_text: linkText,
    section: section,
    transport_type: 'beacon',
    event_callback: callback
  });

  // Fallback timeout in case event_callback doesn't fire
  setTimeout(() => {
    callback && callback();
  }, 200);
};

// Track contact clicks with reliable delivery
export const trackContactClick = (
  contactType: 'phone' | 'email',
  url: string,
  callback?: () => void
) => {
  if (typeof window === 'undefined' || !window.gtag) {
    callback && callback();
    return;
  }

  window.gtag('event', `contact_${contactType}_click`, {
    link_url: url,
    transport_type: 'beacon',
    event_callback: callback
  });

  // Fallback timeout in case event_callback doesn't fire
  setTimeout(() => {
    callback && callback();
  }, 200);
};

// General event tracking for internal use
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, parameters);
};

// Helper functions for specific tracking needs
export const trackCTAClick = (buttonText: string, section: string, url: string) => {
  trackOutboundClick(url, buttonText, section);
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', { form_name: formName });
};

export const trackPhoneClick = (phoneNumber: string) => {
  trackContactClick('phone', `tel:${phoneNumber}`);
};

export const trackEmailClick = (email: string) => {
  trackContactClick('email', `mailto:${email}`);
};