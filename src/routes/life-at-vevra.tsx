import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Image as ImageIcon,
  MapPin,
  Maximize2,
  PartyPopper,
  Pause,
  Play,
  Quote,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Utensils,
  Leaf,
  Layers,
  Youtube,
  ThumbsUp,
  Share2,
  Bell,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

// Real Event & Celebration Images from assets/Event&Celebration
import celebration1Img from "@/assets/Event&Celebration/Celebration-1.png";
import eventEbikeImg from "@/assets/Event&Celebration/Event-e-bike.png";
import eventOfficeImg from "@/assets/Event&Celebration/EventToffice.png";
import vehicleRestaurantImg from "@/assets/Event&Celebration/Vehicle-restrorant.png";
import poojaOfficeImg from "@/assets/Event&Celebration/poojaatoffice.png";
import teamImg from "@/assets/Event&Celebration/team.png";
import officeCollabImg from "@/assets/VEVRA_Office_Professional_Images/06_everyday_collaboration.png";

// Employee Recognition & Values Images from assets/Valueoueemp (Optimized for instant load)
import empAppreciationAwardImg from "@/assets/Valueoueemp/Appreciation_Award_Photo_HD.jpg";
import empAwardPresentationImg from "@/assets/Valueoueemp/Award_Presentation_Photo_HD.jpg";
import empAwardPresentation2Img from "@/assets/Valueoueemp/Award_Presentation_Photo_2_HD.jpg";
import empTeamPhotoImg from "@/assets/Valueoueemp/Team_Photo_HD-1.jpg";
import empAwardCeremonyImg from "@/assets/Valueoueemp/Vevra_Award_Ceremony_HD.jpg";
import empCelebrationImg from "@/assets/Valueoueemp/Vevra_Celebration_Photo_HD.jpg";

export const Route = createFileRoute("/life-at-vevra")({
  head: () => ({
    meta: [
      { title: "Life at VEVRA — Celebrations, Culture & Moments | VEVRA" },
      {
        name: "description",
        content:
          "At VEVRA, we celebrate our journey together. Explore our culture, team building events, festive celebrations, and milestones that bring us closer.",
      },
      { property: "og:title", content: "Life at VEVRA Packaging" },
      {
        property: "og:description",
        content: "Celebrations that bring us closer. Team culture, gallery, and watch our story.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LifeAtVevraPage,
});

// Gallery Items using real Event & Celebration images
const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Team Togetherness",
    title: "VEVRA Core Team & Leadership Gathering",
    location: "Corporate Office, Pune",
    image: teamImg,
  },
  {
    id: 2,
    category: "Festive Pooja",
    title: "Traditional Office Pooja & Cultural Celebration",
    location: "Corporate Office, Pune",
    image: poojaOfficeImg,
  },
  {
    id: 3,
    category: "Celebrations",
    title: "Milestone Celebration & Team Achievements",
    location: "VEVRA Headquarters",
    image: celebration1Img,
  },
  {
    id: 4,
    category: "Corporate Events",
    title: "Team Conference & Corporate Strategy Meet",
    location: "Pune, Maharashtra",
    image: eventOfficeImg,
  },
  {
    id: 5,
    category: "E-Mobility Showcase",
    title: "Electric Mobility & Smart E-Bike Showcase",
    location: "Pune, Maharashtra",
    image: eventEbikeImg,
  },
  {
    id: 6,
    category: "Mobile Restaurant",
    title: "Electric Restaurant on Wheels & Fleet Showcase",
    location: "Exhibition Center, India",
    image: vehicleRestaurantImg,
  },
];

// Employee Recognition & Values Gallery Items
const EMPLOYEE_VALUE_ITEMS = [
  {
    id: 1,
    category: "Award Ceremony",
    title: "VEVRA Grand Annual Recognition & Awards Ceremony",
    location: "VEVRA Headquarters, Pune",
    image: empAwardCeremonyImg,
  },
  {
    id: 2,
    category: "Appreciation Award",
    title: "Honoring Outstanding Employee Contributions & Dedication",
    location: "Annual Employee Meet, Pune",
    image: empAppreciationAwardImg,
  },
  {
    id: 3,
    category: "Leadership Honor",
    title: "Executive Recognition for Operational & Supply Chain Excellence",
    location: "Corporate Office, Pune",
    image: empAwardPresentationImg,
  },
  {
    id: 4,
    category: "Merit Achievement",
    title: "Celebrating Milestones, Star Performers & Innovation Champions",
    location: "VEVRA Facility, Pune",
    image: empAwardPresentation2Img,
  },
  {
    id: 5,
    category: "United Team",
    title: "The VEVRA Family — United in Excellence & Shared Success",
    location: "Annual Team Gathering, Pune",
    image: empTeamPhotoImg,
  },
  {
    id: 6,
    category: "Milestone Celebration",
    title: "Team Success, Festive Moments & Joyous Celebrations",
    location: "VEVRA Campus, Pune",
    image: empCelebrationImg,
  },
];

// YouTube Story Videos Data from Official @VevraPackaging Channel
const YOUTUBE_STORY_VIDEOS = [
  {
    id: "IdIwB8vd9Ks",
    tag: "FEATURE VIDEO",
    duration: "1:56",
    title: "तुमचे प्रयत्न प्रामाणिक असतील, तर यश निश्चितच तुमचे असेल",
    views: "12K views • 2 months ago",
    thumbnail: "https://i.ytimg.com/vi/IdIwB8vd9Ks/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=IdIwB8vd9Ks",
  },
  {
    id: "FurATMafOkk",
    tag: "PRODUCT DEMO",
    duration: "3:48",
    title: "Vevra Electric — बदलाव की शुरुआत बनें, युवाओं को सशक्त और आत्मनिर्भर बनाएँ",
    views: "8.5K views • 1 month ago",
    thumbnail: "https://i.ytimg.com/vi/FurATMafOkk/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=FurATMafOkk",
  },
  {
    id: "1ypi2cxsnXs",
    tag: "INNOVATION",
    duration: "4:12",
    title: "Hygienic Food, Good Health — Smart Modular Delivery Solutions",
    views: "15.4K views • 1 month ago",
    thumbnail: "https://i.ytimg.com/vi/1ypi2cxsnXs/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=1ypi2cxsnXs",
  },
  {
    id: "hJhSk8xqamg",
    tag: "CUSTOMER STORIES",
    duration: "2:28",
    title: "Transforming supply chains, empowering livelihoods and build greener, healthier, self-reliant India",
    views: "9.1K views • 3 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/hJhSk8xqamg/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=hJhSk8xqamg",
  },
  {
    id: "elMuYrhKojA",
    tag: "TEAM CULTURE",
    duration: "2:45",
    title: "One Family One Goal — Celebrations & Culture at VEVRA",
    views: "11.2K views • 1 month ago",
    thumbnail: "https://i.ytimg.com/vi/elMuYrhKojA/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=elMuYrhKojA",
  },
  {
    id: "Nbr0kACdivE",
    tag: "EMPOWERMENT",
    duration: "3:10",
    title: "Vevra Encourages Women Empowerment & Leadership in Supply Chain",
    views: "14.1K views • 2 months ago",
    thumbnail: "https://i.ytimg.com/vi/Nbr0kACdivE/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Nbr0kACdivE",
  },
  {
    id: "pk0kRb3zyxw",
    tag: "SUSTAINABILITY",
    duration: "2:15",
    title: "VEVRA is evolving — Greener, Smarter and Stronger than ever!",
    views: "7.8K views • 3 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/pk0kRb3zyxw/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=pk0kRb3zyxw",
  },
  {
    id: "H_0jmOMM514",
    tag: "LEADERSHIP",
    duration: "1:40",
    title: "FIRST & FAST Mover in Returnable & Sustainable Packaging",
    views: "6.4K views • 1 month ago",
    thumbnail: "https://i.ytimg.com/vi/H_0jmOMM514/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=H_0jmOMM514",
  },
  {
    id: "vndK2Vv47us",
    tag: "ELECTRIC MOBILITY",
    duration: "3:30",
    title: "Vevra Electric Food Cart: रोज़गार भी, स्वस्थ आहार भी!",
    views: "10.5K views • 2 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/vndK2Vv47us/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=vndK2Vv47us",
  },
  {
    id: "xSRJsNaE3Co",
    tag: "HEALTH & HYGIENE",
    duration: "2:50",
    title: "स्वच्छ भोजन, स्वस्थ भारत — आज की सबसे बड़ी आवश्यकता",
    views: "8.9K views • 1 month ago",
    thumbnail: "https://i.ytimg.com/vi/xSRJsNaE3Co/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=xSRJsNaE3Co",
  },
  {
    id: "TjVU6s4N3IA",
    tag: "MODULAR CART",
    duration: "3:15",
    title: "Vevra इलेक्ट्रिक फूड कार्ट — स्वच्छ अन्न, स्मार्ट व्यवसाय आणि आत्मनिर्भरतेची नवी ओळख",
    views: "13.6K views • 3 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/TjVU6s4N3IA/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=TjVU6s4N3IA",
  },
  {
    id: "fhI86obIe_4",
    tag: "COMMUNITY",
    duration: "4:05",
    title: "स्वच्छ अन्न, सन्मानाचा रोजगार — आत्मनिर्भर महाराष्ट्राची नवी वाट!",
    views: "9.7K views • 1 month ago",
    thumbnail: "https://i.ytimg.com/vi/fhI86obIe_4/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=fhI86obIe_4",
  },
  {
    id: "Z4zICY8AxqI",
    tag: "SUPPLY CHAIN",
    duration: "2:35",
    title: "Vevra: Protecting product, optimising every movement & creating supply chain value",
    views: "11.8K views • 2 months ago",
    thumbnail: "https://i.ytimg.com/vi/Z4zICY8AxqI/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Z4zICY8AxqI",
  },
];

// Year-round Highlight Events with real Event & Celebration images
const YEAR_EVENTS = [
  {
    month: "JAN",
    year: "2026",
    title: "New Year Celebration",
    description: "Welcoming new horizons and setting ambitious team goals.",
    image: celebration1Img,
  },
  {
    month: "MAR",
    year: "2026",
    title: "Traditional Office Pooja",
    description: "Festivities, traditional rituals and cultural harmony.",
    image: poojaOfficeImg,
  },
  {
    month: "JUN",
    year: "2026",
    title: "Corporate Strategy Meet",
    description: "Leadership team meet and company roadmap presentation.",
    image: eventOfficeImg,
  },
  {
    month: "AUG",
    year: "2026",
    title: "E-Mobility Expo Meet",
    description: "Unveiling new generation electric vehicles and smart accessories.",
    image: eventEbikeImg,
  },
  {
    month: "OCT",
    year: "2026",
    title: "Restaurant on Wheels",
    description: "Showcasing modular mobile electric food cart fleet solutions.",
    image: vehicleRestaurantImg,
  },
  {
    month: "DEC",
    year: "2026",
    title: "Annual Day & Awards",
    description: "Recognizing outstanding performances and celebrating team success.",
    image: teamImg,
  },
];

// Culture Cards
const CULTURE_PILLARS = [
  {
    icon: Users,
    title: "People First",
    description: "We celebrate every individual and their contribution.",
  },
  {
    icon: Leaf,
    title: "Work-Life Balance",
    description: "Events that refresh, energize and inspire.",
  },
  {
    icon: Target,
    title: "Together We Grow",
    description: "From small wins to big milestones, we move as one.",
  },
  {
    icon: Star,
    title: "A Brighter Tomorrow",
    description: "Building a positive, inclusive and future-ready culture.",
  },
];

function LifeAtVevraPage() {
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [activeEmployeeIdx, setActiveEmployeeIdx] = useState(0);
  const [isEmployeePaused, setIsEmployeePaused] = useState(false);

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const storySliderRef = useRef<HTMLDivElement>(null);

  // Automatic slideshow for gallery
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveGalleryIdx((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevGallery = () => {
    setActiveGalleryIdx((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const nextGallery = () => {
    setActiveGalleryIdx((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const activeItem = GALLERY_ITEMS[activeGalleryIdx] || GALLERY_ITEMS[0]!;

  // Automatic slideshow for employee gallery
  useEffect(() => {
    if (isEmployeePaused) return;
    const timer = setInterval(() => {
      setActiveEmployeeIdx((prev) => (prev === EMPLOYEE_VALUE_ITEMS.length - 1 ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isEmployeePaused]);

  const prevEmployee = () => {
    setActiveEmployeeIdx((prev) => (prev === 0 ? EMPLOYEE_VALUE_ITEMS.length - 1 : prev - 1));
  };

  const nextEmployee = () => {
    setActiveEmployeeIdx((prev) => (prev === EMPLOYEE_VALUE_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const activeEmployeeItem = EMPLOYEE_VALUE_ITEMS[activeEmployeeIdx] || EMPLOYEE_VALUE_ITEMS[0]!;

  // Preload all gallery & employee images into browser cache on mount for instant zero-delay display
  useEffect(() => {
    EMPLOYEE_VALUE_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
    GALLERY_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // True Circular Infinite Loop Handlers for Watch Our Story
  const nextStoryVideo = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % YOUTUBE_STORY_VIDEOS.length);
  };

  const prevStoryVideo = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + YOUTUBE_STORY_VIDEOS.length) % YOUTUBE_STORY_VIDEOS.length
    );
  };

  // Circular 4-card window from total 13 videos
  const visibleStoryVideos = Array.from({ length: 4 }).map((_, offset) => {
    const idx = (currentStoryIndex + offset) % YOUTUBE_STORY_VIDEOS.length;
    const video = YOUTUBE_STORY_VIDEOS[idx] || YOUTUBE_STORY_VIDEOS[0]!;
    return { ...video, circularKey: `${video.id}-${offset}` };
  });

  return (
    <SiteLayout>
      {/* =========================================================================
          1. HERO SECTION: Celebrations That Bring Us Closer
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FDFDFE] to-white pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-100">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-rose-400/15 blur-3xl" />
          <div className="absolute top-20 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/80 px-4 py-1.5 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9232A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9232A]"></span>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D9232A]">
                  LIFE &amp; CULTURE AT VEVRA
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-[#0B1930] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]">
                Celebrations <br />
                That Bring Us{" "}
                <span className="text-[#D9232A]">
                  Closer
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4A5568] sm:text-base font-normal">
                At VEVRA, we don't just engineer sustainable mobility &amp; modular kitchens — we celebrate every step of our journey. From milestone breakthroughs to festive traditions, our moments inspire lasting bonds.
              </p>

              {/* Highlights Strip */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#0B1930]">
                <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200/70">
                  <PartyPopper className="h-4 w-4 text-[#D9232A]" />
                  <span>50+ Yearly Events</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200/70">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>1 United Team</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200/70">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>100% Passion</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#gallery-section"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#D9232A]/25 transition-all duration-300 hover:bg-[#b81d23] hover:scale-105"
                >
                  <span>Explore Media Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#culture-section"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#0B1930] shadow-sm transition-all duration-300 hover:bg-slate-50"
                >
                  <Heart className="h-4 w-4 text-[#D9232A]" />
                  <span>Our Culture</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image Showcase */}
            <div className="relative lg:col-span-6">
              <div className="relative rounded-3xl bg-gradient-to-tr from-slate-200 via-rose-100 to-blue-100 p-1 shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-slate-950">
                  <img
                    src={teamImg}
                    alt="VEVRA Team Celebrations"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 rounded-xl bg-white/95 px-3 py-1.5 shadow-md backdrop-blur border border-slate-200/80 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#D9232A] text-white">
                      <Trophy className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 leading-none">Excellence</p>
                      <p className="text-[11px] font-black text-[#0B1930] leading-none mt-0.5">Milestones &amp; Awards</p>
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-rose-300">
                        VEVRA FAMILY
                      </p>
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                        Leadership &amp; Core Team Milestone Gathering
                      </h3>
                    </div>
                    <div className="rounded-lg bg-black/60 px-2.5 py-1 text-right backdrop-blur border border-white/20">
                      <p className="text-[9px] font-bold tracking-wider text-white uppercase">
                        WORK • CELEBRATE • GROW
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-right Togetherness Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -right-3 z-20 items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <Heart className="h-4 w-4 fill-white" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 leading-none">Togetherness</p>
                  <p className="text-[11px] font-black text-[#0B1930] leading-none mt-0.5">One United Family</p>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Feature Pills Row Below Hero */}
          <div className="mt-12 grid grid-cols-2 gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm sm:grid-cols-4 sm:p-4">
            <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-rose-50/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A]">
                <PartyPopper className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Festivals</p>
                <p className="text-[11px] text-slate-500">We Celebrate Together</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-rose-50/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A]">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Milestones</p>
                <p className="text-[11px] text-slate-500">We Achieve as One</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-rose-50/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">Team Building</p>
                <p className="text-[11px] text-slate-500">Events &amp; Retreats</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-rose-50/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9232A]/10 text-[#D9232A]">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B1930] leading-tight">A Culture</p>
                <p className="text-[11px] text-slate-500">We Cherish Daily</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. MEDIA GALLERY SECTION ("Moments That Matter")
         ========================================================================= */}
      <section id="gallery-section" className="relative bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Column: Heading, Stats & Button */}
            <div className="relative lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D9232A]">
                  MEDIA GALLERY
                </span>
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#0B1930] leading-[1.12]">
                Moments <br />
                <span className="text-[#D9232A]">That Matter</span>
              </h2>

              <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                A glimpse into our journey — events, exhibitions, celebrations and milestones that reflect our people, partnerships and progress.
              </p>

              {/* 3 Stat Badges */}
              <div className="mt-7 grid grid-cols-3 gap-2 border-y border-slate-100 py-5">
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Camera className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-black text-[#0B1930]">200+</p>
                  <p className="text-[10.5px] font-semibold text-slate-500">Event Photos</p>
                </div>

                <div className="border-l border-slate-200/80 pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Users className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-black text-[#0B1930]">50+</p>
                  <p className="text-[10.5px] font-semibold text-slate-500">Team Moments</p>
                </div>

                <div className="border-l border-slate-200/80 pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-black text-[#0B1930]">Years</p>
                  <p className="text-[10.5px] font-semibold text-slate-500">Of Togetherness</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#gallery-thumbnails"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#D9232A]/20 transition-all hover:bg-[#b81d23]"
                >
                  <span>Explore All Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Featured Image Display */}
            <div className="relative lg:col-span-7">
              <div
                className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-200 shadow-xl group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {/* Direct Active Image with Smooth Transition - Never flashes blue background */}
                  <img
                    key={activeItem.id}
                    src={activeItem.image}
                    alt={activeItem.title}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover select-none animate-in fade-in duration-300 z-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Auto-play Pill */}
                  <button
                    type="button"
                    onClick={() => setIsPaused((p) => !p)}
                    className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10.5px] font-bold text-white backdrop-blur border border-white/20"
                  >
                    {isPaused ? (
                      <>
                        <Play className="h-2.5 w-2.5 text-emerald-400 fill-emerald-400" />
                        <span>Paused</span>
                      </>
                    ) : (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Auto-play</span>
                      </>
                    )}
                  </button>

                  {/* Bottom Info */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {activeItem.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                        <MapPin className="h-3 w-3 text-[#D9232A]" />
                        <span>{activeItem.location}</span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-white/90 font-mono shrink-0">
                      {String(activeGalleryIdx + 1).padStart(2, "0")} / {String(GALLERY_ITEMS.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Thumbnails Carousel Row */}
          <div id="gallery-thumbnails" className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={prevGallery}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid flex-1 grid-cols-3 gap-2.5 sm:grid-cols-6">
              {GALLERY_ITEMS.map((item, idx) => {
                const isSelected = idx === activeGalleryIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveGalleryIdx(idx)}
                    className="group flex flex-col items-center gap-1.5 text-left cursor-pointer"
                  >
                    <div
                      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-[#D9232A] ring-2 ring-rose-500/20 shadow-md scale-[1.02]"
                          : "border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.category}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span
                      className={`text-[10.5px] font-bold text-center leading-tight line-clamp-1 ${
                        isSelected ? "text-[#0B1930]" : "text-slate-500"
                      }`}
                    >
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextGallery}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. WATCH OUR STORY SECTION (Official YouTube Channel & Video Cards)
         ========================================================================= */}
      <section className="bg-[#FFF5F5] py-14 sm:py-18 border-b border-rose-100">
        <div className="mx-auto max-w-[1280px] px-6">
          
          {/* Header Row with 3D YouTube Graphic & Script */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8">
            <div className="max-w-2xl">
              <span className="text-[10.5px] font-black uppercase tracking-[0.24em] text-[#D9232A] block mb-1">
                OUR OFFICIAL YOUTUBE CHANNEL
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                Life at VEVRA – <span className="text-[#D9232A]">Watch Our Story</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Go behind the scenes with our events, product demos, team moments and milestones. Subscribe to our YouTube channel and be a part of our journey.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.youtube.com/@VevraPackaging?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D9232A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#D9232A]/25 transition-all hover:bg-rose-700 hover:scale-105"
                >
                  <Bell className="h-3.5 w-3.5 fill-white" />
                  <span>Subscribe to Channel</span>
                </a>

                <a
                  href="https://www.youtube.com/@VevraPackaging"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400"
                >
                  <Play className="h-3.5 w-3.5 text-[#D9232A] fill-[#D9232A]" />
                  <span>Visit YouTube →</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: 3D YouTube Play Badge & Script Text */}
            <div className="flex items-center gap-5 lg:pr-6">
              {/* 3D-styled Red YouTube Box - Opens 1-click subscribe confirmation */}
              <a
                href="https://www.youtube.com/@VevraPackaging?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to Subscribe to VEVRA Packaging on YouTube"
                className="group relative flex h-18 w-24 sm:h-22 sm:w-28 items-center justify-center rounded-3xl bg-gradient-to-b from-[#FF2E36] via-[#E60000] to-[#B30000] text-white shadow-2xl shadow-red-500/40 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300"
              >
                {/* 3D glossy highlight */}
                <div className="absolute inset-x-2 top-1.5 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />
                <Play className="h-9 w-9 fill-white ml-1 drop-shadow-md group-hover:scale-110 transition-transform" />
              </a>

              {/* Handwritten Script */}
              <div className="select-none">
                <p className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-slate-800 leading-[1.15]">
                  Subscribe<br />
                  Like<br />
                  Share<br />
                  <span className="text-[#D9232A]">Be a Part</span><br />
                  of Our Journey
                </p>
              </div>
            </div>
          </div>

          {/* Circular Infinite Loop 4-Card Grid with Navigation Controls */}
          <div className="relative mt-5">
            {/* Left Navigation Arrow Button */}
            <button
              type="button"
              onClick={prevStoryVideo}
              aria-label="Previous story video"
              className="flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xl text-slate-800 hover:text-[#D9232A] hover:border-[#D9232A] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Right Navigation Arrow Button */}
            <button
              type="button"
              onClick={nextStoryVideo}
              aria-label="Next story video"
              className="flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xl text-slate-800 hover:text-[#D9232A] hover:border-[#D9232A] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Circular 4-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {visibleStoryVideos.map((video) => (
                <a
                  key={video.circularKey}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer block"
                >
                  <div>
                    {/* Video Thumbnail - 16:9 ratio with letterbox crop and full brightness */}
                    <div className="relative aspect-video overflow-hidden bg-slate-900">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover scale-[1.18] transition-transform duration-500 group-hover:scale-[1.24]"
                        loading="lazy"
                      />

                      {/* Duration Tag Bottom Right */}
                      <span className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-[9.5px] font-mono font-bold text-white">
                        {video.duration}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-3.5 sm:p-4">
                      <h3 className="text-xs sm:text-[13px] font-bold text-slate-950 leading-snug line-clamp-2 group-hover:text-[#D9232A] transition-colors">
                        {video.title}
                      </h3>
                      {/* Category Tag moved in place of views */}
                      <div className="mt-2 flex items-center">
                        <span className="inline-block rounded-md bg-rose-50 border border-rose-200/80 px-2 py-0.5 text-[9.5px] font-black uppercase tracking-wider text-[#D9232A]">
                          {video.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Watch Now Link with Red Border */}
                  <div className="px-3.5 sm:px-4 pb-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9232A] bg-white px-3.5 py-1 text-[11px] font-bold text-[#D9232A] shadow-sm transition-all group-hover:bg-[#D9232A] group-hover:text-white">
                      <Play className="h-3 w-3 fill-current" />
                      <span>Watch Now →</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">YouTube</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OUR CULTURE SECTION ("More Than Just Work")
         ========================================================================= */}
      <section id="culture-section" className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Column: Mission & Button */}
            <div className="lg:col-span-5">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D9232A] block">
                OUR CULTURE
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1930] sm:text-4xl">
                More Than <br />
                Just Work
              </h2>
              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                At VEVRA, we believe a happy workplace creates extraordinary results. Our events and celebrations reflect our values — respect, teamwork and togetherness.
              </p>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#D9232A]/20 transition-all hover:bg-[#b81d23]"
                >
                  <span>Join Our Journey</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Culture Value Cards */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {CULTURE_PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-[#D9232A] border border-rose-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3.5 text-sm sm:text-base font-bold text-[#0B1930]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HIGHLIGHT EVENTS SECTION ("Events Through the Year")
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D9232A] block">
                HIGHLIGHT EVENTS
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-black tracking-tight text-[#0B1930]">
                Events Through the Year
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A] transition-colors"
                aria-label="Previous events"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A] transition-colors"
                aria-label="Next events"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 6 Event Cards Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {YEAR_EVENTS.map((evt, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                  <div className="absolute top-2.5 left-2.5 rounded-lg bg-black/60 px-2 py-0.5 text-center backdrop-blur border border-white/20">
                    <p className="text-[9px] font-black text-white leading-tight uppercase">
                      {evt.month}
                    </p>
                    <p className="text-[8px] font-bold text-white/70 leading-none">
                      {evt.year}
                    </p>
                  </div>
                </div>

                <div className="p-3 text-center">
                  <h3 className="text-[11.5px] font-bold text-[#0B1930] group-hover:text-[#D9232A] transition-colors line-clamp-1">
                    {evt.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. WE VALUE OUR EMPLOYEES SECTION (Media Gallery UI Pattern)
         ========================================================================= */}
      <section id="employee-value-section" className="relative bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6">
          
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Column: Heading, Stats & CTA */}
            <div className="relative lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-0.5 bg-[#D9232A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D9232A]">
                  OUR PEOPLE &amp; CULTURE
                </span>
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#0B1930] leading-[1.12]">
                We Value <br />
                <span className="text-[#D9232A]">Our Employees</span>
              </h2>

              <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                Our people are the driving force behind every packaging breakthrough. We foster a merit-driven environment where dedication is celebrated, growth is nurtured, and exceptional contributions are honored.
              </p>

              {/* 3 Stat Badges */}
              <div className="mt-7 grid grid-cols-3 gap-2 border-y border-slate-200/80 py-5">
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80">
                    <Award className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-black text-[#0B1930]">100+</p>
                  <p className="text-[10.5px] font-semibold text-slate-500">Annual Honors</p>
                </div>

                <div className="border-l border-slate-200/80 pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#D9232A] border border-rose-100">
                    <Heart className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-black text-[#0B1930]">100%</p>
                  <p className="text-[10.5px] font-semibold text-slate-500">Family Culture</p>
                </div>

                <div className="border-l border-slate-200/80 pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-black text-[#0B1930]">Merit</p>
                  <p className="text-[10.5px] font-semibold text-slate-500">Recognition</p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9232A] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#D9232A]/20 transition-all hover:bg-[#b81d23] hover:scale-105"
                >
                  <span>Explore Career Opportunities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Image Display */}
            <div className="relative lg:col-span-7">
              <div
                className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-200 shadow-xl group"
                onMouseEnter={() => setIsEmployeePaused(true)}
                onMouseLeave={() => setIsEmployeePaused(false)}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {/* Direct Active Image with Smooth Transition - Never flashes blue background */}
                  <img
                    key={activeEmployeeItem.id}
                    src={activeEmployeeItem.image}
                    alt={activeEmployeeItem.title}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover select-none animate-in fade-in duration-300 z-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Auto-play Pill */}
                  <button
                    type="button"
                    onClick={() => setIsEmployeePaused((p) => !p)}
                    className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10.5px] font-bold text-white backdrop-blur border border-white/20 cursor-pointer"
                  >
                    {isEmployeePaused ? (
                      <>
                        <Play className="h-2.5 w-2.5 text-emerald-400 fill-emerald-400" />
                        <span>Paused</span>
                      </>
                    ) : (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Auto-play</span>
                      </>
                    )}
                  </button>

                  {/* Bottom Info */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6 flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 mb-1.5 rounded-md bg-[#D9232A] text-[9.5px] font-black uppercase tracking-wider text-white">
                        {activeEmployeeItem.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {activeEmployeeItem.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                        <MapPin className="h-3 w-3 text-[#D9232A]" />
                        <span>{activeEmployeeItem.location}</span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-white/90 font-mono shrink-0">
                      {String(activeEmployeeIdx + 1).padStart(2, "0")} / {String(EMPLOYEE_VALUE_ITEMS.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Thumbnails Carousel Row */}
          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={prevEmployee}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A] transition-colors cursor-pointer"
              aria-label="Previous employee photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid flex-1 grid-cols-3 gap-2.5 sm:grid-cols-6">
              {EMPLOYEE_VALUE_ITEMS.map((item, idx) => {
                const isSelected = idx === activeEmployeeIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveEmployeeIdx(idx)}
                    className="group flex flex-col items-center gap-1.5 text-left cursor-pointer"
                  >
                    <div
                      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-[#D9232A] ring-2 ring-rose-500/20 shadow-md scale-[1.02]"
                          : "border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.category}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span
                      className={`text-[10.5px] font-bold text-center leading-tight line-clamp-1 ${
                        isSelected ? "text-[#0B1930]" : "text-slate-500"
                      }`}
                    >
                      {item.category}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextEmployee}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1930] shadow-sm hover:border-[#D9232A] hover:bg-rose-50 hover:text-[#D9232A] transition-colors cursor-pointer"
              aria-label="Next employee photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. QUOTE & CELEBRATION TEAM BANNER
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-50/60 via-white to-amber-50/30 py-14 border-t border-slate-200/70">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            {/* Left Column: Quote */}
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 border border-sky-200">
                <Quote className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-[#0B1930] leading-snug">
                  "It's not just about the work we do, but the memories we create together."
                </p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-[#D9232A]">
                  Team VEVRA
                </p>
              </div>
            </div>

            {/* Right Column: Wide Celebration Image */}
            <div className="relative lg:col-span-6 overflow-hidden rounded-2xl bg-slate-900 shadow-md">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <img
                  src={celebration1Img}
                  alt="Team VEVRA Memories"
                  className="h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
