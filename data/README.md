# VEVRA RFQ Data Store (JSON-Based)

This folder stores all Request For Quotation (RFQ) data, part specifications, packaging configurations, and submissions without requiring an external database.

## Files Structure

- **`rfq-submissions.json`**: Stores all submitted or recorded RFQ entries including route, multiple parts details, selected packaging options, transport preferences, and customer contact data.
- **`rfq-parts.json`**: Standard catalog/template reference parts with part codes, descriptions, default dimensions (mm), per-layer quantities, and required quantities.

## Part Schema

Each part item in an RFQ contains:
- `id`: Unique identifier (e.g. `"part-1"`, `"part-2"`)
- `partCode`: Part code / SKU reference (string)
- `itemDescription`: Description of the item / component (string)
- `length`: Length in millimeters (number / string)
- `width`: Width in millimeters (number / string)
- `height`: Height in millimeters (number / string)
- `perLayerQty`: Quantity of parts per packaging layer (number / string)
- `requiredQty`: Total required quantity of parts (number / string)
