webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Home/index.js":
/*!**********************************!*\
  !*** ./containers/Home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page */ "./components/Page/index.js");
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Label */ "./components/Label/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Input */ "./components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Form */ "./containers/Form/index.js");
/* harmony import */ var _lib_postURI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/postURI */ "./lib/postURI.js");
/* harmony import */ var _lib_postSubpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/postSubpart */ "./lib/postSubpart.js");



var _this = undefined,
    _jsxFileName = "/Users/olga/Code/shortly/client/containers/Home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    link: '',
    subpart: ''
  }),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isURLCreated = _useState3[0],
      setIsURLCreated = _useState3[1];

  var handleChange = function handleChange(event) {
    if (error) {
      setError('');
    } // setLinkValue(event.target.value);


    setValue(_objectSpread({}, value, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var handleSubmitURI = function handleSubmitURI(event) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmitURI$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsURLCreated(false);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_postURI__WEBPACK_IMPORTED_MODULE_8__["default"])({
              link: value.link
            }));

          case 4:
            result = _context.sent;

            if (result.created) {
              setValue(_objectSpread({}, value, {
                link: result.shortURI
              }));
              setIsURLCreated(true);
            } else {
              setError(result.error || result.message);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleSubmitSubpart = function handleSubmitSubpart(event) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmitSubpart$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();
            console.log('subpart: ', value.subpart);
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_postSubpart__WEBPACK_IMPORTED_MODULE_9__["default"])({
              subpart: value.subpart
            }));

          case 4:
            result = _context2.sent;
            console.log('result: ', result);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: isURLCreated ? handleSubmitSubpart : handleSubmitURI,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_components_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputId: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Enter your link"), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "link",
    id: "link",
    placeholder: "Paste your link",
    value: value.link,
    error: error,
    onChange: handleChange,
    disabled: isURLCreated,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), isURLCreated && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inputId: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "You can change subpart"), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "subpart",
    id: "subpart",
    placeholder: "Your new subpart",
    value: value.subpart,
    error: error,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  })), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "Send")));
});

/***/ })

})
//# sourceMappingURL=index.js.ada63c5fc607f934066e.hot-update.js.map