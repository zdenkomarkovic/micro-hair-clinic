"use client";

import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import { Button } from "./ui/button";

// Primer komponente koja pokazuje kako da se koristi Google Analytics tracking
export const GoogleAnalyticsExample = () => {
  const { 
    trackEvent, 
    trackButtonClick, 
    trackEmailClick,
    trackPageView 
  } = useGoogleAnalytics();

  const handleCustomEvent = () => {
    // Prati custom događaj
    trackEvent('custom_action', 'user_interaction', 'example_button', 1);
  };

  const handleButtonClick = () => {
    // Prati klik na dugme
    trackButtonClick('example_button');
  };

  const handleEmailClick = () => {
    // Prati klik na email
    trackEmailClick('info@microhairclinic.com');
  };

  const handlePageView = () => {
    // Prati page view
    trackPageView('/example-page');
  };

  return (
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-semibold">Google Analytics Tracking Primeri</h3>
      
      <div className="space-y-2">
        <Button onClick={handleCustomEvent}>
          Prati Custom Događaj
        </Button>
        
        <Button onClick={handleButtonClick}>
          Prati Klik na Dugme
        </Button>
        
        <Button onClick={handleEmailClick}>
          Prati Email Klik
        </Button>
        
        <Button onClick={handlePageView}>
          Prati Page View
        </Button>
      </div>
    </div>
  );
}; 