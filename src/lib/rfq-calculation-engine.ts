import equipmentMaster from "../../data/equipment/equipment.json";
import calculationsMaster from "../../data/calculations/calculations.json";
import resultsMaster from "../../data/results/results.json";
import rfqsMaster from "../../data/rfq/rfqs.json";
import formulasMaster from "../../data/formulas/formulas.json";

export type OrientationCode = "LXL" | "LxW" | "LxH" | "WXW" | "WxH" | "HxW";

export interface EquipmentOrientation {
  lengthMm: number;
  widthMm: number;
  heightMm: number;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  baseGLTDimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
  };
  orientations: Record<OrientationCode, EquipmentOrientation>;
}

export interface PartInput {
  partCode?: string;
  itemDescription?: string;
  length: number | string;
  width: number | string;
  height: number | string;
  perLayerQty?: number | string;
  requiredQty: number | string;
}

export interface SingleCalculationOption {
  equipmentId: string;
  equipmentName: string;
  equipmentCategory: string;
  orientation: OrientationCode;
  gltDimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
  };
  effectivePartDimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
  };
  packetArrayLength: number;
  packetArrayWidth: number;
  packetArrayHeight: number;
  partsPerLayer: number;
  layersPerGLT: number;
  partsPerGLT: number;
  requiredGLTs: number;
  feasible: boolean;
}

export interface RFQCustomer {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  notes: string;
}

export interface PartCalculationResult {
  partCode: string;
  description: string;
  length: number;
  width: number;
  height: number;
  perLayerQty: number;
  requiredQty: number;
  allOptions: SingleCalculationOption[];
  feasibleOptions: SingleCalculationOption[];
}

export interface RFQCalculationRecord {
  rfqNumber: string;
  createdAt: string;
  timestamp?: string;
  customer: RFQCustomer;
  parts: PartCalculationResult[];
  calculationReference: string;
  status: "Submitted" | "Under Review" | "Processed";
  summary: {
    totalParts: number;
    totalEvaluatedOptions: number;
    totalFeasibleOptions: number;
  };
}

export interface RFQRecord {
  rfqNumber: string;
  createdAt: string;
  status: string;
  customer: RFQCustomer;
  parts: PartInput[];
  calculationReference: string;
}

export interface FlatResultRow {
  rfqNumber: string;
  partCode: string;
  description: string;
  length: number;
  width: number;
  height: number;
  perLayerQty: number;
  requiredQty: number;
  equipment: string;
  orientation: OrientationCode;
  packetArrayL: number;
  packetArrayW: number;
  packetArrayH: number;
  partsPerLayer: number;
  layersPerGLT: number;
  partsPerGLT: number;
  requiredGLTs: number;
  feasibilityStatus: "Feasible" | "Infeasible";
}

const CLEARANCE_BUFFER_MM = 5;
const ORIENTATION_LIST: OrientationCode[] = ["LXL", "LxW", "LxH", "WXW", "WxH", "HxW"];

/**
 * Get the loaded equipment master data from JSON
 */
export function getEquipmentMaster(): EquipmentItem[] {
  return (equipmentMaster.equipment as EquipmentItem[]) || [];
}

/**
 * Calculate packaging metrics for a single part on a specific equipment & orientation
 * Exact formula replication from ORIENTATION.xlsm (RFQ & Orientation sheet)
 */
export function calculateSingleOption(
  part: PartInput,
  eqp: EquipmentItem,
  orientation: OrientationCode
): SingleCalculationOption {
  const pL = Number(part.length) || 0;
  const pW = Number(part.width) || 0;
  const pH = Number(part.height) || 0;
  const reqQty = Number(part.requiredQty) || 1;

  const gltDim = eqp.orientations[orientation] || eqp.baseGLTDimensions;

  // Effective dimensions with +5mm clearance buffer
  const effL = pL + CLEARANCE_BUFFER_MM;
  const effW = pW + CLEARANCE_BUFFER_MM;
  const effH = pH + CLEARANCE_BUFFER_MM;

  // Packet Array formulas: ROUNDDOWN(GLT / (Part + 5), 0)
  const packetArrayLength = effL > 0 ? Math.floor(gltDim.lengthMm / effL) : 0;
  const packetArrayWidth = effW > 0 ? Math.floor(gltDim.widthMm / effW) : 0;
  const packetArrayHeight = effH > 0 ? Math.floor(gltDim.heightMm / effH) : 0;

  // Parts per Layer = Packet Array L * Packet Array W
  const partsPerLayer = packetArrayLength * packetArrayWidth;

  // Layers per GLT = Packet Array H
  const layersPerGLT = packetArrayHeight;

  // Parts per GLT = Parts per Layer * Layers per GLT
  const partsPerGLT = partsPerLayer * layersPerGLT;

  // Required GLTs = CEIL(Required Qty / Parts per GLT) if partsPerGLT > 0
  const requiredGLTs = partsPerGLT > 0 ? Math.ceil(reqQty / partsPerGLT) : 0;

  const feasible = packetArrayLength > 0 && packetArrayWidth > 0 && packetArrayHeight > 0 && partsPerGLT > 0;

  return {
    equipmentId: eqp.id,
    equipmentName: eqp.name,
    equipmentCategory: eqp.category,
    orientation,
    gltDimensions: {
      lengthMm: gltDim.lengthMm,
      widthMm: gltDim.widthMm,
      heightMm: gltDim.heightMm,
    },
    effectivePartDimensions: {
      lengthMm: effL,
      widthMm: effW,
      heightMm: effH,
    },
    packetArrayLength,
    packetArrayWidth,
    packetArrayHeight,
    partsPerLayer,
    layersPerGLT,
    partsPerGLT,
    requiredGLTs,
    feasible,
  };
}

/**
 * Calculate all 54 options (9 equipment * 6 orientations) for a single part
 */
export function calculatePartPackagingOptions(part: PartInput): PartCalculationResult {
  const equipment = getEquipmentMaster();
  const allOptions: SingleCalculationOption[] = [];

  equipment.forEach((eqp) => {
    ORIENTATION_LIST.forEach((orientation) => {
      const option = calculateSingleOption(part, eqp, orientation);
      allOptions.push(option);
    });
  });

  const feasibleOptions = allOptions.filter((opt) => opt.feasible);

  return {
    partCode: part.partCode || "N/A",
    description: part.itemDescription || "Packaging Part",
    length: Number(part.length) || 0,
    width: Number(part.width) || 0,
    height: Number(part.height) || 0,
    perLayerQty: Number(part.perLayerQty) || 0,
    requiredQty: Number(part.requiredQty) || 1,
    allOptions,
    feasibleOptions,
  };
}

/**
 * Run complete calculation engine on submitted RFQ and generate calculation & results payloads
 */
export function runRFQCalculationEngine(params: {
  rfqNumber: string;
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
    location: string;
    notes: string;
  };
  parts: PartInput[];
}): {
  calculationRecord: RFQCalculationRecord;
  flatResults: FlatResultRow[];
} {
  const { rfqNumber, contact, parts } = params;
  const partResults: PartCalculationResult[] = [];
  const flatResults: FlatResultRow[] = [];

  parts.forEach((part) => {
    const result = calculatePartPackagingOptions(part);
    partResults.push(result);

    // Flatten all feasible options for results.json
    result.feasibleOptions.forEach((opt) => {
      flatResults.push({
        rfqNumber,
        partCode: result.partCode,
        description: result.description,
        length: result.length,
        width: result.width,
        height: result.height,
        perLayerQty: result.perLayerQty,
        requiredQty: result.requiredQty,
        equipment: opt.equipmentName,
        orientation: opt.orientation,
        packetArrayL: opt.packetArrayLength,
        packetArrayW: opt.packetArrayWidth,
        packetArrayH: opt.packetArrayHeight,
        partsPerLayer: opt.partsPerLayer,
        layersPerGLT: opt.layersPerGLT,
        partsPerGLT: opt.partsPerGLT,
        requiredGLTs: opt.requiredGLTs,
        feasibilityStatus: "Feasible",
      });
    });
  });

  const nowIso = new Date().toISOString();
  const calculationRecord: RFQCalculationRecord = {
    rfqNumber,
    createdAt: nowIso,
    timestamp: nowIso,
    customer: contact,
    parts: partResults,
    calculationReference: rfqNumber,
    status: "Submitted",
    summary: {
      totalParts: partResults.length,
      totalEvaluatedOptions: partResults.length * 54,
      totalFeasibleOptions: flatResults.length,
    },
  };

  return {
    calculationRecord,
    flatResults,
  };
}

/**
 * Load all stored calculations combining master JSON and browser session submissions
 */
export function getAllCalculations(): RFQCalculationRecord[] {
  let sessionCalcs: RFQCalculationRecord[] = [];
  if (typeof window !== "undefined") {
    try {
      sessionCalcs = JSON.parse(localStorage.getItem("vevra_rfq_calculations") || "[]");
    } catch {
      sessionCalcs = [];
    }
  }
  const masterCalcs = (calculationsMaster.calculations as unknown as RFQCalculationRecord[]) || [];
  
  // Merge unique by rfqNumber
  const map = new Map<string, RFQCalculationRecord>();
  sessionCalcs.forEach((c) => map.set(c.rfqNumber, c));
  masterCalcs.forEach((c) => {
    if (!map.has(c.rfqNumber)) {
      map.set(c.rfqNumber, c);
    }
  });
  return Array.from(map.values());
}

/**
 * Load all stored flat results combining master JSON and browser session submissions
 */
export function getAllResults(): FlatResultRow[] {
  let sessionResults: FlatResultRow[] = [];
  if (typeof window !== "undefined") {
    try {
      sessionResults = JSON.parse(localStorage.getItem("vevra_rfq_results") || "[]");
    } catch {
      sessionResults = [];
    }
  }
  const masterResults = (resultsMaster.results as unknown as FlatResultRow[]) || [];
  return [...sessionResults, ...masterResults];
}

/**
 * Load all stored RFQ records combining master JSON and browser session submissions
 */
export function getAllRFQs(): RFQRecord[] {
  let sessionRfqs: RFQRecord[] = [];
  if (typeof window !== "undefined") {
    try {
      sessionRfqs = JSON.parse(localStorage.getItem("vevra_rfqs") || "[]");
    } catch {
      sessionRfqs = [];
    }
  }
  const masterRfqs = (rfqsMaster.rfqs as unknown as RFQRecord[]) || [];
  const map = new Map<string, RFQRecord>();
  sessionRfqs.forEach((r) => map.set(r.rfqNumber, r));
  masterRfqs.forEach((r) => {
    if (!map.has(r.rfqNumber)) {
      map.set(r.rfqNumber, r);
    }
  });
  return Array.from(map.values());
}

export function getFormulasConfig() {
  return formulasMaster;
}
