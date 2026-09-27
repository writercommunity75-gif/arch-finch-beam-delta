import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { MessageForm } from "@/components/message-form";
import { DEFAULT_ORDER_MESSAGE, SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Get in touch
        </p>
        <h1 className="mt-2 font-display text-5xl">Start a message</h1>
        <p className="mt-4 max-w-md text-muted">
          Put the event date, how many people, and your area on the form. WhatsApp
          opens with the words ready so the first reply can be a quote, not more questions.
        </p>

        <p className="mt-6 flex items-start gap-2 text-sm text-fg">
          <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>
            {SITE.locationLine}. {SITE.delivery}
          </span>
        </p>

        <div className="mt-8 space-y-4">
          <a
            href={waLink(DEFAULT_ORDER_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-14 items-center justify-between rounded-2xl bg-whatsapp px-5 py-3 text-whatsapp-fg shadow-border"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="size-5" />
              <span>
                <span className="block text-sm opacity-90">WhatsApp</span>
                <span className="font-medium">{SITE.phoneDisplay}</span>
              </span>
            </span>
            <span className="text-sm font-medium">Open chat</span>
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-14 items-center gap-3 rounded-2xl bg-surface px-5 py-3 shadow-border"
          >
            <Instagram className="size-5 text-muted" />
            <span>
              <span className="block text-sm text-muted">Instagram</span>
              <span className="font-medium">@{SITE.instagramHandle}</span>
            </span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex min-h-14 items-center gap-3 rounded-2xl bg-surface px-5 py-3 shadow-border"
          >
            <Mail className="size-5 text-muted" />
            <span>
              <span className="block text-sm text-muted">Email</span>
              <span className="font-medium">{SITE.email}</span>
            </span>
          </a>
        </div>
      </div>

      <MessageForm />
    </div>
  );
}
