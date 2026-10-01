import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Cog,
  Component,
  Globe2,
  Layers,
  Package,
  Recycle,
  RefreshCw,
  RotateCcw,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
  Trophy,
  Warehouse,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

// Hero Image
import metalHeroImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Automotive Returnable Solutions - Metal page 48 , 49/stackable_container_design_high_quality.webp";

// Product Range Images (1-5 new generated, 6-8 from specific folders)
import metalPalletsImg from "@/assets/Vevara/metal returnable/our product range/metal_pallet_frame_clear.webp";
import metalBinsImg from "@/assets/Vevara/metal returnable/our product range/metal bins.webp";
import stackableContainersImg from "@/assets/Vevara/metal returnable/our product range/stackable containers.webp";
import automotiveRacksImg from "@/assets/Vevara/metal returnable/our product range/Automotive Racks.webp";
import componentRacksImg from "@/assets/Vevara/metal returnable/our product range/component racks.png";
import bumperTrolleyImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Bumper Trolley and Transmission Trolley Page no 50/bumper/white_bumper_blue_rack_high_quality.webp";
import transmissionTrolleyImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Bumper Trolley and Transmission Trolley Page no 50/trans/gearbox_rack_high_quality.webp";
import customizedMetalContainersImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Automotive Returnable Solutions - Metal Page no 51/upper/blue_wheeled_rack_high_quality.webp";

// Engineered Solutions Image
import engineeredSolutionsImg from "@/assets/Vevara/metal returnable/engineered solution/image.png";

// Real-World Applications Images
import realBumperTrolleyImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Bumper Trolley and Transmission Trolley Page no 50/bumper/white_bumper_blue_rack_high_quality.webp";
import realTransmissionTrolleyImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Bumper Trolley and Transmission Trolley Page no 50/trans/gearbox_rack_high_quality.webp";
import realComponentRackImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Automotive Returnable Solutions - Metal Page no 51/upper/gear_rack_helical_shafts_high_quality.webp";
import realStackedMetalRacksImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Automotive Returnable Solutions - Metal Page no 51/bottom/stacked_blue_racks_high_quality.webp";

export function MetalProductPage() {
  const metalProducts = [
    {
      title: "Metal Pallets",
      desc: "Engineered for heavy-duty industrial handling and long-term durability.",
      image: metalPalletsImg,
    },
    {
      title: "Metal Bins",
      desc: "Sturdy metal bins for component storage and safe transportation.",
      image: metalBinsImg,
    },
    {
      title: "Stackable Containers",
      desc: "Stackable metal containers for efficient vertical space utilization.",
      image: stackableContainersImg,
    },
    {
      title: "Automotive Racks",
      desc: "Application-specific racks tailored for automotive components.",
      image: automotiveRacksImg,
    },
    {
      title: "Component Racks",
      desc: "Customizable racks for various automotive parts and assemblies.",
      image: componentRacksImg,
    },
    {
      title: "Bumper Trolleys",
      desc: "Specialized trolleys for automotive bumper handling and transit.",
      image: bumperTrolleyImg,
    },
    {
      title: "Transmission Trolleys",
      desc: "Robust trolleys for transmission and gearbox components.",
      image: transmissionTrolleyImg,
    },
    {
      title: "Customized Metal Containers",
      desc: "Tailor-made containers designed for specific component geometries.",
      image: customizedMetalContainersImg,
    },
  ];

  const realWorldApplications = [
    {
      title: "Bumper Trolley",
      image: realBumperTrolleyImg,
    },
    {
      title: "Transmission Trolley",
      image: realTransmissionTrolleyImg,
    },
    {
      title: "Component Rack",
      image: realComponentRackImg,
    },
    {
      title: "Stacked Metal Racks",
      image: realStackedMetalRacksImg,
    },
  ];

  const whyChoosePillars = [
    {
      title: "Reusable Construction",
      desc: "Engineered for long service life",
      icon: RefreshCw,
    },
    {
      title: "Stackable & Space Efficient",
      desc: "Reduces storage and transportation costs",
      icon: Layers,
    },
    {
      title: "Heavy Load Handling",
      desc: "Suitable for large and heavy components",
      icon: ShieldCheck,
    },
    {
      title: "Custom Component Fitment",
      desc: "Tailored designs for your specific needs",
      icon: Cog,
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
            src={metalHeroImg}
            alt="Metal Returnable Packaging by VEVRA"
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
                <span>HEAVY-DUTY METAL RETURNABLE PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Heavy-Duty Metal <br />
                <span className="text-brand">Returnable Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Reusable metal packaging engineered for demanding industrial and automotive applications, including pallets, bins, racks, trolleys and component-specific containers.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Heavy-Duty Protection
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Engineered for harsh industrial use
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Recycle className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Reusable &amp; Durable
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Designed for multiple cycles
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Cog className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Engineered for Automotive
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Application-specific designs and solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Floating Panel */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-start items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={metalHeroImg}
                  alt="Metal Returnable Packaging by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Top-Right Floating Trusted Badge */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-4 sm:p-5 backdrop-blur-md shadow-xl flex items-center gap-3.5 self-end z-10 transition-transform duration-300 hover:scale-102">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                  <Trophy className="h-5 w-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-brand block leading-none">
                    Trusted by
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-brand-blue-dark block mt-1">
                    Automotive Industries <br className="hidden sm:inline" />
                    <span className="text-slate-500 font-normal text-[11px]">for Returnable Solutions</span>
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
                <span>—</span>
                <span>OUR PRODUCT RANGE</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Metal Returnable Packaging Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[680px]">
                A complete range of heavy-duty metal packaging for automotive and industrial applications.
              </p>
            </div>

            <div className="hidden md:flex items-start border-l-2 border-brand pl-4 py-1 text-left select-none shrink-0 max-w-[220px]">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#081830] leading-[1.35]">
                BUILT FOR A MORE SUSTAINABLE SUPPLY CHAIN
              </span>
            </div>
          </div>

          {/* 8 Product Cards Grid (4 columns × 2 rows) */}
          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {metalProducts.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col cursor-pointer rounded-2xl border border-slate-200/70 bg-white p-3.5 transition-all duration-300 hover:border-brand/40 hover:shadow-lg"
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
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rose-200 bg-white text-brand shadow-2xs transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGINEERED FOR AUTOMOTIVE APPLICATIONS SECTION */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
              <span>—</span>
              <span>ENGINEERED SOLUTIONS</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Engineered for Automotive Applications
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[720px]">
              Advanced metal returnable packaging solutions designed for safety, stackability and long-term use in automotive supply chains.
            </p>
          </div>

          {/* Technical Diagram + 4 Feature Cards Layout */}
          <div className="mt-10 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Side: Engineered Solutions Image */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="relative rounded-2xl bg-white border border-slate-200/80 p-3 sm:p-4 overflow-hidden shadow-sm flex items-center justify-center">
                  <div className="relative w-full aspect-[16/10] max-h-[360px] flex items-center justify-center overflow-hidden rounded-xl bg-slate-50">
                    <img
                      src={engineeredSolutionsImg}
                      alt="Engineered Metal Returnable Solutions"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: 4 Feature Grid Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                {/* 1. Stackable Design */}
                <div className="rounded-2xl border border-slate-200/80 bg-[#f8fafc] p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:bg-white hover:border-brand/40 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Layers className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                      Stackable Design
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                      Optimized for vertical storage and space savings.
                    </p>
                  </div>
                </div>

                {/* 2. Component Protection */}
                <div className="rounded-2xl border border-slate-200/80 bg-[#f8fafc] p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:bg-white hover:border-brand/40 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                      Component Protection
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                      Secure design to prevent damage during handling.
                    </p>
                  </div>
                </div>

                {/* 3. Load Stability */}
                <div className="rounded-2xl border border-slate-200/80 bg-[#f8fafc] p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:bg-white hover:border-brand/40 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Scale className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                      Load Stability
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                      Engineered for high load capacity and durability.
                    </p>
                  </div>
                </div>

                {/* 4. Return Logistics */}
                <div className="rounded-2xl border border-slate-200/80 bg-[#f8fafc] p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:bg-white hover:border-brand/40 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <RotateCcw className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                      Return Logistics
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                      Designed for multiple cycles and efficient reverse logistics.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL-WORLD APPLICATIONS SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
              <span>—</span>
              <span>REAL-WORLD APPLICATIONS</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Real-World Metal Returnable Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[720px]">
              Proven packaging systems used across automotive and industrial applications.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {realWorldApplications.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl bg-[#f8f9fa] border border-slate-100 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="pt-3 text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE VEVRA SECTION */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-16 sm:py-20 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-10 lg:p-12 shadow-xs">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-brand block">
                — WHY CHOOSE VEVRA
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Designed for Reuse &amp; Efficiency
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoosePillars.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-200 text-brand">
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

      {/* 6. BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-r from-slate-50 via-rose-50/30 to-amber-50/40 p-8 sm:p-10 lg:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom Metal Returnable Packaging Solution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Let's discuss your component, volume and handling requirements.
              </p>
            </div>

            <div className="relative shrink-0 z-10">
              <Link
                to="/calculator"
                className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Generate Quick RFQ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
