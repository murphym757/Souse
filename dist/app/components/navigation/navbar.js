"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _authentication = require("../../../server/actions/authentication");

var _materializeCss = _interopRequireDefault(require("materialize-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onLogout = function (e) {
      e.preventDefault();

      _this.props.logoutUser(_this.props.history);
    };

    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;

      var loggedInLinks = _react["default"].createElement("div", null, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        "class": "sidenav-close logoutClose",
        onClick: this.onLogout.bind(this)
      }, "Log Out")));

      var guestLinks = _react["default"].createElement("div", null, _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "sidenav-close",
        to: "/signup"
      }, "Sign Up")), _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "sidenav-close",
        to: "/login"
      }, "Login")));

      return _react["default"].createElement("div", null, _react["default"].createElement("nav", {
        "class": "z-depth-0"
      }, _react["default"].createElement("div", {
        "class": "nav-wrapper container-fluid"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "brand-logo d-md-none py-3",
        to: "/"
      }, _react["default"].createElement("img", {
        "class": "souseHomeLogo-navbar",
        src: "../../src/app/assets/images/souseBigLogo.svg",
        width: "125",
        alt: "logo"
      })), _react["default"].createElement(_reactRouterDom.Link, {
        "class": "brand-logo d-none d-md-block pl-3 py-3 px-4",
        to: "/"
      }, _react["default"].createElement("img", {
        "class": "souseHomeLogo-navbar",
        src: "../../src/app/assets/images/souseBigLogo.svg",
        width: "125",
        alt: "logo"
      })), _react["default"].createElement("a", {
        href: "#",
        "data-target": "slide-out",
        "class": "sidenav-trigger"
      }, _react["default"].createElement("span", null, _react["default"].createElement("i", {
        "class": "fas fa-ellipsis-h"
      }))), _react["default"].createElement("ul", {
        "class": "right hide-on-med-and-down"
      }, isAuthenticated ? loggedInLinks : guestLinks))), _react["default"].createElement("ul", {
        "class": "sidenav",
        id: "slide-out"
      }, isAuthenticated ? loggedInLinks : guestLinks));
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  logoutUser: _propTypes["default"].func.isRequired,
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  logoutUser: _authentication.logoutUser
})((0, _reactRouterDom.withRouter)(Navbar));

exports["default"] = _default;