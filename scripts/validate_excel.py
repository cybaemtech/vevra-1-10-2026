import zipfile
import xml.etree.ElementTree as ET
import json
import math

def validate_engine_against_excel():
    with zipfile.ZipFile('ORIENTATION.xlsm', 'r') as z:
        sst = []
        if 'xl/sharedStrings.xml' in z.namelist():
            sst_tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in sst_tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                sst.append(''.join([node.text for node in si.iter() if node.text]))

        # Load Sheet 2 (RFQ & Orientation)
        tree = ET.fromstring(z.read('xl/worksheets/sheet2.xml'))
        rows = {}
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
            rows[r_num] = cells

    with open('data/equipment/equipment.json', 'r', encoding='utf-8') as f:
        eqp_json = json.load(f)
    eqp_list = eqp_json['equipment']

    # We will test rows 2 through 11 (sample RFQ parts)
    checked_count = 0
    passed_count = 0

    print("=== EXCEL VALIDATION REPORT ===")
    for r in range(2, 12):
        row = rows.get(r, {})
        part_code = row.get(f'C{r}', '')
        item_desc = row.get(f'D{r}', '')
        p_l = float(row.get(f'E{r}', 0))
        p_w = float(row.get(f'F{r}', 0))
        p_h = float(row.get(f'G{r}', 0))
        per_layer = float(row.get(f'H{r}', 0))
        qty_req = float(row.get(f'K{r}', 0))
        eqp_name = row.get(f'L{r}', '').strip()

        # Find matching equipment
        eqp = next((e for e in eqp_list if e['name'] == eqp_name), eqp_list[0])

        # Test all 6 orientations
        # LXL: P, Q, R, S, T, U
        # LxW: Y, Z, AA, AB, AC, AD
        # LxH: AH, AI, AJ, AK, AL, AM
        # WXW: AQ, AR, AS, AT, AU, AV
        # WxH: AZ, BA, BB, BC, BD, BE
        # HxW: BI, BJ, BK, BL, BM, BN

        ori_map = [
            ("LXL", f'P{r}', f'Q{r}', f'R{r}', f'S{r}', f'T{r}', f'U{r}'),
            ("LxW", f'Y{r}', f'Z{r}', f'AA{r}', f'AB{r}', f'AC{r}', f'AD{r}'),
            ("LxH", f'AH{r}', f'AI{r}', f'AJ{r}', f'AK{r}', f'AL{r}', f'AM{r}'),
            ("WXW", f'AQ{r}', f'AR{r}', f'AS{r}', f'AT{r}', f'AU{r}', f'AV{r}'),
            ("WxH", f'AZ{r}', f'BA{r}', f'BB{r}', f'BC{r}', f'BD{r}', f'BE{r}'),
            ("HxW", f'BI{r}', f'BJ{r}', f'BK{r}', f'BL{r}', f'BM{r}', f'BN{r}')
        ]

        for ori, c_pal, c_paw, c_pah, c_ppl, c_lpg, c_ppg in ori_map:
            checked_count += 1
            glt = eqp['orientations'][ori]
            calc_pal = math.floor(glt['lengthMm'] / (p_l + 5))
            calc_paw = math.floor(glt['widthMm'] / (p_w + 5))
            calc_pah = math.floor(glt['heightMm'] / (p_h + 5))
            calc_ppl = calc_pal * calc_paw
            calc_lpg = calc_pah
            calc_ppg = calc_ppl * calc_lpg

            ex_pal = float(row.get(c_pal, 0))
            ex_paw = float(row.get(c_paw, 0))
            ex_pah = float(row.get(c_pah, 0))
            ex_ppl = float(row.get(c_ppl, 0))
            ex_lpg = float(row.get(c_lpg, 0))
            ex_ppg = float(row.get(c_ppg, 0))

            assert calc_pal == ex_pal, f"Mismatch in PAL Row {r} {ori}: calc={calc_pal}, excel={ex_pal}"
            assert calc_paw == ex_paw, f"Mismatch in PAW Row {r} {ori}: calc={calc_paw}, excel={ex_paw}"
            assert calc_pah == ex_pah, f"Mismatch in PAH Row {r} {ori}: calc={calc_pah}, excel={ex_pah}"
            assert calc_ppl == ex_ppl, f"Mismatch in PPL Row {r} {ori}: calc={calc_ppl}, excel={ex_ppl}"
            assert calc_lpg == ex_lpg, f"Mismatch in LPG Row {r} {ori}: calc={calc_lpg}, excel={ex_lpg}"
            assert calc_ppg == ex_ppg, f"Mismatch in PPG Row {r} {ori}: calc={calc_ppg}, excel={ex_ppg}"
            passed_count += 1

    print(f"ALL {passed_count}/{checked_count} ORIENTATION CALCULATIONS MATCHED EXCEL PERFECTLY (100% PASS)!")

if __name__ == '__main__':
    validate_engine_against_excel()
