"use client";

import { useEffect } from "react";

export default function InstagramWidget() {
  useEffect(() => {
    // Provera da li je skripta već ubačena, da se ne ubacuje više puta
    if (
      !document.querySelector(
        "script[src='https://static.elfsight.com/platform/platform.js']"
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-58b32a8b-ae16-4be6-a463-46debbccc964"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
