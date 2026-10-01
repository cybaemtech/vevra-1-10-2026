import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Globe2,
  Layers,
  Package,
  RefreshCw,
  Shield,
  Target,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import cap01Corrugated from "@/assets/capabilities/cap-01-corrugated.png";
import cap02Plastic from "@/assets/capabilities/cap-02-plastic.jpg";
import cap03Metal from "@/assets/capabilities/cap-03-metal.jpg";
import cap07Labels from "@/assets/capabilities/cap-07-labels.jpg";
import cap08Wood from "@/assets/capabilities/cap-08-wood-plywood.png";
import capBoxCorner from "@/assets/capabilities/cap-box-corner.jpg";
import capPulpHoneycomb from "@/assets/capabilities/cap-pulp-honeycomb.jpg";

export function AutomotiveProductPage() {
  const [activeTab, setActiveTab] = useState("All Applications");

  const applications = [
    { title: "Instrument Cluster", desc: "Custom trays for instrument cluster components.", image: cap02Plastic },
    { title: "Steering Pump", desc: "Precision packaging for steering pump parts.", image: capBoxCorner },
    { title: "Bed Plate", desc: "Engineered packaging for bed plate components.", image: cap08Wood },
    { title: "Crankshaft", desc: "Heavy-duty packaging for crankshaft components.", image: cap03Metal },
    { title: "Radiator", desc: "Returnable packaging for radiator components.", image: cap02Plastic },
    { title: "Flywheel", desc: "Secure packaging for flywheel assemblies.", image: cap03Metal },
    { title: "Turbo Housing", desc: "Custom design for turbo housing components.", image: capPulpHoneycomb },
    { title: "Shaft", desc: "Protection and segmentation for shafts.", image: cap02Plastic },
    { title: "Exhaust Valve", desc: "Precision packaging for exhaust valves.", image: capBoxCorner },
    { title: "Spool", desc: "Engineered packaging for spool components.", image: cap02Plastic },
    { title: "Connecting Rod", desc: "Customized solution for connecting rods.", image: cap03Metal },
    { title: "Cylinder Block", desc: "Heavy-duty returnable packaging for cylinder blocks.", image: cap03Metal },
    { title: "Bearing Packaging", desc: "Specialized packaging for bearings.", image: cap07Labels },
  ];

  const keyFeatures = [
    { title: "High Load Capacity", desc: "Handles heavy components", icon: Package },
    { title: "Precision Fit", desc: "Custom design for each component", icon: Target },
    { title: "Stackable & Nestable", desc: "Saves storage space", icon: Layers },
    { title: "Long Life Cycle", desc: "Built for multiple return trips", icon: RefreshCw },
  ];

  const filterTabs = [
    "All Applications",
    "Engine Components",
    "Transmission & Drivetrain",
    "Chassis & Suspension",
    "Electrical & Electronics",
    "Custom Solutions",
  ];

  const realWorldItems = [
    { title: "Component Trays", cat: "Engine Components", image: cap02Plastic },
    { title: "Multi-Component Packaging", cat: "Engine Components", image: cap03Metal },
    { title: "Precision Part Segregation", cat: "Transmission & Drivetrain", image: cap02Plastic },
    { title: "Stackable Returnable Racks", cat: "Chassis & Suspension", image: cap03Metal },
    { title: "Engine Assembly Packaging", cat: "Engine Components", image: cap08Wood },
    { title: "Bearing Trays", cat: "Transmission & Drivetrain", image: cap07Labels },
    { title: "Specialized Inserts", cat: "Electrical & Electronics", image: capPulpHoneycomb },
    { title: "Returnable Packaging in Transit", cat: "Custom Solutions", image: cap08Wood },
    { title: "Custom Automotive Fixtures", cat: "Custom Solutions", image: capBoxCorner },
    { title: "High Volume Return Logistics", cat: "Transmission & Drivetrain", image: cap01Corrugated },
  ];

  const filteredRealWorld =
    activeTab === "All Applications"
      ? realWorldItems
      : realWorldItems.filter((item) => item.cat === activeTab || item.cat === "Custom Solutions");

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        {/* Right side panoramic image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={cap03Metal}
            alt="Automotive Returnable Packaging by VEVRA"
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
                <span>AUTOMOTIVE RETURNABLE PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Automotive Returnable <br />
                <span className="text-brand">Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Application-specific returnable packaging engineered for automotive components, optimized for protection, handling, stacking and repeated circulation.
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
                  <span>Talk to Our Experts</span>
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
                    <span className="text-xs font-black text-brand-blue-dark block">Component Protection</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Engineered for precision and safety</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Boxes className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Reusable &amp; Durable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Precision packaging for multiple trips</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Globe2 className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Optimized for Supply Chain</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Reduce cost, improve efficiency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={cap03Metal}
                  alt="Automotive Returnable Packaging by VEVRA"
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
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">500+</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">Automotive Packaging Solutions</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>High Precision</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom Engineered</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Cost Efficient</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Sustainable &amp; Reusable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT APPLICATIONS */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>OUR SOLUTIONS</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Product Applications
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[640px]">
                Customized plastic returnable packaging solutions for a wide range of automotive components.
              </p>
            </div>

            <div className="hidden md:flex items-start border-l-2 border-brand pl-4 py-1 text-left select-none shrink-0 max-w-[220px]">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 leading-[1.35]">
                ENGINEERED FOR AUTOMOTIVE BUILT FOR A SUSTAINABLE TOMORROW
              </span>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {applications.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

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

      {/* 3. KEY FEATURES */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div className="shrink-0">
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-brand block">
                KEY FEATURES
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl lg:text-[1.65rem] font-black tracking-tight text-brand-blue-dark">
                Designed for Performance &amp; Reusability
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
              {keyFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                      <Icon className="h-4.5 w-4.5 stroke-[2]" />
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
        </div>
      </section>

      {/* 4. REAL-WORLD APPLICATIONS */}
      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-200/60">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>REAL-WORLD APPLICATIONS</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-brand-blue-dark">
                Automotive Packaging in Action
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-[640px]">
                Proven solutions across a wide range of automotive components, from single-part trays to complex multi-component assemblies.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 pb-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 ${activeTab === tab
                    ? "bg-brand text-white shadow-md shadow-brand/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-brand/40 hover:text-brand"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredRealWorld.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/40"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 text-center bg-white">
                  <h4 className="text-xs sm:text-[13px] font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-r from-slate-50 via-rose-50/40 to-slate-100 p-8 sm:p-10 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom Automotive Packaging Solution?
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
