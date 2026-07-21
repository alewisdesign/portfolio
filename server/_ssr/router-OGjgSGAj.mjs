import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-OGjgSGAj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CDmodlBN.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.svg",
			type: "image/svg+xml"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./selected-visual-work-rq8dHjFE.mjs");
var Route$5 = createFileRoute("/selected-visual-work")({
	head: () => ({ meta: [
		{ title: "Selected Visual Work — Aaron Lewis" },
		{
			name: "description",
			content: "A gallery of UI and visual design work across mobile, web, email, and internal tools — the visual counterpart to Aaron Lewis's case studies."
		},
		{
			property: "og:title",
			content: "Selected Visual Work — Aaron Lewis"
		},
		{
			property: "og:description",
			content: "Range across mobile, web, email, and internal tools — hierarchy, layout, and craft."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-BpXKJT0-.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Aaron Lewis, Sr. UX & Product Designer" },
		{
			name: "description",
			content: "Aaron Lewis is a Sr. UX & Product Designer turning messy, complex workflows into systems that work — POS, SaaS, and internal tools used by 60,000+ employees."
		},
		{
			property: "og:title",
			content: "About — Aaron Lewis"
		},
		{
			property: "og:description",
			content: "Making the complex simple, one system at a time."
		},
		{
			property: "og:type",
			content: "profile"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./routes-C6NpBwa1.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Aaron Lewis — Sr. UX & Product Designer" },
		{
			name: "description",
			content: "Aaron Lewis — Sr. UX & Product Designer. UX, UI, and complex enterprise system workflows across POS, SaaS, and internal tools used by 60,000+ people."
		},
		{
			property: "og:title",
			content: "Aaron Lewis — Sr. UX & Product Designer"
		},
		{
			property: "og:description",
			content: "End-to-end product experiences across POS, SaaS, and internal tools."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./case-studies.ship-to-home-DK3dWYwM.mjs");
var Route$2 = createFileRoute("/case-studies/ship-to-home")({
	head: () => ({ meta: [
		{ title: "Ship to Home — Aaron Lewis Case Study" },
		{
			name: "description",
			content: "Case study: Designing a new Ship to Home experience for O'Reilly Auto Parts inside an existing enterprise point of sale system."
		},
		{
			property: "og:title",
			content: "Ship to Home — Aaron Lewis Case Study"
		},
		{
			property: "og:description",
			content: "Integrating a new purchasing model into a mature enterprise POS while keeping the workflow intuitive for store employees."
		},
		{
			property: "og:type",
			content: "article"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./case-studies.future-point-of-sale-C8hMmPsT.mjs");
var Route$1 = createFileRoute("/case-studies/future-point-of-sale")({
	head: () => ({ meta: [
		{ title: "Future Point of Sale — Aaron Lewis Case Study" },
		{
			name: "description",
			content: "Case study: A strategic discovery initiative exploring how a modern point of sale could better support employees through systems thinking, information architecture, and a phased modernization roadmap."
		},
		{
			property: "og:title",
			content: "Future Point of Sale — Aaron Lewis Case Study"
		},
		{
			property: "og:description",
			content: "Designing the system, not just the UI — a phased modernization vision for an enterprise point of sale."
		},
		{
			property: "og:type",
			content: "article"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./case-studies.cash-management-Dvbctb3p.mjs");
var Route = createFileRoute("/case-studies/cash-management")({
	head: () => ({ meta: [
		{ title: "Cash Management — Aaron Lewis Case Study" },
		{
			name: "description",
			content: "Case study: Simplifying the store cash-handling workflow through research, heuristic analysis, and stakeholder collaboration."
		},
		{
			property: "og:title",
			content: "Cash Management — Aaron Lewis Case Study"
		},
		{
			property: "og:description",
			content: "Aligning enterprise POS software with how store employees actually work — 60,000+ users, 3 stakeholder teams aligned."
		},
		{
			property: "og:type",
			content: "article"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SelectedVisualWorkRoute = Route$5.update({
	id: "/selected-visual-work",
	path: "/selected-visual-work",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var CaseStudiesShipToHomeRoute = Route$2.update({
	id: "/case-studies/ship-to-home",
	path: "/case-studies/ship-to-home",
	getParentRoute: () => Route$6
});
var CaseStudiesFuturePointOfSaleRoute = Route$1.update({
	id: "/case-studies/future-point-of-sale",
	path: "/case-studies/future-point-of-sale",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	SelectedVisualWorkRoute,
	CaseStudiesCashManagementRoute: Route.update({
		id: "/case-studies/cash-management",
		path: "/case-studies/cash-management",
		getParentRoute: () => Route$6
	}),
	CaseStudiesFuturePointOfSaleRoute,
	CaseStudiesShipToHomeRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
