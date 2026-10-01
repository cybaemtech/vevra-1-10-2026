import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cog,
  Globe2,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

// Hero Image
import heroCrateImg from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/plywood_shipping_crate_high_quality.webp";

// 8 Product Range Images
import box1Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/1.png";
import box2Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/2.png";
import box3Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/3.png";
import box4Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/4.png";
import box5Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/5.webp";
import box6Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/6.png";
import box7Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/7.png";
import box8Img from "@/assets/Vevara/Evolution of Automotive packaging page 44/CFB Boxes and Wooden ,Plywood Boxes/8.webp";

// Innovative Nail-Less Box Design Images
import explodedAssemblyImg from "@/assets/Vevara/Nail less box page no 55 to 56/page no 55/exploded_box_assembly_high_quality.webp";
import nailLessExplodedImg from "@/assets/Vevara/Nail less box page no 55 to 56/nail_less_box_no_border.webp";
import nailLessStackedImg from "@/assets/Vevara/Nail less box page no 55 to 56/wooden_box_high_quality.webp";

export function WoodPlywoodProductPage() {
  const woodProducts = [
    {
      title: "Wooden Boxes",
      desc: "Sturdy wooden boxes for industrial and export use.",
      image: box1Img,
    },
    {
      title: "Plywood Boxes",
      desc: "Cost-effective plywood boxes for safe transportation.",
      image: box2Img,
    },
    {
      title: "Heavy-Duty Export Cases",
      desc: "Reinforced packaging for large and high-value components.",
      image: box3Img,
    },
    {
      title: "Steel + Plywood Packaging",
      desc: "Combined strength of steel and plywood for heavy components.",
      image: box4Img,
    },
    {
      title: "Gear Box Packaging",
      desc: "Custom packaging for gear boxes with steel + plywood construction.",
      image: box5Img,
    },
    {
      title: "Turbine Packaging",
      desc: "Heavy-duty packaging for turbines and critical components.",
      image: box6Img,
    },
    {
      title: "Oil Tank Packaging",
      desc: "Engineered solutions for oil tanks and large equipment.",
      image: box7Img,
    },
    {
      title: "Nail-Less Boxes",
      desc: "Innovative nail-less plywood boxes for easy assembly and high strength.",
      image: box8Img,
    },
  ];

  const whyChoosePillars = [
    {
      title: "Custom Solutions",
      desc: "Tailored to your components",
      icon: Leaf,
    },
    {
      title: "Export Compliance",
      desc: "ISPM certified packaging",
      icon: Leaf,
    },
    {
      title: "Cost Effective",
      desc: "Optimized for large shipments",
      icon: Cog,
    },
    {
      title: "Proven Reliability",
      desc: "Trusted by global industries",
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
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%] xl:w-[52%] pointer-events-none select-none overflow-hidden">
          <img
            src={heroCrateImg}
            alt="Wood & Plywood Industrial Packaging by VEVRA"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-36 xl:w-52 bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            {/* Left Content */}
            <div className="max-w-[660px] z-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span className="h-0.5 w-6 bg-brand inline-block rounded-full" />
                <span>WOOD &amp; PLYWOOD PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Wood &amp; Plywood <br />
                <span className="text-brand">Industrial Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Heavy-duty wooden and plywood packaging engineered for large, high-value and export-oriented components.
              </p>

              {/* 3 Value Pillars */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Strong &amp; Durable
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Engineered for heavy components
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Leaf className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Export Ready
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      ISPM compliant solutions
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Cog className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Custom Built
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Tailored to your component size
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Floating Panel */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-start items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative shadow-md">
                <img
                  src={heroCrateImg}
                  alt="Wood & Plywood Packaging by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Top-Right Floating Value Card */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-5 sm:p-6 backdrop-blur-md shadow-xl w-full max-w-[340px] space-y-4 z-10 transition-transform duration-300 hover:scale-102">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                    Reliable Protection for Valuables
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Cog className="h-5 w-5 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                    Suitable for Large &amp; Heavy Components
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Globe2 className="h-5 w-5 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                    Global Export Compliance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCT RANGE SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span className="h-0.5 w-6 bg-brand inline-block rounded-full" />
                <span>OUR PRODUCT RANGE</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Wood &amp; Plywood Packaging Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[680px]">
                A complete range of wooden and plywood packaging for industrial, automotive and export applications.
              </p>
            </div>

            <div className="hidden md:flex flex-col items-start border-l-2 border-brand pl-4 py-1 text-left select-none shrink-0 max-w-[220px]">
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-brand-blue-dark leading-tight">
                BUILT STRONGER FOR A SAFER TOMORROW
              </span>
              <span className="h-0.5 w-8 bg-brand mt-2 inline-block rounded-full" />
            </div>
          </div>

          {/* 8 Product Cards Grid (4 columns × 2 rows) */}
          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {woodProducts.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-3.5 transition-all duration-300 hover:border-brand/40 hover:shadow-lg"
              >
                <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl bg-white border border-slate-100 p-1 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Link
                      to="/contact"
                      search={{ product: item.title }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rose-200 bg-white text-brand shadow-2xs transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110"
                      title={`Inquire about ${item.title}`}
                    >
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.2]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INNOVATIVE PACKAGING DESIGN SECTION */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
              <span className="h-0.5 w-6 bg-brand inline-block rounded-full" />
              <span>INNOVATIVE PACKAGING DESIGN</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Nail-Less Box Design &amp; Assembly
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[720px]">
              Strong, reusable and easy-to-assemble nail-less boxes for efficient and safe packaging.
            </p>
          </div>

          {/* Technical Diagram Container */}
          <div className="mt-10 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Exploded Assembly Schematic */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="relative rounded-2xl bg-[#fbfcfd] border border-slate-200/80 p-4 sm:p-6 lg:p-8 overflow-hidden flex items-center justify-center">
                  <img
                    src={explodedAssemblyImg}
                    alt="Nail-Less Box Exploded Assembly Diagram"
                    className="w-full h-auto max-h-[460px] object-contain select-none"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Side: 2 Visual Display Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {/* Card 1: Exploded View */}
                <div className="rounded-2xl border-2 border-sky-300/80 bg-white p-3.5 shadow-sm flex flex-col justify-between">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl bg-[#f8f9fa] flex items-center justify-center p-3">
                    <img
                      src={nailLessExplodedImg}
                      alt="Nail-Less Box Exploded View"
                      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3.5 text-center">
                    <span className="inline-block rounded-lg bg-[#0284c7] px-3 py-2 text-xs font-bold text-white w-full shadow-2xs">
                      Nail-Less Box (Exploded View)
                    </span>
                  </div>
                </div>

                {/* Card 2: Stacked View */}
                <div className="rounded-2xl border-2 border-sky-300/80 bg-white p-3.5 shadow-sm flex flex-col justify-between">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl bg-[#f8f9fa] flex items-center justify-center p-3">
                    <img
                      src={nailLessStackedImg}
                      alt="Nail-Less Box Stacked"
                      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3.5 text-center">
                    <span className="inline-block rounded-lg bg-[#0284c7] px-3 py-2 text-xs font-bold text-white w-full shadow-2xs">
                      Nail-Less Box (Stacked)
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VEVRA SECTION */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 text-slate-900">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="rounded-3xl border border-slate-200/80 bg-[#fbfcfd] p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="w-full">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span className="h-0.5 w-6 bg-brand inline-block rounded-full" />
                <span>WHY CHOOSE VEVRA</span>
              </div>

              {/* 4 Feature Items in a row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {whyChoosePillars.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-200 text-brand">
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block leading-tight">
                          {feat.title}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                          {feat.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right CTA Button */}
            <div className="shrink-0 flex items-center justify-start lg:justify-end">
              <Link
                to="/contact"
                className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black tracking-wide text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5 whitespace-nowrap"
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
