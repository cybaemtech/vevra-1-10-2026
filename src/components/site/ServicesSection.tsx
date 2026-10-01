import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  Compass,
  Cpu,
  Globe2,
  Layers,
  Leaf,
  Package,
  Plane,
  RefreshCw,
  Repeat,
  Ship,
  Sparkles,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { useState } from "react";

import { SERVICES } from "@/lib/site-content";
import { SERVICE_IMAGES } from "@/lib/site-images";

const SERVICE_ICONS: Record<string, typeof Package> = {
  "packaging-engineering": Compass,
  "returnable-packaging-management": RefreshCw,
  "returnable-packaging": RefreshCw,
  "packaging-rental": Repeat,
  "equipment-pooling": Boxes,
  "on-site-packaging-operations": Users,
  "warehouse-packaging-management": Warehouse,
  "transport-logistics": Truck,
  "air-ocean-freight": Globe2,
  "packaging-optimization-sustainability": Sparkles,
};

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "engineering", label: "Design & Optimization" },
  { id: "circular", label: "Returnable & Rental" },
  { id: "operations", label: "Plant & Warehousing" },
  { id: "logistics", label: "Transport & Freight" },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = SERVICES.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "engineering") {
      return (
        service.slug === "packaging-engineering" ||
        service.slug === "packaging-optimization-sustainability"
      );
    }
    if (activeCategory === "circular") {
      return (
        service.slug === "returnable-packaging-management" ||
        service.slug === "returnable-packaging" ||
        service.slug === "packaging-rental" ||
        service.slug === "equipment-pooling"
      );
    }
    if (activeCategory === "operations") {
      return (
        service.slug === "on-site-packaging-operations" ||
        service.slug === "warehouse-packaging-management"
      );
    }
    if (activeCategory === "logistics") {
      return (
        service.slug === "transport-logistics" ||
        service.slug === "air-ocean-freight"
      );
    }
    return true;
  });

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900" aria-labelledby="services-title">
      {/* Background Soft Radiance */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-rose-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-80 w-80 rounded-full bg-rose-50/70 blur-2xl" />

      <div className="relative mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
              <span className="h-1 w-8 bg-brand inline-block rounded-full" />
              END-TO-END SERVICES
            </div>

            <h2
              id="services-title"
              className="mt-4 text-3xl sm:text-4xl lg:text-[3.15rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.06] text-brand-blue-dark"
            >
              Packaging managed as a system, <br />
              <span className="text-brand">not a purchase order.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[580px]">
              From custom engineering and returnable pooling to on-site packing operations and smart warehousing, VEVRA takes total ownership of your packaging lifecycle.
            </p>
          </div>

          {/* Right Cursive Tag & Filters */}
          <div className="flex flex-col sm:items-end gap-5">
            <div className="select-none pointer-events-none text-right">
              <span className="font-['Dancing_Script',cursive] text-2xl sm:text-3xl font-bold text-brand -rotate-3 block">
                Engineered for Reliability
              </span>
              <svg className="h-3 w-32 text-brand ml-auto mt-0.5" viewBox="0 0 120 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 8 Q 60 16, 120 4" />
              </svg>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-brand text-white shadow-md shadow-brand/20 scale-102"
                      : "text-slate-600 hover:text-brand-blue-dark hover:bg-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service, index) => {
            const Icon = SERVICE_ICONS[service.slug] || Package;
            const stepNum = String(index + 1).padStart(2, "0");
            const imageSrc = SERVICE_IMAGES[service.slug];

            return (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/40 min-h-[320px]"
              >
                {/* Background Photo with Subtle Faded Overlay */}
                {imageSrc ? (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                      src={imageSrc}
                      alt={service.name}
                      className="h-full w-full object-cover opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-10"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                {/* Card Header Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105 shadow-sm">
                      <Icon className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-2xl font-black text-rose-200/90 group-hover:text-brand/40 transition-colors">
                      {stepNum}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-black text-brand-blue-dark group-hover:text-brand transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium line-clamp-2">
                    {service.short}
                  </p>

                  {/* Feature Checklist Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.points.slice(0, 3).map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center gap-1 rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[10px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-3 w-3 text-brand shrink-0" />
                        <span>{point}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="relative z-10 mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-brand group-hover:text-brand-dark">
                    Explore Service
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:translate-x-1">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.2]" />
                  </span>
                </div>

                {/* Red Swoop in Bottom-Right Corner */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-16 w-16 rounded-tl-full bg-brand/10 transition-transform duration-300 group-hover:scale-125" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50/90 via-white to-rose-50/50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand">
              <Sparkles className="h-4 w-4" />
              OPTIMIZE YOUR ENTIRE SUPPLY CHAIN
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-black text-brand-blue-dark">
              Ready to transform your packaging operations?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-medium">
              Speak with a VEVRA packaging consultant to analyze your current supply chain and calculate savings.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark hover:scale-105"
          >
            <span>Talk to a Packaging Engineer</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
