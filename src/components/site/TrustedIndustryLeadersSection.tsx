import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Customer Logos from src/assets/customers
import eatonImg from "@/assets/customers/1_eaton.png";
import mslImg from "@/assets/customers/2_msl.png";
import siemensImg from "@/assets/customers/3_siemens.png";
import boschImg from "@/assets/customers/4_bosch.png";
import sogefiImg from "@/assets/customers/5_sogefi.png";
import nrbImg from "@/assets/customers/6_NRB.png";
import unitedSpiritsImg from "@/assets/customers/7_United.png";
import cieIndiaImg from "@/assets/customers/8_CIE_India.png";
import colgateImg from "@/assets/customers/9_Colgate.png";
import hclImg from "@/assets/customers/10_HCL.png";
import anmolImg from "@/assets/customers/11_Anmol.png";
import cargillImg from "@/assets/customers/12_Cargill.png";
import danfossImg from "@/assets/customers/13_Danfoss.png";
import elringImg from "@/assets/customers/14_elring.png";
import aamImg from "@/assets/customers/15_AAM.png";
import legrandImg from "@/assets/customers/16_legrand.png";
import indianOilImg from "@/assets/customers/17_IndianOil.png";
import mahindraImg from "@/assets/customers/Mahindra.png";
import unitedBreweriesImg from "@/assets/customers/United Breweries.png";
import rieterImg from "@/assets/customers/RIETER.png";
import fsiImg from "@/assets/customers/FSI.png";
import eicherImg from "@/assets/customers/EICHER.png";
import cocaColaImg from "@/assets/customers/Cocacola.png";
import britanniaImg from "@/assets/customers/Britannia.png";
import raneImg from "@/assets/customers/Rane.png";
import waareeImg from "@/assets/customers/waaree.png";
import parleAgroImg from "@/assets/customers/ParleAgro.png";
import sabMillerImg from "@/assets/customers/Sabmillar.png";
import parleImg from "@/assets/customers/parle.png";
import fordImg from "@/assets/customers/Ford.png";
import pepsiImg from "@/assets/customers/red_blue_colored.png";
import moglixImg from "@/assets/customers/moglix.png";
import tridentImg from "@/assets/customers/trident.png";
import bucherImg from "@/assets/customers/Bucher Hydraulics.png";
import johnDeereImg from "@/assets/customers/John Deere.png";
import kspgImg from "@/assets/customers/KSPG.png";
import numericImg from "@/assets/customers/Numeric.png";
import varrocImg from "@/assets/customers/Varroc.png";
import precisionImg from "@/assets/customers/precision.png";
import newHollandImg from "@/assets/customers/newholland.png";
import jcbImg from "@/assets/customers/JCB.png";

export interface CustomerLogoItem {
  id: string;
  name: string;
  image: string;
  category?: string;
}

export const ALL_CUSTOMER_LOGOS: CustomerLogoItem[] = [
  { id: "eaton", name: "Eaton", image: eatonImg },
  { id: "msl", name: "MSL", image: mslImg },
  { id: "siemens", name: "Siemens", image: siemensImg },
  { id: "bosch", name: "Bosch", image: boschImg },
  { id: "sogefi", name: "Sogefi", image: sogefiImg },
  { id: "nrb", name: "NRB Bearings", image: nrbImg },
  { id: "united-spirits", name: "United Spirits", image: unitedSpiritsImg },
  { id: "cie-india", name: "CIE India", image: cieIndiaImg },

  { id: "colgate", name: "Colgate", image: colgateImg },
  { id: "hcl", name: "HCL", image: hclImg },
  { id: "anmol", name: "Anmol", image: anmolImg },
  { id: "cargill", name: "Cargill", image: cargillImg },
  { id: "danfoss", name: "Danfoss", image: danfossImg },
  { id: "elring", name: "ElringKlinger", image: elringImg },
  { id: "legrand", name: "Legrand", image: legrandImg },
  { id: "indianoil", name: "IndianOil", image: indianOilImg },

  { id: "mahindra", name: "Mahindra", image: mahindraImg },
  { id: "united-breweries", name: "United Breweries", image: unitedBreweriesImg },
  { id: "rieter", name: "Rieter", image: rieterImg },
  { id: "fsi", name: "FSI Four Star Industries", image: fsiImg },
  { id: "aam", name: "AAM", image: aamImg },
  { id: "eicher", name: "Eicher", image: eicherImg },
  { id: "cocacola", name: "Coca-Cola", image: cocaColaImg },
  { id: "britannia", name: "Britannia", image: britanniaImg },

  { id: "rane", name: "Rane", image: raneImg },
  { id: "waaree", name: "Waaree", image: waareeImg },
  { id: "parle-agro", name: "Parle Agro", image: parleAgroImg },
  { id: "sab-miller", name: "SAB Miller", image: sabMillerImg },
  { id: "parle", name: "Parle", image: parleImg },
  { id: "ford", name: "Ford", image: fordImg },
  { id: "pepsi", name: "Pepsi", image: pepsiImg },
  { id: "moglix", name: "Moglix", image: moglixImg },

  { id: "trident", name: "Trident", image: tridentImg },
  { id: "bucher", name: "Bucher Hydraulics", image: bucherImg },
  { id: "john-deere", name: "John Deere", image: johnDeereImg },
  { id: "kspg", name: "KSPG Automotive", image: kspgImg },
  { id: "numeric", name: "Numeric", image: numericImg },
  { id: "varroc", name: "Varroc", image: varrocImg },
  { id: "precision", name: "Precision", image: precisionImg },
  { id: "newholland", name: "New Holland", image: newHollandImg },
  { id: "jcb", name: "JCB", image: jcbImg },
];

export function TrustedIndustryLeadersSection({
  className = "",
  showBackground = true,
}: {
  className?: string;
  showBackground?: boolean;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const PAGE_COUNT = 3;

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 ${
        showBackground
          ? "bg-gradient-to-b from-[#F8FAFC]/90 via-white to-white"
          : "bg-white"
      } ${className}`}
    >
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/4 h-80 w-80 rounded-full bg-rose-400/8 blur-3xl" />
        <div className="absolute top-1/2 right-10 h-72 w-72 rounded-full bg-blue-500/6 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Red Cursive Slogan on the Right */}
        <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:items-start text-center md:text-left">
          
          {/* Left/Center Header Info */}
          <div className="mx-auto md:mx-0 max-w-3xl flex flex-col items-center md:items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/70 px-4 py-1 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9232A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D9232A]">
                OUR CUSTOMERS
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
              Trusted by{" "}
              <span className="text-[#D9232A]">Industry Leaders</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4A5568] sm:text-base font-normal">
              We partner with global and Indian manufacturers to deliver reliable, innovative and sustainable packaging solutions across industries.
            </p>
          </div>

          {/* Right Cursive Accent Header */}
          <div className="hidden lg:flex flex-col items-end shrink-0 select-none pt-1">
            <span className="font-['Dancing_Script',cursive] text-3xl xl:text-4xl font-bold text-[#D9232A] block leading-tight">
              Growing Together
            </span>
            <p className="mt-1 text-[10px] xl:text-[11px] font-black uppercase tracking-[0.22em] text-[#0B1930]/75 leading-tight text-right">
              STRONGER SUPPLY CHAINS <br />
              BRIGHTER TOMORROW
            </p>
          </div>

        </div>

        {/* 42 Logos Grid Container */}
        <div className="relative mt-12 sm:mt-14">
          {/* 42 Client Logo Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3.5 p-1">
            {ALL_CUSTOMER_LOGOS.map((customer) => {
              return (
                <div
                  key={customer.id}
                  className="group relative flex h-20 sm:h-24 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9232A]/40 hover:shadow-lg hover:shadow-slate-200/80"
                >
                  <img
                    src={customer.image}
                    alt={`${customer.name} logo`}
                    loading="lazy"
                    className="max-h-12 w-auto max-w-[110px] object-contain transition-all duration-300 group-hover:scale-105"
                  />

                  {/* Subtle Brand Accent Underline */}
                  <span className="pointer-events-none absolute inset-x-4 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-[#D9232A] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Action & Pagination Strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-6">
          
          {/* Left Slide Dashes */}
          <div className="flex items-center gap-2">
            {Array.from({ length: PAGE_COUNT }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to customer page ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? "w-8 bg-[#D9232A]"
                    : "w-6 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Center Red CTA Button */}
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D9232A] px-8 py-3 text-sm font-bold text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:shadow-2xl hover:shadow-[#D9232A]/35 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Tracked Text */}
          <div className="flex items-center gap-3 text-right">
            <span className="hidden sm:inline-block w-8 h-[1px] bg-slate-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
              PACKAGING A STRONGER TOMORROW
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
