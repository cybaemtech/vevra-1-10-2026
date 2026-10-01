import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Factory,
  Package,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";

import corrugatedImg from "@/assets/corrugated-sheets.jpg";
import heroBg from "@/assets/herobg.png";
import { SITE_IMAGES } from "@/lib/site-images";

// Custom precise SVG Icons matching mockup
function IsoBoxIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M12 2.5L20.5 7.2v9.6L12 21.5l-8.5-4.7V7.2L12 2.5z" strokeLinejoin="round" />
      <path d="M12 2.5v9.6l8.5-4.9" strokeLinejoin="round" />
      <path d="M12 12.1L3.5 7.2" strokeLinejoin="round" />
      <path d="M7.5 4.8l9 5.1" strokeDasharray="1.5 1.5" strokeWidth="1.2" opacity="0.8" />
    </svg>
  );
}

function LayersPlateIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5L2 7.5l10 5 10-5-10-5z" />
      <path d="M2 12.5l10 5 10-5" />
      <path d="M2 17.5l10 5 10-5" />
    </svg>
  );
}

function MetalCrateIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5L20.5 7.2v9.6L12 21.5l-8.5-4.7V7.2L12 2.5z" />
      <path d="M12 2.5v9.6M20.5 7.2L12 12.1 3.5 7.2" />
      <line x1="6" y1="13.5" x2="9.5" y2="15.5" strokeWidth="1.5" />
      <line x1="14.5" y1="15.5" x2="18" y2="13.5" strokeWidth="1.5" />
    </svg>
  );
}

function WoodCrateIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5L20.5 7.2v9.6L12 21.5l-8.5-4.7V7.2L12 2.5z" />
      <path d="M12 2.5v9.6M20.5 7.2L12 12.1 3.5 7.2" />
      <path d="M4 8l16 9" strokeWidth="1.2" opacity="0.6" />
      <path d="M20 8L4 17" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

function LeafBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d9261c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ShieldBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d9261c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CostBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d9261c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

const SHOWCASE = [
  {
    short: "Corrugated",
    name: "Corrugated Packaging",
    type: "PRODUCT · TRANSIT PROTECTION",
    description: "Engineered box and board systems for stacking, export and high-performance transit.",
    to: "/products/$slug" as const,
    params: { slug: "corrugated" },
    icon: IsoBoxIcon,
    image: corrugatedImg,
  },
  {
    short: "Plastic / PP",
    name: "Reusable Plastic Systems",
    type: "PRODUCT · CIRCULAR MOVEMENT",
    description: "Foldable crates, containers and fitments built for repeat circulation.",
    to: "/products/$slug" as const,
    params: { slug: "plastic-pp" },
    icon: LayersPlateIcon,
    image: SITE_IMAGES.returnables,
  },
  {
    short: "Metal",
    name: "Metal Returnables",
    type: "PRODUCT · INDUSTRIAL DURABILITY",
    description: "Racks, trolleys and containers engineered for demanding operations.",
    to: "/products/$slug" as const,
    params: { slug: "metal" },
    icon: MetalCrateIcon,
    image: SITE_IMAGES.products,
  },
  {
    short: "Wood / Export",
    name: "Wood & Plywood Packaging",
    type: "PRODUCT · HEAVY-DUTY EXPORT",
    description: "Pallets, cases and export-ready packaging for complex consignments.",
    to: "/products/$slug" as const,
    params: { slug: "wood-plywood" },
    icon: WoodCrateIcon,
    image: SITE_IMAGES.warehouse,
  },
] as const;

const HERO_STATS = [
  { value: "15+", label: "YEARS OF EXPERIENCE", icon: Trophy },
  { value: "153+", label: "EMPLOYEES", icon: Users },
  { value: "4", label: "MANUFACTURING UNITS", icon: Factory },
  { value: "11+", label: "WAREHOUSES", icon: Building2 },
  { value: "6,149+", label: "CLIENT ORDERS", icon: Package },
];

export function ImmersiveHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SHOWCASE[activeIndex] ?? SHOWCASE[0];

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f6f9]">
      {/* Background Graphic Image - 100% full-bleed */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center -180px",
        }}
      />

      {/* Protective soft blend shield for left text on medium/narrow viewports */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[58%] xl:w-[48%] bg-gradient-to-r from-[#f4f6f9] via-[#f4f6f9]/80 to-transparent pointer-events-none z-0" />

      {/* "More Than Packaging" script on red diagonal band */}
      {/* <div className="hidden lg:block absolute top-[20px] xl:top-[35px] right-[20%] xl:right-[22%] 2xl:right-[24%] -rotate-[12deg] select-none pointer-events-none z-10">
        <span className="font-['Dancing_Script',cursive] text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-wide block drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] leading-tight text-center">
          More
          <br />
          Than
          <br />
          Packaging
        </span>
      </div> */}

      {/* Top right corner tagline */}
      <div className="hidden xl:block absolute top-5 right-8 2xl:right-16 text-right select-none pointer-events-none z-10">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-500 leading-tight">
          SUSTAINABLE
          <br />
          PACKAGING
          <br />
          FOR A BRIGHTER
          <br />
          TOMORROW
        </p>
      </div>

      {/* Right margin vertical text */}
      <div className="hidden xl:flex flex-col items-end gap-1 absolute top-[43%] right-8 2xl:right-16 text-right select-none pointer-events-none z-10">
        <p className="text-[9.5px] font-extrabold uppercase tracking-[0.22em] text-slate-500 leading-snug">
          PEOPLE
          <br />
          PRODUCTS
          <br />
          PLANET
          <br />
          PROGRESS
        </p>
        <span className="h-0.5 w-7 bg-brand mt-1 inline-block" />
      </div>

      {/* Main Hero Content - 100% full-width layout with responsive padding */}
      <div className="relative z-10 w-full flex flex-col justify-between px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 min-h-[520px] lg:min-h-[580px] xl:min-h-[640px]">
        {/* Left Side: Typography & Action Buttons */}
        <div className="max-w-[560px] 2xl:max-w-[640px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-black uppercase tracking-[0.28em] text-brand">
            <span className="h-1 w-7 bg-brand inline-block rounded-full" />
            PACKAGING BEYOND BOUNDARIES
          </div>

          {/* Heading */}
          <h1 className="mt-3.5 text-2xl sm:text-3xl md:text-4xl lg:text-[3.9rem] xl:text-[4.6rem] 2xl:text-[5.1rem] font-black tracking-tight leading-[1.0] text-brand-blue-dark">
            Packaging
            <br />
            systems.
            <br />
            <span className="text-brand">
              Engineered to
              <br className="hidden sm:inline" />  move.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-[480px] 2xl:max-w-[540px] text-sm sm:text-base 2xl:text-lg leading-relaxed text-slate-700 font-medium">
            VEVRA designs, manufactures and manages the packaging ecosystem around your product — from first concept to return, reuse and optimization.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-3.5">
            <Link
              to="/calculator"
              className="arrow-move inline-flex items-center gap-2 rounded-full bg-brand px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-xl"
            >
              Generate Quick RFQ <span className="arrow">→</span>
            </Link>
            <Link
              to="/services"
              className="arrow-move inline-flex items-center gap-2 rounded-full border-2 border-brand-blue-dark/20 bg-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-brand-blue-dark shadow-sm backdrop-blur transition-all hover:border-brand hover:text-brand"
            >
              Explore solutions <span className="arrow">→</span>
            </Link>
          </div>

          {/* 3 Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-5 sm:gap-7 text-[11px] sm:text-xs font-bold text-slate-800">
            <div className="flex items-center gap-2">
              <LeafBadgeIcon />
              <span>Sustainable<br className="hidden sm:inline" /> by design</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldBadgeIcon />
              <span>Reliable<br className="hidden sm:inline" /> performance</span>
            </div>
            <div className="flex items-center gap-2">
              <CostBadgeIcon />
              <span>Cost<br className="hidden sm:inline" /> optimized</span>
            </div>
          </div>
        </div>

        {/* Bottom Showcase Row: EXPLORE THE ECOSYSTEM + Featured Card */}
        <div className="mt-4 sm:mt-6 lg:mt-8 relative z-20 flex flex-col lg:flex-row items-stretch lg:items-end justify-end gap-4 2xl:gap-6 lg:ml-auto max-w-full lg:max-w-[1150px]">
          {/* Left: Ecosystem Category Tabs */}
          <div className="flex-1 max-w-[620px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-blue-dark mb-2">
              EXPLORE THE ECOSYSTEM
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SHOWCASE.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={item.short}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center justify-between gap-1.5 rounded-xl px-3 py-2.5 text-left transition-all ${
                      isSelected
                        ? "bg-brand text-white shadow-lg shadow-brand/25 scale-[1.02]"
                        : "bg-white/95 text-slate-700 border border-slate-200/90 hover:bg-white hover:text-brand shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon className={`h-4 sm:h-5 w-4 sm:w-5 shrink-0 ${isSelected ? "text-white" : "text-slate-600"}`} />
                      <span className="text-[11px] sm:text-xs font-bold truncate">{item.short}</span>
                    </div>
                    <span
                      className={`flex h-4 sm:h-5 w-4 sm:w-5 shrink-0 items-center justify-center rounded-full text-[9px] sm:text-[10px] font-bold ${
                        isSelected ? "bg-white text-brand" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Category Showcase Card with 3D Image */}
          <div className="w-full lg:w-[440px] xl:w-[480px]">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-slate-500 mb-2 hidden sm:block">
              END-TO-END PACKAGING SOLUTIONS
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4.5 shadow-[0_15px_35px_-10px_rgba(15,23,42,0.12)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div className="max-w-[280px] sm:max-w-[320px]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand">
                    {active.type}
                  </p>
                  <h3 className="mt-0.5 text-base sm:text-lg font-black text-brand-blue-dark">
                    {active.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {active.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <Link
                    to={active.to}
                    params={active.params}
                    aria-label={`Explore ${active.name}`}
                    className="flex h-8 sm:h-9 w-8 sm:w-9 items-center justify-center rounded-full border-2 border-brand/50 text-brand transition-all hover:bg-brand hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.name}
                      className="h-12 w-16 sm:h-16 sm:w-22 object-contain rounded-lg drop-shadow-md"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar - 100% full-width */}
      <div className="relative z-10 border-t border-slate-200/80 bg-white py-4 sm:py-5 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="w-full flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-5 flex-1">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="h-4 sm:h-4.5 w-4 sm:w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-brand-blue-dark leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center border-l-2 border-brand pl-4">
            <p className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-brand-blue-dark leading-tight">
              PARTNERING
              <br />
              INDUSTRIES.
              <br />
              EMPOWERING
              <br />
              POSSIBILITIES.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}