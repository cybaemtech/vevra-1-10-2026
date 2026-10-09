import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Cpu,
  ExternalLink,
  Gem,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Linkedin,
  MapPin,
  Quote,
  RotateCw,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Truck,
  User,
  Users,
  Wrench,
  X,
} from "lucide-react";

import bindraHero from "@/assets/leadership/bindra-hero.png";
import ceoImg from "@/assets/ceo.png";
import tanushreeImg from "@/assets/leadership/Tanushree K.png";
import pareshImg from "@/assets/leadership/PareshY.png";
import shilpaImg from "@/assets/leadership/Shilpa Singh.png";
import kunalImg from "@/assets/leadership/leader-kunal.png";
import omkarImg from "@/assets/leadership/omkar.png";
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

// 9 NAVRATNAS OF VEVRA — Comprehensive Corporate Hierarchy & Business Importance
const NAVRATNAS_PEOPLE = [
  {
    num: "01",
    firstName: "Ashish",
    lastName: "Gawhane",
    name: "Ashish Gawhane",
    role: "CEO & MD",
    hierarchyBadge: "Founder & Executive Director",
    experience: "28+ Years Experience (Founder & Managing Director)",
    summary:
      "Founder & CEO of Vevra Packaging Private Limited, bringing 28 years of hands-on entrepreneurial and industry experience to the mission of building smarter, more sustainable supply chains.",
    extendedBio: [
      "His journey has been shaped by a deep commitment to customer value, operational excellence, innovation, and responsible growth. Under his leadership, Vevra has expanded from packaging solutions into a broader platform covering returnable packaging, rental pooling, asset management, reverse logistics, expendable packaging, heavy-duty corrugation export packaging, transportation, and technology-enabled supply-chain services.",
      "Ashish’s focus goes beyond business growth. He is committed to Vevra’s vision of creating long-term sustainable End-to-End solutions for supply chains, adding value for customers, people, partners, and society while reducing waste, promoting circularity, and supporting a greener industrial future.",
    ],
    heroPillars: [
      { icon: Target, title: "Strategic Vision" },
      { icon: TrendingUp, title: "Sustainable Growth" },
      { icon: HeartHandshake, title: "Customer Centricity" },
      { icon: Award, title: "Industry Leadership" },
    ],
    focusCards: [
      { icon: Target, title: "End-to-End Supply Chain Platforms" },
      { icon: RotateCw, title: "Rental Pooling & Asset Management" },
      { icon: ShieldCheck, title: "Circular Economy & ESG Leadership" },
      { icon: BarChart3, title: "Strategic Expansion & Governance" },
    ],
    careerJourney: [
      { title: "Founding Vision", desc: "Industrial Packaging & Manufacturing Innovation" },
      { title: "Scale & Diversification", desc: "Returnable Pooling & Reverse Logistics Platforms" },
      { title: "CEO & MD", desc: "Vevra Packaging Pvt. Ltd. (Present)" },
    ],
    quote: "True leadership is measured not only by the scale of a business, but by the positive impact it creates for people, industry, and society at large.",
    keyTags: [
      "Operations Leadership",
      "Returnable Packaging",
      "Rental Pooling",
      "Asset Management",
      "Reverse Logistics",
      "Heavy-Duty Corrugation",
      "Circularity & Sustainability",
    ],
    image: ceoImg,
    numBadge: "bg-rose-100 text-rose-800 border-rose-200",
    photoBg: "bg-rose-50",
    linkedin: "https://www.linkedin.com/in/ashish-gawhane-710772441/",
  },
  {
    num: "02",
    firstName: "Tanushree",
    lastName: "K",
    name: "Tanushree K",
    role: "Chairperson",
    hierarchyBadge: "Co-Founder & Board Governance",
    experience: "25 Years Corporate HR Experience",
    summary:
      "True entrepreneurial success is built from the inside out. After 25 years in corporate HR, Tanushree transitioned into packaging industrial manufacturing to found Vevra Packaging Pvt. Ltd., specializing in precision, end-to-end automobile packaging.",
    extendedBio: [
      "Her mandate was clear: build a business rooted in flawless systems, structured processes, and a profound social soul. For Vevra, that social soul means a deep commitment to strengthening customers and partners while empowering people through continuous improvement and industry best practices.",
      "Guided by the core values of Customer First, Excellence, Integrity, Teamwork, and Ownership, she drives impact through three foundational pillars:",
    ],
    pillars: [
      {
        title: "Elevating Social Mobility",
        desc: "Upgrading raw potential into high-value technical craftsmanship.",
      },
      {
        title: "Standardizing Ethical Employment",
        desc: "Treating workplace safety and full social security as non-negotiable rights.",
      },
      {
        title: "Nurturing Future Leaders",
        desc: "Empowering the workforce with corporate acumen and confidence to step into management roles.",
      },
    ],
    heroPillars: [
      { icon: HeartHandshake, title: "Social Soul & Culture" },
      { icon: Scale, title: "Process Discipline" },
      { icon: ShieldCheck, title: "Ethical Employment" },
      { icon: Users, title: "People Empowerment" },
    ],
    focusCards: [
      { icon: Target, title: "Elevating Social Mobility" },
      { icon: ShieldCheck, title: "Standardizing Ethical Employment" },
      { icon: Users, title: "Nurturing Future Leaders" },
      { icon: BarChart3, title: "Structured Organizational Governance" },
    ],
    careerJourney: [
      { title: "Corporate HR Leader", desc: "25 Years Executive Human Resources Leadership" },
      { title: "Co-Founder", desc: "Precision Automobile Packaging & Manufacturing Systems" },
      { title: "Chairperson", desc: "Vevra Packaging Pvt. Ltd. (Present)" },
    ],
    quote: "True entrepreneurial success is built from the inside out through structured processes and a profound social soul.",
    keyTags: ["Board Governance", "Customer First", "Excellence", "Integrity", "Teamwork", "Ownership", "Social Mobility"],
    image: tanushreeImg,
    numBadge: "bg-indigo-100 text-indigo-800 border-indigo-200",
    photoBg: "bg-indigo-50",
    linkedin: null,
  },
  {
    num: "03",
    firstName: "Kunal",
    lastName: "Gawhane",
    name: "Kunal Gawhane",
    role: "Director – Operations",
    hierarchyBadge: "Executive Operations Leadership",
    experience: "20+ Years Experience (10 Yrs Europe MNC)",
    summary:
      "With a strong foundation in technology, service delivery, and business operations, Kunal drives operational excellence at Vevra Packaging with a global perspective.",
    extendedBio: [
      "With over 20 years of experience spanning technology, service delivery, and business operations, Kunal brings a strong foundation in leadership, process excellence, and execution to Vevra Packaging Pvt. Ltd.",
      "As Director – Operations, he leads the organisation’s end-to-end operations across Production, Quality, Logistics, and IT. Prior to Vevra, he spent nearly two decades in IT Infrastructure Managed Services, including 10 years in Europe, cultivating his role as Delivery Head.",
      "He now applies this experience to building efficient, disciplined, and scalable operations while driving Vevra’s continued growth and long-term success.",
    ],
    oversightVerticals: [
      "Rental Packaging",
      "PPE OTS",
      "Blister Packaging",
      "Corrugation",
      "Metal Packaging",
      "Wooden Packaging",
    ],
    heroPillars: [
      { icon: Target, title: "Operational Excellence" },
      { icon: RotateCw, title: "Process Optimization" },
      { icon: Compass, title: "Global Perspective" },
      { icon: Users, title: "Team Leadership" },
    ],
    focusCards: [
      { icon: Target, title: "Strategic Operations Planning & Execution" },
      { icon: RotateCw, title: "Process Improvement & Automation" },
      { icon: Users, title: "Cross-functional Team Leadership" },
      { icon: BarChart3, title: "Global Exposure & Best Practices" },
    ],
    careerJourney: [
      { title: "Early Career", desc: "IT Infrastructure Managed Services" },
      { title: "Delivery Head", desc: "10 Years in Europe (Global Exposure)" },
      { title: "Director – Operations", desc: "Vevra Packaging Pvt. Ltd. (Present)" },
    ],
    quote: "Building efficient, disciplined, and scalable operations across all six industrial packaging verticals.",
    keyTags: [
      "Operations Leadership",
      "Service Delivery",
      "Quality Assurance",
      "Logistics & IT",
      "Scalable Processes",
      "Team Management",
      "Global Best Practices",
    ],
    image: kunalImg,
    numBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    photoBg: "bg-emerald-50",
    linkedin: "https://www.linkedin.com/in/kunal-gawhane-343061439/",
  },
  {
    num: "04",
    firstName: "Paresh",
    lastName: "Y",
    name: "Paresh Y",
    role: "Head – Business Analytics",
    hierarchyBadge: "Strategic Analytics & Transformation",
    experience: "20+ Years Experience (14 Yrs German/US MNCs)",
    summary:
      "With over 20 years of experience spanning business analysis, process improvement, and technology-led transformation, Paresh brings a strong foundation in analytical thinking, stakeholder management, and data-driven decision-making to Vevra Packaging Pvt. Ltd.",
    extendedBio: [
      "As Head – Business Analytics, he leads the organisation’s business analysis function, translating business needs across Production, Quality, Logistics, HR, Finance, and IT into clear requirements, streamlined processes, and measurable outcomes.",
      "His responsibilities include reporting, process mapping, and system improvement initiatives. Prior to Vevra, he spent nearly 14 years with German and US-based MNCs, working with cross-functional teams and senior leadership to deliver high-impact projects. He now applies that experience to building efficient, insight-driven, and scalable business processes.",
    ],
    heroPillars: [
      { icon: BarChart3, title: "Business Analytics" },
      { icon: RotateCw, title: "Process Mapping" },
      { icon: Compass, title: "MNC Experience" },
      { icon: Target, title: "Data-Driven Strategy" },
    ],
    focusCards: [
      { icon: Target, title: "Cross-Functional Requirements Analysis" },
      { icon: RotateCw, title: "System Improvement & Automation" },
      { icon: Users, title: "Stakeholder Management & Alignment" },
      { icon: BarChart3, title: "Scalable Data-Driven Reporting" },
    ],
    careerJourney: [
      { title: "Senior Business Analyst", desc: "14 Yrs German & US Multinational Corporations" },
      { title: "Process & Transformation Lead", desc: "Cross-Functional Enterprise Systems & Mapping" },
      { title: "Head – Business Analytics", desc: "Vevra Packaging Pvt. Ltd. (Present)" },
    ],
    quote: "Translating complex operational data into actionable intelligence and scalable business outcomes.",
    keyTags: [
      "Business Analytics",
      "Process Mapping",
      "System Improvement",
      "Cross-Functional Transformation",
      "Data-Driven Decisions",
      "Enterprise Reporting",
    ],
    image: pareshImg,
    numBadge: "bg-blue-100 text-blue-800 border-blue-200",
    photoBg: "bg-blue-50",
    linkedin: "https://linkedin.com/in/paresh-yerunkar-8657a316",
  },
  {
    num: "05",
    firstName: "Shilpa",
    lastName: "Singh",
    name: "Shilpa Singh",
    role: "HR Manager",
    hierarchyBadge: "People Operations & Talent",
    experience: "8+ Years Experience (People & Talent Management)",
    summary:
      "With over 8 years of experience in Human Resources, Shilpa has developed expertise across talent acquisition, HR operations, employee engagement, compliance, performance management, training and development, and employee welfare.",
    extendedBio: [
      "At Vevra Packaging Pvt. Ltd., she manages key people and HR functions while working towards building a structured, engaged, and positive workplace culture.",
      "She focuses on strengthening people practices, building an engaged workforce, and supporting the organisation’s growth through effective and structured HR initiatives.",
    ],
    heroPillars: [
      { icon: Users, title: "Talent Management" },
      { icon: HeartHandshake, title: "Culture Building" },
      { icon: ShieldCheck, title: "Statutory Compliance" },
      { icon: Award, title: "Employee Welfare" },
    ],
    focusCards: [
      { icon: Target, title: "Talent Acquisition & Structured Onboarding" },
      { icon: RotateCw, title: "Performance Management Systems" },
      { icon: Users, title: "Employee Engagement & Development" },
      { icon: BarChart3, title: "HR Compliance & Operations Excellence" },
    ],
    careerJourney: [
      { title: "HR Operations Executive", desc: "Talent Acquisition & Employee Engagement" },
      { title: "Senior HR Specialist", desc: "Compliance, Training & Performance Management" },
      { title: "HR Manager", desc: "Vevra Packaging Pvt. Ltd. (Present)" },
    ],
    keyActivities: [
      "Talent Acquisition",
      "HR Operations",
      "Employee Engagement",
      "HR Compliance",
      "Performance Management",
      "Training & Development",
      "Employee Welfare",
      "People Development",
    ],
    quote: "Strengthening people practices and building an engaged workforce to support organizational growth.",
    keyTags: [
      "People Operations",
      "Talent Acquisition",
      "Employee Engagement",
      "HR Compliance",
      "Performance Management",
      "People Welfare",
    ],
    image: shilpaImg,
    numBadge: "bg-pink-100 text-pink-800 border-pink-200",
    photoBg: "bg-pink-50",
    linkedin: "https://www.linkedin.com/in/shilpasingh0401",
  },
  {
    num: "06",
    firstName: "Omkar",
    lastName: "Dixit",
    name: "Omkar Dixit",
    role: "Senior Account Executive",
    hierarchyBadge: "Finance & Statutory Compliance",
    experience: "7+ Years Experience (Accounting & Financial Operations)",
    summary:
      "With over 7 years of experience in Accounting and Finance, Omkar has developed expertise in accounting operations, GST compliance, financial reporting, and finance process management.",
    extendedBio: [
      "As Senior Account Executive at Vevra, he manages end-to-end accounting operations, statutory compliance, and financial reconciliations. With a focus on accuracy, accountability, and process improvement, he works closely with management and internal teams to ensure smooth and efficient finance operations.",
    ],
    heroPillars: [
      { icon: BarChart3, title: "Financial Accuracy" },
      { icon: ShieldCheck, title: "Statutory Compliance" },
      { icon: Scale, title: "Process Accountability" },
      { icon: RotateCw, title: "Reconciliation Mastery" },
    ],
    focusCards: [
      { icon: Target, title: "GST, TDS & E-Invoicing Compliance" },
      { icon: RotateCw, title: "Accounts Receivable & Payable Management" },
      { icon: Users, title: "Bank & Ledger Reconciliations" },
      { icon: BarChart3, title: "Financial Reporting & Statutory Audit" },
    ],
    careerJourney: [
      { title: "Accounts Executive", desc: "Accounting Operations, Ledger Management & Tax Filings" },
      { title: "Finance Specialist", desc: "GST Compliance, E-Way Bills & Financial Reconciliation" },
      { title: "Senior Account Executive", desc: "Vevra Packaging Pvt. Ltd. (Present)" },
    ],
    keyActivities: [
      "Sales & Purchase Accounting",
      "Accounts Receivable & Payable",
      "GST Compliance & E-Invoicing",
      "E-Way Bills & TDS Filing",
      "Bank & Ledger Reconciliation",
      "Statutory Compliance",
      "Outstanding Management",
      "Financial Reconciliations",
    ],
    quote: "Ensuring financial accuracy, regulatory compliance, and seamless accounting accountability across all transactions.",
    keyTags: [
      "Finance & Compliance",
      "GST Compliance",
      "E-Invoicing",
      "Accounts Receivable/Payable",
      "Statutory Compliance",
      "Financial Reporting",
    ],
    image: omkarImg,
    numBadge: "bg-slate-100 text-slate-800 border-slate-200",
    photoBg: "bg-slate-50",
    linkedin: "https://linkedin.com/in/omkar-dixit-92bb102a7",
  },
  {
    num: "07",
    firstName: "Pillar",
    lastName: "07",
    name: "To Be Announced",
    role: "Key Leadership Pillar",
    hierarchyBadge: "Strategic Leadership",
    isPlaceholder: true,
    experience: "Executive Leadership Pillar",
    summary:
      "Leadership position under executive announcement. Strategic portfolio details will be updated shortly.",
    heroPillars: [
      { icon: Target, title: "Strategic Vision" },
      { icon: RotateCw, title: "Process Optimization" },
      { icon: Compass, title: "Industry Experience" },
      { icon: Users, title: "Team Leadership" },
    ],
    focusCards: [
      { icon: Target, title: "Strategic Initiative Planning" },
      { icon: RotateCw, title: "Operational Alignment" },
      { icon: Users, title: "Cross-Department Synergy" },
      { icon: BarChart3, title: "Scalable Best Practices" },
    ],
    careerJourney: [
      { title: "Industrial Foundation", desc: "Domain Expertise & Sector Mastery" },
      { title: "Executive Mandate", desc: "Strategic Portfolio Leadership" },
      { title: "Leadership Pillar", desc: "Vevra Packaging Pvt. Ltd." },
    ],
    quote: "Committed to driving excellence, innovation, and sustainable value creation across industrial supply chains.",
    keyTags: ["Strategic Leadership", "Operational Excellence", "Industry Best Practices"],
    image: null,
    numBadge: "bg-slate-100 text-slate-700 border-slate-200",
    photoBg: "bg-slate-50",
    linkedin: null,
  },
  {
    num: "08",
    firstName: "Pillar",
    lastName: "08",
    name: "To Be Announced",
    role: "Key Leadership Pillar",
    hierarchyBadge: "Strategic Leadership",
    isPlaceholder: true,
    experience: "Executive Leadership Pillar",
    summary:
      "Leadership position under executive announcement. Strategic portfolio details will be updated shortly.",
    heroPillars: [
      { icon: Target, title: "Strategic Vision" },
      { icon: RotateCw, title: "Process Optimization" },
      { icon: Compass, title: "Industry Experience" },
      { icon: Users, title: "Team Leadership" },
    ],
    focusCards: [
      { icon: Target, title: "Strategic Initiative Planning" },
      { icon: RotateCw, title: "Operational Alignment" },
      { icon: Users, title: "Cross-Department Synergy" },
      { icon: BarChart3, title: "Scalable Best Practices" },
    ],
    careerJourney: [
      { title: "Industrial Foundation", desc: "Domain Expertise & Sector Mastery" },
      { title: "Executive Mandate", desc: "Strategic Portfolio Leadership" },
      { title: "Leadership Pillar", desc: "Vevra Packaging Pvt. Ltd." },
    ],
    quote: "Committed to driving excellence, innovation, and sustainable value creation across industrial supply chains.",
    keyTags: ["Strategic Leadership", "Operational Excellence", "Industry Best Practices"],
    image: null,
    numBadge: "bg-slate-100 text-slate-700 border-slate-200",
    photoBg: "bg-slate-50",
    linkedin: null,
  },
  {
    num: "09",
    firstName: "Pillar",
    lastName: "09",
    name: "To Be Announced",
    role: "Key Leadership Pillar",
    hierarchyBadge: "Strategic Leadership",
    isPlaceholder: true,
    experience: "Executive Leadership Pillar",
    summary:
      "Leadership position under executive announcement. Strategic portfolio details will be updated shortly.",
    heroPillars: [
      { icon: Target, title: "Strategic Vision" },
      { icon: RotateCw, title: "Process Optimization" },
      { icon: Compass, title: "Industry Experience" },
      { icon: Users, title: "Team Leadership" },
    ],
    focusCards: [
      { icon: Target, title: "Strategic Initiative Planning" },
      { icon: RotateCw, title: "Operational Alignment" },
      { icon: Users, title: "Cross-Department Synergy" },
      { icon: BarChart3, title: "Scalable Best Practices" },
    ],
    careerJourney: [
      { title: "Industrial Foundation", desc: "Domain Expertise & Sector Mastery" },
      { title: "Executive Mandate", desc: "Strategic Portfolio Leadership" },
      { title: "Leadership Pillar", desc: "Vevra Packaging Pvt. Ltd." },
    ],
    quote: "Committed to driving excellence, innovation, and sustainable value creation across industrial supply chains.",
    keyTags: ["Strategic Leadership", "Operational Excellence", "Industry Best Practices"],
    image: null,
    numBadge: "bg-slate-100 text-slate-700 border-slate-200",
    photoBg: "bg-slate-50",
    linkedin: null,
  },
];

// =========================================================================
// FULL-PAGE LEADER PROFILE DETAIL VIEW (Exact Match to Image 1 Design Mockup)
// =========================================================================
function LeaderProfileDetailView({
  leader,
  onBack,
  onSelectOther,
}: {
  leader: (typeof NAVRATNAS_PEOPLE)[number];
  onBack: () => void;
  onSelectOther: (other: (typeof NAVRATNAS_PEOPLE)[number]) => void;
}) {
  const otherLeaders = NAVRATNAS_PEOPLE.filter((p) => p.num !== leader.num);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlBehavior = html.style.scrollBehavior;
    const prevBodyBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    html.scrollTop = 0;
    body.scrollTop = 0;

    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }

    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      body.scrollTop = 0;
      html.style.scrollBehavior = prevHtmlBehavior;
      body.style.scrollBehavior = prevBodyBehavior;
    });

    return () => {
      cancelAnimationFrame(raf);
      html.style.scrollBehavior = prevHtmlBehavior;
      body.style.scrollBehavior = prevBodyBehavior;
    };
  }, [leader.num]);

  return (
    <div ref={containerRef} id="leader-profile-top" className="bg-[#f8faff] min-h-screen text-slate-900 pb-16">
      {/* Top Breadcrumb Navigation */}
      <section className="bg-transparent py-4 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <Link to="/" className="hover:text-[#D9232A] transition">Home</Link>
            <span>/</span>
            <button
              type="button"
              onClick={onBack}
              className="hover:text-[#D9232A] transition"
            >
              Leadership
            </button>
            <span>/</span>
            <span className="font-bold text-slate-900">{leader.name}</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERO PROFILE SECTION (3-Column Layout: Portrait | Middle Bio | 4 Vertical Badges)
         ========================================================================= */}
      <section className="relative overflow-hidden py-10 sm:py-14">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Col 1: Portrait with Reddish Top-Right Corner Accent Border */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative max-w-[420px] w-full">
                {/* Soft Warm/Rose Fluid Blob behind picture */}
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-tr from-rose-100/50 via-slate-100/70 to-rose-100/40 blur-[3px] transform rotate-3 pointer-events-none opacity-85" />

                {/* Faint Glassy Translucent Top-Right Corner Accent Border */}
                <div className="absolute -top-2.5 -right-2.5 w-16 h-16 border-t-[3.5px] border-r-[3.5px] border-[#D9232A]/35 bg-gradient-to-bl from-rose-500/10 via-transparent to-transparent backdrop-blur-[2px] rounded-tr-[2.2rem] pointer-events-none z-20" />

                {/* Photo Portrait Frame Container with Pure Gray Border */}
                <div
                  className={`relative w-full aspect-[4/3.4] sm:aspect-[4/3.2] rounded-[2rem] overflow-hidden border border-slate-200/90 shadow-xl flex flex-col items-center justify-center z-10 ${leader.photoBg} ${
                    leader.isPlaceholder ? "border-dashed border-slate-300 text-slate-400" : ""
                  }`}
                >
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-500 mb-2">
                        <User className="h-8 w-8" />
                      </div>
                      <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                        Pillar {leader.num}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Col 2: Middle Details (Name, Role, Experience, Summary, LinkedIn) */}
            <div className="lg:col-span-4 text-center lg:text-left">
              {/* NAVRATNA Pill Badge */}
              <div className="inline-block mb-3">
                <span className="rounded-full bg-[#fde8e8] border border-rose-200/80 px-3.5 py-1 text-[11px] font-mono font-black tracking-wider text-[#D9232A] uppercase">
                  NAVRATNA {leader.num}
                </span>
              </div>

              {/* Two-Tone Name Heading: First Name dark, Last Name in Red */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                {leader.firstName}{" "}
                <span className="text-[#D9232A]">{leader.lastName}</span>
              </h1>

              {/* Designation flanked with red lines */}
              <div className="mt-2 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-5 h-0.5 bg-[#D9232A] rounded-full" />
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  {leader.role}
                </p>
                <span className="w-5 h-0.5 bg-[#D9232A] rounded-full" />
              </div>

              {/* Experience Badge */}
              {leader.experience && (
                <div className="mt-3.5 inline-flex items-center gap-2.5 rounded-2xl bg-[#fcedeb] border border-rose-100/90 px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white text-[#D9232A] shadow-2xs">
                    <Briefcase className="h-3.5 w-3.5 stroke-[2.2]" />
                  </div>
                  <span className="font-bold text-slate-900">
                    {leader.experience}
                  </span>
                </div>
              )}

              {/* Short Summary */}
              <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                {leader.summary}
              </p>

              {/* Blue LinkedIn Button */}
              {leader.linkedin ? (
                <div className="mt-5 flex items-center justify-center lg:justify-start">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#004182] transition shadow-md shadow-[#0A66C2]/20"
                  >
                    <Linkedin className="h-4 w-4 fill-white" />
                    <span>Connect on LinkedIn</span>
                    <span className="text-xs ml-1">→</span>
                  </a>
                </div>
              ) : (
                <div className="mt-5 flex items-center justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-rose-700 transition shadow-md shadow-rose-600/20"
                  >
                    <span>Connect With VEVRA</span>
                    <span className="text-xs ml-1">→</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Col 3: 4 Stacked Pillar Icons with Text on the Right */}
            <div className="lg:col-span-3 flex flex-col justify-center gap-4 sm:gap-5 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-6">
              {leader.heroPillars?.map((pillar, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3.5 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 border border-amber-200/80 text-amber-600 shadow-2xs group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                    <pillar.icon className="h-4 w-4 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN EXECUTIVE PROFILE CARD (3-Column Content Layout + Competencies + Timeline + Actions)
         ========================================================================= */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-12 shadow-sm space-y-10">

            {/* TOP 3-COLUMN CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

              {/* COLUMN 1: Executive Profile Bio & Paragraphs (~45% / 5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-4 h-0.5 bg-[#D9232A]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D9232A]">
                      EXECUTIVE PROFILE
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-4 tracking-tight">
                    About {leader.name}
                  </h2>

                  <div className="space-y-3.5 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    <p className="font-semibold text-slate-800">
                      {leader.summary}
                    </p>

                    {leader.extendedBio?.map((para, pIdx) => (
                      <p key={pIdx}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Specialized: Chairperson 3 Impact Pillars */}
                  {leader.pillars && (
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#1E3A8A] block">
                        3 Foundational Impact Pillars:
                      </span>
                      {leader.pillars.map((pil, pilIdx) => (
                        <div key={pilIdx} className="rounded-xl bg-indigo-50/50 border border-indigo-100/80 p-3 text-xs">
                          <span className="font-bold text-slate-900">• {pil.title}:</span>{" "}
                          <span className="text-slate-600">{pil.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Specialized: Operations Oversight Verticals */}
                  {leader.oversightVerticals && (
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block mb-2.5">
                        Operations Oversight (6 Packaging Verticals):
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {leader.oversightVerticals.map((vert, vIdx) => (
                          <div key={vIdx} className="rounded-lg bg-emerald-50/50 border border-emerald-100 px-3 py-1.5 font-bold text-slate-800 flex items-center gap-1.5">
                            <span className="text-emerald-700 font-bold">•</span>
                            <span>{vert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specialized: Key Activities Checklist */}
                  {leader.keyActivities && (
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#D9232A] block mb-2.5">
                        Key Responsibilities & Activities:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {leader.keyActivities.map((act, actIdx) => (
                          <div key={actIdx} className="rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 font-medium text-slate-800 flex items-center gap-1.5">
                            <span className="text-[#D9232A] font-bold">✓</span>
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* COLUMN 2: 4 Stacked Soft Blue Focus Cards (~30% / 4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-center gap-3.5">
                {leader.focusCards?.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-2xl bg-[#f8f9fc] border border-slate-100/90 p-4 sm:p-4.5 flex items-center gap-4 shadow-2xs hover:bg-slate-100/70 transition-colors"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fde8e8] text-[#D9232A] border border-rose-100">
                      <card.icon className="h-5 w-5 stroke-[1.9]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-850 leading-snug">
                      {card.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* COLUMN 3: Soft Pink Leadership Quote Card (~25% / 3 cols) */}
              <div className="lg:col-span-3 flex flex-col">
                <div className="rounded-3xl bg-gradient-to-b from-[#fff5f5] to-[#fef2f2] border border-rose-100/90 p-6 sm:p-7 flex flex-col justify-between h-full shadow-2xs relative overflow-hidden">
                  {/* Subtle decorative background watermark */}
                  <div className="absolute -bottom-4 -right-2 font-serif text-8xl font-black text-rose-100/60 select-none pointer-events-none">
                    ”
                  </div>

                  <div>
                    <span className="text-3xl font-serif font-black text-[#D9232A] leading-none block select-none mb-3">
                      “
                    </span>
                    <p
                      style={{ fontFamily: "'Caveat', cursive" }}
                      className="text-2xl sm:text-[1.75rem] lg:text-[2rem] font-bold text-slate-900 leading-[1.25] tracking-wide"
                    >
                      "{leader.quote}"
                    </p>
                    <div className="w-12 h-0.5 bg-[#D9232A] mt-5 rounded-full" />
                  </div>

                  <div className="mt-8 pt-4 border-t border-rose-200/70 relative z-10">
                    <p className="text-xs font-black text-[#D9232A] uppercase tracking-wider">
                      — {leader.name.toUpperCase()}
                    </p>
                    <p className="text-[11px] font-bold text-slate-600 mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* CORE COMPETENCIES & KEY FOCUS AREAS */}
            <div className="pt-6 border-t border-slate-100">
              <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-400 block mb-3">
                CORE COMPETENCIES &amp; KEY FOCUS AREAS
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {leader.keyTags?.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                      tIdx === 0
                        ? "border border-[#D9232A] text-[#D9232A] bg-rose-50/40 font-bold shadow-2xs"
                        : "border border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* PROFESSIONAL JOURNEY TIMELINE (Connected Horizontal 3-Step Milestone) */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D9232A]">
                  PROFESSIONAL JOURNEY
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {leader.careerJourney?.map((step, sIdx) => (
                  <div key={sIdx} className="relative flex items-start gap-3.5">
                    {/* Node marker */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                          sIdx === 0
                            ? "border-slate-400 bg-white text-slate-500"
                            : sIdx === 1
                            ? "border-[#D9232A] bg-[#D9232A] text-white"
                            : "border-[#D9232A] bg-[#D9232A] text-white ring-4 ring-rose-100"
                        }`}
                      >
                        {sIdx === 0 ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>
                      {/* Mobile vertical line */}
                      {sIdx < leader.careerJourney.length - 1 && (
                        <div className="w-0.5 h-10 bg-slate-200 md:hidden mt-2" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                        {step.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-500 font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Desktop horizontal connector line between nodes */}
                    {sIdx < leader.careerJourney.length - 1 && (
                      <div className="hidden md:block absolute top-3 left-[calc(100%-20px)] w-full h-0.5 bg-slate-200 -z-0" />
                    )}
                    {sIdx === leader.careerJourney.length - 1 && (
                      <span className="hidden md:block absolute top-1.5 -right-2 text-[#D9232A] font-bold text-sm">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BAR (Back Button + Connect Button) */}
            <div className="rounded-2xl bg-[#fff5f5] border border-rose-100/90 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={onBack}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#D9232A] hover:text-[#D9232A] transition shadow-2xs"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Leaders</span>
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-rose-700 transition shadow-sm"
              >
                <span>Connect With Leadership Team</span>
                <span className="text-xs ml-1">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPLORE OTHER NAVRATNAS SECTION (Exact Match with Image 1 Mockup)
         ========================================================================= */}
      <section className="bg-transparent py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9232A] bg-white px-4 py-1 text-[#D9232A] text-xs font-bold uppercase tracking-[0.18em] shadow-sm mb-2.5">
              <Gem className="h-3.5 w-3.5 fill-[#D9232A]" />
              <span>THE NAVRATNA COUNCIL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore Other <span className="text-[#D9232A]">Navratnas</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {otherLeaders.slice(0, 4).map((other) => (
              <div
                key={other.num}
                onClick={() => onSelectOther(other)}
                className="group rounded-3xl border border-slate-200/90 bg-white p-6 hover:shadow-xl hover:border-rose-200 transition-all duration-300 cursor-pointer text-center flex flex-col justify-between items-center"
              >
                <div>
                  {/* Portrait with rounded fluid top shape & arch accent */}
                  <div className="relative mb-4 flex justify-center items-center">
                    {/* Soft colored fluid blob */}
                    <div className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-tr from-rose-100/40 via-slate-100/60 to-rose-100/30 blur-[2px] transform rotate-3 pointer-events-none opacity-80" />

                    {/* Faint Glassy Translucent Red Corner Arch Accent */}
                    <div className="absolute -top-1.5 -right-1.5 w-10 h-10 border-t-[2.5px] border-r-[2.5px] border-[#D9232A]/35 bg-gradient-to-bl from-rose-500/10 via-transparent to-transparent backdrop-blur-[2px] rounded-tr-[1.2rem] pointer-events-none z-20" />

                    {/* Photo container */}
                    <div className="relative w-28 h-32 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-slate-50 z-10">
                      {other.image ? (
                        <img
                          src={other.image}
                          alt={other.name}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                          <User className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-black text-[#D9232A] uppercase tracking-wider">
                    NAVRATNA {other.num}
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-950 mt-1">
                    {other.name}
                  </h4>
                  <p className="text-xs font-bold text-[#D9232A] mt-0.5">
                    {other.role}
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 group-hover:text-[#D9232A] transition">
                  <span>View Profile</span>
                  <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<(typeof NAVRATNAS_PEOPLE)[number] | null>(null);

  const handleSelectLeader = (person: (typeof NAVRATNAS_PEOPLE)[number]) => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    setSelectedLeader(person);
  };

  const handleBackToOverview = () => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    setSelectedLeader(null);
  };

  if (selectedLeader) {
    return (
      <SiteLayout key={`leader-detail-shell-${selectedLeader.num}`}>
        <LeaderProfileDetailView
          key={selectedLeader.num}
          leader={selectedLeader}
          onBack={handleBackToOverview}
          onSelectOther={handleSelectLeader}
        />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout key="leadership-overview-shell">
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
                    "Engineering excellence combined with disciplined execution delivers long-term sustainable supply-chain superiority."
                  </p>
                </div>
              </div>

              {/* 3 Metrics Bottom */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3.5 text-center">
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">100+</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Years Cumulative Exp.</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">4</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Manufacturing Hubs</span>
                </div>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-950 block leading-none">Zero</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Defect Philosophy</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. EXECUTIVE GOVERNANCE & KEY LEADERSHIP SECTION (Exact Match to Ref Mockup)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-16 sm:py-20 border-b border-slate-200/70">
        {/* Soft Ambient Corner Glows */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-rose-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-[#D9232A] rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                EXECUTIVE GOVERNANCE
              </span>
              <span className="w-8 h-0.5 bg-[#D9232A] rounded-full" />
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-[#0A2540] tracking-tight leading-tight">
              Foundational Vision &amp; <span className="text-[#D9232A]">Operational Leadership</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
              Our leadership drives strategic direction, operational excellence, and a people-first culture to build a stronger, more sustainable future.
            </p>
          </div>

          {/* Two Prominent Horizontal Board Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* CARD 1: Ashish Gawhane (CEO & MD) */}
              <div
                onClick={() => NAVRATNAS_PEOPLE[0] && handleSelectLeader(NAVRATNAS_PEOPLE[0])}
                className="group rounded-3xl border border-slate-200/70 bg-white/95 backdrop-blur-sm p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-rose-200/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer flex flex-col sm:flex-row items-center gap-6 lg:gap-7"
              >
                {/* Big Faint Watermark Number "01" */}
                <div className="absolute -top-6 -left-2 text-[6.5rem] sm:text-[8rem] font-black text-rose-100/30 select-none pointer-events-none leading-none z-0">
                  01
                </div>

                {/* Left Portrait Image with Faint Glassy Transparent Accent Frame */}
                <div className="relative w-full sm:w-[210px] md:w-[230px] lg:w-[245px] shrink-0 z-10 flex justify-center">
                  <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.7] max-w-[260px]">
                    {/* Faint Glassy Ambient Glow */}
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-200/25 via-white/50 to-rose-100/20 blur-sm pointer-events-none opacity-80" />

                    {/* Top-Right Faint Glassy Translucent Red Curved Arch */}
                    <div className="absolute -top-2.5 -right-2.5 w-16 h-28 border-t-[3.5px] border-r-[3.5px] border-[#D9232A]/35 bg-gradient-to-bl from-rose-500/10 via-transparent to-transparent backdrop-blur-[2px] rounded-tr-[2.2rem] pointer-events-none z-20" />
                    
                    {/* Bottom-Left Faint Glassy Red Accent */}
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-tr from-[#D9232A]/20 to-rose-300/10 border-b-2 border-l-2 border-[#D9232A]/30 backdrop-blur-sm rounded-bl-2xl rounded-tr-lg -z-0 pointer-events-none" />

                    {/* Photo Container */}
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-50/90 group-hover:scale-[1.02] transition-transform duration-300 z-10">
                      <img
                        src={ceoImg}
                        alt="Ashish Gawhane - CEO & MD"
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0 text-left flex flex-col justify-between py-1 relative z-10 w-full">
                  <div>
                    {/* Top Pill Badge */}
                    <div className="inline-block mb-1.5">
                      <span className="rounded-full bg-rose-50/80 border border-rose-200/60 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#D9232A]">
                        CHIEF – NAVRATNA 01
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl sm:text-[1.65rem] font-black text-[#0A2540] tracking-tight leading-tight">
                      Ashish Gawhane
                    </h3>

                    {/* Role */}
                    <p className="text-xs sm:text-sm font-bold text-[#D9232A] mt-0.5">
                      CEO &amp; MD
                    </p>

                    {/* Red Dash */}
                    <div className="w-8 h-0.5 bg-[#D9232A] my-2.5 rounded-full" />

                    {/* Two Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 my-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50/70 border border-rose-100/80 text-[#D9232A]">
                          <Briefcase className="h-4 w-4 stroke-[2]" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-black text-slate-900 block leading-none">28+</span>
                          <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">Years Experience</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50/70 border border-rose-100/80 text-[#D9232A]">
                          <Award className="h-4 w-4 stroke-[2]" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-black text-slate-900 block leading-none">10M+</span>
                          <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">Products Impacted</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal mt-2">
                      Leading Vevra's vision, growth strategy and global partnerships for innovative and sustainable packaging solutions.
                    </p>
                  </div>
                </div>

              </div>

              {/* CARD 2: Tanushree K (Chairperson) */}
              <div
                onClick={() => NAVRATNAS_PEOPLE[1] && handleSelectLeader(NAVRATNAS_PEOPLE[1])}
                className="group rounded-3xl border border-slate-200/70 bg-white/95 backdrop-blur-sm p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-blue-200/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer flex flex-col sm:flex-row items-center gap-6 lg:gap-7"
              >
                {/* Big Faint Watermark Number "02" */}
                <div className="absolute -top-6 -left-2 text-[6.5rem] sm:text-[8rem] font-black text-blue-100/30 select-none pointer-events-none leading-none z-0">
                  02
                </div>

                {/* Left Portrait Image with Faint Glassy Transparent Accent Frame */}
                <div className="relative w-full sm:w-[210px] md:w-[230px] lg:w-[245px] shrink-0 z-10 flex justify-center">
                  <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.7] max-w-[260px]">
                    {/* Faint Glassy Ambient Glow */}
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-200/25 via-white/50 to-blue-100/20 blur-sm pointer-events-none opacity-80" />

                    {/* Top-Right Faint Glassy Translucent Red Curved Arch */}
                    <div className="absolute -top-2.5 -right-2.5 w-16 h-28 border-t-[3.5px] border-r-[3.5px] border-rose-500/35 bg-gradient-to-bl from-rose-500/10 via-transparent to-transparent backdrop-blur-[2px] rounded-tr-[2.2rem] pointer-events-none z-20" />
                    
                    {/* Bottom-Left Faint Glassy Blue Accent */}
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-tr from-[#1E3A8A]/20 to-blue-300/10 border-b-2 border-l-2 border-[#1E3A8A]/30 backdrop-blur-sm rounded-bl-2xl rounded-tr-lg -z-0 pointer-events-none" />

                    {/* Photo Container */}
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-50/90 group-hover:scale-[1.02] transition-transform duration-300 z-10">
                      <img
                        src={tanushreeImg}
                        alt="Tanushree K - Chairperson"
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0 text-left flex flex-col justify-between py-1 relative z-10 w-full">
                  <div>
                    {/* Top Pill Badge */}
                    <div className="inline-block mb-1.5">
                      <span className="rounded-full bg-blue-50/80 border border-blue-200/60 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#2563EB]">
                        CHIEF – NAVRATNA 02
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl sm:text-[1.65rem] font-black text-[#0A2540] tracking-tight leading-tight">
                      Tanushree K
                    </h3>

                    {/* Role */}
                    <p className="text-xs sm:text-sm font-bold text-[#D9232A] mt-0.5">
                      Chairperson
                    </p>

                    {/* Red Dash */}
                    <div className="w-8 h-0.5 bg-[#D9232A] my-2.5 rounded-full" />

                    {/* Two Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 my-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50/70 border border-rose-100/80 text-[#D9232A]">
                          <Briefcase className="h-4 w-4 stroke-[2]" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-black text-slate-900 block leading-none">25+</span>
                          <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">Years Experience</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50/70 border border-rose-100/80 text-[#D9232A]">
                          <Users className="h-4 w-4 stroke-[2]" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-black text-slate-900 block leading-none">1,500+</span>
                          <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5">People Mentored</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal mt-2">
                      Driving people development, organizational excellence and a future-ready culture for Vevra's continued growth.
                    </p>
                  </div>
                </div>

              </div>

            </div>

        </div>
      </section>

      {/* =========================================================================
          4. OUR “NAVRATNAS” SECTION (Exact Match with Reference Design)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/25 via-white to-rose-50/30 py-16 sm:py-24 border-b border-slate-100">
        {/* Soft Side Ambient Glows */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-rose-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header: Pill, Title, Subtitle & Red Diamond Divider */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9232A] bg-white px-5 py-1 text-[#D9232A] text-xs font-bold uppercase tracking-[0.18em] shadow-sm mb-3">
              <Gem className="h-3.5 w-3.5 fill-[#D9232A]" />
              <span>THE 9 NAVRATNAS OF VEVRA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-tight">
              <span className="font-serif italic font-bold text-slate-900 mr-2">Our</span>
              <span className="text-[#D9232A]">“Navratnas”</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              A team of dynamic leaders driving innovation, operational excellence and sustainable growth across our business.
            </p>

            {/* Red Diamond Center Divider */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-rose-300/80" />
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-[#D9232A]">
                <Gem className="h-3.5 w-3.5 fill-[#D9232A]" />
              </div>
              <span className="h-px w-12 bg-rose-300/80" />
            </div>
          </div>

          {/* Cards Grid: 9 Navratna Leaders Cards with Reddish Corner Border & Full Details */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {NAVRATNAS_PEOPLE.map((person) => (
              <div
                key={person.num}
                onClick={() => handleSelectLeader(person)}
                className={`group flex flex-col justify-between rounded-[2rem] border bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer ${
                  person.isPlaceholder ? "border-dashed border-slate-300 bg-slate-50/40" : "border-slate-200/90"
                }`}
              >
                <div>
                  {/* Top Left Badge & Top Right LinkedIn */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#fde8e8] border border-rose-200/80 px-3.5 py-0.5 text-[10.5px] font-black tracking-wider text-[#D9232A] uppercase">
                      NAVRATNA {person.num}
                    </span>
                    {person.linkedin ? (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${person.name} on LinkedIn`}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-85 shadow-sm transition"
                      >
                        <Linkedin className="h-3 w-3 fill-white" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-400">VEVRA Pillar</span>
                    )}
                  </div>

                  {/* Centered Picture with Soft Ambient Blob & Reddish Corner Accent Border */}
                  <div className="my-6 relative flex justify-center items-center">
                    {/* Soft Warm/Rose Fluid Blob behind picture */}
                    <div className="absolute w-44 h-48 sm:w-48 sm:h-52 rounded-[2.5rem] bg-gradient-to-tr from-rose-100/40 via-slate-100/60 to-rose-100/30 blur-[2px] transform rotate-6 scale-105 pointer-events-none opacity-80" />

                    {/* Relative Box holding Photo + Faint Glassy Corner Border */}
                    <div className="relative">
                      {/* Faint Glassy Translucent Red Corner Accent Border */}
                      <div className="absolute -top-2 -right-2 w-14 h-14 border-t-[3px] border-r-[3px] border-[#D9232A]/35 bg-gradient-to-bl from-rose-500/10 via-transparent to-transparent backdrop-blur-[2px] rounded-tr-[1.8rem] pointer-events-none z-20" />

                      {/* Photo Portrait Container with Pure Gray Border & Shadow */}
                      <div
                        className={`relative w-40 h-44 sm:w-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] z-10 ${person.photoBg} ${
                          person.isPlaceholder ? "border-dashed border-slate-300 text-slate-400" : ""
                        }`}
                      >
                        {person.image ? (
                          <img
                            src={person.image}
                            alt={person.name}
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-3 text-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200/80 text-slate-500 mb-1.5">
                              <User className="h-6 w-6" />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                              Pillar {person.num}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Leader Name (Centered) */}
                  <div className="text-center">
                    <h3 className={`text-xl font-black tracking-tight leading-tight ${person.isPlaceholder ? "text-slate-700" : "text-slate-900"}`}>
                      {person.name}
                    </h3>

                    {/* Role / Designation flanked with red dash lines */}
                    <div className="mt-1.5 flex items-center justify-center gap-2">
                      <span className="w-4 h-0.5 bg-[#D9232A] rounded-full" />
                      <p className={`text-xs sm:text-[13px] font-bold ${person.isPlaceholder ? "text-slate-500" : "text-[#D9232A]"}`}>
                        {person.role}
                      </p>
                      <span className="w-4 h-0.5 bg-[#D9232A] rounded-full" />
                    </div>

                    {/* Years of Experience Badge with Briefcase Icon */}
                    {person.experience && (
                      <div className="mt-2.5 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#fcedeb] border border-rose-100 px-3.5 py-1 text-[11.5px] font-semibold text-slate-800 shadow-xs">
                        <Briefcase className="h-3.5 w-3.5 text-[#D9232A] fill-[#D9232A]/20 shrink-0" />
                        <span>{person.experience}</span>
                      </div>
                    )}
                  </div>

                  {/* Information in Short */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 text-center line-clamp-3 max-w-[280px] mx-auto font-normal">
                    {person.summary}
                  </p>
                </div>

                {/* Card Footer: Pill-Shaped Action Button */}
                <div className="mt-6 pt-2 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#D9232A] bg-white px-5 py-1.5 text-xs font-bold text-[#D9232A] group-hover:bg-[#D9232A] group-hover:text-white transition-all shadow-xs">
                    <span>{person.isPlaceholder ? "View Pillar Details" : "View Full Profile"}</span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
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
                    Our Navratnas inspire us to dream bigger, work smarter and create a lasting impact across customers, partners, and society.
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
