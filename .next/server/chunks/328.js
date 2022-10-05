"use strict";
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 6406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* reexport */ Error),
  "g": () => (/* reexport */ Loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Error.tsx

const Error = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    }));
};

;// CONCATENATED MODULE: ./src/components/Loading.tsx

const Loading = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    }));
};

;// CONCATENATED MODULE: ./src/components/index.tsx




/***/ }),

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

/***/ 1974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ useApi)
});

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/utils/fetcher.tsx

const fetcher = (url)=>external_axios_default().get(url).then((res)=>res.data
    )
;

// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(8151);
;// CONCATENATED MODULE: ./src/hooks/useApi.tsx



const useApi = (path)=>{
    return external_swr_default()(`${constants/* API_ENDPOINT */.QP}${path}`, fetcher);
};


/***/ })

};
;