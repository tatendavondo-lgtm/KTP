"use client";

import React from "react";
import { Sparkles, ArrowRight, Compass, ShieldCheck, Heart, MapPin, Award } from "lucide-react";
import { KTP_BRAND } from "@/data/ktpData";

interface HeroProps {
  onPlanEventClick: () => void;
  onExplorePortfolioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlanEventClick,
  onExplorePortfolioClick,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#12071F]">
      {/* Background Image with Dark Obsidian Plum & Magenta Radial Vignette */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/hero-wedding-banner.jpg'), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Layered Multi-stop Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12071F] via-[#12071F]/80 to-[#12071F]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,126,0.18)_0%,rgba(59,10,104,0.35)_55%,rgba(18,7,31,0.95)_100%)]" />

        {/* Ambient Subtle Glow Orbs */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#E6007E]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#3B0A68]/35 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Tagline Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#1B0C2E]/80 backdrop-blur-md border border-[#E6007E]/50 shadow-[0_0_20px_-3px_rgba(230,0,126,0.4)] mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6007E]"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-white">
            {KTP_BRAND.tagline}
          </span>
        </div>

        {/* Main High-Contrast Luxury Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.12] tracking-tight max-w-4xl text-balance">
          Turning Visionary Concepts into{" "}
          <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FF45A8] via-[#E6007E] to-[#FAF8F5]">
            Unforgettable Celebrations
          </span>
        </h1>

        {/* Script Accent Subtitle */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#E6007E]" />
          <span className="font-script text-2xl sm:text-3xl text-[#E6007E] tracking-wide">
            Couture Weddings & High-Concept Events
          </span>
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#E6007E]" />
        </div>

        {/* The 4 Core Pillars Subheader */}
        <p className="mt-6 text-xs sm:text-sm md:text-base text-gray-300 font-sans tracking-widest uppercase font-medium max-w-2xl text-center">
          <span className="text-white hover:text-[#E6007E] transition-colors">Wedding Planning</span>
          <span className="mx-2 text-[#E6007E]">•</span>
          <span className="text-white hover:text-[#E6007E] transition-colors">Co-ordination</span>
          <span className="mx-2 text-[#E6007E]">•</span>
          <span className="text-white hover:text-[#E6007E] transition-colors">Event Concepts</span>
          <span className="mx-2 text-[#E6007E]">•</span>
          <span className="text-white hover:text-[#E6007E] transition-colors">Consultation</span>
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-300/90 font-sans max-w-xl font-light leading-relaxed">
          Crafting transcendent matrimonial journeys and luxury gatherings across{" "}
          <span className="text-white font-medium">Harare</span>,{" "}
          <span className="text-white font-medium">Victoria Falls</span>, and destination venues worldwide with meticulous design and surgical execution.
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onPlanEventClick}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-white bg-gradient-to-r from-[#E6007E] via-[#A30B77] to-[#3B0A68] hover:from-[#FF1A8C] hover:to-[#4D0E85] transition-all duration-300 shadow-[0_4px_30px_rgba(230,0,126,0.55)] hover:shadow-[0_8px_35px_rgba(230,0,126,0.75)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>Plan Your Event</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Glass CTA */}
          <button
            onClick={onExplorePortfolioClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-gray-200 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-[#E6007E]/30 hover:border-[#E6007E]/70 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
          >
            <span>Explore Portfolio</span>
          </button>
        </div>

        {/* Floating Luxury Social Proof & Badges */}
        <div className="mt-14 pt-8 border-t border-[#E6007E]/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          <div className="p-3.5 rounded-2xl bg-[#1B0C2E]/60 backdrop-blur-md border border-[#E6007E]/15 text-left flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E6007E]/15 text-[#E6007E] shrink-0 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                100+
              </div>
              <div className="text-[11px] text-gray-400 font-sans tracking-wide">
                Bespoke Celebrations
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#1B0C2E]/60 backdrop-blur-md border border-[#E6007E]/15 text-left flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E6007E]/15 text-[#E6007E] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                Zimbabwe & Beyond
              </div>
              <div className="text-[11px] text-gray-400 font-sans tracking-wide">
                Harare • Vic Falls • Vumba
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#1B0C2E]/60 backdrop-blur-md border border-[#E6007E]/15 text-left flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E6007E]/15 text-[#E6007E] shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                Vetted Network
              </div>
              <div className="text-[11px] text-gray-400 font-sans tracking-wide">
                Elite Regional Black-Book
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#1B0C2E]/60 backdrop-blur-md border border-[#E6007E]/15 text-left flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E6007E]/15 text-[#E6007E] shrink-0 mt-0.5">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                Zero-Stress
              </div>
              <div className="text-[11px] text-gray-400 font-sans tracking-wide">
                Seamless Orchestration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
