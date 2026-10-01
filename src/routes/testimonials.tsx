import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Coins,
  Globe2,
  Layers,
  Quote,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import returnableCratesHero from "@/assets/capabilities/service-returnable-crates.jpg";
import palletBoxImage from "@/assets/clients-page/case-study-box.png";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Success — Proof of Packaging Outcomes | VEVRA" },
      {
        name: "description",
        content:
          "Real businesses. Real results. Hear from customers who reduced packaging costs, improved efficiency and transformed operations with VEVRA Packaging.",
      },
      { property: "og:title", content: "VEVRA Customer Success" },
      { property: "og:description", content: "Customer success is our measure of success." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

/* ---------- Testimonials Data ---------- */
const TESTIMONIALS_DATA = [
  {
    id: 1,
    initials: "MK",
    name: "Mahesh Kamble",
    role: "PARTNER",
    company: "Manufacturing Partner",
    quote:
      "Choosing Vevra Packaging was a game-changer for our bottom line. They tailored solutions that slashed our packaging costs, delivering results without the need for extra investment. Exceptional service!",
    rating: 5,
  },
  {
    id: 2,
    initials: "NS",
    name: "Nikita Sawant",
    role: "SUPPLY CHAIN HEAD",
    company: "Automotive Tier-1",
    quote:
      "Vevra Packaging's cost-saving strategies transformed our packaging operations. Their expertise and dedication to efficiency are unmatched across the industry.",
    rating: 5,
  },
  {
    id: 3,
    initials: "HR",
    name: "Hasib Rahman",
    role: "OPERATIONS DIRECTOR",
    company: "Engineering Components",
    quote:
      "Thanks to Vevra Packaging, we've significantly cut down on our packaging expenses. Their innovative approach saved us money without requiring additional investments. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    initials: "AJ",
    name: "Ashish Jadhav",
    role: "LOGISTICS MANAGER",
    company: "Industrial Goods",
    quote:
      "Their solutions are ingenious and practical, making them an invaluable partner for our closed-loop transit packaging requirements.",
    rating: 5,
  },
  {
    id: 5,
    initials: "SP",
    name: "Sanjay Powar",
    role: "PLANT HEAD",
    company: "Precision Engineering",
    quote:
      "We are happy to say that we are seeing very good delivery performance and service both from returnable packaging & logistics stand as we have not heard a single complaint from our customer till date.",
    rating: 5,
  },
];

/* ---------- Key Highlights Checklist ---------- */
const VALUE_HIGHLIGHTS = [
  { label: "Reliable Quality", icon: ShieldCheck },
  { label: "On-Time Delivery", icon: Clock },
  { label: "Cost Efficient", icon: Coins },
  { label: "Pan-India Support", icon: Globe2 },
];

function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play next testimonial every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS_DATA.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS_DATA.length - 1 ? prev + 1 : 0));
  };

  const current = TESTIMONIALS_DATA[currentIndex]!;
  const prevTestimonial =
    TESTIMONIALS_DATA[(currentIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length]!;
  const nextTestimonial = TESTIMONIALS_DATA[(currentIndex + 1) % TESTIMONIALS_DATA.length]!;

  return (
    <SiteLayout>
      {/* 1. Hero Section: Full Bleed Diagonal Facet Layout */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-28 text-brand-blue-dark border-b border-slate-100">
        
        {/* Right Angled Port / Warehouse Visual */}
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
          {/* Crate Visual with Diagonal Polygon Clip */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: "polygon(16.5% 0%, 100% 0%, 100% 100%, 2.5% 100%)",
            }}
          >
            <img
              src={returnableCratesHero}
              alt="VEVRA Packaging Customer Success Returnable Crates"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Soft overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
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
                  TESTIMONIALS
                </span>
              </div>

              <h1 className="mt-3.5 text-4xl sm:text-5xl lg:text-[3.3rem] xl:text-[3.8rem] font-black tracking-tight text-brand-blue-dark leading-[1.1]">
                Customer success
                <br />
                is our measure
                <br />
                of <span className="text-[#D9232A]">success.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-brand-blue-dark/80 font-medium">
                Real businesses. Real results. See how VEVRA Packaging helps companies reduce costs, improve efficiency and simplify their packaging operations.
              </p>

              {/* 2 CTA Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23] hover:shadow-xl"
                >
                  Generate Quick RFQ <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D9232A] bg-transparent px-6 py-3 text-sm font-bold text-[#D9232A] transition-all hover:bg-rose-50"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 3 Horizontal Stat Badges */}
              <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-black text-brand-blue-dark block leading-none">
                      6,149+
                    </span>
                    <span className="text-[11px] font-bold text-brand-blue-dark/70 leading-tight block mt-0.5">
                      Customers Served
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-black text-brand-blue-dark block leading-none">
                      15+
                    </span>
                    <span className="text-[11px] font-bold text-brand-blue-dark/70 leading-tight block mt-0.5">
                      Years of Experience
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-black text-brand-blue-dark block leading-none">
                      11+
                    </span>
                    <span className="text-[11px] font-bold text-brand-blue-dark/70 leading-tight block mt-0.5">
                      Warehouses Across India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Badges over the Angled Visual */}
            <div className="lg:col-span-6 xl:col-span-6 relative h-full flex flex-col justify-between min-h-[360px] lg:min-h-[480px]">
              
              {/* Mobile Only: Inline Rounded Image */}
              <div className="lg:hidden relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-200/90 aspect-[16/10] mb-4">
                <img
                  src={returnableCratesHero}
                  alt="VEVRA Packaging Customer Success Returnable Crates"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Top Right Floating Handwritten Script Card */}
              <div className="self-end rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 shadow-2xl border border-white/60 z-20 rotate-1 max-w-[210px] text-right">
                <p className="font-['Dancing_Script',cursive] text-2xl font-black text-brand-blue-dark leading-tight">
                  Packaging Success Together
                </p>
                <div className="h-0.5 w-16 bg-[#D9232A] ml-auto mt-1 rounded-full" />
              </div>

              {/* Bottom Floating Pill Badge */}
              <Link
                to="/clients"
                className="self-end rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-2xl border border-slate-200/80 text-brand-blue-dark z-20 mt-auto flex items-center gap-3 transition-all hover:bg-white hover:scale-105"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#D9232A]">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-black text-brand-blue-dark block leading-tight">
                    Trusted by
                  </span>
                  <span className="text-xs font-black text-brand-blue-dark block">
                    Leading Industries
                  </span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-brand-blue-dark/50 ml-1">
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Customer Testimonials Section: Carousel with Peeking Adjacent Cards */}
      <section className="bg-slate-50/50 py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  CUSTOMER TESTIMONIALS
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-blue-dark tracking-tight">
                What our <span className="text-[#D9232A]">customers say</span>
              </h2>
            </div>

            {/* Right: Subtitle & Arrow Controls */}
            <div className="flex items-center gap-6">
              <p className="text-xs sm:text-sm font-medium text-brand-blue-dark/80 max-w-sm text-left md:text-right hidden sm:block">
                From global OEMs to growing businesses, our customers trust VEVRA for reliable packaging solutions.
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-blue-dark shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9232A] text-white shadow-md shadow-red-500/20 transition-all hover:bg-[#b81d23] cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Showcase Container with Peeking Left & Right Cards */}
          <div className="relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Peeking Card (Hidden on small screens) */}
              <div
                onClick={handlePrev}
                className="hidden lg:block lg:col-span-2 opacity-35 filter blur-[0.5px] scale-95 transition-all duration-500 cursor-pointer hover:opacity-50"
              >
                <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-sm">
                  <Quote className="h-6 w-6 text-rose-300" />
                  <p className="mt-3 text-xs text-brand-blue-dark/70 line-clamp-3 leading-relaxed">
                    “{prevTestimonial.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-brand-blue-dark">
                      {prevTestimonial.initials}
                    </div>
                    <span className="text-[11px] font-bold text-brand-blue-dark truncate">
                      {prevTestimonial.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Active Featured Testimonial Card (lg:col-span-8) */}
              <div className="lg:col-span-8 relative">
                <div className="relative rounded-3xl border-2 border-rose-100 bg-white p-7 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5 transition-all duration-500">
                  
                  {/* Left Red Accent Stripe */}
                  <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-[#D9232A] rounded-r-full" />

                  {/* Red Big Quote Icon */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A]">
                      <Quote className="h-6 w-6 sm:h-7 sm:w-7 fill-[#D9232A]" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-base sm:text-xl lg:text-2xl font-semibold text-brand-blue-dark leading-relaxed">
                      “{current.quote}”
                    </p>
                  </div>

                  {/* Author & Star Rating Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar Initials */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100 font-black text-sm text-brand-blue-dark shadow-sm">
                        {current.initials}
                      </div>
                      <div>
                        <h4 className="text-base font-black text-brand-blue-dark leading-tight">
                          {current.name}
                        </h4>
                        <p className="text-xs font-black uppercase tracking-wider text-brand-blue-dark/60 mt-0.5">
                          {current.role}
                        </p>
                      </div>
                    </div>

                    {/* 5 Red Stars */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#D9232A] text-[#D9232A]" />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Peeking Card (Hidden on small screens) */}
              <div
                onClick={handleNext}
                className="hidden lg:block lg:col-span-2 opacity-35 filter blur-[0.5px] scale-95 transition-all duration-500 cursor-pointer hover:opacity-50"
              >
                <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-sm">
                  <Quote className="h-6 w-6 text-rose-300" />
                  <p className="mt-3 text-xs text-brand-blue-dark/70 line-clamp-3 leading-relaxed">
                    “{nextTestimonial.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-brand-blue-dark">
                      {nextTestimonial.initials}
                    </div>
                    <span className="text-[11px] font-bold text-brand-blue-dark truncate">
                      {nextTestimonial.name}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Carousel Pagination Dots */}
            <div className="mt-8 flex justify-center items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#D9232A]"
                      : "w-2.5 bg-blue-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. Metrics Bar Section */}
      <section className="bg-white py-10 sm:py-14 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            {/* Metric 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue-dark leading-none">
                  6,149+
                </p>
                <p className="text-xs font-bold text-brand-blue-dark/70 mt-1">
                  Customers Served
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue-dark leading-none">
                  15+
                </p>
                <p className="text-xs font-bold text-brand-blue-dark/70 mt-1">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue-dark leading-none">
                  11+
                </p>
                <p className="text-xs font-bold text-brand-blue-dark/70 mt-1">
                  Warehouses Across India
                </p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue-dark leading-none">
                  9
                </p>
                <p className="text-xs font-bold text-brand-blue-dark/70 mt-1">
                  Industries Served
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom CTA Card: "Let's solve your packaging challenge." */}
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-rose-50/80 via-white to-rose-50/40 p-8 sm:p-12 lg:p-14 border border-rose-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Background Ambient Glows */}
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-rose-50 blur-2xl" />

            {/* Left Content (lg:col-span-5) */}
            <div className="lg:col-span-5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  READY TO WRITE YOUR SUCCESS STORY?
                </span>
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark leading-tight">
                Let&apos;s solve your
                <br />
                <span className="text-[#D9232A]">packaging challenge.</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm font-medium text-brand-blue-dark/80 leading-relaxed max-w-md">
                Get a tailored RFQ in minutes and discover how VEVRA can add value to your business.
              </p>

              <div className="mt-7">
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9232A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#b81d23] hover:shadow-xl"
                >
                  Generate Quick RFQ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Center Product Image (lg:col-span-4) */}
            <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
              <div className="relative w-[650px] max-w-[650px] rounded-2xl overflow-hidden drop-shadow-2xl">
                <img
                  src={palletBoxImage}
                  alt="VEVRA Packaging Pallet Boxes"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Value Checklist (lg:col-span-3) */}
            <div className="lg:col-span-3 relative z-10 flex flex-col gap-3.5">
              {VALUE_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 border border-rose-100/80 shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] border border-rose-100">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-blue-dark">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </SiteLayout>
  );
}
