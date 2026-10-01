import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import vevraLogo from "@/assets/vevra-logo.png";
import { COMPANY, PRODUCTS, SERVICES } from "@/lib/site-content";
import { SITE_IMAGES } from "@/lib/site-images";
import { QuickQuotePopup } from "@/components/site/QuickQuotePopup";

type NavChild = { to: string; params?: Record<string, string>; label: string; desc?: string };
type NavItem = { to: string; label: string; children?: NavChild[]; columns?: 1 | 2 };

const NAV: NavItem[] = [
  {
    to: "/about",
    label: "Company",
    columns: 2,
    children: [
      { to: "/about", label: "About VEVRA", desc: "Who we are and how we work" },
      { to: "/leadership", label: "Leadership", desc: "Visionary leaders and mentors" },
      { to: "/corporate-office", label: "Corporate Office", desc: "Head office and reach" },
      { to: "/warehouses", label: "Warehouses", desc: "Storage and distribution network" },
      { to: "/clients", label: "Clients & Industries", desc: "Sectors we serve" },
      { to: "/testimonials", label: "Customer Success", desc: "Challenge, solution, impact" },
      { to: "/life-at-vevra", label: "Life at VEVRA", desc: "Celebrations, culture & moments" },
      { to: "/careers", label: "Careers", desc: "Join our growing team & innovate" },
    ],
  },
  {
    to: "/products",
    label: "Products",
    columns: 2,
    children: [
      { to: "/products", label: "All Products", desc: "Full packaging portfolio" },
      ...PRODUCTS.map((p) => ({ to: "/products/$slug", params: { slug: p.slug }, label: p.name, desc: p.short })),
    ],
  },
  { to: "/e-kart", label: "E-Kart" },
  {
    to: "/services",
    label: "Services",
    columns: 2,
    children: [
      { to: "/services", label: "All Services", desc: "End-to-end managed packaging" },
      ...SERVICES.map((s) => ({ to: "/services/$slug", params: { slug: s.slug }, label: s.name, desc: s.short })),
    ],
  },
  { to: "/business-model", label: "Business Model" },
  { to: "/contact", label: "Contact" },
];

export const scrollToTop = (smooth = true) => {
  if (typeof window === "undefined") return;

  const performScroll = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? "smooth" : "auto",
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? "smooth" : "auto",
      });
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? "smooth" : "auto",
      });
    } catch {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  performScroll();
  requestAnimationFrame(performScroll);
  setTimeout(performScroll, 10);
  setTimeout(performScroll, 50);
  setTimeout(performScroll, 150);
};

export function RfqButton({
  variant = "primary",
  className = "",
  label = "Generate Quick RFQ",
  children,
}: {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  label?: string;
  children?: ReactNode;
}) {
  const base =
    "arrow-move inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold tracking-wide transition-all";
  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-md shadow-brand/20 hover:bg-brand-dark hover:shadow-lg"
      : variant === "ghost"
        ? "border border-white/40 text-white hover:bg-white hover:text-brand-blue-dark"
        : "border-2 border-brand-blue-dark/20 text-brand-blue-dark hover:border-brand hover:text-brand";
  return (
    <Link to="/calculator" onClick={scrollToTop} className={`${base} ${styles} ${className}`}>
      {children ? children : (
        <>
          {label}
          <span className="arrow">→</span>
        </>
      )}
    </Link>
  );
}

export function Section({
  eyebrow,
  title,
  lead,
  children,
  tint = false,
  dark = false,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  tint?: boolean;
  dark?: boolean;
}) {
  const bg = dark ? "bg-brand-blue-dark text-white" : tint ? "bg-brand-blue-soft" : "bg-background";
  return (
    <section className={`${bg} py-20`}>
      <div className="mx-auto max-w-[1280px] px-6">
        {eyebrow ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2
            className={`mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-[2.6rem] sm:leading-[1.1] ${
              dark ? "text-white" : "text-brand-blue-dark"
            }`}
          >
            {title}
          </h2>
        ) : null}
        {lead ? (
          <p className={`mt-4 max-w-3xl text-base ${dark ? "text-white/75" : "text-muted-foreground"}`}>{lead}</p>
        ) : null}
        <div className={eyebrow || title || lead ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: ReactNode; body: string }) {
  const image =
    eyebrow === "Products" || eyebrow === "Product capability" || eyebrow === "Clients"
      ? SITE_IMAGES.products
      : eyebrow === "Warehouses" || eyebrow === "Corporate office" || eyebrow === "Contact"
        ? SITE_IMAGES.warehouse
        : eyebrow === "Business model" || eyebrow === "Testimonials"
          ? SITE_IMAGES.returnables
          : SITE_IMAGES.engineering;

  return (
    <header className="overflow-hidden bg-brand-blue-dark text-white">
      <div className="mx-auto grid min-h-[440px] max-w-[1280px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pr-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-soft/90">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-white/75">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <RfqButton />
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="arrow-move inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue-dark"
            >
              Talk to us <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="relative min-h-64 overflow-hidden lg:min-h-full">
          <img
            src={image}
            alt={`${eyebrow} at VEVRA Packaging`}
            className="absolute inset-0 h-full w-full object-cover"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--brand-blue-dark),transparent_45%)]" />
          <div className="absolute inset-y-0 right-0 w-2 bg-brand" />
        </div>
      </div>
    </header>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isNavItemActive = (item: NavItem) => {
    if (item.to === "/" && currentPath === "/") return true;
    if (item.to !== "/" && currentPath === item.to) return true;
    if (item.to !== "/" && currentPath.startsWith(item.to + "/")) return true;
    if (
      item.children?.some((child) => {
        if (child.to === currentPath) return true;
        if (child.to !== "/" && currentPath.startsWith(child.to)) return true;
        if (child.params?.slug && currentPath.includes(child.params.slug)) return true;
        return false;
      })
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.08)]"
          : "border-b border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
      }`}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <div className="w-full flex items-center justify-between gap-6 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-2 sm:py-2.5">
        <Link to="/" onClick={scrollToTop} className="flex items-center shrink-0">
          <img
            src={vevraLogo}
            alt="Vevra Packaging Pvt. Ltd. logo"
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-11 sm:h-13 lg:h-14" : "h-14 sm:h-16 lg:h-20"}`}
            width={240}
            height={70}
          />
        </Link>

        <nav className="hidden items-center gap-1.5 lg:flex">
          {NAV.map((item) => {
            const hasChildren = !!item.children?.length;
            const isOpen = openGroup === item.label;
            const active = isNavItemActive(item);
            return (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenGroup(hasChildren ? item.label : null)}>
                <Link
                  to={item.to}
                  onClick={() => {
                    setOpenGroup(null);
                    scrollToTop();
                  }}
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13.5px] transition-colors ${
                    active
                      ? "text-[#D9232A] font-bold"
                      : "font-semibold text-brand-blue-dark/90 hover:text-[#D9232A]"
                  }`}
                >
                  {item.label}
                  {hasChildren ? (
                    <span className={`text-[9px] transition-transform ${isOpen ? "rotate-180" : ""} ${active ? "text-[#D9232A] opacity-100" : "opacity-70"}`}>▼</span>
                  ) : null}
                </Link>
                {hasChildren && isOpen ? (
                  <div
                    className={`absolute top-full z-50 pt-2 ${
                      item.label === "Company"
                        ? "left-0 w-[480px]"
                        : item.columns === 2
                          ? "left-1/2 -translate-x-1/2 w-[540px]"
                          : "left-1/2 -translate-x-1/2 w-[280px]"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/98 p-2 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.18)] backdrop-blur-md">
                      <div className={`grid gap-x-2 gap-y-0.5 ${item.columns === 2 ? "grid-cols-2" : ""}`}>
                        {item.children!.map((child) => {
                          const isChildActive = currentPath === child.to || (child.params?.slug ? currentPath.includes(child.params.slug) : false);
                          return (
                            <Link
                              key={child.label}
                              to={child.to}
                              params={child.params as never}
                              onClick={() => {
                                setOpenGroup(null);
                                scrollToTop();
                              }}
                              className={`group rounded-xl px-3 py-2 transition-colors ${
                                isChildActive ? "bg-rose-50 text-[#D9232A]" : "hover:bg-slate-50"
                              }`}
                            >
                              <span className={`block text-[13px] font-semibold transition-colors ${
                                isChildActive ? "text-[#D9232A]" : "text-brand-blue-dark group-hover:text-[#D9232A]"
                              }`}>
                                {child.label}
                              </span>
                              {child.desc ? (
                                <span className={`mt-0.5 block text-[11px] leading-snug ${
                                  isChildActive ? "text-[#D9232A]/80" : "text-muted-foreground"
                                }`}>
                                  {child.desc}
                                </span>
                              ) : null}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <RfqButton className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-brand-blue/25 px-3 py-2 text-brand-blue-dark lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-3">
            {NAV.map((item) => {
              const hasChildren = !!item.children?.length;
              const expanded = mobileGroup === item.label;
              const active = isNavItemActive(item);
              return (
                <div key={item.label} className="border-b border-border/70 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => {
                        setOpen(false);
                        scrollToTop();
                      }}
                      className={`flex-1 py-3 text-sm transition-colors ${
                        active ? "font-bold text-[#D9232A]" : "font-semibold text-brand-blue-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() => setMobileGroup(expanded ? null : item.label)}
                        className={`px-3 py-2 text-xs ${active ? "text-[#D9232A] font-bold" : "text-brand"}`}
                      >
                        {expanded ? "−" : "+"}
                      </button>
                    ) : null}
                  </div>
                  {hasChildren && expanded ? (
                    <div className="pb-3 pl-3">
                      {item.children!.map((child) => {
                        const isChildActive = currentPath === child.to || (child.params?.slug ? currentPath.includes(child.params.slug) : false);
                        return (
                          <Link
                            key={child.label}
                            to={child.to}
                            params={child.params as never}
                            onClick={() => {
                              setOpen(false);
                              scrollToTop();
                            }}
                            className={`block py-2 text-[13px] ${
                              isChildActive ? "font-bold text-[#D9232A]" : "text-brand-blue-dark/80 hover:text-[#D9232A]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0B1930] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <Link to="/" onClick={scrollToTop} className="inline-block transition-transform duration-300 hover:scale-105">
            <img src={vevraLogo} alt="Vevra Packaging logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm font-semibold text-white">End-to-End Packaging &amp; Supply-Chain Solutions</p>
          <p className="mt-1 text-sm text-white/60">{COMPANY.tagline}</p>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-soft/80">Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link to="/e-kart" onClick={scrollToTop} className="font-medium text-brand hover:text-white">
                VEVRA E-Kart &rarr;
              </Link>
            </li>
            {PRODUCTS.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} onClick={scrollToTop} className="hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
            {SERVICES.slice(0, 3).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} onClick={scrollToTop} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-soft/80">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-white">About</Link></li>
            <li><Link to="/leadership" onClick={scrollToTop} className="hover:text-white">Leadership</Link></li>
            <li><Link to="/business-model" onClick={scrollToTop} className="hover:text-white">Business Models</Link></li>
            <li><Link to="/clients" onClick={scrollToTop} className="hover:text-white">Clients</Link></li>
            <li><Link to="/warehouses" onClick={scrollToTop} className="hover:text-white">Warehouses</Link></li>
            <li><Link to="/testimonials" onClick={scrollToTop} className="hover:text-white">Customer Success</Link></li>
            <li><Link to="/life-at-vevra" onClick={scrollToTop} className="text-brand hover:text-white font-medium">Life at VEVRA &rarr;</Link></li>
            <li><Link to="/careers" onClick={scrollToTop} className="hover:text-white">Careers</Link></li>
            <li><Link to="/corporate-office" onClick={scrollToTop} className="hover:text-white">Corporate Office</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-soft/80">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>{COMPANY.phone}</li>
            <li>{COMPANY.email}</li>
            <li>{COMPANY.timings}</li>
            <li className="pt-2 text-white/60">{COMPANY.address}</li>
          </ul>
          <RfqButton className="mt-5" />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © 2026 {COMPANY.name} All Rights Reserved.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Ensure scroll is at top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentPath]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <QuickQuotePopup />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <RfqButton className="w-full" />
      </div>
      <div className="h-16 sm:hidden" />
    </div>
  );
}
