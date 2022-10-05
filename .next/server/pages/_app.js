"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QP": () => (/* binding */ API_ENDPOINT),
/* harmony export */   "vK": () => (/* binding */ TYPES),
/* harmony export */   "Dr": () => (/* binding */ ROUTES_ENDPOINT),
/* harmony export */   "kD": () => (/* binding */ MAIN_ENDPOINT)
/* harmony export */ });
const API_ENDPOINT = "https://api.sampleapis.com/futurama/";
const TYPES = [
    'cast',
    'characters',
    'episodes',
    'info',
    'inventory',
    'questions'
];
const ROUTES_ENDPOINT = "https://futerama-vercel-com.vercel.app/futurama/";
const MAIN_ENDPOINT = "https://futerama-vercel-com.vercel.app/";


/***/ }),

/***/ 1400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8151);
;// CONCATENATED MODULE: ./src/components/layouts/Navigation.tsx




const Navigation = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `${constants/* MAIN_ENDPOINT */.kD}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Welcome to the Futurama World"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: constants/* TYPES.map */.vK.map((routeObject)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `${constants/* ROUTES_ENDPOINT */.Dr}${routeObject}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: routeObject
                                })
                            })
                        }, routeObject));
                    })
                })
            })
        ]
    }));
};
const Header = (external_styled_components_default()).header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 34px;
    color: #fff;
    background: #222;
    border-bottom: 1px solid #fff;
    ul {
        display: flex;
    }
     li {
        list-style: none;
        font-size: 24px;
        margin-left: 15px;
    }
`;

;// CONCATENATED MODULE: ./src/components/layouts/Layout.tsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrap, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                children: children
            })
        ]
    }));
};
const Wrap = (external_styled_components_default()).div`
    background: #222;
`;
const Container = (external_styled_components_default()).main`
  max-width: 1280px;
  margin: auto;
`;

;// CONCATENATED MODULE: ./src/components/layouts/index.ts



;// CONCATENATED MODULE: ./src/pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(1400)));
module.exports = __webpack_exports__;

})();