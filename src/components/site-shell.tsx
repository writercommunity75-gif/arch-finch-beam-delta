import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { DEFAULT_ORDER_MESSAGE, SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", search: undefined },
  { to: "/gallery", label: "Gallery", search: { shelf: "all" as const } },
  { to: "/about", label: "About", search: undefined },
  { to: "/contact", label: "Contact", search: undefined },
] as const;

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label="Primary">
      {NAV.map((item) => {
        const active = pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            search={item.search}
            onClick={onNavigate}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
              active ? "bg-surface-muted text-fg" : "text-muted hover:text-fg",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <BrandMark />
          <NavLinks className="hidden md:flex" />
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="/contact">Start a message</a>
            </Button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-xl text-fg md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div id="mobile-nav" className="border-t border-border px-4 py-3 md:hidden">
            <NavLinks
              className="flex-col items-stretch"
              onNavigate={() => setOpen(false)}
            />
            <Button variant="primary" className="mt-3 w-full" asChild>
              <a href="/contact" onClick={() => setOpen(false)}>
                Start a message
              </a>
            </Button>
          </div>
        ) : null}
      </header>

      <main className="flex-1 pb-20 sm:pb-0">{children}</main>

      <footer className="border-t border-border bg-fg text-bg">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-primary">{SITE.name}</p>
            <p className="mt-2 max-w-sm text-sm text-bg/70">{SITE.tagline}</p>
            <p className="mt-3 text-sm text-bg/70">{SITE.owner}</p>
            <p className="mt-2 text-sm text-bg/70">{SITE.locationLine}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium text-primary">Visit</p>
            <Link to="/" className="text-bg/80 hover:text-bg">
              Home
            </Link>
            <Link to="/gallery" search={{ shelf: "cakes" }} className="text-bg/80 hover:text-bg">
              Cakes
            </Link>
            <Link to="/gallery" search={{ shelf: "bags" }} className="text-bg/80 hover:text-bg">
              Bags
            </Link>
            <Link to="/about" className="text-bg/80 hover:text-bg">
              About
            </Link>
            <Link to="/contact" className="text-bg/80 hover:text-bg">
              Start a message
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium text-primary">Chat</p>
            <a className="text-bg/80 hover:text-bg" href={waLink()}>
              WhatsApp {SITE.phoneDisplay}
            </a>
            <a
              className="inline-flex items-center gap-2 text-bg/80 hover:text-bg"
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="size-4" />
              @{SITE.instagramHandle}
            </a>
            <a className="text-bg/80 hover:text-bg" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <p className="pt-2 text-bg/70">{SITE.delivery}</p>
          </div>
        </div>
      </footer>

      <a
        href={waLink(DEFAULT_ORDER_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-medium text-whatsapp-fg shadow-border sm:hidden"
        aria-label="Order on WhatsApp"
      >
        Start a message
      </a>
    </div>
  );
}
