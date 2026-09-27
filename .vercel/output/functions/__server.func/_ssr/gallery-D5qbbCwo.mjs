import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as CATEGORIES, i as cn, n as Route, p as productsByCategory } from "./router-CBE33e2o.mjs";
import { t as ProductCard } from "./product-card-Feb8nVee.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-D5qbbCwo.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const { shelf } = Route.useSearch();
	const navigate = Route.useNavigate();
	const items = productsByCategory(shelf);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
				children: "Portfolio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Cakes, snacks, and bags in separate shelves. Filter, then tap Order. Starting prices are a floor — the WhatsApp quote is the real price."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Filter gallery",
				children: CATEGORIES.map((cat) => {
					const active = shelf === cat.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": active,
						onClick: () => navigate({ search: { shelf: cat.id } }),
						className: cn("h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150", active ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-border hover:bg-surface-muted"),
						children: cat.label
					}, cat.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
