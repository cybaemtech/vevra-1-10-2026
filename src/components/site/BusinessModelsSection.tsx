import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Layers,
  Package,
  RefreshCw,
  Repeat,
  RotateCcw,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import boxCorner from "@/assets/capabilities/cap-box-corner.jpg";

const MODELS_DATA = [
  {
    id: "expendable",
    step: "01",
    title: "Expendable",
    flow: ["Use", "Ship", "Dispose"],
    body: "Suitable where single-use packaging is commercially or operationally appropriate.",
    icon: Package,
    to: "/business-model",
  },
  {
    id: "rental",
    step: "02",
    title: "Rental",
    flow: ["Access", "Use", "Return"],
    body: "Access packaging without necessarily owning the entire asset base.",
    icon: ShoppingCart,
    to: "/business-model",
  },
  {
    id: "owned-returnable",
    step: "03",
    title: "Owned Returnable",
    flow: ["Use", "Return", "Reuse"],
    body: "Dedicated reusable packaging assets managed by the customer.",
    icon: RotateCcw,
    to: "/business-model",
  },
  {
    id: "pooling",
    step: "04",
    title: "Pooling",
    flow: ["Shared Asset", "Multiple Users", "Managed Return"],
    body: "Packaging assets circulate through a managed ecosystem.",
    icon: Users,
    to: "/business-model",
  },
  {
    id: "managed",
    step: "05",
    title: "End-to-End Managed",
    flow: ["Understand", "Design", "Manufacture", "Supply"],
    body: "Give us the packaging problem. We will manage the ecosystem.",
    icon: Settings,
    to: "/business-model",
  },
];

export function BusinessModelsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MODELS_DATA.length);
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const progressPercent = (activeIndex / (MODELS_DATA.length - 1)) * 100;

  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900"
      aria-labelledby="models-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glow & Grid */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-rose-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-rose-50/70 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              BUSINESS MODELS
            </div>

            <h2
              id="models-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              Choose the right <br />
              <span>packaging model</span>
              <span className="text-brand">.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[600px]">
              Own it, rent it, pool it — or let VEVRA manage the entire ecosystem end to end.
            </p>
          </div>

          {/* Right Header Area with Badge & Box Preview */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Vertical Accent Label */}
            <div className="flex items-start gap-3">
              <span className="h-10 w-1 bg-brand rounded-full inline-block mt-0.5" />
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 leading-snug">
                PACKAGING
                <br />
                FOR A BRIGHTER
                <br />
                TOMORROW
              </div>
            </div>

            <div className="hidden sm:flex flex-col text-right select-none">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-snug">
                PEOPLE
                <br />
                PRODUCTS
                <br />
                PLANET
                <br />
                PROGRESS
              </span>
              <span className="h-0.5 w-5 bg-brand inline-block mt-1 ml-auto" />
            </div>

            {/* Top Right Box Peek */}
            <div className="hidden md:block w-32 lg:w-40 shrink-0 select-none pointer-events-none -mr-4 -mt-6">
              <img
                src={boxCorner}
                alt="VEVRA Box"
                className="w-full h-auto object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Interactive Timeline Stepper Rail */}
        <div className="mt-14 sm:mt-16 hidden md:block">
          <div className="relative">
            {/* Inactive Base Track */}
            <div className="absolute left-6 right-6 top-3 h-[2px] bg-slate-200" />

            {/* Active Red Animated Progress Track */}
            <div
              className="absolute left-6 top-3 h-[2px] bg-brand transition-all duration-700 ease-out"
              style={{
                width: `calc(${progressPercent}% * (100% - 48px) / 100)`,
              }}
            />

            {/* Step Nodes */}
            <div className="relative grid grid-cols-5">
              {MODELS_DATA.map((item, idx) => {
                const isActive = idx === activeIndex;
                const isPassed = idx <= activeIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className="group flex flex-col items-center gap-3 text-center focus:outline-none cursor-pointer"
                  >
                    {/* Node Dot */}
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-brand shadow-[0_0_0_6px_rgba(225,29,72,0.22)] scale-110"
                          : isPassed
                            ? "bg-white border-2 border-brand text-brand"
                            : "bg-white border-2 border-slate-300 group-hover:border-brand"
                      }`}
                    >
                      {isActive ? (
                        <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                      ) : (
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isPassed ? "bg-brand" : "bg-slate-300 group-hover:bg-brand"
                          }`}
                        />
                      )}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-brand-blue-dark font-black"
                          : "text-slate-500 group-hover:text-brand-blue-dark"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {MODELS_DATA.map((item, idx) => {
            const isActive = idx === activeIndex;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => handleSelect(idx)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-500 cursor-pointer min-h-[380px] ${
                  isActive
                    ? "bg-gradient-to-b from-[#1a3a6b] via-[#153059] to-[#0f2445] text-white border-2 border-brand/60 shadow-[0_20px_40px_-12px_rgba(26,58,107,0.4)] -translate-y-2 ring-1 ring-brand/30"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
                }`}
              >
                {/* Background Watermark for Active Card */}
                {isActive ? (
                  <div className="pointer-events-none absolute -bottom-6 -right-6 text-white/10 transition-transform duration-700 group-hover:scale-110">
                    <Boxes className="h-36 w-36 stroke-[1]" />
                  </div>
                ) : null}

                <div className="relative z-10">
                  {/* Top Row: Icon + Step Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-white/15 border border-white/25 text-rose-300"
                          : "bg-rose-50 border border-rose-100 text-brand group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>

                    <span
                      className={`text-xl font-black transition-colors ${
                        isActive ? "text-slate-300" : "text-slate-400 group-hover:text-brand"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-5 text-xl font-black transition-colors ${
                      isActive ? "text-white" : "text-brand-blue-dark group-hover:text-brand"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Flow Pills */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.flow.map((pill) => (
                      <span
                        key={pill}
                        className={`rounded-lg px-2.5 py-1 text-[10px] sm:text-[11px] font-bold transition-colors ${
                          isActive
                            ? "bg-white/15 text-white border border-white/20"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-4 text-xs sm:text-[13px] leading-relaxed font-medium transition-colors ${
                      isActive ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>

                {/* Bottom Footer Action */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand text-white shadow-md shadow-brand/30"
                          : "bg-rose-50 text-brand group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
                    </span>

                    <span
                      className={`text-xs font-black uppercase tracking-wider transition-colors ${
                        isActive
                          ? "text-brand"
                          : "text-slate-700 group-hover:text-brand"
                      }`}
                    >
                      {isActive ? "SELECTED" : "Learn more"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/business-model"
            className="rounded-full bg-brand px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
          >
            <span>COMPARE ALL MODELS IN DETAIL</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Right Bottom Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-brand inline-block" />
            <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">
              SUSTAINABLE SOLUTIONS
              <br />
              FOR A STRONGER TOMORROW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
