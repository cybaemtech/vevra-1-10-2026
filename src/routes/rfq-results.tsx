import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Boxes,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Download,
  Eye,
  FileSpreadsheet,
  Filter,
  Layers,
  Mail,
  MapPin,
  Package,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  User,
  ArrowLeft,
} from "lucide-react";
import {
  getAllCalculations,
  getAllRFQs,
  getAllResults,
  OrientationCode,
  PartCalculationResult,
  RFQCalculationRecord,
} from "@/lib/rfq-calculation-engine";
import vevraLogo from "@/assets/vevra-logo.png";

export const Route = createFileRoute("/rfq-results")({
  head: () => ({
    meta: [
      { title: "Internal RFQ Packaging Calculation Results | VEVRA PACKAGING" },
      {
        name: "description",
        content:
          "Internal engineering review dashboard displaying multi-equipment and multi-orientation packaging feasibility results.",
      },
    ],
  }),
  component: InternalRFQResultsPage,
});

function InternalRFQResultsPage() {
  const [calculations, setCalculations] = useState<RFQCalculationRecord[]>(() =>
    getAllCalculations()
  );
  const [selectedRfqIndex, setSelectedRfqIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEquipmentFilter, setSelectedEquipmentFilter] = useState("ALL");
  const [selectedOrientationFilter, setSelectedOrientationFilter] = useState("ALL");

  const refreshData = () => {
    setCalculations(getAllCalculations());
  };

  const currentRfq = calculations[selectedRfqIndex] || calculations[0];

  const filteredParts = useMemo(() => {
    if (!currentRfq?.parts) return [];
    if (!searchQuery.trim()) return currentRfq.parts;
    const q = searchQuery.toLowerCase();
    return currentRfq.parts.filter(
      (p) =>
        p.partCode.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [currentRfq, searchQuery]);

  const totalCalculationsCount = calculations.length;
  const totalPartsCount = calculations.reduce(
    (acc, r) => acc + (r.parts?.length || 0),
    0
  );
  const totalFeasibleCount = calculations.reduce(
    (acc, r) => acc + (r.summary?.totalFeasibleOptions || 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src={vevraLogo}
                alt="VEVRA Logo"
                className="h-10 w-auto object-contain px-1 py-0.5"
              />
            </Link>
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded bg-red-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-red-700 border border-red-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> Internal Portal
                </span>
                <span className="text-xs text-slate-500 font-medium">VEVRA RFQ Engine v1.0</span>
              </div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                Packaging Calculation &amp; Feasibility Results
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={refreshData}
              className="inline-flex items-center gap-2 rounded-lg bg-white hover:bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 border border-slate-300 shadow-sm transition"
              title="Refresh loaded records"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-500" /> Refresh Data
            </button>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition"
            >
              + Submit New RFQ
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Logged RFQs
              </span>
              <div className="p-2 rounded-lg bg-red-50 text-red-600">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 text-3xl font-black text-slate-900 font-mono">
              {totalCalculationsCount}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              From <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded">data/rfq/rfqs.json</code>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Parts Evaluated
              </span>
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Boxes className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 text-3xl font-black text-slate-900 font-mono">
              {totalPartsCount}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Multi-part line items analyzed
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Feasible Options
              </span>
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 text-3xl font-black text-emerald-600 font-mono">
              {totalFeasibleCount}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Across 9 equipment × 6 orientations
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Master Equipment
              </span>
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900">
              9 Types / 6 Orientations
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              FLC, FCS &amp; Standard Crates
            </div>
          </div>
        </div>

        {/* RFQ Selector Tabs */}
        {calculations.length > 0 ? (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex flex-wrap gap-2">
                {calculations.map((calc, idx) => (
                  <button
                    key={calc.rfqNumber || idx}
                    onClick={() => setSelectedRfqIndex(idx)}
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition flex items-center gap-2 ${
                      selectedRfqIndex === idx
                        ? "bg-red-600 text-white shadow"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <span className="font-mono">{calc.rfqNumber}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        selectedRfqIndex === idx
                          ? "bg-red-700 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {calc.parts?.length || 0} Parts
                    </span>
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  Created:{" "}
                  <b className="text-slate-700">
                    {currentRfq?.createdAt
                      ? new Date(currentRfq.createdAt).toLocaleString()
                      : "—"}
                  </b>
                </span>
              </div>
            </div>

            {/* Customer & RFQ Metadata Card */}
            {currentRfq && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-1">
                      Customer Information
                    </div>
                    <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-slate-400" />
                      {currentRfq.customer?.name || "Client Name N/A"}
                    </div>
                    <div className="text-sm text-slate-600 mt-1 flex items-center gap-2 font-medium">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      {currentRfq.customer?.company || "Company N/A"}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{currentRfq.customer?.email || "—"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{currentRfq.customer?.phone || "—"}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{currentRfq.customer?.location || "—"}</span>
                    </div>
                    {currentRfq.customer?.notes && (
                      <div className="sm:col-span-2 text-slate-500 italic mt-1 bg-slate-50 p-2 rounded border border-slate-100">
                        Note: &ldquo;{currentRfq.customer.notes}&rdquo;
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-4">
                    <span>
                      RFQ Ref:{" "}
                      <b className="text-slate-900 font-mono">
                        {currentRfq.calculationReference || currentRfq.rfqNumber}
                      </b>
                    </span>
                    <span>
                      Status:{" "}
                      <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                        {currentRfq.status || "Submitted"}
                      </span>
                    </span>
                  </div>
                  <div>
                    Evaluated Options:{" "}
                    <b className="text-slate-900 font-mono">
                      {currentRfq.summary?.totalEvaluatedOptions ||
                        (currentRfq.parts?.length || 0) * 54}
                    </b>{" "}
                    | Feasible Options:{" "}
                    <b className="text-emerald-600 font-mono">
                      {currentRfq.summary?.totalFeasibleOptions || 0}
                    </b>
                  </div>
                </div>
              </div>
            )}

            {/* Filter & Search Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by part code or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-600 font-semibold">Equipment:</span>
                  <select
                    value={selectedEquipmentFilter}
                    onChange={(e) => setSelectedEquipmentFilter(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 text-xs focus:outline-none focus:border-red-500 font-medium"
                  >
                    <option value="ALL">All Equipment (9 Types)</option>
                    <option value="FLC">FLCs</option>
                    <option value="FCS">FCS</option>
                    <option value="Crate">Crates</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-600 font-semibold">Orientation:</span>
                  <select
                    value={selectedOrientationFilter}
                    onChange={(e) => setSelectedOrientationFilter(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 text-xs focus:outline-none focus:border-red-500 font-medium"
                  >
                    <option value="ALL">All 6 Orientations</option>
                    <option value="LXL">LXL</option>
                    <option value="LxW">LxW</option>
                    <option value="LxH">LxH</option>
                    <option value="WXW">WXW</option>
                    <option value="WxH">WxH</option>
                    <option value="HxW">HxW</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parts & Feasible Packaging Options List */}
            <div className="space-y-8">
              {filteredParts.map((part: PartCalculationResult, partIdx: number) => {
                const visibleOptions = part.feasibleOptions.filter((opt) => {
                  if (
                    selectedEquipmentFilter !== "ALL" &&
                    !opt.equipmentCategory.includes(selectedEquipmentFilter) &&
                    !opt.equipmentName.includes(selectedEquipmentFilter)
                  ) {
                    return false;
                  }
                  if (
                    selectedOrientationFilter !== "ALL" &&
                    opt.orientation !== selectedOrientationFilter
                  ) {
                    return false;
                  }
                  return true;
                });

                return (
                  <div
                    key={part.partCode || partIdx}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow transition"
                  >
                    {/* Part Header & Inputs */}
                    <div className="bg-slate-50/80 border-b border-slate-200 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs">
                              {partIdx + 1}
                            </span>
                            <span className="font-mono text-sm font-bold text-red-600">
                              {part.partCode}
                            </span>
                          </div>
                          <h2 className="text-lg font-bold text-slate-900 mt-1">
                            {part.description}
                          </h2>
                        </div>

                        {/* Part Dimensions & Qty Badges */}
                        <div className="flex flex-wrap gap-2 text-xs">
                          <div className="rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-sm">
                            <span className="text-slate-500">Size (mm): </span>
                            <b className="text-slate-900 font-mono">
                              {part.length} × {part.width} × {part.height}
                            </b>
                          </div>
                          <div className="rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-sm">
                            <span className="text-slate-500">Per Layer: </span>
                            <b className="text-slate-900 font-mono">
                              {part.perLayerQty || "—"}
                            </b>
                          </div>
                          <div className="rounded-lg bg-amber-50 px-3 py-1.5 border border-amber-200 shadow-sm">
                            <span className="text-amber-800 font-medium">Required Qty: </span>
                            <b className="text-amber-900 font-mono font-bold">
                              {part.requiredQty}
                            </b>
                          </div>
                          <div className="rounded-lg bg-emerald-50 px-3 py-1.5 border border-emerald-200 shadow-sm">
                            <span className="text-emerald-800 font-medium">
                              Feasible Configurations:{" "}
                            </span>
                            <b className="text-emerald-700 font-mono font-bold">
                              {part.feasibleOptions.length} / 54
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Options Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-slate-700 border-collapse">
                        <thead className="bg-slate-100 text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-200">
                          <tr>
                            <th className="py-3 px-4 font-bold text-slate-700">Equipment</th>
                            <th className="py-3 px-3 font-bold text-slate-700 text-center">
                              Orientation
                            </th>
                            <th className="py-3 px-3 font-bold text-slate-700 text-center">
                              GLT (L×W×H)
                            </th>
                            <th className="py-3 px-3 font-bold text-slate-700 text-center">
                              Array L
                            </th>
                            <th className="py-3 px-3 font-bold text-slate-700 text-center">
                              Array W
                            </th>
                            <th className="py-3 px-3 font-bold text-slate-700 text-center">
                              Array H
                            </th>
                            <th className="py-3 px-3 font-bold text-blue-700 text-center">
                              Parts / Layer
                            </th>
                            <th className="py-3 px-3 font-bold text-blue-700 text-center">
                              Layers / GLT
                            </th>
                            <th className="py-3 px-3 font-bold text-emerald-700 text-center">
                              Parts / GLT
                            </th>
                            <th className="py-3 px-3 font-bold text-amber-700 text-center">
                              Req. GLTs
                            </th>
                            <th className="py-3 px-4 font-bold text-slate-700 text-right">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-mono">
                          {visibleOptions.length > 0 ? (
                            visibleOptions.map((opt, optIdx) => (
                              <tr
                                key={optIdx}
                                className={`hover:bg-slate-50 transition ${
                                  optIdx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                                }`}
                              >
                                <td className="py-3 px-4 font-sans font-semibold text-slate-900">
                                  {opt.equipmentName}
                                </td>
                                <td className="py-3 px-3 text-center">
                                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-bold border border-slate-200">
                                    {opt.orientation}
                                  </span>
                                </td>
                                <td className="py-3 px-3 text-center text-slate-500">
                                  {opt.gltDimensions.lengthMm} × {opt.gltDimensions.widthMm} ×{" "}
                                  {opt.gltDimensions.heightMm}
                                </td>
                                <td className="py-3 px-3 text-center font-medium text-slate-700">
                                  {opt.packetArrayLength}
                                </td>
                                <td className="py-3 px-3 text-center font-medium text-slate-700">
                                  {opt.packetArrayWidth}
                                </td>
                                <td className="py-3 px-3 text-center font-medium text-slate-700">
                                  {opt.packetArrayHeight}
                                </td>
                                <td className="py-3 px-3 text-center text-blue-700 font-bold">
                                  {opt.partsPerLayer}
                                </td>
                                <td className="py-3 px-3 text-center text-blue-700 font-medium">
                                  {opt.layersPerGLT}
                                </td>
                                <td className="py-3 px-3 text-center text-emerald-700 font-black text-sm">
                                  {opt.partsPerGLT}
                                </td>
                                <td className="py-3 px-3 text-center text-amber-700 font-black text-sm">
                                  {opt.requiredGLTs}
                                </td>
                                <td className="py-3 px-4 text-right font-sans">
                                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Feasible
                                  </span>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td
                                colSpan={11}
                                className="py-8 text-center text-slate-400 italic font-sans"
                              >
                                No options match the selected equipment or orientation filters.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <Package className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">No RFQ Records Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              There are no submitted RFQs logged yet. Submit a new packaging RFQ to evaluate all 9 equipment and 6 orientation packaging configurations.
            </p>
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition"
            >
              + Create First RFQ
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
