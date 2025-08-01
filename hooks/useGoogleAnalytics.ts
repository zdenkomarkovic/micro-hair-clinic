"use client";

import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: url,
      });
    }
  }, []);

  const trackFormSubmission = useCallback((formName: string) => {
    trackEvent('form_submit', 'engagement', formName);
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string) => {
    trackEvent('button_click', 'engagement', buttonName);
  }, [trackEvent]);

  const trackPhoneCall = useCallback((phoneNumber: string) => {
    trackEvent('phone_call', 'engagement', phoneNumber);
  }, [trackEvent]);

  const trackEmailClick = useCallback((emailAddress: string) => {
    trackEvent('email_click', 'engagement', emailAddress);
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
    trackPhoneCall,
    trackEmailClick,
  };
}; 