import { useState, useMemo, useRef } from "react";
import { Building2, Globe, MapPin, Search, Warehouse } from "lucide-react";

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

export function IndiaNetworkMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FacilityCategory>("All");
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

  const handleSelectFacility = (id: string) => {
    setActiveNode(id);
    const element = document.getElementById(`facility-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
      
      {/* Left Column: Interactive Map Visualization Card */}
      <div className="lg:col-span-6 sticky top-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm">
          
          {/* Map Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
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

          {/* SVG Map Container with India Map Image */}
          <div className="relative mt-2 aspect-[853/1024] w-full max-w-[580px] mx-auto flex items-center justify-center select-none">
            <svg
              viewBox="0 0 853 1024"
              className="h-full w-full max-h-[620px]"
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

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 text-xs scrollbar-none">
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
                className={`shrink-0 rounded-lg px-2.5 py-1 font-bold text-[11px] transition-all ${
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

        {/* Scrollable Stacked Facilities List */}
        <div
          ref={listRef}
          className="flex flex-col gap-2 max-h-[580px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300"
        >
          {filteredFacilities.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center bg-white text-slate-400 text-xs">
              No facility found matching "{searchQuery}".
            </div>
          ) : (
            filteredFacilities.map((facility) => {
              const isHovered = activeNode === facility.id;

              return (
                <div
                  id={`facility-card-${facility.id}`}
                  key={facility.id}
                  onMouseEnter={() => setActiveNode(facility.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => handleSelectFacility(facility.id)}
                  className={`group flex items-center justify-between gap-3 rounded-xl border p-2.5 sm:p-3 transition-all cursor-pointer ${
                    isHovered
                      ? "border-[#D9232A] bg-rose-50/80 shadow-md scale-[1.01]"
                      : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/70 shadow-xs"
                  }`}
                >
                  {/* Left Thumbnail + Info */}
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="h-11 w-13 sm:h-12 sm:w-16 shrink-0 rounded-lg object-cover border border-slate-200 shadow-xs"
                      loading="lazy"
                    />
                    <div className="min-w-0">
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
                  </div>

                  {/* Facility Badges */}
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="flex flex-wrap items-center justify-end gap-1 max-w-[200px] sm:max-w-[240px]">
                      {facility.badges.map((b) => (
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
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
  );
}
