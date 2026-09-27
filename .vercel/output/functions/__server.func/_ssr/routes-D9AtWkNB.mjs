import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Instagram, i as MessageCircle, l as CakeSlice, o as MapPin, r as ShoppingBag, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as DEFAULT_ORDER_MESSAGE, c as formatNairaFrom, f as featuredProducts, o as SITE, r as Button, s as STARTING_PRICES, u as waLink } from "./router-CBE33e2o.mjs";
import { t as MessageForm } from "./message-form-Bpv8eBpr.mjs";
import { t as ProductCard } from "./product-card-Feb8nVee.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9AtWkNB.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		n: "01",
		title: "See the work",
		body: "Open cakes or bags. Pick a style close to what you want."
	},
	{
		n: "02",
		title: "Write the date and area",
		body: "Use the form. Add the event date, how many people, and pickup or delivery."
	},
	{
		n: "03",
		title: "Get a quote",
		body: "Starting prices are a floor. DUPZY replies with the real figure, then you confirm."
	}
];
var FAQS = [
	{
		q: "Are these fixed prices?",
		a: "No. The numbers on this site are starting quotes. Size, design, ingredients, and bag style change the price. Message first."
	},
	{
		q: "How far ahead should I order a cake?",
		a: "As soon as you know the date. Put the date on the form so the diary can be checked. Busy weekends fill up."
	},
	{
		q: "Do you deliver?",
		a: SITE.delivery
	},
	{
		q: "Are the bags handmade or imported?",
		a: "Both. Say which you prefer. Stock of imported styles changes, so WhatsApp is the fastest way to check."
	}
];
function Home() {
	const featured = featuredProducts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl flex-col items-center px-4 pb-14 pt-6 text-center sm:px-6 sm:pb-20 sm:pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.jpg",
						alt: SITE.name,
						className: "mark w-full max-w-3xl object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl font-semibold text-fg sm:text-6xl",
						children: SITE.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl font-display text-2xl italic text-fg/80 sm:text-3xl",
						children: SITE.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base text-fg/80 sm:text-lg",
						children: SITE.together
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-center gap-2 text-sm text-fg/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent" }),
							SITE.locationLine,
							". ",
							SITE.delivery
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "whatsapp",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#message",
								children: "Start a message"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/gallery",
								search: { shelf: "all" },
								children: ["Browse gallery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
						children: "Choose a shelf"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Cakes and bags, separate paths"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Same WhatsApp chat. Different work. Open the shelf you came for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/gallery",
							search: { shelf: "cakes" },
							className: "group rounded-3xl bg-bg p-6 text-fg shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeSlice, { className: "size-6 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-3xl",
									children: "Cakes and snacks"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [
										"Birthdays, weddings, chin chin, cupcake boxes. ",
										formatNairaFrom(2e4),
										" for a simple 6-inch cake."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm font-medium",
									children: ["Open cake gallery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 inline size-4 align-text-bottom transition-transform duration-150 group-hover:translate-x-0.5" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/gallery",
							search: { shelf: "bags" },
							className: "group rounded-3xl bg-bg p-6 text-fg shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-6 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-3xl",
									children: "Bags"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [
										"Handmade minis, totes, and imported work bags. ",
										formatNairaFrom(15e3),
										". Ask what is in stock this week."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm font-medium",
									children: ["Open bag gallery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 inline size-4 align-text-bottom transition-transform duration-150 group-hover:translate-x-0.5" })]
								})
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
					children: "Starting quotes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "A floor, not a menu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: "These numbers help you decide whether to message. The WhatsApp quote is what you pay."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: STARTING_PRICES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery",
						search: { shelf: item.id },
						className: "rounded-2xl bg-surface p-6 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-3xl",
								children: formatNairaFrom(item.fromNaira)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: item.note
							})
						]
					}, item.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
						children: "How to order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "From this page to WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-accent",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: step.body
							})
						] }, step.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
					children: "Different pieces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "Cakes, snacks, and bags"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/gallery",
					search: { shelf: "all" },
					className: "text-sm font-medium text-fg underline-offset-4 hover:underline",
					children: "Full gallery"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-fg text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
						children: "Write first"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl text-bg",
						children: "Start the conversation here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-bg/75",
						children: "Date, people, flavour, and your area go in the form. WhatsApp opens with the words ready so the quote can be useful the first time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "whatsapp",
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(DEFAULT_ORDER_MESSAGE),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Or open a blank chat"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "lg",
							className: "bg-bg text-fg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.instagramUrl,
								target: "_blank",
								rel: "noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }),
									"@",
									SITE.instagramHandle
								]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageForm, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
					children: "Questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "Before you message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-border rounded-2xl bg-surface shadow-border",
					children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between gap-4 font-medium",
							children: [
								item.q,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted group-open:hidden",
									children: "+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-muted group-open:inline",
									children: "−"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm text-muted",
							children: item.a
						})]
					}, item.q))
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
