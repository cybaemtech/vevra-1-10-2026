import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  Check,
  CheckCircle2,
  Compass,
  Factory,
  Globe2,
  Layers,
  Leaf,
  RefreshCw,
  Repeat,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  Warehouse,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import cap05Onsite from "@/assets/capabilities/cap-05-onsite.jpg";
import { SERVICES } from "@/lib/site-content";
import { SERVICE_IMAGES } from "@/lib/site-images";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — We Manage the Packaging Ecosystem | VEVRA" },
      {
        name: "description",
        content:
          "Packaging engineering, returnables, rental, pooling, on-site operations, logistics and warehouse management from one accountable partner.",
      },
      { property: "og:title", content: "VEVRA Packaging Services" },
      {
        property: "og:description",
        content: "Beyond packaging: VEVRA manages the packaging ecosystem around your product and supply chain.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

// Map specific icons and colors for each service domain
const SERVICE_ICONS: Record<
  string,
  {
    icon: typeof Settings;
    badgeBg: string;
    badgeText: string;
    accentBorder: string;
    category: string;
  }
> = {
  "packaging-engineering": {
    icon: Compass,
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    accentBorder: "group-hover:border-blue-500",
    category: "Engineering & R&D",
  },
  "returnable-packaging-management": {
    icon: RefreshCw,
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    accentBorder: "group-hover:border-emerald-500",
    category: "Circular Economy",
  },
  "returnable-packaging": {
    icon: RefreshCw,
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    accentBorder: "group-hover:border-emerald-500",
    category: "Circular Economy",
  },
  "packaging-rental": {
    icon: CalendarClock,
    badgeBg: "bg-rose-50 text-[#D9232A]",
    badgeText: "text-[#D9232A]",
    accentBorder: "group-hover:border-[#D9232A]",
    category: "Zero Capex",
  },
  "equipment-pooling": {
    icon: Repeat,
    badgeBg: "bg-purple-50 text-purple-600",
    badgeText: "text-purple-600",
    accentBorder: "group-hover:border-purple-500",
    category: "Shared Network",
  },
  "on-site-packaging-operations": {
    icon: Factory,
    badgeBg: "bg-amber-50 text-amber-600",
    badgeText: "text-amber-600",
    accentBorder: "group-hover:border-amber-500",
    category: "Plant Operations",
  },
  "warehouse-packaging-management": {
    icon: Warehouse,
    badgeBg: "bg-indigo-50 text-indigo-600",
    badgeText: "text-indigo-600",
    accentBorder: "group-hover:border-indigo-500",
    category: "Inventory & Visibility",
  },
  "transport-logistics": {
    icon: Truck,
    badgeBg: "bg-sky-50 text-sky-600",
    badgeText: "text-sky-600",
    accentBorder: "group-hover:border-sky-500",
    category: "Multimodal Freight",
  },
  "air-ocean-freight": {
    icon: Globe2,
    badgeBg: "bg-cyan-50 text-cyan-600",
    badgeText: "text-cyan-600",
    accentBorder: "group-hover:border-cyan-500",
    category: "Global Forwarding",
  },
  "packaging-optimization-sustainability": {
    icon: Sparkles,
    badgeBg: "bg-teal-50 text-teal-600",
    badgeText: "text-teal-600",
    accentBorder: "group-hover:border-teal-500",
    category: "VA/VE & Eco",
  },
};

const ECOSYSTEM_PILLARS = [
  {
    step: "01",
    title: "Engineer & Design",
    desc: "Bespoke CAD design, pack-out analysis, stress simulations, and physical transit validation.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Deploy & Rent",
    desc: "Zero-capex supply, pooling models, and customized returnable containers ready on-demand.",
    icon: CalendarClock,
  },
  {
    step: "03",
    title: "Operate On-Site",
    desc: "Trained packaging manpower, line-feeding, packing stations, and dispatch supervision.",
    icon: Factory,
  },
  {
    step: "04",
    title: "Circulate & Manage",
    desc: "Reverse logistics, closed-loop pooling, repair hubs, and 24/7 inventory visibility.",
    icon: RefreshCw,
  },
];

const VALUE_ADVANTAGES = [
  {
    title: "Single Accountability",
    desc: "One trusted partner managing engineering, assets, manpower, freight, and warehousing without vendor friction.",
    icon: ShieldCheck,
  },
  {
    title: "Capex to Opex Model",
    desc: "Eliminate hefty upfront capital expenditure through flexible rental, leasing, and shared pooling networks.",
    icon: BarChart3,
  },
  {
    title: "Line-Speed Reliability",
    desc: "Zero assembly-line stoppages with 99.8% on-time delivery guarantees and trained on-site operations.",
    icon: CheckCircle2,
  },
  {
    title: "Circular Sustainability",
    desc: "Drastically reduce single-use packaging waste and carbon footprint through rugged reusable packaging systems.",
    icon: Sparkles,
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        {/* Ambient Soft Glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/80 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-rose-50/70 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-[780px]">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-1.5 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#1E3A8A]">
                  INTEGRATED PACKAGING SERVICES
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-black tracking-tight leading-[1.08] text-[#0B1930]">
                Beyond packaging. <br />
                We manage the{" "}
                <span className="text-[#D9232A]">packaging ecosystem.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#4A5568] font-normal max-w-[680px]">
                From packaging engineering and returnable fleets to rental, pooling, on-site plant operations, logistics, and warehouse management — VEVRA delivers complete operational accountability.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#D9232A] px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-2xl hover:shadow-[#D9232A]/35 hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center gap-2.5"
                >
                  <span>Generate Quick RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/calculator"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0B1930] transition-all duration-300 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-slate-50 hover:-translate-y-0.5 inline-flex items-center gap-2.5"
                >
                  <span>Cost Calculator</span>
                  <ArrowRight className="h-4 w-4 text-[#1E3A8A]" />
                </Link>
              </div>
            </div>

            {/* Right Decorative Cursive Card */}
            <div className="hidden lg:flex flex-col items-end select-none">
              <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50/90 to-white p-6 shadow-lg shadow-slate-200/50 text-right max-w-[320px]">
                <span className="font-['Dancing_Script',cursive] text-3xl font-bold text-[#D9232A] block leading-tight">
                  Total Ecosystem Control
                </span>
                <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.20em] text-[#0B1930]/80 leading-relaxed">
                  ONE ACCOUNTABLE PARTNER <br />
                  FOR YOUR ENTIRE SUPPLY CHAIN
                </p>
                <div className="mt-4 flex items-center justify-end gap-2 text-xs font-bold text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>ISO &amp; Quality Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Quick Stat Pillars */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-100 pt-8 sm:pt-10">
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3A8A]">
                <Layers className="h-5 w-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#0B1930] block leading-none">7</span>
                <span className="text-[11px] font-bold text-slate-500 block mt-1">Core Service Domains</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-5 w-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#0B1930] block leading-none">99.8%</span>
                <span className="text-[11px] font-bold text-slate-500 block mt-1">On-Time Execution</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                <CalendarClock className="h-5 w-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#0B1930] block leading-none">Zero Capex</span>
                <span className="text-[11px] font-bold text-slate-500 block mt-1">Rental &amp; Pooling</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <UsersRound className="h-5 w-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#0B1930] block leading-none">500+</span>
                <span className="text-[11px] font-bold text-slate-500 block mt-1">Active Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL 7 SERVICES SHOWCASE GRID */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="all-services-title">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Section Sub-header */}
          <div className="max-w-[720px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#D9232A]">
              <span className="h-1 w-8 bg-[#D9232A] inline-block rounded-full" />
              CAPABILITY MATRIX
            </div>

            <h2
              id="all-services-title"
              className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight text-[#0B1930]"
            >
              Explore our full <span className="text-[#D9232A]">service suite</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5568] font-normal">
              Select any capability below to explore specialized workflows, engineering standards, case benefits, and tailored operating models.
            </p>
          </div>

          {/* 7 Services Grid Cards */}
          <div className="mt-12 sm:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, index) => {
              const meta = SERVICE_ICONS[s.slug] || SERVICE_ICONS["packaging-engineering"];
              const Icon = meta.icon;
              const stepNumber = String(index + 1).padStart(2, "0");
              const serviceImg = SERVICE_IMAGES[s.slug] || SERVICE_IMAGES["packaging-engineering"];

              return (
                <div
                  key={s.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-2xl"
                >
                  <div>
                    {/* Image Banner with Badges */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={serviceImg}
                        alt={s.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1930]/80 via-transparent to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                        <span className="rounded-xl bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-black text-[#0B1930] shadow-sm">
                          {stepNumber}
                        </span>
                        <span className="rounded-xl bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                          {meta.category}
                        </span>
                      </div>

                      {/* Floating Icon in Corner */}
                      <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2.5">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${meta.badgeBg} shadow-md backdrop-blur`}>
                          <Icon className="h-5 w-5 stroke-[2.2]" />
                        </div>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-black text-[#0B1930] group-hover:text-[#D9232A] transition-colors leading-snug">
                        {s.name}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#4A5568] font-normal min-h-[40px]">
                        {s.short}
                      </p>

                      {/* Feature Points Pill Chips */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.points.slice(0, 4).map((pt) => (
                          <span
                            key={pt}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200/90 bg-slate-50/80 px-2.5 py-1 text-[11px] font-bold text-[#0B1930]"
                          >
                            <Check className="h-3 w-3 text-emerald-600 stroke-[2.5]" />
                            <span>{pt}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="border-t border-slate-100 p-5 sm:px-7 flex items-center justify-between bg-slate-50/40">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0B1930] group-hover:text-[#D9232A] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Explore Service Details</span>
                    </Link>

                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-[#0B1930] shadow-sm transition-all duration-300 group-hover:bg-[#D9232A] group-hover:border-[#D9232A] group-hover:text-white group-hover:scale-105"
                      aria-label={`Explore ${s.name}`}
                    >
                      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PACKAGING ECOSYSTEM LIFECYCLE SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24 text-slate-900 border-y border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#1E3A8A]">
                CLOSED-LOOP ADVANTAGE
              </span>
            </div>

            <h2 className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight text-[#0B1930]">
              How the VEVRA <span className="text-[#D9232A]">Ecosystem Operates</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5568]">
              Unlike traditional one-off vendors, VEVRA orchestrates every phase from engineering blueprint to live circular deployment.
            </p>
          </div>

          {/* 4 Step Lifecycle Cards */}
          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ECOSYSTEM_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.step}
                  className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-[#1E3A8A]/30">
                      {pillar.step}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#1E3A8A]">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Body */}
                  <h3 className="mt-6 text-lg font-black text-[#0B1930]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY ENTERPRISES CHOOSE VEVRA */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            {/* Left Content Column */}
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#D9232A]">
                <span className="h-1 w-8 bg-[#D9232A] inline-block rounded-full" />
                ENTERPRISE VALUE
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] text-[#0B1930]">
                Built for demanding supply chains &amp; <span className="text-[#D9232A]">high-volume lines.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4A5568]">
                We eliminate the friction of juggling multiple packaging suppliers, transporters, manpower agencies, and storage facilities. Experience smooth accountability under one service umbrella.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#D9232A] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Partner With Us
                </Link>

                <Link
                  to="/testimonials"
                  className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0B1930] transition-all duration-300 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-slate-50"
                >
                  Client Testimonials
                </Link>
              </div>
            </div>

            {/* Right 4 Grid Value Tiles */}
            <div className="grid gap-4.5 sm:grid-cols-2">
              {VALUE_ADVANTAGES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9232A]/40 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A]">
                      <Icon className="h-5.5 w-5.5 stroke-[2]" />
                    </div>
                    <h3 className="mt-4 text-base font-black text-[#0B1930]">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-[#4A5568] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CONVERSION CTA CARD (WHITE THEME WITH RIGHT-SIDE IMAGE) */}
      <section className="relative overflow-hidden bg-white pb-20 pt-6 text-slate-900">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-r from-white via-slate-50/90 to-slate-100/40 shadow-2xl">
            {/* Ambient Soft Radial Radiance */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="pointer-events-none absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

            {/* Right Side Image Banner (Seamless Left Gradient Blend) */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 hidden lg:block w-[48%] xl:w-[50%] overflow-hidden select-none">
              <img
                src={cap05Onsite}
                alt="On-site packaging operations by VEVRA"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              {/* Horizontal fade from solid white to transparent image */}
              <div className="absolute inset-y-0 left-0 w-36 xl:w-52 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/30 to-transparent" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-2xl px-8 py-12 sm:px-12 sm:py-16 lg:py-18">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/80 px-4 py-1.5 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9232A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D9232A]">
                  START YOUR EVALUATION
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-black tracking-tight leading-[1.1] text-[#0B1930]">
                Ready to transform your <br />
                <span className="text-[#D9232A]">packaging operations?</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-sm sm:text-base text-[#4A5568] max-w-xl leading-relaxed font-normal">
                Connect with our packaging engineers to evaluate your current transit damage, returnable feasibility, rental capacity, or on-site packaging requirements.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#D9232A] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-2xl hover:shadow-[#D9232A]/35 hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center gap-2.5"
                >
                  <span>Request Service Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/calculator"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0B1930] shadow-sm transition-all duration-300 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-slate-50 hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center gap-2.5"
                >
                  <span>Calculate Potential Savings</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
