import { Link } from "@tanstack/react-router";
import {
  Activity,
  Anchor,
  ArrowRight,
  BarChart3,
  Box,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  FileText,
  Globe2,
  Layers,
  MapPin,
  Maximize2,
  Navigation,
  Package,
  Plane,
  RefreshCw,
  RotateCcw,
  Send,
  Shield,
  ShieldCheck,
  Ship,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import transportHeroImg from "@/assets/pictures/hero- service capability/transport_logistics_background.webp";
import airFreightImg from "@/assets/pictures/Global freight solutions/air_freight_background.webp";
import oceanFreightImg from "@/assets/pictures/Global freight solutions/ocean_freight_background.webp";
import pickupImg from "@/assets/pictures/How it works/pickup_at_supplier.webp";
import exportHandlingImg from "@/assets/pictures/How it works/export_handling.webp";
import airOceanImg from "@/assets/pictures/How it works/air_ocean_freight.png";
import importClearanceImg from "@/assets/pictures/How it works/import_clearance.webp";
import surfaceTransportImg from "@/assets/pictures/How it works/surface_transport.png";
import trackingImg from "@/assets/pictures/How it works/traking.png";
import finalDeliveryImg from "@/assets/pictures/How it works/Final delivery.webp";
import ctaBgImg from "@/assets/pictures/ready to move forward/logistics_cta_background.webp";
import actionTruckImg from "@/assets/Logistic in action/vevra_truck.png";
import actionAirFreightImg from "@/assets/Logistic in action/air_freight_forwarding.webp";
import actionOceanFreightImg from "@/assets/Logistic in action/ocean_freight_solutions_center.webp";
import actionExportContainerImg from "@/assets/Logistic in action/export_container_handling.png";

export function TransportLogisticsServicePage() {
  const serviceCards = [
    {
      title: "Road Transportation",
      desc: "Reliable domestic and cross-border road transport.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.948c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75" />
        </svg>
      ),
    },
    {
      title: "Tracking",
      desc: "Real-time tracking and shipment visibility.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: "Contract Packaging",
      desc: "Packaging, kitting and value-added services.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      title: "Packaging Logistics",
      desc: "End-to-end packaging movement and management.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: "Reverse Logistics",
      desc: "Collection and return of empty packaging assets.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      title: "Air Freight",
      desc: "Global air freight solutions for time-sensitive shipments.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
    },
    {
      title: "Ocean Freight",
      desc: "Cost-effective sea freight for global shipping.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M3 21c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M5 14l2-6h10l2 6M12 4v4" />
        </svg>
      ),
    },
    {
      title: "FCL",
      desc: "Full Container Load shipping solutions.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 6v12M11 6v12M15 6v12M19 6v12" />
        </svg>
      ),
    },
    {
      title: "LCL",
      desc: "Less than Container Load for smaller shipments.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 6v12M16 6v12" />
        </svg>
      ),
    },
    {
      title: "Break-Bulk",
      desc: "Handling of over-dimensional and heavy cargo.",
      iconBg: "bg-rose-50 text-[#e11d2e] border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M21 3L3 21" />
        </svg>
      ),
    },
    {
      title: "Customs Support",
      desc: "Documentation and customs clearance support.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      label: "Pickup",
      image: pickupImg,
    },
    {
      label: "Transport",
      image: surfaceTransportImg,
    },
    {
      label: "Tracking",
      image: trackingImg,
    },
    {
      label: "Port / Airport",
      image: airOceanImg,
    },
    {
      label: "Customs Clearance",
      image: importClearanceImg,
    },
    {
      label: "Final Delivery",
      image: finalDeliveryImg,
    },
  ];

  const actionCards = [
    {
      title: "Road Transportation",
      sub: "Domestic & Cross-Border Surface Fleet",
      image: actionTruckImg,
    },
    {
      title: "Air Freight Forwarding",
      sub: "Global Air Cargo & Rapid Transit",
      image: actionAirFreightImg,
    },
    {
      title: "Ocean Freight Solutions",
      sub: "Global Sea Shipping & Containerized Cargo",
      image: actionOceanFreightImg,
    },
    {
      title: "Export & Container Handling",
      sub: "FCL / LCL & Specialized Export Handling",
      image: actionExportContainerImg,
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
              src={transportHeroImg}
              alt="Transport & Logistics Global Supply Chain"
              className="w-full h-full object-cover object-right"
            />
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
                Transport &{" "}
                <span className="text-[#dc2626]">Logistics</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
                Integrated transportation and packaging logistics for domestic and international supply chains.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
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
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f1e40] leading-tight">Reliable & On-Time</div>
                    <div className="text-[10px] text-slate-500 font-medium">Deliveries</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#e11d2e]">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f1e40] leading-tight">End-to-End Visibility</div>
                    <div className="text-[10px] text-slate-500 font-medium">and Tracking</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#e11d2e]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0f1e40] leading-tight">Safe & Secure</div>
                    <div className="text-[10px] text-slate-500 font-medium">Handling</div>
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                    Our Logistics Services
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                  What this service covers
                </h2>
                <p className="text-sm text-slate-500 mt-1 font-normal max-w-2xl">
                  From first mile to final destination, we provide integrated transportation and packaging logistics solutions tailored to your supply chain requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-xs tracking-wide hover:bg-slate-50 transition-all shadow-sm flex-shrink-0 self-start md:self-auto"
              >
                Talk to Our Experts
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 11 Service Cards in a 4-column responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceCards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#0f1e40] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SECTION: FROM ORIGIN TO DESTINATION (PROCESS FLOW)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Aligned Section Header */}
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                  End-to-End Logistics Solutions
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f1e40]">
                From Origin to Destination
              </h2>
            </div>

            {/* 6 Connected Steps with Dashed Blue Arrows */}
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-8 gap-x-2 sm:gap-x-4">
              {processSteps.map((step, idx) => (
                <div key={step.label} className="contents">
                  <div className="flex flex-col items-center text-center flex-1 min-w-[120px] sm:min-w-[140px] lg:min-w-0">
                    <div className="h-24 sm:h-28 lg:h-32 w-full flex items-center justify-center mb-3">
                      <img
                        src={step.image}
                        alt={step.label}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#0f1e40] leading-tight">
                      {step.label}
                    </span>
                  </div>

                  {/* Dashed Blue Arrow between steps */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center shrink-0 -mt-7 px-1">
                      <svg width="46" height="14" viewBox="0 0 46 14" fill="none">
                        <path
                          d="M0 7H40M40 7L33 2M40 7L33 12"
                          stroke="#2563eb"
                          strokeWidth="1.8"
                          strokeDasharray="4 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SECTION: KPI METRICS BAR
        ========================================================================= */}
        <section className="py-8 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f0f6ff] border border-[#d6e4f8] rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Metric 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0f1e40]">10,000+</div>
                    <div className="text-xs text-slate-600 font-medium">Shipments Handled Yearly</div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0f1e40]">25+</div>
                    <div className="text-xs text-slate-600 font-medium">Countries Served</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0f1e40]">99.8%</div>
                    <div className="text-xs text-slate-600 font-medium">On-Time Deliveries</div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0f1e40]">500+</div>
                    <div className="text-xs text-slate-600 font-medium">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SECTION: LOGISTICS IN ACTION
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                    Logistics In Action
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                  Reliable Movement. Real Impact.
                </h2>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-xs tracking-wide hover:bg-slate-50 transition-all shadow-sm self-start sm:self-auto"
              >
                View More
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {actionCards.map((card, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm aspect-[4/3] group">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3 text-left">
                    <h3 className="text-xs font-bold text-[#0f1e40]">{card.title}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. BOTTOM CTA BANNER (WHITE THEME WITH RED BUTTONS)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40] tracking-tight">
              Ready to streamline your transport & logistics?
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Get in touch with VEVRA's freight operations team for customized routing, contract packaging, real-time tracking, and multi-modal logistics.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20"
              >
                GET A FREIGHT QUOTE
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-[#dc2626] text-[#dc2626] font-bold text-xs sm:text-sm hover:bg-rose-50 transition-all shadow-sm"
              >
                CONSULT SPECIALISTS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

export default TransportLogisticsServicePage;
