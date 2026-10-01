import { ArrowRight, ArrowUpRight, Globe2, MapPin, Package } from "lucide-react";

import { COMPANY } from "@/lib/site-content";
import worldMapImg from "@/assets/editorial/world-expansion-map.png";

const INDIA_LOCATIONS = [
  "Pune (Kuruli) – Corporate & manufacturing",
  "Chakan Industrial Area",
  "Ranjangaon",
  "Bhosari MIDC",
  "Chennai",
  "Bengaluru",
  "Gurugram",
  "Ahmedabad",
  "Nashik",
  "Aurangabad",
  "Indore",
];

export function WorldExpansionMap() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100" aria-labelledby="global-expansion-title">
      {/* Background soft ambient radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-rose-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-slate-100/80 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* 1. CENTERED TOP HEADER & DESCRIPTION */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-brand shadow-sm">
            <Globe2 className="h-3.5 w-3.5 text-brand" />
            <span>INDIA BUILT. GLOBALLY BOUND.</span>
          </div>

          {/* Centered Heading */}
          <h2
            id="global-expansion-title"
            className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.12] text-brand-blue-dark"
          >
            A Pan-India network,{" "}
            <span className="text-brand">expanding to the world.</span>
          </h2>

          {/* Centered Description */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Our manufacturing and warehouse network supports customers across India. Now, VEVRA is entering its next phase—taking engineered packaging expertise to export markets worldwide.
          </p>

          {/* Centered Metric Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* Card 1: India Locations */}
            <div className="group rounded-2xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-black text-brand-blue-dark block tracking-tight leading-none">11+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-1">INDIA LOCATIONS*</span>
              </div>
            </div>

            {/* Card 2: Export Expansion */}
            <div className="group rounded-2xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Globe2 className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <span className="text-xl font-black text-brand-blue-dark inline-flex items-center gap-1 tracking-tight leading-none">
                  Global <ArrowUpRight className="h-4 w-4 text-brand stroke-[2.5]" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-1">EXPORT EXPANSION</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FULL-WIDTH GLOBAL EXPANSION MAP DISPLAY */}
        <div className="mt-10 sm:mt-12">
          <div className="relative rounded-3xl bg-transparent overflow-hidden">
            
            {/* Card Top Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.2em] text-brand-blue-dark">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
                <span>GLOBAL EXPANSION NETWORK</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                LIVE TRAJECTORY
              </span>
            </div>

            {/* Map Image Display Area without border and shadow */}
            <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden flex items-center justify-center p-0">
              <img
                src={worldMapImg}
                alt="VEVRA Global Export Network expanding from India"
                className="h-full w-full object-contain"
                loading="eager"
              />

              {/* Bottom-Left Floating Inset Capsule */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-2xl border border-slate-200/90 bg-white/95 p-3 sm:p-3.5 backdrop-blur-md shadow-md max-w-[220px]">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block">
                  EXPANSION MODE
                </span>
                <span className="mt-0.5 text-xs font-bold text-brand-blue-dark block leading-snug">
                  Engineering packaging beyond borders
                </span>
                <span className="h-0.5 w-5 bg-brand inline-block mt-1.5 rounded-full" />
              </div>

              {/* Bottom-Right Floating Inset Script */}
              <div className="hidden sm:block absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-2xl border border-slate-200/90 bg-white/95 p-3 sm:p-3.5 backdrop-blur-md shadow-md select-none text-right">
                <span className="font-['Dancing_Script',cursive] text-lg sm:text-xl font-bold text-brand block leading-tight">
                  From India to the World
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500 block mt-0.5">
                  STRONGER SUPPLY CHAINS GLOBALLY
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* 2. BOTTOM ROW: Operational Footprint */}
        <div className="mt-16 sm:mt-20 border-t border-slate-200/80 pt-12 sm:pt-14">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                OPERATIONAL FOOTPRINT
              </div>

              <h3 className="mt-2.5 text-2xl sm:text-3xl font-black text-brand-blue-dark tracking-tight">
                Manufacturing units &amp; warehouses across India
              </h3>
            </div>

            {/* Corporate Office Address */}
            <div className="flex items-start gap-2.5 max-w-md bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4">
              <MapPin className="h-4.5 w-4.5 text-brand shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13px] font-medium text-slate-600 leading-relaxed">
                Corporate Office: {COMPANY.address}
              </p>
            </div>
          </div>

          {/* 11 Location Cards Grid (4 columns) */}
          <div className="mt-8 sm:mt-10 grid gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {INDIA_LOCATIONS.map((loc) => (
              <div
                key={loc}
                className="group flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white px-4.5 py-3.5 shadow-[0_4px_14px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <MapPin className="h-3.5 w-3.5 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-brand-blue-dark group-hover:text-brand transition-colors truncate">
                    {loc}
                  </span>
                </div>

                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-all duration-300 group-hover:text-brand group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}