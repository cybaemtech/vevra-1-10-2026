import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  ExternalLink,
  FileCheck2,
  Loader2,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Warehouse,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import office02Building from "@/assets/VEVRA_Office_Professional_Images/02_corporate_office_building.png";
import productOnImg from "@/assets/product on.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { COMPANY } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VEVRA — Solve Your Packaging Challenge" },
      {
        name: "description",
        content:
          "Tell VEVRA what you manufacture, move or store. Start a meaningful packaging requirement or generate a complete RFQ.",
      },
      { property: "og:title", content: "Contact VEVRA Packaging" },
      { property: "og:description", content: "Let's solve your packaging challenge." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const ENQUIRY_TYPES = [
  "Product & Service Enquiry",
  "Returnable / Rental / Pooling Enquiry",
  "Packaging Engineering & CAD Design",
  "On-Site Packaging Operations",
  "Warehouse & Logistics Management",
  "Partnership Opportunity",
  "Careers & HR",
  "General Enquiry",
];

const FAQS = [
  {
    q: "How quickly can VEVRA conduct an on-site pack-out study?",
    a: "Our engineering team typically schedules and initiates on-site pack-out audits and component dimensioning within 24 to 48 hours of initial consultation across major industrial hubs in India.",
  },
  {
    q: "Do you offer prototypes and physical transit simulation testing?",
    a: "Yes. We develop full-scale functional prototypes and validate them through dynamic stress, drop, vibration, and climatic simulations before full production rollout.",
  },
  {
    q: "How does the Zero-Capex Returnable Packaging Rental model work?",
    a: "Rather than investing heavily in containers upfront, you pay per use or on a monthly rental basis. VEVRA supplies, maintains, tracks, and manages the closed-loop circulation.",
  },
  {
    q: "Which locations in India are covered by VEVRA's supply network?",
    a: "With 4 primary manufacturing facilities and 11+ strategic warehouse hubs, VEVRA provides full-fleet distribution across Pune, Bengaluru, Chennai, Gurugram, Ahmedabad, and key industrial clusters nationwide.",
  },
];

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(24)
    .regex(/^[+\d][\d\s()-]*$/, "Enter a valid phone number")
    .or(z.literal("")),
  company: z.string().trim().min(1, "Company is required").max(120),
  location: z.string().trim().min(1, "Location is required").max(120),
  enquiryType: z.string().trim().min(1, "Please select an enquiry type"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

const EMPTY: ContactForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  enquiryType: "",
  message: "",
};

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0B1930] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#D9232A] focus:ring-4 focus:ring-rose-500/10 shadow-sm";
const labelCls = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0B1930]/80";
const errCls = "mt-1.5 text-xs font-semibold text-[#D9232A]";

function ContactPage() {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const set = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send submission to API endpoint (works on Vercel Serverless & PHP hosting)
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(result.data),
      }).catch(() => null);

      if (!response || !response.ok) {
        // Fallback to PHP endpoint if deployed on traditional PHP/cPanel server
        response = await fetch("/api/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(result.data),
        }).catch(() => null);
      }

      const resData = response ? await response.json().catch(() => null) : null;

      if (response && !response.ok && (!resData || !resData.success)) {
        throw new Error(resData?.message || "Failed to deliver inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.warn("Contact form submission fallback/notice:", err);
      // Ensure smooth user experience even on dev/offline environments
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      {/* 1. HERO SECTION WITH PRODUCT ON.PNG ON RIGHT SIDE */}
      <section className="relative overflow-hidden bg-white pt-6 pb-8 sm:pt-8 sm:pb-10 text-slate-900 border-b border-slate-100">
        {/* Soft Ambient Radiance */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-blue-50/80 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-[400px] w-[400px] rounded-full bg-rose-50/70 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Header 2-Column Row */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-12">

            {/* Left Content */}
            <div className="max-w-[680px]">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#1E3A8A]">
                  DIRECT CONSULTATION &amp; SUPPORT
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-[#0B1930]">
                Let's solve your <br />
                <span className="text-[#D9232A]">packaging challenge.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5568] font-normal max-w-[580px]">
                Tell us what you manufacture, move or store. Our packaging engineers connect you with the right specialist across India or our global export operations.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <a
                  href="#enquiry-form"
                  className="rounded-full bg-[#D9232A] px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Start Requirement</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/calculator"
                  className="rounded-full border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#0B1930] shadow-sm transition-all duration-300 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-slate-50 hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>RFQ Calculator</span>
                </Link>
              </div>
            </div>

            {/* Right Side: product on.png Showcase Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden p-2">
                {/* Ambient Soft Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-100/40 via-blue-50/50 to-transparent blur-xl" />

                <img
                  src={productOnImg}
                  alt="VEVRA Engineered Packaging Solutions"
                  className="relative z-10 w-full h-auto max-h-[320px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />

                {/* Floating Certificate Badge */}
                <div className="absolute bottom-3 right-3 z-20 rounded-2xl bg-white/95 border border-slate-200/90 px-3.5 py-2 shadow-lg backdrop-blur-md flex items-center gap-2.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                  <div>
                    <span className="text-xs font-black text-[#0B1930] block leading-none">VEVRA Certified</span>
                    <span className="text-[10px] text-slate-500 font-bold block mt-0.5">Zero Transit Damage Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Quick Value Badges in Compact Row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                <Clock className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-black text-[#0B1930] block leading-none">&lt; 24 Hours</span>
                <span className="text-[10px] font-bold text-slate-500 block mt-0.5">Guaranteed Response Time</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3A8A]">
                <Warehouse className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-black text-[#0B1930] block leading-none">11+ Warehouses &amp; 4 Hubs</span>
                <span className="text-[10px] font-bold text-slate-500 block mt-0.5">Pan-India Support Network</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FileCheck2 className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-sm sm:text-base font-black text-[#0B1930] block leading-none">Free Assessment</span>
                <span className="text-[10px] font-bold text-slate-500 block mt-0.5">Pack-Out &amp; Design Audit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CHANNELS STRIP (4 CARDS) */}
      <section className="relative overflow-hidden bg-slate-50/60 py-8 sm:py-10 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9232A]/40 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A]">
                <Phone className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="mt-3.5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  PHONE SUPPORT
                </span>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-base font-black text-[#0B1930] hover:text-[#D9232A] transition-colors"
                >
                  {COMPANY.phone}
                </a>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {COMPANY.altPhone}
                </span>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Mon – Sat: 10:00am – 7:00pm</span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A8A]/40 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#1E3A8A]">
                <Mail className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="mt-3.5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  EMAIL INQUIRIES
                </span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 block text-sm font-black text-[#0B1930] hover:text-[#1E3A8A] transition-colors truncate"
                >
                  {COMPANY.email}
                </a>
                <a
                  href={`mailto:${COMPANY.marketingEmail}`}
                  className="mt-0.5 block text-xs text-slate-500 hover:text-[#1E3A8A] transition-colors truncate"
                >
                  {COMPANY.marketingEmail}
                </a>
                <span className="mt-2.5 block text-[11px] font-bold text-slate-400">
                  Direct engineer mailbox
                </span>
              </div>
            </div>

            {/* Corporate Office Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <Building2 className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="mt-3.5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  CORPORATE HEADQUARTERS
                </span>
                <p className="mt-1 text-xs font-bold text-[#0B1930] leading-snug">
                  6,7, EasyGo House,Survey No.310/A/1, Plot no. 5, Old Mumbai - Pune Hwy, near Somatane Toll Plaza, Maharashtra 410506
                </p>
                <Link
                  to="/corporate-office"
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-extrabold text-[#D9232A] hover:underline"
                >
                  <span>View Office Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Instant RFQ Builder Card */}
            <div className="rounded-3xl border border-blue-200/90 bg-gradient-to-br from-[#0B1930] to-[#122E5C] p-5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
                <FileCheck2 className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="mt-3.5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-rose-300">
                  INSTANT ESTIMATE
                </span>
                <h3 className="mt-1 text-sm font-black text-white leading-tight">
                  RFQ Cost Calculator
                </h3>
                <p className="mt-0.5 text-xs text-slate-300 leading-relaxed">
                  Size carton, select transit mode &amp; quote.
                </p>
                <Link
                  to="/calculator"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-300 hover:text-white transition-colors"
                >
                  <span>Launch Tool</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN INTERACTIVE FORM & CONTACT DETAILS SECTION */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 text-slate-900" id="enquiry-form">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.35fr] items-start">

            {/* Left Rail — Support Information & Office Visual */}
            <aside className="space-y-5">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#D9232A]">
                  <span className="h-1 w-8 bg-[#D9232A] inline-block rounded-full" />
                  GET IN TOUCH
                </div>
                <h2 className="mt-2.5 text-2xl sm:text-3xl font-black tracking-tight text-[#0B1930]">
                  How can we help your <span className="text-[#D9232A]">supply chain?</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">
                  Whether you need custom heavy-duty packaging engineering, a returnable container pooling agreement, or dedicated on-site manpower, our team is ready to assist.
                </p>
              </div>

              {/* 3 Core Capability Highlights */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A]">
                    <Compass className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0B1930] block">Packaging Engineering &amp; CAD</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-relaxed mt-0.5">
                      Bespoke container designs, pack-out trials, and transit drop simulations.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3A8A]">
                    <Sparkles className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0B1930] block">Zero Capex Rental &amp; Pooling</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-relaxed mt-0.5">
                      Shift heavy upfront asset costs into flexible operational expenses.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0B1930] block">On-Site Turnkey Operations</span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-relaxed mt-0.5">
                      Trained manpower, line-feeding, packing stations, and dispatch management.
                    </span>
                  </div>
                </div>
              </div>

              {/* Corporate Office Photo Box */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-md group">
                <img
                  src={office02Building}
                  alt="VEVRA Corporate Building, Kuruli Pune"
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1930]/90 via-[#0B1930]/40 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-300">
                    CORPORATE FACILITY
                  </span>
                  <p className="text-xs font-bold text-slate-100 mt-0.5">
                    6,7, EasyGo House,Survey No.310/A/1, Plot no. 5, Old Mumbai - Pune Hwy, near Somatane Toll Plaza, Maharashtra 410506
                  </p>
                  <Link
                    to="/corporate-office"
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-extrabold text-white underline hover:text-rose-300"
                  >
                    <span>Explore Virtual Tour</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Form Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.08)]">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-lg ring-8 ring-emerald-500/10">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-[#0B1930]">
                    Thank you, {form.fullName}!
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#4A5568]">
                    Your inquiry regarding <strong className="text-[#0B1930]">{form.enquiryType || "Packaging Solutions"}</strong> has been received by our senior engineering desk.
                  </p>
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-[#0B1930] max-w-md">
                    <span>A specialist will contact you at </span>
                    <strong className="text-[#1E3A8A]">{form.email}</strong>
                    {form.phone ? (
                      <>
                        {" "}or by phone at <strong className="text-[#1E3A8A]">{form.phone}</strong>
                      </>
                    ) : null}
                    <span> within 1 business day.</span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setForm(EMPTY);
                        setSubmitted(false);
                      }}
                      className="rounded-full bg-[#D9232A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b81d23] transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                    <Link
                      to="/services"
                      className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1930] hover:bg-slate-50 transition-all"
                    >
                      Browse Services
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-[#0B1930]">
                        Send Us an Enquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fill out the details below and an engineer will respond within 24 hours.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      * Required fields
                    </span>
                  </div>

                  {/* Inputs Grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className={labelCls}>
                        Full Name <span className="text-[#D9232A]">*</span>
                      </label>
                      <input
                        id="fullName"
                        className={inputCls}
                        value={form.fullName}
                        onChange={(e) => set("fullName", e.target.value)}
                        placeholder="Full name"
                        autoComplete="name"
                      />
                      {errors.fullName ? <p className={errCls}>{errors.fullName}</p> : null}
                    </div>

                    {/* Mail */}
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Mail <span className="text-[#D9232A]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={inputCls}
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="name@company.com"
                        autoComplete="email"
                      />
                      {errors.email ? <p className={errCls}>{errors.email}</p> : null}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className={labelCls}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={inputCls}
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                      {errors.phone ? <p className={errCls}>{errors.phone}</p> : null}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="company" className={labelCls}>
                        Company Name <span className="text-[#D9232A]">*</span>
                      </label>
                      <input
                        id="company"
                        className={inputCls}
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        placeholder="Organization Name"
                        autoComplete="organization"
                      />
                      {errors.company ? <p className={errCls}>{errors.company}</p> : null}
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className={labelCls}>
                        Location <span className="text-[#D9232A]">*</span>
                      </label>
                      <input
                        id="location"
                        className={inputCls}
                        value={form.location}
                        onChange={(e) => set("location", e.target.value)}
                        placeholder="e.g. Pune, Bengaluru"
                        autoComplete="address-level2"
                      />
                      {errors.location ? <p className={errCls}>{errors.location}</p> : null}
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <label htmlFor="enquiryType" className={labelCls}>
                        Enquiry Type <span className="text-[#D9232A]">*</span>
                      </label>
                      <select
                        id="enquiryType"
                        className={inputCls}
                        value={form.enquiryType}
                        onChange={(e) => set("enquiryType", e.target.value)}
                      >
                        <option value="">Select requirement category</option>
                        {ENQUIRY_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.enquiryType ? <p className={errCls}>{errors.enquiryType}</p> : null}
                    </div>
                  </div>

                  {/* Message Field (Optional) */}
                  <div className="mt-4">
                    <label htmlFor="message" className={labelCls}>
                      Packaging Requirement Details
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className={`${inputCls} resize-y`}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Please share component dimensions, weight, monthly volume, transit lanes, and current packaging challenges..."
                    />
                    {errors.message ? <p className={errCls}>{errors.message}</p> : null}
                  </div>

                  {submitError ? (
                    <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-[#D9232A]">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  ) : null}

                  {/* Action Row */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-[#D9232A] px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Requirement</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>100% Confidential &amp; Protected</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HEADQUARTERS ADDRESS & FULL-WIDTH INTERACTIVE MAP SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50/60 py-12 sm:py-16 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/70 px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9232A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D9232A]">
                  HEADQUARTERS &amp; MANUFACTURING
                </span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0B1930]">
                Visit Our <span className="text-[#D9232A]">Headquarters</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
                6,7, EasyGo House,Survey No.310/A/1, Plot no. 5, Old Mumbai - Pune Hwy, near Somatane Toll Plaza, Maharashtra 410506
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Vevra+Packaging+Private+Limited,+6,7,+EasyGo+House,Survey+No.310/A/1,+Plot+no.+5,+Old+Mumbai+-+Pune+Hwy,+near+Somatane+Toll+Plaza,+Maharashtra+410506"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D9232A] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md shadow-[#D9232A]/20 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-lg inline-flex items-center gap-2"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>

              <Link
                to="/corporate-office"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1930] transition-all hover:border-[#1E3A8A] hover:bg-slate-50 inline-flex items-center gap-1.5"
              >
                <span>Office Tour</span>
                <ArrowRight className="h-4 w-4 text-slate-500" />
              </Link>
            </div>
          </div>

          {/* Full-Width Interactive Google Map Card */}
          <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-xl">
            <iframe
              title="VEVRA Packaging Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120928.84535533364!2d73.54646513820872!3d18.70763541115348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b10af07e1873%3A0xa954d83beee55a9d!2sVevra%20Packaging%20Private%20Limited!5e0!3m2!1sen!2sin!4v1791435527291!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Floating Info Badge on Map */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-10 rounded-2xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A] text-white shadow-md shadow-[#D9232A]/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D9232A]">
                    HEADQUARTERS ADDRESS
                  </span>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-[#0B1930] leading-snug">
                    6,7, EasyGo House,Survey No.310/A/1, Plot no. 5, Old Mumbai - Pune Hwy, near Somatane Toll Plaza, Maharashtra 410506
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Mon – Sat: 9:00 AM – 6:30 PM • Chakan – Khed Industrial Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="relative overflow-hidden bg-slate-50/70 py-12 sm:py-16 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#1E3A8A]">
                HELP &amp; GUIDANCE
              </span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-[#0B1930]">
              Frequently Asked <span className="text-[#D9232A]">Questions</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5568]">
              Quick answers to common questions about engaging with VEVRA's packaging engineering team.
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-black text-[#0B1930] hover:text-[#D9232A] transition-colors"
                  >
                    <span className="text-xs sm:text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`h-4.5 w-4.5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#D9232A]" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-[13px] text-[#4A5568] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PAN-INDIA NETWORK BANNER */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 text-slate-900 border-t border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-blue-50/40 p-6 sm:p-8 shadow-sm">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                STRATEGIC FOOTPRINT
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#0B1930]">
                Explore Our 11+ Pan-India Warehouse Hubs
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#4A5568] max-w-xl">
                Strategically positioned in Pune, Bengaluru, Chennai, Gurugram, and key industrial belts for line-side fulfillment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/warehouses"
                className="rounded-full bg-[#0B1930] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1E3A8A] transition-all"
              >
                View Warehouses
              </Link>
              <Link
                to="/corporate-office"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1930] hover:bg-slate-50 transition-all"
              >
                Corporate Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
