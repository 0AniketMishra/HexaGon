"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./components/ChatModal.tsx":
/*!**********************************!*\
  !*** ./components/ChatModal.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var _atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/chatModalAtoms */ \"./atoms/chatModalAtoms.tsx\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatModal() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_chatModalAtoms__WEBPACK_IMPORTED_MODULE_6__.chatModalState), 2), Open = ref[0], setOpen = ref[1];\n    var filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedFile = ref1[0], setSelectedFile = ref1[1];\n    var captionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth), 1), user = ref3[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: openModal,\n                    className: \"rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75\",\n                    children: \"Open dialog\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {\n                appear: true,\n                show: Open,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClick: function() {\n                        return setOpen(false);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Dialog.Panel, {\n                                        className: \"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Dialog.Title, {\n                                                as: \"h3\",\n                                                className: \"text-lg font-medium leading-6 text-gray-900\",\n                                                children: \"Payment successful\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 35\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500\",\n                                                    children: \"Your payment has been successfully submitted. We\\u2019ve sent you an email with all of the details of your order.\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 39\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 35\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2\",\n                                                    onClick: function() {\n                                                        return setOpen(true);\n                                                    },\n                                                    children: \"Got it, thanks!\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 39\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 35\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 31\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 27\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\ChatModal.tsx\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, this);\n}\n_s(ChatModal, \"uqpJ0+dtBfTPjrpCn7dyZ7CAYNc=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = ChatModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatModal);\nvar _c;\n$RefreshReg$(_c, \"ChatModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7b0RBQ0Y7MERBRU4sOERBQUNELEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxNQUFNOzBEQUNqQiw0RUFBQ0MsUUFBTTtvREFDSEMsSUFBSSxFQUFDLFFBQVE7b0RBQ2JGLFNBQVMsRUFBQywyT0FBMk87b0RBQ3JQRyxPQUFPLEVBQUU7K0RBQU1aLE9BQU8sQ0FBQyxJQUFJLENBQUM7cURBQUE7OERBQy9CLGlCQUVEOzs7Ozt3REFBUzs7Ozs7b0RBQ1A7Ozs7Ozs0Q0FDSzs7Ozs7d0NBQ0E7Ozs7O29DQUNqQjs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFDRDs7Ozs7b0JBQ0E7Ozs7OztZQUNYLENBQ1Q7Q0FDRjtHQTNFUUYsU0FBUzs7UUFDVU4sa0RBQWM7UUFLdkJHLG1FQUFZOzs7QUFOdEJHLEtBQUFBLFNBQVM7QUE2RWxCLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdE1vZGFsLnRzeD8xZDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiXHJcbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBDYW1lcmFJY29uLCBDdWJlVHJhbnNwYXJlbnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJ1xyXG5pbXBvcnQgeyBpc1R5cGVkQXJyYXkgfSBmcm9tICd1dGlsL3R5cGVzJ1xyXG5pbXBvcnQgeyBkYiwgc3RvcmFnZSB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24sIGRvYywgdXBkYXRlRG9jIH0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIlxyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAtY29tcGF0JztcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyByZWYsIGdldERvd25sb2FkVVJMLCB1cGxvYWRTdHJpbmcgfSBmcm9tICdAZmlyZWJhc2Uvc3RvcmFnZSdcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcclxuaW1wb3J0IHsgY2hhdE1vZGFsU3RhdGUgfSBmcm9tICcuLi9hdG9tcy9jaGF0TW9kYWxBdG9tcydcclxuXHJcbmZ1bmN0aW9uIENoYXRNb2RhbCgpIHtcclxuICAgIGNvbnN0IFtPcGVuLCBzZXRPcGVuXSA9IHVzZVJlY29pbFN0YXRlKGNoYXRNb2RhbFN0YXRlKVxyXG4gICAgY29uc3QgZmlsZVBpY2tlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGNhcHRpb25SZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLWJsYWNrIGJnLW9wYWNpdHktMjAgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1vcGFjaXR5LTMwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctd2hpdGUgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgT3BlbiBkaWFsb2dcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxUcmFuc2l0aW9uIGFwcGVhciBzaG93PXtPcGVufSBhcz17RnJhZ21lbnR9PlxyXG4gICAgICAgICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0yNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuUGFuZWwgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHRyYW5zZm9ybSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYmctd2hpdGUgcC02IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgc2hhZG93LXhsIHRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudCBzdWNjZXNzZnVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHBheW1lbnQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZC4gV2XigJl2ZSBzZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBhbiBlbWFpbCB3aXRoIGFsbCBvZiB0aGUgZGV0YWlscyBvZiB5b3VyIG9yZGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1ibHVlLTEwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctYmx1ZS01MDAgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvdCBpdCwgdGhhbmtzIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TW9kYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJEaWFsb2ciLCJUcmFuc2l0aW9uIiwidXNlQXV0aFN0YXRlIiwiYXV0aCIsImNoYXRNb2RhbFN0YXRlIiwiQ2hhdE1vZGFsIiwiT3BlbiIsInNldE9wZW4iLCJmaWxlUGlja2VyUmVmIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiY2FwdGlvblJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwib3Blbk1vZGFsIiwiYXBwZWFyIiwic2hvdyIsImFzIiwiQ2hpbGQiLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJQYW5lbCIsIlRpdGxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatModal.tsx\n"));

/***/ })

});