import zipfile
import xml.etree.ElementTree as ET
import re
import json

def parse_xlsm(filename):
    with zipfile.ZipFile(filename, 'r') as z:
        # 1. Read shared strings
        shared_strings = []
        if 'xl/sharedStrings.xml' in z.namelist():
            tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
            ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            for si in tree.findall('.//main:si', ns):
                t_elems = si.findall('.//main:t', ns)
                shared_strings.append(''.join([t.text or '' for t in t_elems]))
        
        # 2. Read workbook.xml to get sheet names
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
        
        # Read workbook.xml.rels to map rId to target sheet xml file
        wb_rels_tree = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
        r_ns = {'rels': 'http://schemas.openxmlformats.org/package/2006/relationships'}
        rel_map = {}
        for rel in wb_rels_tree.findall('.//rels:Relationship', r_ns):
            rel_map[rel.attrib.get('Id')] = rel.attrib.get('Target')

        sheet_data = {}
        for s in sheets_info:
            target = rel_map.get(s['rId'])
            if target:
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
                        
                        # Col letters
                        col_letters = ''.join(re.findall(r'[A-Za-z]+', ref))
                        rows[r_idx][col_letters] = {
                            'ref': ref,
                            'val': val,
                            'formula': formula
                        }
                sheet_data[s['name']] = rows
        
        return sheet_data

data = parse_xlsm('ORIENTATION.xlsm')
print("Sheet names:", list(data.keys()))

for name, sheet in data.items():
    print(f"\n================ SHEET: {name} ================")
    print(f"Total rows: {len(sheet)}")
    # Print first 25 rows
    for r_idx in sorted(sheet.keys())[:35]:
        row = sheet[r_idx]
        row_str = " | ".join([f"{col}: {cell['val']}{(' [=' + cell['formula'] + ']') if cell['formula'] else ''}" for col, cell in sorted(row.items()) if cell['val'] or cell['formula']])
        if row_str:
            print(f"Row {r_idx:2d}: {row_str}")
