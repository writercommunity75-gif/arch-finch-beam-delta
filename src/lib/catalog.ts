export type Category = "cakes" | "snacks" | "bags";

export type Product = {
  id: string;
  name: string;
  category: Category;
  blurb: string;
  image: string;
  imageAlt: string;
  fromNaira: number;
};

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cakes", label: "Cakes" },
  { id: "snacks", label: "Snacks" },
  { id: "bags", label: "Bags" },
];

export const PRODUCTS: Product[] = [
  {
    id: "chocolate-drip",
    name: "Chocolate Drip Cake",
    category: "cakes",
    blurb: "Dark chocolate layers with ganache drip and berries. A favourite for birthdays.",
    image: "/images/cake-chocolate.jpg",
    imageAlt: "Chocolate drip cake with strawberries",
    fromNaira: 25_000,
  },
  {
    id: "rainbow-birthday",
    name: "Rainbow Birthday Cake",
    category: "cakes",
    blurb: "Bright, colourful celebration cake for kids and big kids. Custom colours and names available.",
    image: "/images/cake-birthday.jpg",
    imageAlt: "Colourful layered birthday cake with sprinkles",
    fromNaira: 22_000,
  },
  {
    id: "berry-naked",
    name: "Berry Naked Cake",
    category: "cakes",
    blurb: "Rustic cream cake stacked with fresh berries. Perfect for small parties and photos.",
    image: "/images/cake-naked.jpg",
    imageAlt: "Naked cream cake topped with mixed berries",
    fromNaira: 20_000,
  },
  {
    id: "blush-rose-cake",
    name: "Blush Rose Celebration Cake",
    category: "cakes",
    blurb: "Two-tier buttercream with a silk bow and sugar roses for engagements and milestones.",
    image: "/images/cake-blush.jpg",
    imageAlt: "Two-tier blush celebration cake with a silk bow",
    fromNaira: 45_000,
  },
  {
    id: "pearl-garden-cake",
    name: "Pearl Garden Cake",
    category: "cakes",
    blurb: "Floral wedding-style cake with pearl piping. Quote by size and filling.",
    image: "/images/cake-pearl.jpg",
    imageAlt: "White and blush floral celebration cake",
    fromNaira: 55_000,
  },
  {
    id: "floral-cupcakes",
    name: "Floral Cupcake Box",
    category: "snacks",
    blurb: "A dozen pastel cupcakes with edible flowers. Great as table treats or gifts.",
    image: "/images/cupcakes.jpg",
    imageAlt: "Tray of pastel floral cupcakes",
    fromNaira: 12_000,
  },
  {
    id: "golden-chinchin",
    name: "Golden Chin Chin",
    category: "snacks",
    blurb: "Crisp small-batch chin chin. Order by the pack for events or the house.",
    image: "/images/chinchin.jpg",
    imageAlt: "Bowl of homemade chin chin",
    fromNaira: 5_000,
  },
  {
    id: "glazed-rings",
    name: "Glazed Snack Rings",
    category: "snacks",
    blurb: "Soft glazed rings for parties and office packs. Mix flavours on request.",
    image: "/images/snacks-donuts.jpg",
    imageAlt: "Glazed snack rings on a cooling rack",
    fromNaira: 8_000,
  },
  {
    id: "cinnamon-buns",
    name: "Cinnamon Buns",
    category: "snacks",
    blurb: "Warm, sticky buns for brunch tables and gift boxes.",
    image: "/images/snacks-pastry.jpg",
    imageAlt: "Fresh cinnamon buns in a baking pan",
    fromNaira: 8_000,
  },
  {
    id: "cookie-box",
    name: "Cookie Box",
    category: "snacks",
    blurb: "Chewy chocolate-chip cookies packed for sharing. Custom boxes available.",
    image: "/images/snacks-cookies.jpg",
    imageAlt: "Chocolate chip cookies stacked on a plate",
    fromNaira: 7_000,
  },
  {
    id: "blush-quilted-mini",
    name: "Blush Quilted Mini",
    category: "bags",
    blurb: "Structured mini bag with quilted body and bow. Handmade styles available.",
    image: "/images/bag-mini.jpg",
    imageAlt: "Blush quilted mini handbag",
    fromNaira: 18_000,
  },
  {
    id: "cream-bow-bag",
    name: "Cream Bow Handbag",
    category: "bags",
    blurb: "Soft cream bag with chain strap. Dressy enough for events, easy for daily use.",
    image: "/images/bag-cream.jpg",
    imageAlt: "Cream structured handbag with gold chain",
    fromNaira: 22_000,
  },
  {
    id: "noir-classic",
    name: "Noir Classic Bag",
    category: "bags",
    blurb: "Black imported-style bag with gold hardware. A go-with-everything piece.",
    image: "/images/bag-black.jpg",
    imageAlt: "Black leather handbag with gold clasp",
    fromNaira: 25_000,
  },
  {
    id: "sun-tote",
    name: "Sun Tote",
    category: "bags",
    blurb: "Bold yellow tote for market days and weekends. Handmade and imported options.",
    image: "/images/bag-yellow.jpg",
    imageAlt: "Yellow tote bag with a woman walking in sunlight",
    fromNaira: 15_000,
  },
  {
    id: "camel-work-bag",
    name: "Camel Work Bag",
    category: "bags",
    blurb: "Tan structured bag for office and travel. Ask for current imported stock.",
    image: "/images/bag-brown.jpg",
    imageAlt: "Tan brown leather work bag",
    fromNaira: 28_000,
  },
];

export const FEATURED_IDS = [
  "chocolate-drip",
  "sun-tote",
  "rainbow-birthday",
  "noir-classic",
  "golden-chinchin",
  "berry-naked",
] as const;

export function featuredProducts() {
  return FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
    (p): p is Product => Boolean(p),
  );
}

export function productsByCategory(category: Category | "all") {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function isGalleryShelf(value: unknown): value is Category | "all" {
  return value === "all" || value === "cakes" || value === "snacks" || value === "bags";
}
