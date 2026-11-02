"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Users, ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/ktpData";

type Filter =
  | "All"
  | "Luxury Weddings"
  | "Event Concepts"
  | "Corporate & Galas"
  | "Traditional / Lobola";

const FILTERS: Filter[] = [
  "All",
  "Luxury Weddings",
  "Event Concepts",
  "Corporate & Galas",
  "Traditional / Lobola",
];

// Varied ratios give the grid a hand-laid, magazine rhythm.
const RATIOS = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/5]"];

interface PortfolioGalleryProps {
  onInquireSimilar: (item: PortfolioItem) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onInquireSimilar }) => {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [photo, setPhoto] = useState(0);

  const items = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const open = (item: PortfolioItem) => {
    setPhoto(0);
    setSelected(item);
  };

  return (
    <section id="portfolio" className="bg-blush px-4 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-magenta">Portfolio</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-7xl">
              Recent <em className="text-magenta">celebrations.</em>
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border-b-2 pb-1 transition ${
                  filter === f
                    ? "border-magenta text-ink"
                    : "border-transparent text-ink/50 hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => open(item)}
              className="group mb-10 block w-full break-inside-avoid text-left"
            >
              <div className={`relative overflow-hidden rounded-3xl ${RATIOS[i % RATIOS.length]}`}>
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">
                    {item.location} · {item.guestCount} guests
                  </p>
                </div>
                <ArrowRight className="mt-1.5 h-5 w-5 shrink-0 -translate-x-2 text-magenta opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-ink/80 p-3 sm:items-center sm:p-6 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass glass-tint relative my-6 sm:my-auto grid w-full max-w-5xl overflow-hidden rounded-[24px] sm:rounded-[32px] text-white lg:grid-cols-5 shadow-2xl"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="glass absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-4 lg:col-span-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={selected.galleryImages[photo]}
                  alt={selected.title}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {selected.galleryImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setPhoto(i)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl transition ${
                      photo === i ? "ring-2 ring-magenta" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="200px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col p-7 lg:col-span-2 lg:p-9">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{selected.category}</p>
              <h3 className="mt-3 font-serif text-4xl leading-[1.05]">{selected.title}</h3>

              <div className="mt-5 space-y-2 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-magenta" />
                  {selected.venue}, {selected.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-magenta" />
                  {selected.guestCount} guests
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-white/80">{selected.conceptSummary}</p>

              <button
                onClick={() => {
                  const item = selected;
                  setSelected(null);
                  onInquireSimilar(item);
                }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-6 py-3.5 text-sm font-medium transition hover:brightness-110 lg:mt-auto"
              >
                Enquire about something similar
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
