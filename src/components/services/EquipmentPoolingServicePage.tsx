import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Clock,
  Coins,
  Factory,
  Layers,
  Leaf,
  Package,
  Recycle,
  RefreshCw,
  RotateCcw,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import equipmentPoolingDiagram from "@/assets/capabilities/service-equipment-pooling.png";
import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";

import reduceEquipmentOwnershipImg from "@/assets/5 Numbered Value/Reduce Equipment Ownership.png";
import improveSustainabilityImg from "@/assets/5 Numbered Value/Improve Sustainability.png";
import fasterDeploymentImg from "@/assets/5 Numbered Value/Faster Deployment.png";
import optimizeSpaceImg from "@/assets/5 Numbered Value/Optimize Space.png";
import reduceEmptyInventoryImg from "@/assets/5 Numbered Value/Reduce Empty Inventory.png";

export function EquipmentPoolingServicePage() {
  const whyPoolCards = [
    {
      num: "01",
      title: "Reduce Equipment Ownership",
      desc: "Eliminate unnecessary equipment purchase, exchange, cleaning and repair.",
      badgeBg: "bg-[#e11d2e] text-white",
      borderColor: "border-rose-200/90 hover:border-rose-400 hover:shadow-rose-100/50",
      accentLine: "bg-[#e11d2e]",
      image: reduceEquipmentOwnershipImg,
    },
    {
      num: "02",
      title: "Improve Sustainability",
      desc: "Reduce packaging waste and associated environmental impact.",
      badgeBg: "bg-[#10b981] text-white",
      borderColor: "border-emerald-200/90 hover:border-emerald-400 hover:shadow-emerald-100/50",
      accentLine: "bg-[#10b981]",
      image: improveSustainabilityImg,
    },
    {
      num: "03",
      title: "Faster Deployment",
      desc: "Standard packaging can be made available when required.",
      badgeBg: "bg-[#0ea5e9] text-white",
      borderColor: "border-sky-200/90 hover:border-sky-400 hover:shadow-sky-100/50",
      accentLine: "bg-[#0ea5e9]",
      image: fasterDeploymentImg,
    },
    {
      num: "04",
      title: "Optimize Space",
      desc: "Improve packaging standardization and transportation/storage utilization.",
      badgeBg: "bg-[#f59e0b] text-white",
      borderColor: "border-amber-200/90 hover:border-amber-400 hover:shadow-amber-100/50",
      accentLine: "bg-[#f59e0b]",
      image: optimizeSpaceImg,
    },
    {
      num: "05",
      title: "Reduce Empty Inventory",
      desc: "Reduce the need to maintain unused packaging assets at supplier or OEM locations.",
      badgeBg: "bg-[#8b5cf6] text-white",
      borderColor: "border-purple-200/90 hover:border-purple-400 hover:shadow-purple-100/50",
      accentLine: "bg-[#8b5cf6]",
      image: reduceEmptyInventoryImg,
    },
  ];

  const topPills = [
    {
      label: "Shared Assets",
      sub: "On demand",
      icon: Package,
      iconColor: "bg-rose-50 text-brand border-rose-100",
    },
    {
      label: "Lower Inventory",
      sub: "Higher utilization",
      icon: Leaf,
      iconColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      label: "Efficient Supply Chain",
      sub: "Greater value",
      icon: BarChart3,
      iconColor: "bg-sky-50 text-sky-600 border-sky-100",
    },
  ];

  const poolSteps = [
    {
      num: "01",
      title: "VEVRA Service Centre",
      desc: "Maintain, store and issue equipment on need basis.",
      badgeColor: "bg-rose-600 text-white",
      flowNext: "Issue equipment as needed",
      icon: Warehouse,
    },
    {
      num: "02",
      title: "Component Supplier",
      desc: "Equipment sent to component supplier location.",
      badgeColor: "bg-sky-600 text-white",
      flowNext: "Supplied to supplier plant",
      icon: Factory,
    },
    {
      num: "03",
      title: "OEM Plant",
      desc: "Used for packaging and material flow.",
      badgeColor: "bg-emerald-600 text-white",
      flowNext: "Return empty equipment",
      icon: Factory,
    },
    {
      num: "04",
      title: "Empty Equipment Return",
      desc: "VEVRA collects equipment when empty.",
      badgeColor: "bg-amber-500 text-white",
      flowNext: "Clean, inspect and make ready for next cycle",
      icon: RotateCcw,
    },
  ];

  const benefits = [
    {
      title: "Zero Capital Expenditure",
      desc: "Eliminate upfront investments in packaging fleets. Pay only for the containers you use when you need them.",
      icon: Coins,
      theme: "red",
    },
    {
      title: "Guaranteed Asset Availability",
      desc: "Access a certified pool of standard returnable containers and pallets across key industrial hubs.",
      icon: Boxes,
      theme: "blue",
    },
    {
      title: "Reduced Idle Storage & Waste",
      desc: "No more containers sitting idle in your yard. Assets circulate seamlessly across active production loops.",
      icon: TrendingDown,
      theme: "red",
    },
    {
      title: "Full Maintenance & Quality Check",
      desc: "Every asset is inspected, cleaned, repaired and certified at VEVRA service centres before each deployment.",
      icon: ShieldCheck,
      theme: "blue",
    },
    {
      title: "Closed-Loop Reverse Logistics",
      desc: "End-to-end management of collection, sorting, and relocation of empty equipment from OEM and tier-1 sites.",
      icon: Truck,
      theme: "red",
    },
    {
      title: "Sustainability & Carbon Reduction",
      desc: "Maximize asset turns and eliminate single-use disposable packaging to meet your corporate ESG goals.",
      icon: Leaf,
      theme: "blue",
    },
  ];

  return (
    <SiteLayout>
      {/* 1. STANDARD SERVICE HERO / HEADER */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        {/* Right side panoramic image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={cap04Pooling}
            alt="Equipment Pooling Operations by VEVRA"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Left Column Content */}
            <div className="max-w-[620px] relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-50/80 px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-brand backdrop-blur-md shadow-xs">
                <Sparkles className="h-3 w-3" />
                <span>CIRCULAR ASSET MANAGEMENT</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-tight text-brand-blue-dark leading-[1.08]">
                Equipment <span className="text-brand">Pooling</span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 font-medium">
                Eliminate upfront capital investments with VEVRA's flexible equipment pooling and rental services. Access high-quality returnable crates, pallets, and stillages on-demand across your entire supply chain.
              </p>

              {/* 3 Overview Value Pills */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {topPills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={pill.label}
                      className="rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-xs flex items-center gap-2.5 backdrop-blur-xs"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${pill.iconColor}`}
                      >
                        <Icon className="h-4 w-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-bold text-brand-blue-dark truncate">
                          {pill.label}
                        </span>
                        <span className="block text-[9.5px] font-medium text-slate-500 truncate">
                          {pill.sub}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="rounded-full bg-brand px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Request Pooling Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Mini Highlights Footer Row */}
              <div className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Recycle className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Turnkey Setup
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Zero Capex Required
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
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
                  src={cap04Pooling}
                  alt="Equipment Pooling Operations by VEVRA"
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
                    Circular Use. Greater Value.
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium block leading-tight mt-0.5">
                    Zero Capex. Complete Asset Control.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY POOL OR RENT PACKAGING? SECTION (BELOW HEADER) */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          
          {/* Section Header */}
          <div className="text-center max-w-[800px] mx-auto">
            {/* Red Indicator Bar */}
            <div className="w-12 h-1 bg-[#e11d2e] rounded-full mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight text-brand-blue-dark">
              Why Pool or Rent <span className="text-[#e11d2e]">Packaging?</span>
            </h2>
          </div>

          {/* 5 Column Benefit Cards */}
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
            {whyPoolCards.map((card) => (
              <div
                key={card.num}
                className={`relative bg-white rounded-2xl sm:rounded-3xl border ${card.borderColor} pt-8 pb-6 px-4 text-center flex flex-col items-center shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-visible`}
              >
                {/* Top Numbered Circular Badge */}
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-md ring-4 ring-white ${card.badgeBg} z-10`}
                >
                  {card.num}
                </div>

                {/* Full Image Container (No grey box, no extra padding/margin) */}
                <div className="w-full h-36 sm:h-44 flex items-center justify-center overflow-hidden mb-2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-[15px] font-black text-[#0f1e40] leading-snug min-h-[42px] flex items-center justify-center">
                  {card.title}
                </h3>

                {/* Colored Line Accent */}
                <div className={`w-8 h-0.5 rounded-full my-2 mx-auto ${card.accentLine}`} />

                {/* Description */}
                <p className="text-[11.5px] sm:text-xs text-slate-500 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BENEFITS OF EQUIPMENT POOLING (VALUE DELIVERED) */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-12 sm:py-16 lg:py-20 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>VALUE DELIVERED</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight text-brand-blue-dark">
                Benefits of Equipment Pooling
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium max-w-[760px]">
                Transition from owning expensive single-use packaging to an on-demand shared pool model that boosts capital efficiency and slashes operating costs.
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

          {/* 6 Capabilities Cards Grid (2 rows x 3 cols) */}
          <div className="mt-8 grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
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

      {/* 4. DEDICATED EQUIPMENT POOLING FLOW INFOGRAPHIC (SERVICE-EQUIPMENT-POOLING) */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14 flex flex-col items-center">
          
          {/* SEAMLESS EMBEDDED INFOGRAPHIC */}
          <div className="w-full max-w-[1040px] mx-auto">
            <img
              src={equipmentPoolingDiagram}
              alt="Equipment Pooling Shared Packaging Cycle by VEVRA"
              className="w-full h-auto object-contain mx-auto block"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* 5. BOTTOM SUSTAINABILITY CTA BANNER */}
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
                  A Smarter Way to Use Packaging Assets
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-medium">
                  Circular Use. Greater Value. Partner with VEVRA for flexible equipment pooling.
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
