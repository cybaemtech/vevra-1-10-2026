import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Building2,
  Cpu,
  Globe,
  MapPin,
  Package,
  Settings,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import warehouseHero from "@/assets/capabilities/cap-04-pooling.jpg";
import warehouseBanner from "@/assets/capabilities/service-warehouse-racks.jpg";
import heroBg from "@/assets/herobg.png";
import { IndiaNetworkMap } from "@/components/site/IndiaNetworkMap";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/warehouses")({
  head: () => ({
    meta: [
      { title: "Warehouses — Closer to Your Operations | VEVRA" },
      {
        name: "description",
        content:
          "Explore VEVRA's warehouse and packaging-management footprint across India, designed to improve reach, availability and supply-chain visibility.",
      },
      { property: "og:title", content: "VEVRA Warehouses and Locations" },
      {
        property: "og:description",
        content: "Closer to your operations. Closer to your customers across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WarehousesPage,
});

function WarehousesPage() {
  return (
    <SiteLayout>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 text-slate-900 border-b border-slate-100">
        {/* Background Angular Graphic Accent */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          <img
            src={heroBg}
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-none opacity-30 mix-blend-multiply object-cover object-left"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Heading, Subtext, Buttons & 4 Metric Pillars */}
            <div className="lg:col-span-6 2xl:col-span-6 z-10">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.26em] text-[#D9232A]">
                  WAREHOUSES
                </span>
              </div>

              <h1 className="mt-3.5 text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-black tracking-tight text-slate-950 leading-[1.1]">
                Closer to your
                <br />
                operations;
                <br />
                <span className="text-[#D9232A]">Closer to your customers!</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-medium">
                VEVRA's locations support packaging inventory, returnable asset management, availability and coordinated supply-chain operations.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  to="/calculator"
                  className="arrow-move inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all hover:bg-rose-700 hover:shadow-xl"
                >
                  Generate Quick RFQ <span className="arrow">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="arrow-move inline-flex items-center gap-2 rounded-full border-2 border-[#D9232A] bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-[#D9232A] shadow-sm transition-all hover:bg-rose-50"
                >
                  Talk to us <span className="arrow">→</span>
                </Link>
              </div>

              {/* 4 Feature Metrics */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                <div className="space-y-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-base font-black text-slate-900">11+</span>
                    <span className="block text-[11px] font-semibold text-slate-500 leading-tight">
                      Locations Across India
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-base font-black text-slate-900">100%</span>
                    <span className="block text-[11px] font-semibold text-slate-500 leading-tight">
                      Pan-India Support
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-base font-black text-slate-900">Strategic</span>
                    <span className="block text-[11px] font-semibold text-slate-500 leading-tight">
                      Facilities Near Key Hubs
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-base font-black text-slate-900">Faster</span>
                    <span className="block text-[11px] font-semibold text-slate-500 leading-tight">
                      Dispatch & Lower Lead Time
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Warehouse Image with Floating Badge */}
            <div className="lg:col-span-6 2xl:col-span-6">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-2xl">
                  <img
                    src={warehouseHero}
                    alt="VEVRA modern high-bay warehouse operations and pallet management"
                    className="h-[380px] sm:h-[440px] lg:h-[480px] w-full object-cover"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10" />

                  {/* Floating Bottom-Right Modern Warehouse Badge */}
                  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 flex items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-white/80 shadow-2xl select-none">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-950">Modern Warehouses</h4>
                      <p className="text-xs font-semibold text-slate-500">Safe | Secure | Scalable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Our Network Section (Interactive Map & Facilities) */}
      <section className="bg-slate-50/70 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR NETWORK
                </span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-950">
                One connected packaging network <span className="text-[#D9232A]">across India.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Manufacturing units, warehouses and returnable-asset pools operate as one network from the Pune hub — so the right packaging reaches the right plant, on time.
              </p>
            </div>

            {/* Right Top Badge */}
            <div className="flex items-center gap-3.5 rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200 shadow-sm shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-950">Pan-India Network</h4>
                <p className="text-[11px] font-semibold text-slate-500">From Local to Global</p>
              </div>
            </div>
          </div>

          {/* Map + Facilities Grid */}
          <IndiaNetworkMap />

        </div>
      </section>

      {/* 3. Four Core Value Pillars */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] mb-3.5">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-black text-slate-950">Optimized Distribution</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500">Faster turnaround times</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] mb-3.5">
                <Boxes className="h-6 w-6" />
              </div>
              <h3 className="text-base font-black text-slate-950">Inventory Availability</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500">Closer to your demand</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] mb-3.5">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-black text-slate-950">Secure & Compliant</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500">Industry best practices</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] mb-3.5">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-base font-black text-slate-950">Scalable Network</h3>
              <p className="mt-1 text-xs font-semibold text-slate-500">Supporting your growth</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom Callout Banner */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-12 items-center">
              
              {/* Left Photo */}
              <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative overflow-hidden">
                <img
                  src={warehouseBanner}
                  alt="VEVRA Warehouse Network"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                      BUILT FOR YOUR GROWTH
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                    Integrated. Accessible.
                    <br />
                    <span className="text-[#D9232A]">Always Closer.</span>
                  </h3>

                  <p className="mt-2.5 max-w-lg text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Our expanding warehouse network ensures your packaging materials are where you need them — when you need them.
                  </p>
                </div>

                {/* Button */}
                <div className="shrink-0">
                  <Link
                    to="/calculator"
                    className="arrow-move inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all hover:bg-rose-700 hover:shadow-xl"
                  >
                    Generate Quick RFQ <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
