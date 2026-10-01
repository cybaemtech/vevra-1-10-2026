import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Factory,
  Globe2,
  Pencil,
  Settings,
  Shield,
  ShieldCheck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import cap01Corrugated from "@/assets/capabilities/cap-01-corrugated.png";
import corrugatedSheetsImg from "@/assets/corrugated-sheets.jpg";

// Automotive Expendable Solutions - Corrugation - Page 12 & 13
import cfbBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-12/1.png";
import dieCutBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-12/2.png";
import heavyDutyBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-12/3.png";
import insertsBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-12/4.png";
import partitionBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-12/5.png";

import bulkBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-13/1.png";
import palletizedBoxesImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-13/2.png";
import customGarmentBoxImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-13/3.png";
import specializedIndustrialImg from "@/assets/Vevara/Automotive Expendable Solutions - Corrugation- Page 12/pg-13/6.png";

// Capabilities for Expendable Packaging - Page 14, 15, 16
import advancedCorrugationMachineryImg from "@/assets/Vevara/Capabilities for  Expendable  Packaging/pg-14/2.png";
import rawMaterialAreaImg from "@/assets/Vevara/Capabilities for  Expendable  Packaging/pg-15/Raw Material Area.png";
import finishedGoodsAreaImg from "@/assets/Vevara/Capabilities for  Expendable  Packaging/pg-15/Finished Goods Area.png";
import productionAreaImg from "@/assets/Vevara/Capabilities for  Expendable  Packaging/pg-16/Production Area Corrugation.png";

const CORRUGATED_RANGE = [
  {
    title: "CFB Boxes",
    desc: "Standard corrugated fiberboard boxes for general packaging needs.",
    image: cfbBoxesImg,
  },
  {
    title: "Die-Cut Boxes",
    desc: "Precision die-cut boxes for custom sizes and designs.",
    image: dieCutBoxesImg,
  },
  {
    title: "Heavy-Duty Corrugated Boxes",
    desc: "Engineered for heavy loads and rugged handling.",
    image: heavyDutyBoxesImg,
  },
  {
    title: "Bulk Boxes",
    desc: "Large format boxes for bulk and heavy products.",
    image: bulkBoxesImg,
  },
  {
    title: "Export Packaging",
    desc: "Export-ready packaging with enhanced protection.",
    image: partitionBoxesImg,
  },
  {
    title: "Palletized Corrugated Boxes",
    desc: "Designed for palletization and efficient logistics.",
    image: palletizedBoxesImg,
  },
  {
    title: "Corrugated Inserts",
    desc: "Custom inserts for product segregation and protection.",
    image: insertsBoxesImg,
  },
  {
    title: "Partition Boxes",
    desc: "Partitioned boxes for safe multi-item packaging.",
    image: partitionBoxesImg,
  },
  {
    title: "Custom Corrugated Solutions",
    desc: "Tailor-made solutions for your unique requirements.",
    image: customGarmentBoxImg,
  },
  {
    title: "Specialized Industrial Packaging",
    desc: "Customized packaging for automotive, consumer and industrial applications.",
    image: specializedIndustrialImg,
  },
];

const MANUFACTURING_CAPABILITIES = [
  {
    title: "Advanced Corrugation & Conversion Machines",
    desc: "Equipped with high-speed machines for consistent quality and scale.",
    image: advancedCorrugationMachineryImg,
  },
  {
    title: "Raw Material Area",
    desc: "Large inventory of high-grade paper and boards.",
    image: rawMaterialAreaImg,
  },
  {
    title: "Production Area",
    desc: "Dedicated lines for corrugation, fabrication and finishing.",
    image: productionAreaImg,
  },
  {
    title: "Finished Goods Area",
    desc: "Ready-to-ship inventory with proper storage and handling.",
    image: finishedGoodsAreaImg,
  },
];

const WHY_CHOOSE_PILLARS = [
  {
    title: "Product Protection",
    desc: "Engineered for safe handling and transit.",
    icon: Shield,
  },
  {
    title: "Customizable Designs",
    desc: "Tailored to your product and brand needs.",
    icon: Pencil,
  },
  {
    title: "Scalable Production",
    desc: "From small batches to high volumes.",
    icon: Factory,
  },
  {
    title: "Industry Trusted",
    desc: "Preferred by leading industrial and export clients.",
    icon: ShieldCheck,
  },
];

export function CorrugatedProductPage() {
  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        {/* Right side panoramic image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={cap01Corrugated}
            alt="Corrugated Packaging by VEVRA"
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
                <span>CORRUGATED PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Engineered Corrugated <br />
                Packaging for <span className="text-brand">Industrial</span> <br />
                <span className="text-brand">&amp; Export Supply Chains</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Corrugated packaging engineered for product protection, stacking, handling, storage and transit — from standard CFB boxes to heavy-duty and export-ready solutions.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>GENERATE QUICK RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>TALK TO US</span>
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
                    <span className="text-xs font-black text-brand-blue-dark block">Strong &amp; Reliable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Built for heavy-duty protection</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Custom Solutions</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Designed for your application</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Globe2 className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Global Ready</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Export-ready compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              {/* Mobile Fallback Image */}
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={cap01Corrugated}
                  alt="Corrugated Packaging Solutions by VEVRA"
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
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">10,000+</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">INDUSTRIAL SHIPMENTS PROTECTED</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <ShieldCheck className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>Heavy-Duty Protection</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <Clock className="h-4 w-4 text-rose-400 shrink-0" />
                  <span>Engineered Precision</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>100% Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCT RANGE (10 Cards Grid) */}
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
                Corrugated Packaging Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[640px]">
                A complete range of corrugated packaging designed for diverse industries, loads and supply chain requirements.
              </p>
            </div>

            {/* Right Side Vertical Badge */}
            <div className="hidden md:flex flex-col border-l-2 border-brand/60 pl-4 py-1 text-right select-none shrink-0">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 leading-snug">
                RELIABLE
                <br />
                PACKAGING
                <br />
                FOR A GLOBAL
                <br />
                TOMORROW
              </span>
              <span className="h-0.5 w-5 bg-brand inline-block mt-1.5 ml-auto" />
            </div>
          </div>

          {/* 10 Product Cards Grid */}
          <div className="mt-10 sm:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CORRUGATED_RANGE.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand/40"
              >
                <div>
                  {/* Top Image Section */}
                  <div className="relative h-44 w-full overflow-hidden bg-white p-1.5 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain rounded-xl drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Pink/Red Arrow Button on Top Right */}
                    <div className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 border border-rose-100 text-brand shadow-sm transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-[15px] font-black text-brand-blue-dark group-hover:text-brand transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING CAPABILITIES */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-200/60">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>MANUFACTURING CAPABILITIES</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Integrated Manufacturing for Consistent Quality
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[640px]">
                From raw materials to finished products, our state-of-the-art facility ensures precision, durability and scalability.
              </p>
            </div>

            <div className="hidden md:flex flex-col border-l-2 border-brand/60 pl-4 py-1 text-right select-none shrink-0">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 leading-snug">
                RELIABLE
                <br />
                PACKAGING
                <br />
                FOR A GLOBAL
                <br />
                TOMORROW
              </span>
              <span className="h-0.5 w-5 bg-brand inline-block mt-1.5 ml-auto" />
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MANUFACTURING_CAPABILITIES.map((facility) => (
              <div
                key={facility.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand/40"
              >
                <div>
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-black text-brand-blue-dark group-hover:text-brand transition-colors leading-snug">
                      {facility.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VEVRA */}
      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 text-slate-900 border-b border-slate-200/60">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
              <span>—</span>
              <span>WHY CHOOSE VEVRA</span>
              <span>—</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-brand-blue-dark">
              Built for Performance. Trusted Across Industries.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-100 text-brand shadow-sm">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-brand-blue-dark leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-medium leading-tight">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 bg-gradient-to-r from-amber-50/90 via-orange-50/60 to-amber-100/80 p-8 sm:p-10 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply">
              <img
                src={corrugatedSheetsImg}
                alt="Corrugated packaging texture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom Corrugated Packaging Solution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Let's discuss your requirements and provide the right packaging solution for your products.
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
