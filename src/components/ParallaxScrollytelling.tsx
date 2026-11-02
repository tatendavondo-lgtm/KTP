"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
  Variants,
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
    </motion.div>
  );
}

export const ParallaxScrollytelling: React.FC<ParallaxScrollytellingProps> = ({
  onInquireStage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky, cushioned spring physics: lower stiffness & tuned damping eliminate harsh wheel jumps
  const smooth = useSpring(scrollYProgress, {
    stiffness: 32,
    damping: 24,
    mass: 0.9,
    restDelta: 0.0003,
  });

  useEffect(() => {
    return smooth.on("change", (v) => {
      // Transition thresholds aligned with the midpoint of each stage's cross-dissolve
      setActive(v < 0.26 ? 0 : v < 0.56 ? 1 : v < 0.84 ? 2 : 3);
    });
  }, [smooth]);

  const stage = TOUR_STAGES[active];

  const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

  // Motion variants for dramatic, staggered card entrance
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.93,
      filter: "blur(14px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: LUXURY_EASE,
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: -28,
      scale: 0.96,
      filter: "blur(10px)",
      transition: {
        duration: 0.42,
        ease: LUXURY_EASE,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: LUXURY_EASE },
    },
  };

  return (
    <section ref={containerRef} className="relative h-[680vh] bg-ink">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* 3D perspective stage with wide, overlapping cross-fade intervals */}
        <div className="perspective-1200 preserve-3d absolute inset-0">
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[0]}
            kind="first"
            range={[0, 0.20, 0.38]}
            priority
          />
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[1]}
            kind="middle"
            range={[0.18, 0.32, 0.50, 0.66]}
            priority
          />
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[2]}
            kind="middle"
            range={[0.48, 0.62, 0.78, 0.92]}
          />
          <Layer
            progress={smooth}
            stage={TOUR_STAGES[3]}
            kind="last"
            range={[0.76, 0.90, 1.0]}
          />
        </div>

        {/* Minimalist Scene Presentation - Mobile-First, Responsive, Dramatic Entrance */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 pb-6 sm:p-10 sm:pb-12 md:p-14">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stage.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass glass-tint pointer-events-auto relative w-full max-w-xl overflow-hidden rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-9 text-white backdrop-blur-2xl border border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]"
            >
              {/* Subtle ambient specular glow inside the card */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-gradient-to-br from-magenta/25 via-violet/15 to-transparent blur-3xl" />

              {/* Minimalist Category Badge - zero numbering */}
              <motion.div
                variants={itemVariants}
                className="mb-2.5 sm:mb-4 flex items-center gap-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-magenta shadow-[0_0_8px_#E6007E]" />
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.28em] text-white/75">
                  {active === 0 ? KTP_BRAND.tagline : stage.name}
                </span>
              </motion.div>

              {/* High-Contrast Editorial Serif Headline - Scaled proportionally for mobile */}
              <motion.h2
                variants={itemVariants}
                className={`font-serif leading-[1.06] text-white tracking-tight ${
                  active === 0
                    ? "text-2xl sm:text-3xl md:text-[2.6rem]"
                    : "text-[1.75rem] sm:text-4xl md:text-[3.2rem]"
                }`}
              >
                {stage.title}
              </motion.h2>

              {/* Narrative description */}
              <motion.p
                variants={itemVariants}
                className="mt-2.5 sm:mt-4 text-[13.5px] sm:text-[15.5px] leading-relaxed text-white/80 max-w-lg"
              >
                {stage.body}
              </motion.p>

              {/* Handled aspects: Compact pills on mobile, hairline list on tablet/desktop */}
              <motion.div variants={itemVariants} className="mt-3.5 sm:mt-5">
                {/* Mobile: horizontal compact badges so the photography remains visible */}
                <div className="flex flex-wrap gap-1.5 sm:hidden">
                  {stage.handled.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-normal text-white/85 backdrop-blur-sm"
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
              </motion.div>

              {/* Primary Call to Action: thumb-friendly full-width on mobile */}
              <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                <button
                  onClick={() => onInquireStage(stage.title)}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-xl shadow-magenta/25 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
                >
                  Plan an event like this
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
