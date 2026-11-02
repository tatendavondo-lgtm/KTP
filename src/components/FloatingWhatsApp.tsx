"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { KTP_BRAND } from "@/data/ktpData";

export const FloatingWhatsApp: React.FC = () => {
  const href = `https://wa.me/${KTP_BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hello Kudzie, I'd like to ask about planning an event."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kudzie on WhatsApp"
      className="glass glass-tint fixed bottom-6 right-6 z-40 hidden sm:grid h-14 w-14 place-items-center rounded-full text-white transition hover:scale-105 shadow-xl shadow-magenta/20"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};
