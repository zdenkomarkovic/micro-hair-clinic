"use client";

import { GoogleTagManager } from '@next/third-parties/google';

interface GoogleTagManagerProps {
  gtmId: string;
}

const GoogleTagManagerComponent = ({ gtmId }: GoogleTagManagerProps) => {
  return <GoogleTagManager gtmId={gtmId} />;
};

export default GoogleTagManagerComponent; 