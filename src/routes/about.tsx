import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, formatNairaFrom } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div>
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-16">
        <div className="overflow-hidden rounded-3xl bg-surface-muted shadow-border">
          <img
            src="/images/portrait.jpg"
            alt={`${SITE.owner}, founder of ${SITE.name}`}
            className="aspect-[3/4] w-full object-cover object-[50%_18%]"
          />
        </div>
        <div className="lg:pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">The studio</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{SITE.name}</h1>
          <p className="mt-2 font-display text-2xl italic text-muted">{SITE.owner}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-fg">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>
              {SITE.locationLine}. {SITE.delivery}
            </span>
          </p>
          <div className="mt-6 space-y-4 text-base text-fg">
            <p>
              DUPZY Cakes N' Bags is my personal studio. I bake cakes and snacks,
              and I also sell handbags. Some I make, some I import.
            </p>
            <p>{SITE.together}</p>
            <p>
              A celebration has a table and an outfit. That is why the two sit together.
              You can order a birthday cake and a bag for yourself in the same chat. I work from
              {` ${SITE.city}`}, and I take clients anywhere WhatsApp can reach.
            </p>
            <p>
              Starting quotes sit on the home page so you are not guessing in the dark: cakes
              {` ${formatNairaFrom(20_000).toLowerCase()}`}, snacks{" "}
              {formatNairaFrom(5_000).toLowerCase()}, bags {formatNairaFrom(15_000).toLowerCase()}.
              A two-tier wedding cake is still not a dozen cupcakes. Send the date and I will
              quote the piece.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="whatsapp" size="lg" asChild>
              <Link to="/contact">Start a message</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery" search={{ shelf: "all" }}>
                See the gallery
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                <Instagram className="size-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <article>
            <h2 className="font-display text-2xl">Cakes I bake</h2>
            <p className="mt-2 text-sm text-muted">
              Birthday, engagement, wedding, and corporate cakes. Chocolate, vanilla,
              red velvet, and custom fillings. Tiers, colours, and toppers to match
              the event.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl">Snacks I pack</h2>
            <p className="mt-2 text-sm text-muted">
              Chin chin, cupcakes, buns, cookie boxes, and party snack packs. Useful
              when you need something besides the main cake.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl">Bags I sell</h2>
            <p className="mt-2 text-sm text-muted">
              Minis, totes, classic black bags, and structured work bags. Ask what is
              in stock this week. Imported pieces move quickly.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
