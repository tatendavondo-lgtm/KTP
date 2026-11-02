"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export interface ScopeEstimateResult {
  serviceName: string;
  guestCount: number;
  aestheticTier: string;
  addOns: string[];
  recommendedPackage: string;
  estimatedFeeRangeUSD: string;
  estimatedEventBudgetGuidelineUSD: string;
  leadTime: string;
}

interface BudgetEstimatorProps {
  onSendScopeToForm: (scope: ScopeEstimateResult) => void;
}

type Tier = "Classic Elegance" | "Bespoke Luxury" | "Royal Ultra-Production";

const SERVICES = [
  { id: "Wedding Planning", label: "Wedding Planning", baseFee: 3200 },
  { id: "Event Co-ordination", label: "Co-ordination only", baseFee: 1400 },
  { id: "Event Concepts", label: "Concept & decor", baseFee: 2200 },
  { id: "Private Consultation", label: "Consultation", baseFee: 350 },
];

const TIERS: { id: Tier; multiplier: number; blurb: string }[] = [
  { id: "Classic Elegance", multiplier: 1.0, blurb: "Timeless florals, warm lighting, refined and relaxed." },
  { id: "Bespoke Luxury", multiplier: 1.45, blurb: "Statement florals, custom tablescapes, designed lighting." },
  { id: "Royal Ultra-Production", multiplier: 2.1, blurb: "Built structures, imported florals, full production." },
];

const ADDONS = [
  { id: "3D Spatial Concept & Lighting Blueprint", cost: 600, label: "Layout and lighting plan" },
  { id: "Rehearsal Dinner Coordination", cost: 450, label: "Rehearsal dinner" },
  { id: "Diaspora Guest Hospitality & Logistics", cost: 750, label: "Guest travel and hotels" },
  { id: "Traditional Roora Protocol Advisory", cost: 500, label: "Roora / lobola protocol" },
];

export const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({ onSendScopeToForm }) => {
  const [service, setService] = useState("Wedding Planning");
  const [guests, setGuests] = useState(200);
  const [tier, setTier] = useState<Tier>("Bespoke Luxury");
  const [addons, setAddons] = useState<string[]>([]);

  const toggle = (id: string) =>
    setAddons((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const result = useMemo<ScopeEstimateResult>(() => {
    const svc = SERVICES.find((s) => s.id === service) ?? SERVICES[0];
    const t = TIERS.find((x) => x.id === tier) ?? TIERS[1];

    const guestFactor = guests > 100 ? 1 + (guests - 100) * 0.002 : 1;
    const addonCost = addons.reduce((sum, id) => sum + (ADDONS.find((a) => a.id === id)?.cost ?? 0), 0);

    let low = 0;
    let high = 0;
    let title = "";
    let lead = "";
    let scale = "";

    if (service === "Private Consultation") {
      low = 300;
      high = 650;
      title = "Private consultation";
      lead = "Can usually be booked within a week";
      scale = "Works for any budget";
    } else if (service === "Event Co-ordination") {
      const base = svc.baseFee * guestFactor + addonCost * 0.5;
      low = Math.round(base * 0.9);
      high = Math.round(base * 1.25);
      title = `On-the-day co-ordination for ${guests} guests`;
      lead = "Book 2 to 4 months ahead";
      scale = "Typically events of $15,000 to $40,000+";
    } else if (service === "Event Concepts") {
      const base = svc.baseFee * t.multiplier + addonCost;
      low = Math.round(base * 0.9);
      high = Math.round(base * 1.3);
      title = `${tier} concept and decor`;
      lead = "Allow 3 to 6 months";
      scale = "Typically productions of $20,000 to $60,000+";
    } else {
      const base = svc.baseFee * t.multiplier * guestFactor + addonCost;
      low = Math.round(base * 0.9);
      high = Math.round(base * 1.35);
      title = `${tier} wedding planning for ${guests} guests`;
      lead = "Allow 6 to 12 months";
      const perMin = tier === "Classic Elegance" ? 50 : tier === "Bespoke Luxury" ? 95 : 180;
      const perMax = tier === "Classic Elegance" ? 85 : tier === "Bespoke Luxury" ? 160 : 310;
      scale = `Overall event budget of about $${(guests * perMin).toLocaleString()} to $${(guests * perMax).toLocaleString()}`;
    }

    return {
      serviceName: service,
      guestCount: guests,
      aestheticTier: tier,
      addOns: addons,
      recommendedPackage: title,
      estimatedFeeRangeUSD: `$${low.toLocaleString()} to $${high.toLocaleString()}`,
      estimatedEventBudgetGuidelineUSD: scale,
      leadTime: lead,
    };
  }, [service, guests, tier, addons]);

  const fill = `${((guests - 20) / (600 - 20)) * 100}%`;

  return (
    <section id="estimator" className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:px-8 sm:py-36">
      <Image
        src="/chandelier_hd.jpg"
        alt=""
        fill
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">Budget estimator</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-7xl">
            Get a rough idea <em className="text-[#FF5CB3]">before we talk.</em>
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/75">
            Move the sliders and see what planning support could look like. These
            are starting points, and Kudzie will confirm a proper quote.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Inputs */}
          <div className="glass glass-tint space-y-9 rounded-[28px] p-6 sm:p-9 lg:col-span-7">
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.22em] text-white/60">What do you need?</legend>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`rounded-2xl border px-4 py-3.5 text-left text-sm transition ${
                      service === s.id
                        ? "border-white/70 bg-white/20"
                        : "border-white/15 hover:border-white/40"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <div className="flex items-end justify-between">
                <label htmlFor="guests" className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Guests
                </label>
                <span className="font-serif text-5xl leading-none">
                  {guests >= 600 ? "600+" : guests}
                </span>
              </div>
              <input
                id="guests"
                type="range"
                min={20}
                max={600}
                step={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="ktp-range mt-6"
                style={{ ["--fill" as string]: fill }}
              />
              <div className="mt-3 flex justify-between text-xs text-white/50">
                <span>20</span>
                <span>600+</span>
              </div>
            </div>

            <fieldset>
              <legend className="text-xs uppercase tracking-[0.22em] text-white/60">Production level</legend>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                {TIERS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      tier === t.id
                        ? "border-white/70 bg-white/20"
                        : "border-white/15 hover:border-white/40"
                    }`}
                  >
                    <span className="font-serif text-xl leading-tight">{t.id}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-white/65">{t.blurb}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs uppercase tracking-[0.22em] text-white/60">Extras (optional)</legend>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {ADDONS.map((a) => {
                  const on = addons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggle(a.id)}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 px-4 py-3 text-left text-sm transition hover:border-white/40"
                    >
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
                          on ? "border-magenta bg-magenta" : "border-white/40"
                        }`}
                      >
                        {on && <Check className="h-3 w-3" />}
                      </span>
                      {a.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* Result */}
          <aside className="glass glass-tint flex flex-col rounded-[28px] p-7 sm:p-9 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Suggested package</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">{result.recommendedPackage}</h3>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm text-white/60">Planning fee, estimated</p>
              <p className="mt-1 font-serif text-5xl leading-none sm:text-6xl">{result.estimatedFeeRangeUSD}</p>
            </div>

            <dl className="mt-7 space-y-3 text-sm">
              <div className="flex justify-between gap-6 border-t border-white/10 pt-3">
                <dt className="text-white/60">Event scale</dt>
                <dd className="text-right">{result.estimatedEventBudgetGuidelineUSD}</dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-white/10 pt-3">
                <dt className="text-white/60">Lead time</dt>
                <dd className="text-right">{result.leadTime}</dd>
              </div>
            </dl>

            <button
              onClick={() => onSendScopeToForm(result)}
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-6 py-4 text-sm font-medium transition hover:brightness-110"
            >
              Send this scope to Kudzie
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};
