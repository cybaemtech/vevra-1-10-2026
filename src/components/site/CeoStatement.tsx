import { Quote } from "lucide-react";

import vevraLogo from "@/assets/vevra-logo.png";
import ceoImg from "@/assets/ceo.png";
const CEO_QUOTES = [
  "We only win when you do.",
  "You'll work with people who have actually been in the trenches and care about getting it right.",
  "Juggling multiple vendors is a headache. We handle everything from start to finish so you can just breathe.",
  "The right box, in the right place. No excuses.",
  "Stop throwing money away on single-use materials. Pay only for what you need, and reuse the rest.",
  "Things change at the last minute. We get it. If you need to make a tweak right before the truck leaves, we've got your back.",
] as const;

export function CeoStatement() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc] py-16 sm:py-20 lg:py-28" aria-labelledby="ceo-statement-title">
      {/* Red Geometric Faceted Background on the Right Side */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[45%] xl:w-[42%] hidden lg:block overflow-hidden z-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#d9261c] via-[#b81d15] to-[#800f0a]"
          style={{
            clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        {/* Subtle geometric shading lines */}
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,white_0%,transparent_70%)]"
          style={{
            clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Bottom Right Tagline on the Red Background */}
      <div className="hidden lg:flex items-center gap-3 absolute bottom-8 right-12 2xl:right-20 z-10 select-none pointer-events-none">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/90">
          MORE THAN PACKAGING
        </span>
        <span className="h-0.5 w-12 bg-white/70 inline-block rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Heading & 6 Numbered Statements */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-7 bg-brand inline-block rounded-full" />
              A MESSAGE FROM OUR CEO
            </div>

            {/* Quote Icon & Headline */}
            <div className="mt-5 flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/25">
                <Quote className="h-6 w-6 sm:h-7 sm:w-7 fill-white text-white rotate-180" />
              </div>
              <h2 id="ceo-statement-title" className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.4rem] font-black leading-[1.08] text-brand-blue-dark">
                Built around your <br />
                operation, <span className="text-brand">not ours.</span>
              </h2>
            </div>

            {/* 6 Numbered Statements */}
            <div className="mt-6 sm:mt-7 divide-y divide-slate-100 border-t border-b border-slate-100">
              {CEO_QUOTES.map((statement, index) => (
                <div
                  key={statement}
                  className="flex items-center gap-3 sm:gap-3.5 py-2 sm:py-2.5 transition-colors group"
                >
                  <span className="flex h-7 w-7 sm:h-7.5 sm:w-7.5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand font-black text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-slate-700 leading-snug group-hover:text-brand-blue-dark transition-colors">
                    “{statement}”
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Signature Script with Swoosh */}
            <div className="mt-5 sm:mt-6 flex items-center gap-3">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-brand -rotate-6 tracking-wide">
                Packaging a Better Tomorrow
              </span>
              <svg className="hidden sm:block h-5 w-40 text-brand/40" viewBox="0 0 200 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 14 Q 50 2, 100 12 T 200 12" />
              </svg>
            </div>
          </div>

          {/* Right Column: Floating Rounded CEO Card */}
          <div className="relative">
            <div className="relative z-10 rounded-[2.2rem] overflow-hidden bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.22)] border border-slate-200/90 max-w-[500px] xl:max-w-[540px] mx-auto lg:ml-auto">
              
              {/* CEO Portrait Photo (Full Bleed Background) */}
              <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.9] overflow-hidden">
                <img
                  src={ceoImg}
                  alt="Chief Executive Officer - VEVRA Packaging Pvt. Ltd."
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                
                {/* Subtle soft gradient at top and bottom for text legibility */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Card Top Branding & Overlays (Directly on Image) */}
              <div className="absolute top-0 inset-x-0 p-5 sm:p-6 flex items-start justify-between z-20 pointer-events-none">
                <div>
                  <img src={vevraLogo} alt="VEVRA Packaging" className="h-7 sm:h-8 w-auto drop-shadow-sm" />
                  <span className="h-0.5 w-6 bg-brand block mt-2 rounded-full" />
                  <p className="mt-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 leading-tight drop-shadow-sm">
                    SUSTAINABLE
                    <br />
                    PACKAGING
                    <br />
                    FOR A STRONGER
                    <br />
                    TOMORROW
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-slate-900 -rotate-12 block leading-tight drop-shadow-sm">
                    People
                    <br />
                    Products
                    <br />
                    Progress
                  </span>
                  <span className="h-0.5 w-6 bg-brand inline-block mt-1 rounded-full" />
                </div>
              </div>

              {/* Card Bottom Overlay Banner */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/85 to-[#7a0f0f]/90 backdrop-blur-md p-4 sm:p-5 text-white flex items-center justify-between z-20">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                    CHIEF EXECUTIVE OFFICER
                  </p>
                  <p className="mt-0.5 text-xs text-white/75 font-medium">
                    VEVRA Packaging Pvt. Ltd.
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-white block leading-tight -rotate-3">
                    Together We Move
                  </span>
                  <span className="h-0.5 w-6 bg-brand inline-block mt-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}