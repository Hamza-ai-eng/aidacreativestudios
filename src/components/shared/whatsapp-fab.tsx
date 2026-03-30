"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/constants";

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Show after scrolling past hero
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    // Stop pulsing after 10 seconds
    const timer = setTimeout(() => setPulse(false), 10000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 end-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          aria-label="WhatsApp"
        >
          <MessageCircle size={26} fill="white" strokeWidth={0} />
          {pulse && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          )}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
