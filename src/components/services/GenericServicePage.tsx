import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock,
  Factory,
  FileCheck2,
  FileText,
  Layers,
  Package,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
  Users,
  UsersRound,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Segment } from "@/lib/site-content";
import { SERVICE_IMAGES } from "@/lib/site-images";

const FEATURE_ICONS = [
  { icon: UsersRound, bg: "bg-rose-50 text-brand" },
  { icon: Package, bg: "bg-blue-50 text-brand-blue" },
  { icon: Factory, bg: "bg-rose-50 text-brand" },
  { icon: Truck, bg: "bg-blue-50 text-brand-blue" },
  { icon: Settings, bg: "bg-rose-50 text-brand" },
  { icon: FileCheck2, bg: "bg-blue-50 text-brand-blue" },
];

function formatServiceTitle(name: string) {
  const words = name.split(" ");
  if (words.length > 2) {
    return {
      main: words.slice(0, -1).join(" "),
      accent: words[words.length - 1],
    };
  }
  if (words.length === 2) {
    return {
      main: words[0],
      accent: words[1],
    };
  }
  return {
    main: name,
    accent: "",
  };
}

function getFeatureDescription(point: string) {
  const map: Record<string, string> = {
    "Packaging manpower": "Skilled manpower for end-to-end packaging operations.",
    "Material handling": "Efficient handling of materials and packaging components.",
    "On-site packing": "On-site packing as per your production needs and timelines.",
    "Dispatch support": "Timely dispatch coordination to ensure smooth deliveries.",
    "Packaging operations": "Complete on-site packaging process execution and supervision.",
    "Process discipline": "Standardized processes for quality, safety and efficiency.",
    "Packaging design": "Engineered around product protection and stack efficiency.",
    "Engineering and prototyping": "Rapid functional prototypes for rigorous transit validation.",
    "Transit trials and testing": "Dynamic stress and vibration simulation for zero damage.",
    "Reusable packaging systems": "Built to withstand repeated cycles across distribution networks.",
    "Asset circulation": "Tracking and pooling systems to maximize asset turns.",
    "Zero or reduced capex model": "Pay for utilization rather than heavy upfront capital.",
  };
  return map[point] || `Specialized ${point.toLowerCase()} tailored for your specific operating environment.`;
}

export function GenericServicePage({ service }: { service: Segment }) {
  const titleFormatted = formatServiceTitle(service.name);
  const serviceImage = SERVICE_IMAGES[service.slug] || SERVICE_IMAGES["on-site-packaging-operations"];

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={serviceImage}
            alt={`${service.name} Operations by VEVRA`}
            className="w-full h-full object-cover object-left"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-8 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-[640px] z-10">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                SERVICE CAPABILITY
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                {titleFormatted.main} <br />
                <span className="text-brand">{titleFormatted.accent}</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[520px]">
                {service.short}
              </p>

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
                  <span>Talk to us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="flex items-start gap-3 sm:pr-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Flexible &amp; Scalable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">On-Demand Support</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:px-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Users className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Skilled Manpower</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Trained &amp; Reliable</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:pl-4 py-3 sm:py-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <ShieldCheck className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Safe &amp; Efficient</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Industry Best Practices</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={serviceImage}
                  alt={`${service.name} Operations by VEVRA`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="rounded-2xl bg-white/95 border border-slate-200/80 p-3.5 sm:p-4 backdrop-blur-md shadow-xl flex items-center gap-3 self-end z-10 transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                  <BarChart3 className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black text-brand-blue-dark block leading-none">99.8%</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 block mt-1">DISPATCH TIMELINESS</span>
                </div>
              </div>

              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>SLA Backed Operations</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>On-Site Supervision</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Zero Line Stoppages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT THIS SERVICE COVERS */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-8 sm:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-brand">
                <span className="h-1 w-8 bg-brand inline-block rounded-full" />
                SCOPE OF DELIVERY
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
                What this service covers
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[620px]">
                {service.intro}
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

          <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.points.map((point, i) => {
              const meta = FEATURE_ICONS[i % FEATURE_ICONS.length];
              const Icon = meta.icon;
              return (
                <div
                  key={point}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${meta.bg} shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                    {point}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {getFeatureDescription(point)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
