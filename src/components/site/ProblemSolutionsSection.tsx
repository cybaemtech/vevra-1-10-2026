import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Building2,
  CircleDollarSign,
  Globe,
  Leaf,
  Layers,
  Package,
  Pencil,
  RefreshCw,
  TrendingUp,
  Truck,
} from "lucide-react";

import swtpImg from "@/assets/SWTP.png";

const PROBLEMS_DATA = [
  {
    step: "01",
    icon: CircleDollarSign,
    watermark: TrendingUp,
    title: "Packaging Cost",
    lead: "Looking to reduce the total cost of packaging and handling?",
    solution:
      "packaging engineering, standardization, returnable and rental models, and managed optimization across the ecosystem.",
    action: "EXPLORE COST OPTIMIZATION",
    to: "/services",
  },
  {
    step: "02",
    icon: Package,
    watermark: Building2,
    title: "Packaging Availability",
    lead: "Need the right packaging at the right time and place?",
    solution:
      "regional inventory hubs, scheduled replenishment, buffer stock agreements and asset tracking.",
    action: "EXPLORE MANAGED PACKAGING",
    to: "/services",
  },
  {
    step: "03",
    icon: RefreshCw,
    watermark: Leaf,
    title: "Returnable Packaging",
    lead: "Want to move from disposable to reusable packaging?",
    solution:
      "closed-loop returnable containers, reverse logistics, cleaning, inspection and asset pooling.",
    action: "EXPLORE RETURNABLES",
    to: "/services",
  },
  {
    step: "04",
    icon: Pencil,
    watermark: Boxes,
    title: "Packaging Design",
    lead: "Need packaging designed or redesigned for your product?",
    solution:
      "custom CAD/3D modeling, material lightweighting, drop simulations and transit validation.",
    action: "EXPLORE PACKAGING ENGINEERING",
    to: "/services",
  },
  {
    step: "05",
    icon: Truck,
    watermark: Globe,
    title: "Supply Chain",
    lead: "Want one partner to manage your packaging ecosystem?",
    solution:
      "end-to-end packaging lifecycle management, SLA accountability, unified billing and continuous optimization.",
    action: "EXPLORE END-TO-END SOLUTIONS",
    to: "/services",
  },
];

export function ProblemSolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="problem-title">
      {/* Background Soft Radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-rose-50/60 blur-2xl" />

      {/* Decorative Red Dot Grid on Left */}
      <div className="pointer-events-none absolute left-4 sm:left-6 top-[38%] hidden xl:flex flex-col gap-2.5 opacity-40">
        <div className="text-[10px] font-black uppercase tracking-[0.26em] text-slate-500 mb-2 leading-tight">
          REAL
          <br />
          CHALLENGES
          <br />
          REAL
          <br />
          SOLUTIONS
          <br />
          <span className="h-0.5 w-4 bg-brand inline-block mt-1" />
        </div>
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex gap-2">
            {Array.from({ length: 4 }).map((_, col) => (
              <span key={col} className="h-1 w-1 rounded-full bg-brand" />
            ))}
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Top Header Row: Left Typography & Right SWTP Image */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left Text */}
          <div className="max-w-[640px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              START WITH THE PROBLEM
            </div>

            <h2
              id="problem-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              What packaging challenge <br />
              <span className="text-brand whitespace-nowrap block">are you trying to solve?</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[560px]">
              We don&apos;t ask which product you want. We ask what problem needs solving — then take ownership of it.
            </p>
          </div>

          {/* Right 3D SWTP Boxes Visual with Cursive Accent */}
          <div className="relative flex flex-col items-center lg:items-end">
            <div className="absolute top-2 sm:top-4 lg:top-6 left-3 sm:left-6 lg:left-8 z-20 select-none pointer-events-none text-left">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl lg:text-4xl font-bold text-brand -rotate-6 block leading-none">
                Every Challenge
                <br />
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">Has a Smarter Solution</span>
              </span>
              <svg className="h-4 w-32 sm:w-40 text-brand mt-0.5" viewBox="0 0 120 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 8 Q 60 16, 120 4" />
              </svg>
            </div>

            <div className="relative w-full max-w-[560px] overflow-hidden">
              <img
                src={swtpImg}
                alt="VEVRA Sustainable Packaging Solutions"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 6-Cell Grid (5 Cards + 1 Brand Highlight Block) */}
        <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS_DATA.map((card) => {
            const Icon = card.icon;
            const WatermarkIcon = card.watermark;
            return (
              <Link
                key={card.step}
                to={card.to}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/40 min-h-[210px] sm:min-h-[220px]"
              >
                {/* Background Faint Watermark Icon */}
                <div className="pointer-events-none absolute -bottom-2 -right-2 text-rose-100/60 transition-transform duration-500 group-hover:scale-110">
                  <WatermarkIcon className="h-24 w-24 stroke-[1.2]" />
                </div>

                <div>
                  {/* Top Row: Icon on left, Step number on right */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-rose-200/90 tracking-tight">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {card.lead}
                  </p>

                  {card.solution ? (
                    <p className="max-h-0 overflow-hidden text-[11px] sm:text-xs leading-relaxed text-slate-500 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-36 group-hover:opacity-100">
                      <span className="font-bold text-brand-blue-dark">VEVRA solution: </span>
                      {card.solution}
                    </p>
                  ) : null}
                </div>

                {/* Bottom Action Link */}
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-brand group-hover:translate-x-1 transition-transform">
                  <span>{card.action}</span>
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
              </Link>
            );
          })}

          {/* Slot 06: Brand Commitment Block with Bottom-Right Red Swoop */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] min-h-[210px] sm:min-h-[220px]">
            {/* Tagline block on left */}
            <div className="flex items-start gap-4">
              <span className="h-14 w-1 bg-brand rounded-full inline-block shrink-0 mt-1" />
              <div className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-slate-700 leading-relaxed">
                SUSTAINABLE
                <br />
                RELIABLE
                <br />
                COST OPTIMIZED
                <br />
                <span className="h-0.5 w-6 bg-brand inline-block mt-2" />
              </div>
            </div>

            {/* Red Sweeping Corner Accent with Cursive Script */}
            <div
              className="absolute -bottom-8 -right-8 h-48 w-56 sm:h-52 sm:w-60 bg-brand flex items-center justify-center p-6 text-right select-none pointer-events-none"
              style={{
                clipPath: "ellipse(85% 85% at 90% 90%)",
              }}
            >
              <div className="text-white text-center translate-x-4 translate-y-4">
                <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold block leading-tight">
                  More
                  <br />
                  Than
                  <br />
                  Packaging
                </span>
                <svg className="h-3 w-16 text-white mx-auto mt-0.5" viewBox="0 0 80 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0 6 Q 40 12, 80 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
