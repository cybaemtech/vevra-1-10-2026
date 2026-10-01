import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Coins,
  FileCheck,
  FileText,
  FlaskConical,
  Globe,
  Globe2,
  Info,
  Leaf,
  Layers,
  Recycle,
  RotateCcw,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  TreePine,
  TrendingDown,
  Users,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import sustainableHeaderImg from "@/assets/services/onsite/d614f3e2-052f-4f99-8486-a508bfc3389a.png";
import sustainabilityGlobe from "@/assets/capabilities/sustainability-globe.png";
import vevraLogo from "@/assets/vevra-logo.png";

export function SustainablePackagingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-22 text-slate-900 border-b border-slate-100">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="text-left max-w-[840px]">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
            <span>—</span>
            <span>OUR APPROACH</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-brand-blue-dark">
            Design for Sustainable Packaging
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            Packaging designed around product protection, cost, compliance, responsible sourcing, resource optimization and end-of-life recovery.
          </p>
        </div>

        {/* 8 CRITERIA CIRCULAR INFOGRAPHIC (EXACT THEME AND UI MATCHING IMG 2) */}
        <div className="mt-10 sm:mt-14 relative w-full flex flex-col items-center select-none">
          
          <div className="w-full max-w-[1080px] aspect-[1080/840] relative">
            <svg
              viewBox="0 0 1080 840"
              className="w-full h-full drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Center Disc Glow & Shadows */}
                <filter id="centerDiscShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#0284c7" floodOpacity="0.10" />
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.06" />
                </filter>
                
                {/* 8 Custom Node Glowing Halo Filters */}
                <filter id="glow-01" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0284c7" floodOpacity="0.45" />
                </filter>
                <filter id="glow-02" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#16a34a" floodOpacity="0.45" />
                </filter>
                <filter id="glow-03" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#eab308" floodOpacity="0.45" />
                </filter>
                <filter id="glow-04" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0284c7" floodOpacity="0.45" />
                </filter>
                <filter id="glow-05" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0d9488" floodOpacity="0.45" />
                </filter>
                <filter id="glow-06" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#84cc16" floodOpacity="0.45" />
                </filter>
                <filter id="glow-07" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#ef4444" floodOpacity="0.45" />
                </filter>
                <filter id="glow-08" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#475569" floodOpacity="0.45" />
                </filter>

                {/* Soft Card Shadow */}
                <filter id="cardSoftShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.07" />
                </filter>

                {/* Gradients for Nodes */}
                <linearGradient id="grad-01" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="grad-02" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
                <linearGradient id="grad-03" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <linearGradient id="grad-04" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="grad-05" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
                <linearGradient id="grad-06" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a3e635" />
                  <stop offset="100%" stopColor="#65a30d" />
                </linearGradient>
                <linearGradient id="grad-07" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <linearGradient id="grad-08" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>

                {/* Circular Globe Clip Path */}
                <clipPath id="globeCircleClip">
                  <circle cx="540" cy="355" r="95" />
                </clipPath>
              </defs>

              {/* 1. Concentric Orbit Dashed Rings */}
              <circle cx="540" cy="420" r="265" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 5" fill="none" opacity="0.6" />
              <circle cx="540" cy="420" r="248" stroke="#e2e8f0" strokeWidth="1.2" fill="none" opacity="0.8" />

              {/* 2. Intermediate Colored Connection Dots along the orbit ring */}
              <circle cx="438.6" cy="175.2" r="4.5" fill="#3b82f6" />
              <circle cx="641.4" cy="175.2" r="4.5" fill="#10b981" />
              <circle cx="784.8" cy="318.6" r="4.5" fill="#84cc16" />
              <circle cx="784.8" cy="521.4" r="4.5" fill="#0284c7" />
              <circle cx="641.4" cy="664.8" r="4.5" fill="#0d9488" />
              <circle cx="438.6" cy="664.8" r="4.5" fill="#84cc16" />
              <circle cx="295.2" cy="521.4" r="4.5" fill="#ef4444" />
              <circle cx="295.2" cy="318.6" r="4.5" fill="#64748b" />

              {/* 3. Center Multi-Layer White Disc */}
              <circle cx="540" cy="420" r="175" fill="#ffffff" filter="url(#centerDiscShadow)" />
              <circle cx="540" cy="420" r="175" stroke="#f1f5f9" strokeWidth="2.5" fill="none" />
              <circle cx="540" cy="420" r="165" stroke="#f8fafc" strokeWidth="1.5" fill="none" />

              {/* 4. Center Photorealistic 3D Globe with Green Recycle Arrows */}
              <image
                href={sustainabilityGlobe}
                x="425"
                y="240"
                width="230"
                height="230"
                preserveAspectRatio="xMidYMid slice"
                className="drop-shadow-md"
              />

              {/* Center Disc Typography */}
              <text x="540" y="495" textAnchor="middle" fontSize="22" fontWeight="900" fill="#0b2e59" fontFamily="system-ui, -apple-system, sans-serif">
                Sustainable
              </text>
              <text x="540" y="522" textAnchor="middle" fontSize="22" fontWeight="900" fill="#0b2e59" fontFamily="system-ui, -apple-system, sans-serif">
                Packaging
              </text>
              
              <text x="540" y="556" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#64748b" letterSpacing="1.4" fontFamily="system-ui, -apple-system, sans-serif">
                BALANCING TODAY'S NEEDS
              </text>
              <text x="540" y="570" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#64748b" letterSpacing="1.4" fontFamily="system-ui, -apple-system, sans-serif">
                FOR A BETTER TOMORROW
              </text>

              {/* ========================================================================= */}
              {/* THE 8 GLOWING CRITERIA NODES & TINTED CALLOUT CARDS */}
              {/* ========================================================================= */}

              {/* --- 01: TECHNICAL PERFORMANCE (12:00 Top - Blue) --- */}
              <g transform="translate(540, 155)">
                {/* Glow & Circle */}
                <circle cx="0" cy="0" r="38" fill="url(#grad-01)" filter="url(#glow-01)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                {/* Number Pill */}
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#0284c7" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">01</text>
                </g>
                {/* Two Cogs / Gears Icon */}
                <g transform="translate(-16, -16) scale(1.3)" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="4" fill="#ffffff" />
                  <path d="M 8 1 L 8 4 M 8 12 L 8 15 M 1 8 L 4 8 M 12 8 L 15 8" />
                  <circle cx="17" cy="17" r="3" fill="#ffffff" />
                  <path d="M 17 11 L 17 13 M 17 21 L 17 23 M 11 17 L 13 17 M 21 17 L 23 17" />
                </g>
              </g>
              {/* Callout Card 01 */}
              <g transform="translate(595, 62)" filter="url(#cardSoftShadow)">
                <rect width="235" height="76" rx="18" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.2" />
                <text x="20" y="28" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Technical Performance</text>
                <text x="20" y="48" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Does the package</text>
                <text x="20" y="64" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">protect the product?</text>
              </g>

              {/* --- 02: COST (1:30 Top-Right - Green) --- */}
              <g transform="translate(727, 233)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-02)" filter="url(#glow-02)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#16a34a" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#16a34a" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">02</text>
                </g>
                {/* Coins Stack Icon */}
                <g transform="translate(-14, -14) scale(1.15)">
                  <ellipse cx="12" cy="7" rx="10" ry="4" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                  <ellipse cx="12" cy="14" rx="10" ry="4" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                  <ellipse cx="12" cy="21" rx="10" ry="4" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                </g>
              </g>
              {/* Callout Card 02 */}
              <g transform="translate(790, 190)" filter="url(#cardSoftShadow)">
                <rect width="200" height="76" rx="18" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.2" />
                <text x="20" y="28" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Cost</text>
                <text x="20" y="48" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Is the design</text>
                <text x="20" y="64" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">cost-effective?</text>
              </g>

              {/* --- 03: INFORMATION (3:00 Right - Yellow/Amber) --- */}
              <g transform="translate(805, 420)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-03)" filter="url(#glow-03)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#eab308" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#eab308" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">03</text>
                </g>
                {/* Info i Icon */}
                <g transform="translate(-15, -15)">
                  <circle cx="15" cy="15" r="13" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="15" cy="10" r="1.8" fill="#ffffff" />
                  <line x1="15" y1="14" x2="15" y2="21" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />
                </g>
              </g>
              {/* Callout Card 03 */}
              <g transform="translate(870, 375)" filter="url(#cardSoftShadow)">
                <rect width="210" height="84" rx="18" fill="#fefce8" stroke="#fef08a" strokeWidth="1.2" />
                <text x="20" y="26" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Information</text>
                <text x="20" y="44" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Does the design</text>
                <text x="20" y="58" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">communicate</text>
                <text x="20" y="72" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">effectively?</text>
              </g>

              {/* --- 04: REGULATORY COMPLIANCE (4:30 Bottom-Right - Sky Blue) --- */}
              <g transform="translate(727, 607)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-04)" filter="url(#glow-04)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#0284c7" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">04</text>
                </g>
                {/* Document Icon */}
                <g transform="translate(-13, -15)">
                  <rect x="2" y="2" width="22" height="27" rx="3" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                  <line x1="7" y1="8" x2="19" y2="8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <line x1="7" y1="14" x2="19" y2="14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <line x1="7" y1="20" x2="14" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </g>
              </g>
              {/* Callout Card 04 */}
              <g transform="translate(790, 560)" filter="url(#cardSoftShadow)">
                <rect width="235" height="76" rx="18" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.2" />
                <text x="20" y="28" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Regulatory Compliance</text>
                <text x="20" y="48" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Does the design meet</text>
                <text x="20" y="64" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">or exceed regulations?</text>
              </g>

              {/* --- 05: RESOURCE OPTIMIZATION (6:00 Bottom - Teal) --- */}
              <g transform="translate(540, 685)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-05)" filter="url(#glow-05)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#0d9488" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">05</text>
                </g>
                {/* 4 Bar Charts Ascending */}
                <g transform="translate(-15, -12)">
                  <rect x="2" y="14" width="5" height="12" rx="1" fill="#ffffff" />
                  <rect x="9" y="8" width="5" height="18" rx="1" fill="#ffffff" />
                  <rect x="16" y="2" width="5" height="24" rx="1" fill="#ffffff" />
                  <rect x="23" y="10" width="5" height="16" rx="1" fill="#ffffff" />
                </g>
              </g>
              {/* Callout Card 05 */}
              <g transform="translate(420, 745)" filter="url(#cardSoftShadow)">
                <rect width="240" height="76" rx="18" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1.2" />
                <text x="120" y="28" textAnchor="middle" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Resource Optimization</text>
                <text x="120" y="48" textAnchor="middle" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Does the design optimize</text>
                <text x="120" y="64" textAnchor="middle" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">materials and energy?</text>
              </g>

              {/* --- 06: RESPONSIBLE SOURCING (7:30 Bottom-Left - Lime Green) --- */}
              <g transform="translate(353, 607)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-06)" filter="url(#glow-06)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#84cc16" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#84cc16" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">06</text>
                </g>
                {/* Leaf Icon with Vein */}
                <g transform="translate(-16, -16) scale(1.3)" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4 20 C 4 9, 15 4, 20 4 C 20 9, 15 20, 4 20 Z" fill="#ffffff" fillOpacity="0.2" />
                  <line x1="4" y1="20" x2="15" y2="9" />
                </g>
              </g>
              {/* Callout Card 06 */}
              <g transform="translate(60, 560)" filter="url(#cardSoftShadow)">
                <rect width="235" height="84" rx="18" fill="#f7fee7" stroke="#d9f99d" strokeWidth="1.2" />
                <text x="20" y="26" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Responsible Sourcing</text>
                <text x="20" y="44" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Has the material been</text>
                <text x="20" y="58" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">produced and delivered</text>
                <text x="20" y="72" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">responsibly?</text>
              </g>

              {/* --- 07: MATERIAL HEALTH (9:00 Left - Coral Red) --- */}
              <g transform="translate(275, 420)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-07)" filter="url(#glow-07)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#ef4444" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#ef4444" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">07</text>
                </g>
                {/* Laboratory Flask / Beaker Icon */}
                <g transform="translate(-14, -16) scale(1.2)" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 8 3 L 14 3 M 9 3 L 9 8 L 3 19 C 2.5 20, 3.5 21, 5 21 L 17 21 C 18.5 21, 19.5 20, 19 19 L 13 8 L 13 3" />
                  <path d="M 5 15 C 8 14, 14 16, 17 15" strokeWidth="1.5" />
                  <circle cx="11" cy="18" r="1" fill="#ffffff" />
                </g>
              </g>
              {/* Callout Card 07 */}
              <g transform="translate(5, 375)" filter="url(#cardSoftShadow)">
                <rect width="220" height="84" rx="18" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.2" />
                <text x="20" y="26" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Material Health</text>
                <text x="20" y="44" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Are all materials healthy</text>
                <text x="20" y="58" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">for people and the</text>
                <text x="20" y="72" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">environment?</text>
              </g>

              {/* --- 08: RESOURCE RECOVERY (10:30 Top-Left - Slate Charcoal) --- */}
              <g transform="translate(353, 233)">
                <circle cx="0" cy="0" r="38" fill="url(#grad-08)" filter="url(#glow-08)" />
                <circle cx="0" cy="0" r="38" stroke="#ffffff" strokeWidth="3" fill="none" />
                <g transform="translate(-18, -52)">
                  <rect width="36" height="22" rx="11" fill="#ffffff" stroke="#475569" strokeWidth="2" />
                  <text x="18" y="15.5" fill="#475569" fontSize="11.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">08</text>
                </g>
                {/* 3 Circular Arrows Recycle Icon */}
                <g transform="translate(-15, -15) scale(1.15)" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 6 12 A 8 8 0 0 1 20 8" />
                  <polyline points="20,4 20,8 16,8" />
                  <path d="M 20 14 A 8 8 0 0 1 12 22" />
                  <polyline points="16,22 12,22 12,18" />
                  <path d="M 8 20 A 8 8 0 0 1 6 12" />
                  <polyline points="4,16 6,12 10,14" />
                </g>
              </g>
              {/* Callout Card 08 */}
              <g transform="translate(80, 190)" filter="url(#cardSoftShadow)">
                <rect width="205" height="76" rx="18" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2" />
                <text x="20" y="28" fill="#0b2e59" fontSize="13.5" fontWeight="900" fontFamily="sans-serif">Resource Recovery</text>
                <text x="20" y="48" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">Where will the material</text>
                <text x="20" y="64" fill="#475569" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">go after use?</text>
              </g>

            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}

export function FourWaysWeCreateImpactSection() {
  const pillar01 = {
    num: "01",
    title: "REDUCE TOTAL COST",
    color: "red",
    items: [
      "Operational excellence",
      "Maximise cubic utilisation",
      "Improve quality & eliminate risk",
      "Product development",
      "Integration & standardisation",
      "Lowest cost supply chain solution",
    ],
  };

  const pillar02 = {
    num: "02",
    title: "IMPROVE QUALITY",
    color: "slate",
    items: [
      "Reduce product damage",
      "Reduce potential contamination",
      "Packaging testing",
      "Improve operator ergonomics",
      "Error proofing",
    ],
  };

  const pillar03 = {
    num: "03",
    title: "ELIMINATE WASTE",
    color: "slate",
    items: [
      "Reduce packaging waste and disposal",
      "Eliminate fumigation",
      "Reduce inventory pipeline",
      "End-to-end, one touch supply chain",
    ],
  };

  const pillar04 = {
    num: "04",
    title: "CREATE VALUE",
    color: "red",
    items: [
      "Supply chain packaging management systems",
      "Supply chain analysis, Six Sigma, black belt tools",
      "Packaging engineers",
      "VA/VE process",
      "PFEP compilation & audit",
    ],
  };

  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
      {/* Subtle Dot Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(#64748b 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#dc2626]">
            <span className="w-8 h-[2.5px] bg-[#dc2626] inline-block rounded-full" />
            <span>OUR IMPACT</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-[#0f1e40] leading-tight">
            Four Ways We <span className="text-[#dc2626]">Create Impact</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            End-to-end packaging optimization that delivers measurable business results.
          </p>
        </div>

        {/* Impact 2x2 Grid Layout with Center Wheel */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] xl:grid-cols-[1fr_460px_1fr] gap-x-10 xl:gap-x-14 gap-y-12 lg:gap-y-14 items-center">
          
          {/* TOP LEFT: 01 REDUCE TOTAL COST (Shifted slightly right) */}
          <div className="lg:row-start-1 lg:col-start-1 flex flex-col lg:pl-6 xl:pl-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#f87171] tracking-tight">
                {pillar01.num}
              </span>
              <div className="h-[2px] flex-1 max-w-[140px] sm:max-w-[200px] bg-[#fca5a5]" />
            </div>
            <h3 className="mt-2 text-sm sm:text-base font-black tracking-wide text-[#dc2626] uppercase">
              {pillar01.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pillar01.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-white shadow-2xs">
                    <svg className="w-2.5 h-2.5 text-white stroke-[3.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER WHEEL: Spans 2 Rows on Desktop */}
          <div className="lg:row-span-2 lg:col-start-2 flex justify-center items-center select-none py-2">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] xl:w-[420px] xl:h-[420px]">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="centerShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.16" />
                  </filter>
                  <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* 4 Segmented Quadrants with equal 8px crosshair gaps */}
                {/* Q01: Top-Left (Red #dc2626) */}
                <path
                  d="M 196 196 L 24 196 A 172 172 0 0 1 196 24 Z"
                  fill="#dc2626"
                />

                {/* Q02: Top-Right (Dark Charcoal #38424d) */}
                <path
                  d="M 204 196 L 204 24 A 172 172 0 0 1 376 196 Z"
                  fill="#38424d"
                />

                {/* Q03: Bottom-Left (Light Silver Gray #dde3ea) */}
                <path
                  d="M 196 204 L 196 376 A 172 172 0 0 1 24 204 Z"
                  fill="#dde3ea"
                />

                {/* Q04: Bottom-Right (Coral Red #ef4444) */}
                <path
                  d="M 204 204 L 376 204 A 172 172 0 0 1 204 376 Z"
                  fill="#ef4444"
                />

                {/* --- Quadrant 01 Content (Top-Left) --- */}
                <text x="120" y="92" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">
                  01
                </text>
                {/* Coins Icon inside Ring */}
                <g transform="translate(101, 115)">
                  <circle cx="19" cy="19" r="18" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.45" />
                  <g transform="translate(6, 6) scale(1.05)" stroke="#ffffff" strokeWidth="2.2" fill="none">
                    <ellipse cx="12" cy="6" rx="9" ry="3.5" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" />
                    <ellipse cx="12" cy="18" rx="9" ry="3.5" />
                  </g>
                </g>

                {/* --- Quadrant 02 Content (Top-Right) --- */}
                <text x="280" y="92" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">
                  02
                </text>
                {/* Shield Check Icon inside Ring */}
                <g transform="translate(261, 115)">
                  <circle cx="19" cy="19" r="18" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.45" />
                  <g transform="translate(7, 6) scale(1.0)" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 12 2 C 17 3, 21 6, 21 10 C 21 17, 16 21, 12 23 C 8 21, 3 17, 3 10 C 3 6, 7 3, 12 2 Z" />
                    <polyline points="8,12 11,15 16,9" />
                  </g>
                </g>

                {/* --- Quadrant 03 Content (Bottom-Left) --- */}
                <text x="120" y="272" fill="#38424d" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">
                  03
                </text>
                {/* Leaf Icon inside Ring */}
                <g transform="translate(101, 295)">
                  <circle cx="19" cy="19" r="18" fill="none" stroke="#38424d" strokeWidth="1.8" strokeOpacity="0.35" />
                  <g transform="translate(7, 6) scale(1.0)" stroke="#38424d" strokeWidth="2.2" fill="#38424d" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 3 21 C 3 9, 15 3, 21 3 C 21 11, 15 21, 3 21 Z" />
                    <line x1="3" y1="21" x2="14" y2="9" stroke="#dde3ea" strokeWidth="2" />
                  </g>
                </g>

                {/* --- Quadrant 04 Content (Bottom-Right) --- */}
                <text x="280" y="272" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">
                  04
                </text>
                {/* Bar Chart Icon inside Ring */}
                <g transform="translate(261, 295)">
                  <circle cx="19" cy="19" r="18" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.45" />
                  <g transform="translate(8, 7)" fill="#ffffff">
                    <rect x="2" y="14" width="4.5" height="8" rx="1.2" />
                    <rect x="9" y="8" width="4.5" height="14" rx="1.2" />
                    <rect x="16" y="2" width="4.5" height="20" rx="1.2" />
                  </g>
                </g>

                {/* CENTER WHITE CIRCLE */}
                <circle
                  cx="200"
                  cy="200"
                  r="62"
                  fill="#ffffff"
                  filter="url(#centerShadow)"
                  stroke="#ffffff"
                  strokeWidth="4"
                />

                {/* VEVRA Official Logo Image */}
                <image
                  href={vevraLogo}
                  x="146"
                  y="150"
                  width="108"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                />
              </svg>
            </div>
          </div>

          {/* TOP RIGHT: 02 IMPROVE QUALITY */}
          <div className="lg:row-start-1 lg:col-start-3 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#94a3b8] tracking-tight">
                {pillar02.num}
              </span>
              <div className="h-[2px] flex-1 max-w-[140px] sm:max-w-[200px] bg-[#cbd5e1]" />
            </div>
            <h3 className="mt-2 text-sm sm:text-base font-black tracking-wide text-[#38424d] uppercase">
              {pillar02.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pillar02.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#38424d] text-white shadow-2xs">
                    <svg className="w-2.5 h-2.5 text-white stroke-[3.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM LEFT: 03 ELIMINATE WASTE (Shifted slightly right) */}
          <div className="lg:row-start-2 lg:col-start-1 flex flex-col lg:pl-6 xl:pl-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#94a3b8] tracking-tight">
                {pillar03.num}
              </span>
              <div className="h-[2px] flex-1 max-w-[140px] sm:max-w-[200px] bg-[#cbd5e1]" />
            </div>
            <h3 className="mt-2 text-sm sm:text-base font-black tracking-wide text-[#38424d] uppercase">
              {pillar03.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pillar03.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#38424d] text-white shadow-2xs">
                    <svg className="w-2.5 h-2.5 text-white stroke-[3.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM RIGHT: 04 CREATE VALUE */}
          <div className="lg:row-start-2 lg:col-start-3 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#f87171] tracking-tight">
                {pillar04.num}
              </span>
              <div className="h-[2px] flex-1 max-w-[140px] sm:max-w-[200px] bg-[#fca5a5]" />
            </div>
            <h3 className="mt-2 text-sm sm:text-base font-black tracking-wide text-[#dc2626] uppercase">
              {pillar04.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pillar04.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-white shadow-2xs">
                    <svg className="w-2.5 h-2.5 text-white stroke-[3.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export function SustainablePackagingServicePage() {
  const horizontalBadges = [
    { label: "Reduced Environmental Impact", icon: Leaf },
    { label: "Efficient Use of Resources", icon: Coins },
    { label: "Safer Materials for People", icon: ShieldCheck },
    { label: "Compliant & Future Ready", icon: FileCheck },
    { label: "A More Sustainable Supply Chain", icon: Settings },
  ];

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-100/40 blur-2xl" />

        {/* Right side panoramic image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={sustainableHeaderImg}
            alt="Design for Sustainable Packaging by VEVRA"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            
            {/* Left Content */}
            <div className="max-w-[660px] z-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-brand">
                <span>—</span>
                <span>SUSTAINABLE APPROACH</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] text-brand-blue-dark">
                Design for <br />
                <span className="text-brand">Sustainable</span>{" "}
                <span className="text-brand-blue-dark">Packaging</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium max-w-[540px]">
                Packaging designed around product protection, cost, compliance, responsible sourcing, resource optimization and end-of-life recovery.
              </p>

              {/* Action Buttons */}
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
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 3 Value Pillars */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Leaf className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Sustainable Solutions
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      For a greener tomorrow
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Compliant Designs
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Global standards, local expertise
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                    <Settings className="h-5 w-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-black text-brand-blue-dark block">
                      Optimized Resources
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Less waste, more value
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Panel with Eco Slogans */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between items-end">
              <div className="lg:hidden w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={sustainableHeaderImg}
                  alt="Sustainable Packaging by VEVRA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Top Text Callouts */}
           

           
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUR WAYS WE CREATE IMPACT SECTION (BELOW HEADER) */}
      <FourWaysWeCreateImpactSection />

      {/* 3. DEDICATED 8 CRITERIA INFOGRAPHIC SECTION */}
      <SustainablePackagingSection />

      {/* 4. 5 HORIZONTAL VALUE BADGES BAR */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-10 border-b border-slate-100">
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {horizontalBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand-blue-dark shadow-2xs">
                    <Icon className="h-4.5 w-4.5 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-brand-blue-dark leading-tight">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM SUSTAINABILITY CTA BANNER (WHITE THEME WITH RED BUTTONS) */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-16 border-t border-slate-100">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40] tracking-tight">
            Let's Build a More Sustainable Future
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Partner with VEVRA for packaging optimization and sustainable engineering that delivers measurable business results.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20"
            >
              <span>GENERATE QUICK RFQ</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-[#dc2626] text-[#dc2626] font-bold text-xs sm:text-sm hover:bg-rose-50 transition-all shadow-sm"
            >
              <span>TALK TO OUR EXPERTS</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
