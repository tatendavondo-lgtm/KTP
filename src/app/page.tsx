"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ParallaxScrollytelling } from "@/components/ParallaxScrollytelling";
import { AboutKudzie } from "@/components/AboutKudzie";
import { Services } from "@/components/Services";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BudgetEstimator, ScopeEstimateResult } from "@/components/BudgetEstimator";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  const [service, setService] = useState("Wedding Planning");
  const [scope, setScope] = useState<ScopeEstimateResult | null>(null);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const chooseService = (title: string) => {
    setService(title);
    scrollTo("inquiry");
  };

  const sendScope = (s: ScopeEstimateResult) => {
    setScope(s);
    setService(s.serviceName);
    scrollTo("inquiry");
  };

  return (
    <main className="relative min-h-screen bg-pearl">
      <Navbar onOpenConsultation={() => chooseService("Private Consultation")} />

      <ParallaxScrollytelling
        onInquireStage={() => chooseService("Event Concepts")}
      />

      <AboutKudzie />
      <Services onSelectService={chooseService} />
      <PortfolioGallery onInquireSimilar={() => chooseService("Event Concepts")} />
      <BudgetEstimator onSendScopeToForm={sendScope} />
      <InquiryForm initialService={service} initialScope={scope} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
