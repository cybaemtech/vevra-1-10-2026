import { createFileRoute, Link } from "@tanstack/react-router";

import { BusinessModelsSection } from "@/components/site/BusinessModelsSection";
import { BusinessModelSpectrum } from "@/components/site/BusinessModelSpectrum";
import { BusinessValueSection } from "@/components/site/BusinessValueSection";
import { CeoStatement } from "@/components/site/CeoStatement";
import { ClientLogoMarquee } from "@/components/site/ClientLogoWall";
import { CustomerSuccessSection } from "@/components/site/CustomerSuccessSection";
import { EcosystemSection } from "@/components/site/EcosystemSection";
import { EvolutionSection } from "@/components/site/EvolutionSection";
import { FutureDirectionsSection } from "@/components/site/FutureDirectionsSection";
import { ImmersiveHero } from "@/components/site/ImmersiveHero";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { PackagingCapabilitiesSection } from "@/components/site/PackagingCapabilitiesSection";
import { ProblemSolutionsSection } from "@/components/site/ProblemSolutionsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ServiceMirrorWall } from "@/components/site/ServiceMirrorWall";
import { TrustedIndustryLeadersSection } from "@/components/site/TrustedIndustryLeadersSection";
import { RfqButton, Section, SiteLayout } from "@/components/site/SiteLayout";
import {
  
  CLIENTS,
  COMMITMENTS,
  COMPANY,
  CUSTOMER_PROBLEMS,
  CUSTOMER_SUCCESS_PROCESS,
  EVOLUTION,
  FUTURE_DIRECTIONS,
  PRODUCTS,
  STATS,
  VALUE_OUTCOMES,
} from "@/lib/site-content";
import { PRODUCT_IMAGES } from "@/lib/site-images";

const ECOSYSTEM = [
  "Design",
  "Engineer",
  "Manufacture",
  "Supply",
  "Store",
  "Track",
  "Return",
  "Reuse",
  "Optimize",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vevra Packaging — End-to-End Packaging Solutions" },
      { name: "description", content: "VEVRA designs, manufactures, manages and optimizes packaging ecosystems so businesses can focus on their core products." },
      { property: "og:title", content: "Vevra Packaging — We Manage Your Packaging Ecosystem" },
      { property: "og:description", content: "End-to-end packaging and supply-chain solutions across design, manufacturing, returnables, warehousing and logistics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <ImmersiveHero />

      {/* TRUSTED BY INDUSTRY LEADERS */}
      <TrustedIndustryLeadersSection />

      <CeoStatement />

      {/* ECOSYSTEM */}
      <EcosystemSection />

      {/* PROBLEMS */}
      <ProblemSolutionsSection />

      {/* PACKAGING CAPABILITIES */}
      <PackagingCapabilitiesSection />

      {/* SERVICES */}
      <ServicesSection />

      {/* BUSINESS MODELS */}
      <BusinessModelsSection />

      {/* VALUE OUTCOMES */}
      <BusinessValueSection />

      {/* CUSTOMER SUCCESS */}
      <CustomerSuccessSection />

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* EVOLUTION */}
      <EvolutionSection />

      {/* THE NEXT CHAPTER */}
      <FutureDirectionsSection />

      {/* FINAL CTA (WHITE BACKGROUND THEME WITH RICH BOX SHADOW) */}
      <section className="relative overflow-hidden bg-white pt-4 pb-14 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 text-slate-900">
        {/* Soft Ambient Radiance */}
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-r from-slate-50/95 via-white to-blue-50/30 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_-15px_rgba(11,25,48,0.12),0_10px_25px_-5px_rgba(217,35,42,0.06)] transition-all duration-300 hover:shadow-[0_25px_60px_-15px_rgba(11,25,48,0.16)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/80 px-3.5 py-1 shadow-sm backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9232A]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D9232A]">
                    GET STARTED TODAY
                  </span>
                </div>

                <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0B1930] leading-tight">
                  Have a packaging challenge?{" "}
                  <span className="text-[#D9232A]">Let&apos;s solve it.</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5568] max-w-2xl font-normal">
                  Tell us what you manufacture, move or store. Our team will identify the right packaging,
                  service or end-to-end model. Or call{" "}
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="font-bold text-[#0B1930] hover:text-[#D9232A] underline transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <Link
                  to="/calculator"
                  className="rounded-full bg-[#D9232A] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Generate My RFQ</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0B1930] shadow-sm transition-all duration-300 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-slate-50 hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Talk to an Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
