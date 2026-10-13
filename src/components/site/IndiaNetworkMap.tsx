import { useState, useMemo, useRef } from "react";
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  Compass,
  ExternalLink,
  Globe,
  Loader2,
  MapPin,
  Navigation,
  Search,
  Warehouse,
} from "lucide-react";

import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";
import cap05Onsite from "@/assets/capabilities/cap-05-onsite.jpg";
import serviceWarehouseRacks from "@/assets/capabilities/service-warehouse-racks.jpg";
import indiaMapImg from "@/assets/editorial/india-map-clean.jpg";

export type FacilityCategory = "All" | "Maharashtra" | "NCR / North" | "Gujarat" | "Madhya Pradesh" | "South India";

export type FacilityNode = {
  id: string;
  name: string;
  region: string;
  pinCode?: string;
  lsp?: string;
  category: Exclude<FacilityCategory, "All">;
  badges: { label: string; variant: "red" | "blue" }[];
  image: string;
  x: number;
  y: number;
  lat: number;
  lng: number;
  labelAnchor?: "start" | "end" | "middle";
  labelDx?: number;
  labelDy?: number;
  isHub?: boolean;
};

// Hub coordinates for Pune (Head Office & Central Hub)
const HUB_COORDS = { x: 245, y: 660 };

export const FACILITIES: FacilityNode[] = [
  {
    id: "pune-hub",
    name: "Pune (Head Office)",
    region: "Maharashtra",
    pinCode: "412105",
    lsp: "SBL TPT",
    category: "Maharashtra",
    badges: [
      { label: "Corporate Hub", variant: "red" },
      { label: "LSP: SBL TPT", variant: "red" },
    ],
    image: cap05Onsite,
    x: 245,
    y: 660,
    lat: 18.7246,
    lng: 73.6871,
    isHub: true,
  },
  {
    id: "chakan",
    name: "Chakan (Pune)",
    region: "Maharashtra",
    pinCode: "410501",
    lsp: "Navdurga TPT",
    category: "Maharashtra",
    badges: [{ label: "LSP: Navdurga TPT", variant: "red" }],
    image: cap04Pooling,
    x: 238,
    y: 642,
    lat: 18.7606,
    lng: 73.8596,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: -4,
  },
  {
    id: "kuruli",
    name: "Kuruli (Pune)",
    region: "Maharashtra",
    pinCode: "410501",
    lsp: "Shree Balaji TPT",
    category: "Maharashtra",
    badges: [{ label: "LSP: Shree Balaji", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 242,
    y: 646,
    lat: 18.736,
    lng: 73.8745,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: -4,
  },
  {
    id: "pune-rathode",
    name: "Pune (Rathode Logistics Hub)",
    region: "Maharashtra",
    pinCode: "410501",
    lsp: "Rathode TPT",
    category: "Maharashtra",
    badges: [{ label: "LSP: Rathode TPT", variant: "red" }],
    image: cap04Pooling,
    x: 236,
    y: 652,
    lat: 18.7512,
    lng: 73.8614,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 6,
  },
  {
    id: "cie-gear",
    name: "CIE Gear Chakan",
    region: "Maharashtra",
    pinCode: "410501",
    lsp: "Rathode TPT",
    category: "Maharashtra",
    badges: [{ label: "LSP: Rathode TPT", variant: "red" }],
    image: cap05Onsite,
    x: 246,
    y: 638,
    lat: 18.771,
    lng: 73.834,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: -6,
  },
  {
    id: "aam-india",
    name: "AAM India (Chakan)",
    region: "Maharashtra",
    pinCode: "410501",
    lsp: "Varroc",
    category: "Maharashtra",
    badges: [{ label: "LSP: Varroc", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 248,
    y: 644,
    lat: 18.7645,
    lng: 73.848,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: -2,
  },
  {
    id: "urse",
    name: "Urse (Talegaon)",
    region: "Maharashtra",
    pinCode: "410406",
    lsp: "Varroc",
    category: "Maharashtra",
    badges: [{ label: "LSP: Varroc", variant: "red" }],
    image: cap04Pooling,
    x: 230,
    y: 648,
    lat: 18.723,
    lng: 73.642,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 2,
  },
  {
    id: "kspg",
    name: "KSPG (Takwe)",
    region: "Maharashtra",
    pinCode: "412106",
    lsp: "Varroc",
    category: "Maharashtra",
    badges: [{ label: "LSP: Varroc", variant: "red" }],
    image: cap05Onsite,
    x: 234,
    y: 656,
    lat: 18.758,
    lng: 73.571,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 4,
  },
  {
    id: "danfoss",
    name: "Danfoss (Pune)",
    region: "Maharashtra",
    pinCode: "411018",
    lsp: "Varroc",
    category: "Maharashtra",
    badges: [{ label: "LSP: Varroc", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 238,
    y: 658,
    lat: 18.6278,
    lng: 73.8131,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 10,
  },
  {
    id: "sambhajinagar-chitegaon",
    name: "Chhatrapati Sambhajinagar (Chitegaon)",
    region: "Maharashtra",
    pinCode: "431105",
    lsp: "VECV",
    category: "Maharashtra",
    badges: [{ label: "LSP: VECV", variant: "red" }],
    image: cap04Pooling,
    x: 304,
    y: 610,
    lat: 19.824,
    lng: 75.253,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 2,
  },
  {
    id: "waluj",
    name: "Waluj, Sambhajinagar",
    region: "Maharashtra",
    pinCode: "431136",
    lsp: "Varroc",
    category: "Maharashtra",
    badges: [{ label: "LSP: Varroc", variant: "red" }],
    image: cap05Onsite,
    x: 294,
    y: 618,
    lat: 19.842,
    lng: 75.231,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 8,
  },
  {
    id: "dewas",
    name: "Dewas",
    region: "Madhya Pradesh",
    pinCode: "455001",
    lsp: "Navdurga TPT",
    category: "Madhya Pradesh",
    badges: [{ label: "LSP: Navdurga TPT", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 308,
    y: 508,
    lat: 22.9676,
    lng: 76.0534,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: -2,
  },
  {
    id: "indore-vecv",
    name: "Indore (VECV)",
    region: "Madhya Pradesh",
    pinCode: "454774",
    lsp: "VECV",
    category: "Madhya Pradesh",
    badges: [{ label: "LSP: VECV", variant: "red" }],
    image: cap04Pooling,
    x: 292,
    y: 520,
    lat: 22.61,
    lng: 75.68,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 4,
  },
  {
    id: "sanand",
    name: "Sanand",
    region: "Gujarat",
    pinCode: "382170",
    lsp: "Rathode TPT",
    category: "Gujarat",
    badges: [{ label: "LSP: Rathode TPT", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 168,
    y: 498,
    lat: 22.9904,
    lng: 72.382,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 4,
  },
  {
    id: "cie-rajkot",
    name: "CIE Rajkot",
    region: "Gujarat",
    pinCode: "360026",
    lsp: "Rathode TPT",
    category: "Gujarat",
    badges: [{ label: "LSP: Rathode TPT", variant: "red" }],
    image: cap05Onsite,
    x: 138,
    y: 524,
    lat: 22.3039,
    lng: 70.8022,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 4,
  },
  {
    id: "manesar",
    name: "Manesar",
    region: "Haryana / NCR",
    pinCode: "122004",
    lsp: "SBL TPT",
    category: "NCR / North",
    badges: [{ label: "LSP: SBL TPT", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 278,
    y: 316,
    lat: 28.355,
    lng: 76.94,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: -2,
  },
  {
    id: "faridabad",
    name: "Faridabad",
    region: "Haryana / NCR",
    pinCode: "121004",
    lsp: "SBL TPT",
    category: "NCR / North",
    badges: [{ label: "LSP: SBL TPT", variant: "red" }],
    image: cap04Pooling,
    x: 288,
    y: 320,
    lat: 28.4089,
    lng: 77.3178,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 0,
  },
  {
    id: "ballabgarh-jcb",
    name: "Ballabgarh",
    region: "Haryana / NCR",
    pinCode: "121004",
    lsp: "JCB",
    category: "NCR / North",
    badges: [{ label: "LSP: JCB", variant: "red" }],
    image: cap05Onsite,
    x: 290,
    y: 326,
    lat: 28.338,
    lng: 77.325,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 6,
  },
  {
    id: "noida",
    name: "Noida",
    region: "Uttar Pradesh / NCR",
    pinCode: "201318",
    lsp: "Varroc",
    category: "NCR / North",
    badges: [{ label: "LSP: Varroc", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 298,
    y: 308,
    lat: 28.5355,
    lng: 77.391,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: -4,
  },
  {
    id: "zaheerabad",
    name: "Zaheerabad",
    region: "Telangana",
    pinCode: "502220",
    lsp: "Shree Balaji TPT",
    category: "South India",
    badges: [{ label: "LSP: Shree Balaji", variant: "red" }],
    image: cap04Pooling,
    x: 325,
    y: 692,
    lat: 17.68,
    lng: 77.61,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 4,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    pinCode: "560001",
    lsp: "JCB",
    category: "South India",
    badges: [{ label: "LSP: JCB", variant: "red" }],
    image: serviceWarehouseRacks,
    x: 298,
    y: 835,
    lat: 12.9716,
    lng: 77.5946,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 4,
  },
  {
    id: "hosur",
    name: "Hosur",
    region: "Tamil Nadu",
    pinCode: "635126",
    lsp: "JCB",
    category: "South India",
    badges: [{ label: "LSP: JCB", variant: "red" }],
    image: cap05Onsite,
    x: 308,
    y: 846,
    lat: 12.7409,
    lng: 77.8253,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 4,
  },
  {
    id: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    pinCode: "600001",
    lsp: "SBL TPT",
    category: "South India",
    badges: [{ label: "LSP: SBL TPT", variant: "red" }],
    image: cap04Pooling,
    x: 368,
    y: 820,
    lat: 13.0827,
    lng: 80.2707,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 4,
  },
];

const CATEGORIES: FacilityCategory[] = [
  "All",
  "Maharashtra",
  "NCR / North",
  "Gujarat",
  "Madhya Pradesh",
  "South India",
];

function getArcCurve(node: FacilityNode) {
  const mx = (HUB_COORDS.x + node.x) / 2 + (node.y - HUB_COORDS.y) * 0.12;
  const my = (HUB_COORDS.y + node.y) / 2 - (node.x - HUB_COORDS.x) * 0.12;
  return `M ${HUB_COORDS.x} ${HUB_COORDS.y} Q ${mx} ${my} ${node.x} ${node.y}`;
}

// Calculate distance in km between two GPS coordinates using Haversine formula
function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// Build Google Maps driving directions URL
function getDirectionsUrl(facility: FacilityNode, userCoords?: { lat: number; lng: number } | null) {
  if (userCoords) {
    return `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${facility.lat},${facility.lng}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${facility.lat},${facility.lng}`;
}

export function IndiaNetworkMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FacilityCategory>("All");
  const [isLocating, setIsLocating] = useState(false);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestFacility, setNearestFacility] = useState<{ facility: FacilityNode; distanceKm: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter facilities based on category and search query (name, region, pinCode, lsp)
  const filteredFacilities = useMemo(() => {
    return FACILITIES.filter((f) => {
      const matchesCategory =
        selectedCategory === "All" || f.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.region.toLowerCase().includes(q) ||
        (f.pinCode && f.pinCode.includes(q)) ||
        (f.lsp && f.lsp.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Accordion state: by default empty {} means ALL regions are EXPANDED so all 23 locations are visible
  const [collapsedRegions, setCollapsedRegions] = useState<Record<string, boolean>>({});

  const toggleRegion = (categoryName: string) => {
    setCollapsedRegions((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Group facilities strictly by region order
  const groupedFacilities = useMemo(() => {
    const regionOrder: Exclude<FacilityCategory, "All">[] = [
      "Maharashtra",
      "NCR / North",
      "Gujarat",
      "Madhya Pradesh",
      "South India",
    ];

    const groups: { category: Exclude<FacilityCategory, "All">; items: FacilityNode[] }[] = [];

    regionOrder.forEach((regionName) => {
      if (selectedCategory === "All" || selectedCategory === regionName) {
        const items = filteredFacilities.filter((f) => f.category === regionName);
        if (items.length > 0) {
          groups.push({ category: regionName, items });
        }
      }
    });

    return groups;
  }, [filteredFacilities, selectedCategory]);

  const areAllCollapsed = useMemo(() => {
    return (
      groupedFacilities.length > 0 &&
      groupedFacilities.every((g) => collapsedRegions[g.category] === true)
    );
  }, [groupedFacilities, collapsedRegions]);

  const toggleAllRegions = () => {
    if (areAllCollapsed) {
      setCollapsedRegions({});
    } else {
      const all: Record<string, boolean> = {};
      groupedFacilities.forEach((g) => {
        all[g.category] = true;
      });
      setCollapsedRegions(all);
    }
  };

  const handleSelectFacility = (id: string) => {
    setActiveNode(id);
    const element = document.getElementById(`facility-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleFindNearest = async () => {
    setIsLocating(true);
    setLocationStatus("Locating nearest VEVRA facility to you...");

    // Helper to calculate closest and navigate
    const applyClosestAndNavigate = (userLat: number, userLng: number) => {
      setUserCoords({ lat: userLat, lng: userLng });

      let closest: FacilityNode = FACILITIES[0];
      let minDistance = calculateDistanceKm(userLat, userLng, closest.lat, closest.lng);

      for (let i = 1; i < FACILITIES.length; i++) {
        const dist = calculateDistanceKm(userLat, userLng, FACILITIES[i].lat, FACILITIES[i].lng);
        if (dist < minDistance) {
          minDistance = dist;
          closest = FACILITIES[i];
        }
      }

      setNearestFacility({ facility: closest, distanceKm: minDistance });
      setSelectedCategory("All");
      setCollapsedRegions((prev) => ({ ...prev, [closest.category]: false }));
      setActiveNode(closest.id);
      setIsLocating(false);
      setLocationStatus(null);

      // Smooth scroll to closest facility card
      setTimeout(() => {
        const element = document.getElementById(`facility-card-${closest.id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);

      // Open Google Maps driving directions directly to that nearest facility
      const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${closest.lat},${closest.lng}`;
      window.open(gmapsUrl, "_blank", "noopener,noreferrer");
    };

    const tryIpFallback = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        if (data && data.success && data.latitude && data.longitude) {
          applyClosestAndNavigate(Number(data.latitude), Number(data.longitude));
          return true;
        }
      } catch (err) {
        console.warn("IP geolocation fallback failed:", err);
      }
      return false;
    };

    // If browser supports geolocation, try it with network accuracy first
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          applyClosestAndNavigate(position.coords.latitude, position.coords.longitude);
        },
        async (error) => {
          console.warn("Browser GPS position unavailable, switching to IP location:", error.message);
          const ipSuccess = await tryIpFallback();
          if (!ipSuccess) {
            // Default to Pune Central Hub if both fail
            setIsLocating(false);
            const fallback = FACILITIES[0];
            setNearestFacility({ facility: fallback, distanceKm: 0 });
            setActiveNode(fallback.id);
            window.open(
              `https://www.google.com/maps/dir/?api=1&destination=${fallback.lat},${fallback.lng}`,
              "_blank",
              "noopener,noreferrer"
            );
          }
        },
        { enableHighAccuracy: false, timeout: 4000, maximumAge: 300000 }
      );
    } else {
      const ipSuccess = await tryIpFallback();
      if (!ipSuccess) {
        setIsLocating(false);
        const fallback = FACILITIES[0];
        setNearestFacility({ facility: fallback, distanceKm: 0 });
        setActiveNode(fallback.id);
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${fallback.lat},${fallback.lng}`,
          "_blank",
          "noopener,noreferrer"
        );
      }
    }
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
      
      {/* Left Column: Interactive Map Visualization Card (Sticky, shifted up, fully fits viewport) */}
      <div className="lg:col-span-6 lg:sticky lg:top-14 xl:top-16 lg:self-start z-10">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-sm max-h-[calc(100vh-4.5rem)] flex flex-col justify-between">
          
          {/* Map Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#D9232A]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9232A] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9232A]" />
              </span>
              Connected Supply Network
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              {FACILITIES.length} Locations Live
            </span>
          </div>

          {/* SVG Map Container with India Map Image (Proportionally scaled to never cut off bottom) */}
          <div className="relative mt-1 w-full max-w-[500px] h-[calc(100vh-9.5rem)] max-h-[490px] mx-auto flex items-center justify-center select-none">
            <svg
              viewBox="0 0 853 1024"
              className="h-full w-auto max-h-full max-w-full"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Map of India showing VEVRA packaging warehouse network"
            >
              <defs>
                <linearGradient id="hubPinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
                <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.2" />
                </filter>
              </defs>

              {/* High-Res India Map Image Base */}
              <image
                href={indiaMapImg}
                x="0"
                y="0"
                width="853"
                height="1024"
                preserveAspectRatio="xMidYMid meet"
              />

              {/* Red Dotted Supply Network Arcs Connecting to Pune Hub */}
              <g>
                {FACILITIES.filter((n) => !n.isHub).map((node) => {
                  const isHovered = activeNode === node.id;
                  const isCategoryMatch = selectedCategory === "All" || node.category === selectedCategory;
                  return (
                    <g key={node.id} className="transition-opacity duration-300">
                      <path
                        d={getArcCurve(node)}
                        fill="none"
                        stroke="#D9232A"
                        strokeWidth={isHovered ? "3.2" : "2"}
                        strokeDasharray={isHovered ? "none" : "4 4"}
                        strokeOpacity={isHovered ? "1" : isCategoryMatch ? "0.6" : "0.2"}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </g>

              {/* Location Pins & Markers */}
              {FACILITIES.map((node) => {
                const isHovered = activeNode === node.id;
                const isHub = node.isHub;
                const anchor = node.labelAnchor || "start";
                const dx = node.labelDx ?? 10;
                const dy = node.labelDy ?? 4;
                const isCategoryMatch = selectedCategory === "All" || node.category === selectedCategory;

                return (
                  <g
                    key={node.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      !isCategoryMatch && !isHovered ? "opacity-35" : "opacity-100"
                    }`}
                    onMouseEnter={() => handleSelectFacility(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => handleSelectFacility(node.id)}
                  >
                    {/* Hover Hit Area */}
                    <circle cx={node.x} cy={node.y} r="24" fill="transparent" />

                    {isHub ? (
                      /* Highlighted Pune Hub with Radiating Rings & Label */
                      <g>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isHovered ? "28" : "20"}
                          fill="#D9232A"
                          fillOpacity="0.25"
                          className="animate-pulse"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="10"
                          fill="url(#hubPinGradient)"
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        {/* Red Head Office Tag Badge */}
                        <g transform={`translate(${node.x + 14}, ${node.y - 14})`} filter="url(#badgeShadow)">
                          <rect
                            x="0"
                            y="0"
                            width="146"
                            height="30"
                            rx="15"
                            fill="#D9232A"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          />
                          <text
                            x="73"
                            y="19"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="12.5"
                            fontWeight="800"
                            letterSpacing="0.02em"
                          >
                            Pune (Head Office)
                          </text>
                        </g>
                      </g>
                    ) : (
                      /* Standard Facility Pin Marker */
                      <g>
                        {/* Pin Dot with Glow on Hover */}
                        {isHovered && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="14"
                            fill="#D9232A"
                            fillOpacity="0.25"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isHovered ? "8" : "5.5"}
                          fill={isHovered ? "#991b1b" : "#D9232A"}
                          stroke="#ffffff"
                          strokeWidth="2"
                        />
                        
                        {/* City Label Text (Show if hovered or key regional hub) */}
                        {(isHovered || node.labelAnchor) && (
                          <g>
                            <text
                              x={node.x + dx}
                              y={node.y + dy}
                              textAnchor={anchor}
                              fill="#ffffff"
                              stroke="#ffffff"
                              strokeWidth="4"
                              strokeLinejoin="round"
                              fontSize="12.5"
                              fontWeight="800"
                              opacity="0.95"
                            >
                              {node.name.split(" ")[0]}
                            </text>
                            <text
                              x={node.x + dx}
                              y={node.y + dy}
                              textAnchor={anchor}
                              fill={isHovered ? "#D9232A" : "#0f172a"}
                              fontSize="12.5"
                              fontWeight={isHovered ? "900" : "800"}
                              className="transition-colors"
                            >
                              {node.name.split(" ")[0]}
                            </text>
                          </g>
                        )}
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Bottom-Left Map Legend */}
            <div className="absolute bottom-3 left-3 z-10 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 border border-slate-200/90 shadow-md select-none text-slate-800">
              <div className="space-y-1.5 text-[11px] font-bold">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#D9232A]" />
                  <span>23 Verified Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 border-t-2 border-dashed border-[#D9232A]" />
                  <span>Integrated Supply Lines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-[#D9232A] bg-rose-100" />
                  <span>Head Office (Pune)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Column: Facilities List & Search / Filter */}
      <div className="lg:col-span-6 flex flex-col">
        
        {/* Header & Total Count */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-[#D9232A]" />
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
              OUR FACILITIES
            </p>
          </div>
          <span className="text-[11px] font-bold text-slate-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            {FACILITIES.length} Strategic Locations
          </span>
        </div>

        {/* Find Nearest on Google Maps Action Bar */}
        <div className="mb-3.5 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 rounded-2xl border border-rose-200/90 bg-gradient-to-r from-rose-50/90 via-white to-rose-50/60 p-3 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D9232A] text-white shadow-xs">
                <Compass className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black text-slate-900 leading-tight">
                  Locate Nearest VEVRA
                </p>
                <p className="text-[11px] font-semibold text-slate-500 leading-tight">
                  Auto-detect nearest facility & open Google Maps directions
                </p>
              </div>
            </div>

            <button
              onClick={handleFindNearest}
              disabled={isLocating}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#D9232A] hover:bg-[#b81d23] text-white px-3.5 py-2 text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-60 shrink-0"
              title="Click to find nearest VEVRA facility and open directions in Google Maps"
            >
              {isLocating ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Locating Near You...</span>
                </>
              ) : (
                <>
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Find Nearest on Google Maps ↗</span>
                </>
              )}
            </button>
          </div>

          {/* Nearest Facility Banner once detected */}
          {nearestFacility && (
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-xs font-bold text-emerald-950">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                </span>
                <span>
                  Nearest to you: <strong className="text-emerald-950">{nearestFacility.facility.name}</strong> (~{nearestFacility.distanceKm} km away)
                </span>
              </div>
              <a
                href={getDirectionsUrl(nearestFacility.facility, userCoords)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-700 hover:text-emerald-900 underline"
              >
                <span>Navigate in Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}

          {locationStatus && (
            <p className="text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/90 rounded-lg px-2.5 py-1">
              {locationStatus}
            </p>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by city, PIN code, or LSP partner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 shadow-xs focus:border-[#D9232A] focus:outline-none focus:ring-2 focus:ring-[#D9232A]/20 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills & Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? FACILITIES.length
                  : FACILITIES.filter((f) => f.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-lg px-2.5 py-1 font-bold text-[11px] transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#D9232A] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Quick Expand All / Collapse All Button */}
          {groupedFacilities.length > 1 && (
            <button
              type="button"
              onClick={toggleAllRegions}
              className="shrink-0 text-[10.5px] font-bold text-slate-600 hover:text-[#D9232A] bg-slate-100 hover:bg-rose-50 border border-slate-200 px-2 py-1 rounded-md transition-colors cursor-pointer"
            >
              {areAllCollapsed ? "Expand All" : "Collapse All"}
            </button>
          )}
        </div>

        {/* All Facilities Grouped by Region (No Inner Scrollbar) */}
        <div ref={listRef} className="flex flex-col gap-3">
          {groupedFacilities.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center bg-white text-slate-400 text-xs">
              No facility found matching "{searchQuery}".
            </div>
          ) : (
            groupedFacilities.map((group) => {
              const isCollapsed = collapsedRegions[group.category] === true;

              return (
                <div
                  key={group.category}
                  className="rounded-2xl border border-slate-200/90 bg-white shadow-2xs overflow-hidden transition-all"
                >
                  {/* Region Accordion Header Bar */}
                  <button
                    type="button"
                    onClick={() => toggleRegion(group.category)}
                    className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 bg-slate-50/90 hover:bg-slate-100/80 border-b border-slate-100 text-left transition-colors cursor-pointer select-none"
                    aria-expanded={!isCollapsed}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#D9232A]" />
                      <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                        {group.category}
                      </span>
                      <span className="rounded-md bg-slate-200/80 text-slate-700 px-1.5 py-0.5 text-[10px] font-black">
                        {group.items.length} {group.items.length === 1 ? "Location" : "Locations"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400">
                        {isCollapsed ? "Expand" : "Collapse"}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                          isCollapsed ? "-rotate-90" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Region Facility Cards List (Expanded by Default) */}
                  {!isCollapsed && (
                    <div className="p-2 sm:p-2.5 flex flex-col gap-2">
                      {group.items.map((facility) => {
                        const isHovered = activeNode === facility.id;
                        const isNearest = nearestFacility?.facility.id === facility.id;

                        return (
                          <div
                            id={`facility-card-${facility.id}`}
                            key={facility.id}
                            onMouseEnter={() => setActiveNode(facility.id)}
                            onMouseLeave={() => setActiveNode(null)}
                            onClick={() => handleSelectFacility(facility.id)}
                            className={`group flex items-center justify-between gap-3 rounded-xl border p-2.5 sm:p-3 transition-all cursor-pointer ${
                              isNearest
                                ? "border-emerald-500 bg-emerald-50/40 shadow-sm"
                                : isHovered
                                ? "border-[#D9232A] bg-rose-50/80 shadow-md scale-[1.005]"
                                : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/70 shadow-2xs"
                            }`}
                          >
                            {/* Facility Info */}
                            <div className="min-w-0 pr-2">
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs sm:text-[13.5px] font-black text-slate-950 truncate leading-snug">
                                  {facility.name}
                                </h4>
                              </div>

                              {/* Region & PIN Code */}
                              <div className="flex items-center gap-1.5 mt-0.5 text-[11px] font-semibold text-slate-500">
                                <MapPin className="h-3 w-3 text-[#D9232A] shrink-0" />
                                <span className="truncate">{facility.region}</span>
                                {facility.pinCode && (
                                  <>
                                    <span className="text-slate-300">•</span>
                                    <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.2 rounded text-[10.5px]">
                                      PIN: {facility.pinCode}
                                    </span>
                                  </>
                                )}
                              </div>

                              {/* LSP Partner if specified */}
                              {facility.lsp && (
                                <p className="text-[10px] font-semibold text-rose-700 mt-0.5 truncate">
                                  Partner / LSP: {facility.lsp}
                                </p>
                              )}
                            </div>

                            {/* Facility Badges + Google Maps Directions Button */}
                            <div className="flex items-center gap-2 shrink-0">
                              <div className="flex flex-wrap items-center justify-end gap-1 max-w-[200px] sm:max-w-[240px]">
                                {isNearest && (
                                  <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 text-[9.5px] font-extrabold leading-none">
                                    📍 Nearest (~{nearestFacility.distanceKm} km)
                                  </span>
                                )}
                                {facility.badges
                                  .filter((b) => !b.label.toLowerCase().startsWith("lsp"))
                                  .map((b) => (
                                    <span
                                      key={b.label}
                                      className={`rounded-full px-2 py-0.5 text-[9.5px] font-bold leading-none ${
                                        b.variant === "red"
                                          ? "bg-[#D9232A] text-white"
                                          : "bg-sky-50 text-sky-700 border border-sky-200/70"
                                      }`}
                                    >
                                      {b.label}
                                    </span>
                                  ))}
                              </div>

                              {/* Google Maps Directions Redirect Arrow */}
                              <a
                                href={getDirectionsUrl(facility, userCoords)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group/arrow flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs transition-all hover:border-[#D9232A] hover:bg-[#D9232A] hover:text-white hover:scale-105 active:scale-95"
                                title={`Open directions to ${facility.name} in Google Maps`}
                                aria-label={`Open directions to ${facility.name} in Google Maps`}
                              >
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
  );
}
