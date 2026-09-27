import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERESTS = [
  "Birthday cake",
  "Wedding / engagement cake",
  "Snacks for an event",
  "A bag",
  "Cake and a bag",
  "Something else",
] as const;

const FLAVOURS = ["Chocolate", "Vanilla", "Red velvet", "Custom / mix"] as const;

const FULFILMENT = ["Pickup", "Delivery"] as const;

function needsCakeDetails(interest: string) {
  return interest !== "A bag";
}

export function MessageForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState<(typeof INTERESTS)[number]>(INTERESTS[0]);
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("");
  const [flavour, setFlavour] = useState<(typeof FLAVOURS)[number]>(FLAVOURS[0]);
  const [fulfilment, setFulfilment] = useState<(typeof FULFILMENT)[number]>("Pickup");
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");

  const cakeDetails = needsCakeDetails(interest);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Hello ${SITE.name}, my name is ${name.trim() || "a new client"}.`,
      `I want to order: ${interest}.`,
    ];
    if (cakeDetails) {
      if (eventDate) lines.push(`Event date: ${eventDate}.`);
      if (guests.trim()) lines.push(`People to serve: ${guests.trim()}.`);
      lines.push(`Flavour: ${flavour}.`);
    }
    lines.push(`${fulfilment}${area.trim() ? `. Area: ${area.trim()}` : ""}.`);
    lines.push(
      note.trim()
        ? `Message: ${note.trim()}`
        : "Please reply with availability and a quote.",
    );
    window.open(waLink(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 w-full rounded-xl bg-bg px-3 text-fg shadow-border outline-none focus:ring-2 focus:ring-primary";

  return (
    <form
      id="message"
      onSubmit={onSubmit}
      className={cn("rounded-3xl bg-surface p-6 shadow-border sm:p-8", className)}
    >
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
        Start a message
      </p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">Tell {SITE.name} what you need</h2>
      <p className="mt-2 text-sm text-muted">
        Add the date and your area so the quote is useful. When you tap send, WhatsApp
        opens with the message filled. {SITE.owner} replies personally.
      </p>

      <label className="mt-6 block text-sm font-medium">
        Your name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn(field, "h-11")}
          autoComplete="name"
          placeholder="e.g. Chioma"
        />
      </label>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium">I want to order</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {INTERESTS.map((item) => (
            <label
              key={item}
              className={cn(
                "flex min-h-11 cursor-pointer items-center rounded-xl px-3 text-sm shadow-border",
                interest === item ? "bg-primary text-primary-fg" : "bg-bg",
              )}
            >
              <input
                type="radio"
                name="interest"
                value={item}
                checked={interest === item}
                onChange={() => setInterest(item)}
                className="sr-only"
              />
              {item}
            </label>
          ))}
        </div>
      </fieldset>

      {cakeDetails ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Event date
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className={cn(field, "h-11")}
            />
          </label>
          <label className="block text-sm font-medium">
            How many people
            <input
              inputMode="numeric"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={cn(field, "h-11")}
              placeholder="e.g. 20"
            />
          </label>
          <label className="block text-sm font-medium sm:col-span-2">
            Flavour
            <select
              value={flavour}
              onChange={(e) => setFlavour(e.target.value as (typeof FLAVOURS)[number])}
              className={cn(field, "h-11")}
            >
              {FLAVOURS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      <fieldset className="mt-4">
        <legend className="text-sm font-medium">Pickup or delivery</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {FULFILMENT.map((item) => (
            <label
              key={item}
              className={cn(
                "flex min-h-11 cursor-pointer items-center justify-center rounded-xl px-3 text-sm shadow-border",
                fulfilment === item ? "bg-primary text-primary-fg" : "bg-bg",
              )}
            >
              <input
                type="radio"
                name="fulfilment"
                value={item}
                checked={fulfilment === item}
                onChange={() => setFulfilment(item)}
                className="sr-only"
              />
              {item}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 block text-sm font-medium">
        Your area
        <input
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className={cn(field, "h-11")}
          autoComplete="address-level2"
          placeholder="City, estate, or landmark"
        />
      </label>

      <label className="mt-4 block text-sm font-medium">
        Extra details
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="Colours, bag style, filling, inscriptions."
          className={cn(field, "py-2")}
        />
      </label>

      <Button type="submit" variant="whatsapp" size="lg" className="mt-6 w-full">
        Send on WhatsApp
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        Opens a chat with {SITE.phoneDisplay}. You can still edit the text before sending.
      </p>
    </form>
  );
}
