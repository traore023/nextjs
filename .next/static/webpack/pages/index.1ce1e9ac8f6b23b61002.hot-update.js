webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
    //fetch data
    setMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(HomePage, "u0Xp+L4X3Modqy/8gJIQFYKfdYQ=");

_c = HomePage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJtZWV0dXBzIiwic2V0TWVldHVwcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsSUFBRSxFQUFHLElBRFQ7QUFFSUMsT0FBSyxFQUFHLGdCQUZaO0FBR0lDLE9BQUssRUFBRyxxUkFIWjtBQUlJQyxTQUFPLEVBQUUsV0FKYjtBQUtJQyxhQUFXLEVBQUc7QUFMbEIsQ0FEa0IsRUFRbEI7QUFDSUosSUFBRSxFQUFHLElBRFQ7QUFFSUMsT0FBSyxFQUFHLGdCQUZaO0FBR0lDLE9BQUssRUFBRyxzSUFIWjtBQUlJQyxTQUFPLEVBQUUsV0FKYjtBQUtJQyxhQUFXLEVBQUc7QUFMbEIsQ0FSa0IsRUFlbEI7QUFDSUosSUFBRSxFQUFHLElBRFQ7QUFFSUMsT0FBSyxFQUFHLGVBRlo7QUFHSUMsT0FBSyxFQUFHLG1FQUhaO0FBSUlDLFNBQU8sRUFBRSxXQUpiO0FBS0lDLGFBQVcsRUFBRztBQUxsQixDQWZrQixDQUF0Qjs7QUF1QkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNaQyxPQURZO0FBQUEsTUFDSEMsVUFERzs7QUFHbkJDLHlEQUFTLENBQUMsWUFBSTtBQUNWO0FBQ0FELGNBQVUsQ0FBQ1QsYUFBRCxDQUFWO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNJLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHSCxDQVhEOztHQUFNRixROztLQUFBQSxRO0FBYVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFjZTFlOWFjOGY2YjIzYjYxMDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiBcIk0xXCIsXHJcbiAgICAgICAgdGl0bGUgOiBcIkEgZmlyc3QgTWVldHVwXCIsXHJcbiAgICAgICAgaW1hZ2UgOiBcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzk3ODk3NTMwOC90ci92ZWt0JUMzJUI2ci95YWtsYSVDNSU5RmFuLW9sYXlsYXIlQzQlQjEtbmVvbi1pJUM1JTlGYXJldC12ZWt0JUMzJUI2ci15YWtsYSVDNSU5RmFuLW9sYXlsYXItdGFzYXIlQzQlQjFtLSVDNSU5RmFibG9udS1uZW9uLXRhYmVsYS0lQzQlQjElQzUlOUYlQzQlQjFrLWFmaSVDNSU5Ri5qcGc/cz02MTJ4NjEyJnc9aXMmaz0yMCZjPVhnR1RCN1hLbzlGdVFnUXpiVjFaZ1RYTzg4ZDFuNHRQWXE3cmhOVXBrLW89XCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJBZGRyZXNzIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiSXQgaXMgc3BlY2lhbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkIDogXCJNMlwiLFxyXG4gICAgICAgIHRpdGxlIDogXCJBbm90aGVyIE1lZXR1cFwiLFxyXG4gICAgICAgIGltYWdlIDogXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUdmZFMG5VTDhKX0tldUh0UmFEQ1FwRjBDa0tyTGphM0pPMXFPSGgySmJJZFZiTVdEbTlvSmZfaXN3NkRROWUzcTJqVG8mdXNxcD1DQVVcIixcclxuICAgICAgICBhZGRyZXNzOiBcIkFkZHJlc3MgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogXCJJdCBpcyBuaWNlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiBcIk0zXCIsXHJcbiAgICAgICAgdGl0bGUgOiBcIkEgbGFzdCBNZWV0dXBcIixcclxuICAgICAgICBpbWFnZSA6IFwiaHR0cHM6Ly93d3cuZm90b3dhcmUuY29tL2h1YmZzL3phY2hhcnktc3RhaW5lcy02NTIxNC11bnNwbGFzaC5wbmdcIixcclxuICAgICAgICBhZGRyZXNzOiBcIkFkZHJlc3MgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogXCJJdCBpcyBzdXBlciBjb29vb2xcIlxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttZWV0dXBzLCBzZXRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvL2ZldGNoIGRhdGFcclxuICAgICAgICBzZXRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e21lZXR1cHN9Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==