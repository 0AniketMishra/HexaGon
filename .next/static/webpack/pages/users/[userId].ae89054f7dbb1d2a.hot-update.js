"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[userId]",{

/***/ "./pages/users/[userId].tsx":
/*!**********************************!*\
  !*** ./pages/users/[userId].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction userId() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _$userId = router.query.userId;\n    var userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\");\n    var findingUser = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var q, querySnapshot;\n            return C_Users_ANIKET_Desktop_Pentagon_Pentagon_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(userRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"uid\", \"==\", {\n                            userId: _$userId\n                        }));\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);\n                    case 3:\n                        querySnapshot = _ctx.sent;\n                        querySnapshot.forEach(function(doc) {\n                            console.log(doc.id, \" => \", doc.data());\n                        });\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function findingUser(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: _$userId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[userId].tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc.data().username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[userId].tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[userId].tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(userId, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (userId);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bdXNlcklkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFDdUU7QUFDbEM7QUFDWTtBQUNoQjs7QUFFakMsU0FBU08sTUFBTSxHQUFHOztJQUNkLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFNRyxRQUFNLEdBQUdDLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNO0lBQ2xDLElBQU1FLE9BQU8sR0FBR1QsOERBQVUsQ0FBQ00seUNBQUUsRUFBRSxPQUFPLENBQUM7SUFFdkMsSUFBTUksV0FBVzttQkFBRyw2UEFBT0MsQ0FBQyxFQUFLO2dCQUN2QkMsQ0FBQyxFQUNEQyxhQUFhOzs7O3dCQURiRCxDQUFDLEdBQUdYLHlEQUFLLENBQUNRLE9BQU8sRUFBRVAseURBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFOzRCQUFFSyxNQUFNLEVBQU5BLFFBQU07eUJBQUUsQ0FBQyxDQUFDLENBQUM7OytCQUM3QkosMkRBQU8sQ0FBQ1MsQ0FBQyxDQUFDOzt3QkFBaENDLGFBQWEsWUFBbUI7d0JBQ3RDQSxhQUFhLENBQUNDLE9BQU8sQ0FBQyxTQUFDVCxHQUFHLEVBQUs7NEJBQzNCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsR0FBRyxDQUFDWSxFQUFFLEVBQUUsTUFBTSxFQUFFWixHQUFHLENBQUNhLElBQUksRUFBRSxDQUFDLENBQUM7eUJBQzNDLENBQUMsQ0FBQzs7Ozs7O1NBQ047d0JBTktSLFdBQVcsQ0FBVUMsQ0FBQzs7O09BTTNCO0lBQ0gscUJBRUUsOERBQUNRLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFFYixRQUFNOzs7OztvQkFBTTswQkFDakIsOERBQUNhLElBQUU7MEJBQUVmLHdEQUFRLEVBQUUsQ0FBQ2dCLFFBQVE7Ozs7O29CQUFNOzs7Ozs7WUFDNUIsQ0FDUDtDQUNGO0dBbkJRZCxNQUFNOztRQUNJSCxrREFBUzs7O0FBb0I1QiwrREFBZUcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9bdXNlcklkXS50c3g/ZGNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBkb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHtkYn0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCJcclxuXHJcbmZ1bmN0aW9uIHVzZXJJZCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdXNlcklkID0gcm91dGVyLnF1ZXJ5LnVzZXJJZDtcclxuICAgIGNvbnN0IHVzZXJSZWYgPSBjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpXHJcblxyXG4gICAgY29uc3QgZmluZGluZ1VzZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHEgPSBxdWVyeSh1c2VyUmVmLCB3aGVyZShcInVpZFwiLCBcIj09XCIsIHsgdXNlcklkIH0pKTtcclxuICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT57dXNlcklkfTwvaDE+XHJcbiAgICAgICAgPGgxPntkb2MuZGF0YSgpLnVzZXJuYW1lfTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJZCJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJ1c2VSb3V0ZXIiLCJkb2MiLCJkYiIsInVzZXJJZCIsInJvdXRlciIsInVzZXJSZWYiLCJmaW5kaW5nVXNlciIsImUiLCJxIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwiZGl2IiwiaDEiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[userId].tsx\n"));

/***/ })

});