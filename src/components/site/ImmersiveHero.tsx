import { Link } from "@tanstack/react-router";
import headerVideo from "@/assets/home-header.mp4";

export function ImmersiveHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex items-center">
      {/* Right-side Video occupying ~65% width on desktop */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[68%] xl:w-[65%] h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source src={headerVideo} type="video/mp4" />
        </video>

        {/* Smooth horizontal gradient blend from left content area into video */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-72 xl:w-96 bg-gradient-to-r from-white via-white/90 lg:via-white/70 to-transparent" />
      </div>

      {/* Ambient Faint Red Glow on Top-Right Corner */}
      <div className="pointer-events-none absolute top-0 right-0 h-64 sm:h-72 lg:h-88 w-64 sm:w-72 lg:w-88 bg-gradient-to-bl from-red-600/18 via-red-500/6 to-transparent blur-3xl z-10" />

      {/* Top-Right Red Wedge Graphic Accent (Short corner fit) */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-44 sm:w-56 md:w-64 lg:w-72 xl:w-80 overflow-hidden drop-shadow-[-12px_12px_24px_rgba(217,35,42,0.22)]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="heroRedGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#991B1B" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="heroRedGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#D9232A" stopOpacity="0.75" />
            </linearGradient>
          </defs>
          <polygon points="15,0 100,0 100,85" fill="url(#heroRedGrad1)" />
          <polygon points="45,0 100,0 100,55" fill="url(#heroRedGrad2)" />
        </svg>
      </div>

      {/* Ambient Faint Red Glow on Left Side */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 lg:h-96 w-64 lg:w-96 bg-gradient-to-tr from-red-600/18 via-red-500/6 to-transparent blur-3xl z-0" />

      {/* Bottom-Left Red Wedge Graphic Accent with faint shadow and softer gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-44 sm:h-56 lg:h-72 w-44 sm:w-56 lg:w-72 overflow-hidden drop-shadow-[16px_-16px_32px_rgba(217,35,42,0.2)]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="heroRedGradLeft1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#991B1B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="heroRedGradLeft2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#D9232A" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          <polygon points="0,100 100,100 0,25" fill="url(#heroRedGradLeft1)" />
          <polygon points="0,100 65,100 0,55" fill="url(#heroRedGradLeft2)" />
        </svg>
      </div>

      {/* Left-side Content Area (shifted further upward) */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-16 pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20">
        <div className="max-w-xl lg:max-w-[540px] xl:max-w-[620px] -mt-6 sm:-mt-12 lg:-mt-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-black uppercase tracking-[0.24em] text-[#D9232A]">
            <span className="h-[2px] w-6 sm:w-7 bg-[#D9232A] inline-block" />
            <span>PACKAGING SYSTEMS</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-3.5 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-extrabold tracking-tight text-[#0B1930] leading-[1.08]">
            Engineered to Move <br />
            <span className="text-[#D9232A]">Your Business Forward.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-[#4A5568] max-w-lg font-normal">
            VEVRA designs, manufactures and manages the packaging ecosystem around your product – from first concept to return, reuse and optimization.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-xl hover:scale-105"
            >
              <span>Generate Quick RFQ</span>
              <span className="text-base">→</span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D9232A] bg-white px-7 py-3 text-xs sm:text-sm font-bold text-[#D9232A] shadow-sm transition-all duration-300 hover:bg-rose-50 hover:scale-105"
            >
              <span>Explore Solutions</span>
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}