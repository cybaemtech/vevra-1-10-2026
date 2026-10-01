import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Clock,
  Coins,
  Cpu,
  DollarSign,
  Factory,
  FileCheck,
  Globe2,
  HardHat,
  Layers,
  Leaf,
  Package,
  Recycle,
  RefreshCw,
  RotateCcw,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import heroPackagingRentalImg from "@/assets/capabilities/cap-04-pooling.jpg";

import foldableContainerImg from "@/assets/Vevara/Our standard packaging equipments page 47/Foldable Container/industrial_pallet_box_high_quality.webp";
import collapsibleCrateImg from "@/assets/Vevara/Our standard packaging equipments page 47/Collapsible/blue_plastic_crate_high_quality.webp";
import rigidPlasticCrateImg from "@/assets/Vevara/Our standard packaging equipments page 47/Rigid Plastic/blue_green_storage_crate_high_quality.webp";
import plasticPalletImg from "@/assets/Vevara/Our standard packaging equipments page 47/Plastic Pallet/blue_plastic_pallet_high_quality.webp";
import ppCorrugatedBoxImg from "@/assets/Vevara/Our standard packaging equipments page 47/Polypropylene/blue_corrugated_box_zoomed_out_high_quality.webp";
import innerDunnageImg from "@/assets/Vevara/Our standard packaging equipments page 47/Inner Dunnage/blue_tray_high_quality.webp";

export function PackagingRentalServicePage() {
  // 1. What Packaging Rental Means (6 Cards)
  const whatMeansCards = [
    {
      title: "Reduced Equipment Investment",
      desc: "Access packaging equipment without the upfront purchase cost.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#dc2626] mb-3">
          <Coins className="w-5 h-5" />
        </div>
      ),
    },
    {
      title: "Packaging Availability",
      desc: "Equipment can be issued based on your requirements and agreed cycles.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#dc2626] mb-3">
          <Leaf className="w-5 h-5" />
        </div>
      ),
    },
    {
      title: "Equipment Management",
      desc: "VEVRA coordinates deployment, collection and reuse.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#dc2626] mb-3">
          <Settings className="w-5 h-5" />
        </div>
      ),
    },
    {
      title: "Reverse Logistics",
      desc: "We collect empty equipment for subsequent reuse.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#dc2626] mb-3">
          <Truck className="w-5 h-5" />
        </div>
      ),
    },
    {
      title: "Reusable Packaging Fleet",
      desc: "Access a range of reusable packaging equipment.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#dc2626] mb-3">
          <Boxes className="w-5 h-5" />
        </div>
      ),
    },
    {
      title: "Cycle-Based Rental",
      desc: "Pay rental charges based on agreed packaging usage cycles.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#dc2626] mb-3">
          <RotateCcw className="w-5 h-5" />
        </div>
      ),
    },
  ];

  // 2. How It Works - 5 Steps
  const howItWorksSteps = [
    {
      step: "01",
      title: "Packaging Requirement",
      desc: "Customer identifies the required packaging equipment and operating requirement.",
      badgeColor: "bg-[#0284c7]",
      icon: <Package className="w-5 h-5 text-white" />,
    },
    {
      step: "02",
      title: "Equipment Issued",
      desc: "VEVRA issues the required packaging equipment based on the agreed rental cycle.",
      badgeColor: "bg-[#10b981]",
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    },
    {
      step: "03",
      title: "Customer Uses Packaging",
      desc: "Packaging is used through the defined supply-chain cycle.",
      badgeColor: "bg-[#f59e0b]",
      icon: <Warehouse className="w-5 h-5 text-white" />,
    },
    {
      step: "04",
      title: "Empty Equipment Collection",
      desc: "VEVRA collects the packaging equipment when empty.",
      badgeColor: "bg-[#ef4444]",
      icon: <Truck className="w-5 h-5 text-white" />,
    },
    {
      step: "05",
      title: "Reuse",
      desc: "Equipment is inspected, prepared and reused for subsequent cycles.",
      badgeColor: "bg-[#059669]",
      icon: <Recycle className="w-5 h-5 text-white" />,
    },
  ];

  // 3. Why Rent Packaging? (5 Cards)
  const whyRentCards = [
    {
      num: "01",
      title: "Reduce Equipment Investment",
      desc: "Minimize upfront capital expenditure.",
      icon: <Coins className="w-5 h-5 text-[#0f1e40]" />,
    },
    {
      num: "02",
      title: "Reduce Packaging Inventory",
      desc: "Avoid maintaining large quantities of empty packaging.",
      icon: <Package className="w-5 h-5 text-[#10b981]" />,
    },
    {
      num: "03",
      title: "Customer Uses Utilization",
      desc: "Reduce storage requirements at your facilities.",
      icon: <BarChart3 className="w-5 h-5 text-[#0284c7]" />,
    },
    {
      num: "04",
      title: "Support Standardization",
      desc: "Enable standardized packaging across the supply chain.",
      icon: <Layers className="w-5 h-5 text-[#dc2626]" />,
    },
    {
      num: "05",
      title: "Support Sustainability",
      desc: "Reusable packaging reduces waste and environmental impact.",
      icon: <Leaf className="w-5 h-5 text-[#f59e0b]" />,
    },
  ];

  // 4. Standard Packaging Equipment (6 Cards)
  const equipmentItems = [
    {
      title: "Foldable Containers",
      desc: "Reusable containers for repeated supply-chain cycles.",
      image: foldableContainerImg,
    },
    {
      title: "Collapsible Plastic Crates",
      desc: "Space-efficient returnable crates.",
      image: collapsibleCrateImg,
    },
    {
      title: "Rigid Plastic Crates",
      desc: "Durable reusable crates for industrial components.",
      image: rigidPlasticCrateImg,
    },
    {
      title: "Plastic Pallets",
      desc: "Reusable pallet solutions for material movement.",
      image: plasticPalletImg,
    },
    {
      title: "PP Corrugated Boxes",
      desc: "Lightweight reusable packaging.",
      image: ppCorrugatedBoxImg,
    },
    {
      title: "Inner Dunnage & Partitions",
      desc: "Component-specific protection and separation.",
      image: innerDunnageImg,
    },
  ];

  // 5. Packaging Models (4 Cards with Highlight on Rental)
  const packagingModels = [
    {
      title: "Expendable Packaging",
      badge: "Single-use",
      desc: "For applications where packaging is used once and disposed of.",
      icon: <Package className="w-5 h-5 text-[#f59e0b]" />,
      isHighlight: false,
    },
    {
      title: "Owned Returnable",
      badge: "Customer-owned",
      desc: "Reusable packaging managed through repeated cycles.",
      icon: <RotateCcw className="w-5 h-5 text-[#0284c7]" />,
      isHighlight: false,
    },
    {
      title: "Packaging Rental",
      badge: "Use without ownership",
      desc: "Packaging equipment provided for agreed rental cycles.",
      icon: <RefreshCw className="w-5 h-5 text-[#dc2626]" />,
      isHighlight: true,
    },
    {
      title: "Packaging Pooling",
      badge: "Shared assets",
      desc: "Reusable packaging shared across multiple users with managed cycles.",
      icon: <Users className="w-5 h-5 text-[#10b981]" />,
      isHighlight: false,
    },
  ];

  return (
    <SiteLayout>
      <div className="bg-white text-slate-800 min-h-screen">
        {/* =========================================================================
            1. HERO SECTION
        ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#fcfdff] to-[#f4f7fc] border-b border-slate-100 min-h-[500px] lg:min-h-[540px] flex items-center">
          {/* Right Side Full Image with soft gradient fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 h-full w-full sm:w-[65%] lg:w-[58%] pointer-events-none overflow-hidden">
            <img
              src={heroPackagingRentalImg}
              alt="VEVRA Packaging Rental Operations"
              className="w-full h-full object-cover object-center"
            />
            {/* Slogan Banner On Hero Right */}
            <div className="absolute top-6 right-6 hidden xl:block bg-[#0f1e40]/80 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white shadow-xl max-w-xs pointer-events-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fca5a5] block">
                A CIRCULAR APPROACH
              </span>
              <span className="text-xs font-black tracking-tight text-white block mt-0.5">
                FOR A STRONGER TOMORROW
              </span>
            </div>

            {/* Right Side Floating Badges List */}
            <div className="absolute bottom-6 right-6 hidden lg:flex flex-col gap-2 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 pointer-events-auto max-w-[240px]">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0f1e40]">
                <Boxes className="w-4 h-4 text-[#dc2626]" />
                <span>Equipment Pooling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0f1e40]">
                <RotateCcw className="w-4 h-4 text-[#0284c7]" />
                <span>Reusable Packaging</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0f1e40]">
                <Coins className="w-4 h-4 text-[#10b981]" />
                <span>Cost Efficient</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0f1e40]">
                <Leaf className="w-4 h-4 text-[#059669]" />
                <span>Lower Environmental Impact</span>
              </div>
            </div>

            {/* Soft gradient fade overlay towards left text */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/40" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full relative z-10">
            <div className="max-w-xl lg:max-w-[540px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2.5px] bg-[#dc2626] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                  Packaging Rental
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f1e40] leading-[1.12]">
                Use Packaging <br />
                When You <span className="text-[#dc2626]">Need It</span>
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
                Access reusable packaging equipment without the upfront investment. VEVRA provides packaging on a rental basis for defined operating cycles.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-red-500/20 hover:bg-[#b91c1c] transition-all hover:scale-105"
                >
                  Generate Quick RFQ
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-xs sm:text-sm tracking-wide hover:bg-slate-50 transition-all shadow-sm hover:scale-105"
                >
                  Talk to Our Experts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Bottom Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200/90 grid grid-cols-3 gap-3 max-w-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#dc2626]">
                    <Coins className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0f1e40] leading-tight">
                    Reduced Equipment Investment
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#dc2626]">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0f1e40] leading-tight">
                    Sustainable Packaging
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#dc2626]">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0f1e40] leading-tight">
                    Cycle-Based Model
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. WHAT PACKAGING RENTAL MEANS
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#dc2626] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                  What Packaging Rental Means
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                Smart Access to Reusable Packaging
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-normal max-w-3xl">
                VEVRA provides reusable packaging equipment through rental and pooling models, helping customers access packaging without maintaining unnecessary empty-equipment inventory.
              </p>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {whatMeansCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-4.5 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col"
                >
                  {card.icon}
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#0f1e40] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. HOW IT WORKS
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-[#fafbfc] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#dc2626] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                  How It Works
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                From Packaging Issue to Return
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-normal">
                A simple and efficient cycle to keep your supply chain moving.
              </p>
            </div>

            {/* 5-Step Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {howItWorksSteps.map((st, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {/* Arrow to Next Step on Desktop */}
                  {idx < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 -right-3 text-slate-300 font-bold text-lg z-0">
                      →
                    </div>
                  )}

                  {/* Circle Badge with Icon & Number */}
                  <div className="relative mb-4">
                    <div
                      className={`w-14 h-14 rounded-full ${st.badgeColor} flex items-center justify-center shadow-md shadow-slate-200`}
                    >
                      {st.icon}
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 bg-white text-[#0f1e40] text-[10px] font-black px-1.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-[#0f1e40] mb-1.5">
                    {st.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed max-w-[200px]">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. WHY RENT PACKAGING?
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#dc2626] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                  Why Rent Packaging?
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                Reduce the Cost of Owning Packaging
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-normal">
                A practical and sustainable alternative to ownership.
              </p>
            </div>

            {/* 5 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {whyRentCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="text-xs font-black text-slate-400">{card.num}</span>
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-[#0f1e40] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. PACKAGING EQUIPMENT AVAILABLE FOR RENTAL
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-[#fafbfc] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#dc2626] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                  Packaging Equipment Available for Rental
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                Standard Packaging Equipment
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-normal">
                A wide range and reusable packaging solutions for your supply chain needs.
              </p>
            </div>

            {/* 6 Equipment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {equipmentItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col group"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-3 flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-[#0f1e40] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. PACKAGING MODEL (4 Cards with Rental Highlighted)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#dc2626] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dc2626]">
                  Packaging Model
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                Rental as Part of a Circular Packaging Model
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-normal">
                Choose the right packaging model for your business needs.
              </p>
            </div>

            {/* 4 Models Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {packagingModels.map((model, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-slate-800 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {model.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {model.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#0f1e40] mb-2 leading-snug">
                      {model.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {model.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. BOTTOM SUSTAINABILITY CTA BANNER
        ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-rose-50/50 via-white to-emerald-50/40 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40] tracking-tight">
                  Let's Build a More Sustainable Supply Chain
                </h2>
                <p className="mt-2 text-sm text-slate-600 max-w-xl font-normal">
                  Access reusable packaging with a flexible rental model. Talk to our experts today.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-red-500/20 hover:bg-[#b91c1c] transition-all hover:scale-105"
                >
                  Generate Quick RFQ
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-xs sm:text-sm tracking-wide hover:bg-slate-50 transition-all shadow-sm hover:scale-105"
                >
                  Talk to Our Experts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
