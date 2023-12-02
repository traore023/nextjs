webpackHotUpdate_N_E("pages/new-meetup/[meetupID]",{

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);



var _jsxFileName = "T:\\PROJECTS\\TRAINING\\REACT\\courseApplicationProjects\\19-next13-advanced\\components\\meetups\\MeetupDetails.js",
    _this = undefined;

var MeetupDetails = function MeetupDetails(_ref) {
  var meetup = _ref.meetup;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: meetup.image,
      alt: "meetup-image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: [" ", meetup.title, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: meetup.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: meetup.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c = MeetupDetails;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/new-meetup/[meetupID]/index.js":
/*!**********************************************!*\
  !*** ./pages/new-meetup/[meetupID]/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");


var _jsxFileName = "T:\\PROJECTS\\TRAINING\\REACT\\courseApplicationProjects\\19-next13-advanced\\pages\\new-meetup\\[meetupID]\\index.js",
    _this = undefined;


var meetup = {
  id: "M1",
  title: "A first Meetup",
  image: "https://media.istockphoto.com/id/978975308/tr/vekt%C3%B6r/yakla%C5%9Fan-olaylar%C4%B1-neon-i%C5%9Faret-vekt%C3%B6r-yakla%C5%9Fan-olaylar-tasar%C4%B1m-%C5%9Fablonu-neon-tabela-%C4%B1%C5%9F%C4%B1k-afi%C5%9F.jpg?s=612x612&w=is&k=20&c=XgGTB7XKo9FuQgQzbV1ZgTXO88d1n4tPYq7rhNUpk-o=",
  address: "Address 1",
  description: "It is special"
};

var MeetupDetailPage = function MeetupDetailPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetup: meetup
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_c = MeetupDetailPage;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailPage);

var _c;

$RefreshReg$(_c, "MeetupDetailPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ldy1tZWV0dXAvW21lZXR1cElEXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwibWVldHVwIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImlkIiwiTWVldHVwRGV0YWlsUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNoQyxzQkFDSTtBQUFBLDRCQUNJO0FBQUssU0FBRyxFQUFFQSxNQUFNLENBQUNDLEtBQWpCO0FBQXdCLFNBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLHNCQUFNRCxNQUFNLENBQUNFLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFBLGdCQUFVRixNQUFNLENBQUNHO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUEsZ0JBQUlILE1BQU0sQ0FBQ0k7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQVFILENBVEQ7O0tBQU1MLGE7QUFXU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNYSyxJQUFFLEVBQUcsSUFETTtBQUVYSCxPQUFLLEVBQUcsZ0JBRkc7QUFHWEQsT0FBSyxFQUFHLHFSQUhHO0FBSVhFLFNBQU8sRUFBRSxXQUpFO0FBS1hDLGFBQVcsRUFBRztBQUxILENBQWY7O0FBT0EsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBRTNCLHNCQUNJLHFFQUFDLHlFQUFEO0FBQWUsVUFBTSxFQUFFTjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHSCxDQUxEOztLQUFNTSxnQjtBQU9TQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwL1ttZWV0dXBJRF0uMmI0ODQ4MTlhNDc2MWMwNWFlNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1lZXR1cERldGFpbHMgPSAoe21lZXR1cH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e21lZXR1cC5pbWFnZX0gYWx0PVwibWVldHVwLWltYWdlXCIvPlxyXG4gICAgICAgICAgICA8aDE+IHttZWV0dXAudGl0bGV9IDwvaDE+XHJcbiAgICAgICAgICAgIDxhZGRyZXNzPnttZWV0dXAuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgICAgIDxwPnttZWV0dXAuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzOyIsImltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xyXG5cclxuY29uc3QgbWVldHVwID0ge1xyXG4gICAgaWQgOiBcIk0xXCIsXHJcbiAgICB0aXRsZSA6IFwiQSBmaXJzdCBNZWV0dXBcIixcclxuICAgIGltYWdlIDogXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC85Nzg5NzUzMDgvdHIvdmVrdCVDMyVCNnIveWFrbGElQzUlOUZhbi1vbGF5bGFyJUM0JUIxLW5lb24taSVDNSU5RmFyZXQtdmVrdCVDMyVCNnIteWFrbGElQzUlOUZhbi1vbGF5bGFyLXRhc2FyJUM0JUIxbS0lQzUlOUZhYmxvbnUtbmVvbi10YWJlbGEtJUM0JUIxJUM1JTlGJUM0JUIxay1hZmklQzUlOUYuanBnP3M9NjEyeDYxMiZ3PWlzJms9MjAmYz1YZ0dUQjdYS285RnVRZ1F6YlYxWmdUWE84OGQxbjR0UFlxN3JoTlVway1vPVwiLFxyXG4gICAgYWRkcmVzczogXCJBZGRyZXNzIDFcIixcclxuICAgIGRlc2NyaXB0aW9uIDogXCJJdCBpcyBzcGVjaWFsXCJcclxufTtcclxuY29uc3QgTWVldHVwRGV0YWlsUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZWV0dXBEZXRhaWxzIG1lZXR1cD17bWVldHVwfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==