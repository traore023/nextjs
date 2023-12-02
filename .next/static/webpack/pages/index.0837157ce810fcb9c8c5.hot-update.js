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

var HomePage = function HomePage(props) {
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
    meetups: props.meetups
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1lZXR1cHMiLCJzZXRNZWV0dXBzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ2xCO0FBQ0lDLElBQUUsRUFBRyxJQURUO0FBRUlDLE9BQUssRUFBRyxnQkFGWjtBQUdJQyxPQUFLLEVBQUcscVJBSFo7QUFJSUMsU0FBTyxFQUFFLFdBSmI7QUFLSUMsYUFBVyxFQUFHO0FBTGxCLENBRGtCLEVBUWxCO0FBQ0lKLElBQUUsRUFBRyxJQURUO0FBRUlDLE9BQUssRUFBRyxnQkFGWjtBQUdJQyxPQUFLLEVBQUcsc0lBSFo7QUFJSUMsU0FBTyxFQUFFLFdBSmI7QUFLSUMsYUFBVyxFQUFHO0FBTGxCLENBUmtCLEVBZWxCO0FBQ0lKLElBQUUsRUFBRyxJQURUO0FBRUlDLE9BQUssRUFBRyxlQUZaO0FBR0lDLE9BQUssRUFBRyxtRUFIWjtBQUlJQyxTQUFPLEVBQUUsV0FKYjtBQUtJQyxhQUFXLEVBQUc7QUFMbEIsQ0Fma0IsQ0FBdEI7O0FBdUJBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1JDLFVBRFE7O0FBR3hCQyx5REFBUyxDQUFDLFlBQUk7QUFDVkMsY0FBVSxDQUFDLFlBQUk7QUFDWEYsZ0JBQVUsQ0FBQ1YsYUFBRCxDQUFWO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDSSxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRU8sS0FBSyxDQUFDRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHSCxDQVpEOztHQUFNSCxROztLQUFBQSxROztBQXdCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDgzNzE1N2NlODEwZmNiOWM4YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZCA6IFwiTTFcIixcclxuICAgICAgICB0aXRsZSA6IFwiQSBmaXJzdCBNZWV0dXBcIixcclxuICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvOTc4OTc1MzA4L3RyL3Zla3QlQzMlQjZyL3lha2xhJUM1JTlGYW4tb2xheWxhciVDNCVCMS1uZW9uLWklQzUlOUZhcmV0LXZla3QlQzMlQjZyLXlha2xhJUM1JTlGYW4tb2xheWxhci10YXNhciVDNCVCMW0tJUM1JTlGYWJsb251LW5lb24tdGFiZWxhLSVDNCVCMSVDNSU5RiVDNCVCMWstYWZpJUM1JTlGLmpwZz9zPTYxMng2MTImdz1pcyZrPTIwJmM9WGdHVEI3WEtvOUZ1UWdRemJWMVpnVFhPODhkMW40dFBZcTdyaE5VcGstbz1cIixcclxuICAgICAgICBhZGRyZXNzOiBcIkFkZHJlc3MgMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogXCJJdCBpcyBzcGVjaWFsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiBcIk0yXCIsXHJcbiAgICAgICAgdGl0bGUgOiBcIkFub3RoZXIgTWVldHVwXCIsXHJcbiAgICAgICAgaW1hZ2UgOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1R2ZkUwblVMOEpfS2V1SHRSYURDUXBGMENrS3JMamEzSk8xcU9IaDJKYklkVmJNV0RtOW9KZl9pc3c2RFE5ZTNxMmpUbyZ1c3FwPUNBVVwiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiQWRkcmVzcyAyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkl0IGlzIG5pY2VcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZCA6IFwiTTNcIixcclxuICAgICAgICB0aXRsZSA6IFwiQSBsYXN0IE1lZXR1cFwiLFxyXG4gICAgICAgIGltYWdlIDogXCJodHRwczovL3d3dy5mb3Rvd2FyZS5jb20vaHViZnMvemFjaGFyeS1zdGFpbmVzLTY1MjE0LXVuc3BsYXNoLnBuZ1wiLFxyXG4gICAgICAgIGFkZHJlc3M6IFwiQWRkcmVzcyAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkl0IGlzIHN1cGVyIGNvb29vbFwiXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbWVldHVwcywgc2V0TWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzZXRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICAvLyBkbyBEQiBjb25uZWN0aW9uIGhlcmUsIGRhdGEgZmV0Y2gsIGV0Yy4gTmV2ZXIgcmVhY2hlcyBjbGllbnQgbWFjaGluZVxyXG4gICAgLy8gd2lsbCBiZSBleGVjdXRlZCBvbiB0aGUgc2VydmVyLCBjYXVzZSBpdCBpcyBydW4gZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wcyA6IHtcclxuICAgICAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=