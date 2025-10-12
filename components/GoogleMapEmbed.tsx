"use client";

import { useState } from "react";

export default function GoogleMapEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full" style={{ height: "600px" }}>
      {!isLoaded && (
        <button
          onClick={handleLoad}
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label="Load Google Maps"
        >
          <div className="relative w-full h-full bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400 group-hover:text-gray-600 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  Click to load map
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Tržaška c. 116, 1000 Ljubljana
                </p>
              </div>
            </div>
          </div>
        </button>
      )}
      {isLoaded && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31326.76876940462!2d14.479759131342139!3d46.05266742457155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d498c3df797%3A0x47b87314e6452271!2zVHLFvmHFoWthIGMuIDExNiwgMTAwMCBManVibGphbmEsINCh0LvQvtCy0LXQvdC40ZjQsA!5e0!3m2!1ssr!2srs!4v1752150133359!5m2!1ssr!2srs"
          width="600"
          height="600"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Micro Hair Clinic Location"
        />
      )}
    </div>
  );
}
