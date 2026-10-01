import { useState } from "react";
import { ArrowRight, Building2, Globe, MapPin, Warehouse } from "lucide-react";

import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";
import cap05Onsite from "@/assets/capabilities/cap-05-onsite.jpg";
import serviceWarehouseRacks from "@/assets/capabilities/service-warehouse-racks.jpg";
import indiaMapImg from "@/assets/editorial/india-map-clean.jpg";

export type FacilityNode = {
  id: string;
  name: string;
  region: string;
  badges: { label: string; variant: "red" | "blue" }[];
  image: string;
  x: number;
  y: number;
  labelAnchor?: "start" | "end" | "middle";
  labelDx?: number;
  labelDy?: number;
  isHub?: boolean;
};

// Hub coordinates for Pune (Head Office)
const HUB_COORDS = { x: 245, y: 660 };

export const FACILITIES: FacilityNode[] = [
  {
    id: "pune",
    name: "Pune (Head Office)",
    region: "Maharashtra",
    badges: [
      { label: "Corporate Hub", variant: "red" },
      { label: "Manufacturing", variant: "blue" },
    ],
    image: cap05Onsite,
    x: 245,
    y: 660,
    isHub: true,
  },
  {
    id: "chakan",
    name: "Chakan",
    region: "Maharashtra",
    badges: [{ label: "Manufacturing", variant: "blue" }],
    image: cap04Pooling,
    x: 238,
    y: 642,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: -4,
  },
  {
    id: "ranjangaon",
    name: "Ranjangaon",
    region: "Maharashtra",
    badges: [
      { label: "Manufacturing", variant: "blue" },
      { label: "Warehouse", variant: "blue" },
    ],
    image: serviceWarehouseRacks,
    x: 268,
    y: 652,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: -8,
  },
  {
    id: "bhosari",
    name: "Bhosari MIDC",
    region: "Maharashtra",
    badges: [{ label: "Manufacturing", variant: "blue" }],
    image: cap05Onsite,
    x: 232,
    y: 654,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 12,
  },
  {
    id: "nashik",
    name: "Nashik",
    region: "Maharashtra",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 236,
    y: 605,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 2,
  },
  {
    id: "aurangabad",
    name: "Aurangabad",
    region: "Maharashtra",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: cap04Pooling,
    x: 300,
    y: 610,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 2,
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 172,
    y: 495,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 4,
  },
  {
    id: "indore",
    name: "Indore",
    region: "Madhya Pradesh",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: cap04Pooling,
    x: 295,
    y: 515,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 4,
  },
  {
    id: "gurugram",
    name: "Gurugram",
    region: "NCR",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 282,
    y: 310,
    labelAnchor: "start",
    labelDx: 12,
    labelDy: 4,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: cap04Pooling,
    x: 298,
    y: 835,
    labelAnchor: "end",
    labelDx: -10,
    labelDy: 4,
  },
  {
    id: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    badges: [{ label: "Warehouse", variant: "blue" }],
    image: serviceWarehouseRacks,
    x: 368,
    y: 820,
    labelAnchor: "start",
    labelDx: 10,
    labelDy: 4,
  },
];

function getArcCurve(node: FacilityNode) {
  const mx = (HUB_COORDS.x + node.x) / 2 + (node.y - HUB_COORDS.y) * 0.12;
  const my = (HUB_COORDS.y + node.y) / 2 - (node.x - HUB_COORDS.x) * 0.12;
  return `M ${HUB_COORDS.x} ${HUB_COORDS.y} Q ${mx} ${my} ${node.x} ${node.y}`;
}

export function IndiaNetworkMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
      
      {/* Left Column: Interactive Map Visualization Card */}
      <div className="lg:col-span-6">
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
              11 Locations Live
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

              {/* Uploaded High-Res India Map Image Base */}
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
                  return (
                    <g key={node.id} className="transition-opacity duration-300">
                      <path
                        d={getArcCurve(node)}
                        fill="none"
                        stroke="#D9232A"
                        strokeWidth={isHovered ? "3.2" : "2"}
                        strokeDasharray={isHovered ? "none" : "4 4"}
                        strokeOpacity={isHovered ? "1" : "0.7"}
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

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform duration-200"
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Hover Hit Area */}
                    <circle cx={node.x} cy={node.y} r="26" fill="transparent" />

                    {isHub ? (
                      /* Highlighted Pune Hub with Radiating Rings & Label */
                      <g>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isHovered ? "28" : "22"}
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
                            width="142"
                            height="30"
                            rx="15"
                            fill="#D9232A"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          />
                          <text
                            x="71"
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
                            fillOpacity="0.2"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isHovered ? "8" : "6"}
                          fill={isHovered ? "#991b1b" : "#D9232A"}
                          stroke="#ffffff"
                          strokeWidth="2.2"
                        />
                        
                        {/* City Label Text with Crisp White Outline Halo */}
                        <text
                          x={node.x + dx}
                          y={node.y + dy}
                          textAnchor={anchor}
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="4.5"
                          strokeLinejoin="round"
                          fontSize="13.5"
                          fontWeight="800"
                          opacity="0.95"
                        >
                          {node.name}
                        </text>
                        <text
                          x={node.x + dx}
                          y={node.y + dy}
                          textAnchor={anchor}
                          fill={isHovered ? "#D9232A" : "#0f172a"}
                          fontSize="13.5"
                          fontWeight={isHovered ? "900" : "800"}
                          className="transition-colors"
                        >
                          {node.name}
                        </text>
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
                  <span>Our Locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 border-t-2 border-dashed border-[#D9232A]" />
                  <span>Supply Network</span>
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

      {/* Right Column: Facilities List (All 11 fitted seamlessly in one view without scrollbar) */}
      <div className="lg:col-span-6 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-[#D9232A]" />
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#D9232A]">
              OUR FACILITIES
            </p>
          </div>
          <span className="text-[11px] font-bold text-slate-400">
            11 Strategic Locations
          </span>
        </div>

        {/* Stacked Facilities List - Fits all 11 perfectly in single view */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {FACILITIES.map((facility) => {
            const isHovered = activeNode === facility.id;

            return (
              <div
                key={facility.id}
                onMouseEnter={() => setActiveNode(facility.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`group flex items-center justify-between gap-2.5 rounded-xl border px-3 py-2 sm:py-2 transition-all cursor-pointer ${
                  isHovered
                    ? "border-[#D9232A] bg-rose-50/70 shadow-sm scale-[1.01]"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                }`}
              >
                {/* Left Thumbnail + Info */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="h-10 w-12 sm:h-10 sm:w-14 shrink-0 rounded-lg object-cover border border-slate-200"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-[13px] font-black text-slate-900 truncate leading-snug">
                      {facility.name}
                    </h4>
                    <p className="text-[10.5px] font-medium text-slate-500 truncate leading-none mt-0.5">
                      {facility.region}
                    </p>
                  </div>
                </div>

                {/* Badges + Arrow */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1.5">
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

                  {/* Arrow Action Button */}
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                      isHovered
                        ? "bg-[#D9232A] text-white"
                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                    }`}
                  >
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
