import cap01Corrugated from "@/assets/capabilities/cap-01-corrugated.png";
import cap02Plastic from "@/assets/capabilities/cap-02-plastic.jpg";
import cap03Metal from "@/assets/capabilities/cap-03-metal.jpg";
import cap04Pooling from "@/assets/capabilities/cap-04-pooling.jpg";
import cap05Onsite from "@/assets/capabilities/cap-05-onsite.jpg";
import cap06Transport from "@/assets/capabilities/cap-06-transport.jpg";
import cap07Labels from "@/assets/capabilities/cap-07-labels.jpg";
import cap08Wood from "@/assets/capabilities/cap-08-wood-plywood.png";
import capBoxCorner from "@/assets/capabilities/cap-box-corner.jpg";
import capPulpHoneycomb from "@/assets/capabilities/cap-pulp-honeycomb.jpg";
import pulpHeroImg from "@/assets/Vevara/Modeled Pulp packaging- new generated/hero section img.webp";
import labelsHeroImg from "@/assets/Vevara/Industrial labels and identification- new generated/hero img.png";
import metalHeroImg from "@/assets/Vevara/Automotive Returnable Solutions - Metal page no 48 to 51/Automotive Returnable Solutions - Metal page 48 , 49/stackable_container_design_high_quality.webp";
import serviceEngineeringCad from "@/assets/capabilities/service-engineering-cad.png";
import serviceReturnableCrates from "@/assets/capabilities/service-returnable-crates.jpg";
import serviceConveyorRental from "@/assets/capabilities/service-conveyor-rental.png";
import serviceWarehouseRacks from "@/assets/capabilities/service-warehouse-racks.jpg";
import heroPackaging from "@/assets/hero-packaging.jpg";

import onsiteHeroImg from "@/assets/Vevara/Our Products and Service Page no 52 to 54/On-Site Packing For Turbine page no 54/blue_wrapped_machine_2_high_quality.webp";
import vevraWarehouseBg from "@/assets/warehouse_packaging/vevra_warehouse_packaging_background.png";
import transportHeroImg from "@/assets/pictures/hero- service capability/transport_logistics_background.webp";
import airOceanImg from "@/assets/pictures/How it works/air_ocean_freight.png";
import sustainableHeaderImg from "@/assets/services/onsite/d614f3e2-052f-4f99-8486-a508bfc3389a.png";

import corrugatedPackingImg from "@/assets/impo/corrugated-packing.png";
import labelPackagingImg from "@/assets/impo/label-packeging.png";
import componentTraysImg from "@/assets/Vevara/Dunnage_Images/component trays.png";
import customisePackagingImg from "@/assets/impo/customise-packaging.png";
import honeycombPackingImg from "@/assets/Vevara/Customised Solutions – Honeycom, pg-20/1.png";

export const SITE_IMAGES = {
  engineering: heroPackaging,
  products: corrugatedPackingImg,
  returnables: cap02Plastic,
  warehouse: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
} as const;

export const PRODUCT_IMAGES: Record<string, string> = {
  corrugated: corrugatedPackingImg,
  "plastic-pp": cap02Plastic,
  metal: metalHeroImg,
  "wood-plywood": cap08Wood,
  "pulp-packaging": pulpHeroImg,
  "honeycomb-packaging": honeycombPackingImg,
  "labels-identification": labelsHeroImg,
  "protective-dunnage": componentTraysImg,
  "customized-packaging": customisePackagingImg,
  // Backward compatibility keys
  protective: componentTraysImg,
  pulp: pulpHeroImg,
  honeycomb: honeycombPackingImg,
  dunnage: componentTraysImg,
};

export const SERVICE_IMAGES: Record<string, string> = {
  "packaging-engineering": serviceEngineeringCad,
  "returnable-packaging": serviceReturnableCrates,
  "returnable-packaging-management": serviceReturnableCrates,
  "packaging-rental": cap04Pooling,
  "equipment-pooling": cap04Pooling,
  "on-site-packaging-operations": onsiteHeroImg,
  "warehouse-packaging-management": vevraWarehouseBg,
  "transport-logistics": transportHeroImg,
  "air-ocean-freight": airOceanImg,
  "packaging-optimization-sustainability": sustainableHeaderImg,
};
