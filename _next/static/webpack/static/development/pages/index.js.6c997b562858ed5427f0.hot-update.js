webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\programacion2\\web\\bitcoinApp\\components\\Evento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Evento = function Evento(_ref) {
  var info = _ref.info;
  var name = info.name,
      url = info.url,
      description = info.description;
  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250);
  }

  return __jsx("a", {
    href: url,
    target: "_blank",
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, name.text), __jsx("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, description.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.6c997b562858ed5427f0.hot-update.js.map