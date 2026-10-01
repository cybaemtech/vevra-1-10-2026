import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Compass,
  Cpu,
  Gem,
  HeartHandshake,
  Lightbulb,
  Linkedin,
  MapPin,
  Quote,
  RotateCw,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

import bindraHero from "@/assets/leadership/bindra-hero.png";
import ceoImg from "@/assets/ceo.png";
import leaderNeha from "@/assets/leadership/leader-neha.png";
import leaderRohit from "@/assets/leadership/leader-rohit.jpg";
import leaderPooja from "@/assets/leadership/leader-pooja.png";
import leaderAmit from "@/assets/leadership/leader-amit.png";
import mountainFlag from "@/assets/ld.png";
import officeLeadershipImg from "@/assets/VEVRA_Office_Professional_Images/01_leadership_core_team.png";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Mentors — Inspired Leadership for a Stronger Tomorrow | VEVRA" },
      {
        name: "description",
        content:
          "Meet the visionary leaders, mentors like Dr. Vivek Bindra, our Executive Governance team, and the 9 Navratna leaders driving VEVRA Packaging.",
      },
      { property: "og:title", content: "VEVRA Leadership, Mentors & Navratnas" },
      {
        property: "og:description",
        content: "Visionary leaders, esteemed mentors, executive governance, and the 9 Navratna pillars driving VEVRA's mission.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadershipPage,
});

// 9 NAVRATNAS OF VEVRA (9 Leaders 3x3 Grid per reference design)
const NAVRATNAS_PEOPLE = [
  {
    num: "01",
    name: "Ashish Gawhane",
    role: "Chief Executive Officer (CEO)",
    quote: "Leading with vision to create sustainable growth.",
    image: ceoImg,
    numBadge: "bg-rose-100 text-rose-700",
    photoBg: "bg-rose-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "02",
    name: "Kunal Gawhane",
    role: "Chief Technology Officer (CTO)",
    quote: "Building a stronger tomorrow through financial discipline.",
    image: leaderRohit,
    numBadge: "bg-emerald-100 text-emerald-700",
    photoBg: "bg-emerald-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "03",
    name: "Neha Kulkarni",
    role: "Chief Operating Officer (COO)",
    quote: "Turning strategy into action, every day.",
    image: leaderNeha,
    numBadge: "bg-blue-100 text-blue-700",
    photoBg: "bg-blue-50",
    linkedin: "https://linkedin.com",
  },
  
  {
    num: "04",
    name: "Pooja Deshmukh",
    role: "Chief Strategy Officer (CSO)",
    quote: "Ideas today. Impact tomorrow.",
    image: leaderPooja,
    numBadge: "bg-amber-100 text-amber-800",
    photoBg: "bg-amber-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "05",
    name: "S. R. Deshmukh",
    role: "Operations Head",
    quote: "Driving operational excellence with precision.",
    image: leaderAmit,
    numBadge: "bg-indigo-100 text-indigo-700",
    photoBg: "bg-indigo-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "06",
    name: "Amol Patil",
    role: "Business Development Head",
    quote: "Creating opportunities. Building lasting partnerships.",
    image: leaderRohit,
    numBadge: "bg-pink-100 text-pink-700",
    photoBg: "bg-pink-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "07",
    name: "Sneha Jagtap",
    role: "Human Resources Head",
    quote: "Empowering people. Building a better workplace.",
    image: leaderNeha,
    numBadge: "bg-sky-100 text-sky-700",
    photoBg: "bg-sky-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "08",
    name: "Rohit Shinde",
    role: "Technology & Innovation Head",
    quote: "Innovating today for a smarter tomorrow.",
    image: leaderAmit,
    numBadge: "bg-emerald-100 text-emerald-700",
    photoBg: "bg-emerald-50",
    linkedin: "https://linkedin.com",
  },
  {
    num: "09",
    name: "Priya More",
    role: "Marketing & Communications Head",
    quote: "Telling our story. Stronger together.",
    image: leaderPooja,
    numBadge: "bg-purple-100 text-purple-700",
    photoBg: "bg-purple-50",
    linkedin: "https://linkedin.com",
  },
];

const EXECUTIVE_LEADERS = [
  {
    name: "Neha Kulkarni",
    role: "Chief Operating Officer (COO)",
    image: leaderNeha,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kunal Gawhane",
    role: "Chief Technology Officer (CTO)",
    image: leaderRohit,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Pooja Deshmukh",
    role: "Chief Strategy Officer (CSO)",
    image: leaderPooja,
    linkedin: "https://linkedin.com",
  },
];

function LeadershipPage() {
  return (
    <SiteLayout>
      {/* =========================================================================
          1. HERO SECTION: Inspired Leadership for a Stronger Tomorrow
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f2f6fb] via-[#f8faff] to-[#edf3fa] pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 text-slate-900 border-b border-slate-200/60">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-4 xl:gap-6">

            {/* Left Column: Eyebrow, Title, Paragraph, 4 Pill Icons */}
            <div className="lg:col-span-5 z-10">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  OUR LEADERSHIP
                </span>
              </div>

              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 leading-[1.12]">
                Inspired Leadership
                <br />
                for a <span className="text-[#D9232A]">Stronger Tomorrow.</span>
              </h1>

              <p className="mt-3.5 max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                We believe strong businesses are built by strong people. Our leadership drives vision, innovation and a people-first culture to create long-term value for customers, partners and communities.
              </p>

              {/* 4 Feature Badges (Circles with text below) */}
              <div className="mt-7 grid grid-cols-4 gap-2 sm:gap-3 pt-5 border-t border-slate-200/80">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <Target className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight mt-1.5">
                    Clear<br />Vision
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <Users className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight mt-1.5">
                    People<br />First
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <Lightbulb className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight mt-1.5">
                    Continuous<br />Innovation
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#D9232A] border border-rose-200 shadow-sm">
                    <TrendingUp className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight mt-1.5">
                    Sustainable<br />Growth
                  </span>
                </div>
              </div>
            </div>

            {/* Center Column: Dr. Vivek Bindra Photo with Organic Soft Pink Background */}
            <div className="lg:col-span-4 flex items-center justify-center relative isolate min-h-[340px] sm:min-h-[380px] lg:min-h-[440px]">
              <div
                className="absolute top-[35%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] lg:w-[330px] h-[240px] sm:h-[280px] lg:h-[300px] pointer-events-none z-0 select-none"
                aria-hidden="true"
              >
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="roseGradHero" x1="20%" y1="15%" x2="80%" y2="85%">
                      <stop offset="0%" stopColor="#fdecee" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#fcdde2" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#fbd2d8" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M280,50 C360,60 380,150 360,230 C340,300 270,330 190,320 C100,310 60,240 70,140 C80,60 190,40 280,50 Z"
                    fill="url(#roseGradHero)"
                  />
                </svg>
              </div>

              <img
                src={bindraHero}
                alt="Dr. Vivek Bindra - Leadership Mentor"
                className="relative z-10 h-auto max-h-[360px] sm:max-h-[410px] lg:max-h-[450px] object-contain drop-shadow-xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
                loading="eager"
              />
            </div>

            {/* Right Column: Handwritten Script & Quote Card */}
            <div className="lg:col-span-3 flex flex-col justify-between self-stretch py-2 lg:py-4 gap-6">
              {/* Script Text */}
              <div className="flex flex-col items-start select-none pt-1">
                <span className="font-['Dancing_Script',cursive] text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-800 block -rotate-3 leading-[1.08]">
                  Leadership
                  <br />
                  Transforms
                  <br />
                  Business
                </span>
                <span className="inline-block w-14 h-1 bg-[#D9232A] mt-2 rounded-full -rotate-2" />
              </div>

              {/* Quote Card */}
              <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 sm:p-5 border border-slate-200/90 shadow-xl shadow-slate-200/50">
                <span className="text-3xl font-serif font-black text-[#D9232A] leading-none block">“</span>
                <p className="mt-1 text-xs font-bold leading-relaxed text-slate-800">
                  "The biggest asset of any business is its people. When you build a people-centric culture, you create possibilities - not just for business, but for a better tomorrow."
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <h4 className="text-xs font-black text-slate-950">Dr. Vivek Bindra</h4>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                    Motivational Speaker | Business Leader<br />Leadership Mentor to VEVRA
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MENTORS & SOURCES OF INSPIRATION SECTION (White Background)
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#D9232A]">
              <span className="inline-block w-4 h-0.5 bg-[#D9232A]" />
              <span>MENTORS &amp; SOURCES OF INSPIRATION</span>
              <span className="inline-block w-4 h-0.5 bg-[#D9232A]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Guided by Wisdom. <span className="text-[#D9232A]">Inspired to Lead.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
              Our leadership draws ongoing strategic guidance from internationally renowned thought leaders and industrial veterans who inspire us to push boundaries and build a lasting value.
            </p>
          </div>

          {/* 2 Mentors Cards Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

            {/* CARD 1: Dr. Vivek Bindra */}
            <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm shrink-0">
                    <img
                      src={bindraHero}
                      alt="Dr. Vivek Bindra"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block rounded-full bg-rose-50 px-2.5 py-0.5 text-[10px] font-bold text-[#D9232A] border border-rose-100 uppercase tracking-wider mb-1">
                      OUR MENTOR / INSPIRATION
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950">
                      Dr. Vivek Bindra
                    </h3>
                    <p className="text-xs font-bold text-[#D9232A] mt-0.5">
                      Global Business Coach &amp; Leadership Mentor
                    </p>
                  </div>
                </div>

                <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                  His mentorship accelerates innovation, strengthens our business acumen, and inspires us to create greater value for our customers, partners and society and trust.
                </p>

                {/* Core Guidance Principles */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-800 block">
                    CORE GUIDANCE PRINCIPLES:
                  </span>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>People-Centric Organization Culture</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>Sustainable Business Growth</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>Empowering Teams for a Better Tomorrow</span>
                  </div>
                </div>

                {/* Quote Block */}
                <div className="mt-4 rounded-xl bg-slate-50/80 p-3.5 border border-slate-200/70">
                  <span className="text-xl font-serif font-black text-[#D9232A] leading-none block">“</span>
                  <p className="mt-0.5 text-xs font-semibold text-slate-800 italic leading-snug">
                    "The biggest asset of any business is its people. When you build people, you build an unstoppable organization."
                  </p>
                </div>
              </div>

              {/* 3 Metrics Bottom */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3.5 text-center">
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">10M+</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">People Inspired</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">1,500+</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Enterprises Mentored</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">12+</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Years of Association</span>
                </div>
              </div>
            </div>

            {/* CARD 2: Industrial & Supply-Chain Advisory Board */}
            <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm shrink-0">
                    <img
                      src={officeLeadershipImg}
                      alt="Industrial & Supply-Chain Advisory Board"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block rounded-full bg-rose-50 px-2.5 py-0.5 text-[10px] font-bold text-[#D9232A] border border-rose-100 uppercase tracking-wider mb-1">
                      STRATEGIC MENTORSHIP
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950">
                      Industrial &amp; Supply-Chain Advisory Board
                    </h3>
                    <p className="text-xs font-bold text-[#D9232A] mt-0.5">
                      Strategic Manufacturing &amp; Operations Mentors
                    </p>
                  </div>
                </div>

                <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                  Our distinguished council of manufacturing veterans, supply chain architects and packaging industry experts provide continuous strategic guidance on lean manufacturing, cost optimization and sustainable growth.
                </p>

                {/* Core Guidance Principles */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-800 block">
                    CORE GUIDANCE PRINCIPLES:
                  </span>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>Zero Defect Manufacturing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>Global Supply Chain Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>Innovation &amp; Technology Adoption</span>
                  </div>
                </div>

                {/* Quote Block */}
                <div className="mt-4 rounded-xl bg-slate-50/80 p-3.5 border border-slate-200/70">
                  <span className="text-xl font-serif font-black text-[#D9232A] leading-none block">“</span>
                  <p className="mt-0.5 text-xs font-semibold text-slate-800 italic leading-snug">
                    "Engineering precision and supply reliability are the true foundations of industrial trust."
                  </p>
                </div>
              </div>

              {/* 3 Metrics Bottom */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3.5 text-center">
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">35+</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Years Combined Industry Insight</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">4</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Manufacturing Facilities Guided</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">100%</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Zero-Disruption Track Record</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EXECUTIVE GOVERNANCE / LEADERSHIP TEAM (Shifted BEFORE Navratnas)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                  EXECUTIVE GOVERNANCE
                </span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                Guided by Experience. Driven by Purpose.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
              Our executive leadership team brings together decades of deep packaging experience, financial governance, and industrial client operations success.
            </p>
          </div>

          {/* CEO Card + 3 Executive Cards Row */}
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* CEO Card (Left ~42% / 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                <div className="w-full sm:w-[150px] aspect-[4/4.8] shrink-0 rounded-xl overflow-hidden bg-rose-50 border border-rose-100 shadow-sm">
                  <img
                    src={ceoImg}
                    alt="Ashish Gawhane - CEO"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-slate-950">
                    Ashish Gawhane
                  </h3>
                  <p className="text-xs font-bold text-slate-600 mt-0.5">
                    Chief Executive Officer (CEO)
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-normal">
                    Leads the strategic vision and overall growth of VEVRA Packaging, driving innovation, operational excellence, and long-term value creation.
                  </p>

                  <div className="mt-3 rounded-lg bg-rose-50/70 p-2.5 border border-rose-100 flex items-start gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D9232A] text-white text-[10px] font-bold">“</span>
                    <p className="text-[11px] font-medium text-slate-700 italic leading-snug">
                      "Packaging is not just about boxes, it's about empowering businesses to scale with absolute trust and convenience."
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ashish Gawhane on LinkedIn"
                  className="flex h-6 w-6 items-center justify-center rounded bg-[#0A66C2] text-white hover:opacity-85 shadow-sm"
                >
                  <Linkedin className="h-3.5 w-3.5 fill-white" />
                </a>
              </div>
            </div>

            {/* 3 Executive Leaders (Right ~58% / 7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              {EXECUTIVE_LEADERS.map((leader) => (
                <div
                  key={leader.name}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[4/4.4] overflow-hidden rounded-xl bg-slate-100 border border-slate-200/70">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="text-sm font-black text-slate-950">{leader.name}</h3>
                      <p className="text-[11px] font-semibold text-slate-500 mt-0.5">{leader.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                      className="flex h-6 w-6 items-center justify-center rounded bg-[#0A66C2] text-white hover:opacity-85 shadow-sm"
                    >
                      <Linkedin className="h-3.5 w-3.5 fill-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OUR “NAVRATNAS” SECTION (9 Leaders 3x3 Grid)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Row: Left Stacked Brand, Center Title & Highlights, Right Cursive Script */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 pb-6">

            {/* Left Stacked Brand Label */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-start justify-center border-l-2 border-slate-300 pl-4 py-1 select-none">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500 leading-tight">
                PEOPLE<br />POWER<br />PROGRESS
              </span>
              <span className="w-6 h-0.5 bg-[#D9232A] mt-1.5" />
            </div>

            {/* Center Heading, Subtitle & 3 Highlight Badges */}
            <div className="lg:col-span-8 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-300 bg-rose-50/80 px-4 py-1 text-[#D9232A] text-[10.5px] font-extrabold uppercase tracking-[0.2em] shadow-sm mb-3">
                <Star className="h-3 w-3 fill-[#D9232A]" />
                <span>THE 9 NAVRATNAS OF VEVRA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-slate-950 tracking-tight leading-tight">
                Our <span className="text-[#D9232A]">“Navratnas”</span>
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Inspired by the historic Indian tradition of the nine jewels, VEVRA's Navratna framework represents the 9 foundational strengths that empower us to build a stronger, smarter and more sustainable future.
              </p>

              {/* 3 Highlight Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-left">
                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-100 text-[#D9232A]">
                    <Gem className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-950 leading-tight">9 Visionaries</p>
                    <p className="text-[10.5px] text-slate-500 leading-none mt-0.5">Driving real change</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-950 leading-tight">One Team</p>
                    <p className="text-[10.5px] text-slate-500 leading-none mt-0.5">Stronger together</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-950 leading-tight">A Brighter Tomorrow</p>
                    <p className="text-[10.5px] text-slate-500 leading-none mt-0.5">Built by our people</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end justify-center select-none pr-2">
              <div className="relative text-right">
                <p className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-slate-800 leading-[1.12]">
                  9 People<br />
                  One Vision<br />
                  Many Possibilities
                </p>
                <div className="w-16 h-1 bg-[#D9232A] mt-1.5 ml-auto rounded-full -rotate-2" />
              </div>
            </div>

          </div>

          {/* 3x3 Grid of 9 Navratna Leaders Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NAVRATNAS_PEOPLE.map((person) => (
              <div
                key={person.num}
                className="group flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Left Portrait Photo */}
                <div className={`w-[105px] sm:w-[115px] aspect-[4/4.8] shrink-0 rounded-xl overflow-hidden border border-slate-200/70 ${person.photoBg}`}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Right Leader Details */}
                <div className="flex flex-1 flex-col justify-between min-w-0">
                  <div>
                    {/* Number Badge */}
                    <span className={`inline-block rounded-md px-2 py-0.5 text-[10.5px] font-mono font-black ${person.numBadge}`}>
                      {person.num}
                    </span>

                    {/* Name */}
                    <h3 className="mt-1 text-sm sm:text-base font-black text-slate-950 leading-tight">
                      {person.name}
                    </h3>

                    {/* Role */}
                    <p className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                      {person.role}
                    </p>

                    {/* Quote */}
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-600 font-medium italic">
                      “{person.quote}”
                    </p>
                  </div>

                  {/* LinkedIn Button */}
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center">
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="flex h-5 w-5 items-center justify-center rounded bg-[#0A66C2] text-white hover:opacity-85 shadow-sm transition-opacity"
                    >
                      <Linkedin className="h-3 w-3 fill-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom People Banner inside Navratnas Section */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-r from-slate-50/90 via-white to-slate-50/70 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100 shadow-sm">
                  <Quote className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-950">
                    Great organizations are built by great people.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                    Our Navratnas inspire us to dream bigger, work smarter and create a lasting impact.
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-5 border-l border-slate-200 pl-6 select-none shrink-0">
                <div className="text-right">
                  <p className="font-['Caveat',cursive] text-2xl font-bold text-slate-800 leading-tight">
                    People Make<br />Progress
                  </p>
                  <div className="w-12 h-0.5 bg-[#D9232A] mt-1 ml-auto rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM CALLOUT BANNER (TOGETHER WE BUILD MORE)
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-100">
            <div className="grid lg:grid-cols-12 items-center bg-white">

              {/* Left Photo: Mountain Summit Image */}
              <div className="lg:col-span-5 h-60 sm:h-64 lg:h-full min-h-[260px] lg:min-h-[280px] relative overflow-hidden bg-white">
                <img
                  src={mountainFlag}
                  alt="VEVRA leadership team on mountain summit"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-y-0 right-0 w-28 sm:w-36 lg:w-44 bg-gradient-to-r from-transparent via-white/75 to-white pointer-events-none hidden lg:block" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none lg:hidden" />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-0.5 bg-[#D9232A]" />
                    <span className="text-[10.5px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
                      TOGETHER WE BUILD MORE
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-tight">
                    Great Leaders
                    <br />
                    <span className="text-slate-950">Create </span>
                    <span className="text-[#D9232A]">Greater Futures.</span>
                  </h3>

                  <p className="mt-2 max-w-md text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                    Our leadership works together to build a stronger, smarter and more sustainable packaging industry.
                  </p>
                </div>

                {/* Button */}
                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#D9232A]/25 transition-all hover:bg-rose-700 hover:shadow-lg"
                  >
                    <span>Join Our Journey</span>
                    <span>→</span>
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
