import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Cog,
  Compass,
  Layers,
  Leaf,
  MapPin,
  Maximize2,
  Package,
  RefreshCw,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import serviceReturnableCrates from "@/assets/capabilities/service-returnable-crates.jpg";
import cap03Metal from "@/assets/capabilities/cap-03-metal.jpg";
import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";
import cap06Transport from "@/assets/capabilities/cap-06-transport.jpg";
import serviceWarehouseRacks from "@/assets/capabilities/service-warehouse-racks.jpg";

export function ReturnablePackagingServicePage() {
  const serviceCovers = [
    {
      title: "Reusable packaging systems",
      desc: "Built to withstand repeated cycles across distribution networks.",
      icon: Package,
      theme: "red",
    },
    {
      title: "Asset circulation & tracking",
      desc: "Track movement and availability of assets in real time.",
      icon: MapPin,
      theme: "blue",
    },
    {
      title: "Product protection",
      desc: "Engineered to keep your products safe across the supply chain.",
      icon: ShieldCheck,
      theme: "red",
    },
    {
      title: "Return planning & loop management",
      desc: "Manage returns with an efficient and streamlined process.",
      icon: RotateCcw,
      theme: "blue",
    },
    {
      title: "Refurbishment & cleaning",
      desc: "Inspect, clean and refurbish for continued use.",
      icon: Settings,
      theme: "red",
    },
    {
      title: "Continuous improvement",
      desc: "Use data and insights to optimize cycles and reduce costs.",
      icon: BarChart3,
      theme: "blue",
    },
  ];

  const lifecycleSteps = [
    {
      num: "01",
      title: "Design",
      desc: "Engineered for durability and multiple cycles.",
      pillColor: "bg-rose-50 text-rose-600 border-rose-200",
      haloColor: "border-rose-100",
      image: cap03Metal,
      icon: Package,
    },
    {
      num: "02",
      title: "Deploy",
      desc: "Supplied and integrated into your operations.",
      pillColor: "bg-sky-50 text-sky-600 border-sky-200",
      haloColor: "border-sky-100",
      image: serviceReturnableCrates,
      icon: Layers,
    },
    {
      num: "03",
      title: "Track",
      desc: "Monitor asset movement and utilization.",
      pillColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      haloColor: "border-emerald-100",
      image: cap04Pooling,
      icon: Compass,
    },
    {
      num: "04",
      title: "Collect",
      desc: "Bring assets back through an efficient return process.",
      pillColor: "bg-amber-50 text-amber-600 border-amber-200",
      haloColor: "border-amber-100",
      image: cap06Transport,
      icon: Truck,
    },
    {
      num: "05",
      title: "Inspect",
      desc: "Check quality, clean and refurbish for reuse.",
      pillColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
      haloColor: "border-indigo-100",
      image: serviceWarehouseRacks,
      icon: Search,
    },
    {
      num: "06",
      title: "Reuse",
      desc: "Put back into service for multiple cycles.",
      pillColor: "bg-teal-50 text-teal-600 border-teal-200",
      haloColor: "border-teal-100",
      image: serviceReturnableCrates,
      icon: RefreshCw,
    },
    {
      num: "07",
      title: "Optimize",
      desc: "Use data insights to improve efficiency and reduce costs.",
      pillColor: "bg-rose-50 text-brand border-rose-200",
      haloColor: "border-rose-100",
      image: null,
      icon: TrendingUp,
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
            src={serviceReturnableCrates}
            alt="Returnable Packaging Management by VEVRA"
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
                <span>SERVICE CAPABILITY</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Returnable Packaging <br />
                <span className="text-brand">Management</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Packaging designed to come back with 100% loop control.
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
                    <Settings className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Flexible &amp; Scalable
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      On-Demand Support
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Users className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Skilled Manpower
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Trained &amp; Reliable
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Safe &amp; Efficient
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Industry Best Practices
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Floating Panels */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={serviceReturnableCrates}
                  alt="Returnable Packaging Management by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Top-Right Stat Badge */}
              <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-3.5 sm:p-4 backdrop-blur-md shadow-xl flex items-center gap-3 z-10 select-none self-end">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                  <BarChart3 className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-brand-blue-dark block leading-none">
                    99.8%
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 block mt-1">
                    ASSET AVAILABILITY
                  </span>
                </div>
              </div>

              {/* Floating Bottom-Right Feature Banner */}
              <div className="mt-auto rounded-2xl bg-[#0a192f]/95 border border-white/10 p-4 sm:p-5 backdrop-blur-md shadow-2xl flex items-center gap-3.5 z-10 select-none self-end max-w-[320px]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20">
                  <RotateCcw className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs sm:text-[13px] font-black text-white block">
                    Built for Multiple Cycles
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium block leading-tight mt-0.5">
                    Reduce Waste. Improve Efficiency.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT THIS SERVICE COVERS (SCOPE OF DELIVERY) */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>SCOPE OF DELIVERY</span>
              </div>
              <h2 className="mt-1.5 text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight text-brand-blue-dark">
                What this service covers
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium max-w-[760px]">
                Build and manage reusable packaging systems that eliminate single-use waste, maximize asset turns, and improve reverse supply chain visibility.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2 shadow-xs"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 6 Capabilities Cards Grid (2 rows x 3 cols, horizontal layout) */}
          <div className="mt-4 sm:mt-6 grid gap-3.5 sm:gap-4.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceCovers.map((item) => {
              const Icon = item.icon;
              const isRed = item.theme === "red";
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
                      isRed
                        ? "bg-rose-50 text-brand border-rose-100"
                        : "bg-sky-50 text-sky-600 border-sky-100"
                    }`}
                  >
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-brand-blue-dark group-hover:text-brand transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. RETURNABLE PACKAGING LIFECYCLE (CIRCULAR APPROACH) */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          
          <div className="text-left max-w-[880px]">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
              <span>—</span>
              <span>CIRCULAR APPROACH</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Returnable Packaging Lifecycle
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
              VEVRA manages reusable packaging systems across multiple cycles to improve asset utilization, reduce packaging waste and optimize return logistics.
            </p>
          </div>

          {/* 7 Lifecycle Sequential Steps */}
          <div className="mt-14 sm:mt-18 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4 items-start">
              {lifecycleSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center group">
                    
                    {/* Number Badge Pill on top */}
                    <div
                      className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-black tracking-wider shadow-2xs z-10 ${step.pillColor}`}
                    >
                      {step.num}
                    </div>

                    {/* Circular Thumbnail Container */}
                    <div className="mt-3 relative flex items-center justify-center">
                      <div
                        className={`h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 ${step.haloColor} overflow-hidden bg-white shadow-md transition-transform duration-300 group-hover:scale-105 flex items-center justify-center`}
                      >
                        {step.image ? (
                          <img
                            src={step.image}
                            alt={step.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-rose-50 text-brand">
                            <Icon className="h-10 w-10 stroke-[2.5]" />
                          </div>
                        )}
                      </div>

                      {/* Right connecting arrow for desktop (between items 1 to 6) */}
                      {idx < lifecycleSteps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 text-sky-500 z-10">
                          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-4 text-sm sm:text-base font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 font-medium leading-relaxed max-w-[170px]">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM SUSTAINABILITY CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden bg-[#0a192f] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            
            {/* Background Sprout / Greenery Gradient Accent */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-900/40 to-transparent" />

            <div className="relative flex items-center gap-5 z-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-emerald-400">
                <Leaf className="h-7 w-7 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  A Cleaner, More Efficient Supply Chain
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-medium">
                  More value. Less waste. A more sustainable tomorrow.
                </p>
              </div>
            </div>

            <div className="relative shrink-0 z-10">
              <Link
                to="/calculator"
                className="rounded-full bg-brand px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
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
