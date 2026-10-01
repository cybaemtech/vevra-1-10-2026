import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Leaf,
  Settings,
  Users,
} from "lucide-react";

import productOnImg from "@/assets/product on.png";

const EVOLUTION_STAGES = [
  { step: "01", name: "Packaging Products" },
  { step: "02", name: "Returnable Packaging" },
  { step: "03", name: "Packaging Rental" },
  { step: "04", name: "PP / Plastic Solutions" },
  { step: "05", name: "Packaging Engineering" },
  { step: "06", name: "On-Site Packaging Operations" },
  { step: "07", name: "Warehouse & Logistics Support" },
  { step: "08", name: "End-to-End Packaging Management" },
];

const BOTTOM_PILLARS = [
  { label: "Reliable Solutions", icon: Settings },
  { label: "Stronger Partnerships", icon: Users },
  { label: "Sustainable Growth", icon: Leaf },
  { label: "Greater Efficiency", icon: BarChart3 },
];

export function EvolutionSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20 text-slate-900 border-t border-slate-100"
      aria-labelledby="evolution-title"
    >
      {/* Top Right Dark Angle Polygonal Corner Badge */}
      <div className="hidden lg:block absolute top-0 right-0 z-10">
        <div
          className="relative bg-[#071A38] text-white pt-8 pb-10 pl-16 pr-12 select-none"
          style={{
            clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-200 leading-snug block">
              SOLUTIONS
              <br />
              THAT MOVE
              <br />
              BUSINESS
              <br />
              FORWARD
            </span>
            <span className="h-0.5 w-6 bg-brand inline-block mt-2 ml-auto" />
          </div>
        </div>
      </div>

      {/* Subtle Background Ambience & Bottom-Left Abstract Fine Lines */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-[450px] w-[450px] rounded-full bg-rose-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-0 w-80 h-40 opacity-40">
        <svg viewBox="0 0 300 150" fill="none" className="w-full h-full text-brand/30">
          <path d="M-50 150 C 50 100, 150 140, 300 60" stroke="currentColor" strokeWidth="1" />
          <path d="M-50 150 C 40 80, 140 120, 300 40" stroke="currentColor" strokeWidth="0.75" />
          <path d="M-50 150 C 30 60, 130 100, 300 20" stroke="#0B1E3B" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Main Grid: Left Stepper & Content + Right 3D Pallet & Pillars */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.32fr] items-start">
          {/* Left Column: Eyebrow, Heading, Subtitle, Continuous Connected Stepper & Button */}
          <div className="max-w-[580px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              PRODUCT ON
            </div>

            {/* Heading */}
            <h2
              id="evolution-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark"
            >
              <span className="whitespace-nowrap">From packaging products to</span> <br className="hidden sm:inline" />
              <span className="text-brand whitespace-nowrap">packaging partnership.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium max-w-[500px]">
              A complete ecosystem to support your packaging needs — from design to delivery and beyond.
            </p>

            {/* Continuous Vertical Connected Stepper (01 to 08) */}
            <div className="relative mt-8 sm:mt-9">
              {/* Continuous vertical connecting line */}
              <div className="absolute left-[11px] sm:left-[13px] top-3 bottom-3 w-[2px] bg-brand/90" />

              <div className="space-y-3.5 sm:space-y-4">
                {EVOLUTION_STAGES.map((item) => (
                  <div
                    key={item.step}
                    className="group relative flex items-center gap-4 transition-all duration-200"
                  >
                    {/* Circle Node */}
                    <span className="relative z-10 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] sm:text-xs font-black text-white shadow-[0_2px_8px_rgba(225,29,72,0.35)] transition-transform duration-200 group-hover:scale-110">
                      {item.step}
                    </span>

                    {/* Step Title */}
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark transition-colors duration-200 group-hover:text-brand">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 sm:mt-9">
              <Link
                to="/services"
                className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Packaging Pallet Scene + 4-Item Feature Row */}
          <div className="flex flex-col justify-end h-full pt-6 lg:pt-16 xl:pt-24 mt-auto">
            {/* 3D Pallet Artwork */}
            <div className="relative w-full">
              <img
                src={productOnImg}
                alt="VEVRA End-to-End Packaging Ecosystem - Wooden Pallet, Boxes, Crates and Film Rolls"
                className="w-full h-auto object-contain select-none"
                loading="lazy"
              />
            </div>

            {/* Bottom 4 Feature Pillars under the image */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 border-t sm:border-t-0 pt-4 sm:pt-0">
              {BOTTOM_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isLast = idx === BOTTOM_PILLARS.length - 1;
                return (
                  <div
                    key={pillar.label}
                    className={`flex flex-col items-center text-center px-3 sm:px-4 ${
                      !isLast ? "sm:border-r sm:border-slate-200" : ""
                    }`}
                  >
                    <Icon className="h-5 w-5 text-slate-700 stroke-[1.8] transition-colors hover:text-brand" />
                    <span className="mt-2 text-[11px] sm:text-xs font-bold text-brand-blue-dark leading-tight">
                      {pillar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
