import React, { useLayoutEffect, useRef, useState } from "react";
import "./ProjectDevelopmentPhases.css";

/* Reference canvas size — everything is positioned on this and scaled. */
const BASE_W = 760;
const BASE_H = 490;

/* ------------------------------------------------------------------ */
/* Icons (inline SVG, no extra dependency)                             */
/* ------------------------------------------------------------------ */

const ICONS: Record<string, React.ReactNode> = {
  docSearch: (
    <>
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
      <path d="M13 3l5 5v2" />
      <path d="M13 3v5h5" />
      <path d="M8 12h4M8 16h2" />
      <circle cx="16.5" cy="16.5" r="3" />
      <path d="M18.8 18.8L21 21" />
    </>
  ),
  chart: (
    <>
      <rect x="3" y="14" width="4" height="7" rx="1" fill="#fff" />
      <rect x="10" y="10" width="4" height="11" rx="1" fill="#fff" />
      <rect x="17" y="7" width="4" height="14" rx="1" fill="#fff" />
      <path d="M3.5 9.5l5-4 3.5 2.5 7-5.5" />
      <path d="M15.5 2.5H19.5V6.5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  design: (
    <>
      <g transform="rotate(45 12 12)">
        <rect x="9" y="1.5" width="6" height="21" rx="1.2" />
        <path d="M9 6h2.6M9 10h2.6M9 14h2.6M9 18h2.6" />
      </g>
      <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#fff" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" style={{ stroke: "var(--from)" }} />
    </>
  ),
  box: (
    <>
      <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
      <path d="M2.32 6.16L12 11l9.68-4.84" />
      <path d="M12 22.76V11" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </>
  ),
  people: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

function Icon({ name }: { name: string }) {
  return (
    <svg
      className="pdp__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Phase data                                                          */
/* ------------------------------------------------------------------ */

const LEAF = "28px 18px 28px 18px";

interface Phase {
  id: string;
  icon: string;
  numberIn: "text" | "icon" | "both";
  lines: string[];
  box: { left: number; top: number; width: number; height: number };
  radius: string;
  from: string;
  to: string;
  glow: string;
}

const PHASES: Phase[] = [
  {
    id: "01",
    icon: "docSearch",
    numberIn: "text",
    lines: ["Project", "Identification"],
    box: { left: 297, top: 54, width: 166, height: 44 },
    radius: "22px",
    from: "#1f47a4",
    to: "#132b70",
    glow: "rgba(24, 52, 136, 0.5)",
  },
  {
    id: "02",
    icon: "chart",
    numberIn: "both",
    lines: ["In depth analysis", "and current flow", "review"],
    box: { left: 512, top: 88, width: 158, height: 64 },
    radius: LEAF,
    from: "#3d9dff",
    to: "#1f74e8",
    glow: "rgba(38, 122, 240, 0.5)",
  },
  {
    id: "03",
    icon: "gear",
    numberIn: "both",
    lines: ["C.Q.S *", "improvement", "identification"],
    box: { left: 532, top: 200, width: 152, height: 68 },
    radius: LEAF,
    from: "#1fc8b3",
    to: "#0d9c8f",
    glow: "rgba(16, 166, 150, 0.5)",
  },
  {
    id: "04",
    icon: "design",
    numberIn: "both",
    lines: ["Design of", "packaging and", "services"],
    box: { left: 508, top: 308, width: 160, height: 76 },
    radius: LEAF,
    from: "#ffae40",
    to: "#fa7418",
    glow: "rgba(250, 128, 30, 0.5)",
  },
  {
    id: "05",
    icon: "doc",
    numberIn: "icon",
    lines: ["Techno commercial", "proposal to customer"],
    box: { left: 293, top: 408, width: 174, height: 52 },
    radius: LEAF,
    from: "#f44d4d",
    to: "#dc2430",
    glow: "rgba(226, 40, 50, 0.5)",
  },
  {
    id: "06",
    icon: "box",
    numberIn: "icon",
    lines: ["Sample Pack out", "& transit trial"],
    box: { left: 92, top: 348, width: 166, height: 60 },
    radius: LEAF,
    from: "#8c5cf7",
    to: "#6b3fd8",
    glow: "rgba(114, 68, 224, 0.5)",
  },
  {
    id: "07",
    icon: "handshake",
    numberIn: "both",
    lines: ["Contract signoff ,", "training and", "implementation"],
    box: { left: 68, top: 248, width: 160, height: 64 },
    radius: LEAF,
    from: "#5649dc",
    to: "#3a2fb6",
    glow: "rgba(70, 58, 200, 0.5)",
  },
  {
    id: "08",
    icon: "chart",
    numberIn: "icon",
    lines: ["2 months initial", "tracking of", "executed project"],
    box: { left: 82, top: 158, width: 154, height: 60 },
    radius: LEAF,
    from: "#f2489f",
    to: "#c72688",
    glow: "rgba(214, 48, 146, 0.5)",
  },
  {
    id: "09",
    icon: "people",
    numberIn: "icon",
    lines: ["Post", "implementation", "follow-up"],
    box: { left: 118, top: 80, width: 152, height: 58 },
    radius: LEAF,
    from: "#7b8ab9",
    to: "#56648f",
    glow: "rgba(88, 104, 150, 0.5)",
  },
];

/* Dashed connector arcs with a direction arrow — [start, control, end] */
interface Arc {
  p0: [number, number];
  c: [number, number];
  p1: [number, number];
}

const ARCS: Arc[] = [
  { p0: [250, 94], c: [276, 68], p1: [297, 72] },
  { p0: [463, 72], c: [490, 68], p1: [524, 98] },
  { p0: [536, 384], c: [516, 428], p1: [467, 430] },
  { p0: [293, 430], c: [242, 438], p1: [220, 408] },
];

const arcGeometry = ({ p0, c, p1 }: Arc) => {
  const mid = [
    0.25 * p0[0] + 0.5 * c[0] + 0.25 * p1[0],
    0.25 * p0[1] + 0.5 * c[1] + 0.25 * p1[1],
  ];
  const rot = (Math.atan2(p1[1] - p0[1], p1[0] - p0[0]) * 180) / Math.PI;
  return {
    d: `M${p0[0]} ${p0[1]} Q${c[0]} ${c[1]} ${p1[0]} ${p1[1]}`,
    mid,
    rot,
  };
};

/* ------------------------------------------------------------------ */
/* Stand-in for the cardboard box photo in the centre                  */
/* ------------------------------------------------------------------ */

function DefaultBox() {
  return (
    <svg viewBox="0 0 140 92" aria-hidden="true">
      <defs>
        <linearGradient id="pdpBoxL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dcb077" />
          <stop offset="1" stopColor="#c28f57" />
        </linearGradient>
        <linearGradient id="pdpBoxR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9985e" />
          <stop offset="1" stopColor="#a67845" />
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="87" rx="54" ry="4.5" fill="rgba(60,40,20,0.18)" />
      <polygon points="24,34 62,13 76,24 36,43" fill="#b98a52" />
      <polygon points="76,24 118,11 130,26 88,37" fill="#c99a62" />
      <polygon points="14,40 68,56 126,38 72,22" fill="#7a5630" />
      <polygon points="14,40 68,56 68,86 14,68" fill="url(#pdpBoxL)" />
      <polygon points="68,56 126,38 126,66 68,86" fill="url(#pdpBoxR)" />
      <polygon points="14,40 68,56 60,60 8,44" fill="#d7aa70" />
      <polygon points="68,56 126,38 132,42 74,61" fill="#b98a52" />
      <g transform="translate(41 60) skewY(17)">
        <polygon
          points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4"
          fill="#3b3b3b"
          stroke="#8a6a40"
          strokeWidth="0.6"
        />
        <text
          x="0"
          y="15"
          textAnchor="middle"
          fontSize="5"
          fontWeight="700"
          letterSpacing="1"
          fill="#3b3b3b"
          fontFamily="Inter, Arial, sans-serif"
        >
          VEVRA
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Scale-to-fit hook                                                   */
/* ------------------------------------------------------------------ */

function useFitScale(baseWidth: number): [React.RefObject<HTMLElement | null>, number] {
  const ref = useRef<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => setScale(el.clientWidth / baseWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [baseWidth]);

  return [ref, scale];
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ProjectDevelopmentPhases({
  boxImage,
  className = "",
}: {
  boxImage?: string;
  className?: string;
}) {
  const [wrapRef, scale] = useFitScale(BASE_W);
  const arcs = ARCS.map(arcGeometry);

  return (
    <section
      ref={wrapRef as any}
      className={`pdp ${className}`.trim()}
      style={{ height: BASE_H * scale }}
      aria-labelledby="pdp-title"
    >
      <div
        className="pdp__stage"
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
        }}
      >
        {/* Dashed arrows */}
        <svg className="pdp__ring" viewBox={`0 0 ${BASE_W} ${BASE_H}`} aria-hidden="true">
          {arcs.map((a, i) => (
            <g key={i}>
              <path
                d={a.d}
                fill="none"
                stroke="#a9bbe0"
                strokeWidth="1.1"
                strokeDasharray="3 3.5"
                strokeLinecap="round"
              />
              <polyline
                points="-3.5,-3.5 2,0 -3.5,3.5"
                fill="none"
                stroke="#8ea6d6"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform={`translate(${a.mid[0]} ${a.mid[1]}) rotate(${a.rot})`}
              />
            </g>
          ))}
        </svg>

        {/* Centre hub */}
        <div className="pdp__hub">
          <div className="pdp__hub-inner" />
        </div>
        <div className="pdp__box">
          {boxImage ? <img src={boxImage} alt="" /> : <DefaultBox />}
        </div>
        <p className="pdp__hub-text">
          From Concept
          <br />
          to Commercialization
        </p>
        <svg className="pdp__hub-underline" viewBox="0 0 50 7" aria-hidden="true">
          <path
            d="M1 4.5 Q 8 0.5 17 3.2 T 34 3 T 49 2"
            fill="none"
            stroke="#e11d2e"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        {/* Phases */}
        <ol className="pdp__phases">
          {PHASES.map((p) => {
            const numInLead = p.numberIn === "icon" || p.numberIn === "both";
            const numInBody = p.numberIn === "text" || p.numberIn === "both";
            return (
              <li
                key={p.id}
                className="pdp__phase"
                style={
                  {
                    ...p.box,
                    borderRadius: p.radius,
                    "--from": p.from,
                    "--to": p.to,
                    "--glow": p.glow,
                  } as React.CSSProperties
                }
              >
                <div className="pdp__lead">
                  {numInLead && <span className="pdp__num">{p.id}</span>}
                  <Icon name={p.icon} />
                </div>
                <div className="pdp__body">
                  {numInBody && <span className="pdp__num">{p.id}</span>}
                  <p className="pdp__phase-title">
                    {p.lines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < p.lines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Footnote */}
        <p className="pdp__note">* C.Q.S : Cost Quality and Sustainability</p>
      </div>
    </section>
  );
}

export default ProjectDevelopmentPhases;
