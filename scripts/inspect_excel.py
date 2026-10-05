import zipfile
import xml.etree.ElementTree as ET
import json

def main():
    with zipfile.ZipFile('ORIENTATION.xlsm', 'r') as z:
        sst = []
        if 'xl/sharedStrings.xml' in z.namelist():
            sst_tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in sst_tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                sst.append(''.join([node.text for node in si.iter() if node.text]))

        def get_sheet_cells(sheet_path):
            tree = ET.fromstring(z.read(sheet_path))
            data = {}
            for r in tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
                for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                    cref = c.attrib.get('r')
                    ctype = c.attrib.get('t')
                    vnode = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                    fnode = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}f')
                    val = vnode.text if vnode is not None else ''
                    formula = fnode.text if fnode is not None else ''
                    if ctype == 's' and val != '':
                        val = sst[int(val)]
                    data[cref] = {'val': val, 'formula': formula}
            return data

        print("=== EQP SHEET FULL DUMP ===")
        eqp = get_sheet_cells('xl/worksheets/sheet1.xml')
        def to_col_letters(num):
            s = ''
            while num > 0:
                num, rem = divmod(num - 1, 26)
                s = chr(65 + rem) + s
            return s

        for r in range(1, 15):
            row_items = []
            for c in range(1, 25):
                cref = f"{to_col_letters(c)}{r}"
                if cref in eqp:
                    v = eqp[cref]['val']
                    f = eqp[cref]['formula']
                    row_items.append(f"{to_col_letters(c)}={v}" + (f" [f:{f}]" if f else ""))
            if row_items:
                print(f"Row {r}: " + " | ".join(row_items))

        print("\n=== RFQ & ORIENTATION SHEET COLUMNS (Row 1 Header & Row 2 Formula) ===")
        rfq = get_sheet_cells('xl/worksheets/sheet2.xml')
        for c in range(1, 70):
            col_letter = to_col_letters(c)
            h = rfq.get(f"{col_letter}1", {}).get('val', '')
            r2_v = rfq.get(f"{col_letter}2", {}).get('val', '')
            r2_f = rfq.get(f"{col_letter}2", {}).get('formula', '')
            if h or r2_v or r2_f:
                print(f"{col_letter.rjust(3)}: Header={repr(h):35} | Row2_val={repr(r2_v):15} | Row2_formula={repr(r2_f)}")

if __name__ == '__main__':
    main()
