(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/component/app.component.css":
/*!*****************************************!*\
  !*** ./src/component/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"intro\":\"MCSXeulOxgUQWeh8vOuIX\"};\n\n//# sourceURL=webpack:///./src/component/app.component.css?");

/***/ }),

/***/ "./src/component/app.component.js":
/*!****************************************!*\
  !*** ./src/component/app.component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ \"./src/component/app.component.css\");\n/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction MyComponent() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"anshul GoYAL\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      name = _useState2[0],\n      setState = _useState2[1];\n\n  var handleCahnge = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    return setState(e.target.value);\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _app_component_css__WEBPACK_IMPORTED_MODULE_1___default.a.intro\n  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: name,\n    onChange: handleCahnge\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\n\n//# sourceURL=webpack:///./src/component/app.component.js?");

/***/ })

}]);