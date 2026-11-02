"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { KTP_BRAND } from "@/data/ktpData";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

const LINKS = [
  { label: "Tour", id: "top" },
  { label: "Kudzie", id: "meet-kudzie" },
  { label: "Services", id: "services" },
  { label: "Work", id: "portfolio" },
  { label: "Budget", id: "estimator" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsapp = `https://wa.me/${KTP_BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hello Kudzie, I'd like to ask about planning an event."
  )}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-ink/80 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo on top-left: completely standalone, NO background, NO frame, NO border lines */}
          <button
            onClick={() => go("top")}
            className="flex items-center transition-transform hover:scale-[1.02] focus:outline-none"
            aria-label="Kudzie The Planner - Home"
          >
            <Image
              src="/ktp-logo-on-dark.png"
              alt="Kudzie The Planner"
              width={394}
              height={200}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
            />
          </button>

          {/* Right-side navigation and actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="glass glass-tint hidden items-center gap-1 rounded-full px-4 py-1.5 text-white lg:flex">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-full px-3.5 py-1.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Kudzie on WhatsApp"
              className="glass glass-tint grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full text-white/90 transition hover:scale-105 hover:text-white"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
            </a>

            <button
              onClick={() => (onOpenConsultation ? onOpenConsultation() : go("inquiry"))}
              className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-magenta/25 transition hover:brightness-110"
            >
              Book a consultation
            </button>

            <button
              onClick={() => setOpen(true)}
              className="glass glass-tint grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="glass glass-tint fixed inset-0 z-[60] flex flex-col rounded-none bg-ink/90 p-6 text-white">
          <div className="flex items-center justify-between">
            <Image
              src="/ktp-logo-on-dark.png"
              alt="Kudzie The Planner"
              width={200}
              height={100}
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col">
            {[...LINKS, { label: "Enquire", id: "inquiry" }].map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="border-b border-white/10 py-4 text-left font-serif text-4xl"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-1 text-sm text-white/70">
            <a href={`tel:+${KTP_BRAND.whatsappNumber}`} className="block">
              {KTP_BRAND.phoneDisplay}
            </a>
            <a href={`mailto:${KTP_BRAND.email}`} className="block">
              {KTP_BRAND.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
