import os
import json
import zipfile
import xml.etree.ElementTree as ET

def generate_all_data():
    os.makedirs('data/equipment', exist_ok=True)
    os.makedirs('data/formulas', exist_ok=True)
    os.makedirs('data/calculations', exist_ok=True)
    os.makedirs('data/results', exist_ok=True)
    os.makedirs('data/rfq', exist_ok=True)

    # 1. Parse EQP sheet from ORIENTATION.xlsm
    with zipfile.ZipFile('ORIENTATION.xlsm', 'r') as z:
        sst = []
        if 'xl/sharedStrings.xml' in z.namelist():
            sst_tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in sst_tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                sst.append(''.join([node.text for node in si.iter() if node.text]))

        tree = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
        rows_data = {}
        for r in tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
            r_num = int(r.attrib['r'])
            cells = {}
            for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                cref = c.attrib.get('r')
                ctype = c.attrib.get('t')
                vnode = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                val = vnode.text if vnode is not None else ''
                if ctype == 's' and val != '':
                    val = sst[int(val)]
                cells[cref] = val
            rows_data[r_num] = cells

    equipment_list = []
    # Rows 2 to 10 in EQP sheet
    for r_num in range(2, 11):
        row = rows_data.get(r_num, {})
        name = row.get(f'A{r_num}', '').strip()
        if not name:
            continue

        # Extract outer dimensions from name if available (e.g., "FLC ( 1200 x 1000 x 800) mm")
        # Orientations:
        # LXL: B, C, D
        # LxW: E, F, G
        # LxH: H, I, J
        # WXW: K, L, M
        # WxH: N, O, P
        # HxW: Q, R, S
        orientations = {
            "LXL": {
                "lengthMm": float(row.get(f'B{r_num}', 0)),
                "widthMm": float(row.get(f'C{r_num}', 0)),
                "heightMm": float(row.get(f'D{r_num}', 0))
            },
            "LxW": {
                "lengthMm": float(row.get(f'E{r_num}', 0)),
                "widthMm": float(row.get(f'F{r_num}', 0)),
                "heightMm": float(row.get(f'G{r_num}', 0))
            },
            "LxH": {
                "lengthMm": float(row.get(f'H{r_num}', 0)),
                "widthMm": float(row.get(f'I{r_num}', 0)),
                "heightMm": float(row.get(f'J{r_num}', 0))
            },
            "WXW": {
                "lengthMm": float(row.get(f'K{r_num}', 0)),
                "widthMm": float(row.get(f'L{r_num}', 0)),
                "heightMm": float(row.get(f'M{r_num}', 0))
            },
            "WxH": {
                "lengthMm": float(row.get(f'N{r_num}', 0)),
                "widthMm": float(row.get(f'O{r_num}', 0)),
                "heightMm": float(row.get(f'P{r_num}', 0))
            },
            "HxW": {
                "lengthMm": float(row.get(f'Q{r_num}', 0)),
                "widthMm": float(row.get(f'R{r_num}', 0)),
                "heightMm": float(row.get(f'S{r_num}', 0))
            }
        }

        # Base GLT dimensions (from standard LXL orientation)
        base_glt = orientations["LXL"]

        equipment_list.append({
            "id": f"eqp_{r_num-1}",
            "name": name,
            "category": "FLC" if "FLC" in name else ("FCS" if "FCS" in name else "Crate"),
            "baseGLTDimensions": {
                "lengthMm": base_glt["lengthMm"],
                "widthMm": base_glt["widthMm"],
                "heightMm": base_glt["heightMm"]
            },
            "orientations": orientations
        })

    equipment_json_content = {
        "version": "1.0",
        "description": "Master equipment and orientation GLT dimensions extracted directly from ORIENTATION.xlsm (EQP sheet)",
        "equipmentCount": len(equipment_list),
        "supportedOrientations": ["LXL", "LxW", "LxH", "WXW", "WxH", "HxW"],
        "equipment": equipment_list
    }

    with open('data/equipment/equipment.json', 'w', encoding='utf-8') as f:
        json.dump(equipment_json_content, f, indent=2)
    print("Wrote data/equipment/equipment.json")

    # 2. Generate data/formulas/formulas.json
    formulas_json_content = {
        "version": "1.0",
        "name": "VEVRA RFQ Calculation Engine Formulas",
        "source": "ORIENTATION.xlsm (RFQ & Orientation sheet)",
        "clearanceBufferMm": 5,
        "supportedOrientations": [
            {
                "code": "LXL",
                "name": "Length x Length",
                "description": "Primary standard orientation using LXL GLT dimensions"
            },
            {
                "code": "LxW",
                "name": "Length x Width",
                "description": "Rotated width-wise orientation using LxW GLT dimensions"
            },
            {
                "code": "LxH",
                "name": "Length x Height",
                "description": "Vertical orientation using LxH GLT dimensions"
            },
            {
                "code": "WXW",
                "name": "Width x Width",
                "description": "Width-aligned orientation using WXW GLT dimensions"
            },
            {
                "code": "WxH",
                "name": "Width x Height",
                "description": "Side vertical orientation using WxH GLT dimensions"
            },
            {
                "code": "HxW",
                "name": "Height x Width",
                "description": "Inverted orientation using HxW GLT dimensions"
            }
        ],
        "formulas": {
            "effectivePartDimensions": {
                "length": "partLengthMm + clearanceBufferMm (5mm)",
                "width": "partWidthMm + clearanceBufferMm (5mm)",
                "height": "partHeightMm + clearanceBufferMm (5mm)"
            },
            "packetArrayLength": {
                "excelFormula": "ROUNDDOWN(GLT_L / (Part_L + 5), 0)",
                "math": "Math.floor(gltLengthMm / (partLengthMm + 5))",
                "parameters": ["gltLengthMm", "partLengthMm"]
            },
            "packetArrayWidth": {
                "excelFormula": "ROUNDDOWN(GLT_W / (Part_W + 5), 0)",
                "math": "Math.floor(gltWidthMm / (partWidthMm + 5))",
                "parameters": ["gltWidthMm", "partWidthMm"]
            },
            "packetArrayHeight": {
                "excelFormula": "ROUNDDOWN(GLT_H / (Part_H + 5), 0)",
                "math": "Math.floor(gltHeightMm / (partHeightMm + 5))",
                "parameters": ["gltHeightMm", "partHeightMm"]
            },
            "partsPerLayer": {
                "excelFormula": "Packet_Array_L * Packet_Array_W",
                "math": "packetArrayLength * packetArrayWidth",
                "parameters": ["packetArrayLength", "packetArrayWidth"]
            },
            "layersPerGLT": {
                "excelFormula": "Packet_Array_H",
                "math": "packetArrayHeight",
                "parameters": ["packetArrayHeight"]
            },
            "partsPerGLT": {
                "excelFormula": "Parts_Per_Layer * Layers_Per_GLT",
                "math": "partsPerLayer * layersPerGLT",
                "parameters": ["partsPerLayer", "layersPerGLT"]
            },
            "requiredGLTs": {
                "excelFormula": "IF(Parts_Per_GLT > 0, ROUNDUP(Qty_Req / Parts_Per_GLT, 0), 0)",
                "math": "partsPerGLT > 0 ? Math.ceil(requiredQty / partsPerGLT) : 0",
                "parameters": ["requiredQty", "partsPerGLT"]
            },
            "feasibilityStatus": {
                "rule": "Feasible if packetArrayLength > 0 AND packetArrayWidth > 0 AND packetArrayHeight > 0 (i.e. partsPerGLT > 0)",
                "output": "feasible | infeasible"
            }
        }
    }

    with open('data/formulas/formulas.json', 'w', encoding='utf-8') as f:
        json.dump(formulas_json_content, f, indent=2)
    print("Wrote data/formulas/formulas.json")

    # 3. Initialize data/calculations/calculations.json
    calculations_json_content = {
        "version": "1.0",
        "description": "Log of submitted RFQ calculations with all evaluated equipment and orientation options",
        "calculations": []
    }
    with open('data/calculations/calculations.json', 'w', encoding='utf-8') as f:
        json.dump(calculations_json_content, f, indent=2)
    print("Wrote data/calculations/calculations.json")

    # 4. Initialize data/results/results.json
    results_json_content = {
        "version": "1.0",
        "description": "Complete breakdown of all feasible packaging options per RFQ, part, equipment, and orientation",
        "results": []
    }
    with open('data/results/results.json', 'w', encoding='utf-8') as f:
        json.dump(results_json_content, f, indent=2)
    print("Wrote data/results/results.json")

    # 5. Initialize data/rfq/rfqs.json
    rfqs_json_content = {
        "version": "1.0",
        "description": "Submitted RFQ records with customer contact and multi-part specifications",
        "rfqs": []
    }
    with open('data/rfq/rfqs.json', 'w', encoding='utf-8') as f:
        json.dump(rfqs_json_content, f, indent=2)
    print("Wrote data/rfq/rfqs.json")

if __name__ == '__main__':
    generate_all_data()
