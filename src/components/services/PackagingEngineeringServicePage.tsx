import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  Cog,
  Lightbulb,
  Maximize2,
  Package,
  Pencil,
  Settings,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import serviceEngineeringCad from "@/assets/capabilities/service-engineering-cad.png";
import { SustainablePackagingSection } from "./SustainablePackagingServicePage";
import { ProjectDevelopmentPhases } from "./ProjectDevelopmentPhases";

export function PackagingEngineeringServicePage() {


  const serviceCovers = [
    {
      title: "Packaging Design",
      desc: "Engineered for product protection and stack efficiency.",
      icon: Package,
    },
    {
      title: "Engineering and Prototyping",
      desc: "Rapid functional prototypes for rigorous validation.",
      icon: Cog,
    },
    {
      title: "Pack-out Studies",
      desc: "Specialized pack-out studies tailored to your specific operating environment.",
      icon: Package,
    },
    {
      title: "Transit Trials and Testing",
      desc: "Dynamic stress and vibration simulation for zero damage.",
      icon: Truck,
    },
    {
      title: "Standardization",
      desc: "Packaging standard solutions for improved efficiency.",
      icon: Settings,
    },
    {
      title: "VA/VE and Space Optimization",
      desc: "Optimized designs to reduce material and logistics costs.",
      icon: Maximize2,
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
            src={serviceEngineeringCad}
            alt="Packaging Design & Engineering by VEVRA"
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
                Packaging Design &amp; <br />
                <span className="text-brand">Engineering</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Design the right packaging before investing in the wrong one. From concept to commercialization, we create packaging solutions that protect your product, optimize costs and strengthen your supply chain.
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
                    <Cog className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Application Focused
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Tailored to your product and supply chain
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <Users className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Expert Engineering Support
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      From concept to commercialization
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Reliable &amp; Efficient
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Stronger, safer and more cost-effective solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Floating Panel */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={serviceEngineeringCad}
                  alt="Packaging Design & Engineering by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Vertical Glassmorphism Step Indicator Card */}
      

              {/* Handwritten Script Tag */}
           
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROJECT DEVELOPMENT PHASES */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          {/* Section Header Left-Aligned matching other sections */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
              <span className="w-5 h-[2px] bg-[#e11d2e] inline-block" />
              <span>OUR APPROACH</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
              Project Development Phases
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[720px]">
              A structured and collaborative approach to deliver the right packaging solution for your needs.
            </p>
          </div>

          <div className="flex justify-center">
            <ProjectDevelopmentPhases />
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE DESIGN & ENGINEERING SUPPORT (WHAT THIS SERVICE COVERS) */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>WHAT THIS SERVICE COVERS</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                Comprehensive Design &amp; Engineering Support
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[720px]">
                VEVRA engineers packaging around the product, process and supply-chain requirement – not around a one-size-fits-all catalogue.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2 shadow-xs"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* 6 Capabilities Cards Grid */}
          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {serviceCovers.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-brand border border-rose-100 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. DESIGN FOR SUSTAINABLE PACKAGING SECTION */}
      <SustainablePackagingSection />
    </SiteLayout>
  );
}
