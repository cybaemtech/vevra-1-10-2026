import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, type FormEvent, type ChangeEvent, type DragEvent } from "react";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Heart,
  Lock,
  Mail,
  TrendingUp,
  UploadCloud,
  Users,
  X,
  Lightbulb,
  Leaf,
  Play,
  Sparkles,
} from "lucide-react";

import careersHeroImg from "@/assets/CAREERS.png";
import pillarMountainImg from "@/assets/career/pillar-mountain.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { COMPANY } from "@/lib/site-content";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build Your Future With Us | VEVRA Packaging" },
      {
        name: "description",
        content:
          "At VEVRA, we believe great things happen when passionate people come together. Join our team shaping the future of packaging through innovation and sustainability.",
      },
      { property: "og:title", content: "Careers — Build Your Future With Us | VEVRA Packaging" },
      {
        property: "og:description",
        content:
          "Apply to join VEVRA Packaging. Submit your cover page and resume to take the next step in your career.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

const POSITIONS = [
  "Select a role",
  "Packaging Design & CAD Engineer",
  "Plant Operations & Quality Assurance",
  "Supply Chain & Warehouse Logistics",
  "Key Account Manager — Enterprise Packaging",
  "Sales & Business Development Executive",
  "Finance & Operations Executive",
  "General / Open Application",
];

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  position: string;
  coverPage: string;
  resumeFile: File | null;
}

const EMPTY_FORM: ApplicationForm = {
  name: "",
  email: "",
  phone: "",
  position: "",
  coverPage: "",
  resumeFile: null,
};

function CareersPage() {
  const [form, setForm] = useState<ApplicationForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    position?: string;
    coverPage?: string;
    resumeFile?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndSetFile(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedExtensions = ["pdf", "doc", "docx"];
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!allowedExtensions.includes(ext)) {
      setErrors((err) => ({
        ...err,
        resumeFile: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
      }));
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrors((err) => ({
        ...err,
        resumeFile: "File size exceeds 10MB limit",
      }));
      return;
    }
    setForm((f) => ({ ...f, resumeFile: file }));
    setErrors((err) => ({ ...err, resumeFile: undefined }));
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      phone?: string;
      position?: string;
      coverPage?: string;
      resumeFile?: string;
    } = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.position || form.position === "Select a role") {
      newErrors.position = "Please select a target role / department";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+\d][\d\s()-]{7,}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.coverPage.trim()) {
      newErrors.coverPage = "Cover page / letter is required";
    }

    if (!form.resumeFile) {
      newErrors.resumeFile = "Resume document is required (.pdf, .doc, .docx)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(`APP-VVR-${randomNum}`);
    }, 600);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmittedRef(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SiteLayout>
      <div className="relative min-h-screen bg-[#FDFDFE] text-[#062141] overflow-hidden">
        
        {/* =========================================================================
            TOP HERO SECTION: BREADCRUMBS & CAREERS HERO GRAPHIC
           ========================================================================= */}
        <section className="relative pt-6 sm:pt-8 pb-12 lg:pb-16 overflow-hidden">
          
          {/* Careers Hero Graphic on Right */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-full lg:w-[54vw] max-w-[850px] select-none hidden lg:block -z-0">
            <img
              src={careersHeroImg}
              alt="Careers at VEVRA Packaging"
              className="h-full w-full object-cover object-left-top"
            />
            {/* Smooth Edge Blend */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#FDFDFE] via-[#FDFDFE]/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FDFDFE] to-transparent" />
          </div>

          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}


            {/* Hero Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
              
              {/* Left Column: Tag, Headline, Subtitle, Buttons */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Tag */}
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[2.5px] bg-[#D9232A]" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#D9232A]">
                    CAREERS AT VEVRA
                  </span>
                </div>

                {/* Hero Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.9rem] font-black tracking-tight leading-[1.08] text-[#062141]">
                  Build Your <br />
                  <span className="text-[#D9232A]">Future</span> With Us
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
                  At VEVRA, we believe great things happen when passionate people come together. Join a team that values innovation, ideas and your growth — and help us shape a more sustainable tomorrow.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection("application-form")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Explore Opportunities →</span>
                  </button>

                  <Link
                    to="/life-at-vevra"
                    className="inline-flex items-center gap-3 text-sm font-bold text-[#062141] hover:text-[#D9232A] transition-colors group cursor-pointer"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-rose-100 text-[#D9232A] group-hover:scale-110 group-hover:bg-rose-50 transition-all">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </span>
                    <span>Watch Our Culture</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Spacer for Desktop / Mobile Image Display */}
              <div className="lg:col-span-6 lg:hidden mt-4">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={careersHeroImg}
                    alt="Careers at VEVRA"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 hidden lg:block" />

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHY JOIN VEVRA & APPLICATION FORM
           ========================================================================= */}
        <section id="application-form" className="relative py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Why Join VEVRA & 3 Stacked Values */}
              <div className="lg:col-span-5 space-y-7 pt-2">
                
                {/* Tag */}
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[2.5px] bg-[#D9232A]" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#D9232A]">
                    WHY JOIN VEVRA
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-black tracking-tight leading-[1.08] text-[#062141]">
                  Let's Grow <br />
                  <span className="text-[#D9232A]">Together</span>
                </h2>

                {/* Paragraph */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  At VEVRA, we believe in people, potential and progress. If you are passionate, curious and ready to make an impact — we would love to have you on our journey.
                </p>

                {/* 3 Vertically Stacked Value Highlights */}
                <div className="space-y-6 pt-1">
                  
                  {/* Item 1: Be Part of a Purpose */}
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rose-100 bg-rose-50 text-[#D9232A] shadow-sm transition-transform group-hover:scale-105">
                      <Users className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#062141]">
                        Be Part of a Purpose
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Contribute to a sustainable future
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Build Your Career */}
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rose-100 bg-rose-50 text-[#D9232A] shadow-sm transition-transform group-hover:scale-105">
                      <TrendingUp className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#062141]">
                        Build Your Career
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        A supportive and inclusive workplace
                      </p>
                    </div>
                  </div>

                  {/* Item 3: A Better Tomorrow */}
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rose-100 bg-rose-50 text-[#D9232A] shadow-sm transition-transform group-hover:scale-105">
                      <Heart className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#062141]">
                        A Better Tomorrow
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Small ideas. Big impact.
                      </p>
                    </div>
                  </div>

                </div>

         

              </div>

              {/* Right Column: Floating Career Application Card */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-100 bg-white/95 backdrop-blur-md p-6 sm:p-8 lg:p-9 shadow-2xl shadow-slate-200/60">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100 shadow-sm">
                        <Briefcase className="h-5 w-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#062141] leading-tight">
                          Career Application
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Take the first step. We'd love to know you better.
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1 text-[11px] font-semibold text-slate-700">
                      <Lock className="h-3.5 w-3.5 text-slate-500" />
                      <span>Strictly Confidential</span>
                    </div>
                  </div>

                  {submittedRef ? (
                    /* Success Confirmation State */
                    <div className="py-10 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm">
                        <CheckCircle2 className="h-10 w-10 stroke-[2.2]" />
                      </div>

                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                        Application Ref: <span className="font-mono text-[#062141]">{submittedRef}</span>
                      </span>

                      <h4 className="mt-3 text-2xl font-black text-[#062141]">
                        Application Submitted Successfully!
                      </h4>

                      <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <strong>{form.name}</strong>. Your cover page and resume for the <em>{form.position}</em> role have been registered.
                      </p>

                      <div className="mt-6 w-full max-w-md mx-auto rounded-2xl bg-blue-50/70 border border-blue-100 p-4 text-left">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#062141]">
                          <Clock className="h-4 w-4 text-[#D9232A]" />
                          <span>Review Timeframe: Within 48 Business Hours</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-600">
                          Our HR team will review your profile and reach out via email or phone for next steps.
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="rounded-xl bg-[#062141] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0B1930] transition-colors cursor-pointer"
                        >
                          Submit Another Application
                        </button>
                        <Link
                          to="/"
                          className="rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          Return Home
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* Active Form */
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                      
                      {/* Row 1: Full Name & Target Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1.5">
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => {
                              setForm((f) => ({ ...f, name: e.target.value }));
                              if (errors.name) setErrors((err) => ({ ...err, name: undefined }));
                            }}
                            placeholder="e.g. Ramesh Kulkarni"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#D9232A] focus:ring-4 focus:ring-rose-500/10 outline-none transition-all shadow-sm"
                          />
                          {errors.name && <p className="mt-1.5 text-xs font-semibold text-[#D9232A]">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1.5">
                            TARGET ROLE / DEPARTMENT *
                          </label>
                          <select
                            value={form.position}
                            onChange={(e) => {
                              setForm((f) => ({ ...f, position: e.target.value }));
                              if (errors.position) setErrors((err) => ({ ...err, position: undefined }));
                            }}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 sm:py-3 text-sm text-slate-900 focus:border-[#D9232A] focus:ring-4 focus:ring-rose-500/10 outline-none transition-all shadow-sm cursor-pointer"
                          >
                            {POSITIONS.map((pos) => (
                              <option key={pos} value={pos}>
                                {pos}
                              </option>
                            ))}
                          </select>
                          {errors.position && <p className="mt-1.5 text-xs font-semibold text-[#D9232A]">{errors.position}</p>}
                        </div>
                      </div>

                      {/* Row 2: Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1.5">
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => {
                              setForm((f) => ({ ...f, email: e.target.value }));
                              if (errors.email) setErrors((err) => ({ ...err, email: undefined }));
                            }}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#D9232A] focus:ring-4 focus:ring-rose-500/10 outline-none transition-all shadow-sm"
                          />
                          {errors.email && <p className="mt-1.5 text-xs font-semibold text-[#D9232A]">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1.5">
                            PHONE / MOBILE NUMBER *
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => {
                              setForm((f) => ({ ...f, phone: e.target.value }));
                              if (errors.phone) setErrors((err) => ({ ...err, phone: undefined }));
                            }}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#D9232A] focus:ring-4 focus:ring-rose-500/10 outline-none transition-all shadow-sm"
                          />
                          {errors.phone && <p className="mt-1.5 text-xs font-semibold text-[#D9232A]">{errors.phone}</p>}
                        </div>
                      </div>

                      {/* Row 3: Cover Page / Letter */}
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1.5">
                          COVER PAGE / COVER LETTER *
                        </label>
                        <textarea
                          rows={3}
                          value={form.coverPage}
                          maxLength={500}
                          onChange={(e) => {
                            setForm((f) => ({ ...f, coverPage: e.target.value }));
                            if (errors.coverPage) setErrors((err) => ({ ...err, coverPage: undefined }));
                          }}
                          placeholder="Tell us about yourself, your skills, experience and why you want to join VEVRA..."
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 sm:py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#D9232A] focus:ring-4 focus:ring-rose-500/10 outline-none transition-all shadow-sm resize-none"
                        />
                        <div className="flex items-center justify-between mt-1 text-[11px] text-slate-400">
                          <span>{errors.coverPage ? <span className="font-semibold text-[#D9232A]">{errors.coverPage}</span> : ""}</span>
                          <span>{form.coverPage.length}/500</span>
                        </div>
                      </div>

                      {/* Row 4: Resume / CV Upload */}
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1.5">
                          RESUME / CV DOCUMENT *
                        </label>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {form.resumeFile ? (
                          <div className="flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50/80 p-3.5 text-emerald-900 shadow-sm">
                            <div className="flex items-center gap-3 overflow-hidden">
                              <FileText className="h-5 w-5 text-emerald-600 shrink-0" />
                              <div className="truncate">
                                <span className="text-xs sm:text-sm font-bold block truncate">{form.resumeFile.name}</span>
                                <span className="text-[11px] text-emerald-700">
                                  {(form.resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for submission
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setForm((f) => ({ ...f, resumeFile: null }))}
                              className="rounded-lg p-1 text-emerald-700 hover:bg-emerald-200/60 transition-colors cursor-pointer"
                              title="Remove file"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div
                            onDragOver={(e) => {
                              e.preventDefault();
                              setIsDragOver(true);
                            }}
                            onDragLeave={() => setIsDragOver(false)}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-5 text-center cursor-pointer transition-all ${
                              isDragOver
                                ? "border-[#D9232A] bg-rose-50/50"
                                : "border-rose-300/80 bg-rose-50/10 hover:bg-rose-50/30 hover:border-[#D9232A]"
                            }`}
                          >
                            <UploadCloud className="h-7 w-7 text-[#D9232A] mb-1" />
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              Drag &amp; drop your file here, or click to browse
                            </span>
                            <span className="text-[11px] text-slate-500 mt-0.5">
                              Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                            </span>
                          </div>
                        )}

                        {errors.resumeFile && (
                          <p className="mt-1.5 text-xs font-semibold text-[#D9232A]">{errors.resumeFile}</p>
                        )}
                      </div>

                      {/* Row 5: Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full rounded-2xl bg-[#D9232A] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#D9232A]/20 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-xl hover:scale-[1.005] active:scale-[0.995] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {submitting ? (
                            <span>Submitting...</span>
                          ) : (
                            <span>Submit Application →</span>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: 4 CORE VALUE PILLARS STRIP + "YOUR IDEAS OUR TOMORROW"
           ========================================================================= */}
        <section className="py-8 sm:py-10 bg-[#FBFDFF] border-y border-slate-100">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
              
              {/* Pillar 1: Innovation Driven */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] mb-2.5 border border-rose-100 shadow-sm">
                  <Lightbulb className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#062141] leading-tight">
                  Innovation<br />Driven
                </h4>
              </div>

              {/* Pillar 2: Growth Opportunities */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] mb-2.5 border border-rose-100 shadow-sm">
                  <TrendingUp className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#062141] leading-tight">
                  Growth<br />Opportunities
                </h4>
              </div>

              {/* Pillar 3: Inclusive Workplace */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] mb-2.5 border border-rose-100 shadow-sm">
                  <Users className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#062141] leading-tight">
                  Inclusive<br />Workplace
                </h4>
              </div>

              {/* Pillar 4: Sustainable Impact */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-[#D9232A] mb-2.5 border border-rose-100 shadow-sm">
                  <Leaf className="h-5 w-5 stroke-[2.2]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#062141] leading-tight">
                  Sustainable<br />Impact
                </h4>
              </div>

              {/* Right Side: Exact Graphic with Mountain Silhouette */}
              <div className="col-span-2 hidden lg:flex items-center justify-end pl-4 select-none">
                <img
                  src={pillarMountainImg}
                  alt="Your Ideas Our Tomorrow"
                  className="max-h-24 w-auto object-contain"
                />
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: QUESTIONS & LET'S GROW TOGETHER BANNER
           ========================================================================= */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
            
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-[#F4F8FC] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Left Side: Mail Icon & Contact Details */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100 shadow-sm">
                    <Mail className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-[#062141]">
                      Have questions about career opportunities?
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-normal mt-0.5">
                      Reach out to us at{" "}
                      <a href={`mailto:${COMPANY.email}`} className="font-bold text-[#062141] hover:text-[#D9232A] underline">
                        {COMPANY.email}
                      </a>{" "}
                      or call{" "}
                      <a href={`tel:${COMPANY.phone}`} className="font-bold text-[#062141] hover:text-[#D9232A]">
                        {COMPANY.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Right Side: Cursive Let's Grow Together Script */}
                <div className="hidden md:flex items-center justify-end select-none shrink-0">
                  <div className="text-right">
                    <p className="font-['Caveat',cursive] text-3xl sm:text-4xl font-bold text-[#062141] leading-tight -rotate-2">
                      Let's<br />
                      Grow Together
                    </p>
                    <div className="w-16 h-1 bg-[#D9232A] mt-1 ml-auto rounded-full -rotate-2" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
