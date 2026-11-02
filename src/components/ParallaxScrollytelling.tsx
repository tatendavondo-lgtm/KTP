"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { KTP_BRAND } from "@/data/ktpData";

interface ParallaxScrollytellingProps {
  onInquireStage: (stageTitle: string) => void;
}

interface TourStage {
  id: string;
  number: string;
  name: string;
  title: string;
  body: string;
  handled: string[];
  imageSrc: string;
  alt: string;
}

const TOUR_STAGES: TourStage[] = [
  {
    id: "venue",
    number: "01",
    name: "VENUE",
    title: "Turning visionary concepts into unforgettable celebrations.",
    body: "Every celebration starts with the room. We walk the space with you, measure it twice, and plan where every guest will stand, sit and look.",
    handled: [
      "Site visits and floor plans",
      "Marquee and layout planning",
      "Power, access and back-of-house logistics",
    ],
    imageSrc: "/hall_hd.jpg",
    alt: "Glass-walled reception hall set for a wedding",
  },
  {
    id: "canopy",
    number: "02",
    name: "CANOPY",
    title: "Look up.",
    body: "Ceilings are the most overlooked part of a venue. Chandeliers, draped fabric and hanging florals bring a tall room down to human scale and make the light feel warm.",
    handled: [
      "Chandelier and lighting design",
      "Draping and hanging florals",
      "Safe rigging with qualified riggers",
    ],
    imageSrc: "/chandelier_hd.jpg",
    alt: "Crystal chandeliers with hanging orchids",
  },
  {
    id: "tablescape",
    number: "03",
    name: "TABLESCAPE",
    title: "Down to the table.",
    body: "Guests spend most of the night at their table, so this is where the small things go: flowers, linen, candlelight, glassware, and a place card someone actually keeps.",
    handled: [
      "Floral design and sourcing",
      "Linen, candles and tableware",
      "Menus and place cards",
    ],
    imageSrc: "/flowers_hd.jpg",
    alt: "Tablescape with roses, candles and gold-rimmed plates",
  },
  {
    id: "finale",
    number: "04",
    name: "FINALE",
    title: "And then, the cake.",
    body: "The toast, the cake, the last dance. We time the evening so these moments land when everyone is in the room, phones up and glasses full.",
    handled: [
      "Run-of-show and cue sheet",
      "Cake and dessert table styling",
      "Vendor and MC co-ordination",
    ],
    imageSrc: "/cake_hd.jpg",
    alt: "Tiered wedding cake beside a champagne tower",
  },
];

/* One photo layer. Moves gently along the Z axis, scales subtly and cross-dissolves
   over wide scroll windows so the scenes blend seamlessly like a cinematic glide. */
function Layer({
  progress,
  stage,
  kind,
  range,
  priority,
}: {
  progress: MotionValue<number>;
  stage: TourStage;
  kind: "first" | "middle" | "last";
  range: number[];
  priority?: boolean;
}) {
  // Soft, restrained Z and scale changes so images never zoom abruptly into the viewer
  const zOut =
    kind === "first"
      ? [0, 0, 60]
      : kind === "last"
      ? [-60, 0, 0]
      : [-60, 0, 0, 60];
  const scaleOut =
    kind === "first"
      ? [1.0, 1.0, 1.03]
      : kind === "last"
      ? [0.98, 1.0, 1.0]
      : [0.98, 1.0, 1.0, 1.03];
  const opacityOut =
    kind === "first" ? [1, 1, 0] : kind === "last" ? [0, 1, 1] : [0, 1, 1, 0];

  const z = useTransform(progress, range, zOut);
  const scale = useTransform(progress, range, scaleOut);
  const opacity = useTransform(progress, range, opacityOut);

  return (
    <motion.div
      style={{ translateZ: z, scale, opacity }}
      className="absolute inset-0 will-change-transform"
    >
      <Image
        src={stage.imageSrc}
        alt={stage.alt}
        fill
        priority={priority}
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Soft gradient vignettes for legible typography while keeping the photo vibrant */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/75 via-ink/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
    </motion.div>
  );
}

/* Individual Stage Card - 100% scroll-sensitive:
   Opacity and Y-offset are transformed directly in real-time by scroll progress.
   If the user scrolls slow, it moves slow; if they scroll fast, it follows immediately.
   On mobile, the card is completely transparent with no background box or frame
   so the high-resolution photography is never obstructed. */
function StageCard({
  stage,
  progress,
  range,
  isFirst,
  isLast,
  onInquire,
}: {
  stage: TourStage;
  progress: MotionValue<number>;
  range: number[];
  isFirst?: boolean;
  isLast?: boolean;
  onInquire: (title: string) => void;
}) {
  const opacity = useTransform(
    progress,
    range,
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    range,
    isFirst ? [0, 0, -28] : isLast ? [28, 0, 0] : [28, 0, 0, -28]
  );

  const pointerEvents = useTransform(opacity, (v) => (v > 0.12 ? "auto" : "none"));

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-x-0 bottom-0 pointer-events-none will-change-transform"
    >
      {/* Mobile: Fully transparent (no background, no border, no blur box)
          Tablet/Desktop: Refined liquid glass pedestal */}
      <div className="w-full max-w-xl bg-transparent border-0 shadow-none p-0 sm:glass sm:glass-tint sm:rounded-[32px] sm:p-8 md:p-9 sm:border sm:border-white/20 sm:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] sm:backdrop-blur-2xl text-white">
        {/* Subtle ambient specular glow (desktop only) */}
        <div className="pointer-events-none absolute -top-20 -right-20 hidden sm:block h-52 w-52 rounded-full bg-gradient-to-br from-magenta/25 via-violet/15 to-transparent blur-3xl" />

        {/* Minimalist Category Badge - zero numbering */}
        <div className="mb-2 sm:mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-magenta shadow-[0_0_8px_#E6007E]" />
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
            {isFirst ? KTP_BRAND.tagline : stage.name}
          </span>
        </div>

        {/* High-Contrast Editorial Serif Headline */}
        <h2
          className={`font-serif leading-[1.06] text-white tracking-tight [text-shadow:0_2px_14px_rgba(0,0,0,0.95)] ${
            isFirst
              ? "text-2xl sm:text-3xl md:text-[2.6rem]"
              : "text-[1.85rem] sm:text-4xl md:text-[3.2rem]"
          }`}
        >
          {stage.title}
        </h2>

        {/* Narrative description */}
        <p className="mt-2 sm:mt-4 text-[13.5px] sm:text-[15.5px] leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] max-w-lg line-clamp-2 sm:line-clamp-none">
          {stage.body}
        </p>

        {/* Handled aspects: Compact pills on mobile, luxury hairlines on desktop */}
        <div className="mt-3 sm:mt-5">
          {/* Mobile: horizontal compact badges */}
          <div className="flex flex-wrap gap-1.5 sm:hidden">
            {stage.handled.map((h) => (
              <span
                key={h}
                className="rounded-full bg-black/40 border border-white/15 px-2.5 py-0.5 text-[10px] font-normal text-white/90 backdrop-blur-md shadow-sm"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Tablet & Desktop: luxury hairline dividers */}
          <ul className="hidden sm:block divide-y divide-white/10 border-y border-white/10 text-xs sm:text-sm text-white/85">
            {stage.handled.map((h) => (
              <li
                key={h}
                className="py-2.5 sm:py-3 flex items-center justify-between"
              >
                <span>{h}</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
              </li>
            ))}
          </ul>
        </div>

        {/* Primary Call to Action */}
        <div className="mt-3.5 sm:mt-6">
          <button
            onClick={() => onInquire(stage.title)}
            className="group pointer-events-auto inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-xl shadow-magenta/30 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
          >
            Plan an event like this
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export const ParallaxScrollytelling: React.FC<ParallaxScrollytellingProps> = ({
  onInquireStage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Responsive spring physics: high stiffness & low mass respond instantly to user scroll speed
  const smooth = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.15,
    restDelta: 0.0001,
  });

  // Balanced transition ranges across the scroll journey
  const ranges = {
    stage0: [0.00, 0.16, 0.28],
    stage1: [0.18, 0.28, 0.46, 0.58],
    stage2: [0.48, 0.58, 0.76, 0.88],
    stage3: [0.78, 0.88, 1.00],
  };

  return (
    <section ref={containerRef} className="relative h-[480vh] bg-ink">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* 3D perspective stage with scroll-sensitive cross-dissolve intervals */}
        <div className="perspective-1200 preserve-3d absolute inset-0">
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[0]}
            kind="first"
            range={ranges.stage0}
            priority
          />
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[1]}
            kind="middle"
            range={ranges.stage1}
            priority
          />
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[2]}
            kind="middle"
            range={ranges.stage2}
          />
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[3]}
            kind="last"
            range={ranges.stage3}
          />
        </div>

        {/* 100% Scroll-Sensitive Cards - Float dynamically without any timer lag */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 pb-6 sm:p-10 sm:pb-12 md:p-14">
          <div className="relative w-full max-w-xl min-h-[220px] sm:min-h-[380px]">
            <StageCard
              stage={TOUR_STAGES[0]}
              progress={smooth}
              range={ranges.stage0}
              isFirst
              onInquire={onInquireStage}
            />
            <StageCard
              stage={TOUR_STAGES[1]}
              progress={smooth}
              range={ranges.stage1}
              onInquire={onInquireStage}
            />
            <StageCard
              stage={TOUR_STAGES[2]}
              progress={smooth}
              range={ranges.stage2}
              onInquire={onInquireStage}
            />
            <StageCard
              stage={TOUR_STAGES[3]}
              progress={smooth}
              range={ranges.stage3}
              isLast
              onInquire={onInquireStage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
