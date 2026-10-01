import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Box,
  Boxes,
  Building,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Coins,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Layers,
  Leaf,
  LineChart,
  MapPin,
  Maximize2,
  Package,
  PackageCheck,
  RefreshCw,
  RotateCcw,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import vevraWarehouseBg from "@/assets/warehouse_packaging/vevra_warehouse_packaging_background.png";
import dashboardImg from "@/assets/warehouse_packaging/from inventory to order fulfillment/dashboard.webp";
import inventoryImg from "@/assets/warehouse_packaging/from inventory to order fulfillment/inventory_management_clear.webp";
import orderImg from "@/assets/warehouse_packaging/from inventory to order fulfillment/order_processing.webp";
import assetTrackingImg from "@/assets/warehouse_packaging/from inventory to order fulfillment/asset_tracking.webp";

export function WarehousePackagingServicePage() {
  const assetVisibilityCards = [
    {
      title: "Asset Availability",
      desc: "Live view of available packaging assets",
      iconBg: "bg-sky-50 border-sky-100 text-[#2563eb]",
      icon: (
        <svg className="w-5 h-5 stroke-[#2563eb] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      title: "Inventory",
      desc: "Track stock across multiple locations",
      iconBg: "bg-rose-50 border-rose-100 text-[#e11d2e]",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      title: "Orders",
      desc: "Manage inbound and outbound orders",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      icon: (
        <svg className="w-5 h-5 stroke-emerald-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Packaging Location",
      desc: "View current location and movement",
      iconBg: "bg-purple-50 border-purple-100 text-purple-600",
      icon: (
        <svg className="w-5 h-5 stroke-purple-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: "Return Status",
      desc: "Track returns and asset condition",
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      icon: (
        <svg className="w-5 h-5 stroke-amber-600 fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      title: "Utilization",
      desc: "Monitor asset utilization and cycle efficiency",
      iconBg: "bg-sky-50 border-sky-100 text-[#2563eb]",
      icon: (
        <svg className="w-5 h-5 stroke-[#2563eb] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Cycle Status",
      desc: "Complete life cycle tracking",
      iconBg: "bg-rose-50 border-rose-100 text-[#e11d2e]",
      icon: (
        <svg className="w-5 h-5 stroke-[#e11d2e] fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  const workflowSteps = [
    {
      num: "1",
      title: "1. Dashboard",
      desc: "Overview of assets, inventory and orders",
      img: dashboardImg,
    },
    {
      num: "2",
      title: "2. Inventory Management",
      desc: "View and manage packaging inventory in real-time",
      img: inventoryImg,
    },
    {
      num: "3",
      title: "3. Order Processing",
      desc: "Create, track and manage orders",
      img: orderImg,
    },
    {
      num: "4",
      title: "4. Asset Tracking",
      desc: "Track movement, locations and return status",
      img: assetTrackingImg,
    },
  ];

  return (
    <SiteLayout>
      <div className="bg-white text-slate-800 min-h-screen">
        {/* =========================================================================
            1. HERO SECTION (FULL BLEED HERO IMAGE, NO CARDS)
        ========================================================================= */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100 min-h-[480px] lg:min-h-[520px] flex items-center">
          {/* Right Side Full Image with natural fade to the left */}
          <div className="absolute right-0 top-0 bottom-0 h-full w-full sm:w-[65%] lg:w-[60%] pointer-events-none overflow-hidden">
            <img
              src={vevraWarehouseBg}
              alt="VEVRA Warehouse & Packaging Management"
              className="w-full h-full object-cover object-right"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full relative z-10">
            <div className="max-w-xl lg:max-w-[540px]">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-5 h-[2px] bg-[#e11d2e] inline-block" />
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.05em] text-[#e11d2e]">
                  Service Capability
                </span>
              </div>

              <h1 className="text-4xl sm:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-[#0f1e40] leading-[1.12]">
                Warehouse &<br />
                <span className="text-[#dc2626]">Packaging Management</span>
              </h1>

              <p className="mt-3.5 text-xs sm:text-[13px] text-slate-600 max-w-[460px] font-normal leading-relaxed">
                End-to-end warehouse and packaging management with digital tracking, asset control and operational efficiency across your supply chain.
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#dc2626] text-white font-bold text-xs tracking-wide shadow-md shadow-red-500/20 hover:bg-[#b91c1c] transition-all"
                >
                  GENERATE QUICK RFQ
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-[#0f1e40] font-bold text-xs tracking-wide hover:bg-slate-50 transition-all shadow-sm"
                >
                  TALK TO US
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 3 Trust Feature Badges */}
              <div className="mt-7 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3 max-w-lg">
                {/* Badge 1 */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Warehouse className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Optimized</div>
                    <div className="text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">Storage & Handling</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Real-Time</div>
                    <div className="text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">Asset Visibility</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-[#0f1e40] leading-tight">Safe & Secure</div>
                    <div className="text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SECTION: REAL-TIME PACKAGING ASSET VISIBILITY (7 CARDS)
        ========================================================================= */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-7">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-[2px] bg-[#e11d2e] inline-block" />
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.05em] text-[#e11d2e]">
                  Packaging Inventory & Order Management
                </span>
              </div>
              <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0f1e40]">
                Real-Time Packaging Asset Visibility
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-normal max-w-2xl">
                Real-time visibility of packaging inventory, orders, availability and asset movement across the supply chain.
              </p>
            </div>

            {/* 7 Responsive Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
              {assetVisibilityCards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 border ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xs font-bold text-[#0f1e40] mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-[10.5px] text-slate-500 leading-normal mb-3">{item.desc}</p>
                  </div>
                  <div className="text-[#0f1e40] hover:text-[#dc2626] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SECTION: FROM INVENTORY TO ORDER FULFILLMENT (SYSTEM WORKFLOW)
        ========================================================================= */}
        <section className="py-10 lg:py-14 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-7">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-[2px] bg-[#e11d2e] inline-block" />
                <span className="text-[10.5px] font-extrabold uppercase tracking-[0.05em] text-[#e11d2e]">
                  System Workflow
                </span>
              </div>
              <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0f1e40]">
                From Inventory to Order Fulfillment
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-normal max-w-xl">
                A seamless digital process to manage your packaging assets efficiently.
              </p>
            </div>

            {/* 4 Software Step Cards Connected by Red Chevrons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col group">
                  <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all bg-white">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3 text-left px-1">
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#0f1e40]">{step.title}</h3>
                    <p className="text-[10.5px] text-slate-500 font-normal mt-0.5 leading-snug">{step.desc}</p>
                  </div>

                  {/* Red Chevron Indicator to Next Step (on lg screens) */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3.5 top-[28%] transform -translate-y-1/2 z-10 text-[#dc2626]">
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SECTION: SMARTER PACKAGING OPERATIONS BANNER
        ========================================================================= */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#fff7f7] via-[#fffbfb] to-[#f8fbff] border border-rose-100 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-[#e11d2e]">
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0f1e40]">
                    Smarter Packaging Operations
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-2xl font-normal leading-relaxed">
                    Improve visibility, reduce idle inventory, optimize utilization and ensure on-time availability of packaging assets across your supply chain.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#dc2626] text-white font-bold text-xs tracking-wide hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20 flex-shrink-0"
              >
                Talk to Our Experts
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SECTION: 4 VALUE PILLARS
        ========================================================================= */}
        <section className="py-6 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0f1e40] leading-tight">Better Asset Utilization</div>
                  <div className="text-[10px] text-slate-500 font-medium">Maximize ROI</div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0f1e40] leading-tight">Reduced Loss & Damage</div>
                  <div className="text-[10px] text-slate-500 font-medium">Improved Control</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0f1e40] leading-tight">Faster Order Fulfillment</div>
                  <div className="text-[10px] text-slate-500 font-medium">Operational Efficiency</div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0f1e40] leading-tight">Sustainable Supply Chain</div>
                  <div className="text-[10px] text-slate-500 font-medium">Lower Environmental Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. BOTTOM CTA BANNER (WHITE THEME WITH RED BUTTONS)
        ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e40] tracking-tight">
              Ready to modernize your packaging warehouse & assets?
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Deploy VEVRA's turnkey warehouse and digital packaging asset management platform for complete supply chain transparency.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#dc2626] text-white font-bold text-xs sm:text-sm hover:bg-[#b91c1c] transition-all shadow-md shadow-red-500/20"
              >
                SCHEDULE A PLATFORM DEMO
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-[#dc2626] text-[#dc2626] font-bold text-xs sm:text-sm hover:bg-rose-50 transition-all shadow-sm"
              >
                CONTACT SPECIALISTS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

export default WarehousePackagingServicePage;
