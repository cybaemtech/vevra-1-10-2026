import json
import math

def populate_all_data():
    with open('data/equipment/equipment.json', 'r', encoding='utf-8') as f:
        eqp_data = json.load(f)
    
    equipment_list = eqp_data['equipment']
    orientations_list = eqp_data['supportedOrientations']

    # Sample verified parts from RFQ & Orientation sheet
    sample_parts = [
        {
            "partCode": "14007834",
            "itemDescription": "2.0_M_CENTER BEZEL PREMIUM ASSY",
            "length": 274,
            "width": 76,
            "height": 620,
            "perLayerQty": 44,
            "requiredQty": 80
        },
        {
            "partCode": "14007835",
            "itemDescription": "SHROUD UPPER",
            "length": 225,
            "width": 125,
            "height": 190,
            "perLayerQty": 96,
            "requiredQty": 18
        },
        {
            "partCode": "14007836",
            "itemDescription": "SHROUD LOWER",
            "length": 435,
            "width": 100,
            "height": 210,
            "perLayerQty": 48,
            "requiredQty": 75
        },
        {
            "partCode": "14007837",
            "itemDescription": "CLUSTER BEZEL LOWER ASSY",
            "length": 365,
            "width": 63,
            "height": 225,
            "perLayerQty": 96,
            "requiredQty": 38
        }
    ]

    rfq_number = "VEVRA-RFQ-2026-0001"
    created_at = "2026-10-01T12:00:00.000Z"
    customer = {
        "name": "Rajesh Kumar",
        "company": "Tata AutoComp Systems Ltd.",
        "email": "rajesh.k@tataindia.com",
        "phone": "+91 98230 12345",
        "location": "Pune, Maharashtra, 411018",
        "notes": "Evaluation for returnable packaging bins & crates across all 6 standard orientations"
    }

    part_calc_results = []
    flat_results = []

    for part in sample_parts:
        p_l = part['length']
        p_w = part['width']
        p_h = part['height']
        req_qty = part['requiredQty']

        all_options = []
        feasible_options = []

        eff_l = p_l + 5
        eff_w = p_w + 5
        eff_h = p_h + 5

        for eqp in equipment_list:
            for ori in orientations_list:
                glt = eqp['orientations'][ori]
                g_l = glt['lengthMm']
                g_w = glt['widthMm']
                g_h = glt['heightMm']

                pa_l = math.floor(g_l / eff_l) if eff_l > 0 else 0
                pa_w = math.floor(g_w / eff_w) if eff_w > 0 else 0
                pa_h = math.floor(g_h / eff_h) if eff_h > 0 else 0

                parts_per_layer = pa_l * pa_w
                layers_per_glt = pa_h
                parts_per_glt = parts_per_layer * layers_per_glt
                req_glts = math.ceil(req_qty / parts_per_glt) if parts_per_glt > 0 else 0
                feasible = parts_per_glt > 0

                option = {
                    "equipmentId": eqp['id'],
                    "equipmentName": eqp['name'],
                    "equipmentCategory": eqp['category'],
                    "orientation": ori,
                    "gltDimensions": {
                        "lengthMm": g_l,
                        "widthMm": g_w,
                        "heightMm": g_h
                    },
                    "effectivePartDimensions": {
                        "lengthMm": eff_l,
                        "widthMm": eff_w,
                        "heightMm": eff_h
                    },
                    "packetArrayLength": pa_l,
                    "packetArrayWidth": pa_w,
                    "packetArrayHeight": pa_h,
                    "partsPerLayer": parts_per_layer,
                    "layersPerGLT": layers_per_glt,
                    "partsPerGLT": parts_per_glt,
                    "requiredGLTs": req_glts,
                    "feasible": feasible
                }
                all_options.append(option)

                if feasible:
                    feasible_options.append(option)
                    flat_results.append({
                        "rfqNumber": rfq_number,
                        "partCode": part['partCode'],
                        "description": part['itemDescription'],
                        "length": p_l,
                        "width": p_w,
                        "height": p_h,
                        "perLayerQty": part['perLayerQty'],
                        "requiredQty": req_qty,
                        "equipment": eqp['name'],
                        "orientation": ori,
                        "packetArrayL": pa_l,
                        "packetArrayW": pa_w,
                        "packetArrayH": pa_h,
                        "partsPerLayer": parts_per_layer,
                        "layersPerGLT": layers_per_glt,
                        "partsPerGLT": parts_per_glt,
                        "requiredGLTs": req_glts,
                        "feasibilityStatus": "Feasible"
                    })

        part_calc_results.append({
            "partCode": part['partCode'],
            "description": part['itemDescription'],
            "length": p_l,
            "width": p_w,
            "height": p_h,
            "perLayerQty": part['perLayerQty'],
            "requiredQty": req_qty,
            "allOptions": all_options,
            "feasibleOptions": feasible_options
        })

    # 1. Update data/rfq/rfqs.json
    with open('data/rfq/rfqs.json', 'w', encoding='utf-8') as f:
        json.dump({
            "version": "1.0",
            "description": "Submitted RFQ records with customer contact, multi-part specifications, and calculation references",
            "rfqs": [
                {
                    "rfqNumber": rfq_number,
                    "createdAt": created_at,
                    "status": "Submitted",
                    "customer": customer,
                    "parts": sample_parts,
                    "calculationReference": rfq_number
                }
            ]
        }, f, indent=2)

    # 2. Update data/calculations/calculations.json
    calc_record = {
        "rfqNumber": rfq_number,
        "createdAt": created_at,
        "status": "Submitted",
        "calculationReference": rfq_number,
        "customer": customer,
        "parts": part_calc_results,
        "summary": {
            "totalParts": len(sample_parts),
            "totalEvaluatedOptions": len(sample_parts) * 54,
            "totalFeasibleOptions": len(flat_results)
        }
    }

    with open('data/calculations/calculations.json', 'w', encoding='utf-8') as f:
        json.dump({
            "version": "1.0",
            "description": "Log of submitted RFQ calculations with all evaluated equipment and orientation options",
            "calculations": [calc_record]
        }, f, indent=2)

    # 3. Update data/results/results.json
    with open('data/results/results.json', 'w', encoding='utf-8') as f:
        json.dump({
            "version": "1.0",
            "description": "Complete breakdown of all feasible packaging options per RFQ, part, equipment, and orientation",
            "results": flat_results
        }, f, indent=2)

    print(f"Updated data/rfq/rfqs.json, data/calculations/calculations.json, and data/results/results.json successfully!")

if __name__ == '__main__':
    populate_all_data()
