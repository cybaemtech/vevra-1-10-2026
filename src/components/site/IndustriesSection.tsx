import {
  Boxes,
  Car,
  CheckCircle2,
  Cpu,
  Factory,
  Layers,
  LayoutGrid,
  Leaf,
  Package,
  Settings,
  ShoppingCart,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

import industriesVisual from "@/assets/INDUSTRIES.png";

const ROW_1 = [
  { name: "Automotive", icon: Car },
  { name: "Engineering", icon: Settings },
  { name: "Industrial Manufacturing", icon: Factory },
  { name: "FMCG", icon: ShoppingCart },
  { name: "Electronics", icon: Cpu },
];

const ROW_2 = [
  { name: "Consumer Products", icon: Package },
  { name: "Agriculture", icon: Leaf },
  { name: "E-commerce & D2C", icon: Truck },
  { name: "Other Industries", icon: LayoutGrid },
];

export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="industries-title">
      {/* Background Radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose-50/70 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Header Row: Left Text + Right Collage Image */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.25fr] items-center">
          {/* Left Text */}
          <div className="max-w-[640px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              INDUSTRIES
            </div>

            <h2
              id="industries-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark"
            >
              <span className="whitespace-nowrap">Trusted where</span> <br className="hidden sm:inline" />
              <span className="text-brand whitespace-nowrap">packaging can&apos;t fail.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[560px]">
              From production lines to global supply chains, our packaging solutions power industries that keep the world moving.
            </p>
          </div>

          {/* Right Visual Image */}
          <div className="flex items-center justify-end">
            <div className="relative w-full max-w-[720px]">
              <img
                src={industriesVisual}
                alt="Industries Powered by VEVRA Packaging - Automotive, Manufacturing, FMCG, Electronics, Agriculture"
                className="w-full h-auto object-contain drop-shadow-sm select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: 2 Rows of Industry Pills on Left + Vertical Badge on Right */}
        <div className="mt-12 sm:mt-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* 2 Rows of Industry Pills */}
          <div className="space-y-4 flex-1">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center gap-3.5">
              {ROW_1.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-full border border-slate-200/90 bg-white px-5 py-3 shadow-[0_4px_14px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center gap-3.5">
              {ROW_2.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-full border border-slate-200/90 bg-white px-5 py-3 shadow-[0_4px_14px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right-hand Vertical Badge */}
          <div className="hidden lg:flex items-start gap-3 shrink-0 select-none pl-4 border-l-2 border-brand/60 py-1">
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug">
              DIFFERENT
              <br />
              INDUSTRIES
              <br />
              ONE TRUSTED
              <br />
              PARTNER
              <br />
              <span className="h-0.5 w-5 bg-brand inline-block mt-1.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
