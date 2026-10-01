import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CheckCircle2,
  ChevronDown,
  Coffee,
  Cpu,
  Flame,
  Globe,
  Headphones,
  Layers,
  Leaf,
  LineChart,
  MapPin,
  MoveRight,
  Play,
  Radio,
  Refrigerator,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
  Utensils,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { SiteLayout, RfqButton } from "@/components/site/SiteLayout";

// Gemini-generated images for E-Kart Vehicles & Features
import heroFoodtruckImg from "@/assets/ekart/hero-foodtruck.jpg";
import prodEkartImg from "@/assets/ekart/prod-ekart.jpg";
import prodCompact3wImg from "@/assets/ekart/prod-compact3w.jpg";
import prodRestaurantImg from "@/assets/ekart/prod-restaurant.jpg";
import prodOn2cookImg from "@/assets/ekart/prod-on2cook.jpg";
import featChargingImg from "@/assets/ekart/feat-charging.jpg";
import fleetPanoramicImg from "@/assets/ekart/fleet-panoramic.png";

// Kitchen & Restaurant Accessories Images
import acc2BurnersImg from "@/assets/ekart/acc-2burners.jpg";
import accFrierImg from "@/assets/ekart/acc-frier.jpg";
import accFoodWarmerImg from "@/assets/ekart/acc-foodwarmer.jpg";
import accChoppingTableImg from "@/assets/ekart/acc-choppingtable.jpg";
import accWaterTankImg from "@/assets/ekart/acc-watertank.jpg";
import accCoffeeMachineImg from "@/assets/ekart/acc-coffeemachine.jpg";
import accSlushDispenserImg from "@/assets/ekart/acc-slushdispenser.png";
import accSoupHandiImg from "@/assets/ekart/acc-souphandi.png";
import accColdDisplayImg from "@/assets/ekart/acc-colddisplay.jpg";
import accShawarmaImg from "@/assets/ekart/acc-shawarma.png";
import accVisiCoolerImg from "@/assets/ekart/acc-visicooler.png";
import accPizzaOvenImg from "@/assets/ekart/acc-pizzaoven.png";
import accDosaMakerImg from "@/assets/ekart/acc-dosamaker.png";
import accCharcoalBbqImg from "@/assets/ekart/acc-charcoalbbq.jpg";
import accGrillerImg from "@/assets/ekart/acc-griller.png";

export const Route = createFileRoute("/e-kart")({
  head: () => ({
    meta: [
      { title: "VEVRA E-KART — Sustainable Mobility & Mobile Restaurant Solutions | VEVRA" },
      {
        name: "description",
        content:
          "Innovative electric mobility and smart food solutions for businesses, entrepreneurs and communities. Explore electric 3-wheelers, mobile restaurants, and commercial kitchen appliances.",
      },
    ],
  }),
  component: EKartPage,
});

const PRODUCTS_DATA = [
  {
    id: "ekart-cargo",
    title: "Electric E-Kart",
    image: prodEkartImg,
    description: "Efficient, eco-friendly and cost-effective electric e-kart for multiple business needs.",
    features: [
      "Zero Emissions",
      "Low Operating Cost",
      "High Load Capacity",
      "Smart Features",
    ],
    ctaText: "Explore E-Kart",
    ctaLink: "/calculator",
  },
  {
    id: "compact-3w",
    title: "Electric Compact 3-Wheeler",
    image: prodCompact3wImg,
    description: "Compact, agile and powerful — designed for last-mile delivery and urban mobility.",
    features: [
      "Compact Design",
      "Easy Navigation",
      "Ideal for Urban Use",
      "Multiple Configurations",
    ],
    ctaText: "View Details",
    ctaLink: "/calculator",
  },
  {
    id: "restaurant-wheels",
    title: "Electric Restaurant on Wheels",
    image: prodRestaurantImg,
    description: "Take your food business anywhere with a fully electric, customizable restaurant on wheels.",
    features: [
      "Customizable Layout",
      "Hygienic & Safe",
      "Low Running Cost",
      "Perfect for Events & Streets",
    ],
    ctaText: "Explore Restaurant E-Kart",
    ctaLink: "/calculator",
  },
  {
    id: "on2cook-device",
    title: "On2Cook - Smart Cooking Device",
    image: prodOn2cookImg,
    description: "Advanced smart cooking technology for consistent, high-quality food preparation.",
    features: [
      "Smart Temperature Control",
      "Energy Efficient",
      "Consistent Cooking Quality",
      "Ideal for Commercial Use",
    ],
    ctaText: "Learn More",
    ctaLink: "/contact",
  },
];

// Kitchen Accessories Categories
const ACCESSORIES_CATEGORIES = [
  { id: "all", label: "All Equipment" },
  { id: "cooking", label: "Cooking & Grilling" },
  { id: "beverage", label: "Beverages & Hot Food" },
  { id: "cooling", label: "Refrigeration & Display" },
  { id: "utility", label: "Prep & Utilities" },
];

// Complete 16 Customized Restaurant & Compact Kitchen Accessories
const ACCESSORIES_DATA = [
  {
    id: "2-burners",
    name: "2 Burners",
    category: "cooking",
    badge: "Compact Cooking",
    image: acc2BurnersImg,
    description: "Heavy-duty commercial grade 2-burner gas/electric stove with precision flame control.",
    specs: ["Heavy Duty SS 304", "Cast Iron Pan Supports", "Low Fuel / Power Consumption"],
  },
  {
    id: "frier",
    name: "Frier",
    category: "cooking",
    badge: "Snack Station",
    image: accFrierImg,
    description: "Dual-tank electric deep fryer with twin baskets for crispy fries, nuggets, samosas and snacks.",
    specs: ["Twin Stainless Baskets", "Rapid Oil Heat Recovery", "Easy Drain Valve"],
  },
  {
    id: "food-warmer",
    name: "Food Warmer",
    category: "beverage",
    badge: "Hot Holding",
    image: accFoodWarmerImg,
    description: "4-Pan stainless steel wet/dry well food warmer to keep gravies, soups and rice fresh & warm.",
    specs: ["4 Gastronorm Pans with Lids", "Thermostatic Heat Dial", "Even Warmth Retention"],
  },
  {
    id: "chopping-table",
    name: "Chopping Table",
    category: "utility",
    badge: "Prep Station",
    image: accChoppingTableImg,
    description: "Commercial stainless steel prep counter with heavy-duty undershelf and lockable castor wheels.",
    specs: ["Food-Grade SS 304 Top", "High Load Under-Storage", "Lockable Castor Wheels"],
  },
  {
    id: "water-tank",
    name: "Water Storage Tank",
    category: "utility",
    badge: "Clean Utility",
    image: accWaterTankImg,
    description: "Food-grade fresh water storage tank with quick-dispense spigot tap for mobile kitchen hygiene.",
    specs: ["Food Grade HDPE Material", "Leak-Proof Brass Valve", "Easy Refill & Cleaning"],
  },
  {
    id: "on2cook",
    name: "On2 Cook",
    category: "cooking",
    badge: "Smart Kitchen Tech",
    image: prodOn2cookImg,
    description: "Revolutionary patented cooking tech combining flame & microwave, saving 70% cooking time.",
    specs: ["Flame + Microwave Fusion", "70% Faster Cooking", "Consistent Quality Every Time"],
  },
  {
    id: "coffee-machine",
    name: "Coffee Machine",
    category: "beverage",
    badge: "Cafe Solutions",
    image: accCoffeeMachineImg,
    description: "Dual-group espresso & cappuccino coffee maker with milk frothing wand for high-volume cafe service.",
    specs: ["Dual Group Espresso", "Integrated Steam Wand", "Commercial Pressure Pump"],
  },
  {
    id: "slush-dispenser",
    name: "Slush Dispenser",
    category: "beverage",
    badge: "Chilled Drinks",
    image: accSlushDispenserImg,
    description: "Dual-tank commercial frozen beverage dispenser for fruit slushies, mocktails and cold smoothies.",
    specs: ["Twin Polycarbonate Tanks", "High-Efficiency Compressor", "Night Refrigeration Mode"],
  },
  {
    id: "soup-handi",
    name: "Soup Handi",
    category: "beverage",
    badge: "Hot Soup Station",
    image: accSoupHandiImg,
    description: "Traditional commercial soup kettle warmer for piping hot soups, daal, sambar and stews.",
    specs: ["Insulated Outer Body", "Removable SS Inner Pot", "10-Level Heat Selector"],
  },
  {
    id: "cold-display",
    name: "Cold Display Counter",
    category: "cooling",
    badge: "Refrigerated Showcase",
    image: accColdDisplayImg,
    description: "Curved glass multi-tier refrigerated counter for bakery items, pastries, salads and sandwiches.",
    specs: ["Panoramic Curved Glass", "Forced Air Uniform Cooling", "Bright LED Illumination"],
  },
  {
    id: "shawarma-heater",
    name: "Shawarma Heater",
    category: "cooking",
    badge: "Rotisserie Grill",
    image: accShawarmaImg,
    description: "Vertical rotating meat broiler spit machine for authentic shawarmas, gyros and roasted meats.",
    specs: ["360° Motorized Rotation", "Adjustable Heat Elements", "Removable Oil Catch Tray"],
  },
  {
    id: "visi-cooler",
    name: "Visi Cooler",
    category: "cooling",
    badge: "Beverage Chiller",
    image: accVisiCoolerImg,
    description: "Glass door vertical display refrigerator for bottled drinks, juices, dairy products and cans.",
    specs: ["Double Glazed Clear Glass", "Quick Chill Refrigeration", "Multi-Tier Adjustable Shelves"],
  },
  {
    id: "pizza-oven",
    name: "Pizza Oven",
    category: "cooking",
    badge: "Baking & Pizza",
    image: accPizzaOvenImg,
    description: "High-temperature stone deck electric pizza baking oven for crispy pizzas, garlic bread and pies.",
    specs: ["Firebrick Stone Base", "Independent Top/Bottom Heat", "Up to 400°C Temperature"],
  },
  {
    id: "dosa-maker",
    name: "Dosa Maker",
    category: "cooking",
    badge: "South Indian Special",
    image: accDosaMakerImg,
    description: "Heavy polished flat griddle tawa plate for making crispy dosas, uttapams, crepes and parathas.",
    specs: ["Uniform Heat Distribution", "Polished Non-Stick Surface", "Heavy-Gauge Stainless Body"],
  },
  {
    id: "charcoal-bbq",
    name: "Charcoal BBQ",
    category: "cooking",
    badge: "Smoky BBQ",
    image: accCharcoalBbqImg,
    description: "Tabletop commercial stainless steel BBQ grill station for charcoal-grilled tikkas, kebabs and skewers.",
    specs: ["Cast Iron Cooking Grates", "Dual Air Damper Control", "Easy Ash Removal Tray"],
  },
  {
    id: "griller",
    name: "Griller",
    category: "cooking",
    badge: "Toasted Sandwiches",
    image: accGrillerImg,
    description: "Ribbed heavy cast-iron contact grill press for toasted paninis, burgers, rolls and sandwiches.",
    specs: ["Ribbed Cast Iron Plates", "Counter-Balanced Top Lid", "Rapid Toasting Technology"],
  },
];

const SOLUTIONS_DATA = [
  {
    icon: Store,
    title: "Smart Food Vending",
    description: "Complete solution for street food, kiosks and mobile businesses.",
    link: "/calculator",
  },
  {
    icon: MapPin,
    title: "Fleet & GPS Management",
    description: "Track, manage and optimize your e-kart fleet in real-time.",
    link: "/contact",
  },
  {
    icon: LineChart,
    title: "POS & Analytics",
    description: "Smart billing, sales tracking and business insights.",
    link: "/calculator",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description: "Built-in safety features, GPS tracking and secure operations.",
    link: "/contact",
  },
  {
    icon: Settings,
    title: "Customized E-Kart Solutions",
    description: "Tailor-made e-karts for your unique business requirements.",
    link: "/calculator",
  },
];

const METRICS_DATA = [
  {
    icon: Leaf,
    value: "0",
    label: "Tailpipe Emissions",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Customers",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cities Reached",
  },
  {
    icon: Settings,
    value: "99%",
    label: "Uptime & Reliability",
  },
];

function EKartPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  const scrollToProducts = () => {
    const el = document.getElementById("products-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAccessories = () => {
    const el = document.getElementById("accessories-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredAccessories =
    selectedCategory === "all"
      ? ACCESSORIES_DATA
      : ACCESSORIES_DATA.filter((item) => item.category === selectedCategory);

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FDFDFE] to-white pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Background Ambient Glows & Grid Accent */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-full max-w-7xl">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-emerald-400/12 blur-3xl" />
          <div className="absolute top-20 right-10 h-80 w-80 rounded-full bg-rose-500/12 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            
            {/* Left Column: Heading, Badges, Metrics & Actions */}
            <div className="lg:col-span-6">
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/80 px-4 py-1.5 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                  NEXT-GEN EV MOBILITY &amp; SMART KITCHENS
                </span>
              </div>

              {/* High-impact Title */}
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0B1930] sm:text-5xl lg:text-[3.65rem] lg:leading-[1.08]">
                Sustainable <br />
                Mobility for a{" "}
                <span className="bg-[#D9232A]  bg-clip-text text-transparent">
                  Greener Tomorrow
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4A5568] sm:text-lg">
                Innovative electric mobility and smart modular kitchen solutions for businesses, food entrepreneurs and modern commercial fleets.
              </p>

              {/* Value / Highlights Mini Chips */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#0B1930]">
                <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2 border border-slate-200/60">
                  <Zap className="h-4 w-4 text-emerald-600" />
                  <span>100% Zero Emissions</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2 border border-slate-200/60">
                  <Utensils className="h-4 w-4 text-[#D9232A]" />
                  <span>Modular Kitchen Tech</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-2 border border-slate-200/60">
                  <Radio className="h-4 w-4 text-blue-600" />
                  <span>Smart IoT Telematics</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/calculator"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D9232A] to-[#b81d23] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#D9232A]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D9232A]/35 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={scrollToProducts}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white px-5 py-3.5 text-sm font-bold text-[#0B1930] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#D9232A] hover:text-[#D9232A] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>Explore Vehicles</span>
                  <ChevronDown className="h-4 w-4 text-[#D9232A]" />
                </button>

                <button
                  type="button"
                  onClick={scrollToAccessories}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-5 py-3.5 text-sm font-bold text-[#4A5568] shadow-sm backdrop-blur transition-all duration-300 hover:border-slate-400 hover:text-[#0B1930] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Utensils className="h-4 w-4 text-[#D9232A]" />
                  <span>Kitchen Accessories</span>
                </button>
              </div>
            </div>

            {/* Right Column: Multi-layered Glass Card Showcase */}
            <div className="relative lg:col-span-6">
              {/* Backlight Glow Behind Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-[#D9232A]/15 to-blue-600/20 blur-2xl -z-10" />

              {/* Outer Framed Presentation Card */}
              <div className="relative rounded-[28px] bg-gradient-to-tr from-slate-300/60 via-emerald-200/40 to-rose-200/60 p-[3px] shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[25px] bg-slate-950">
                  <img
                    src={heroFoodtruckImg}
                    alt="VEVRA E-Kart Electric Food Truck"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Atmospheric Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 rounded-xl bg-black/65 px-3.5 py-2 shadow-lg backdrop-blur-md border border-white/20">
                    <p className="text-[10px] font-black tracking-wider text-emerald-400 uppercase">
                      GOOD FOOD • CLEAN ENERGY
                    </p>
                    <p className="text-xs font-bold text-white leading-tight">
                      Brighter, Greener Tomorrow
                    </p>
                  </div>

                  {/* Centered White Play Button */}
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center cursor-pointer focus:outline-none"
                    aria-label="Play Product Video"
                  >
                    {/* Pulsing Ripple Rings */}
                    <span className="absolute -inset-3 sm:-inset-4 rounded-full bg-white/30 animate-ping opacity-75 pointer-events-none" />
                    <span className="absolute -inset-6 sm:-inset-8 rounded-full bg-white/15 animate-pulse pointer-events-none" />

                    {/* White Play Button Disc */}
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-[#D9232A] shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(217,35,42,0.45)] active:scale-95 border-2 border-white">
                      <Play className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5 fill-[#D9232A] text-[#D9232A] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </button>

                  {/* Bottom Strip Inside Image */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300">
                        ELECTRIC MOBILE RESTAURANT
                      </p>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        Zero Emission Commercial Fleet
                      </h3>
                    </div>
                  
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1 (Top Left Overhang) */}
             

              {/* Floating Glassmorphism Badge 2 (Bottom Right Overhang) */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 z-20 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-[#D9232A] text-white shadow-md shadow-rose-500/25">
                  <Utensils className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Commercial Kitchen</p>
                  <p className="text-xs font-black text-[#0B1930]">16+ Modular Accessories</p>
                </div>
              </div>

            </div>

          </div>

          {/* 4-Pill Feature Strip with Hover Elevation & Premium Styling */}
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur sm:grid-cols-4 sm:p-5">
            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-emerald-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white shadow-sm">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">100% Electric</p>
                <p className="text-[11px] text-[#64748B]">Zero Tailpipe Emissions</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-blue-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                <Radio className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Smart &amp; Connected</p>
                <p className="text-[11px] text-[#64748B]">IoT &amp; Telematics GPS</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-rose-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D9232A] group-hover:text-white shadow-sm">
                <Store className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Built for Businesses</p>
                <p className="text-[11px] text-[#64748B]">Maximum Daily ROI</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-teal-50/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white shadow-sm">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Cleaner Cities</p>
                <p className="text-[11px] text-[#64748B]">Sustainable Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PRODUCTS SECTION */}
      <section id="products-section" className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                OUR PRODUCTS
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl">
                Innovative Electric Solutions for a Better Tomorrow.
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#64748B]">
              From compact e-karts to smart cooking devices, VEVRA brings innovative, sustainable and profitable solutions for modern businesses.
            </p>
          </div>

          {/* Products 4-Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Edge-to-edge Product Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content with internal padding */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Title & Description */}
                    <h3 className="text-base font-bold text-[#0B1930]">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                      {product.description}
                    </p>

                    {/* Bullet points */}
                    <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#D9232A]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA button */}
                  <div className="mt-6 pt-2">
                    <Link
                      to={product.ctaLink}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D9232A]/30 bg-white py-2.5 text-xs font-bold text-[#D9232A] transition-all hover:border-[#D9232A] hover:bg-[#D9232A] hover:text-white"
                    >
                      {product.ctaText}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SMART E-KART FEATURES BANNER */}
 

      {/* 4. MODULAR KITCHEN & RESTAURANT ACCESSORIES SECTION */}
      <section id="accessories-section" className="bg-[#F8FAFC] py-20 border-t border-slate-200/80">
        <div className="mx-auto max-w-[1280px] px-6">
          
          {/* Header & Subtitle */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                ELECTRIC COMPACT &amp; CUSTOMISED RESTAURANT
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl">
                Modular Kitchen &amp; Restaurant Accessories.
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#64748B]">
              Equip your mobile e-kart with commercial-grade, energy-efficient appliances tailored for street food, cafes, and mobile restaurant setups.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {ACCESSORIES_CATEGORIES.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              const count =
                tab.id === "all"
                  ? ACCESSORIES_DATA.length
                  : ACCESSORIES_DATA.filter((i) => i.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-[#D9232A] text-white shadow-md shadow-[#D9232A]/20"
                      : "bg-white text-[#4A5568] border border-slate-200 hover:border-slate-300 hover:text-[#0B1930]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-[#64748B]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Accessories 4-Column Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredAccessories.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Edge-to-edge Image Frame with Floating Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                    {item.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1930] group-hover:text-[#D9232A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#64748B]">
                      {item.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-[#475569]">
                          <Check className="h-3 w-3 text-[#D9232A] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add to RFQ Button */}
                  <div className="mt-5 pt-2">
                    <Link
                      to="/calculator"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-2 text-xs font-bold text-[#0B1930] transition-all hover:border-[#D9232A] hover:bg-[#D9232A] hover:text-white"
                    >
                      Request with E-Kart
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SOLUTIONS SECTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                SOLUTIONS
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl">
                End-to-End Solutions for Your Business.
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#64748B]">
              More than just vehicles — we provide a complete ecosystem to help you run and grow your business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SOLUTIONS_DATA.map((solution, idx) => {
              const IconComp = solution.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9232A]/10 text-[#D9232A]">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-sm font-bold text-[#0B1930]">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      to={solution.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9232A] transition-colors hover:text-[#b81d23]"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PANORAMIC SHOWCASE BANNER */}
      <section className="relative overflow-hidden py-24">
        {/* Background panoramic image with clean overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={fleetPanoramicImg}
            alt="VEVRA E-Kart Fleet"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 md:via-white/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl lg:text-5xl">
                Driving a Cleaner, <br />
                Healthier &amp; Happier Future.
              </h2>
              <p className="mt-4 text-base text-[#4A5568]">
                Join the movement towards sustainable mobility and smart food solutions.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all hover:bg-[#b81d23]"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Script slogan accent */}
            <div className="hidden lg:block text-right">
              <p className="font-serif italic text-3xl font-normal text-[#0B1930]/90">
                Small Change. <br />
                <span className="font-semibold text-[#D9232A]">Big Impact.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IMPACT METRICS BAR */}
      <section className="border-y border-slate-200/80 bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {METRICS_DATA.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D9232A]/10 text-[#D9232A]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#0B1930] tracking-tight">
                      {metric.value}
                    </p>
                    <p className="text-xs font-semibold text-[#64748B]">
                      {metric.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF5F5] via-[#FFF1F2] to-[#FFE4E6] py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col justify-between gap-8 rounded-3xl lg:flex-row lg:items-center">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D9232A]">
                READY TO GET STARTED?
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B1930] sm:text-4xl">
                Let's Build a Sustainable Tomorrow Together.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#4A5568]">
                Whether you want to buy, customize or explore partnership opportunities, our team is here to help.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#D9232A]/20 transition-all hover:bg-[#b81d23]"
              >
                Generate Quick RFQ
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D9232A]/30 bg-white px-7 py-3 text-sm font-bold text-[#D9232A] transition-all hover:border-[#D9232A] hover:bg-[#D9232A]/5"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal / Big Screen YouTube Player */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 md:p-8 backdrop-blur-md animate-in fade-in-0 duration-200"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-slate-950 border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D9232A]"></span>
                </span>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide truncate max-w-[240px] sm:max-w-md md:max-w-xl">
                  VEVRA Electric — Empowering Sustainable Mobility &amp; Modular Kitchens
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all focus:outline-none"
                aria-label="Close video"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Responsive 16:9 Video Player Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/FurATMafOkk?autoplay=1&rel=0"
                title="VEVRA E-Kart Electric Vehicle Video"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
