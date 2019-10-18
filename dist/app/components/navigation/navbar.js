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

var _navbarStyling = require("../../assets/styles/navbarStyling");

var _souseLogos = require("../../assets/images/souseLogos");

var _materializeCss = _interopRequireDefault(require("materialize-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));

    _this.onLogout = function (e) {
      e.preventDefault();

      _this.props.logoutUser(_this.props.history);
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUser = user.id;
    var loggedinUsername = user.username;
    var loggedinUserTheme = user.userTheme;
    console.log(loggedinUserTheme);
    _this.state = {
      navbarImage: "",
      currentTheme: "souseDefaultTheme"
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].Autocomplete.init(this.autocomplete);

      {
        /* Theme Finder */
      }
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var theme1 = "souseDefaultTheme";
      var theme2 = "souseIMTheme";
      var theme3 = "souseFPTheme";
      var theme4 = "souseViceTheme";
      var theme5 = "souseVapeTheme";
      var theme1Image = _souseLogos.souseDefaultLogo;
      var theme2Image = _souseLogos.souseIMLogo;
      var theme3Image = _souseLogos.souseFPLogo;
      var theme4Image = _souseLogos.souseViceLogo;
      var theme5Image = _souseLogos.souseVapeLogo;

      if (isAuthenticated) {
        var currentTheme = this.state.currentTheme;

        if (currentTheme == theme1) {
          this.setState({
            navbarImage: theme1Image
          });
        } else if (currentTheme == theme2) {
          this.setState({
            navbarImage: theme2Image
          });
        } else if (currentTheme == theme3) {
          this.setState({
            navbarImage: theme3Image
          });
        } else if (currentTheme == theme4) {
          this.setState({
            navbarImage: theme4Image
          });
        } else if (currentTheme == theme5) {
          this.setState({
            navbarImage: theme5Image
          });
        } else if (currentTheme == undefined) {
          this.setState({
            navbarImage: theme1Image
          });
        }
      } else {
        this.setState({
          navbarImage: theme1Image
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedinUser = user.username;
      var loggedinUserImage = user.userImage;

      var loggedInLinks = _react["default"].createElement("div", null, _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "sidenav-close",
        to: "/".concat(loggedinUser),
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, _react["default"].createElement(_navbarStyling.LoggedInUserIcon, null))), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        "class": "sidenav-close logoutClose",
        onClick: this.onLogout.bind(this)
      }, _react["default"].createElement(_navbarStyling.LogoutUserIcon, null))));

      var guestLinks = _react["default"].createElement("div", null, _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "sidenav-close",
        to: "/signup"
      }, "Sign Up")), _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "sidenav-close",
        to: "/login"
      }, "Login")));

      var navbarImage = this.state.navbarImage;
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "navbar-fixed"
      }, _react["default"].createElement(_navbarStyling.SouseNav, {
        className: "z-depth-0"
      }, _react["default"].createElement("div", {
        "class": "nav-wrapper container"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        "class": "brand-logo d-md-none py-3",
        to: "/"
      }, _react["default"].createElement("img", {
        "class": "souseHomeLogo-navbar",
        src: navbarImage,
        width: "125",
        alt: "logo"
      })), _react["default"].createElement(_reactRouterDom.Link, {
        "class": "brand-logo d-none d-md-block pl-3 py-3 px-4",
        to: "/"
      }, _react["default"].createElement("img", {
        "class": "souseHomeLogo-navbar",
        src: navbarImage,
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
      }, isAuthenticated ? loggedInLinks : guestLinks))), _react["default"].createElement(_navbarStyling.SouseSideNav, {
        className: "sidenav",
        id: "slide-out"
      }, isAuthenticated ? loggedInLinks : guestLinks)));
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