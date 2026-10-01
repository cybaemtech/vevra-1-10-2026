import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Factory, Globe2, Package, Settings, Shield } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { type Segment } from "@/lib/site-content";
import { PRODUCT_IMAGES } from "@/lib/site-images";

interface GenericProductPageProps {
  product: Segment;
}

function formatProductTitle(name: string) {
  if (!name) return { main: "Product", accent: "Solutions" };
  if (name.includes("Packaging")) {
    const parts = name.split("Packaging");
    return {
      main: parts[0].trim(),
      accent: "Packaging",
    };
  }
  const words = name.split(" ");
  if (words.length > 1) {
    return {
      main: words.slice(0, -1).join(" "),
      accent: words[words.length - 1],
    };
  }
  return {
    main: name,
    accent: "Solutions",
  };
}

export function GenericProductPage({ product }: GenericProductPageProps) {
  const titleFormatted = formatProductTitle(product?.name || "Product Solutions");
  const productImage = (product?.slug && PRODUCT_IMAGES[product.slug]) || PRODUCT_IMAGES["corrugated"];
  const points = product?.points || [];
  const problemPoints = points.slice(0, 3);
  const applicationPoints = points.length > 3 ? points.slice(3, 6) : points;

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-rose-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={productImage}
            alt={`${product.name} Solutions by VEVRA`}
            className="w-full h-full object-cover object-left"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="max-w-[660px] z-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>PACKAGING SOLUTIONS</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                {titleFormatted.main} <br />
                <span className="text-brand">{titleFormatted.accent}</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                {product?.intro || product?.short || "Engineered packaging solutions tailored for industrial handling, protection and circulation."}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="rounded-full bg-brand px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>GENERATE QUICK RFQ</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-slate-300 bg-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-brand-blue-dark transition-all duration-300 hover:border-brand hover:text-brand hover:scale-105 inline-flex items-center gap-2.5"
                >
                  <span>TALK TO US</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Shield className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Strong &amp; Reliable</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Heavy-duty product protection</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Settings className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Custom Fitment</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Engineered to exact dimensions</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand">
                    <Globe2 className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-brand-blue-dark block">Export Ready</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">Built for global supply chains</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={productImage}
                  alt={`${product.name} by VEVRA`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="mt-auto rounded-2xl bg-[#081830]/95 border border-white/15 p-4 sm:p-5 backdrop-blur-md text-white shadow-2xl w-full max-w-[280px] space-y-2.5 z-10 select-none">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>High Durability &amp; Safety</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom Sized &amp; Tailored</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Cost Efficient Circulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CAPABILITIES & APPLICATIONS */}
      <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-200/60">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm">
                  <Package className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark">
                  What problem does it solve?
                </h3>
              </div>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                A packaging format selected around product protection, handling, storage, transit and the total cost of the packaging ecosystem.
              </p>

              <div className="mt-4 space-y-2.5">
                {problemPoints.map((pt) => (
                  <div
                    key={pt}
                    className="group flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-brand/50 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                      {pt}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-brand shadow-sm">
                  <Settings className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-brand-blue-dark">
                  Where is it used?
                </h3>
              </div>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                Across manufacturing, industrial, automotive, consumer and export supply chains, with customization available for the application.
              </p>

              <div className="mt-4 space-y-2.5">
                {applicationPoints.map((pt) => (
                  <div
                    key={pt}
                    className="group flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-brand/50 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand transition-colors">
                      {pt}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-r from-slate-50 via-rose-50/40 to-slate-100 p-8 sm:p-10 lg:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative max-w-[680px] z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-blue-dark">
                Looking for a Custom {product?.name || "Packaging"} Solution?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Let's discuss your component, volume and supply chain requirements.
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
                <span>Talk to Our Experts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
