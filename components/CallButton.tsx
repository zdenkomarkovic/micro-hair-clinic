"use client";
import React, { useEffect, useState } from "react";
import { FaViber } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";

const CallButton = () => {
  const [showCallButton, setShowCallButton] = useState(true);
  const pathname = usePathname();
  const { trackPhoneCall } = useGoogleAnalytics();

  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    const footerSection = document.querySelector(".footer");
    const updateVisibility = (entries: IntersectionObserverEntry[]) => {
      const isHeroVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("hero") && entry.isIntersecting
      );

      const isFooterVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("footer") && entry.isIntersecting
      );
      setShowCallButton(!isHeroVisible && !isFooterVisible);
    };

    const observer = new IntersectionObserver(updateVisibility, {
      threshold: 0.1,
    });
    if (heroSection) observer.observe(heroSection);
    if (footerSection) observer.observe(footerSection);
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <div
      className={`
      ${
        showCallButton
          ? "opacity-100 translate-y-0 duration-500"
          : "opacity-0 translate-y-10 pointer-events-none duration-500"
      }
      fixed bottom-6 md:bottom-10  p-1 ml-2 lg:ml-10  z-50`}
    >
      <div className={` z-20 flex  gap-1`}>
        <a
          href="viber://contact?number=%2B381645400100"
          className="p-1 hover:scale-110"
          onClick={() => trackPhoneCall('viber')}
        >
          <FaViber className="bg-purple-600  rounded-full w-10 h-10 text-white " />
        </a>
        <a 
          href="https://wa.me/381645400100" 
          className="p-1 hover:scale-110"
          onClick={() => trackPhoneCall('whatsapp')}
        >
          <IoLogoWhatsapp className="bg-green-500 text-white p-[1px] rounded-full w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default CallButton;
