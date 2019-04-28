"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _footer = _interopRequireDefault(require("./navigation/footer"));

var _loginForm = _interopRequireDefault(require("./registration/loginForm"));

var _signUpForm = _interopRequireDefault(require("./registration/signUpForm"));

var _LandingPage = _interopRequireDefault(require("./navigation/LandingPage"));

var _userProfile = _interopRequireDefault(require("./userProfile/userProfile"));

var _Page = _interopRequireDefault(require("./navigation/404Page"));

var _navbar = _interopRequireDefault(require("./navigation/navbar"));

var _postsPage = _interopRequireDefault(require("./posts/postsPage"));

var _postEditForm = _interopRequireDefault(require("./posts/postEditForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MainSource =
/*#__PURE__*/
function (_Component) {
  _inherits(MainSource, _Component);

  function MainSource() {
    _classCallCheck(this, MainSource);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainSource).apply(this, arguments));
  }

  _createClass(MainSource, [{
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", null, _react.default.createElement(_navbar.default, null), _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        component: _LandingPage.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/signup",
        component: _signUpForm.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/login",
        component: _loginForm.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/:username",
        component: _userProfile.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/p/:id",
        component: _postsPage.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/p/edit/:id",
        component: _postEditForm.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        component: _Page.default
      })), _react.default.createElement("div", {
        class: "fixed-bottom"
      }, _react.default.createElement(_footer.default, null)))));
    }
  }]);

  return MainSource;
}(_react.Component);

MainSource.propTypes = {
  auth: _propTypes.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(MainSource);

exports.default = _default;