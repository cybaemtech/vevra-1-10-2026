import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Box,
  Boxes,
  Check,
  Coins,
  Layers,
  PackageCheck,
  RefreshCw,
  RotateCcw,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import heroWarehouse from "@/assets/clients-page/hero-warehouse.jpg";
import cratesImage from "@/assets/capabilities/service-returnable-crates.jpg";
import boxImage from "@/assets/capabilities/cap-01-corrugated.png";
import rentalImage from "@/assets/capabilities/service-conveyor-rental.png";
import returnableImage from "@/assets/capabilities/cap-02-plastic.jpg";
import poolingImage from "@/assets/capabilities/cap-04-pooling.jpg";
import managedImage from "@/assets/capabilities/evolution-scene.png";

export const Route = createFileRoute("/business-model")({
  head: () => ({
    meta: [
      { title: "Business Model — Choose the Right Packaging Model | VEVRA" },
      {
        name: "description",
        content:
          "Compare expendable, owned returnable, pooling, rental and end-to-end managed packaging models from VEVRA.",
      },
      { property: "og:title", content: "VEVRA Packaging Business Models" },
      {
        property: "og:description",
        content: "Different packaging models. One objective: better business value.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessModelPage,
});

/* ---------- Data: Comparison Matrix ---------- */
const COMPARISON_COLUMNS = ["EXPENDABLE", "RETURNABLE", "RENTAL", "POOLING"] as const;

const COMPARISON_ROWS = [
  {
    criteria: "Asset ownership",
    icon: Boxes,
    values: ["Customer", "Customer", "VEVRA", "VEVRA"],
  },
  {
    criteria: "Reuse",
    icon: RotateCcw,
    values: ["—", "Yes", "Yes", "Yes"],
  },
  {
    criteria: "Upfront investment",
    icon: Coins,
    values: ["Low per unit", "High", "Low", "Low"],
  },
  {
    criteria: "Day-to-day management",
    icon: Settings,
    values: ["Customer", "Customer", "VEVRA", "VEVRA"],
  },
  {
    criteria: "Best suited for",
    icon: Target,
    values: ["One-way despatch", "Fixed loops", "Variable demand", "Shared networks"],
  },
];

/* ---------- Data: Decision Support Goals ---------- */
const DECISION_GOALS = [
  {
    goal: "I want to reduce packaging ownership.",
    model: "Rental / Pooling",
    desc: "Access packaging capacity without building an owned asset base, while VEVRA manages circulation and availability.",
    image: cratesImage,
    advantages: [
      "Lower initial cost",
      "Scalable for seasonal demand",
      "Managed by VEVRA",
      "Ideal for multi-location operations",
    ],
  },
  {
    goal: "I want maximum control over my packaging assets.",
    model: "Owned Returnable",
    desc: "Dedicated reusable packaging engineered specifically for your closed-loop transit, owned directly and controlled by your team.",
    image: returnableImage,
    advantages: [
      "Custom engineered fit",
      "Long-term lowest cost per trip",
      "Full ownership & control",
      "Heavy-duty protective design",
    ],
  },
  {
    goal: "I want the lowest complexity for one-way shipments.",
    model: "Expendable Packaging",
    desc: "Single-use corrugated and industrial packaging engineered for guaranteed protection and cost-efficiency where returns are not practical.",
    image: boxImage,
    advantages: [
      "No return logistics required",
      "Low upfront setup cost",
      "Broad material & size options",
      "Immediate rollout readiness",
    ],
  },
  {
    goal: "I want one partner accountable for everything.",
    model: "End-to-End Managed Packaging",
    desc: "VEVRA designs, manufactures, delivers, warehouses, tracks, cleans, returns and continually optimizes your full packaging ecosystem.",
    image: managedImage,
    advantages: [
      "Zero operational headaches",
      "Guaranteed JIT availability",
      "Continuous damage reduction",
      "Total cost & ESG reporting",
    ],
  },
];

/* ---------- Data: All Models Spectrum Stepper ---------- */
const SPECTRUM_MODELS = [
  {
    id: "01",
    name: "Expendable",
    tag: "LEAST INVOLVEMENT — YOU OWN NOTHING AFTER USE",
    desc: "Suitable where single-use packaging is commercially or operationally appropriate.",
    icon: Box,
    image: boxImage,
    steps: [
      { num: 1, label: "Use", icon: Box },
      { num: 2, label: "Ship", icon: Truck },
      { num: 3, label: "Dispose", icon: Trash2 },
    ],
    advantages: [
      "Low upfront cost",
      "Easy to implement",
      "Ideal for export & single-use",
      "Wider range of size options",
    ],
  },
  {
    id: "02",
    name: "Rental",
    tag: "FLEXIBLE CAPACITY — PAY FOR USE, RETURN WHEN DONE",
    desc: "Access packaging assets during peak demand or seasonal surge without capital expenditure.",
    icon: BarChart2,
    image: rentalImage,
    steps: [
      { num: 1, label: "Access", icon: Layers },
      { num: 2, label: "Use", icon: Box },
      { num: 3, label: "Return", icon: RotateCcw },
    ],
    advantages: [
      "Zero asset depreciation",
      "Flexible rental durations",
      "Elastic scaling with demand",
      "Maintenance covered by VEVRA",
    ],
  },
  {
    id: "03",
    name: "Owned Returnable",
    tag: "CUSTOM OWNERSHIP — DEDICATED CLOSED-LOOP EFFICIENCY",
    desc: "Custom-designed reusable packaging assets owned by you and optimized for repeated circulation.",
    icon: RefreshCw,
    image: returnableImage,
    steps: [
      { num: 1, label: "Use", icon: Box },
      { num: 2, label: "Return", icon: Truck },
      { num: 3, label: "Reuse", icon: RefreshCw },
    ],
    advantages: [
      "Lowest cost per trip over lifecycle",
      "Tailored to specific part geometry",
      "Durable heavy-duty protection",
      "Substantial ESG waste reduction",
    ],
  },
  {
    id: "04",
    name: "Pooling",
    tag: "SHARED NETWORK — MULTI-USER CIRCULAR ASSETS",
    desc: "Standardized returnable packaging circulating through a managed ecosystem shared across suppliers.",
    icon: Share2,
    image: poolingImage,
    steps: [
      { num: 1, label: "Pick Up", icon: Boxes },
      { num: 2, label: "Circulate", icon: Truck },
      { num: 3, label: "Pool Drop", icon: Share2 },
    ],
    advantages: [
      "Standardized multi-tier ecosystem",
      "No reverse logistics burden",
      "Shared economic benefits",
      "Digital asset tracking",
    ],
  },
  {
    id: "05",
    name: "End-to-End Managed",
    tag: "FULL ECOSYSTEM — VEVRA OWNS THE OUTCOME",
    desc: "Give us the packaging challenge. We engineer, produce, supply, store, clean, track and optimize the full loop.",
    icon: TrendingUp,
    image: managedImage,
    steps: [
      { num: 1, label: "Engineer", icon: Wrench },
      { num: 2, label: "Supply", icon: Truck },
      { num: 3, label: "Track", icon: Target },
      { num: 4, label: "Optimize", icon: Sparkles },
    ],
    advantages: [
      "Single-point accountability",
      "Guaranteed uptime & JIT delivery",
      "Continuous cycle-time reduction",
      "Transparent metric dashboards",
    ],
  },
];

function BusinessModelPage() {
  const [selectedGoal, setSelectedGoal] = useState(0);
  const [selectedSpectrum, setSelectedSpectrum] = useState(0);

  // Auto-play next decision support goal every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedGoal((prev) => (prev + 1) % DECISION_GOALS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Auto-play next spectrum model every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedSpectrum((prev) => (prev + 1) % SPECTRUM_MODELS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const currentGoal = DECISION_GOALS[selectedGoal]!;
  const currentModel = SPECTRUM_MODELS[selectedSpectrum]!;

  const handlePrevModel = () => {
    setSelectedSpectrum((prev) => (prev > 0 ? prev - 1 : SPECTRUM_MODELS.length - 1));
  };

  const handleNextModel = () => {
    setSelectedSpectrum((prev) => (prev < SPECTRUM_MODELS.length - 1 ? prev + 1 : 0));
  };

  return (
    <SiteLayout>
      {/* 1. Hero Section: Full Bleed Diagonal Facet Layout */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-28 text-brand-blue-dark border-b border-slate-100">

        {/* Right Angled Port / Logistics Hero Visual */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[54%] xl:w-[52%] hidden lg:block overflow-hidden z-0"
          aria-hidden="true"
        >
          {/* Red Angled Facet Border Accent */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#D9232A] via-[#b81d15] to-[#800f0a]"
            style={{
              clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* Warehouse/Container Logistics Image with Diagonal Polygon Clip */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(16.5% 0%, 100% 0%, 100% 100%, 2.5% 100%)",
            }}
          >
            <img
              src={heroWarehouse}
              alt="VEVRA Business Model Supply Chain Packaging"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Soft overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 min-h-[460px] lg:min-h-[500px]">

            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 z-10 py-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.26em] text-[#D9232A]">
                  BUSINESS MODEL
                </span>
              </div>

              <h1 className="mt-3.5 text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-black tracking-tight text-brand-blue-dark leading-[1.08]">
                Choose the right
                <br />
                <span className="text-[#D9232A]">packaging model.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-medium">
                Pick the model that fits your commercial and operational requirement — or give VEVRA the packaging problem and let us manage the ecosystem.
              </p>

              {/* 2 CTA Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23] hover:shadow-xl"
                >
                  Generate Quick RFQ <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D9232A] bg-transparent px-6 py-3 text-sm font-bold text-[#D9232A] transition-all hover:bg-rose-50"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 3 Horizontal Badges */}
              <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <PackageCheck className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Right Model<br />Lower Costs
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Efficient<br />Operations
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    A Stronger,<br />Sustainable Tomorrow
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Badges over the Angled Image */}
            <div className="lg:col-span-6 xl:col-span-6 relative h-full flex flex-col justify-between min-h-[360px] lg:min-h-[480px]">

              {/* Mobile Only: Inline Rounded Image */}
              <div className="lg:hidden relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/90 aspect-[16/10] mb-4">
                <img
                  src={heroWarehouse}
                  alt="VEVRA Packaging Supply Chain Logistics"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Top Right Floating Dark Badge */}
              <div className="self-end rounded-2xl bg-[#0B1930]/95 backdrop-blur-md p-4 sm:p-5 border border-white/10 text-white shadow-2xl max-w-[220px] sm:max-w-[240px] z-20">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70 leading-snug">
                  PACKAGING SOLUTIONS THAT KEEP THE WORLD MOVING
                </p>
                <span className="h-0.5 w-8 bg-[#D9232A] block my-2 rounded-full" />
                <p className="text-[11px] sm:text-xs font-medium text-white/90 leading-snug">
                  Engineered to protect value.
                </p>
              </div>

              {/* Bottom Script Tag */}
              <div className="self-end font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-slate-900 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-white/60 z-20 mt-auto">
                Built for a Bigger Tomorrow
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Section: Four ways to run your packaging (Comparison Table) */}
      <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  COMPARE
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                Four ways to run your packaging.
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0 pl-4 border-l-4 border-[#D9232A]">
              <div>
                <span className="text-xs sm:text-sm font-black text-brand-blue-dark block leading-snug">
                  Different needs. A smarter fit.
                </span>
                <span className="text-xs text-slate-500 font-medium leading-snug block mt-0.5 max-w-xs">
                  Compare key factors across our business models to find what works best for you.
                </span>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-xs sm:text-sm border-collapse table-fixed">
                <thead>
                  <tr className="bg-[#0B1930] text-white">
                    <th className="px-5 py-4 font-black uppercase tracking-wider text-xs w-[19%]">
                      CRITERIA
                    </th>
                    {COMPARISON_COLUMNS.map((col) => (
                      <th
                        key={col}
                        className="px-5 py-4 font-black uppercase tracking-wider text-xs text-center border-l border-white/10 w-[20.25%]"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMPARISON_ROWS.map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <tr
                        key={row.criteria}
                        className={`transition-colors hover:bg-rose-50/30 ${idx % 2 === 1 ? "bg-slate-50/40" : "bg-white"
                          }`}
                      >
                        {/* Criteria Column */}
                        <td className="px-5 py-4 font-bold text-brand-blue-dark">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-xs sm:text-sm whitespace-nowrap truncate">{row.criteria}</span>
                          </div>
                        </td>

                        {/* 4 Model Columns */}
                        {row.values.map((val, colIdx) => (
                          <td
                            key={`${row.criteria}-${colIdx}`}
                            className={`px-5 py-4 text-center font-medium text-slate-700 border-l border-slate-100 ${val === "Yes" ? "text-emerald-700 font-bold" : ""
                              }`}
                          >
                            {val === "Yes" ? (
                              <span className="inline-flex items-center justify-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs font-bold border border-emerald-200/60">
                                <Check className="h-3 w-3" /> Yes
                              </span>
                            ) : val === "—" ? (
                              <span className="text-slate-400 font-bold">—</span>
                            ) : (
                              val
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Section: Decision Support ("What are you trying to achieve?") */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  DECISION SUPPORT
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                What are you trying to achieve?
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0 pl-4 border-l-4 border-slate-200">
              <span className="text-xs sm:text-sm font-medium text-slate-600 leading-snug max-w-sm">
                Tell us your priority, and we&apos;ll guide you to the most suitable packaging model.
              </span>
            </div>
          </div>

          {/* Decision Support Grid: 4 Selectable Goals on Left, Dynamic Recommendation Card on Right */}
          <div className="grid gap-8 lg:grid-cols-12 items-stretch">

            {/* Left: 4 Interactive Goals (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 justify-start">
              {DECISION_GOALS.map((item, idx) => {
                const isActive = selectedGoal === idx;
                return (
                  <button
                    key={item.goal}
                    type="button"
                    onClick={() => setSelectedGoal(idx)}
                    className={`w-full text-left rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-4 transition-all duration-300 border cursor-pointer ${isActive
                      ? "border-[#D9232A] bg-white shadow-lg shadow-rose-500/10 ring-2 ring-[#D9232A]/20 -translate-y-0.5"
                      : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-sm"
                      }`}
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${isActive ? "text-brand-blue-dark" : "text-slate-700"
                        }`}
                    >
                      {item.goal}
                    </span>

                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isActive
                        ? "bg-[#D9232A] text-white shadow-md shadow-red-500/30 scale-105"
                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                        }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Recommendation Card (lg:col-span-6) */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/80 via-white to-rose-50/20 p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">

              {/* Background Ambient Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-100/60 blur-3xl" />

              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-0.5 bg-[#D9232A]" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                    RECOMMENDED MODEL
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-black text-brand-blue-dark tracking-tight">
                  {currentGoal.model}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {currentGoal.desc}
                </p>

                {/* 4 Checklist Items */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentGoal.advantages.map((adv) => (
                    <div key={adv} className="flex items-start gap-2.5">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9232A] text-white mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-brand-blue-dark leading-snug">
                        {adv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action & Image Preview */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23]"
                >
                  Discuss this model <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="relative h-20 w-28 sm:h-22 sm:w-32 rounded-2xl overflow-hidden shadow-md border border-slate-200 shrink-0 bg-white">
                  <img
                    src={currentGoal.image}
                    alt={currentGoal.model}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Section: How each model works (Stepper Spectrum) */}
      <section className="bg-slate-50/50 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  ALL MODELS
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                How each model works
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed max-w-xl">
                Drag across the spectrum to see how ownership, and the process behind it, changes at each stage.
              </p>
            </div>

            {/* Right: From Packaging to Possibilities + Arrow Controls */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                  FROM PACKAGING
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                  TO POSSIBILITIES
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevModel}
                  aria-label="Previous model"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextModel}
                  aria-label="Next model"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 5-Step Timeline Stepper */}
          <div className="relative mb-10 pb-2">
            {/* Horizontal Timeline Connector Line */}
            <div className="absolute top-5 left-8 right-8 h-0.5 bg-slate-200 hidden sm:block z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
              {SPECTRUM_MODELS.map((m, idx) => {
                const isActive = selectedSpectrum === idx;
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedSpectrum(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Circle Step Number */}
                    <div
                      className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full font-black text-xs sm:text-sm transition-all duration-300 ${isActive
                        ? "bg-[#D9232A] text-white ring-4 ring-rose-100 shadow-md scale-110"
                        : "bg-white text-slate-600 border-2 border-slate-200 group-hover:border-slate-300"
                        }`}
                    >
                      {m.id}
                    </div>

                    {/* Step Title */}
                    <span
                      className={`mt-2.5 text-xs sm:text-sm font-black transition-colors ${isActive ? "text-[#D9232A]" : "text-slate-700 group-hover:text-slate-900"
                        }`}
                    >
                      {m.name}
                    </span>

                    {/* Icon Card */}
                    <div
                      className={`mt-2 flex h-9 w-9 items-center justify-center rounded-xl transition-all ${isActive
                        ? "bg-rose-50 text-[#D9232A] border border-rose-200 shadow-sm"
                        : "bg-white text-slate-400 border border-slate-200/80 group-hover:text-slate-600"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Model Detail Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Details (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#D9232A]">
                  {currentModel.tag}
                </span>

                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-brand-blue-dark tracking-tight">
                  {currentModel.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {currentModel.desc}
                </p>

                {/* Workflow Process Sequence (Matching Mockup with numbered nodes + sub-icons) */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  {currentModel.steps.map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={step.label} className="flex items-center gap-3 sm:gap-4">
                        <div className="flex flex-col items-center">
                          {/* Red Number Circle */}
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D9232A] text-white text-xs font-black shadow-sm">
                            {step.num}
                          </div>
                          {/* Icon & Label below */}
                          <div className="mt-2 flex flex-col items-center">
                            <StepIcon className="h-4 w-4 text-slate-600" />
                            <span className="text-[11px] font-bold text-slate-800 mt-1">
                              {step.label}
                            </span>
                          </div>
                        </div>

                        {idx < currentModel.steps.length - 1 && (
                          <div className="h-0.5 w-6 sm:w-8 bg-rose-200 relative -top-3">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-solid border-l-rose-400 border-l-4 border-y-transparent border-y-3 border-r-0" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Middle Product Image (lg:col-span-3) */}
            <div className="lg:col-span-3 relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={currentModel.image}
                alt={currentModel.name}
                className="h-full w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right Advantages (lg:col-span-4) */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-50/50 p-4 sm:p-6">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-blue-dark pb-3 border-b border-slate-200/60">
                Key Advantages
              </h4>
              <div className="mt-4 space-y-3">
                {currentModel.advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-2.5">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D9232A] text-white mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark leading-snug">
                      {adv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Bottom CTA Banner: "You Focus on Your Core Business. We Manage Your Packaging Ecosystem." */}
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#F8FAFC] to-[#F0F5FA] text-brand-blue-dark shadow-xl border border-slate-200 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Background Image Texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply">
              <img
                src={heroWarehouse}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  TOTAL PACKAGING CONTROL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.3rem] font-black tracking-tight text-brand-blue-dark leading-tight">
                <span className="block whitespace-normal sm:whitespace-nowrap">
                  You Focus on Your Core Business.
                </span>
                <span className="text-slate-600 font-extrabold block mt-1.5 sm:mt-2 whitespace-normal sm:whitespace-nowrap">
                  We Manage Your Packaging Ecosystem.
                </span>
              </h2>
            </div>

            {/* Right Buttons: Moved directly to the right corner */}
            <div className="relative z-10 flex flex-wrap items-center justify-start lg:justify-end gap-4 lg:ml-auto shrink-0">
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#b81d23] hover:shadow-xl"
              >
                Generate Quick RFQ <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-5 py-3 text-sm font-bold text-brand-blue-dark transition-all hover:border-[#D9232A] hover:text-[#D9232A] hover:bg-rose-50/50 shadow-sm"
              >
                Speak to Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </SiteLayout>
  );
}

