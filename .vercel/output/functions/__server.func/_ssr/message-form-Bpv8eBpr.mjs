import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, o as SITE, r as Button, u as waLink } from "./router-CBE33e2o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/message-form-Bpv8eBpr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INTERESTS = [
	"Birthday cake",
	"Wedding / engagement cake",
	"Snacks for an event",
	"A bag",
	"Cake and a bag",
	"Something else"
];
var FLAVOURS = [
	"Chocolate",
	"Vanilla",
	"Red velvet",
	"Custom / mix"
];
var FULFILMENT = ["Pickup", "Delivery"];
function needsCakeDetails(interest) {
	return interest !== "A bag";
}
function MessageForm({ className }) {
	const [name, setName] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)(INTERESTS[0]);
	const [eventDate, setEventDate] = (0, import_react.useState)("");
	const [guests, setGuests] = (0, import_react.useState)("");
	const [flavour, setFlavour] = (0, import_react.useState)(FLAVOURS[0]);
	const [fulfilment, setFulfilment] = (0, import_react.useState)("Pickup");
	const [area, setArea] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const cakeDetails = needsCakeDetails(interest);
	function onSubmit(e) {
		e.preventDefault();
		const lines = [`Hello ${SITE.name}, my name is ${name.trim() || "a new client"}.`, `I want to order: ${interest}.`];
		if (cakeDetails) {
			if (eventDate) lines.push(`Event date: ${eventDate}.`);
			if (guests.trim()) lines.push(`People to serve: ${guests.trim()}.`);
			lines.push(`Flavour: ${flavour}.`);
		}
		lines.push(`${fulfilment}${area.trim() ? ` — area: ${area.trim()}` : ""}.`);
		lines.push(note.trim() ? `Message: ${note.trim()}` : "Please reply with availability and a quote.");
		window.open(waLink(lines.join(" ")), "_blank", "noopener,noreferrer");
	}
	const field = "mt-2 w-full rounded-xl bg-bg px-3 text-fg shadow-border outline-none focus:ring-2 focus:ring-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "message",
		onSubmit,
		className: cn("rounded-3xl bg-surface p-6 shadow-border sm:p-8", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
				children: "Start a message"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 font-display text-3xl sm:text-4xl",
				children: [
					"Tell ",
					SITE.name,
					" what you need"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"Add the date and your area so the quote is useful. Send opens WhatsApp with the message filled. ",
					SITE.owner,
					" replies personally."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-6 block text-sm font-medium",
				children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: name,
					onChange: (e) => setName(e.target.value),
					className: cn(field, "h-11"),
					autoComplete: "name",
					placeholder: "e.g. Chioma"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium",
					children: "I want to order"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: INTERESTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: cn("flex min-h-11 cursor-pointer items-center rounded-xl px-3 text-sm shadow-border", interest === item ? "bg-primary text-primary-fg" : "bg-bg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "interest",
							value: item,
							checked: interest === item,
							onChange: () => setInterest(item),
							className: "sr-only"
						}), item]
					}, item))
				})]
			}),
			cakeDetails ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["Event date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: eventDate,
							onChange: (e) => setEventDate(e.target.value),
							className: cn(field, "h-11")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["How many people", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							inputMode: "numeric",
							value: guests,
							onChange: (e) => setGuests(e.target.value),
							className: cn(field, "h-11"),
							placeholder: "e.g. 20"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium sm:col-span-2",
						children: ["Flavour", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: flavour,
							onChange: (e) => setFlavour(e.target.value),
							className: cn(field, "h-11"),
							children: FLAVOURS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: item
							}, item))
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium",
					children: "Pickup or delivery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: FULFILMENT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: cn("flex min-h-11 cursor-pointer items-center justify-center rounded-xl px-3 text-sm shadow-border", fulfilment === item ? "bg-primary text-primary-fg" : "bg-bg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "fulfilment",
							value: item,
							checked: fulfilment === item,
							onChange: () => setFulfilment(item),
							className: "sr-only"
						}), item]
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm font-medium",
				children: ["Your area", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: area,
					onChange: (e) => setArea(e.target.value),
					className: cn(field, "h-11"),
					autoComplete: "address-level2",
					placeholder: "City, estate, or landmark"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm font-medium",
				children: ["Extra details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: note,
					onChange: (e) => setNote(e.target.value),
					rows: 4,
					placeholder: "Colours, bag style, filling, inscriptions…",
					className: cn(field, "py-2")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "whatsapp",
				size: "lg",
				className: "mt-6 w-full",
				children: "Send on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-center text-xs text-muted",
				children: [
					"Opens a chat with ",
					SITE.phoneDisplay,
					". You can still edit the text before sending."
				]
			})
		]
	});
}
//#endregion
export { MessageForm as t };
