import { Link } from "@tanstack/react-router";
import {
  Anchor,
  ArrowRight,
  Award,
  BarChart3,
  Box,
  Boxes,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Globe,
  Globe2,
  Layers,
  MapPin,
  Maximize2,
  Navigation,
  Package,
  Plane,
  RefreshCw,
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
import airFreightImg from "@/assets/pictures/Global freight solutions/air_freight_background.webp";
import oceanFreightImg from "@/assets/pictures/Global freight solutions/ocean_freight_background.webp";
import transportHeroImg from "@/assets/pictures/hero- service capability/transport_logistics_background.webp";
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

export function AirOceanFreightServicePage() {
  const serviceCards = [
    {
      title: "Road Transportation",
      desc: "Reliable domestic and cross-border road transport.",
      iconBg: "bg-rose-50 border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.948c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75" />
        </svg>
      ),
    },
    {
      title: "Contract Packaging",
      desc: "Packaging, kitting and value-added services.",
      iconBg: "bg-rose-50 border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      title: "Packaging Logistics",
      desc: "End-to-end packaging movement and management.",
      iconBg: "bg-sky-50 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: "Reverse Logistics",
      desc: "Collection and return of empty and reusable packaging assets.",
      iconBg: "bg-sky-50 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      title: "Air Freight",
      desc: "Global air freight solutions for time-sensitive shipments.",
      iconBg: "bg-rose-50 border-rose-100",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
    },
    {
      title: "Ocean Freight",
      desc: "FCL, LCL and break-bulk ocean freight solutions.",
      iconBg: "bg-sky-50 border-sky-100",
      icon: (
        <svg className="w-5 h-5 stroke-sky-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M3 21c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M5 14l2-6h10l2 6M12 4v4" />
        </svg>
      ),
    },
    {
      title: "Customs Support",
      desc: "Documentation and customs clearance support.",
      iconBg: "bg-sky-50 border-sky-100",
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
              src={airOceanImg}
              alt="Air & Ocean Freight Operations"
              className="w-full h-full object-cover object-right"
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
                Air & Ocean<br />
                <span className="text-[#dc2626]">Freight</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg font-normal leading-relaxed">
                End-to-end global freight solutions with integrated packaging support, ensuring safe, compliant and cost-efficient movement of your goods across continents.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#e11d2e] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-red-500/20 hover:bg-[#b91c1c] transition-all hover:scale-105"
                >
                  Generate Quick RFQ
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/95 border border-slate-300 text-[#0f1e40] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm hover:scale-105"
                >
                  Talk to Us
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 3 Trust Feature Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-lg">
                {/* Badge 1 */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Global Reach</div>
                    <div className="text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">Domestic & International</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Safe & Compliant</div>
                    <div className="text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">Customs & Documentation</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Packaging Integration</div>
                    <div className="text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">End-to-End Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SECTION: WHAT THIS SERVICE COVERS
        ========================================================================= */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-[2px] bg-[#e11d2e] inline-block" />
                  <span className="text-[10.5px] font-extrabold uppercase tracking-[0.05em] text-[#e11d2e]">
                    Our Logistics Services
                  </span>
                </div>
                <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0f1e40]">
                  What this service covers
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-normal max-w-2xl">
                  Comprehensive transportation and packaging logistics solutions tailored to your supply chain requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-[11px] tracking-wide hover:bg-slate-50 transition-all shadow-sm flex-shrink-0 self-start md:self-auto"
              >
                Talk to Our Experts
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 8 Service Cards in 4 columns × 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {serviceCards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[13px] font-bold text-[#0f1e40] mb-1">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SECTION: GLOBAL FREIGHT SOLUTIONS (AIR & OCEAN FREIGHT SHOWCASE)
        ========================================================================= */}
        <section className="py-10 lg:py-14 bg-[#f8fafd] border-t border-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="w-5 h-[2px] bg-[#e11d2e] inline-block" />
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.05em] text-[#e11d2e]">
                  Global Freight Solutions
                </span>
              </div>
              <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0f1e40]">
                Air Freight & <span className="text-[#dc2626]">Ocean Freight</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-normal max-w-xl mx-auto">
                End-to-end global freight forwarding with reliable partners and customs support.
              </p>
            </div>

            {/* 2 High-End Showcase Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Column: Air Freight Card */}
              <div className="relative bg-[#f8faff] border border-blue-100/90 rounded-3xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between min-h-[390px] sm:min-h-[360px] group">
                {/* Background Image anchored to right so the entire right side is fully visible */}
                <img
                  src={airFreightImg}
                  alt="Air Freight Cargo Aircraft"
                  className="absolute right-0 top-0 bottom-0 h-full w-full object-cover object-right pointer-events-none group-hover:scale-105 transition-transform duration-700"
                />

                {/* Left Text Content */}
                <div className="relative z-10 p-6 sm:p-7 max-w-full sm:max-w-[56%] md:max-w-[52%] flex flex-col justify-between h-full bg-gradient-to-r from-[#f8faff] via-[#f8faff]/95 to-transparent sm:bg-transparent">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center mb-2.5 shadow-sm shadow-blue-500/20">
                      <Plane className="w-4 h-4 rotate-[-45deg]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0f1e40] mb-1">Air Freight</h3>
                    <p className="text-[11px] text-slate-600 leading-snug mb-3.5 font-normal">
                      End-to-end air freight forwarding supported by commercial and charter partnerships, with full customs clearance service capability.
                    </p>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <Globe className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                        <span>Among global top carrier networks</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <Users className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                        <span>Commercial & channel partners</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <FileText className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                        <span>End-to-end service including customs support</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#dc2626] text-white font-bold text-xs tracking-wide hover:bg-[#b91c1c] transition-all shadow-sm"
                    >
                      Book Air Freight
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Ocean Freight Card */}
              <div className="relative bg-[#fff9f5] border border-orange-100/90 rounded-3xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between min-h-[390px] sm:min-h-[360px] group">
                {/* Background Image anchored to right so the entire right side is fully visible */}
                <img
                  src={oceanFreightImg}
                  alt="Ocean Vessel Freight Operations"
                  className="absolute right-0 top-0 bottom-0 h-full w-full object-cover object-right pointer-events-none group-hover:scale-105 transition-transform duration-700"
                />

                {/* Left Text Content */}
                <div className="relative z-10 p-6 sm:p-7 max-w-full sm:max-w-[56%] md:max-w-[52%] flex flex-col justify-between h-full bg-gradient-to-r from-[#fff9f5] via-[#fff9f5]/95 to-transparent sm:bg-transparent">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#ea580c] text-white flex items-center justify-center mb-2.5 shadow-sm shadow-orange-500/20">
                      <Ship className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0f1e40] mb-1">Ocean Freight</h3>
                    <p className="text-[11px] text-slate-600 leading-snug mb-3.5 font-normal">
                      FCL, LCL and break-bulk ocean freight solutions with end-to-end service capability including port handling and customs support.
                    </p>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <Box className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0" />
                        <span>FCL (Full Container Load)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <Boxes className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0" />
                        <span>LCL (Less than Container Load)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <Anchor className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0" />
                        <span>Break-bulk cargo solutions</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold text-[#0f1e40]">
                        <FileText className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0" />
                        <span>End-to-end service including customs support</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#dc2626] text-white font-bold text-xs tracking-wide hover:bg-[#b91c1c] transition-all shadow-sm"
                    >
                      Book Ocean Freight
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SECTION: FROM ORIGIN TO DESTINATION (PROCESS FLOW WITH AUTHENTIC PHOTOGRAPHS)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                  End-to-End Logistics Solutions
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40]">
                From Origin to Destination
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal max-w-xl mx-auto">
                Seamless multi-modal flow across every node in your international supply chain.
              </p>
            </div>

            {/* 6 Connected Steps with Photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-start mb-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  <div className="w-full aspect-square max-w-[135px] rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm mb-3 group-hover:scale-105 group-hover:shadow-md transition-all">
                    <img
                      src={step.image}
                      alt={step.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0f1e40] leading-tight px-1">
                    {step.label}
                  </span>
                  <span className="mt-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                    Step 0{idx + 1}
                  </span>

                  {/* Connector Arrow (on lg screens) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-14 transform -translate-y-1/2 z-10 text-slate-300">
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M0 6H16M16 6L11 1M16 6L11 11" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Slogan with center line */}
            <div className="text-center">
              <p className="text-sm sm:text-base font-extrabold text-[#0f1e40] tracking-tight">
                One Partner. Global Reach. Complete Control.
              </p>
              <div className="w-12 h-[3px] bg-[#dc2626] mx-auto mt-2.5 rounded-full" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SECTION: 5 TRUST & PERFORMANCE BADGES
        ========================================================================= */}
        <section className="py-8 bg-[#f8fafd] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-4">
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Global Coverage</div>
                  <div className="text-[9.5px] text-slate-500 font-medium">Domestic & International</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Customs Support</div>
                  <div className="text-[9.5px] text-slate-500 font-medium">Hassle-free Clearance</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Reliable & On-Time</div>
                  <div className="text-[9.5px] text-slate-500 font-medium">End-to-End Visibility</div>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Trusted Partners</div>
                  <div className="text-[9.5px] text-slate-500 font-medium">Global Network</div>
                </div>
              </div>

              {/* Badge 5 */}
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/70 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <Boxes className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Flexible Solutions</div>
                  <div className="text-[9.5px] text-slate-500 font-medium">FCL / LCL / Break-bulk</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. SECTION: LOGISTICS IN ACTION
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2.5px] bg-[#e11d2e] inline-block" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e11d2e]">
                    Freight Operations
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
                Request Custom Routing
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {actionCards.map((card, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm aspect-[4/3] group">
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
            7. BOTTOM CTA BANNER (WHITE THEME WITH RED BUTTONS)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40] tracking-tight">
              Ready to modernize your global freight operations?
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Connect with VEVRA's air & ocean freight specialists for competitive tariffs, integrated crating, and reliable multi-modal freight routes.
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
                TALK TO FREIGHT EXPERTS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

export default AirOceanFreightServicePage;
