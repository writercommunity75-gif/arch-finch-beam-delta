import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as Instagram, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-wnDcQ-Zn.js
var CATEGORIES = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "cakes",
		label: "Cakes"
	},
	{
		id: "snacks",
		label: "Snacks"
	},
	{
		id: "bags",
		label: "Bags"
	}
];
var PRODUCTS = [
	{
		id: "chocolate-drip",
		name: "Chocolate Drip Cake",
		category: "cakes",
		blurb: "Dark chocolate layers with ganache drip and berries. A favourite for birthdays.",
		image: "/images/cake-chocolate.jpg",
		imageAlt: "Chocolate drip cake with strawberries",
		fromNaira: 25e3
	},
	{
		id: "rainbow-birthday",
		name: "Rainbow Birthday Cake",
		category: "cakes",
		blurb: "Bright, colourful celebration cake for kids and big kids. Custom colours and names available.",
		image: "/images/cake-birthday.jpg",
		imageAlt: "Colourful layered birthday cake with sprinkles",
		fromNaira: 22e3
	},
	{
		id: "berry-naked",
		name: "Berry Naked Cake",
		category: "cakes",
		blurb: "Rustic cream cake stacked with fresh berries. Perfect for small parties and photos.",
		image: "/images/cake-naked.jpg",
		imageAlt: "Naked cream cake topped with mixed berries",
		fromNaira: 2e4
	},
	{
		id: "blush-rose-cake",
		name: "Blush Rose Celebration Cake",
		category: "cakes",
		blurb: "Two-tier buttercream with a silk bow and sugar roses for engagements and milestones.",
		image: "/images/cake-blush.jpg",
		imageAlt: "Two-tier blush celebration cake with a silk bow",
		fromNaira: 45e3
	},
	{
		id: "pearl-garden-cake",
		name: "Pearl Garden Cake",
		category: "cakes",
		blurb: "Floral wedding-style cake with pearl piping. Quote by size and filling.",
		image: "/images/cake-pearl.jpg",
		imageAlt: "White and blush floral celebration cake",
		fromNaira: 55e3
	},
	{
		id: "floral-cupcakes",
		name: "Floral Cupcake Box",
		category: "snacks",
		blurb: "A dozen pastel cupcakes with edible flowers. Great as table treats or gifts.",
		image: "/images/cupcakes.jpg",
		imageAlt: "Tray of pastel floral cupcakes",
		fromNaira: 12e3
	},
	{
		id: "golden-chinchin",
		name: "Golden Chin Chin",
		category: "snacks",
		blurb: "Crisp small-batch chin chin. Order by the pack for events or the house.",
		image: "/images/chinchin.jpg",
		imageAlt: "Bowl of homemade chin chin",
		fromNaira: 5e3
	},
	{
		id: "glazed-rings",
		name: "Glazed Snack Rings",
		category: "snacks",
		blurb: "Soft glazed rings for parties and office packs. Mix flavours on request.",
		image: "/images/snacks-donuts.jpg",
		imageAlt: "Glazed snack rings on a cooling rack",
		fromNaira: 8e3
	},
	{
		id: "cinnamon-buns",
		name: "Cinnamon Buns",
		category: "snacks",
		blurb: "Warm, sticky buns for brunch tables and gift boxes.",
		image: "/images/snacks-pastry.jpg",
		imageAlt: "Fresh cinnamon buns in a baking pan",
		fromNaira: 8e3
	},
	{
		id: "cookie-box",
		name: "Cookie Box",
		category: "snacks",
		blurb: "Chewy chocolate-chip cookies packed for sharing. Custom boxes available.",
		image: "/images/snacks-cookies.jpg",
		imageAlt: "Chocolate chip cookies stacked on a plate",
		fromNaira: 7e3
	},
	{
		id: "blush-quilted-mini",
		name: "Blush Quilted Mini",
		category: "bags",
		blurb: "Structured mini bag with quilted body and bow. Handmade styles available.",
		image: "/images/bag-mini.jpg",
		imageAlt: "Blush quilted mini handbag",
		fromNaira: 18e3
	},
	{
		id: "cream-bow-bag",
		name: "Cream Bow Handbag",
		category: "bags",
		blurb: "Soft cream bag with chain strap. Dressy enough for events, easy for daily use.",
		image: "/images/bag-cream.jpg",
		imageAlt: "Cream structured handbag with gold chain",
		fromNaira: 22e3
	},
	{
		id: "noir-classic",
		name: "Noir Classic Bag",
		category: "bags",
		blurb: "Black imported-style bag with gold hardware. A go-with-everything piece.",
		image: "/images/bag-black.jpg",
		imageAlt: "Black leather handbag with gold clasp",
		fromNaira: 25e3
	},
	{
		id: "sun-tote",
		name: "Sun Tote",
		category: "bags",
		blurb: "Bold yellow tote for market days and weekends. Handmade and imported options.",
		image: "/images/bag-yellow.jpg",
		imageAlt: "Yellow tote bag with a woman walking in sunlight",
		fromNaira: 15e3
	},
	{
		id: "camel-work-bag",
		name: "Camel Work Bag",
		category: "bags",
		blurb: "Tan structured bag for office and travel. Ask for current imported stock.",
		image: "/images/bag-brown.jpg",
		imageAlt: "Tan brown leather work bag",
		fromNaira: 28e3
	}
];
var FEATURED_IDS = [
	"chocolate-drip",
	"sun-tote",
	"rainbow-birthday",
	"noir-classic",
	"golden-chinchin",
	"berry-naked"
];
function featuredProducts() {
	return FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter((p) => Boolean(p));
}
function productsByCategory(category) {
	if (category === "all") return PRODUCTS;
	return PRODUCTS.filter((p) => p.category === category);
}
function isGalleryShelf(value) {
	return value === "all" || value === "cakes" || value === "snacks" || value === "bags";
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CBE33e2o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SITE = {
	name: "DUPZY Cakes N' Bags",
	shortName: "DUPZY",
	tagline: "The cake for the day. The bag for every day.",
	together: "Celebrations need a cake. Everyday life needs a bag you actually carry. DUPZY Cakes N' Bags keeps both in one studio so you can order the party and the piece in the same WhatsApp chat.",
	owner: "Oladosu Modupeoluwa Christiana",
	email: "oladosumodupeoluwa@gmail.com",
	phoneDisplay: "+234 904 252 3122",
	whatsappE164: "2349042523122",
	city: "Nigeria",
	locationLine: "Based in Nigeria",
	delivery: "Pickup by arrangement. Delivery is quoted after you send your area in WhatsApp — city, estate, or landmark is enough.",
	instagramHandle: "dupzycakesnbags",
	instagramUrl: "https://www.instagram.com/dupzycakesnbags/"
};
var STARTING_PRICES = [
	{
		id: "cakes",
		label: "Cakes",
		fromNaira: 2e4,
		note: "From a 6-inch celebration cake. Tiers, fillings, and finish change the quote."
	},
	{
		id: "snacks",
		label: "Snacks",
		fromNaira: 5e3,
		note: "From a pack of chin chin. Cupcake boxes and party packs quoted by count."
	},
	{
		id: "bags",
		label: "Bags",
		fromNaira: 15e3,
		note: "From handmade minis and totes. Imported styles depend on what is in stock."
	}
];
function formatNairaFrom(naira) {
	return `From ₦${naira.toLocaleString("en-NG")}`;
}
function waLink(message) {
	const base = `https://wa.me/${SITE.whatsappE164}`;
	if (!message) return base;
	return `${base}?text=${encodeURIComponent(message)}`;
}
var DEFAULT_ORDER_MESSAGE = "Hello DUPZY Cakes N' Bags, I would like to place an order.";
function productOrderMessage(name) {
	return `Hello DUPZY Cakes N' Bags, I am interested in the ${name}. Please share availability and price.`;
}
function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex min-w-0 items-center gap-2.5 text-fg no-underline sm:gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/logo.jpg",
			alt: "",
			className: "mark h-11 w-auto max-w-[96px] shrink-0 object-contain sm:h-12 sm:max-w-[120px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-semibold tracking-[0.06em] sm:text-xl",
				children: SITE.shortName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted sm:tracking-[0.2em]",
				children: "Cakes N' Bags"
			})]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-border hover:bg-primary-hover",
			outline: "bg-surface text-fg shadow-border hover:bg-surface-muted",
			ghost: "bg-transparent text-fg hover:bg-surface-muted",
			whatsapp: "bg-whatsapp text-whatsapp-fg shadow-border hover:bg-whatsapp-hover"
		},
		size: {
			sm: "h-10 rounded-lg px-3.5 text-sm",
			md: "h-11 rounded-xl px-5 text-sm",
			lg: "h-12 rounded-xl px-5 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var NAV = [
	{
		to: "/",
		label: "Home",
		search: void 0
	},
	{
		to: "/gallery",
		label: "Gallery",
		search: { shelf: "all" }
	},
	{
		to: "/about",
		label: "About",
		search: void 0
	},
	{
		to: "/contact",
		label: "Contact",
		search: void 0
	}
];
function NavLinks({ onNavigate, className }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: cn("flex items-center gap-1", className),
		"aria-label": "Primary",
		children: NAV.map((item) => {
			const active = pathname === item.to;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				search: item.search,
				onClick: onNavigate,
				className: cn("rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150", active ? "bg-surface-muted text-fg" : "text-muted hover:text-fg"),
				children: item.label
			}, item.to);
		})
	});
}
function SiteShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { className: "hidden md:flex" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "primary",
								size: "sm",
								className: "hidden sm:inline-flex",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/contact",
									children: "Start a message"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-xl text-fg md:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "mobile-nav",
					className: "border-t border-border px-4 py-3 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {
						className: "flex-col items-stretch",
						onNavigate: () => setOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "primary",
						className: "mt-3 w-full",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							onClick: () => setOpen(false),
							children: "Start a message"
						})
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pb-20 sm:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-fg text-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-primary",
								children: SITE.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-sm text-bg/70",
								children: SITE.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-bg/70",
								children: SITE.owner
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-bg/70",
								children: SITE.locationLine
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-primary",
									children: "Visit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "text-bg/80 hover:text-bg",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gallery",
									search: { shelf: "cakes" },
									className: "text-bg/80 hover:text-bg",
									children: "Cakes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gallery",
									search: { shelf: "bags" },
									className: "text-bg/80 hover:text-bg",
									children: "Bags"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "text-bg/80 hover:text-bg",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-bg/80 hover:text-bg",
									children: "Start a message"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-primary",
									children: "Chat"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "text-bg/80 hover:text-bg",
									href: waLink(),
									children: ["WhatsApp ", SITE.phoneDisplay]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "inline-flex items-center gap-2 text-bg/80 hover:text-bg",
									href: SITE.instagramUrl,
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }),
										"@",
										SITE.instagramHandle
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-bg/80 hover:text-bg",
									href: `mailto:${SITE.email}`,
									children: SITE.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-2 text-bg/70",
									children: SITE.delivery
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: waLink(DEFAULT_ORDER_MESSAGE),
				target: "_blank",
				rel: "noreferrer",
				className: "fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-medium text-whatsapp-fg shadow-border sm:hidden",
				"aria-label": "Order on WhatsApp",
				children: "Start a message"
			})
		]
	});
}
var styles_default = "/assets/styles-zfJVVhnO.css";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE.name },
			{
				name: "description",
				content: "DUPZY Cakes N' Bags in Nigeria: cakes from ₦20,000, snacks, and bags. Pickup or delivery quoted on WhatsApp."
			},
			{
				name: "theme-color",
				content: "#F4C8C4"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Figtree:wght@400;500;600&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$3 = () => import("./routes-D9AtWkNB.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./about-DoypfaQn.mjs");
var Route$2 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./contact-DcmgNZxz.mjs");
var Route$1 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./gallery-D5qbbCwo.mjs");
var Route = createFileRoute("/gallery")({
	validateSearch: (search) => ({ shelf: isGalleryShelf(search.shelf) ? search.shelf : "all" }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute: Route$2.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	GalleryRoute: Route.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { DEFAULT_ORDER_MESSAGE as a, formatNairaFrom as c, CATEGORIES as d, featuredProducts as f, cn as i, productOrderMessage as l, Route as n, SITE as o, productsByCategory as p, Button as r, STARTING_PRICES as s, router_exports as t, waLink as u };
