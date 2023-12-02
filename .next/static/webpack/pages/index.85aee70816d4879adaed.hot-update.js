webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "T:\\PROJECTS\\TRAINING\\REACT\\courseApplicationProjects\\19-next13-advanced\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: "M1",
  title: "A first Meetup",
  image: "https://media.istockphoto.com/id/978975308/tr/vekt%C3%B6r/yakla%C5%9Fan-olaylar%C4%B1-neon-i%C5%9Faret-vekt%C3%B6r-yakla%C5%9Fan-olaylar-tasar%C4%B1m-%C5%9Fablonu-neon-tabela-%C4%B1%C5%9F%C4%B1k-afi%C5%9F.jpg?s=612x612&w=is&k=20&c=XgGTB7XKo9FuQgQzbV1ZgTXO88d1n4tPYq7rhNUpk-o=",
  address: "Address 1",
  description: "It is special"
}, {
  id: "M2",
  title: "Another Meetup",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfE0nUL8J_KeuHtRaDCQpF0CkKrLja3JO1qOHh2JbIdVbMWDm9oJf_isw6DQ9e3q2jTo&usqp=CAU",
  address: "Address 2",
  description: "It is nice"
}, {
  id: "M3",
  title: "A last Meetup",
  image: "https://www.fotoware.com/hubfs/zachary-staines-65214-unsplash.png",
  address: "Address 3",
  description: "It is super cooool"
}];

var HomePage = function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      meetups = _useState[0],
      setMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setMeetups(DUMMY_MEETUPS);
    }, 2000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(HomePage, "u0Xp+L4X3Modqy/8gJIQFYKfdYQ=");

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJtZWV0dXBzIiwic2V0TWVldHVwcyIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUcsSUFEVDtBQUVJQyxPQUFLLEVBQUcsZ0JBRlo7QUFHSUMsT0FBSyxFQUFHLHFSQUhaO0FBSUlDLFNBQU8sRUFBRSxXQUpiO0FBS0lDLGFBQVcsRUFBRztBQUxsQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUcsSUFEVDtBQUVJQyxPQUFLLEVBQUcsZ0JBRlo7QUFHSUMsT0FBSyxFQUFHLHNJQUhaO0FBSUlDLFNBQU8sRUFBRSxXQUpiO0FBS0lDLGFBQVcsRUFBRztBQUxsQixDQVJrQixFQWVsQjtBQUNJSixJQUFFLEVBQUcsSUFEVDtBQUVJQyxPQUFLLEVBQUcsZUFGWjtBQUdJQyxPQUFLLEVBQUcsbUVBSFo7QUFJSUMsU0FBTyxFQUFFLFdBSmI7QUFLSUMsYUFBVyxFQUFHO0FBTGxCLENBZmtCLENBQXRCOztBQXVCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ1pDLE9BRFk7QUFBQSxNQUNIQyxVQURHOztBQUduQkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZDLGNBQVUsQ0FBQyxZQUFJO0FBQ1hGLGdCQUFVLENBQUNULGFBQUQsQ0FBVjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0kscUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUdILENBWkQ7O0dBQU1GLFE7O0tBQUFBLFE7O0FBaUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NWFlZTcwODE2ZDQ4NzlhZGFlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkIDogXCJNMVwiLFxyXG4gICAgICAgIHRpdGxlIDogXCJBIGZpcnN0IE1lZXR1cFwiLFxyXG4gICAgICAgIGltYWdlIDogXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC85Nzg5NzUzMDgvdHIvdmVrdCVDMyVCNnIveWFrbGElQzUlOUZhbi1vbGF5bGFyJUM0JUIxLW5lb24taSVDNSU5RmFyZXQtdmVrdCVDMyVCNnIteWFrbGElQzUlOUZhbi1vbGF5bGFyLXRhc2FyJUM0JUIxbS0lQzUlOUZhYmxvbnUtbmVvbi10YWJlbGEtJUM0JUIxJUM1JTlGJUM0JUIxay1hZmklQzUlOUYuanBnP3M9NjEyeDYxMiZ3PWlzJms9MjAmYz1YZ0dUQjdYS285RnVRZ1F6YlYxWmdUWE84OGQxbjR0UFlxN3JoTlVway1vPVwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiQWRkcmVzcyAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkl0IGlzIHNwZWNpYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZCA6IFwiTTJcIixcclxuICAgICAgICB0aXRsZSA6IFwiQW5vdGhlciBNZWV0dXBcIixcclxuICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVHZmRTBuVUw4Sl9LZXVIdFJhRENRcEYwQ2tLckxqYTNKTzFxT0hoMkpiSWRWYk1XRG05b0pmX2lzdzZEUTllM3EyalRvJnVzcXA9Q0FVXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJBZGRyZXNzIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiSXQgaXMgbmljZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkIDogXCJNM1wiLFxyXG4gICAgICAgIHRpdGxlIDogXCJBIGxhc3QgTWVldHVwXCIsXHJcbiAgICAgICAgaW1hZ2UgOiBcImh0dHBzOi8vd3d3LmZvdG93YXJlLmNvbS9odWJmcy96YWNoYXJ5LXN0YWluZXMtNjUyMTQtdW5zcGxhc2gucG5nXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJBZGRyZXNzIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiSXQgaXMgc3VwZXIgY29vb29sXCJcclxuICAgIH0sXHJcbl1cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVldHVwcywgc2V0TWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzZXRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17bWVldHVwc30vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9