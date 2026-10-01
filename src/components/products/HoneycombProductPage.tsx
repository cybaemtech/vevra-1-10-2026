import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Globe2,
  Layers,
  Leaf,
  Package,
  Pencil,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

// Hero Image & Honeycomb Packaging Solutions (All from Customised Solutions – Honeycom, pg-20)
import honeycombHeroImg from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/1.png";
import honeycomb2Img from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/2.webp";
import honeycomb3Img from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/3.webp";
import honeycomb4Img from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/4.webp";
import honeycomb5Img from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/5.webp";
import honeycomb6Img from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/6.webp";

// Engineered Solutions for Complex Requirements (Page 41)
import p41PalletImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 41/industrial_pallet_clean_no_text_high_quality.webp";
import p41BulkBinImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 41/industrial_bulk_bin_no_text_high_quality.webp";
import p41PalletBinSeparatorImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 41/industrial_pallet_bin_high_quality.webp";
import p41StorageBoxImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 41/dark_gray_storage_box_high_quality.webp";

// Engineered Solutions for Complex Requirements (Page 42)
import p42PalletBoxImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 42/dark_gray_pallet_box_high_quality.webp";
import p42ContainerImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 42/industrial_pallet_container_high_quality.webp";
import p42StackedTraysImg from "@/assets/Vevara/Packaging design and development Capability Page 40, 41, 42/page 42/stacked_compartment_trays_high_quality.webp";

export function HoneycombProductPage() {
  const honeycombProducts = [
    {
      title: "Multi-Layer Component Trays",
      desc: "Custom multi-tier cut-out fitments for precision-machined automotive and industrial assemblies.",
      image: honeycombHeroImg,
    },
    {
      title: "Die-Cut Honeycomb Trays",
      desc: "Multi-cavity engineered cutouts tailored precisely to component geometry.",
      image: honeycomb2Img,
    },
    {
      title: "Precision Component Pockets",
      desc: "Single and multi-pocket inserts providing complete shock absorption and immobilization.",
      image: honeycomb3Img,
    },
    {
      title: "Corner Cushioning & Heavy Part Buffers",
      desc: "Heavy-duty honeycomb corner blocks and suspended cushioning inside outer shippers.",
      image: honeycomb4Img,
    },
    {
      title: "Alloy Wheel & Bulk Part Separators",
      desc: "Multi-cavity heavy-duty honeycomb separators for wheel rims and bulk circulation.",
      image: honeycomb5Img,
    },
    {
      title: "Honeycomb Matrix Partitions",
      desc: "High-strength grid dividers for vertical parts, cylindrical components and glass/metal containers.",
      image: honeycomb6Img,
    },
  ];

  const whyChoosePillars = [
    {
      title: "Sustainable Material",
      desc: "Recyclable & eco-friendly",
      icon: Leaf,
    },
    {
      title: "High Strength",
      desc: "Excellent load distribution",
      icon: Package,
    },
    {
      title: "Custom Designs",
      desc: "Tailored to your components",
      icon: Settings,
    },
    {
      title: "Cost Efficient",
      desc: "Reduce material and logistics costs",
      icon: ShieldCheck,
    },
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
            src={honeycombHeroImg}
            alt="Honeycomb Packaging by VEVRA"
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
                <span>HONEYCOMB PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Honeycomb <br />
                <span className="text-brand">Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Lightweight, high-strength honeycomb structures engineered for component protection, separation and optimized packaging density.
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
                    <Leaf className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Sustainable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Eco-friendly packaging solutions</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Package className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">High Strength</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Lightweight yet durable</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Custom Designed</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Tailored to your application needs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={honeycombHeroImg}
                  alt="Honeycomb Packaging by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/80 p-3.5 sm:p-4 backdrop-blur-md shadow-xl flex items-center gap-3 self-end z-10 transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                  <Leaf className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">100%</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">Recyclable &amp; Sustainable</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Lightweight &amp; High Strength</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Improved Packaging Density</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Cost Efficient</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom Designs for Any Industry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCT RANGE (6 Cards Grid - Customised Solutions Honeycom, pg-20 - All Attached) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>OUR PRODUCT RANGE</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Honeycomb Packaging Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[680px]">
                A versatile range of customized honeycomb packaging solutions engineered for safe, efficient and sustainable component circulation.
              </p>
            </div>

            <div className="hidden md:flex items-start border-l-2 border-brand pl-4 py-1 text-left select-none shrink-0 max-w-[220px]">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 leading-[1.35]">
                INNOVATIVE PACKAGING FOR A CLEANER TOMORROW
              </span>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {honeycombProducts.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col cursor-pointer"
              >
                {/* Clean Image Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Info below image */}
                <div className="pt-3.5 px-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-[15px] font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-200/90 bg-white text-brand shadow-2xs transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                      <ArrowRight className="h-3 w-3 stroke-[2.2]" />
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PACKAGING DESIGN & DEVELOPMENT CAPABILITY (Page 41 & 42) */}
      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[800px]">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-brand block">
              — PACKAGING DESIGN &amp; DEVELOPMENT CAPABILITY
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-brand-blue-dark">
              Engineered Solutions for Complex Requirements
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
              From modular base pallets and bulk containers to multi-tier compartment tray systems, we design and develop complete returnable and protective systems to match your exact application.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Card 1: Base Packaging Structure (Page 41) */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark">
                  Base Packaging Structure
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider text-brand px-2.5 py-1 rounded-full bg-rose-50 border border-rose-100">
                  Page 41 Standard Formats
                </span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-28 w-full flex items-center justify-center">
                      <img
                        src={p41PalletImg}
                        alt="Base Pallet"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-slate-700">1. Base Pallet</span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-28 w-full flex items-center justify-center">
                      <img
                        src={p41BulkBinImg}
                        alt="PP Bulk Bin Container"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-slate-700">2. Bulk Bin / PP Outer Sleeve</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2 border-t border-slate-100">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-28 w-full flex items-center justify-center">
                      <img
                        src={p41PalletBinSeparatorImg}
                        alt="PP Layer Separator & Bin"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-slate-700">3. Pallet Bin with Multi-Cell Layer</span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-28 w-full flex items-center justify-center">
                      <img
                        src={p41StorageBoxImg}
                        alt="Enclosed Container with Top Lid"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-brand-blue-dark">4. Storage Box with Protective Lid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Layered System & Multi-Tier Stacking (Page 42) */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark">
                  Layered System &amp; Multi-Tier Stacking
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider text-brand px-2.5 py-1 rounded-full bg-rose-50 border border-rose-100">
                  Page 42 Engineered Systems
                </span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-32 w-full flex items-center justify-center">
                      <img
                        src={p42PalletBoxImg}
                        alt="Heavy-Duty Pallet Box with Closed Lid"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-[11px] font-bold text-slate-700">1. Heavy-Duty Pallet Box</span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-32 w-full flex items-center justify-center">
                      <img
                        src={p42ContainerImg}
                        alt="Modular Collapsible Container"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-[11px] font-bold text-brand font-black">2. Modular Container System</span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="h-32 w-full flex items-center justify-center">
                      <img
                        src={p42StackedTraysImg}
                        alt="Multi-Tier Stacked Compartment Trays"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-[11px] font-bold text-slate-700">3. Multi-Tier Stacked Trays</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50/80 border border-slate-200/80 p-4">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Custom multi-tiered compartment pockets and layer separators deliver complete immobilization for precision-machined parts, preventing metal-to-metal collision while maximizing logistics packing density.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VEVRA SECTION */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="rounded-3xl border border-slate-200/80 bg-[#fbfcfd] p-7 sm:p-10 lg:p-12 shadow-xs">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-brand block">
                — WHY CHOOSE VEVRA
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                High Performance Engineering. Lower Logistics Costs.
              </h2>
            </div>

            {/* 4 Horizontal Feature Badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoosePillars.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 border border-rose-100/80 text-brand">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block leading-tight">
                        {feat.title}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-1">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-r from-slate-50 via-rose-50/40 to-slate-100 p-8 sm:p-10 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom Honeycomb Packaging Solution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Let's discuss your component, volume and supply chain requirements.
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
                to="/contact"
                className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
