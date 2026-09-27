export const SITE = {
  name: "DUPZY Cakes N' Bags",
  shortName: "DUPZY",
  tagline: "The cake for the day. The bag for every day.",
  together:
    "Celebrations need a cake. Everyday life needs a bag you actually carry. DUPZY Cakes N' Bags keeps both in one studio so you can order the party and the piece in the same WhatsApp chat.",
  owner: "Oladosu Modupeoluwa Christiana",
  email: "oladosumodupeoluwa@gmail.com",
  phoneDisplay: "+234 904 252 3122",
  whatsappE164: "2349042523122",
  city: "Nigeria",
  locationLine: "Based in Nigeria",
  delivery:
    "Pickup by arrangement. Delivery is quoted after you send your area in WhatsApp. City, estate, or landmark is enough.",
  instagramHandle: "dupzycakesnbags",
  instagramUrl: "https://www.instagram.com/dupzycakesnbags/",
} as const;

export const STARTING_PRICES = [
  {
    id: "cakes" as const,
    label: "Cakes",
    fromNaira: 20_000,
    note: "From a 6-inch celebration cake. Tiers, fillings, and finish change the quote.",
  },
  {
    id: "snacks" as const,
    label: "Snacks",
    fromNaira: 5_000,
    note: "From a pack of chin chin. Cupcake boxes and party packs quoted by count.",
  },
  {
    id: "bags" as const,
    label: "Bags",
    fromNaira: 15_000,
    note: "From handmade minis and totes. Imported styles depend on what is in stock.",
  },
] as const;

export function formatNairaFrom(naira: number) {
  return `From ₦${naira.toLocaleString("en-NG")}`;
}

export function waLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_ORDER_MESSAGE =
  "Hello DUPZY Cakes N' Bags, I would like to place an order.";

export function productOrderMessage(name: string) {
  return `Hello DUPZY Cakes N' Bags, I am interested in the ${name}. Please share availability and price.`;
}
