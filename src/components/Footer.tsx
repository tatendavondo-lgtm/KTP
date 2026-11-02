"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { KTP_BRAND } from "@/data/ktpData";

const QUICK_LINKS = [
  { label: "Tour", id: "top" },
  { label: "Meet Kudzie", id: "meet-kudzie" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Budget estimator", id: "estimator" },
  { label: "Enquire", id: "inquiry" },
];

export const Footer: React.FC = () => {
  const go = (id: string) => {
    if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink px-4 pb-8 pt-4 text-white sm:px-8">
      {/* Echoes her purple-to-magenta business card */}
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-magenta via-[#A30B77] to-violet p-8 sm:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Image
              src="/ktp-logo-on-dark.png"
              alt="Kudzie The Planner"
              width={350}
              height={175}
              className="h-16 sm:h-20 w-auto object-contain mb-5 drop-shadow-md"
            />
            <p className="text-sm tracking-[0.28em] text-white/90">{KTP_BRAND.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              Wedding Planning · Co-ordination · Event Concepts · Consultation
            </p>
          </div>

          <div className="space-y-8 lg:col-span-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Call or WhatsApp</p>
              <a href={`tel:+${KTP_BRAND.whatsappNumber}`} className="mt-2 block font-serif text-3xl hover:underline">
                {KTP_BRAND.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Email</p>
              <a href={`mailto:${KTP_BRAND.email}`} className="mt-2 block break-all text-lg hover:underline">
                {KTP_BRAND.email}
              </a>
            </div>
          </div>

          <nav className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Explore</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-white/85 transition hover:text-white hover:underline">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between text-xs text-white/50">
        <p>© Kudzie The Planner. {KTP_BRAND.location}.</p>
        <button onClick={() => go("top")} className="inline-flex items-center gap-1.5 hover:text-white">
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};
