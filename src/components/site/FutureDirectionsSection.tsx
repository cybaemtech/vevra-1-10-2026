import {
  BarChart3,
  Cpu,
  Leaf,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const STRATEGY_PILLARS = [
  {
    title: "Innovation",
    body: "Building what's next through smarter materials and designs.",
    icon: Lightbulb,
  },
  {
    title: "Automation",
    body: "Making operations faster, smarter and more reliable.",
    icon: Settings,
  },
  {
    title: "Technology",
    body: "Leveraging data and digital solutions for greater visibility and control.",
    icon: Cpu,
  },
  {
    title: "Sustainability",
    body: "Creating circular solutions that reduce environmental impact.",
    icon: Leaf,
  },
  {
    title: "Expansion",
    body: "Strengthening supply chains to new markets and industries.",
    icon: TrendingUp,
  },
  {
    title: "People",
    body: "Investing in our people, partners and communities for long-term success.",
    icon: Users,
  },
];

export function FutureDirectionsSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 text-slate-900 border-t border-slate-100" aria-labelledby="future-title">
      {/* Background Radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-rose-100/40 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-rose-50/60 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              THE NEXT CHAPTER
            </div>

            <h2
              id="future-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark"
            >
              <span className="whitespace-nowrap">Ready for the next chapter</span> <br className="hidden sm:inline" />
              <span className="text-brand whitespace-nowrap">of supply chains?</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[560px]">
              We&apos;re building a more resilient, efficient and sustainable future for packaging — together.
            </p>
          </div>

          {/* Right Cursive Script & Vertical Accent Badge */}
          <div className="flex items-center gap-8 select-none">
            <div className="text-right">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-brand -rotate-3 block leading-tight">
                Packaging Today
                <br />
                <span className="text-xl sm:text-2xl font-semibold">for a Better Tomorrow</span>
              </span>
              <svg className="h-3.5 w-32 text-brand ml-auto mt-1" viewBox="0 0 120 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 8 Q 60 16, 120 4" />
              </svg>
            </div>

            <div className="hidden sm:flex items-start gap-3 border-l-2 border-brand/60 pl-4 py-1">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 leading-snug">
                INNOVATION
                <br />
                COLLABORATION
                <br />
                SUSTAINABILITY
                <br />
                GROWTH
              </div>
            </div>
          </div>
        </div>

        {/* 6 Strategic Cards Grid */}
        <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STRATEGY_PILLARS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative flex items-start gap-5 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-brand shadow-sm transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                    {card.body}
                  </p>
                </div>

                {/* Subtle Hover Glow */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-14 w-14 rounded-tl-full bg-brand/10 transition-transform duration-300 group-hover:scale-125" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
