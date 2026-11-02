"use client";

import React from "react";
import { Sparkles, CalendarCheck, Palette, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICE_PILLARS, ServicePillar } from "@/data/ktpData";

interface ServicePillarsProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicePillars: React.FC<ServicePillarsProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServicePillar["iconName"]) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#E6007E]" />;
      case "CalendarCheck":
        return <CalendarCheck className="w-6 h-6 text-[#E6007E]" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-[#E6007E]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#E6007E]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F2F8] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6007E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B0A68]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6007E]/25 shadow-sm mb-4">
            <span className="font-script text-xl text-[#E6007E]">Our Core Offerings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#12071F] tracking-tight">
            The 4 Pillars of{" "}
            <span className="italic font-normal font-serif text-[#E6007E]">
              Bespoke Execution
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Every celebration has its own heartbeat. Whether you desire comprehensive full-scale production, surgical on-the-day orchestration, high-concept spatial design, or private strategic advisory, Kudzie brings uncompromising dedication.
          </p>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICE_PILLARS.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-10 border border-[#E6007E]/15 hover:border-[#E6007E]/40 shadow-[0_4px_25px_-5px_rgba(59,10,104,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(230,0,126,0.18)] transition-all duration-500 overflow-hidden"
            >
              {/* Bottom Border Magenta-to-Purple Glow on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E6007E] via-[#A30B77] to-[#3B0A68] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Ambient Glow in Top Right Corner */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#E6007E]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <div>
                {/* Header Lockup: Number, Icon, Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FCFAFD] border border-[#E6007E]/20 flex items-center justify-center group-hover:bg-[#E6007E]/10 group-hover:border-[#E6007E]/50 transition-colors duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-serif text-3xl font-light text-gray-400 group-hover:text-[#E6007E] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#12071F]/5 text-[#3B0A68] border border-[#3B0A68]/10 group-hover:bg-[#E6007E]/10 group-hover:text-[#E6007E] group-hover:border-[#E6007E]/30 transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#12071F] group-hover:text-[#3B0A68] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1 font-script text-xl text-[#E6007E]">
                  {service.tagline}
                </p>

                {/* Editorial Description */}
                <p className="mt-4 text-sm text-gray-600 font-sans leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Signature Inclusions
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  <span className="font-medium text-gray-900 block font-serif text-sm">
                    {service.investmentTier}
                  </span>
                  <span className="text-[11px] text-gray-400">Tailored to event scope</span>
                </div>

                {/* Select Service Button that pre-fills and smooth scrolls to Inquiry Form */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="group/btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#12071F] hover:bg-gradient-to-r hover:from-[#E6007E] hover:to-[#3B0A68] transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
