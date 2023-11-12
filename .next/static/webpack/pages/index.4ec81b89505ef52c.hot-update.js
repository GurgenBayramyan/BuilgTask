"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Customers/Customers.tsx":
/*!************************************************!*\
  !*** ./src/components/Customers/Customers.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_Edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Edit.svg */ \"./src/img/Edit.svg\");\n/* harmony import */ var _img_Trash_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Trash.svg */ \"./src/img/Trash.svg\");\n/* harmony import */ var _store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/slices/customersSlice */ \"./src/store/slices/customersSlice.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Customers = function() {\n    _s();\n    var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var customers = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(customersSelecto).customers;\n    var handleDelete = function(id) {\n        dispatch((0,_store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_6__.deleteCustomer)(id));\n    };\n    var handleChange = function(data) {\n        dispatch((0,_store_slices_customersSlice__WEBPACK_IMPORTED_MODULE_6__.setCurrentData)(data));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-1 gap-[20px] p-[40px] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-inter text-lg font-bold leading-6 \",\n                children: \" Customers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full divide-y divide-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Company\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Admin\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 whitespace-nowrap\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white divide-y divide-gray-200\",\n                        children: !!customers.length && customers.map(function(customer) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    dangerouslySetInnerHTML: {\n                                                        __html: customer.svg\n                                                    },\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: customer.firstName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: customer.selectedButton\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    onClick: function() {\n                                                        return handleChange(customer);\n                                                    },\n                                                    className: \"cursor-pointer\",\n                                                    priority: true,\n                                                    src: _img_Edit_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    onClick: function() {\n                                                        return handleDelete(customer.id);\n                                                    },\n                                                    className: \"cursor-pointer\",\n                                                    priority: true,\n                                                    src: _img_Trash_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, customer.id, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\BuilgT\\\\src\\\\components\\\\Customers\\\\Customers.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Customers, \"CXxy7qu/GvLl5W2oLixq13ROo0E=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Customers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customers);\nvar _c;\n$RefreshReg$(_c, \"Customers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b21lcnMvQ3VzdG9tZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNtQztBQUM5QjtBQUVXO0FBQ0U7QUFDdUM7O0FBS25GLElBQU1RLFNBQVMsR0FBRyxXQUFNOztJQUN0QixJQUFNQyxRQUFRLEdBQUdSLHNEQUFjLEVBQUU7SUFDakMsSUFBTSxTQUFXLEdBQUtDLHNEQUFjLENBQUNTLGdCQUFnQixDQUFDLENBQTlDRCxTQUFTO0lBR25CLElBQU1FLFlBQVksR0FBRyxTQUFDQyxFQUFTLEVBQUs7UUFDaENKLFFBQVEsQ0FBQ0gsNEVBQWMsQ0FBQ08sRUFBRSxDQUFDLENBQUM7S0FDL0I7SUFDRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsSUFBZSxFQUFLO1FBQ3RDTixRQUFRLENBQUNGLDRFQUFjLENBQUNRLElBQUksQ0FBQyxDQUFDO0tBQ2pDO0lBR0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7MEJBQ3hELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMseUNBQXlDOzBCQUFDLFlBQVU7Ozs7O3FCQUFLOzBCQUN2RSw4REFBQ0UsT0FBSztnQkFBQ0YsU0FBUyxFQUFDLHFDQUFxQzs7a0NBQ3BELDhEQUFDRyxPQUFLO2tDQUNKLDRFQUFDQyxJQUFFOzs4Q0FDRCw4REFBQ0MsSUFBRTtvQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7b0NBQUNOLFNBQVMsRUFBQyxzRUFBc0U7OENBQUMsTUFFakc7Ozs7O3lDQUFLOzhDQUNMLDhEQUFDSyxJQUFFO29DQUFDQyxLQUFLLEVBQUMsS0FBSztvQ0FBQ04sU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxTQUVqRzs7Ozs7eUNBQUs7OENBQ0wsOERBQUNLLElBQUU7b0NBQUNDLEtBQUssRUFBQyxLQUFLO29DQUFDTixTQUFTLEVBQUMsc0VBQXNFOzhDQUFDLE9BRWpHOzs7Ozt5Q0FBSzs4Q0FDTCw4REFBQ0ssSUFBRTtvQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7b0NBQUNOLFNBQVMsRUFBQyxzRUFBc0U7OENBQUMsT0FFakc7Ozs7O3lDQUFLOzhDQUNMLDhEQUFDSyxJQUFFO29DQUFDQyxLQUFLLEVBQUMsS0FBSztvQ0FBQ04sU0FBUyxFQUFDLHNFQUFzRTs4Q0FBQyxTQUVqRzs7Ozs7eUNBQUs7OENBQ0wsOERBQUNPLElBQUU7b0NBQUNQLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lDQUFNOzs7Ozs7aUNBQzlDOzs7Ozs2QkFDQztrQ0FDUiw4REFBQ1EsT0FBSzt3QkFBQ1IsU0FBUyxFQUFDLG1DQUFtQztrQ0FDakQsQ0FBQyxDQUFDUCxTQUFTLENBQUNnQixNQUFNLElBQ2pCaEIsU0FBUyxDQUFDaUIsR0FBRyxDQUFDLFNBQUNDLFFBQVE7aURBQ3JCLDhEQUFDUCxJQUFFOztrREFDRCw4REFBQ0csSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLDZCQUE2QjtrREFDekMsNEVBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzhEQUNoQyw4REFBQ0QsS0FBRztvREFBQ2EsdUJBQXVCLEVBQUU7d0RBQUVDLE1BQU0sRUFBRUYsUUFBUSxDQUFDRyxHQUFHO3FEQUFFO29EQUFFZCxTQUFTLEVBQUMsTUFBTTs7Ozs7eURBQUc7OERBQzNFLDhEQUFDRCxLQUFHOzhEQUFFWSxRQUFRLENBQUNJLFNBQVM7Ozs7O3lEQUFPOzs7Ozs7aURBQzNCOzs7Ozs2Q0FDSDtrREFDTCw4REFBQ1IsSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLDZCQUE2QjtrREFBRVcsUUFBUSxDQUFDSyxPQUFPOzs7Ozs2Q0FBTTtrREFDbkUsOERBQUNULElBQUU7d0NBQUNQLFNBQVMsRUFBQyw2QkFBNkI7a0RBQUVXLFFBQVEsQ0FBQ00sS0FBSzs7Ozs7NkNBQU07a0RBQ2pFLDhEQUFDVixJQUFFO3dDQUFDUCxTQUFTLEVBQUMsNkJBQTZCO2tEQUFFVyxRQUFRLENBQUNPLGNBQWM7Ozs7OzZDQUFNO2tEQUMxRSw4REFBQ1gsSUFBRTt3Q0FBQ1AsU0FBUyxFQUFDLDZCQUE2QjtrREFDekMsNEVBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyx5QkFBeUI7OzhEQUN0Qyw4REFBQ2QsbURBQUs7b0RBQUNpQyxPQUFPLEVBQUU7K0RBQUl0QixZQUFZLENBQUNjLFFBQVEsQ0FBQztxREFBQTtvREFBRVgsU0FBUyxFQUFDLGdCQUFnQjtvREFBQ29CLFFBQVE7b0RBQUNDLEdBQUcsRUFBRWxDLHFEQUFROzs7Ozt5REFBSTs4REFDakcsOERBQUNELG1EQUFLO29EQUFDaUMsT0FBTyxFQUFFOytEQUFJeEIsWUFBWSxDQUFDZ0IsUUFBUSxDQUFDZixFQUFFLENBQUU7cURBQUE7b0RBQUVJLFNBQVMsRUFBQyxnQkFBZ0I7b0RBQUNvQixRQUFRO29EQUFDQyxHQUFHLEVBQUVqQyxzREFBUzs7Ozs7eURBQUk7Ozs7OztpREFDbEc7Ozs7OzZDQUNIOzsrQkFmRXVCLFFBQVEsQ0FBQ2YsRUFBRTs7OztxQ0FnQmY7eUJBQ04sQ0FBQzs7Ozs7NkJBQ0U7Ozs7OztxQkFDRjs7Ozs7O2FBQ0osQ0FDTjtDQUNIO0dBOURLTCxTQUFTOztRQUNJUCxrREFBYztRQUNUQyxrREFBYzs7O0FBRmhDTSxLQUFBQSxTQUFTO0FBZ0VmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tZXJzL0N1c3RvbWVycy50c3g/YzdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgZGVsZXRlQ3VzdG9tZXJBY3Rpb24sIGdldEN1c3RvbWVyc0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IGVkaXRlSW1nIGZyb20gJy4uLy4uL2ltZy9FZGl0LnN2Zyc7XHJcbmltcG9ydCBkZWxldGVJbWcgZnJvbSAnLi4vLi4vaW1nL1RyYXNoLnN2Zyc7XHJcbmltcG9ydCB7IGRlbGV0ZUN1c3RvbWVyLCBzZXRDdXJyZW50RGF0YSB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlcy9jdXN0b21lcnNTbGljZSc7XHJcbmltcG9ydCB7IElDdXN0b21lcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9zbGljZXMvY3VzdG9tZXJzVHlwZXMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDdXN0b21lcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VzdG9tZXJzIH0gPSB1c2VBcHBTZWxlY3RvcihjdXN0b21lcnNTZWxlY3RvKTtcclxuICBcclxuXHJcbmNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZDpzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoKGRlbGV0ZUN1c3RvbWVyKGlkKSlcclxufVxyXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSAoZGF0YTpJQ3VzdG9tZXJzKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50RGF0YShkYXRhKSlcclxufVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgZ2FwLVsyMHB4XSBwLVs0MHB4XSBcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtaW50ZXIgdGV4dC1sZyBmb250LWJvbGQgbGVhZGluZy02IFwiPiBDdXN0b21lcnM8L2gyPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIENvbXBhbnlcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIEFkbWluXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgQWN0aW9uc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICB7ISFjdXN0b21lcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIGN1c3RvbWVycy5tYXAoKGN1c3RvbWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17Y3VzdG9tZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGN1c3RvbWVyLnN2ZyB9fSBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntjdXN0b21lci5maXJzdE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj57Y3VzdG9tZXIuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPntjdXN0b21lci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPntjdXN0b21lci5zZWxlY3RlZEJ1dHRvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpPT5oYW5kbGVDaGFuZ2UoY3VzdG9tZXIpfSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJyBwcmlvcml0eSBzcmM9e2VkaXRlSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKT0+aGFuZGxlRGVsZXRlKGN1c3RvbWVyLmlkISl9IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInIHByaW9yaXR5IHNyYz17ZGVsZXRlSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJJbWFnZSIsImVkaXRlSW1nIiwiZGVsZXRlSW1nIiwiZGVsZXRlQ3VzdG9tZXIiLCJzZXRDdXJyZW50RGF0YSIsIkN1c3RvbWVycyIsImRpc3BhdGNoIiwiY3VzdG9tZXJzIiwiY3VzdG9tZXJzU2VsZWN0byIsImhhbmRsZURlbGV0ZSIsImlkIiwiaGFuZGxlQ2hhbmdlIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRkIiwidGJvZHkiLCJsZW5ndGgiLCJtYXAiLCJjdXN0b21lciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic3ZnIiwiZmlyc3ROYW1lIiwiY29tcGFueSIsImVtYWlsIiwic2VsZWN0ZWRCdXR0b24iLCJvbkNsaWNrIiwicHJpb3JpdHkiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Customers/Customers.tsx\n"));

/***/ })

});