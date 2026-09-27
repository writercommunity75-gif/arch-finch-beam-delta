import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Instagram, o as MapPin } from "../_libs/lucide-react.mjs";
import { c as formatNairaFrom, o as SITE, r as Button } from "./router-CBE33e2o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DoypfaQn.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-3xl bg-surface-muted shadow-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/portrait.jpg",
				alt: `${SITE.owner}, founder of ${SITE.name}`,
				className: "aspect-[3/4] w-full object-cover object-[50%_18%]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
					children: "The studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: SITE.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl italic text-muted",
					children: SITE.owner
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex items-start gap-2 text-sm text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						SITE.locationLine,
						". ",
						SITE.delivery
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 text-base text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DUPZY Cakes N' Bags is my personal studio. I bake cakes and snacks, and I also sell handbags. Some I make, some I import." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: SITE.together }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"A celebration has a table and an outfit. That is why the two sit together. You can order a birthday cake and a bag for yourself in the same chat. I work from",
							` ${SITE.city}`,
							", and I take clients anywhere WhatsApp can reach."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Starting quotes sit on the home page so you are not guessing in the dark: cakes",
							` ${formatNairaFrom(2e4).toLowerCase()}`,
							", snacks",
							" ",
							formatNairaFrom(5e3).toLowerCase(),
							", bags ",
							formatNairaFrom(15e3).toLowerCase(),
							". A two-tier wedding cake is still not a dozen cupcakes — send the date and I will quote the piece."
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "whatsapp",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Start a message"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								search: { shelf: "all" },
								children: "See the gallery"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.instagramUrl,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }), "Instagram"]
							})
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Cakes I bake"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Birthday, engagement, wedding, and corporate cakes. Chocolate, vanilla, red velvet, and custom fillings. Tiers, colours, and toppers to match the event."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Snacks I pack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Chin chin, cupcakes, buns, cookie boxes, and party snack packs. Useful when you need something besides the main cake."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Bags I sell"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Minis, totes, classic black bags, and structured work bags. Ask what is in stock this week. Imported pieces move quickly."
				})] })
			]
		})
	})] });
}
//#endregion
export { AboutPage as component };
