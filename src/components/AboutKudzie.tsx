"use client";

import React from "react";
import Image from "next/image";
import { KTP_BRAND } from "@/data/ktpData";

export const AboutKudzie: React.FC = () => {
  return (
    <section id="meet-kudzie" className="bg-pearl px-4 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Text */}
        <div className="lg:col-span-6 lg:pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-magenta">Meet Kudzie</p>

          <h2 className="mt-5 font-serif text-4xl leading-[1.04] sm:text-6xl lg:text-7xl">
            The person on the other end of the <em className="text-magenta">phone.</em>
          </h2>

          <div className="mt-8 max-w-lg space-y-5 text-[17px] leading-relaxed text-ink/75">
            <p>
              Kudzie The Planner is a Zimbabwean wedding and events studio. You get
              Kudzie herself: someone who answers your messages, knows your venue,
              and has already thought about the thing you haven&apos;t.
            </p>
            <p>
              The promise is in the name. <em>Committed beyond planning</em> means the
              work doesn&apos;t stop at a checklist. It&apos;s the generator on standby,
              the elders seated comfortably, and the timeline held quietly so you can
              enjoy your own day.
            </p>
            <p>
              Weddings, roora and lobola ceremonies, galas and milestone birthdays
              across Harare, Victoria Falls, the Eastern Highlands and further afield.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a href={`tel:+${KTP_BRAND.whatsappNumber}`} className="underline decoration-magenta/50 underline-offset-4 hover:decoration-magenta">
              {KTP_BRAND.phoneDisplay}
            </a>
            <a href={`mailto:${KTP_BRAND.email}`} className="underline decoration-magenta/50 underline-offset-4 hover:decoration-magenta">
              {KTP_BRAND.email}
            </a>
          </div>
        </div>

        {/* Portrait / Action photograph */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <div className="relative">
            <div className="relative aspect-[4/3] sm:aspect-[14/11] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(59,10,104,0.35)]">
              <Image
                src="/kudzie/ktp.jpg"
                alt="Kudzie styling a luxury floral centerpiece"
                fill
                quality={95}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[55%_center]"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-ink px-5 py-4 text-white shadow-xl sm:block">
              <p className="font-script text-3xl leading-none text-[#FF5CB3]">Kudzie</p>
              <p className="mt-1 text-[10px] tracking-[0.3em] text-white/70">THE PLANNER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
