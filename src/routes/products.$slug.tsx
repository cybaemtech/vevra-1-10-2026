import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/site-content";
import {
  AutomotiveProductPage,
  CorrugatedProductPage,
  CustomizedProductPage,
  GenericProductPage,
  HoneycombProductPage,
  LabelsProductPage,
  MetalProductPage,
  PlasticPPProductPage,
  ProtectiveDunnageProductPage,
  PulpProductPage,
  WoodPlywoodProductPage,
} from "@/components/products";

const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  "corrugated-paper-packaging": "corrugated",
  "corrugated-boxes": "corrugated",
  plastic: "plastic-pp",
  pp: "plastic-pp",
  "plastic-pp-packaging": "plastic-pp",
  "metal-returnable-packaging": "metal",
  "metal-packaging": "metal",
  metal: "metal",
  "automotive-returnable-packaging": "metal",
  "automotive-packaging": "metal",
  automotive: "metal",
  wood: "wood-plywood",
  plywood: "wood-plywood",
  "wood-plywood-packaging": "wood-plywood",
  pulp: "pulp-packaging",
  "pulp-packaging": "pulp-packaging",
  "molded-pulp": "pulp-packaging",
  "moulded-pulp": "pulp-packaging",
  "molded-pulp-packaging": "pulp-packaging",
  "moulded-pulp-packaging": "pulp-packaging",
  honeycomb: "honeycomb-packaging",
  "honeycomb-packaging": "honeycomb-packaging",
  "pulp-honeycomb": "pulp-packaging",
  "pulp-honeycomb-packaging": "pulp-packaging",
  "protective-packaging": "protective-dunnage",
  protective: "protective-dunnage",
  dunnage: "protective-dunnage",
  inserts: "protective-dunnage",
  "protective-dunnage": "protective-dunnage",
  "protective-dunnage-inserts": "protective-dunnage",
  labels: "labels-identification",
  identification: "labels-identification",
  "labels-and-identification": "labels-identification",
  customized: "customized-packaging",
  "custom-packaging": "customized-packaging",
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const canonicalSlug =
      (params?.slug && PRODUCT_SLUG_ALIASES[params.slug]) || params?.slug || "corrugated";
    const product =
      PRODUCTS.find((p) => p.slug === canonicalSlug) ||
      PRODUCTS.find((p) => p.slug === params?.slug) ||
      PRODUCTS[0]!;
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product || PRODUCTS[0]!;
    return {
      meta: [
        { title: `${product?.name || "Product"} | VEVRA Packaging` },
        { name: "description", content: product?.short || "" },
        { property: "og:title", content: `${product?.name || "Product"} — VEVRA Packaging` },
        { property: "og:description", content: product?.short || "" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const data = Route.useLoaderData();
  const product = data?.product || PRODUCTS[0]!;
  const slug = product?.slug || "corrugated";

  switch (slug) {
    case "corrugated":
      return <CorrugatedProductPage />;
    case "plastic-pp":
      return <PlasticPPProductPage />;
    case "metal":
      return <MetalProductPage />;
    case "protective-dunnage":
      return <ProtectiveDunnageProductPage />;
    case "wood-plywood":
      return <WoodPlywoodProductPage />;
    case "pulp-packaging":
      return <PulpProductPage />;
    case "honeycomb-packaging":
      return <HoneycombProductPage />;
    case "labels-identification":
      return <LabelsProductPage />;
    case "customized-packaging":
      return <CustomizedProductPage />;
    default:
      return <GenericProductPage product={product} />;
  }
}
