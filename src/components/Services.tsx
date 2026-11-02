"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES = [
  {
    key: "Wedding Planning",
    number: "01",
    title: "Wedding Planning",
    blurb:
      "The whole journey, from the first conversation to the last guest leaving. Concept, budget, vendors, timeline and the day itself.",
    points: ["Concept and styling direction", "Budget and vendor management", "Full planning through to the wedding day"],
  },
  {
    key: "Event Co-ordination",
    number: "02",
    title: "Event Co-ordination",
    blurb:
      "You've planned it. We run it. Kudzie takes over weeks before the date so the day itself is calm, on time and handled.",
    points: ["Vendor and venue hand-over", "Detailed run-of-show", "On-the-day management"],
  },
  {
    key: "Event Concepts",
    number: "03",
    title: "Event Concepts",
    blurb:
      "Styling and spatial design for weddings, galas and milestone celebrations: flowers, lighting, layout and the look of the room.",
    points: ["Floral and lighting direction", "Layouts and tablescapes", "Styling for galas and milestones"],
  },
  {
    key: "Private Consultation",
    number: "04",
    title: "Private Consultation",
    blurb:
      "One-to-one time with Kudzie. Ideal if you're planning yourself and want a clear budget, a plan and the right suppliers.",
    points: ["Budget structuring", "Planning roadmap", "Introductions to trusted vendors"],
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:px-8 sm:py-36">
      {/* Photograph sits behind the glass so the cards have something to refract */}
      <Image
        src="/flowers_hd.jpg"
        alt=""
        fill
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">Services</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.04] sm:text-6xl lg:text-7xl">
            Four ways to work with <em className="text-[#FF5CB3]">Kudzie.</em>
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/75">
            Pick the level of support that fits. You can always start with a
            consultation and grow from there.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article
              key={s.key}
              className={`glass glass-tint group flex flex-col rounded-[28px] p-7 transition duration-500 hover:-translate-y-1 sm:p-9 ${
                i % 2 === 1 ? "md:translate-y-14 md:hover:translate-y-12" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-6xl leading-none text-white/35">{s.number}</span>
                <button
                  onClick={() => onSelectService(s.key)}
                  aria-label={`Select ${s.title}`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-magenta group-hover:to-violet"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              <h3 className="mt-8 font-serif text-4xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75">{s.blurb}</p>

              <ul className="mt-6 space-y-2 border-t border-white/15 pt-5 text-sm text-white/85">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-magenta" />
                    {p}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectService(s.key)}
                className="mt-8 self-start text-sm underline decoration-magenta underline-offset-[6px] transition hover:text-[#FF5CB3]"
              >
                Select this service
              </button>
            </article>
          ))}
        </div>
        <div className="hidden h-14 md:block" />
      </div>
    </section>
  );
};
