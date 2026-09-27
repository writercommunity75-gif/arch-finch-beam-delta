import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CakeSlice,
  Instagram,
  MapPin,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { MessageForm } from "@/components/message-form";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/catalog";
import { DEFAULT_ORDER_MESSAGE, SITE, STARTING_PRICES, formatNairaFrom, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const STEPS = [
  {
    n: "01",
    title: "See the work",
    body: "Open cakes or bags. Pick a style close to what you want.",
  },
  {
    n: "02",
    title: "Write the date and area",
    body: "Use the form. Add the event date, how many people, and pickup or delivery.",
  },
  {
    n: "03",
    title: "Get a quote",
    body: "Starting prices are a floor. DUPZY replies with the real figure, then you confirm.",
  },
];

const FAQS = [
  {
    q: "Are these fixed prices?",
    a: "No. The numbers on this site are starting quotes. Size, design, ingredients, and bag style change the price. Message first.",
  },
  {
    q: "How far ahead should I order a cake?",
    a: "As soon as you know the date. Put the date on the form so the diary can be checked. Busy weekends fill up.",
  },
  {
    q: "Do you deliver?",
    a: SITE.delivery,
  },
  {
    q: "Are the bags handmade or imported?",
    a: "Both. Say which you prefer. Stock of imported styles changes, so WhatsApp is the fastest way to check.",
  },
];

function Home() {
  const featured = featuredProducts();

  return (
    <div>
      <section className="bg-bg">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-14 pt-6 text-center sm:px-6 sm:pb-20 sm:pt-8">
          <img
            src="/images/logo.jpg"
            alt={SITE.name}
            className="mark w-full max-w-3xl object-contain"
          />
          <h1 className="mt-1 font-display text-4xl font-semibold text-fg sm:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-3 max-w-3xl font-display text-2xl italic text-fg/80 sm:text-3xl">
            {SITE.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base text-fg/80 sm:text-lg">{SITE.together}</p>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-fg/80">
            <MapPin className="size-4 shrink-0 text-accent" />
            {SITE.locationLine} · Pickup or delivery, quoted by area
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="whatsapp" size="lg" asChild>
              <a href="#message">Start a message</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery" search={{ shelf: "all" }}>
                Browse gallery
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Choose a shelf</p>
          <h2 className="mt-2 font-display text-4xl">Cakes and bags, separate paths</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Same WhatsApp chat. Different work. Open the shelf you came for.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              to="/gallery"
              search={{ shelf: "cakes" }}
              className="group rounded-3xl bg-bg p-6 text-fg shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <CakeSlice className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-3xl">Cakes and snacks</h3>
              <p className="mt-2 text-sm text-muted">
                Birthdays, weddings, chin chin, cupcake boxes. {formatNairaFrom(20_000)} for a
                simple 6-inch cake.
              </p>
              <p className="mt-4 text-sm font-medium">
                Open cake gallery
                <ArrowRight className="ml-1 inline size-4 align-text-bottom transition-transform duration-150 group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link
              to="/gallery"
              search={{ shelf: "bags" }}
              className="group rounded-3xl bg-bg p-6 text-fg shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <ShoppingBag className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-3xl">Bags</h3>
              <p className="mt-2 text-sm text-muted">
                Handmade minis, totes, and imported work bags. {formatNairaFrom(15_000)}. Ask
                what is in stock this week.
              </p>
              <p className="mt-4 text-sm font-medium">
                Open bag gallery
                <ArrowRight className="ml-1 inline size-4 align-text-bottom transition-transform duration-150 group-hover:translate-x-0.5" />
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Starting quotes</p>
        <h2 className="mt-2 font-display text-4xl">A floor, not a menu</h2>
        <p className="mt-3 max-w-2xl text-muted">
          These numbers help you decide whether to message. The WhatsApp quote is what you pay.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STARTING_PRICES.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              search={{ shelf: item.id }}
              className="rounded-2xl bg-surface p-6 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {item.label}
              </p>
              <p className="mt-3 font-display text-3xl">{formatNairaFrom(item.fromNaira)}</p>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">How to order</p>
          <h2 className="mt-2 font-display text-4xl">From this page to WhatsApp</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.n}>
                <p className="font-display text-3xl text-accent">{step.n}</p>
                <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Different pieces
            </p>
            <h2 className="mt-2 font-display text-4xl">Cakes, snacks, and bags</h2>
          </div>
          <Link
            to="/gallery"
            search={{ shelf: "all" }}
            className="text-sm font-medium text-fg underline-offset-4 hover:underline"
          >
            Full gallery
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Write first
            </p>
            <h2 className="mt-2 font-display text-4xl text-bg">Start the conversation here</h2>
            <p className="mt-4 max-w-md text-bg/75">
              Date, people, flavour, and your area go in the form. WhatsApp opens with the
              words ready so the quote can be useful the first time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={waLink(DEFAULT_ORDER_MESSAGE)} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Or open a blank chat
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-bg text-fg" asChild>
                <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram className="size-4" />
                  @{SITE.instagramHandle}
                </a>
              </Button>
            </div>
          </div>
          <MessageForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Questions</p>
        <h2 className="mt-2 font-display text-4xl">Before you message</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl bg-surface shadow-border">
          {FAQS.map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
                <span className="text-muted group-open:hidden">+</span>
                <span className="hidden text-muted group-open:inline">−</span>
              </summary>
              <p className="mt-2 max-w-2xl text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
