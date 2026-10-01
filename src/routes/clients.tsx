import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Phone,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import heroWarehouse from "@/assets/clients-page/hero-warehouse.jpg";
import indAutomotive from "@/assets/clients-page/ind-automotive.jpg";
import indEngineering from "@/assets/clients-page/ind-engineering.jpg";
import indManufacturing from "@/assets/clients-page/ind-manufacturing.jpg";
import indFmcg from "@/assets/clients-page/ind-fmcg.jpg";
import indElectronics from "@/assets/clients-page/ind-electronics.jpg";
import indConsumer from "@/assets/clients-page/ind-consumer.jpg";
import indAgriculture from "@/assets/clients-page/ind-agriculture.jpg";
import indEcommerce from "@/assets/clients-page/ind-ecommerce.jpg";
import indOther from "@/assets/clients-page/ind-other.jpg";
import caseStudyBox from "@/assets/clients-page/case-study-box.png";
import ctaHandshake from "@/assets/clients-page/cta-handshake.jpg";

import vevraLogo from "@/assets/vevra-logo.png";
import { TrustedIndustryLeadersSection } from "@/components/site/TrustedIndustryLeadersSection";

import { RfqButton, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Industries — Trusted Where Packaging Cannot Fail | VEVRA" },
      {
        name: "description",
        content:
          "VEVRA supports packaging challenges across automotive, engineering, industrial manufacturing, FMCG, electronics, agriculture and emerging industries.",
      },
      { property: "og:title", content: "VEVRA Clients and Industries" },
      { property: "og:description", content: "Trusted where packaging cannot fail." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

const PROOF_STATS = [
  {
    icon: TrendingUp,
    value: "15+",
    title: "Years in Packaging",
    subtitle: "Experience you can rely on",
  },
  {
    icon: Users,
    value: "6,149+",
    title: "Customers Supported",
    subtitle: "Across industries",
  },
  {
    icon: Building2,
    value: "11+",
    title: "Warehouses Across India",
    subtitle: "Strategic locations",
  },
  {
    icon: Settings2,
    value: "9",
    title: "Industries Served",
    subtitle: "Diverse, Dynamic, Growing.",
  },
];

const INDUSTRIES_LIST = [
  {
    name: "Automotive",
    note: "Component protection across OEM and tier-supplier lines.",
    image: indAutomotive,
    href: "/products?industry=automotive",
  },
  {
    name: "Engineering",
    note: "Precision parts that travel with zero tolerance for damage.",
    image: indEngineering,
    href: "/products?industry=engineering",
  },
  {
    name: "Industrial Manufacturing",
    note: "Heavy loads, bulk handling and repeat circulation.",
    image: indManufacturing,
    href: "/products?industry=manufacturing",
  },
  {
    name: "FMCG",
    note: "High-velocity, cost-sensitive packaging runs.",
    image: indFmcg,
    href: "/products?industry=fmcg",
  },
  {
    name: "Electronics",
    note: "ESD-safe, moisture-controlled protective packs.",
    image: indElectronics,
    href: "/products?industry=electronics",
  },
  {
    name: "Consumer Products",
    note: "Retail-ready formats with clean finishing.",
    image: indConsumer,
    href: "/products?industry=consumer",
  },
  {
    name: "Agriculture",
    note: "Rugged storage built for field and weather exposure.",
    image: indAgriculture,
    href: "/products?industry=agriculture",
  },
  {
    name: "E-commerce / Quick Commerce",
    note: "Right-sized cartons for fast fulfillment.",
    image: indEcommerce,
    href: "/products?industry=ecommerce",
  },
  {
    name: "Other industries",
    note: "Tell us what you ship — we engineer around it.",
    image: indOther,
    href: "/products",
  },
];

function ClientsPage() {
  return (
    <SiteLayout>
      {/* 1. Hero Section: Full Bleed Diagonal Facet Layout */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-28 text-brand-blue-dark border-b border-slate-100">

        {/* Right Angled Warehouse Hero Visual (Spanning Desktop Right Half) */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-full lg:w-[54%] xl:w-[52%] hidden lg:block overflow-hidden z-0"
          aria-hidden="true"
        >
          {/* Red Angled Facet Border Accent */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#D9232A] via-[#b81d15] to-[#800f0a]"
            style={{
              clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* Warehouse Image with Diagonal Polygon Clip */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(16.5% 0%, 100% 0%, 100% 100%, 2.5% 100%)",
            }}
          >
            <img
              src={heroWarehouse}
              alt="VEVRA Warehouse Supply Chain Logistics"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Subtle soft gradient over image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 min-h-[460px] lg:min-h-[500px]">

            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 z-10 py-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.26em] text-[#D9232A]">
                  CLIENTS
                </span>
              </div>

              <h1 className="mt-3.5 text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-black tracking-tight text-brand-blue-dark leading-[1.08]">
                Trusted where
                <br />
                packaging
                <br />
                <span className="text-[#D9232A]">cannot fail.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-medium">
                VEVRA works with businesses that need packaging to protect products, support operations and keep supply chains moving.
              </p>

              {/* 2 CTA Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
                <RfqButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23] hover:shadow-xl">
                  Generate Quick RFQ <ArrowRight className="h-4 w-4" />
                </RfqButton>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D9232A] bg-transparent px-6 py-3 text-sm font-bold text-[#D9232A] transition-all hover:bg-rose-50"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 3 Horizontal Badges */}
              <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Long-term<br />Partnerships
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Reliable<br />Packaging
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue-dark leading-tight">
                    Growing<br />Together
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 xl:col-span-6 relative h-full flex flex-col justify-between min-h-[360px] lg:min-h-[480px]">
              {/* Mobile Only: Inline Rounded Image */}
              <div className="lg:hidden relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/90 aspect-[16/10] mb-4">
                <img
                  src={heroWarehouse}
                  alt="VEVRA Packaging Warehouse and Supply Chain Logistics"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Top Right Floating Dark Badge */}
              <div className="self-end rounded-2xl bg-[#0B1930]/95 backdrop-blur-md p-4 sm:p-5 border border-white/10 text-white shadow-2xl max-w-[220px] sm:max-w-[240px] z-20">
                <span className="font-['Dancing_Script',cursive] text-xl sm:text-2xl font-bold text-white block leading-tight">
                  Packaging People Progress
                </span>
                <span className="h-0.5 w-8 bg-[#D9232A] block my-2 rounded-full" />
                <p className="text-[11px] sm:text-xs font-medium text-white/80 leading-snug">
                  Solutions that move industries forward.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Floating Proof Stats Bar */}
      <div className="relative z-20 -mt-8 sm:-mt-10 lg:-mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-8 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {PROOF_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="p-3 sm:p-4 text-center group"
                >
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100 mb-2.5 group-hover:bg-[#D9232A] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-black text-brand-blue-dark leading-tight">
                    {stat.title}
                  </div>
                  <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                    {stat.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Industries Section */}
      <section className="bg-slate-50/50 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  INDUSTRIES
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                Built for how <span className="text-[#D9232A]">your industry ships.</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                Every sector has its own failure points — vibration, moisture, stacking load, last-mile handling. We design around yours.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-rose-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#D9232A] shadow-sm hover:bg-rose-50 transition-colors"
              >
                Explore All Industries <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_LIST.map((ind) => (
              <Link
                key={ind.name}
                to={ind.href}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-2 sm:p-2.5 pr-3 sm:pr-4 transition-all duration-300 hover:bg-slate-100/60 hover:-translate-y-0.5"
              >
                <div className="relative h-18 w-18 sm:h-20 sm:w-20 lg:h-22 lg:w-22 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5">
                  <h3 className="text-sm sm:text-base font-black text-brand-blue-dark group-hover:text-[#D9232A] transition-colors leading-tight">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium leading-snug line-clamp-2">
                    {ind.note}
                  </p>
                </div>

                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors duration-300 group-hover:border-[#0B1930] group-hover:bg-[#0B1930] group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Clients Section: Trusted by Industry Leaders */}
      <TrustedIndustryLeadersSection showBackground={false} />

      {/* 5. Customer Success Section: Case Study */}
      <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  CUSTOMER SUCCESS
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                How we solve it, in practice.
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                Every story follows one format: Industry → Customer → Challenge → VEVRA solution → Outcome. Named stories and figures are published only where customer approval is available.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-rose-300 bg-white px-4 py-2.5 text-xs font-bold text-[#D9232A] shadow-sm hover:bg-rose-50 transition-colors"
            >
              View All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-rose-50 text-[#D9232A] border border-rose-100 px-3 py-1 text-xs font-black uppercase tracking-wider">
                  AUTOMOTIVE
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-black text-brand-blue-dark">
                  Export component line
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  Damaged edges on machined housings during multi-leg export transit were driving return rates and rework up.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-xs font-black uppercase tracking-wider text-brand-blue-dark">
                    VEVRA SOLUTION
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    Redesigned inserts with reinforced corner locks and vibration-tested channeling, validated through transit trials before rollout.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#D9232A] hover:underline"
                >
                  See how we document customer success <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 relative min-h-[260px] lg:min-h-[auto] overflow-hidden bg-slate-100">
              <img
                src={caseStudyBox}
                alt="VEVRA Packaging Automated Conveyor Testing"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-3 bg-[#0B1930] p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A] text-white">
                    <ArrowDown className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">Lower</h4>
                    <p className="text-xs text-white/70 font-medium leading-snug">
                      Transit damage and rework
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A] text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">Faster</h4>
                    <p className="text-xs text-white/70 font-medium leading-snug">
                      Design to validated rollout
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A] text-white">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">Measured</h4>
                    <p className="text-xs text-white/70 font-medium leading-snug">
                      Figures are shared once the customer approves publication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-white/50 font-medium">
                Certified Transit Testing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Let's Build Together Banner */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-slate-900 via-[#0B1930] to-slate-900 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 z-10">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  LET&apos;S BUILD TOGETHER
                </span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
                Tell us what packaging problem
                <br />
                you are solving.
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Share your product, process and destination — we will come back with an engineered packaging response.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <RfqButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23] hover:shadow-xl">
                  Generate Quick RFQ <ArrowRight className="h-4 w-4" />
                </RfqButton>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/50"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-full min-h-[340px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden">
              <img
                src={ctaHandshake}
                alt="Stronger Supply Chains Together - Partnership Handshake"
                className="w-full h-full object-cover object-center scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1930] via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 right-6 rounded-2xl bg-[#0B1930]/90 backdrop-blur-md p-4 border border-white/10 text-white max-w-[200px]">
                <span className="h-0.5 w-6 bg-[#D9232A] block mb-2 rounded-full" />
                <p className="text-xs font-black uppercase tracking-wider text-white leading-tight">
                  STRONGER
                  <br />
                  SUPPLY CHAINS
                  <br />
                  TOGETHER
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
