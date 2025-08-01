"use client";

import { GoogleAnalytics } from '@next/third-parties/google';

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalyticsComponent = ({ gaId }: GoogleAnalyticsProps) => {
  return <GoogleAnalytics gaId={gaId} />;
};

export default GoogleAnalyticsComponent; 