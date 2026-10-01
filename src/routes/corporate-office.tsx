import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Cpu,
  Globe2,
  Leaf,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import office01Leadership from "@/assets/VEVRA_Office_Professional_Images/01_leadership_core_team.png";
import office02Building from "@/assets/VEVRA_Office_Professional_Images/02_corporate_office_building.png";
import office03CustomerReview from "@/assets/VEVRA_Office_Professional_Images/03_customer_review_sessions.png";
import office04Engineering from "@/assets/VEVRA_Office_Professional_Images/04_engineering_operations_floor.png";
import office05OneTeam from "@/assets/VEVRA_Office_Professional_Images/05_one_team_one_purpose.png";
import office06Collaboration from "@/assets/VEVRA_Office_Professional_Images/06_everyday_collaboration.png";
import heroBg from "@/assets/herobg.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { COMPANY } from "@/lib/site-content";

export const Route = createFileRoute("/corporate-office")({
  head: () => ({
    meta: [
      { title: "Corporate Office — VEVRA Packaging Pvt. Ltd., Pune" },
      {
        name: "description",
        content:
          "VEVRA Packaging Pvt. Ltd. corporate office at Gat No. 344, Village Kuruli, Tal. Khed, Dist. Pune 410 501, Maharashtra, India.",
      },
      { property: "og:title", content: "VEVRA Packaging Corporate Office" },
      { property: "og:description", content: "Our registered corporate office in Pune, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CorporateOfficePage,
});

const OFFICE_GALLERY = [
  {
    step: "01",
    title: "LEADERSHIP & CORE TEAM",
    image: office01Leadership,
    alt: "VEVRA leadership and core team in corporate boardroom",
  },
  {
    step: "02",
    title: "CORPORATE OFFICE, KURULI",
    image: office02Building,
    alt: "VEVRA Corporate Office building exterior in Kuruli, Pune",
  },
  {
    step: "03",
    title: "CUSTOMER REVIEW SESSIONS",
    image: office03CustomerReview,
    alt: "VEVRA customer review and collaboration boardroom session",
    screenBadge: "Solutions for a Smarter Tomorrow",
  },
  {
    step: "04",
    title: "ENGINEERING & OPERATIONS FLOOR",
    image: office04Engineering,
    alt: "VEVRA packaging engineering and operations team floor",
    overlayText: ["Design", "Develop", "Deliver"],
    overlayAlign: "right" as const,
  },
  {
    step: "05",
    title: "ONE TEAM, ONE PURPOSE",
    image: office05OneTeam,
    alt: "VEVRA team hallway and collaborative office lobby",
    overlayText: ["People", "Partnerships", "Packaging", "Progress"],
    overlayAlign: "left" as const,
  },
  {
    step: "06",
    title: "EVERYDAY COLLABORATION",
    image: office06Collaboration,
    alt: "VEVRA everyday workspace collaboration lounge",
    overlayText: ["Great", "Packaging", "Builds", "Greater", "Possibilities"],
    overlayAlign: "right" as const,
  },
];

function CorporateOfficePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 text-brand-blue-dark border-b border-slate-100">
        {/* Background Graphic Accent - Constrained to right */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-1/2 select-none overflow-hidden hidden lg:block opacity-20 mix-blend-multiply" aria-hidden="true">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover object-left"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Heading, Subtext, Buttons & Feature Badges */}
            <div className="lg:col-span-6 2xl:col-span-6 z-10 py-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.26em] text-[#D9232A]">
                  CORPORATE OFFICE
                </span>
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-black tracking-tight text-brand-blue-dark leading-[1.08]">
                VEVRA <span className="text-[#D9232A]">Packaging</span>
                <br />
                Pvt. Ltd.
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-medium">
                Our corporate office and manufacturing footprint support an evolving end-to-end packaging and supply-chain solutions business.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23] hover:shadow-xl"
                >
                  Generate Quick RFQ <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D9232A] bg-transparent px-6 py-3 text-sm font-bold text-[#D9232A] transition-all hover:bg-rose-50"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 3 Horizontal Feature Badges */}
              <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Strategic Location<br />in Pune
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Experienced<br />Team
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Sustainable<br />Packaging
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Building Visual with Floating Cards */}
            <div className="lg:col-span-6 2xl:col-span-6">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                {/* Main Building Image Card */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-2xl">
                  <img
                    src={office02Building}
                    alt="VEVRA Packaging Corporate Office building in Kuruli, Pune"
                    className="h-[360px] sm:h-[420px] lg:h-[460px] w-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10" />

                  {/* Top-Right Floating Glass Badge */}
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 rounded-2xl bg-white/80 backdrop-blur-md p-4 border border-white/80 shadow-xl text-right select-none">
                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-brand-blue-dark leading-tight">
                      PEOPLE
                      <br />
                      IDEAS
                      <br />
                      PACKAGING
                      <br />
                      A BRIGHTER
                      <br />
                      TOMORROW
                    </p>
                    <span className="inline-block w-6 h-0.5 bg-[#D9232A] mt-2 rounded-full" />
                  </div>

                  {/* Bottom-Right Floating Dark Badge */}
                  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 rounded-2xl bg-slate-950/85 backdrop-blur-md px-4 py-3.5 border border-white/10 shadow-2xl text-left select-none text-white">
                    <p className="text-xs sm:text-[13px] font-semibold leading-snug tracking-wide text-slate-200">
                      Packaging
                      <br />
                      People
                      <br />
                      Partnerships
                      <br />
                      Progress
                    </p>
                    <span className="inline-block w-5 h-0.5 bg-[#D9232A] mt-2 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Address & Reach Us Section */}
      <section className="bg-slate-50/70 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Headquarters Address Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition-all hover:shadow-md">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9232A]" />
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-blue-dark">Headquarters Address</h2>
                  <div className="mt-3 space-y-1 text-sm text-slate-600 font-medium leading-relaxed">
                    <p>Gat No. 344, Village Kuruli,</p>
                    <p>Tal. Khed, Dist. Pune – 410 501,</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reach Us Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition-all hover:shadow-md">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9232A]" />
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-brand-blue-dark">Reach us</h2>
                  <div className="mt-3 space-y-1.5 text-sm text-slate-600 font-medium">
                    <div className="space-y-0.5">
                      <p className="font-bold text-brand-blue-dark">{COMPANY.phone}</p>
                      <p className="font-bold text-brand-blue-dark">{COMPANY.altPhone}</p>
                    </div>
                    <div className="pt-1 text-xs sm:text-sm text-slate-600">
                      <p>{COMPANY.email}</p>
                      <p>{COMPANY.marketingEmail}</p>
                    </div>
                    <p className="pt-1 text-xs font-semibold text-slate-500">
                      {COMPANY.timings}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inside VEVRA Gallery Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Quote Box */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                INSIDE VEVRA
              </span>
              <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Our people, our office, our way of working
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                A closer look at the team and the corporate office in Kuruli, Pune, where packaging problems are studied, engineered and managed end to end.
              </p>
            </div>

            {/* Right Quote */}
            <div className="flex items-start gap-3 rounded-2xl bg-rose-50/60 p-4 sm:p-5 border border-rose-100/80 md:max-w-sm shrink-0">
              <span className="text-4xl lg:text-5xl font-serif font-black text-[#D9232A] leading-none select-none">“</span>
              <div>
                <p className="text-sm sm:text-[15px] font-bold italic text-brand-blue-dark leading-snug">
                  A collaborative space built for innovative packaging solutions.
                </p>
                <span className="inline-block w-8 h-0.5 bg-[#D9232A] mt-2 rounded-full" />
              </div>
            </div>
          </div>

          {/* 6 Image Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {OFFICE_GALLERY.map((item) => (
              <figure
                key={item.step}
                className="group relative h-[280px] sm:h-[320px] lg:h-[350px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-500 hover:shadow-xl hover:border-slate-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Soft gradient veil on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 transition-opacity duration-300" />

                {/* Optional Custom Badges / Text Overlays matching mockup */}
                {item.screenBadge && (
                  <div className="absolute top-5 left-1/3 z-10 hidden sm:block rounded-xl bg-slate-900/80 backdrop-blur-md px-4 py-2.5 text-white border border-white/10 shadow-lg text-center select-none">
                    <p className="text-xs font-bold leading-tight tracking-wide">
                      {item.screenBadge}
                    </p>
                  </div>
                )}

                {item.overlayText && item.overlayAlign === "right" && (
                  <div className="absolute top-5 right-5 z-10 rounded-xl bg-white/80 backdrop-blur-md px-3.5 py-3 text-brand-blue-dark text-left border border-white/80 shadow-md select-none">
                    <div className="text-[11px] sm:text-xs font-bold leading-tight">
                      {item.overlayText.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <span className="inline-block w-5 h-0.5 bg-[#D9232A] mt-1.5 rounded-full" />
                  </div>
                )}

                {item.overlayText && item.overlayAlign === "left" && (
                  <div className="absolute top-5 left-5 z-10 rounded-xl bg-white/80 backdrop-blur-md px-3.5 py-3 text-brand-blue-dark text-left border border-white/80 shadow-md select-none">
                    <div className="text-[11px] sm:text-xs font-bold leading-tight">
                      {item.overlayText.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <span className="inline-block w-5 h-0.5 bg-[#D9232A] mt-1.5 rounded-full" />
                  </div>
                )}

                {/* Bottom Left Step & Caption Pill */}
                <figcaption className="absolute bottom-4 left-4 z-10 flex items-center overflow-hidden rounded-xl shadow-lg border border-white/20 select-none">
                  <span className="bg-[#D9232A] px-3 py-1.5 text-xs font-black text-white">
                    {item.step}
                  </span>
                  <span className="bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 flex justify-start">
            <Link
              to="/calculator"
              className="arrow-move inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-[#D9232A] hover:text-[#D9232A] hover:shadow-md"
            >
              Generate Quick RFQ <span className="arrow">→</span>
            </Link>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
