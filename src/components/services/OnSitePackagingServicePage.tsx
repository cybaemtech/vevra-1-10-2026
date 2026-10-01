import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Box,
  CheckCircle2,
  Clock,
  Component,
  FileCheck,
  FileSpreadsheet,
  FileText,
  HardHat,
  Layers,
  Package,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import onsiteHeroImg from "@/assets/Vevara/Our Products and Service Page no 52 to 54/On-Site Packing For Turbine page no 54/blue_wrapped_machine_2_high_quality.webp";
import actionTurbineImg from "@/assets/Vevara/Our Products and Service Page no 52 to 54/On-Site Packing For Turbine page no 54/blue_wrapped_machine_high_quality.webp";
import actionComponentImg from "@/assets/Vevara/Our Products and Service Page no 52 to 54/On-Site Packing For Turbine page no 54/blue_wrapped_machine_2_high_quality.webp";
import actionHeavyImg from "@/assets/Vevara/Our Products and Service Page no 52 to 54/Steel Box Packaging with Steel + GI Sheet page no 53/lifting_metal_crate_high_quality.webp";
import cadDocImg from "@/assets/services/onsite/packaging-design-documentation.jpg";
import ppeTeamImg from "@/assets/services/onsite/safety-ppe-team.png";

export function OnSitePackagingServicePage() {
  const serviceCoverageRow1 = [
    {
      title: "On-site packing",
      desc: "Packaging operations at your production site.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-6 h-6 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      title: "Component handling",
      desc: "Safe handling of components and assemblies.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-6 h-6 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.948c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75" />
        </svg>
      ),
    },
    {
      title: "Turbine packing",
      desc: "Specialized packing for turbine and large equipment.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-6 h-6 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1" />
        </svg>
      ),
    },
    {
      title: "Heavy-component packing",
      desc: "Custom solutions for over-dimensional and heavy items.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-6 h-6 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5M9 11h6" />
        </svg>
      ),
    },
  ];

  const serviceCoverageRow2 = [
    {
      title: "Packaging manpower",
      desc: "Skilled and trained on-site workforce.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      title: "Packaging material management",
      desc: "Planning, supply and on-site material handling.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7a5 5 0 105 5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Packaging lines",
      desc: "Dedicated workstations and packing lines at customer facility.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: "Contract packaging",
      desc: "End-to-end packaging operations management on contract.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Line automation",
      desc: "Integration of strapping, taping and packaging machinery.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.07a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091.455.074.93-.05 1.378" />
        </svg>
      ),
    },
  ];

  return (
    <SiteLayout>
      <div className="bg-white text-slate-800 min-h-screen">
        {/* =========================================================================
            1. HERO SECTION (FULL BLEED HERO IMAGE, NO CARDS)
        ========================================================================= */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100 min-h-[480px] lg:min-h-[520px] flex items-center">
          {/* Right Side Full Image with natural fade to the left */}
          <div className="absolute right-0 top-0 bottom-0 h-full w-full sm:w-[65%] lg:w-[58%] pointer-events-none overflow-hidden">
            <img
              src={onsiteHeroImg}
              alt="On-Site Industrial Packaging"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft gradient fade overlay towards left text on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/30" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full relative z-10">
            <div className="max-w-xl lg:max-w-[540px]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                  Service Capability
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f1e40] leading-[1.15]">
                On-Site Industrial{" "}
                <span className="text-[#dc2626]">Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
                Packaging operations performed where your production or dispatch process happens.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-red-500/20 hover:bg-[#b91c1c] transition-all"
                >
                  GENERATE QUICK RFQ
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-xs sm:text-sm tracking-wide hover:bg-slate-50 transition-all shadow-sm"
                >
                  TALK TO US
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Trust Feature Badges */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-3 max-w-lg">
                {/* Badge 1 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#e11d2e]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f1e40] leading-tight">Experienced Team</div>
                    <div className="text-[10px] text-slate-500 font-medium">Skilled & Certified</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#e11d2e]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f1e40] leading-tight">Safe & Compliant</div>
                    <div className="text-[10px] text-slate-500 font-medium">Industry Best Practices</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#e11d2e]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f1e40] leading-tight">On-Time Support</div>
                    <div className="text-[10px] text-slate-500 font-medium">At Your Location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SECTION: WHAT THIS SERVICE COVERS
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                  What We Do
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                What this service covers
              </h2>
              <p className="text-sm text-slate-500 mt-1 font-normal">
                End-to-end on-site packaging support tailored to your industrial requirements.
              </p>
            </div>

            {/* Row 1: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {serviceCoverageRow1.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#0f1e40] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Row 2: 5 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceCoverageRow2.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0f1e40] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SECTION: ON-SITE PACKING IN ACTION
        ========================================================================= */}
        <section className="py-10 lg:py-14 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                On-Site Packing in Action
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left 3 Photo Cards */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Photo 1 */}
                <div className="flex flex-col">
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm aspect-[4/3] group">
                    <img
                      src={actionTurbineImg}
                      alt="On-Site Packing For Turbine"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[11px] font-bold text-[#0f1e40] text-center mt-2.5">
                    On-Site Packing For Turbine
                  </p>
                </div>

                {/* Photo 2 */}
                <div className="flex flex-col">
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm aspect-[4/3] group">
                    <img
                      src={actionComponentImg}
                      alt="Component Handling at Customer Site"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[11px] font-bold text-[#0f1e40] text-center mt-2.5">
                    Component Handling at Customer Site
                  </p>
                </div>

                {/* Photo 3 */}
                <div className="flex flex-col">
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm aspect-[4/3] group">
                    <img
                      src={actionHeavyImg}
                      alt="Heavy Component Packing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[11px] font-bold text-[#0f1e40] text-center mt-2.5">
                    Heavy Component Packing
                  </p>
                </div>
              </div>

              {/* Right Feature List Card */}
              <div className="lg:col-span-3 bg-[#f0f4fa] border border-[#d8e3f2] rounded-2xl p-5 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <HardHat className="w-5 h-5 text-[#1b2a78] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#0f1e40]">Trained Manpower</span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1b2a78] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#0f1e40]">Safety First</span>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#1b2a78] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#0f1e40]">Standard Work Process</span>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#1b2a78] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#0f1e40]">Quality Assured</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#1b2a78] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#0f1e40]">On-Time Execution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SECTION: DESIGN & DOCUMENTATION + SAFETY & PPE
        ========================================================================= */}
        <section className="py-10 lg:py-14 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Packaging Design & Documentation */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                    Packaging Design & Documentation
                  </span>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 shadow-sm">
                  <div className="rounded-xl overflow-hidden border border-slate-200/60 bg-slate-50">
                    <img
                      src={cadDocImg}
                      alt="Standard Work Instructions & Packing Documentation"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <p className="text-xs font-bold text-[#0f1e40] text-center mt-3">
                  Standard Work Instructions & Packing Documentation
                </p>
              </div>

              {/* Right Column: Safety & PPE at Site */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                    Safety & PPE at Site
                  </span>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-sm flex-1 flex flex-col sm:flex-row items-center gap-5">
                  {/* Photo of team in VEVRA safety vests */}
                  <div className="sm:w-3/5 w-full rounded-xl overflow-hidden border border-slate-200/60 bg-slate-100">
                    <img
                      src={ppeTeamImg}
                      alt="VEVRA On-Site Safety Team"
                      className="w-full h-[180px] sm:h-[220px] object-cover"
                    />
                  </div>

                  {/* Vertical Safety Checklist */}
                  <div className="sm:w-2/5 w-full space-y-3.5 pl-1">
                    <div className="flex items-center gap-3">
                      <HelmetIcon className="w-6 h-6 text-[#dc2626] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#0f1e40]">Helmet</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <SafetyGlassesIcon className="w-6 h-6 text-[#1b2a78] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#0f1e40]">Safety Glasses</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <GlovesIcon className="w-6 h-6 text-[#1b2a78] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#0f1e40]">Safety Gloves</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <SafetyShoesIcon className="w-6 h-6 text-[#1b2a78] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#0f1e40]">Safety Shoes</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <SafetyVestIcon className="w-6 h-6 text-[#1b2a78] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#0f1e40]">High Visibility Vest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. BOTTOM CTA BANNER (WHITE THEME WITH RED BUTTONS)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40] tracking-tight">
              Ready to deploy on-site packaging operations?
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Connect with VEVRA's industrial operations team for dedicated workforce, SOP implementation, and turnkey packaging management at your plant.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20"
              >
                REQUEST AN ON-SITE AUDIT
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-[#dc2626] text-[#dc2626] font-bold text-xs sm:text-sm hover:bg-rose-50 transition-all shadow-sm"
              >
                TALK TO AN ENGINEER
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

/* =========================================================================
   Custom Icon Helpers for PPE & Factory
========================================================================= */

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function HelmetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2C7.03 2 3 6.03 3 11v3h18v-3c0-4.97-4.03-9-9-9zM2 15h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
    </svg>
  );
}

function SafetyGlassesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14h.01M18 14h.01" />
      <path d="M3 10l2-4h14l2 4" />
      <rect x="3" y="10" width="8" height="7" rx="3" />
      <rect x="13" y="10" width="8" height="7" rx="3" />
    </svg>
  );
}

function GlovesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 19v2M10 19v2M14 19v2M18 19v2" />
      <path d="M4 14V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6" />
      <path d="M8 8V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v9" />
      <path d="M12 7V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v10" />
      <path d="M16 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5" />
    </svg>
  );
}

function SafetyShoesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17h16a2 2 0 0 0 2-2v-2a3 3 0 0 0-3-3h-5l-2-4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 1 1.73V19a1 1 0 0 0 1 1h16" />
    </svg>
  );
}

function SafetyVestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h4l4 4 4-4h4v16H4V4z" />
      <path d="M8 4v16M16 4v16M4 12h16M4 16h16" />
    </svg>
  );
}

export default OnSitePackagingServicePage;
