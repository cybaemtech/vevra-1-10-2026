import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  Calculator,
  CheckCircle2,
  Info,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Boxes,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import {
  Box,
  CONFIG,
  RFQPart,
  RFQState,
  STEP_LABELS,
  TOTAL_STEPS,
  buildRFQPDF,
  computeCosts,
  computeFits,
  genRFQ,
  initialPart,
  initialState,
  routeLabel,
} from "@/lib/rfq-logic";
import { runRFQCalculationEngine } from "@/lib/rfq-calculation-engine";
import vevraLogo from "@/assets/vevra-logo.png";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "RFQ — Packaging Quotation Builder | VEVRA PACKAGING" },
      {
        name: "description",
        content:
          "Request a tailored packaging quotation in minutes: enter contact details, part specifications, dimensions, and quantities for VEVRA PACKAGING.",
      },
      { property: "og:title", content: "RFQ — Packaging Quotation Builder" },
      {
        property: "og:description",
        content:
          "Quick and structured packaging RFQ builder for VEVRA PACKAGING solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RFQBuilder,
});

type Setter = <K extends keyof RFQState>(key: K, value: RFQState[K]) => void;

function Choice({
  label,
  icon,
  selected,
  onClick,
}: {
  label: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`choice${selected ? " sel" : ""}`} onClick={onClick}>
      {icon ? <span className="ic">{icon}</span> : null}
      {label}
    </div>
  );
}

function RFQBuilder() {
  const [state, setState] = useState<RFQState>(initialState);
  const [currentStep, setCurrentStep] = useState(1);
  const [contactErr, setContactErr] = useState(false);
  const [dimErr, setDimErr] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{ emailed: boolean; error: string } | null>(null);
  const [calculationOutput, setCalculationOutput] = useState<any | null>(null);

  const set: Setter = (key, value) => setState((s) => ({ ...s, [key]: value }));

  const handlePartChange = (index: number, field: keyof RFQPart, value: string) => {
    setState((s) => {
      const updatedParts = [...(s.parts || [])];
      if (updatedParts[index]) {
        updatedParts[index] = { ...updatedParts[index], [field]: value };
      }
      const primaryPart = updatedParts[0];
      return {
        ...s,
        parts: updatedParts,
        pLength: primaryPart?.length || s.pLength,
        pWidth: primaryPart?.width || s.pWidth,
        pHeight: primaryPart?.height || s.pHeight,
      };
    });
  };

  const handleAddPart = () => {
    setState((s) => {
      const currentParts = s.parts || [];
      const newPart: RFQPart = {
        id: `part-${Date.now()}-${currentParts.length + 1}`,
        partCode: "",
        itemDescription: "",
        length: "",
        width: "",
        height: "",
        perLayerQty: "",
        requiredQty: "1",
        weight: "",
        weightUnit: "kg",
      };
      return { ...s, parts: [...currentParts, newPart] };
    });
  };

  const handleRemovePart = (index: number) => {
    setState((s) => {
      const currentParts = s.parts || [];
      if (currentParts.length <= 1) return s;
      const updatedParts = currentParts.filter((_, i) => i !== index);
      return { ...s, parts: updatedParts };
    });
  };

  const { fits, eff } = useMemo(() => computeFits(state), [state]);

  const chosen: Box | null = useMemo(() => {
    if (fits.length === 0) {
      return {
        name: "Custom / Made-to-size",
        L: eff[2],
        W: eff[1],
        H: eff[0],
        cost: 0,
        custom: true,
      };
    }
    const match = state.selectedBox && fits.find((f) => f.name === state.selectedBox!.name);
    return match || fits[0]!;
  }, [fits, eff, state.selectedBox]);

  const effectiveState: RFQState = { ...state, selectedBox: chosen };

  const validateStep = (step: number) => {
    if (step === 1) {
      const ok = !!(state.cName && (state.cEmail || state.cPhone));
      setContactErr(!ok);
      return ok;
    }
    if (step === 2) {
      const parts = state.parts || [];
      const hasValidPart = parts.some(
        (p) => Number(p.length) > 0 && Number(p.width) > 0 && Number(p.height) > 0
      );
      const ok = hasValidPart || !!(state.pLength && state.pWidth && state.pHeight);
      setDimErr(!ok);
      return ok;
    }
    return true;
  };

  const changeStep = (dir: number) => {
    if (dir > 0 && !validateStep(currentStep)) return;
    const next = currentStep + dir;
    if (next < 1 || next > TOTAL_STEPS) return;
    if (next === 2 && !rfqNumber) setRfqNumber(genRFQ());
    setCurrentStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep(1) || !validateStep(2)) return;
    setSubmitting(true);
    const number = rfqNumber || genRFQ();
    if (!rfqNumber) setRfqNumber(number);

    // Run VEVRA Calculation Engine for all equipment and 6 orientations
    const contactInfo = {
      name: effectiveState.cName,
      company: effectiveState.cCompany,
      email: effectiveState.cEmail,
      phone: effectiveState.cPhone,
      location: effectiveState.destCity || effectiveState.destPin,
      notes: effectiveState.cNotes,
    };

    const partsInput = (effectiveState.parts || [initialPart]).map((p) => ({
      partCode: p.partCode,
      itemDescription: p.itemDescription,
      length: p.length || effectiveState.pLength || 0,
      width: p.width || effectiveState.pWidth || 0,
      height: p.height || effectiveState.pHeight || 0,
      perLayerQty: p.perLayerQty || 0,
      requiredQty: p.requiredQty || 1,
    }));

    const { calculationRecord, flatResults } = runRFQCalculationEngine({
      rfqNumber: number,
      contact: contactInfo,
      parts: partsInput,
    });

    // Save record to client storage / JSON archives
    try {
      // 1. Calculations archive
      const existingCalculations = JSON.parse(
        localStorage.getItem("vevra_rfq_calculations") || "[]"
      );
      existingCalculations.unshift(calculationRecord);
      localStorage.setItem("vevra_rfq_calculations", JSON.stringify(existingCalculations));

      // 2. Flat Results archive (all feasible options)
      const existingResults = JSON.parse(
        localStorage.getItem("vevra_rfq_results") || "[]"
      );
      existingResults.unshift(...flatResults);
      localStorage.setItem("vevra_rfq_results", JSON.stringify(existingResults));

      // 3. RFQs archive
      const existingRfqs = JSON.parse(localStorage.getItem("vevra_rfqs") || "[]");
      existingRfqs.unshift({
        rfqNumber: number,
        timestamp: calculationRecord.timestamp,
        status: "Submitted",
        contact: contactInfo,
        parts: partsInput,
      });
      localStorage.setItem("vevra_rfqs", JSON.stringify(existingRfqs));

      // Legacy fallback
      const existingSubmissions = JSON.parse(localStorage.getItem("vevra_rfq_submissions") || "[]");
      existingSubmissions.unshift({
        rfqNumber: number,
        timestamp: calculationRecord.timestamp,
        status: "Submitted",
        contact: contactInfo,
        parts: effectiveState.parts,
        feasibleOptionsCount: flatResults.length,
      });
      localStorage.setItem("vevra_rfq_submissions", JSON.stringify(existingSubmissions));
    } catch {
      // ignore storage errors
    }

    const pdfDoc = await buildRFQPDF(effectiveState, number);
    const fileName = `${number}.pdf`;

    const emailed = false;
    const emailError = "";
    pdfDoc.save(fileName);
    setCalculationOutput(calculationRecord);
    setSubmitting(false);
    setSubmitted({ emailed, error: emailError });
  };

  return (
    <div className="rfq-page">
      <div className="wrap">
        <Link
          to="/"
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue hover:text-brand"
        >
          ← Back to website
        </Link>
        <header className="brand">
          <img src={vevraLogo} alt="VEVRA Packaging Pvt. Ltd. logo" className="logo" />
          <div className="brand-text">
            <div className="mark">Request For Quotation [RFQ]</div>
            <div className="tag">PACKAGING RFQ BUILDER — VEVRA PACKAGING</div>
          </div>
        </header>

        <div className="rail">
          {STEP_LABELS.map((label, idx) => (
            <div
              key={label}
              className={`tick${idx + 1 < currentStep ? " done" : ""}${
                idx + 1 === currentStep ? " active" : ""
              }`}
            >
              <div className="num">{idx + 1}</div>
              <div className="lbl">{label}</div>
            </div>
          ))}
        </div>

        <div className="card">
          {/* STEP 1: CONTACT (FIRST) */}
          {currentStep === 1 && (
            <div className="step">
              <h2 className="step-title">Contact Information</h2>
              <p className="step-sub">
                Enter your details so our packaging engineering team can prepare and deliver your customized RFQ.
              </p>

              <div className="grid">
                <div className="field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={state.cName}
                    onChange={(e) => {
                      set("cName", e.target.value);
                      if (contactErr) setContactErr(false);
                    }}
                  />
                </div>
                <div className="field">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. AutoMech Industries Ltd."
                    value={state.cCompany}
                    onChange={(e) => set("cCompany", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid">
                <div className="field">
                  <label>Work Email *</label>
                  <input
                    type="email"
                    placeholder="e.g. rajesh@automech.com"
                    value={state.cEmail}
                    onChange={(e) => {
                      set("cEmail", e.target.value);
                      if (contactErr) setContactErr(false);
                    }}
                  />
                </div>
                <div className="field">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={state.cPhone}
                    onChange={(e) => {
                      set("cPhone", e.target.value);
                      if (contactErr) setContactErr(false);
                    }}
                  />
                </div>
              </div>

              <div className="grid">
                <div className="field">
                  <label>City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Pune / Chakan Industrial Area"
                    value={state.destCity}
                    onChange={(e) => set("destCity", e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    placeholder="e.g. 411057"
                    value={state.destPin}
                    onChange={(e) => set("destPin", e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label>Additional Notes / Project Requirements</label>
                <textarea
                  placeholder="Share any special packing needs, delivery timelines, returnable loop requirements, or handling specifics..."
                  value={state.cNotes}
                  onChange={(e) => set("cNotes", e.target.value)}
                />
              </div>

              {contactErr && (
                <div className="err" style={{ marginTop: 8 }}>
                  Please enter your Full Name and at least one contact method (Email or Phone) to proceed.
                </div>
              )}
            </div>
          )}

          {/* STEP 2: PRODUCT & PARTS (SECOND) */}
          {currentStep === 2 && (
            <div className="step">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
                <h2 className="step-title" style={{ margin: 0 }}>Product &amp; Part Specifications</h2>
                <span className="badge alt" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                  {state.parts?.length || 1} {state.parts?.length === 1 ? "Part Specification" : "Part Specifications"}
                </span>
              </div>
              <p className="step-sub">
                Enter your part codes, item descriptions, dimensions in millimeters, layer arrangement, and total quantities.
              </p>

              {/* Multi-part cards list */}
              <div className="parts-container">
                {(state.parts || [initialPart]).map((part, index) => (
                  <div key={part.id || `part-${index}`} className="part-card">
                    <div className="part-card-header">
                      <div className="part-card-title">
                        <span className="part-index-pill">Part #{index + 1}</span>
                        <span className="part-title-text">
                          {part.partCode ? `[${part.partCode}] ${part.itemDescription || ""}` : `Part Item #${index + 1}`}
                        </span>
                      </div>
                      {(state.parts?.length || 1) > 1 && (
                        <button
                          type="button"
                          className="btn-delete-part"
                          onClick={() => handleRemovePart(index)}
                          title="Remove this part"
                          aria-label={`Remove Part ${index + 1}`}
                        >
                          <Trash2 className="w-3.5 h-3.5 inline mr-1" />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>

                    <div className="part-card-body">
                      {/* Row 1: Part Code & Item Description */}
                      <div className="grid">
                        <div className="field">
                          <label>Part Code</label>
                          <input
                            type="text"
                            placeholder="e.g. PRT-CNC-001"
                            value={part.partCode}
                            onChange={(e) => handlePartChange(index, "partCode", e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label>Item Description</label>
                          <input
                            type="text"
                            placeholder="e.g. Aluminum Die-Cast Housing Assembly"
                            value={part.itemDescription}
                            onChange={(e) => handlePartChange(index, "itemDescription", e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Row 2: Length (mm), Width (mm), Height (mm) */}
                      <div className="grid g3">
                        <div className="field">
                          <label>Length (mm)</label>
                          <input
                            type="number"
                            min="0"
                            placeholder="250"
                            value={part.length}
                            onChange={(e) => handlePartChange(index, "length", e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label>Width (mm)</label>
                          <input
                            type="number"
                            min="0"
                            placeholder="180"
                            value={part.width}
                            onChange={(e) => handlePartChange(index, "width", e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label>Height (mm)</label>
                          <input
                            type="number"
                            min="0"
                            placeholder="120"
                            value={part.height}
                            onChange={(e) => handlePartChange(index, "height", e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Row 3: Per Layer Qty, Required Qty */}
                      <div className="grid">
                        <div className="field">
                          <label>Per Layer Qty</label>
                          <input
                            type="number"
                            min="1"
                            placeholder="e.g. 6"
                            value={part.perLayerQty}
                            onChange={(e) => handlePartChange(index, "perLayerQty", e.target.value)}
                          />
                        </div>
                        <div className="field">
                          <label>Required Qty</label>
                          <input
                            type="number"
                            min="1"
                            placeholder="e.g. 240"
                            value={part.requiredQty}
                            onChange={(e) => handlePartChange(index, "requiredQty", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons: + Add Another Part */}
              <div className="parts-actions-bar">
                <button
                  type="button"
                  className="btn-add-part"
                  onClick={handleAddPart}
                >
                  <Plus className="w-4 h-4 inline mr-1.5" />
                  + Add Another Part
                </button>
              </div>

              {dimErr && (
                <div className="err" style={{ marginTop: 12 }}>
                  Please enter valid Length (mm), Width (mm), and Height (mm) for your parts to submit RFQ.
                </div>
              )}

            </div>
          )}

          {/* SUBMITTED CONFIRMATION STATE */}
          {submitted ? (
            <div className="step" style={{ marginTop: 8 }}>
              <div
                className="summary-block"
                style={{
                  borderColor: "var(--accent)",
                  background: "#fdf8f8",
                  padding: "26px 22px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--accent)",
                  boxShadow: "0 6px 20px rgba(216,31,38,.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ background: "#ecfdf5", borderRadius: "50%", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 22, color: "var(--accent-dark)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.5px" }}>
                      RFQ Submitted! Our team will contact you shortly.
                    </h3>
                    <span className="mono" style={{ fontSize: 12, color: "var(--blue)", fontWeight: 700 }}>
                      Reference ID: {rfqNumber}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6, margin: "10px 0 18px" }}>
                  Thank you for submitting your Request For Quotation. Your part specifications have been logged and a PDF copy has been saved to your device. Our dedicated packaging team will review your requirements and reach out to you shortly at <b>{state.cEmail || state.cPhone}</b>.
                </p>

                <div className="parts-review-table-wrap">
                  <table className="parts-review-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Part Code</th>
                        <th>Item Description</th>
                        <th>Dimensions (mm)</th>
                        <th>Per Layer</th>
                        <th>Required Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(state.parts || [initialPart]).map((p, i) => (
                        <tr key={p.id || i}>
                          <td style={{ fontWeight: 700, color: "var(--accent)" }}>{i + 1}</td>
                          <td className="mono" style={{ fontWeight: 600 }}>{p.partCode || "—"}</td>
                          <td>{p.itemDescription || "—"}</td>
                          <td className="mono">{p.length || 0} × {p.width || 0} × {p.height || 0} mm</td>
                          <td style={{ textAlign: "center" }}>{p.perLayerQty || "—"}</td>
                          <td style={{ textAlign: "center", fontWeight: 700 }}>{p.requiredQty || "1"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(null);
                      setCalculationOutput(null);
                      setCurrentStep(1);
                      setState(initialState);
                      setRfqNumber("");
                    }}
                  >
                    Submit Another RFQ
                  </button>
                  <Link to="/" className="btn-ghost" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                    Return to Home
                  </Link>
                  <Link to="/rfq-results" className="btn-ghost" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", borderColor: "var(--accent)", color: "var(--accent)" }}>
                    Open Internal Review Portal →
                  </Link>
                </div>
              </div>

              {/* TESTING PURPOSE: DISPLAY PACKAGING CALCULATION RESULTS */}
              {calculationOutput && calculationOutput.parts && calculationOutput.parts.length > 0 && (
                <div style={{ marginTop: 28 }} className="packaging-results-testing-section">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16, borderBottom: "2px solid #e2e8f0", pb: 12 }}>
                    <div>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 6, background: "rgba(216,31,38,0.08)", color: "var(--accent)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>
                        <Sparkles className="w-3.5 h-3.5" /> Testing View: Packaging Options
                      </div>
                      <h3 style={{ margin: 0, fontSize: 22, color: "var(--ink)", fontFamily: "'Oswald', sans-serif" }}>
                        All Feasible Packaging Options ({calculationOutput.summary?.totalFeasibleOptions || 0} Feasible Configurations)
                      </h3>
                      <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--ink-soft)" }}>
                        Calculated across all 9 standard equipment types &amp; 6 orientations with +5mm clearance buffer.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {calculationOutput.parts.map((part: any, pIdx: number) => (
                      <div
                        key={part.partCode || pIdx}
                        style={{
                          border: "1px solid #cbd5e1",
                          borderRadius: 10,
                          overflow: "hidden",
                          background: "#ffffff",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                        }}
                      >
                        {/* Part Header */}
                        <div
                          style={{
                            padding: "14px 18px",
                            background: "#f8fafc",
                            borderBottom: "1px solid #e2e8f0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 10,
                          }}
                        >
                          <div>
                            <span style={{ fontWeight: 800, color: "var(--accent)", marginRight: 8, fontSize: 14 }}>
                              Part #{pIdx + 1}:
                            </span>
                            <b className="mono" style={{ color: "var(--blue)", fontSize: 15 }}>
                              {part.partCode || "N/A"}
                            </b>
                            <span style={{ margin: "0 8px", color: "#94a3b8" }}>—</span>
                            <span style={{ fontWeight: 600, color: "#1e293b", fontSize: 15 }}>
                              {part.description || "Packaging Component"}
                            </span>
                          </div>

                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontSize: 12 }}>
                            <span className="mono" style={{ background: "#edf2f7", padding: "4px 10px", borderRadius: 6, fontWeight: 600, color: "#334155" }}>
                              Size: {part.length} × {part.width} × {part.height} mm
                            </span>
                            <span className="mono" style={{ background: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: 6, fontWeight: 700 }}>
                              Req Qty: {part.requiredQty}
                            </span>
                            <span className="mono" style={{ background: "#ecfdf5", color: "#065f46", padding: "4px 10px", borderRadius: 6, fontWeight: 700 }}>
                              {part.feasibleOptions?.length || 0} / 54 Feasible
                            </span>
                          </div>
                        </div>

                        {/* Options Table */}
                        <div style={{ overflowX: "auto" }}>
                          <table className="parts-review-table" style={{ margin: 0, width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
                            <thead>
                              <tr style={{ background: "#f1f5f9", borderBottom: "1.5px solid #cbd5e1" }}>
                                <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 700, color: "#334155" }}>Equipment</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#334155" }}>Orientation</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#334155" }}>GLT (L×W×H)</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#334155" }}>Array L</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#334155" }}>Array W</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#334155" }}>Array H</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#1e40af" }}>Parts / Layer</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#1e40af" }}>Layers / GLT</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#047857" }}>Parts / GLT</th>
                                <th style={{ textAlign: "center", padding: "10px 8px", fontWeight: 700, color: "#b45309" }}>Req. GLTs</th>
                                <th style={{ textAlign: "right", padding: "10px 14px", fontWeight: 700, color: "#334155" }}>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {part.feasibleOptions && part.feasibleOptions.length > 0 ? (
                                part.feasibleOptions.map((opt: any, oIdx: number) => (
                                  <tr
                                    key={oIdx}
                                    className="mono"
                                    style={{
                                      borderBottom: "1px solid #f1f5f9",
                                      background: oIdx % 2 === 0 ? "#ffffff" : "#fbfcfd",
                                    }}
                                  >
                                    <td style={{ textAlign: "left", padding: "9px 14px", fontFamily: "sans-serif", fontWeight: 600, color: "#0f172a" }}>
                                      {opt.equipmentName}
                                    </td>
                                    <td style={{ textAlign: "center", padding: "9px 8px" }}>
                                      <span style={{ padding: "3px 8px", background: "#f1f5f9", borderRadius: 4, fontWeight: 700, fontSize: 11, color: "#1e293b", border: "1px solid #e2e8f0" }}>
                                        {opt.orientation}
                                      </span>
                                    </td>
                                    <td style={{ textAlign: "center", padding: "9px 8px", color: "#64748b" }}>
                                      {opt.gltDimensions.lengthMm} × {opt.gltDimensions.widthMm} × {opt.gltDimensions.heightMm}
                                    </td>
                                    <td style={{ textAlign: "center", padding: "9px 8px" }}>{opt.packetArrayLength}</td>
                                    <td style={{ textAlign: "center", padding: "9px 8px" }}>{opt.packetArrayWidth}</td>
                                    <td style={{ textAlign: "center", padding: "9px 8px" }}>{opt.packetArrayHeight}</td>
                                    <td style={{ textAlign: "center", padding: "9px 8px", fontWeight: 600, color: "#1e40af" }}>{opt.partsPerLayer}</td>
                                    <td style={{ textAlign: "center", padding: "9px 8px", color: "#1e40af" }}>{opt.layersPerGLT}</td>
                                    <td style={{ textAlign: "center", padding: "9px 8px", fontWeight: 700, color: "#047857", fontSize: 13 }}>
                                      {opt.partsPerGLT}
                                    </td>
                                    <td style={{ textAlign: "center", padding: "9px 8px", fontWeight: 700, color: "#b45309", fontSize: 13 }}>
                                      {opt.requiredGLTs}
                                    </td>
                                    <td style={{ textAlign: "right", padding: "9px 14px", fontFamily: "sans-serif" }}>
                                      <span style={{ padding: "3px 8px", background: "#ecfdf5", color: "#059669", borderRadius: 999, fontSize: 11, fontWeight: 600, border: "1px solid #a7f3d0" }}>
                                        Feasible
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan={11} style={{ textAlign: "center", padding: 20, color: "#94a3b8", fontFamily: "sans-serif" }}>
                                    No feasible packaging options found for the specified dimensions in standard equipment.
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="nav-row">
              <button
                type="button"
                className="btn-ghost"
                style={{ visibility: currentStep === 1 ? "hidden" : "visible" }}
                onClick={() => changeStep(-1)}
              >
                ← Back to Contact
              </button>
              {currentStep === 1 ? (
                <button type="button" className="btn-primary" onClick={() => changeStep(1)}>
                  Continue to Product &amp; Parts →
                </button>
              ) : (
                <button type="button" className="btn-primary" disabled={submitting} onClick={handleSubmit}>
                  {submitting ? "Submitting RFQ…" : "Submit RFQ →"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
