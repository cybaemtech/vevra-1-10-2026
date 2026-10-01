import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Lightbulb,
  Pencil,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    body: "Understand the product, packaging requirement and existing process.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Analyze",
    body: "Identify opportunities across cost, quality and sustainability.",
    icon: BarChart3,
  },
  {
    step: "03",
    title: "Design",
    body: "Engineer the packaging solution around the real-world requirement.",
    icon: Pencil,
  },
  {
    step: "04",
    title: "Validate",
    body: "Test, trial and refine the packaging before implementation.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Implement",
    body: "Manufacture, supply and support deployment.",
    icon: Settings,
  },
  {
    step: "06",
    title: "Manage",
    body: "Manage packaging operations, availability and associated services.",
    icon: Users,
  },
  {
    step: "07",
    title: "Optimize",
    body: "Continuously identify opportunities for better cost, quality and efficiency.",
    icon: TrendingUp,
  },
];

export function CustomerSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-t border-slate-100" aria-labelledby="customer-success-title">
      {/* Background Soft Radiance & Map Texture */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-rose-50/60 blur-2xl" />

      {/* World Map Background Silhouette (SVG) */}
      <div className="pointer-events-none absolute inset-x-0 top-10 h-72 opacity-[0.04] flex justify-center overflow-hidden">
        <svg viewBox="0 0 1000 500" className="w-[1100px] h-full fill-brand">
          <circle cx="200" cy="180" r="80" />
          <circle cx="320" cy="240" r="60" />
          <circle cx="500" cy="160" r="100" />
          <circle cx="680" cy="200" r="90" />
          <circle cx="820" cy="260" r="70" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              CUSTOMER SUCCESS
            </div>

            <h2
              id="customer-success-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              If our customer wins, <span className="text-brand">we win.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[680px]">
              Every engagement follows the same disciplined path — challenge, solution, business impact. Percentages and named customer stories are published only after VEVRA and the customer validate them.
            </p>
          </div>

          {/* Right Vertical Accent Badge */}
          <div className="flex items-start gap-3 select-none">
            <span className="h-12 w-1 bg-brand rounded-full inline-block mt-0.5" />
            <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-slate-600 leading-snug">
              REAL
              <br />
              SOLUTIONS
              <br />
              REAL IMPACT
              <br />
              <span className="h-0.5 w-5 bg-brand inline-block mt-1" />
            </div>
          </div>
        </div>

        {/* 7-Column Horizontal Process Steps Grid */}
        <div className="mt-12 sm:mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {PROCESS_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand/40 min-h-[220px]"
              >
                <div>
                  {/* Top Row: Step Pill + Red Icon */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-rose-50 px-2 py-0.5 text-[11px] font-black text-brand">
                      {item.step}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-rose-100 text-brand shadow-sm transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                    {item.body}
                  </p>
                </div>

                {/* Bottom Red Dash Accent */}
                <div className="mt-4 pt-2">
                  <span className="h-1 w-6 bg-brand/40 rounded-full block group-hover:bg-brand group-hover:w-10 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/contact"
            className="rounded-full bg-brand px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
          >
            <span>DISCOVER CUSTOMER SUCCESS STORIES</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Right Bottom Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-brand inline-block" />
            <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">
              PARTNERING TODAY
              <br />
              FOR A STRONGER TOMORROW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
