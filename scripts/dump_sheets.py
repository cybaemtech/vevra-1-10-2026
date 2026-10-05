import zipfile
import xml.etree.ElementTree as ET
import re
import json

def parse_all():
    with zipfile.ZipFile('ORIENTATION.xlsm', 'r') as z:
        shared_strings = []
        if 'xl/sharedStrings.xml' in z.namelist():
            tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
            ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            for si in tree.findall('.//main:si', ns):
                t_elems = si.findall('.//main:t', ns)
                shared_strings.append(''.join([t.text or '' for t in t_elems]))
        
        wb_tree = ET.fromstring(z.read('xl/workbook.xml'))
        ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
              'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
        sheets_info = []
        for sheet in wb_tree.findall('.//main:sheet', ns):
            sheets_info.append({
                'name': sheet.attrib.get('name'),
                'sheetId': sheet.attrib.get('sheetId'),
                'rId': sheet.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
            })
        
        wb_rels_tree = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
        r_ns = {'rels': 'http://schemas.openxmlformats.org/package/2006/relationships'}
        rel_map = {}
        for rel in wb_rels_tree.findall('.//rels:Relationship', r_ns):
            rel_map[rel.attrib.get('Id')] = rel.attrib.get('Target')

        sheet_data = {}
        for s in sheets_info:
            target = rel_map.get(s['rId'])
            if not target.startswith('xl/'):
                target = 'xl/' + target
            s_tree = ET.fromstring(z.read(target))
            s_ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            
            rows = {}
            for row in s_tree.findall('.//main:row', s_ns):
                r_idx = int(row.attrib.get('r'))
                rows[r_idx] = {}
                for c in row.findall('.//main:c', s_ns):
                    ref = c.attrib.get('r')
                    c_type = c.attrib.get('t')
                    f_elem = c.find('main:f', s_ns)
                    formula = f_elem.text if f_elem is not None else None
                    v_elem = c.find('main:v', s_ns)
                    val = v_elem.text if v_elem is not None else None
                    if c_type == 's' and val is not None:
                        val = shared_strings[int(val)]
                    col_letters = ''.join(re.findall(r'[A-Za-z]+', ref))
                    rows[r_idx][col_letters] = {
                        'ref': ref,
                        'val': val,
                        'formula': formula
                    }
            sheet_data[s['name']] = rows
        return sheet_data

sheets = parse_all()

# Print detailed summary of each sheet
for sname in sheets:
    s = sheets[sname]
    print(f"\n=======================================================")
    print(f"SHEET: {sname} (Total Rows: {len(s)})")
    print(f"=======================================================")
    # Print row 1 to 5
    for r in range(1, 6):
        if r in s:
            r_str = " | ".join([f"{c}: {s[r][c]['val']}" for c in sorted(s[r].keys(), key=lambda x: (len(x), x)) if s[r][c]['val'] is not None])
            print(f"Row {r:2d}: {r_str}")
    
    # Print some data rows
    data_rows = [r for r in sorted(s.keys()) if r > 5]
    print(f"Data rows count: {len(data_rows)}")
    for r in data_rows[:5]:
        r_str = " | ".join([f"{c}: {s[r][c]['val']}{(' [=' + s[r][c]['formula'] + ']') if s[r][c]['formula'] else ''}" for c in sorted(s[r].keys(), key=lambda x: (len(x), x)) if s[r][c]['val'] is not None or s[r][c]['formula'] is not None])
        print(f"Data Row {r:2d}: {r_str}")
