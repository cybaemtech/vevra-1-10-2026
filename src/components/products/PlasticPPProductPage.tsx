import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Layers,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import cap02Plastic from "@/assets/capabilities/cap-02-plastic.jpg";

// Section 01: PFC Foldable Plastic Crates
import pfcOpenImg from "@/assets/Vevara/FoldableContainer Technical Description, pg-26,27/PFC Technical/2.png";
import pfcFlatImg from "@/assets/Vevara/FoldableContainer Technical Description, pg-26,27/PFC Technical/3.png";

// Section 02: ACC Assembly Collapsible Containers
import accMainImg from "@/assets/Vevara/FoldableContainer Technical Description, pg-26,27/ACC Technical/1.webp";
import accFoldedImg from "@/assets/Vevara/FoldableContainer Technical Description, pg-26,27/ACC Technical/2.png";

// Section 03: Nestable Totes
import toteSize1Img from "@/assets/Vevara/Size of totes, pg 31/1.png";
import toteSize2Img from "@/assets/Vevara/Size of totes, pg 31/2.png";
import toteUsage3Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/Usage of Nestable Totes, pg 28/3.webp";
import toteUsage4Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/Usage of Nestable Totes, pg 28/4.png";
import toteUsage5Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/Usage of Nestable Totes, pg 28/5.png";
import secSeal1Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/Security Seals, pg 29/1.png";
import secSeal2Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/Security Seals, pg 29/2png.png";
import nesting1Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/High Nesting Efficiency, pg 29/1.png";
import nesting2Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/High Nesting Efficiency, pg 29/2.png";
import nesting3Img from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/High Nesting Efficiency, pg 29/3.png";
import emptyCondImg from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/pg 30/empty condition.png";
import filledCondImg from "@/assets/Vevara/Nestable Totes with Attached-Lids, pg-28,29,30/pg 30/Filled Condition.png";

export function PlasticPPProductPage() {
  const foldableSpecs = [
    "Available sizes (as per application)",
    "PP construction",
    "High loading capacity",
    "Foldable design",
    "Stackable configuration",
    "Recyclable material",
  ];

  const accSpecs = [
    "External dimensions (as per model)",
    "Internal dimensions",
    "Usable volume",
    "Tare weight",
    "Static load capacity",
    "Dynamic load capacity",
  ];

  const nestableSpecs = [
    { product: "Tote", dims: "400 × 300 × 220 mm", volume: "18 L" },
    { product: "Tote", dims: "400 × 300 × 300 mm", volume: "25 L" },
    { product: "Tote", dims: "600 × 400 × 235 mm", volume: "48 L" },
    { product: "Removable Separator", dims: "600 × 400 × 235 mm", volume: "46.3 L" },
    { product: "Tote", dims: "600 × 400 × 365 mm", volume: "64 L" },
  ];

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        {/* Right side panoramic image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={cap02Plastic}
            alt="Plastic & PP Returnable Packaging by VEVRA"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            {/* Left Content */}
            <div className="max-w-[660px] z-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>PLASTIC &amp; PP RETURNABLE PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Plastic &amp; PP Returnable <br />
                <span className="text-brand">Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Reusable, stackable and application-specific packaging systems designed for industrial handling, storage, circulation and return logistics.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Generate Quick RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 3 Value Pillars */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Shield className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Sustainable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Reusable &amp; recyclable solutions</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">High Durability</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Engineered for industrial use</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Truck className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Optimized for Supply Chain</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Designed for closed-loop return logistics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              {/* Mobile Fallback Image */}
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={cap02Plastic}
                  alt="Plastic & PP Returnable Packaging by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/80 p-3.5 sm:p-4 backdrop-blur-md shadow-xl flex items-center gap-3 self-end z-10 transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                  <BarChart3 className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">1000+</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">CUSTOMIZED SOLUTIONS DELIVERED</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Strong &amp; Durable</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Stackable &amp; Space Efficient</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Reusable &amp; Recyclable</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Ideal for Return Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCT RANGE */}
      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-200/60">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>OUR PRODUCT RANGE</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Plastic &amp; PP Returnable Packaging Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[640px]">
                Engineered for diverse industries including automotive, industrial, consumer goods and export supply chains.
              </p>
            </div>

            {/* Right Side Vertical Badge */}
            <div className="hidden md:flex flex-col border-l-2 border-brand/60 pl-4 py-1 text-right select-none shrink-0">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 leading-snug">
                RETURNABLE
                <br />
                PACKAGING
                <br />
                FOR A
                <br />
                SUSTAINABLE
                <br />
                TOMORROW
              </span>
              <span className="h-0.5 w-5 bg-brand inline-block mt-1.5 ml-auto" />
            </div>
          </div>

          {/* Top 2 Items Grid (01 Foldable Plastic Crates & 02 ACC) */}
          <div className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-2">
            {/* 01 Foldable Plastic Crates */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-100 text-xs font-black text-brand">
                    01
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-blue-dark">
                      Foldable Plastic Crates
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                      High-strength polypropylene foldable crates designed for efficient handling, stacking, storage and return transportation.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-6 items-center">
                  {/* Visual Area */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-50/80 border border-slate-100 p-4 flex flex-col items-center justify-center min-h-[260px]">
                    {/* Open Box */}
                    <div className="w-full flex justify-center -mb-2">
                      <img
                        src={pfcOpenImg}
                        alt="Foldable Plastic Crate Open"
                        className="w-48 sm:w-52 h-28 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {/* Folded Box */}
                    <div className="w-full flex justify-center relative">
                      <img
                        src={pfcFlatImg}
                        alt="Foldable Plastic Crate Folded Flat"
                        className="w-52 sm:w-56 h-24 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                      />
                      {/* Cursive Annotations */}
                      
                    </div>
                  </div>

                  {/* Checklist */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-brand-blue-dark mb-3">
                      Key Specifications
                    </h4>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      {foldableSpecs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 ACC — Assembly Collapsible Containers */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-100 text-xs font-black text-brand">
                    02
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-blue-dark">
                      ACC — Assembly Collapsible Containers
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                      Modular collapsible containers combining a moulded lid, heavy-duty PP sleeve and HDPE base pallet for industrial returnable applications.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-6 items-center">
                  {/* Visual Area */}
                  <div className="rounded-2xl overflow-hidden bg-slate-50/80 border border-slate-100 p-4 flex flex-col items-center justify-center min-h-[260px]">
                    <div className="w-full flex justify-center">
                      <img
                        src={accMainImg}
                        alt="ACC Assembly Collapsible Containers"
                        className="w-48 sm:w-52 h-32 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {/* Small Folded/Pallet Sub-thumbnails */}
                    <div className="mt-3 grid grid-cols-3 gap-2 w-full">
                      <div className="h-12 rounded-lg bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                        <img src={accFoldedImg} alt="Folded Lid" className="h-full w-full object-contain" />
                      </div>
                      <div className="h-12 rounded-lg bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                        <img src={accFoldedImg} alt="Base Pallet" className="h-full w-full object-contain" />
                      </div>
                      <div className="h-12 rounded-lg bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                        <img src={accFoldedImg} alt="Stacked Return" className="h-full w-full object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-brand-blue-dark mb-3">
                      Technical Specifications
                    </h4>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      {accSpecs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 NESTABLE TOTES WITH ATTACHED-LIDS */}
          <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
            {/* 03 Section Title */}
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-100 text-xs font-black text-brand">
                03
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-blue-dark">
                  Nestable Totes with Attached-Lids
                </h3>
                <p className="mt-1 text-sm text-slate-600 font-medium">
                  Stackable and nestable totes designed for efficient storage, return transportation and supply-chain circulation.
                </p>
              </div>
            </div>

            {/* Top Showcase Banner / Gallery of Totes */}
            <div className="mt-8 rounded-2xl bg-white border border-slate-100 p-4 sm:p-6 overflow-hidden shadow-xs">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-items-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={toteSize1Img}
                    alt="Single Attached Lid Tote"
                    className="h-28 sm:h-32 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={toteSize2Img}
                    alt="Extended Attached Lid Tote"
                    className="h-28 sm:h-32 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={toteUsage4Img}
                    alt="Stack and Nest Combination"
                    className="h-28 sm:h-32 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={toteUsage3Img}
                    alt="Array of Attached Lid Totes"
                    className="h-28 sm:h-32 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center">
                  <img
                    src={filledCondImg}
                    alt="Palletized Stack of Totes"
                    className="h-28 sm:h-36 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Two Column Detailed Breakdown */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
              {/* Left Column: Usage + Security Seals + Specs Table */}
              <div className="space-y-6">
                {/* Usage of Nestable Totes */}
                <div>
                  <h4 className="text-sm font-black text-brand-blue-dark uppercase tracking-wider">
                    Usage of Nestable Totes:
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Ideal for Grocery Supply Chain and Distribution. Profitable than conventional crates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Already in use with major players at Quick Commerce and Ecom industry.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>A secured crates which check any type of Pilferage.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>Stacks 7 high carrying 25Kg unit load.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>
                        Nests to 70 % when empty. Our high-quality stack/nest containers fit snugly into each other when empty and stack securely when full.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">•</span>
                      <span>
                        This feature allows you to reduce space requirements and Logistics Cost by as much as 70% per trip. Follow food-industry standards, our stack/nest containers stand up to the toughest of multi-trip demands.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Security Seals */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-blue-dark">
                    Security Seals:
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    Accessories like security seals can be used to secure goods against unauthorized removal.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="h-28 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1.5 shadow-xs">
                      <img
                        src={secSeal1Img}
                        alt="Tamper-proof seal slot"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="h-28 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1.5 shadow-xs">
                      <img
                        src={secSeal2Img}
                        alt="Lid locking mechanism"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-blue-dark mb-2.5">
                    Technical Specifications
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-sky-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-2.5 sm:px-3.5">Product</th>
                          <th className="p-2.5 sm:px-3.5">Dimensions (L × W × H)</th>
                          <th className="p-2.5 sm:px-3.5">Volume</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                        {nestableSpecs.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                            <td className="p-2.5 sm:px-3.5 font-semibold text-slate-800">{row.product}</td>
                            <td className="p-2.5 sm:px-3.5">{row.dims}</td>
                            <td className="p-2.5 sm:px-3.5 font-bold text-brand-blue-dark">{row.volume}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium block mt-1.5">
                    Source: Vevra Packaging Pvt. Ltd. (Product Catalogue - Page 31)
                  </span>
                </div>
              </div>

              {/* Right Column: High Nesting Efficiency + Stacking Conditions */}
              <div className="space-y-6">
                {/* High Nesting Efficiency */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-blue-dark">
                    High Nesting Efficiency:
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    These containers easily nest when empty, saving valuable storage and return transport space.
                  </p>

                  <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="h-40 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1 shadow-xs">
                      <img
                        src={nesting1Img}
                        alt="Nesting stack on pallet"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="h-40 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1 shadow-xs">
                      <img
                        src={nesting2Img}
                        alt="High nested tote column"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="h-40 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1 shadow-xs">
                      <img
                        src={nesting3Img}
                        alt="Full nest stack with side supports"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Stacking Condition Cards */}
                <div className="space-y-3">
                  <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-sm font-black block">Stacking in Empty Condition</span>
                      <span className="text-xs text-sky-100 font-medium block mt-0.5">- Till 2.2 Meter and 20 Height.</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-teal-600 text-white p-4 shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-sm font-black block">Stacking in Filled Condition</span>
                      <span className="text-xs text-teal-100 font-medium block mt-0.5">- Till 2.2 Meter and 8 Height.</span>
                    </div>
                  </div>

                  {/* Cursive Efficiency Callout */}
                  <div className="pt-4 text-center select-none">
                    <span className="text-2xl sm:text-3xl font-serif italic font-bold text-sky-900 block leading-tight">
                      Reduce Space <br />
                      Reduce Cost <br />
                      <span className="text-brand font-black not-italic font-sans tracking-wide">Maximize Efficiency</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 6 Benefit Cards */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center transition-transform hover:-translate-y-1 duration-200">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h5 className="mt-2 text-xs font-black text-brand-blue-dark">Security Seals</h5>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Tamper-proof handling</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center transition-transform hover:-translate-y-1 duration-200">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand shadow-sm">
                  <Layers className="h-5 w-5" />
                </div>
                <h5 className="mt-2 text-xs font-black text-brand-blue-dark">High Nesting Efficiency</h5>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Saves storage space</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center transition-transform hover:-translate-y-1 duration-200">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand shadow-sm">
                  <Package className="h-5 w-5" />
                </div>
                <h5 className="mt-2 text-xs font-black text-brand-blue-dark">Stackable When Filled</h5>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Strong &amp; stable</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center transition-transform hover:-translate-y-1 duration-200">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand shadow-sm">
                  <Settings className="h-5 w-5" />
                </div>
                <h5 className="mt-2 text-xs font-black text-brand-blue-dark">Nestable When Empty</h5>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Up to 70% space saving</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center transition-transform hover:-translate-y-1 duration-200">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand shadow-sm">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h5 className="mt-2 text-xs font-black text-brand-blue-dark">Space Optimization</h5>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Lower logistics cost</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center transition-transform hover:-translate-y-1 duration-200">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand shadow-sm">
                  <Truck className="h-5 w-5" />
                </div>
                <h5 className="mt-2 text-xs font-black text-brand-blue-dark">Return Logistics</h5>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Designed for multi-trip use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-sky-200/80 bg-gradient-to-r from-sky-50/90 via-blue-50/60 to-indigo-50/80 p-8 sm:p-10 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom Plastic &amp; PP Packaging Solution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Let's discuss your requirements and build the right solution for your supply chain.
              </p>
            </div>

            <div className="relative flex flex-wrap items-center gap-4 shrink-0 z-10">
              <Link
                to="/calculator"
                className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Generate Quick RFQ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2"
              >
                <span>View All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
