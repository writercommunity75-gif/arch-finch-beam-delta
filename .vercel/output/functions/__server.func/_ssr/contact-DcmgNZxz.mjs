import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Instagram, i as MessageCircle, o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { a as DEFAULT_ORDER_MESSAGE, o as SITE, u as waLink } from "./router-CBE33e2o.mjs";
import { t as MessageForm } from "./message-form-Bpv8eBpr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DcmgNZxz.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
				children: "Get in touch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Start a message"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "Put the event date, how many people, and your area on the form. WhatsApp opens with the words ready so the first reply can be a quote, not more questions."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 flex items-start gap-2 text-sm text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					SITE.locationLine,
					". ",
					SITE.delivery
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(DEFAULT_ORDER_MESSAGE),
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-14 items-center justify-between rounded-2xl bg-whatsapp px-5 py-3 text-whatsapp-fg shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm opacity-90",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: SITE.phoneDisplay
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Open chat"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.instagramUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-14 items-center gap-3 rounded-2xl bg-surface px-5 py-3 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-muted",
							children: "Instagram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium",
							children: ["@", SITE.instagramHandle]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${SITE.email}`,
						className: "flex min-h-14 items-center gap-3 rounded-2xl bg-surface px-5 py-3 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-muted",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: SITE.email
						})] })]
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageForm, {})]
	});
}
//#endregion
export { ContactPage as component };
