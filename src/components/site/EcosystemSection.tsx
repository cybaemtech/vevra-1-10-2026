import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Factory,
  FileEdit,
  MapPin,
  Package,
  Recycle,
  RotateCcw,
  Settings,
} from "lucide-react";

import opImg from "@/assets/op.png";
import op1Img from "@/assets/op1.png";
import op2Img from "@/assets/op2.png";
import op3Img from "@/assets/op3.png";

const ECOSYSTEM_STAGES = [
  { step: "01", name: "Design", icon: FileEdit },
  { step: "02", name: "Engineer", icon: Settings },
  { step: "03", name: "Manufacture", icon: Factory },
  { step: "04", name: "Supply", icon: Package },
  { step: "05", name: "Store", icon: Building2 },
  { step: "06", name: "Track", icon: MapPin },
  { step: "07", name: "Return", icon: RotateCcw },
  { step: "08", name: "Reuse", icon: Recycle },
  { step: "09", name: "Optimize", icon: BarChart3 },
];

const PILLARS = [
  {
    title: "Design",
    body: "Packaging engineered around your product, process and supply chain.",
    bg: op1Img,
    to: "/services",
  },
  {
    title: "Manage",
    body: "Packaging availability, returnables, rental, warehousing and operational requirements.",
    bg: op2Img,
    to: "/services",
  },
  {
    title: "Optimize",
    body: "Cost, quality, space, sustainability and supply-chain efficiency.",
    bg: op3Img,
    to: "/services",
  },
];

export function EcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="ecosystem-title">
      {/* Background soft red/pink glow arches */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose-50/70 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Top Header Row: Left Typography & Right 3D Conveyor Image */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Left Text */}
          <div className="max-w-[620px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              ONE PARTNER
            </div>

            <h2
              id="ecosystem-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              One partner. One <br />
              <span className="text-brand whitespace-nowrap block">packaging ecosystem.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
              Your business should not have to manage packaging complexity across multiple vendors. VEVRA connects every stage of the packaging lifecycle into a single managed system.
            </p>
          </div>

          {/* Right 3D Conveyor Visual with Cursive Accent */}
          <div className="relative flex flex-col items-center lg:items-end">
            <div className="absolute top-2 sm:top-4 lg:top-6 left-3 sm:left-6 lg:left-8 z-20 select-none pointer-events-none text-left">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl lg:text-4xl font-bold text-brand -rotate-6 block leading-none">
                From Concept
                <br />
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">to Circularity</span>
              </span>
              <svg className="h-4 w-28 sm:w-36 text-brand mt-0.5" viewBox="0 0 120 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 8 Q 60 16, 120 4" />
              </svg>
            </div>

            <div className="relative w-full max-w-[600px] overflow-hidden">
              <img
                src={opImg}
                alt="VEVRA End-to-End Packaging Ecosystem"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Middle: 9-Stage Connected Pipeline Flow */}
        <div className="mt-14 sm:mt-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[900px] gap-2">
            {ECOSYSTEM_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={stage.step} className="flex items-center gap-2 sm:gap-3 flex-1">
                  {/* Stage Node */}
                  <div className="flex flex-col items-center text-center group cursor-pointer w-20">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-200/90 shadow-sm text-brand-blue-dark transition-all duration-300 group-hover:border-brand group-hover:text-brand group-hover:shadow-md group-hover:scale-105">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.8]" />
                    </div>
                    <span className="mt-2 text-[11px] sm:text-xs font-black text-brand tracking-wider">
                      {stage.step}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-brand-blue-dark">
                      {stage.name}
                    </span>
                  </div>

                  {/* Red Arrow Divider (between items) */}
                  {idx < ECOSYSTEM_STAGES.length - 1 ? (
                    <div className="flex-1 flex justify-center text-brand font-bold text-base select-none">
                      →
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom: 3 Pillar Cards (Design, Manage, Optimize) */}
        <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.title}
              to={pillar.to}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.06)] min-h-[290px] sm:min-h-[310px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brand/40"
            >
              {/* Background Image (op1, op2, op3) */}
              <img
                src={pillar.bg}
                alt={pillar.title}
                className="absolute inset-0 h-full w-full object-cover object-right pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Foreground Card Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
                <div className="max-w-[62%] sm:max-w-[56%]">
                  <span className="h-1 w-8 bg-brand block rounded-full" />
                  <h3 className="mt-4 text-xl sm:text-2xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-700 font-medium">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-100 text-brand font-bold transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105 shadow-sm">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Bottom Tagline & Script with Connecting Line */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 w-full">
            <p className="shrink-0 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand">
              SUSTAINABLE PACKAGING FOR A BRIGHTER TOMORROW
            </p>
            <div className="hidden sm:block h-[1.5px] bg-brand/30 flex-1" />
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-brand -rotate-3">
              More Than Packaging
            </span>
            <svg className="h-4 w-20 text-brand" viewBox="0 0 80 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0 6 Q 40 12, 80 2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
