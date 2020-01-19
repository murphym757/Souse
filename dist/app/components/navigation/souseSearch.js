"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _mainStyling = require("../../assets/styles/mainStyling");

var _userProfileStyling = require("../../assets/styles/userProfileStyling");

var _materializeCss = _interopRequireDefault(require("materialize-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SouseSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(SouseSearch, _Component);

  function SouseSearch(props) {
    var _this;

    _classCallCheck(this, SouseSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SouseSearch).call(this, props));

    _this.handleChange = function (e) {
      _this.setState({
        usersFilter: e.target.value
      });

      _this.props.onChange(e.target.value);
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUserTheme = user.userTheme;
    _this.state = {
      usersFilter: ""
    };
    return _this;
  }

  _createClass(SouseSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement,
          _this2 = this;

      return _react["default"].createElement("div", {
        "class": "container-fluid m-0 p-0"
      }, _react["default"].createElement(_mainStyling.SouseForm, {
        onSubmit: this.onSubmit
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement = {
        id: "souseCaptionPost",
        "class": "materialize-textarea",
        name: "postCaption"
      }, _defineProperty(_React$createElement, "id", "souseCaptionPost"), _defineProperty(_React$createElement, "rows", "1"), _defineProperty(_React$createElement, "value", this.state.userSearch), _defineProperty(_React$createElement, "onChange", this.handleChange), _React$createElement)), _react["default"].createElement("label", {
        "for": "souseCaptionPost"
      }, "Search"))), _react["default"].createElement("div", {
        "class": "row"
      }, Object.keys(this.props.souseSearchedUsers).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3",
          obj: object,
          key: i
        }, _this2.state.usersFilter == "" ? _react["default"].createElement("div", null) : _react["default"].createElement(_mainStyling.SouseStyledLink, {
          to: "/".concat(_this2.props.souseSearchedUsers[i].username),
          onClick: function onClick() {
            return window.location.refresh();
          }
        }, _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement("div", {
          "class": "col-12"
        }, " ", _react["default"].createElement("div", {
          "class": "container"
        }, _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement(_userProfileStyling.SouseSearchUserIcon, {
          className: "mx-auto d-block justify-content-center"
        }, _react["default"].createElement("img", {
          className: "souseUserSearchImage userHomeSearchImageBorder",
          src: _this2.props.souseSearchedUsers[i].userImage,
          alt: "souseUserIcon",
          width: "45px",
          height: "45px"
        }))))), _react["default"].createElement("div", {
          "class": "col-12"
        }, " ", _react["default"].createElement("div", {
          "class": "container"
        }, _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement(_mainStyling.LinkFontH6, {
          className: "col-12 p-0 m-0 d-flex justify-content-center",
          style: {
            fontWeight: 600
          }
        }, _this2.props.souseSearchedUsers[i].username), _react["default"].createElement(_mainStyling.LinkFontH6, {
          className: "col-12 p-0 m-0 d-flex justify-content-center"
        }, _this2.props.souseSearchedUsers[i].firstName + " " + _this2.props.souseSearchedUsers[i].lastName)))))));
      })));
    }
  }]);

  return SouseSearch;
}(_react.Component);

SouseSearch.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(SouseSearch));

exports["default"] = _default;