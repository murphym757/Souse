"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _postForm = _interopRequireDefault(require("../posts/postForm"));

var _souseSearch = _interopRequireDefault(require("./souseSearch"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _mainStyling = require("../../assets/styles/mainStyling");

var _materializeCss = _interopRequireDefault(require("materialize-css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SouseIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(SouseIndex, _Component);

  function SouseIndex(props) {
    var _this;

    _classCallCheck(this, SouseIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SouseIndex).call(this, props));

    _this.filterList = function (usersFilter) {
      var filteredUsers = _this.state.souseUsers;
      filteredUsers = filteredUsers.filter(function (i) {
        var searchedUsername = i.username.toLowerCase();
        return searchedUsername.indexOf(usersFilter.toLowerCase()) !== -1;
      });

      _this.setState({
        filteredUsers: filteredUsers
      });

      console.log(filteredUsers);
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUserTheme = user.userTheme;
    var souseUserData = _this.props.souseUserData;
    _this.state = {
      checked: false,
      userSearch: "",
      souseUsers: souseUserData,
      filteredUsers: [],
      switchColor: "",
      switchHandleColor: "",
      currentTheme: "souseIMTheme" //loggedinUserTheme

    };
    _this.handleThemeChange = _this.handleThemeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SouseIndex, [{
    key: "handleThemeChange",
    value: function handleThemeChange(checked) {
      this.setState({
        checked: checked
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var souseUsers = this.state.souseUsers;
      this.setState({
        souseUsers: souseUsers,
        filteredUsers: souseUsers
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();

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

      if (isAuthenticated) {
        var currentTheme = this.state.currentTheme;

        if (currentTheme == theme1) {
          this.setState({
            switchColor: "#ff9496",
            switchHandleColor: "#c45758"
          });
        } else if (currentTheme == theme2) {
          this.setState({
            switchColor: "#797878",
            switchHandleColor: "#231f20"
          });
        } else if (currentTheme == theme3) {
          this.setState({
            switchColor: "#4b6fa3",
            switchHandleColor: "#2c4160"
          });
        } else if (currentTheme == theme4) {
          this.setState({
            switchColor: "#a0ecff",
            switchHandleColor: "#d780b5"
          });
        } else if (currentTheme == theme5) {
          this.setState({
            switchColor: "#aaffff",
            switchHandleColor: "#64c3a7"
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var souseUserData = this.props.souseUserData;
      var usernameUserPage = this.props.userPageCreatorUsername;
      var loggedInUsername = this.props.loggedInUsername;
      var souseFormState = this.state.souseFormState;
      var switchColor = this.state.switchColor;
      var switchHandleColor = this.state.switchHandleColor;
      return _react["default"].createElement("div", null, isAuthenticated ? _react["default"].createElement("div", null, usernameUserPage === loggedInUsername ? _react["default"].createElement("div", null, _react["default"].createElement("h6", null, "Loggedin and OG User")) : _react["default"].createElement("div", null, _react["default"].createElement("h6", null, "Loggedin, but not OG User"))) : _react["default"].createElement("div", null, _react["default"].createElement("h6", null, "Just visiting")), _react["default"].createElement("div", {
        "class": "collapse",
        id: "postCreateCollapse"
      }, _react["default"].createElement("div", {
        "class": "postCreateCollapse"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-10"
      }, this.state.checked ? _react["default"].createElement(_souseSearch["default"], {
        souseSearchedUsers: this.state.filteredUsers,
        match: this.props.match,
        onChange: this.filterList
      }) : _react["default"].createElement(_postForm["default"], null)), _react["default"].createElement("div", {
        "class": "col-2"
      }, _react["default"].createElement("label", null, "Off", _react["default"].createElement(_reactSwitch["default"], {
        checked: this.state.checked,
        onChange: this.handleThemeChange,
        onColor: switchColor,
        onHandleColor: switchHandleColor,
        handleDiameter: 30,
        uncheckedIcon: false,
        checkedIcon: false,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
        activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: 20,
        width: 48,
        className: "react-switch",
        id: "material-switch"
      }), "On")))))), _react["default"].createElement("div", {
        "class": "collapse",
        id: "searchCollapse"
      }, _react["default"].createElement("div", {
        "class": "searchCollapse"
      }, _react["default"].createElement("h3", null, "test space"))), _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "fixed-action-btn pb-2"
      }, " ", _react["default"].createElement(_mainStyling.CreateIconLink, {
        className: "btn-floating btn-large addPostButton"
      }, _react["default"].createElement(_mainStyling.CreateIcon, {
        className: "fas fa-plus fa-xs",
        "data-toggle": "collapse",
        href: "#postCreateCollapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "postCreateCollapse"
      })))));
    }
  }]);

  return SouseIndex;
}(_react.Component);

SouseIndex.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(SouseIndex);

exports["default"] = _default;