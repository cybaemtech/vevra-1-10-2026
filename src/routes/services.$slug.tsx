import { createFileRoute, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site-content";
import {
  AirOceanFreightServicePage,
  EquipmentPoolingServicePage,
  GenericServicePage,
  OnSitePackagingServicePage,
  PackagingEngineeringServicePage,
  PackagingRentalServicePage,
  ReturnablePackagingServicePage,
  SustainablePackagingServicePage,
  TransportLogisticsServicePage,
  WarehousePackagingServicePage,
} from "@/components/services";

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  engineering: "packaging-engineering",
  "packaging-design": "packaging-engineering",
  "design-engineering": "packaging-engineering",
  "packaging-design-engineering": "packaging-engineering",
  returnables: "returnable-packaging-management",
  returnable: "returnable-packaging-management",
  "returnable-packaging": "returnable-packaging-management",
  "returnable-packaging-management": "returnable-packaging-management",
  rental: "packaging-rental",
  pooling: "equipment-pooling",
  onsite: "on-site-packaging-operations",
  "on-site": "on-site-packaging-operations",
  "on-site-packaging": "on-site-packaging-operations",
  "on-site-packaging-operations": "on-site-packaging-operations",
  "on-site-industrial": "on-site-packaging-operations",
  "on-site-industrial-packaging": "on-site-packaging-operations",
  "industrial-packaging": "on-site-packaging-operations",
  warehousing: "warehouse-packaging-management",
  "warehouse-management": "warehouse-packaging-management",
  "warehouse-packaging": "warehouse-packaging-management",
  "warehouse-packaging-management": "warehouse-packaging-management",
  transport: "transport-logistics",
  logistics: "transport-logistics",
  "transport-logistics": "transport-logistics",
  freight: "air-ocean-freight",
  "air-freight": "air-ocean-freight",
  "ocean-freight": "air-ocean-freight",
  "air-ocean": "air-ocean-freight",
  "air-ocean-freight": "air-ocean-freight",
  sustainability: "packaging-optimization-sustainability",
  optimization: "packaging-optimization-sustainability",
  "packaging-optimization": "packaging-optimization-sustainability",
  "packaging-optimization-sustainability": "packaging-optimization-sustainability",
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const canonicalSlug = SERVICE_SLUG_ALIASES[params.slug] || params.slug;
    const service =
      SERVICES.find((s) => s.slug === canonicalSlug) ||
      SERVICES.find((s) => s.slug === params.slug) ||
      SERVICES[0];
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service unavailable | VEVRA Packaging" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} | VEVRA Packaging` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.name} — VEVRA Packaging` },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const slug = service?.slug || "packaging-engineering";

  switch (slug) {
    case "packaging-engineering":
      return <PackagingEngineeringServicePage />;
    case "returnable-packaging-management":
      return <ReturnablePackagingServicePage />;
    case "equipment-pooling":
      return <EquipmentPoolingServicePage />;
    case "packaging-optimization-sustainability":
      return <SustainablePackagingServicePage />;
    case "on-site-packaging-operations":
      return <OnSitePackagingServicePage />;
    case "transport-logistics":
      return <TransportLogisticsServicePage />;
    case "air-ocean-freight":
      return <AirOceanFreightServicePage />;
    case "warehouse-packaging-management":
      return <WarehousePackagingServicePage />;
    case "packaging-rental":
      return <PackagingRentalServicePage />;
    default:
      return <GenericServicePage service={service} />;
  }
}
