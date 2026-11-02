"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, ArrowLeft, Copy, Check } from "lucide-react";
import { KTP_BRAND } from "@/data/ktpData";
import { ScopeEstimateResult } from "./BudgetEstimator";

interface FormState {
  service: string;
  eventType: string;
  targetDate: string;
  guestCount: string;
  budgetRange: string;
  venueStatus: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  visionNotes: string;
  scopeSummary: string;
}

interface InquiryFormProps {
  initialService?: string;
  initialScope?: ScopeEstimateResult | null;
}

const SERVICES = ["Wedding Planning", "Event Co-ordination", "Event Concepts", "Private Consultation"];
const EVENT_TYPES = [
  "Wedding",
  "Roora / Lobola",
  "Milestone birthday or anniversary",
  "Corporate event or gala",
  "Destination celebration",
];
const GUEST_BANDS = [
  "Intimate (20 to 60 guests)",
  "Classic (60 to 150 guests)",
  "Grand (150 to 300 guests)",
  "Large (300 to 600+ guests)",
];
const BUDGETS = [
  "Under $10,000",
  "$10,000 to $25,000",
  "$25,000 to $50,000",
  "$50,000 to $100,000",
  "$100,000+",
  "Not sure yet",
];
const VENUE_STATUS = ["Venue secured", "Shortlisted a few venues", "Need venue recommendations"];

const bandFor = (n: number) =>
  n <= 60 ? GUEST_BANDS[0] : n <= 150 ? GUEST_BANDS[1] : n <= 300 ? GUEST_BANDS[2] : GUEST_BANDS[3];

const fieldClass =
  "w-full border-0 border-b border-ink/25 bg-transparent py-3 text-[17px] outline-none transition placeholder:text-ink/35 focus:border-magenta";
const labelClass = "block text-xs uppercase tracking-[0.2em] text-ink/55";

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialService, initialScope }) => {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<FormState>({
    service: "Wedding Planning",
    eventType: EVENT_TYPES[0],
    targetDate: "",
    guestCount: GUEST_BANDS[2],
    budgetRange: BUDGETS[2],
    venueStatus: VENUE_STATUS[2],
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    visionNotes: "",
    scopeSummary: "",
  });

  useEffect(() => {
    if (initialService) setData((p) => ({ ...p, service: initialService }));
  }, [initialService]);

  useEffect(() => {
    if (!initialScope) return;
    setData((p) => ({
      ...p,
      service: initialScope.serviceName,
      guestCount: bandFor(initialScope.guestCount),
      scopeSummary: `${initialScope.recommendedPackage}. Estimated fee ${initialScope.estimatedFeeRangeUSD}. ${initialScope.estimatedEventBudgetGuidelineUSD}.`,
    }));
  }, [initialScope]);

  const set = (k: keyof FormState, v: string) => setData((p) => ({ ...p, [k]: v }));

  const summary = () =>
    [
      "Hello Kudzie, I'd like to enquire about an event.",
      "",
      `Name: ${data.clientName}`,
      `Phone: ${data.clientPhone}`,
      `Email: ${data.clientEmail}`,
      "",
      `Service: ${data.service}`,
      `Event type: ${data.eventType}`,
      `Date: ${data.targetDate || "Flexible"}`,
      `Guests: ${data.guestCount}`,
      `Budget: ${data.budgetRange}`,
      `Venue: ${data.venueStatus}`,
      data.scopeSummary ? `Estimator scope: ${data.scopeSummary}` : "",
      "",
      `Vision: ${data.visionNotes || "I'd love to talk it through."}`,
    ]
      .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
      .join("\n");

  const whatsappUrl = `https://wa.me/${KTP_BRAND.whatsappNumber}?text=${encodeURIComponent(summary())}`;
  const mailUrl = `mailto:${KTP_BRAND.email}?subject=${encodeURIComponent(
    `Enquiry from ${data.clientName}: ${data.service}`
  )}&body=${encodeURIComponent(summary())}`;

  const copy = async () => {
    await navigator.clipboard.writeText(summary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stepTitles = ["The event", "Budget and venue", "About you"];

  return (
    <section id="inquiry" className="bg-pearl px-4 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-magenta">Enquire</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-7xl">
            Tell Kudzie about your <em className="text-magenta">day.</em>
          </h2>
          <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ink/70">
            Three short steps. When you finish, your answers are written up as a
            WhatsApp message to Kudzie, so she has everything she needs to reply
            properly.
          </p>
          <div className="mt-10 space-y-1 text-sm text-ink/70">
            <a href={`tel:+${KTP_BRAND.whatsappNumber}`} className="block hover:text-magenta">
              {KTP_BRAND.phoneDisplay}
            </a>
            <a href={`mailto:${KTP_BRAND.email}`} className="block hover:text-magenta">
              {KTP_BRAND.email}
            </a>
          </div>
        </div>

        <div className="glass glass-light rounded-[28px] p-6 sm:p-10 lg:col-span-7">
          {!done ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl">{stepTitles[step - 1]}</h3>
                <span className="text-sm text-ink/50">Step {step} of 3</span>
              </div>
              <div className="mt-4 h-px bg-ink/10">
                <div
                  className="h-px bg-magenta transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              <div className="mt-8 space-y-7">
                {step === 1 && (
                  <>
                    <label className="block">
                      <span className={labelClass}>Service</span>
                      <select className={fieldClass} value={data.service} onChange={(e) => set("service", e.target.value)}>
                        {SERVICES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className={labelClass}>Type of event</span>
                        <select className={fieldClass} value={data.eventType} onChange={(e) => set("eventType", e.target.value)}>
                          {EVENT_TYPES.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className={labelClass}>Target date</span>
                        <input
                          className={fieldClass}
                          placeholder="e.g. 12 September 2027"
                          value={data.targetDate}
                          onChange={(e) => set("targetDate", e.target.value)}
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className={labelClass}>Number of guests</span>
                      <select className={fieldClass} value={data.guestCount} onChange={(e) => set("guestCount", e.target.value)}>
                        {GUEST_BANDS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                  </>
                )}

                {step === 2 && (
                  <>
                    <label className="block">
                      <span className={labelClass}>Overall budget (USD)</span>
                      <select className={fieldClass} value={data.budgetRange} onChange={(e) => set("budgetRange", e.target.value)}>
                        {BUDGETS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className={labelClass}>Venue</span>
                      <select className={fieldClass} value={data.venueStatus} onChange={(e) => set("venueStatus", e.target.value)}>
                        {VENUE_STATUS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                    {data.scopeSummary && (
                      <p className="rounded-2xl bg-magenta/5 p-4 text-sm leading-relaxed text-ink/70">
                        <span className="text-ink">From the estimator:</span> {data.scopeSummary}
                      </p>
                    )}
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className={labelClass}>Your name</span>
                        <input required className={fieldClass} value={data.clientName} onChange={(e) => set("clientName", e.target.value)} />
                      </label>
                      <label className="block">
                        <span className={labelClass}>Phone / WhatsApp</span>
                        <input required type="tel" className={fieldClass} placeholder="+263 …" value={data.clientPhone} onChange={(e) => set("clientPhone", e.target.value)} />
                      </label>
                    </div>
                    <label className="block">
                      <span className={labelClass}>Email</span>
                      <input required type="email" className={fieldClass} value={data.clientEmail} onChange={(e) => set("clientEmail", e.target.value)} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Your vision</span>
                      <textarea
                        rows={3}
                        className={`${fieldClass} resize-none`}
                        placeholder="Colours, mood, things you love, things you're worried about…"
                        value={data.visionNotes}
                        onChange={(e) => set("visionNotes", e.target.value)}
                      />
                    </label>
                  </>
                )}
              </div>

              <div className="mt-10 flex items-center justify-between">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-violet"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-7 py-3.5 text-sm font-medium text-white transition hover:brightness-110"
                  >
                    Prepare my message
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-magenta">Ready to send</p>
              <h3 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                Thank you, {data.clientName.split(" ")[0] || "friend"}.
              </h3>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink/70">
                Your details are ready. Send them to Kudzie on WhatsApp and she&apos;ll
                come back to you with availability and next steps.
              </p>

              <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10 text-sm">
                {[
                  ["Service", data.service],
                  ["Event", data.eventType],
                  ["Date", data.targetDate || "Flexible"],
                  ["Guests", data.guestCount],
                  ["Budget", data.budgetRange],
                  ["Venue", data.venueStatus],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3">
                    <dt className="text-ink/55">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-magenta via-[#A30B77] to-violet px-7 py-4 text-sm font-medium text-white shadow-lg shadow-magenta/25 transition hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send Direct to Kudzie on WhatsApp
                </a>
                <button onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-sm transition hover:border-ink/50">
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy message"}
                </button>
              </div>

              <p className="mt-6 text-sm text-ink/55">
                Prefer email?{" "}
                <a href={mailUrl} className="underline decoration-magenta underline-offset-4">
                  Send it to {KTP_BRAND.email}
                </a>
                {" · "}
                <button
                  onClick={() => {
                    setDone(false);
                    setStep(1);
                  }}
                  className="underline underline-offset-4"
                >
                  Edit answers
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
