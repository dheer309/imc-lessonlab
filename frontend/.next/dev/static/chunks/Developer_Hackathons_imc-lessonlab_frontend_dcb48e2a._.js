(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RehearsePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Hackathons/imc-lessonlab/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function RehearsePage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lessonId = searchParams.get("lessonId");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            role: "assistant",
            content: "Hi! I'm Max, and I'm 12 years old. My teacher said you're going to teach us something cool today about being a surgeon? I'm kind of nervous around doctors, but I'll try to pay attention! What are we learning about?"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isWaiting, setIsWaiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confidenceScore, setConfidenceScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [currentTip, setCurrentTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Start by introducing yourself and your profession in a fun, relatable way!");
    const [detectedJargon, setDetectedJargon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ttsEnabled, setTtsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recognitionSupported, setRecognitionSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isListeningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Check for speech recognition support
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RehearsePage.useEffect": ()=>{
            setRecognitionSupported(("TURBOPACK compile-time value", "object") !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window));
        }
    }["RehearsePage.useEffect"], []);
    // Initialize speech recognition with continuous mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RehearsePage.useEffect": ()=>{
            if (recognitionSupported && ("TURBOPACK compile-time value", "object") !== "undefined") {
                const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
                recognitionRef.current = new SpeechRecognitionAPI();
                recognitionRef.current.continuous = true;
                recognitionRef.current.interimResults = true;
                recognitionRef.current.lang = "en-US";
                recognitionRef.current.onresult = ({
                    "RehearsePage.useEffect": (event)=>{
                        let finalTranscript = "";
                        for(let i = event.resultIndex; i < event.results.length; i++){
                            const transcript = event.results[i][0].transcript;
                            if (event.results[i].isFinal) {
                                finalTranscript += transcript;
                            }
                        }
                        if (finalTranscript) {
                            setInput({
                                "RehearsePage.useEffect": (prev)=>prev + finalTranscript
                            }["RehearsePage.useEffect"]);
                        }
                    }
                })["RehearsePage.useEffect"];
                recognitionRef.current.onerror = ({
                    "RehearsePage.useEffect": ()=>{
                    // Don't stop listening on transient errors
                    }
                })["RehearsePage.useEffect"];
                recognitionRef.current.onend = ({
                    "RehearsePage.useEffect": ()=>{
                        // If we're still supposed to be listening, restart (browser may stop unexpectedly)
                        if (isListeningRef.current) {
                            try {
                                recognitionRef.current?.start();
                            } catch  {
                                isListeningRef.current = false;
                                setIsListening(false);
                            }
                        } else {
                            setIsListening(false);
                        }
                    }
                })["RehearsePage.useEffect"];
            }
        }
    }["RehearsePage.useEffect"], [
        recognitionSupported
    ]);
    // Speak text using ElevenLabs TTS via backend
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RehearsePage.useCallback[speak]": async (text)=>{
            if (!ttsEnabled) return;
            // Stop any currently playing audio
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
            setIsSpeaking(true);
            try {
                const res = await fetch("http://localhost:8000/api/tts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text
                    })
                });
                if (!res.ok) throw new Error("TTS failed");
                const audioBlob = await res.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audioRef.current = audio;
                audio.onended = ({
                    "RehearsePage.useCallback[speak]": ()=>{
                        setIsSpeaking(false);
                        URL.revokeObjectURL(audioUrl);
                    }
                })["RehearsePage.useCallback[speak]"];
                audio.onerror = ({
                    "RehearsePage.useCallback[speak]": ()=>{
                        setIsSpeaking(false);
                        URL.revokeObjectURL(audioUrl);
                    }
                })["RehearsePage.useCallback[speak]"];
                await audio.play();
            } catch  {
                setIsSpeaking(false);
            }
        }
    }["RehearsePage.useCallback[speak]"], [
        ttsEnabled
    ]);
    // Stop speaking
    const stopSpeaking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RehearsePage.useCallback[stopSpeaking]": ()=>{
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
            setIsSpeaking(false);
        }
    }["RehearsePage.useCallback[stopSpeaking]"], []);
    // Toggle speech recognition
    const toggleListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RehearsePage.useCallback[toggleListening]": ()=>{
            if (!recognitionRef.current) return;
            if (isListening) {
                isListeningRef.current = false;
                recognitionRef.current.stop();
                setIsListening(false);
            } else {
                isListeningRef.current = true;
                try {
                    recognitionRef.current.start();
                    setIsListening(true);
                } catch  {
                    isListeningRef.current = false;
                }
            }
        }
    }["RehearsePage.useCallback[toggleListening]"], [
        isListening
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RehearsePage.useEffect": ()=>{
            scrollToBottom();
        }
    }["RehearsePage.useEffect"], [
        messages
    ]);
    // Speak initial message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RehearsePage.useEffect": ()=>{
            if (messages.length === 1 && ttsEnabled) {
                const timer = setTimeout({
                    "RehearsePage.useEffect.timer": ()=>{
                        speak(messages[0].content);
                    }
                }["RehearsePage.useEffect.timer"], 500);
                return ({
                    "RehearsePage.useEffect": ()=>clearTimeout(timer)
                })["RehearsePage.useEffect"];
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["RehearsePage.useEffect"], []);
    const handleSend = async ()=>{
        if (!input.trim() || isWaiting) return;
        const userMessage = {
            id: messages.length + 1,
            role: "user",
            content: input
        };
        const updatedMessages = [
            ...messages,
            userMessage
        ];
        setMessages(updatedMessages);
        setInput("");
        setIsWaiting(true);
        try {
            const res = await fetch("http://localhost:8000/api/rehearse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    lessonId: lessonId ? parseInt(lessonId) : null,
                    messages: updatedMessages.map((m)=>({
                            role: m.role,
                            content: m.content
                        }))
                })
            });
            if (!res.ok) throw new Error("Failed to get response");
            const data = await res.json();
            const aiMessage = {
                id: updatedMessages.length + 1,
                role: "assistant",
                content: data.reply
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
            // Update sidebar from backend response
            setConfidenceScore(data.confidenceScore);
            setCurrentTip(data.tip);
            if (data.jargonDetected.length > 0) {
                setDetectedJargon((prev)=>[
                        ...prev,
                        ...data.jargonDetected.filter((j)=>!prev.includes(j))
                    ]);
            }
            // Speak the AI response
            if (ttsEnabled) {
                speak(data.reply);
            }
        } catch  {
            const fallbackMessage = {
                id: updatedMessages.length + 1,
                role: "assistant",
                content: "Hmm, I got distracted for a second! Can you say that again?"
            };
            setMessages((prev)=>[
                    ...prev,
                    fallbackMessage
                ]);
        } finally{
            setIsWaiting(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const userMessageCount = messages.filter((m)=>m.role === "user").length;
    if (showResults) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-2xl",
                                children: "Practice Complete!"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex h-32 w-32 items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-full w-full -rotate-90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "64",
                                                            cy: "64",
                                                            r: "56",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "12",
                                                            className: "text-muted"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "64",
                                                            cy: "64",
                                                            r: "56",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "12",
                                                            strokeDasharray: `${confidenceScore * 3.52} 352`,
                                                            className: "text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute text-3xl font-bold text-foreground",
                                                    children: [
                                                        confidenceScore,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-lg font-medium text-foreground",
                                            children: "Confidence Score"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 flex items-center gap-2 font-semibold text-green-800 dark:text-green-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                "What Worked Well"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1 text-sm text-green-700 dark:text-green-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "- Used relatable analogies to explain complex concepts"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "- Engaged Max with questions and activities"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "- Kept explanations age-appropriate"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-amber-50 dark:bg-amber-900/20 p-4 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                "Suggestions for Improvement"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1 text-sm text-amber-700 dark:text-amber-300",
                                            children: [
                                                detectedJargon.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "- Simplify terms like: ",
                                                        detectedJargon.slice(0, 3).map((t)=>`"${t}"`).join(", ")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "- Add more pauses after key points"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "- Include a quick recap at the end"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: lessonId ? `/feedback?lessonId=${lessonId}` : "/feedback",
                                        children: "Ready to Teach!"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                    lineNumber: 257,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-[calc(100vh-4rem)] flex-col lg:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-border bg-card px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: lessonId ? `/lesson?id=${lessonId}` : "/lesson",
                                            className: "text-muted-foreground hover:text-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "font-semibold text-foreground",
                                                    children: "Practice with Max"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "AI Student, Age 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ()=>{
                                                if (isSpeaking) stopSpeaking();
                                                setTtsEnabled(!ttsEnabled);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-9", ttsEnabled ? "text-primary" : "text-muted-foreground"),
                                            title: ttsEnabled ? "Disable voice" : "Enable voice",
                                            children: ttsEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 65
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        userMessageCount >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>{
                                                stopSpeaking();
                                                setShowResults(true);
                                            },
                                            className: "bg-transparent",
                                            children: "End Practice"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-2xl space-y-4",
                            children: [
                                messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", message.role === "user" ? "justify-end" : "justify-start"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-[80%] rounded-2xl px-4 py-3", message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"),
                                            children: [
                                                message.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary",
                                                            children: "M"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-muted-foreground",
                                                            children: "Max"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 23
                                                        }, this),
                                                        isSpeaking && ttsEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            className: "h-3 w-3 text-primary animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed",
                                                    children: message.content
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this)
                                    }, message.id, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this)),
                                isWaiting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-muted px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary",
                                                        children: "M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-muted-foreground",
                                                        children: "Max"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex max-w-2xl gap-2",
                                children: [
                                    recognitionSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: isListening ? "default" : "outline",
                                        size: "icon",
                                        onClick: toggleListening,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isListening && "bg-red-500 hover:bg-red-600 text-white", !isListening && "bg-transparent"),
                                        title: isListening ? "Stop listening" : "Start speaking",
                                        children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 450,
                                            columnNumber: 32
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                            lineNumber: 450,
                                            columnNumber: 65
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        onKeyDown: handleKeyPress,
                                        placeholder: isListening ? "Listening... (click mic to stop)" : "Teach Max about your topic...",
                                        className: "flex-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSend,
                                        disabled: !input.trim() || isWaiting,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Send message"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this),
                            recognitionSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-center text-xs text-muted-foreground",
                                children: isListening ? "Mic is on - speak naturally, click mic to stop" : "Click the microphone to speak your response"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full border-t border-border bg-muted/30 lg:w-80 lg:border-l lg:border-t-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Teaching Score"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-16 w-16",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-full w-full -rotate-90",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "32",
                                                                cy: "32",
                                                                r: "28",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "6",
                                                                className: "text-muted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "32",
                                                                cy: "32",
                                                                r: "28",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "6",
                                                                strokeDasharray: `${confidenceScore * 1.76} 176`,
                                                                className: "text-primary transition-all duration-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground",
                                                        children: [
                                                            confidenceScore,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Based on clarity, engagement, and age-appropriateness"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "h-4 w-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            "Voice Mode"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: ttsEnabled ? "Max will speak their responses aloud." : "Voice is muted. Click the speaker icon to enable."
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                className: "h-4 w-4 text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            "Coaching Tip"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-foreground",
                                        children: currentTip
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this),
                        detectedJargon.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this),
                                            "Jargon Detected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: detectedJargon.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-amber-700 dark:text-amber-300",
                                                children: [
                                                    "“",
                                                    term,
                                                    "” - try simpler words"
                                                ]
                                            }, term, true, {
                                                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                            lineNumber: 548,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Hackathons/imc-lessonlab/frontend/app/rehearse/page.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_s(RehearsePage, "ZAq1Kgw3zqEKlfaNFYVzsTx8UO4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Hackathons$2f$imc$2d$lessonlab$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = RehearsePage;
var _c;
__turbopack_context__.k.register(_c, "RehearsePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_Hackathons_imc-lessonlab_frontend_dcb48e2a._.js.map