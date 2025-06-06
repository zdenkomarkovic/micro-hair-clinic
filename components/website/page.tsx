"use client";

import React from "react";
import { motion } from "framer-motion";

const WebSite = () => {
  const cardClass =
    " p-2 md:p-8 rounded-3xl shadow-xl md:shadow-2xl space-y-1 md:space-y-5 bg-gray-50  ";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cardClass}
    >
      <h3 className=" py-3 font-bold">Basic package: Website up to 5 pages</h3>

      <p> - Optimized for viewing on mobile devices and desktop computers.</p>
      <p> - Modern design tailored to your wishes and needs.</p>
      <p> - Contact form with a map of your location.</p>
      <p> - Integration with social media.</p>
      <p> - SSL certificate and website protection.</p>
      <p> - Hosting and domain included for the first year</p>
      <p> - Development time 7-10 days.</p>

      <p> - Basic Google SEO optimization.</p>
    </motion.div>
  );
};

export default WebSite;
