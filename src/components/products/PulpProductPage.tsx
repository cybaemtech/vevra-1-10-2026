import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Globe2,
  Layers,
  Leaf,
  Package,
  Pencil,
  Settings,
  Shield,
  Sparkles,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import pulpHeroImg from "@/assets/Vevara/Modeled Pulp packaging- new generated/hero section img.webp";
import pulpAutomotiveTraysImg from "@/assets/Vevara/Customised Solutions – Pulp Tray/pg-19/1.webp";
import pulpFmcgTraysImg from "@/assets/Vevara/Modeled Pulp packaging- new generated/Our product range/FMCG Insert tray.webp";
import pulpElectronicTraysImg from "@/assets/Vevara/Customised Solutions – Pulp Tray/pg-19/3.webp";
import pulpPremiumPackagingImg from "@/assets/Vevara/Customised Solutions – Pulp Tray/pg-19/5.webp";
import pulpProtectivePackagingImg from "@/assets/Vevara/Modeled Pulp packaging- new generated/Our product range/Modeled Pulp protective packaging.webp";
import pulpCustomizedTraysImg from "@/assets/Vevara/Modeled Pulp packaging- new generated/Our product range/Customised Component trays.webp";

export function PulpProductPage() {
  const pulpProducts = [
    {
      title: "Automotive Insert Trays",
      desc: "Precision molded trays for automotive components with secure fitment and separation.",
      image: pulpAutomotiveTraysImg,
    },
    {
      title: "FMCG Insert Trays",
      desc: "Cost-effective and sustainable trays for fast-moving consumer goods.",
      image: pulpFmcgTraysImg,
    },
    {
      title: "Electronics Trays",
      desc: "Custom molded trays for safe handling of electronic components and devices.",
      image: pulpElectronicTraysImg,
    },
    {
      title: "Premium Product Packaging",
      desc: "High-quality molded pulp packaging for premium and delicate products.",
      image: pulpPremiumPackagingImg,
    },
    {
      title: "Molded Pulp Protective Packaging",
      desc: "Durable molded pulp solutions for superior product protection during handling and transit.",
      image: pulpProtectivePackagingImg,
    },
    {
      title: "Customized Component Trays",
      desc: "Tailor-made molded pulp trays and inserts designed to your component specifications.",
      image: pulpCustomizedTraysImg,
    },
  ];

  const whyChoosePillars = [
    {
      title: "Eco-Friendly",
      desc: "Recyclable & biodegradable",
      icon: Leaf,
    },
    {
      title: "Custom Solutions",
      desc: "Designed for your components",
      icon: Layers,
    },
    {
      title: "Product Protection",
      desc: "Shock absorption and stability",
      icon: Shield,
    },
    {
      title: "Wide Applications",
      desc: "Automotive, FMCG, Electronics & more",
      icon: Settings,
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
            src={pulpHeroImg}
            alt="Molded Pulp Packaging by VEVRA"
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
                <span>PULP &amp; HONEYCOMB PACKAGING</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Molded Pulp <br />
                <span className="text-brand">Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Sustainable molded-pulp trays and inserts designed for component protection, separation and product presentation.
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
                    <Shield className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Reliable Protection</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Shock absorption and secure fitment</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Custom Designed</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Tailored to your component needs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={pulpHeroImg}
                  alt="Molded Pulp Packaging by VEVRA"
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
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">Recyclable &amp; Biodegradable</span>
                </div>
              </div>

              {/* Floating Dark Benefit Panel */}
              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Component Protection</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Sustainable Material</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom Fitments</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Suitable for Multiple Industries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCT RANGE (6 Cards Grid - 3 cols x 2 rows) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>OUR PRODUCT RANGE</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Molded Pulp Packaging Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[680px]">
                Application-specific molded-pulp packaging for a wide range of industries and components.
              </p>
            </div>

            <div className="hidden md:flex items-start border-l-2 border-brand pl-4 py-1 text-left select-none shrink-0 max-w-[220px]">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 leading-[1.35]">
                SUSTAINABLE PACKAGING FOR A GREENER TOMORROW
              </span>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pulpProducts.map((item) => (
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

      {/* 3. WHY CHOOSE VEVRA SECTION */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="rounded-3xl border border-slate-200/80 bg-[#fbfcfd] p-7 sm:p-10 lg:p-12 shadow-xs">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-brand block">
                — WHY CHOOSE VEVRA
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Sustainable Packaging for a Better Tomorrow
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

      {/* 4. BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-r from-slate-50 via-rose-50/40 to-slate-100 p-8 sm:p-10 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom Molded Pulp Packaging Solution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Let's discuss your component geometry, sustainable goals and custom tooling requirements.
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
                <span>Talk to Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
