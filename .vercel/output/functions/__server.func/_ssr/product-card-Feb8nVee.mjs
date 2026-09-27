import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as formatNairaFrom, l as productOrderMessage, r as Button, u as waLink } from "./router-CBE33e2o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Feb8nVee.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col overflow-hidden rounded-2xl bg-surface shadow-border transition-[box-shadow] duration-150 ease-out hover:shadow-border-hover",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[4/3] overflow-hidden bg-surface-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.imageAlt,
				className: "size-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl font-medium",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: product.blurb
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-fg",
					children: formatNairaFrom(product.fromNaira)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "whatsapp",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink(productOrderMessage(product.name)),
						target: "_blank",
						rel: "noreferrer",
						children: "Order"
					})
				})]
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
