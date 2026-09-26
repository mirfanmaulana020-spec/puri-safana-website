module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/overview/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverviewPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "Overview Perumahan | Puri Safana Cikeas"
};
function OverviewPage() {
    const grouped = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nearbyPlaces"].reduce((acc, p)=>{
        acc[p.category] = acc[p.category] ? [
            ...acc[p.category],
            p
        ] : [
            p
        ];
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#1c2317] text-white py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#a3d139] text-sm uppercase tracking-wide mb-3",
                            children: "Overview Perumahan"
                        }, void 0, false, {
                            fileName: "[project]/src/app/overview/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-5xl font-bold",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].name
                        }, void 0, false, {
                            fileName: "[project]/src/app/overview/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/70 mt-4 max-w-2xl",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].about
                        }, void 0, false, {
                            fileName: "[project]/src/app/overview/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/overview/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/overview/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                        label: "Lokasi",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].location
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                        label: "Luas Area",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].totalArea
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                        label: "Total Unit",
                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].totalUnits} Kavling`
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                        label: "Rumah",
                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].totalHouses} Unit`
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                        label: "Ruko",
                        value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].totalRuko} Unit`
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                        label: "Pengalaman",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].experience
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/overview/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Fasilitas Kawasan"
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSummary"].facilities.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-black/10 p-5 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: f.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/overview/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-black/60 mt-1",
                                        children: f.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/overview/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, f.name, true, {
                                fileName: "[project]/src/app/overview/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/overview/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/overview/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#eef1e6] py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-2",
                            children: "Lokasi Strategis"
                        }, void 0, false, {
                            fileName: "[project]/src/app/overview/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-black/60 mb-8",
                            children: "Dekat dengan akses transportasi, sekolah, pusat perbelanjaan, dan rumah sakit."
                        }, void 0, false, {
                            fileName: "[project]/src/app/overview/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 gap-8",
                            children: Object.entries(grouped).map(([category, places])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-[#557a1f] mb-3",
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/overview/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: places.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between text-sm bg-white rounded-lg px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: p.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/overview/page.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-black/50",
                                                            children: p.distance
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/overview/page.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, p.name, true, {
                                                    fileName: "[project]/src/app/overview/page.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/overview/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, category, true, {
                                    fileName: "[project]/src/app/overview/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/overview/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/overview/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/overview/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/overview/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function Info({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-black/10 p-5 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs uppercase tracking-wide text-black/50",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/overview/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg font-semibold mt-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/overview/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/overview/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/overview/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/overview/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blocks",
    ()=>blocks,
    "developer",
    ()=>developer,
    "facilities",
    ()=>facilities,
    "houseTypes",
    ()=>houseTypes,
    "nearbyPlaces",
    ()=>nearbyPlaces,
    "projectSummary",
    ()=>projectSummary,
    "rukoList",
    ()=>rukoList,
    "statusColor",
    ()=>statusColor,
    "statusLabel",
    ()=>statusLabel,
    "units",
    ()=>units
]);
const houseTypes = [
    {
        slug: "aruna",
        name: "Aruna",
        tagline: "Tipe unggulan Puri Safana Cikeas",
        buildingArea: 73,
        landAreaMin: 60,
        bedrooms: 3,
        bathrooms: 2,
        priceFrom: 588000000,
        totalUnits: 89,
        description: "Aruna adalah tipe paling diminati di Puri Safana Cikeas, dengan tata ruang premium dan carport luas.",
        facilities: [
            "3 Kamar Tidur",
            "2 Kamar Mandi",
            "Carport",
            "Taman Belakang"
        ]
    },
    {
        slug: "asvara",
        name: "Asvara",
        tagline: "Hunian kompak untuk keluarga muda",
        buildingArea: 48,
        landAreaMin: 60,
        bedrooms: 2,
        bathrooms: 1,
        priceFrom: 408000000,
        totalUnits: 65,
        description: "Tipe Asvara dirancang untuk keluarga muda yang mengutamakan efisiensi ruang tanpa mengorbankan kenyamanan.",
        facilities: [
            "2 Kamar Tidur",
            "1 Kamar Mandi",
            "Carport",
            "Taman Depan"
        ]
    },
    {
        slug: "adara",
        name: "Adara",
        tagline: "Desain modern untuk keluarga berkembang",
        buildingArea: 52,
        landAreaMin: 60,
        bedrooms: 2,
        bathrooms: 2,
        priceFrom: 489000000,
        totalUnits: 38,
        description: "Adara hadir dengan desain modern dan tata ruang fleksibel, cocok untuk keluarga yang terus berkembang.",
        facilities: [
            "2-3 Kamar Tidur",
            "2 Kamar Mandi",
            "Carport",
            "Taman"
        ]
    },
    {
        slug: "ansara",
        name: "Ansara",
        tagline: "Hunian efisien harga terjangkau",
        buildingArea: 36,
        landAreaMin: 60,
        bedrooms: 2,
        bathrooms: 1,
        priceFrom: 369000000,
        totalUnits: 35,
        description: "Ansara adalah pilihan hunian paling terjangkau di Puri Safana Cikeas tanpa mengorbankan kualitas bangunan.",
        facilities: [
            "2 Kamar Tidur",
            "1 Kamar Mandi",
            "Carport"
        ]
    }
];
const blocks = [
    {
        code: "AA1",
        x: 8.19,
        z: 18.07,
        rows: 2,
        cols: 3,
        unitType: "aruna"
    },
    {
        code: "AA14",
        x: 7.31,
        z: 4.31,
        rows: 5,
        cols: 5,
        unitType: "aruna"
    },
    {
        code: "AA15",
        x: -0.75,
        z: 7.51,
        rows: 3,
        cols: 3,
        unitType: "aruna"
    },
    {
        code: "AA16",
        x: -1.98,
        z: 4.16,
        rows: 2,
        cols: 2,
        unitType: "aruna"
    },
    {
        code: "AA17",
        x: 6.17,
        z: 0.89,
        rows: 5,
        cols: 5,
        unitType: "aruna"
    },
    {
        code: "AA18",
        x: 2.04,
        z: -1.47,
        rows: 2,
        cols: 3,
        unitType: "asvara"
    },
    {
        code: "AA19",
        x: 6.82,
        z: -5.6,
        rows: 3,
        cols: 3,
        unitType: "asvara"
    },
    {
        code: "AA2",
        x: 8.59,
        z: 19.7,
        rows: 1,
        cols: 2,
        unitType: "asvara"
    },
    {
        code: "AA20",
        x: 0.67,
        z: -4.76,
        rows: 2,
        cols: 3,
        unitType: "asvara"
    },
    {
        code: "AA21",
        x: -3.52,
        z: -6.44,
        rows: 3,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA22",
        x: -7.56,
        z: -5.4,
        rows: 2,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA23",
        x: -0.68,
        z: -8.05,
        rows: 3,
        cols: 3,
        unitType: "asvara"
    },
    {
        code: "AA24",
        x: -2.57,
        z: -11.19,
        rows: 3,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA25",
        x: -8.97,
        z: -8.67,
        rows: 3,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA26",
        x: -10.06,
        z: -12.08,
        rows: 2,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA27",
        x: -3.72,
        z: -14.39,
        rows: 2,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA28",
        x: -8.15,
        z: -20.99,
        rows: 4,
        cols: 4,
        unitType: "asvara"
    },
    {
        code: "AA29",
        x: -11.09,
        z: -20.19,
        rows: 5,
        cols: 5,
        unitType: "ansara"
    },
    {
        code: "AA3",
        x: 7.83,
        z: 16.48,
        rows: 2,
        cols: 2,
        unitType: "aruna"
    },
    {
        code: "AA30",
        x: -13.32,
        z: -16.83,
        rows: 3,
        cols: 3,
        unitType: "ansara"
    },
    {
        code: "AA31",
        x: -17.12,
        z: -22.39,
        rows: 2,
        cols: 2,
        unitType: "ansara"
    },
    {
        code: "AA32",
        x: -17.31,
        z: -26.17,
        rows: 3,
        cols: 3,
        unitType: "asvara"
    },
    {
        code: "AA5",
        x: 0.28,
        z: 18.13,
        rows: 3,
        cols: 4,
        unitType: "aruna"
    },
    {
        code: "AA6",
        x: -3.62,
        z: 15.4,
        rows: 2,
        cols: 3,
        unitType: "aruna"
    },
    {
        code: "AA7",
        x: 1.62,
        z: 9.78,
        rows: 1,
        cols: 2,
        unitType: "aruna"
    },
    {
        code: "AA8",
        x: 6.2,
        z: 9.97,
        rows: 3,
        cols: 3,
        unitType: "adara"
    },
    {
        code: "AA9",
        x: 9.35,
        z: 7.22,
        rows: 3,
        cols: 3,
        unitType: "aruna"
    }
];
const units = [
    {
        code: "AA1-2",
        block: "AA1",
        typeSlug: "aruna",
        status: "tersedia",
        price: 787999980,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA1-5",
        block: "AA1",
        typeSlug: "aruna",
        status: "tersedia",
        price: 787999980,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA1-7",
        block: "AA1",
        typeSlug: "aruna",
        status: "tersedia",
        price: 787999980,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA1-9",
        block: "AA1",
        typeSlug: "aruna",
        status: "tersedia",
        price: 787999980,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA1-11",
        block: "AA1",
        typeSlug: "aruna",
        status: "tersedia",
        price: 787999980,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA1-12",
        block: "AA1",
        typeSlug: "aruna",
        status: "tersedia",
        price: 664666659,
        landArea: 83,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA14-1",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA14-2",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 609000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA14-3",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 609000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA14-5",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 3,
        gridZ: 0
    },
    {
        code: "AA14-6",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 4,
        gridZ: 0
    },
    {
        code: "AA14-7",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA14-8",
        block: "AA14",
        typeSlug: "aruna",
        status: "booking",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA14-9",
        block: "AA14",
        typeSlug: "aruna",
        status: "booking",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA14-10",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 588000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 3,
        gridZ: 1
    },
    {
        code: "AA14-11",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 734000000,
        landArea: 104,
        buildingArea: 73,
        gridX: 4,
        gridZ: 1
    },
    {
        code: "AA14-12",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA14-14",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA14-15",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 609000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 2
    },
    {
        code: "AA14-16",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 3,
        gridZ: 2
    },
    {
        code: "AA14-17",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 4,
        gridZ: 2
    },
    {
        code: "AA14-19",
        block: "AA14",
        typeSlug: "asvara",
        status: "tersedia",
        price: 715000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 3
    },
    {
        code: "AA14-21",
        block: "AA14",
        typeSlug: "asvara",
        status: "terjual",
        price: 628999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 3
    },
    {
        code: "AA14-23",
        block: "AA14",
        typeSlug: "asvara",
        status: "tersedia",
        price: 672000000,
        landArea: 122,
        buildingArea: 48,
        gridX: 2,
        gridZ: 3
    },
    {
        code: "AA14-25",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 865000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 3,
        gridZ: 3
    },
    {
        code: "AA14-27",
        block: "AA14",
        typeSlug: "aruna",
        status: "booking",
        price: 864999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 4,
        gridZ: 3
    },
    {
        code: "AA14-29",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 828999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 4
    },
    {
        code: "AA14-31",
        block: "AA14",
        typeSlug: "aruna",
        status: "terjual",
        price: 828999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 4
    },
    {
        code: "AA14-33",
        block: "AA14",
        typeSlug: "aruna",
        status: "tersedia",
        price: 915000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 4
    },
    {
        code: "AA15-1",
        block: "AA15",
        typeSlug: "aruna",
        status: "tersedia",
        price: 669000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA15-2",
        block: "AA15",
        typeSlug: "aruna",
        status: "booking",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA15-3",
        block: "AA15",
        typeSlug: "aruna",
        status: "terjual",
        price: 609000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA15-5",
        block: "AA15",
        typeSlug: "aruna",
        status: "terjual",
        price: 748999999,
        landArea: 102,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA15-7",
        block: "AA15",
        typeSlug: "aruna",
        status: "terjual",
        price: 843000000,
        landArea: 125,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA15-9",
        block: "AA15",
        typeSlug: "aruna",
        status: "booking",
        price: 864999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA15-10",
        block: "AA15",
        typeSlug: "aruna",
        status: "tersedia",
        price: 669000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA16-1",
        block: "AA16",
        typeSlug: "aruna",
        status: "terjual",
        price: 858999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA16-3",
        block: "AA16",
        typeSlug: "aruna",
        status: "booking",
        price: 954000000,
        landArea: 132,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA16-7",
        block: "AA16",
        typeSlug: "aruna",
        status: "terjual",
        price: 936000000,
        landArea: 143,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA16-9",
        block: "AA16",
        typeSlug: "aruna",
        status: "terjual",
        price: 878999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA17-1",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 914999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA17-3",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 865000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA17-6",
        block: "AA17",
        typeSlug: "aruna",
        status: "terjual",
        price: 828999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA17-8",
        block: "AA17",
        typeSlug: "aruna",
        status: "terjual",
        price: 828999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 3,
        gridZ: 0
    },
    {
        code: "AA17-10",
        block: "AA17",
        typeSlug: "aruna",
        status: "terjual",
        price: 828999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 4,
        gridZ: 0
    },
    {
        code: "AA17-12",
        block: "AA17",
        typeSlug: "aruna",
        status: "terjual",
        price: 752000000,
        landArea: 103,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA17-14",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA17-15",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA17-16",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 3,
        gridZ: 1
    },
    {
        code: "AA17-17",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 4,
        gridZ: 1
    },
    {
        code: "AA17-18",
        block: "AA17",
        typeSlug: "aruna",
        status: "terjual",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA17-19",
        block: "AA17",
        typeSlug: "aruna",
        status: "booking",
        price: 669000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA17-20",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 2
    },
    {
        code: "AA17-21",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 3,
        gridZ: 2
    },
    {
        code: "AA17-22",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 4,
        gridZ: 2
    },
    {
        code: "AA17-23",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 3
    },
    {
        code: "AA17-24",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 872000000,
        landArea: 122,
        buildingArea: 73,
        gridX: 1,
        gridZ: 3
    },
    {
        code: "AA17-27",
        block: "AA17",
        typeSlug: "aruna",
        status: "booking",
        price: 864999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 3
    },
    {
        code: "AA17-29",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 864999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 3,
        gridZ: 3
    },
    {
        code: "AA17-31",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 864999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 4,
        gridZ: 3
    },
    {
        code: "AA17-33",
        block: "AA17",
        typeSlug: "aruna",
        status: "terjual",
        price: 828999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 4
    },
    {
        code: "AA17-35",
        block: "AA17",
        typeSlug: "aruna",
        status: "tersedia",
        price: 914999999,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 4
    },
    {
        code: "AA18-1",
        block: "AA18",
        typeSlug: "asvara",
        status: "terjual",
        price: 607999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA18-3",
        block: "AA18",
        typeSlug: "asvara",
        status: "terjual",
        price: 627999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA18-6",
        block: "AA18",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA18-9",
        block: "AA18",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA18-11",
        block: "AA18",
        typeSlug: "asvara",
        status: "terjual",
        price: 628999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA18-12",
        block: "AA18",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA19-1",
        block: "AA19",
        typeSlug: "asvara",
        status: "booking",
        price: 489000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA19-3",
        block: "AA19",
        typeSlug: "asvara",
        status: "terjual",
        price: 628999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA19-6",
        block: "AA19",
        typeSlug: "asvara",
        status: "terjual",
        price: 628999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA19-7",
        block: "AA19",
        typeSlug: "asvara",
        status: "tersedia",
        price: 668999999,
        landArea: 123,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA19-8",
        block: "AA19",
        typeSlug: "asvara",
        status: "terjual",
        price: 676000000,
        landArea: 134,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA19-10",
        block: "AA19",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA19-11",
        block: "AA19",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA19-13",
        block: "AA19",
        typeSlug: "asvara",
        status: "terjual",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA2-1",
        block: "AA2",
        typeSlug: "asvara",
        status: "tersedia",
        price: 791333313,
        landArea: 121,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA2-3",
        block: "AA2",
        typeSlug: "asvara",
        status: "tersedia",
        price: 621333330,
        landArea: 70,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA20-1",
        block: "AA20",
        typeSlug: "asvara",
        status: "terjual",
        price: 650000000,
        landArea: 134,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA20-3",
        block: "AA20",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA20-6",
        block: "AA20",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA20-8",
        block: "AA20",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA20-11",
        block: "AA20",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA20-14",
        block: "AA20",
        typeSlug: "asvara",
        status: "terjual",
        price: 631500000,
        landArea: 135,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA21-1",
        block: "AA21",
        typeSlug: "adara",
        status: "booking",
        price: 522000000,
        landArea: 61,
        buildingArea: 52,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA21-2",
        block: "AA21",
        typeSlug: "adara",
        status: "booking",
        price: 506000000,
        landArea: 65,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA21-3",
        block: "AA21",
        typeSlug: "adara",
        status: "terjual",
        price: 492000000,
        landArea: 70,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA21-5",
        block: "AA21",
        typeSlug: "adara",
        status: "terjual",
        price: 508999999,
        landArea: 75,
        buildingArea: 52,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA21-6",
        block: "AA21",
        typeSlug: "asvara",
        status: "terjual",
        price: 496000000,
        landArea: 80,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA21-7",
        block: "AA21",
        typeSlug: "adara",
        status: "terjual",
        price: 542000000,
        landArea: 85,
        buildingArea: 52,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA21-8",
        block: "AA21",
        typeSlug: "asvara",
        status: "terjual",
        price: 548999999,
        landArea: 96,
        buildingArea: 48,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA22-1",
        block: "AA22",
        typeSlug: "adara",
        status: "tersedia",
        price: 745000000,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA22-3",
        block: "AA22",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA22-6",
        block: "AA22",
        typeSlug: "adara",
        status: "tersedia",
        price: 744999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA22-8",
        block: "AA22",
        typeSlug: "adara",
        status: "terjual",
        price: 708999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA22-10",
        block: "AA22",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA22-12",
        block: "AA22",
        typeSlug: "adara",
        status: "tersedia",
        price: 744999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA23-1",
        block: "AA23",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA23-3",
        block: "AA23",
        typeSlug: "asvara",
        status: "terjual",
        price: 628999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA23-7",
        block: "AA23",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA23-8",
        block: "AA23",
        typeSlug: "asvara",
        status: "booking",
        price: 592000000,
        landArea: 100,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA23-10",
        block: "AA23",
        typeSlug: "asvara",
        status: "booking",
        price: 704999999,
        landArea: 132,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA23-12",
        block: "AA23",
        typeSlug: "asvara",
        status: "tersedia",
        price: 665000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA23-15",
        block: "AA23",
        typeSlug: "adara",
        status: "terjual",
        price: 659000000,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA23-16",
        block: "AA23",
        typeSlug: "asvara",
        status: "terjual",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA24-1",
        block: "AA24",
        typeSlug: "adara",
        status: "terjual",
        price: 582000000,
        landArea: 82,
        buildingArea: 52,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA24-2",
        block: "AA24",
        typeSlug: "adara",
        status: "booking",
        price: 699000000,
        landArea: 121,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA24-5",
        block: "AA24",
        typeSlug: "adara",
        status: "terjual",
        price: 694999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA24-7",
        block: "AA24",
        typeSlug: "asvara",
        status: "terjual",
        price: 497999999,
        landArea: 81,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA24-8",
        block: "AA24",
        typeSlug: "adara",
        status: "terjual",
        price: 638999999,
        landArea: 114,
        buildingArea: 52,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA24-9",
        block: "AA24",
        typeSlug: "adara",
        status: "booking",
        price: 695000000,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA24-11",
        block: "AA24",
        typeSlug: "adara",
        status: "terjual",
        price: 802000000,
        landArea: 148,
        buildingArea: 52,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA25-1",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 489000000,
        landArea: 60,
        buildingArea: 52,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA25-3",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA25-6",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA25-8",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA25-9",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA25-11",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA25-14",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA25-16",
        block: "AA25",
        typeSlug: "adara",
        status: "terjual",
        price: 489000000,
        landArea: 60,
        buildingArea: 52,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA26-1",
        block: "AA26",
        typeSlug: "adara",
        status: "terjual",
        price: 598999999,
        landArea: 87,
        buildingArea: 52,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA26-3",
        block: "AA26",
        typeSlug: "adara",
        status: "booking",
        price: 658999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA26-6",
        block: "AA26",
        typeSlug: "adara",
        status: "booking",
        price: 745000000,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA26-7",
        block: "AA26",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA26-10",
        block: "AA26",
        typeSlug: "asvara",
        status: "tersedia",
        price: 665000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA26-11",
        block: "AA26",
        typeSlug: "asvara",
        status: "terjual",
        price: 495000000,
        landArea: 79,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA27-1",
        block: "AA27",
        typeSlug: "adara",
        status: "tersedia",
        price: 744999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA27-3",
        block: "AA27",
        typeSlug: "adara",
        status: "booking",
        price: 694999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA27-6",
        block: "AA27",
        typeSlug: "adara",
        status: "terjual",
        price: 702000000,
        landArea: 133,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA27-9",
        block: "AA27",
        typeSlug: "asvara",
        status: "terjual",
        price: 609000000,
        landArea: 127,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA27-11",
        block: "AA27",
        typeSlug: "asvara",
        status: "terjual",
        price: 588000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA27-14",
        block: "AA27",
        typeSlug: "asvara",
        status: "terjual",
        price: 678000000,
        landArea: 120,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA28-1",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 408000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA28-2",
        block: "AA28",
        typeSlug: "asvara",
        status: "tersedia",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA28-3",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 408000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA28-5",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 429000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 3,
        gridZ: 0
    },
    {
        code: "AA28-6",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 429000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA28-7",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 429000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA28-8",
        block: "AA28",
        typeSlug: "asvara",
        status: "booking",
        price: 459000000,
        landArea: 60,
        buildingArea: 36.25,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA28-9",
        block: "AA28",
        typeSlug: "asvara",
        status: "tersedia",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 3,
        gridZ: 1
    },
    {
        code: "AA28-10",
        block: "AA28",
        typeSlug: "asvara",
        status: "booking",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA28-11",
        block: "AA28",
        typeSlug: "asvara",
        status: "tersedia",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA28-12",
        block: "AA28",
        typeSlug: "asvara",
        status: "tersedia",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 2,
        gridZ: 2
    },
    {
        code: "AA28-14",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 408000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 3,
        gridZ: 2
    },
    {
        code: "AA28-15",
        block: "AA28",
        typeSlug: "asvara",
        status: "terjual",
        price: 408000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 0,
        gridZ: 3
    },
    {
        code: "AA29-1",
        block: "AA29",
        typeSlug: "ansara",
        status: "booking",
        price: 419000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA29-2",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA29-3",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA29-5",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 3,
        gridZ: 0
    },
    {
        code: "AA29-6",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 4,
        gridZ: 0
    },
    {
        code: "AA29-7",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA29-8",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA29-9",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA29-10",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 3,
        gridZ: 1
    },
    {
        code: "AA29-11",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 4,
        gridZ: 1
    },
    {
        code: "AA29-12",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA29-14",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA29-15",
        block: "AA29",
        typeSlug: "ansara",
        status: "booking",
        price: 419000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 2,
        gridZ: 2
    },
    {
        code: "AA29-16",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 419000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 3,
        gridZ: 2
    },
    {
        code: "AA29-17",
        block: "AA29",
        typeSlug: "ansara",
        status: "booking",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 4,
        gridZ: 2
    },
    {
        code: "AA29-18",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 0,
        gridZ: 3
    },
    {
        code: "AA29-20",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 569000000,
        landArea: 120,
        buildingArea: 36,
        gridX: 1,
        gridZ: 3
    },
    {
        code: "AA29-22",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 2,
        gridZ: 3
    },
    {
        code: "AA29-24",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 3,
        gridZ: 3
    },
    {
        code: "AA29-25",
        block: "AA29",
        typeSlug: "ansara",
        status: "tersedia",
        price: 389000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 4,
        gridZ: 3
    },
    {
        code: "AA29-26",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 0,
        gridZ: 4
    },
    {
        code: "AA29-27",
        block: "AA29",
        typeSlug: "ansara",
        status: "terjual",
        price: 369000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 1,
        gridZ: 4
    },
    {
        code: "AA29-28",
        block: "AA29",
        typeSlug: "ansara",
        status: "booking",
        price: 419000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 2,
        gridZ: 4
    },
    {
        code: "AA3-1",
        block: "AA3",
        typeSlug: "aruna",
        status: "tersedia",
        price: 807999978,
        landArea: 126,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA3-3",
        block: "AA3",
        typeSlug: "aruna",
        status: "tersedia",
        price: 667999992,
        landArea: 84,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA3-6",
        block: "AA3",
        typeSlug: "aruna",
        status: "tersedia",
        price: 824666643,
        landArea: 131,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA3-7",
        block: "AA3",
        typeSlug: "aruna",
        status: "tersedia",
        price: 591333333,
        landArea: 61,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA30-1",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 408999999,
        landArea: 63,
        buildingArea: 36,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA30-2",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 376000000,
        landArea: 62,
        buildingArea: 36,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA30-3",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 376000000,
        landArea: 62,
        buildingArea: 36,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA30-5",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 376000000,
        landArea: 62,
        buildingArea: 36,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA30-6",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 378999999,
        landArea: 63,
        buildingArea: 36,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA30-7",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 392000000,
        landArea: 67,
        buildingArea: 36,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA30-8",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 406000000,
        landArea: 71,
        buildingArea: 36,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA30-9",
        block: "AA30",
        typeSlug: "ansara",
        status: "terjual",
        price: 712000000,
        landArea: 154,
        buildingArea: 36,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA31-1",
        block: "AA31",
        typeSlug: "ansara",
        status: "terjual",
        price: 399000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA31-2",
        block: "AA31",
        typeSlug: "ansara",
        status: "terjual",
        price: 472000000,
        landArea: 91,
        buildingArea: 36,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA31-6",
        block: "AA31",
        typeSlug: "ansara",
        status: "tersedia",
        price: 532000000,
        landArea: 109,
        buildingArea: 36,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA31-7",
        block: "AA31",
        typeSlug: "ansara",
        status: "terjual",
        price: 399000000,
        landArea: 60,
        buildingArea: 36,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA32-1",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 414000000,
        landArea: 62,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA32-2",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 432000000,
        landArea: 61,
        buildingArea: 48,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA32-3",
        block: "AA32",
        typeSlug: "asvara",
        status: "booking",
        price: 459000000,
        landArea: 60,
        buildingArea: 48,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA32-5",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 421000000,
        landArea: 64,
        buildingArea: 48,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA32-6",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 431000000,
        landArea: 67,
        buildingArea: 48,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA32-7",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 432000000,
        landArea: 68,
        buildingArea: 48,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA32-8",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 444000000,
        landArea: 72,
        buildingArea: 48,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA32-9",
        block: "AA32",
        typeSlug: "asvara",
        status: "terjual",
        price: 455400000,
        landArea: 76,
        buildingArea: 48,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA32-10",
        block: "AA32",
        typeSlug: "asvara",
        status: "booking",
        price: 537000000,
        landArea: 96,
        buildingArea: 48,
        gridX: 2,
        gridZ: 2
    },
    {
        code: "AA5-1",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA5-3",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA5-6",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA5-8",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 3,
        gridZ: 0
    },
    {
        code: "AA5-10",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA5-12",
        block: "AA5",
        typeSlug: "aruna",
        status: "terjual",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA5-15",
        block: "AA5",
        typeSlug: "aruna",
        status: "terjual",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA5-17",
        block: "AA5",
        typeSlug: "aruna",
        status: "terjual",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 3,
        gridZ: 1
    },
    {
        code: "AA5-19",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA5-21",
        block: "AA5",
        typeSlug: "aruna",
        status: "tersedia",
        price: 788000000,
        landArea: 120,
        buildingArea: 73,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA6-1",
        block: "AA6",
        typeSlug: "aruna",
        status: "tersedia",
        price: 673000000,
        landArea: 70,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA6-3",
        block: "AA6",
        typeSlug: "aruna",
        status: "tersedia",
        price: 896000000,
        landArea: 137,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA6-6",
        block: "AA6",
        typeSlug: "aruna",
        status: "tersedia",
        price: 949000000,
        landArea: 153,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA6-8",
        block: "AA6",
        typeSlug: "aruna",
        status: "tersedia",
        price: 973000000,
        landArea: 160,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA6-9",
        block: "AA6",
        typeSlug: "aruna",
        status: "tersedia",
        price: 709000000,
        landArea: 81,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA6-10",
        block: "AA6",
        typeSlug: "aruna",
        status: "booking",
        price: 863000000,
        landArea: 127,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA7-1",
        block: "AA7",
        typeSlug: "aruna",
        status: "tersedia",
        price: 699000000,
        landArea: 69,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA7-2",
        block: "AA7",
        typeSlug: "aruna",
        status: "tersedia",
        price: 749000000,
        landArea: 93,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA8-1",
        block: "AA8",
        typeSlug: "asvara",
        status: "tersedia",
        price: 714999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA8-3",
        block: "AA8",
        typeSlug: "adara",
        status: "tersedia",
        price: 694999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA8-6",
        block: "AA8",
        typeSlug: "adara",
        status: "tersedia",
        price: 694999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA8-8",
        block: "AA8",
        typeSlug: "adara",
        status: "tersedia",
        price: 744999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA8-10",
        block: "AA8",
        typeSlug: "adara",
        status: "tersedia",
        price: 744999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA8-12",
        block: "AA8",
        typeSlug: "adara",
        status: "tersedia",
        price: 694999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA8-15",
        block: "AA8",
        typeSlug: "adara",
        status: "booking",
        price: 694999999,
        landArea: 120,
        buildingArea: 52,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA8-18",
        block: "AA8",
        typeSlug: "asvara",
        status: "booking",
        price: 714999999,
        landArea: 120,
        buildingArea: 48,
        gridX: 1,
        gridZ: 2
    },
    {
        code: "AA9-1",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 696000000,
        landArea: 77,
        buildingArea: 73,
        gridX: 0,
        gridZ: 0
    },
    {
        code: "AA9-2",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 1,
        gridZ: 0
    },
    {
        code: "AA9-3",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 0
    },
    {
        code: "AA9-5",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 736000000,
        landArea: 80,
        buildingArea: 73,
        gridX: 0,
        gridZ: 1
    },
    {
        code: "AA9-6",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 736000000,
        landArea: 80,
        buildingArea: 73,
        gridX: 1,
        gridZ: 1
    },
    {
        code: "AA9-7",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 2,
        gridZ: 1
    },
    {
        code: "AA9-8",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 639000000,
        landArea: 60,
        buildingArea: 73,
        gridX: 0,
        gridZ: 2
    },
    {
        code: "AA9-9",
        block: "AA9",
        typeSlug: "aruna",
        status: "tersedia",
        price: 716000000,
        landArea: 83,
        buildingArea: 73,
        gridX: 1,
        gridZ: 2
    }
];
const rukoList = [
    {
        code: "RK1-1",
        block: "RK1",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK1-2",
        block: "RK1",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK1-3",
        block: "RK1",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-1",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-2",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-3",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-5",
        block: "RK2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-6",
        block: "RK2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "tersedia",
        price: 529000000
    },
    {
        code: "RK2-7",
        block: "RK2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "booking",
        price: 529000000
    },
    {
        code: "RK2-8",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-9",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 0
    },
    {
        code: "RK2-10",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 729000000
    },
    {
        code: "RK2-11",
        block: "RK2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "tersedia",
        price: 529000000
    },
    {
        code: "RK2-12",
        block: "RK2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "tersedia",
        price: 529000000
    },
    {
        code: "RK2-13",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 729000000
    },
    {
        code: "RK2-14",
        block: "RK2",
        landArea: 55,
        buildingArea: 110,
        floors: 2,
        status: "tersedia",
        price: 729000000
    },
    {
        code: "RK3-1",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "booking",
        price: 399000000
    },
    {
        code: "RK3-2",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 399000000
    },
    {
        code: "RK3-3",
        block: "RK3",
        landArea: 39,
        buildingArea: 39,
        floors: 1,
        status: "tersedia",
        price: 409500000
    },
    {
        code: "RK3-5",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 409500000
    },
    {
        code: "RK3-6",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "booking",
        price: 399000000
    },
    {
        code: "RK3-7",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 409500000
    },
    {
        code: "RK3-8",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 420000000
    },
    {
        code: "RK3-9",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 420000000
    },
    {
        code: "RK3-10",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 420000000
    },
    {
        code: "RK3-11",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "booking",
        price: 399000000
    },
    {
        code: "RK3-12",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 420000000
    },
    {
        code: "RK3-13",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 430500000
    },
    {
        code: "RK3-14",
        block: "RK3",
        landArea: 38,
        buildingArea: 38,
        floors: 1,
        status: "tersedia",
        price: 420000000
    },
    {
        code: "Ruko R2-3",
        block: "Ruko R2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "tersedia",
        price: 529000000
    },
    {
        code: "Ruko R2-5",
        block: "Ruko R2",
        landArea: 55,
        buildingArea: 55,
        floors: 1,
        status: "tersedia",
        price: 529000000
    }
];
const facilities = [
    {
        code: "clubhouse",
        name: "Club House",
        desc: "Area rekreasi dan pertemuan warga",
        x: -2.5,
        z: -6.2,
        size: 2.6
    },
    {
        code: "mushola",
        name: "Mushola",
        desc: "Fasilitas ibadah di dalam kawasan",
        x: 0.3,
        z: -6.6,
        size: 1.5
    }
];
const projectSummary = {
    name: "Puri Safana Cikeas",
    location: "Cikeas, Gunung Putri, Bogor",
    tagline: "Lebih Dekat, Lebih Murah, Lebih Luas",
    totalArea: "5.000 m²",
    totalUnits: 258,
    totalHouses: 227,
    totalRuko: 31,
    experience: "10 Tahun Pengalaman Profesional",
    about: "Bayangkan memiliki rumah di lingkungan yang nyaman, aman, dengan lokasi strategis dan fasilitas modern yang menunjang gaya hidup Anda. Di Puri Safana Cikeas, kami menawarkan tempat tinggal dengan standar kualitas tinggi dan harga yang terjangkau, sehingga rumah impian Anda lebih mudah terwujud.",
    facilities: [
        {
            name: "Club House",
            desc: "Area rekreasi dan pertemuan warga, terletak di antara Blok AA6 dan AA7"
        },
        {
            name: "Mushola",
            desc: "Fasilitas ibadah di dalam kawasan, berdampingan dengan Club House"
        },
        {
            name: "Gerbang Utama & Keamanan 24 Jam",
            desc: "Akses terkontrol dengan sistem keamanan"
        },
        {
            name: "Gedung Serbaguna",
            desc: "Ruang komunitas untuk acara warga"
        },
        {
            name: "Ruang Terbuka Hijau",
            desc: "Area bermain dan taman keluarga"
        },
        {
            name: "Lokasi Strategis",
            desc: "Akses mudah ke tol, sekolah, dan pusat perbelanjaan"
        }
    ]
};
const developer = {
    name: "Bumantara",
    legalName: "PT Bintang Safana Globalindo",
    description: "Bumantara berkomitmen menghadirkan hunian yang nyaman, fungsional, dan terjangkau, tanpa mengabaikan kualitas dan estetika. Kami percaya bahwa rumah bukan hanya tempat tinggal, melainkan ruang untuk tumbuh, berkumpul, dan membangun masa depan bersama keluarga. Dengan perencanaan yang matang, desain yang praktis, serta perhatian pada detail, setiap proyek Bumantara dirancang agar menjadi hunian yang aman, nyaman, dan bernilai jangka panjang bagi setiap pemiliknya.",
    tagline: "Pengembang properti bergengsi dan terpercaya dengan rekam jejak yang terbukti",
    stats: [
        {
            label: "Pengalaman Profesional",
            value: "10+ Tahun"
        },
        {
            label: "Proyek Dikembangkan",
            value: "Multi-proyek"
        },
        {
            label: "Unit Terjual",
            value: "142 Transaksi"
        }
    ]
};
const nearbyPlaces = [
    {
        category: "Transportasi",
        name: "Gerbang Tol Cibubur / Gunung Putri",
        distance: "±10 menit"
    },
    {
        category: "Transportasi",
        name: "Stasiun LRT Harjamukti",
        distance: "±15 menit"
    },
    {
        category: "Pendidikan",
        name: "SDN & SMPN Gunung Putri",
        distance: "±5 menit"
    },
    {
        category: "Pendidikan",
        name: "Sekolah Swasta Cikeas",
        distance: "±10 menit"
    },
    {
        category: "Belanja",
        name: "Cibubur Junction",
        distance: "±15 menit"
    },
    {
        category: "Belanja",
        name: "Pasar Cikeas",
        distance: "±7 menit"
    },
    {
        category: "Kesehatan",
        name: "RS Sentra Medika Cibinong",
        distance: "±12 menit"
    },
    {
        category: "Kesehatan",
        name: "Klinik 24 Jam Gunung Putri",
        distance: "±6 menit"
    }
];
const statusColor = {
    tersedia: "#8bc34a",
    booking: "#e0b04c",
    terjual: "#9aa08f"
};
const statusLabel = {
    tersedia: "Tersedia",
    booking: "Booking",
    terjual: "Terjual"
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1v1u9v-._.js.map