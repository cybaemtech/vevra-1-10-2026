import {
  CheckCircle2,
  CircleDollarSign,
  Coins,
  Gauge,
  Leaf,
  Recycle,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import swtpImg from "@/assets/SWTP.png";

const VALUES_DATA = [
  {
    step: "01",
    title: "Cost",
    icon: Coins,
    items: [
      "Reduce packaging cost",
      "Optimize inventory",
      "Improve cubic utilization",
      "Standardize packaging",
      "Reduce supply-chain inefficiencies",
    ],
  },
  {
    step: "02",
    title: "Quality",
    icon: ShieldCheck,
    items: [
      "Reduce product damage",
      "Improve packaging performance",
      "Validate packaging through tests",
      "Improve ergonomics",
      "Reduce handling errors",
    ],
  },
  {
    step: "03",
    title: "Sustainability",
    icon: Leaf,
    items: [
      "Reduce packaging waste",
      "Increase reuse",
      "Reduce unnecessary disposal",
      "Improve asset utilization",
      "Reduce avoidable material consumption",
    ],
  },
  {
    step: "04",
    title: "Efficiency",
    icon: Settings,
    items: [
      "Improve packaging availability",
      "Improve visibility",
      "Reduce operational complexity",
      "Improve turnaround",
      "Enable better packaging management",
    ],
  },
];

export function BusinessValueSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="business-value-title">
      {/* Background Radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose-50/70 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Header Row: Left Title & Right 3D Visual */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left Text */}
          <div className="max-w-[640px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              BUSINESS VALUE
            </div>

            <h2
              id="business-value-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              From packaging cost to <br />
              <span className="text-brand">business value.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[560px]">
              The right packaging does more than protect. It drives efficiency, sustainability and long-term growth for your business.
            </p>
          </div>

          {/* Right 3D Box Visual with Cursive Accent */}
          <div className="relative flex flex-col items-center lg:items-end">
            <div className="absolute top-2 sm:top-4 left-3 sm:left-6 lg:left-8 z-20 select-none pointer-events-none text-left">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl lg:text-4xl font-bold text-brand -rotate-6 block leading-none">
                Smarter
                <br />
                Packaging
                <br />
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">Stronger Business</span>
              </span>
              <svg className="h-4 w-32 sm:w-40 text-brand mt-0.5" viewBox="0 0 120 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 8 Q 60 16, 120 4" />
              </svg>
            </div>

            <div className="relative w-full max-w-[560px] overflow-hidden">
              <img
                src={swtpImg}
                alt="VEVRA Packaging Business Value"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4 Value Outcome Cards Grid */}
        <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES_DATA.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/40 min-h-[340px]"
              >
                <div>
                  {/* Top Row: Icon + Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105 shadow-sm">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>

                    <span className="text-2xl font-black text-rose-200/90 group-hover:text-brand/50 transition-colors">
                      {card.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl sm:text-2xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {card.title}
                  </h3>

                  {/* Bullet Checklist */}
                  <ul className="mt-4 space-y-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                        <span className="text-brand font-black shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Bottom Glow Accent */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 rounded-tl-full bg-brand/10 transition-transform duration-300 group-hover:scale-125" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
