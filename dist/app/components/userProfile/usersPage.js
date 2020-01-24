"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _userProfile = _interopRequireDefault(require("../userProfile/userProfile"));

var _Page = _interopRequireDefault(require("../navigation/404Page"));

var _mainStyling = require("../../assets/styles/mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserPage =
/*#__PURE__*/
function (_Component) {
  _inherits(UserPage, _Component);

  function UserPage(props) {
    var _this;

    _classCallCheck(this, UserPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserPage).call(this, props));
    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedInUsername = user.username;
    var loggedInUserId = user.id;
    var usernameFinder = window.location.pathname;
    var usernameFound = usernameFinder.slice(1);
    _this.state = {
      postCreatorUsername: usernameFound,
      creatorUserId: "",
      isLoading: true
    };
    return _this;
  }

  _createClass(UserPage, [{
    key: "userFinder",
    value: function userFinder() {
      var _this2 = this;

      var souseUserData = this.props.souseUserData;
      var filteredUsernameData = Object.keys(souseUserData).filter(function (i) {
        return souseUserData[i].username === "" + _this2.state.postCreatorUsername + "";
      }),
          userIdFinder = Object.keys(souseUserData).map(function (object, i) {
        return souseUserData[filteredUsernameData]._id;
      }),
          userId = userIdFinder.find(function (i) {
        return "" + userIdFinder[0] + "";
      });
      var souseUserList = ["" + userId + ""],
          souseUsersList = new Set(souseUserList),
          souseFilterUsers = souseUserData.filter(function (souseUserData) {
        return souseUsersList.has(souseUserData._id);
      });
      var sousePostData = this.props.sousePostData;
      var souseFollowData = this.props.souseFollowData;
      var souseFollowerData = this.props.souseFollowerData;
      var userData = souseFilterUsers.map(function (object, i) {
        return _react["default"].createElement(_userProfile["default"], {
          obj: object,
          key: i,
          souseUserData: souseUserData,
          sousePostData: sousePostData,
          souseFollowData: souseFollowData,
          souseFollowerData: souseFollowerData
        });
      });
      return userData;
    }
  }, {
    key: "userNotFound",
    value: function userNotFound() {
      var errorRoute = _react["default"].createElement(_Page["default"], null);

      return errorRoute;
    }
  }, {
    key: "pageLoader",
    value: function pageLoader() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          isLoading: false
        });
      }, 2500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var souseUserData = this.props.souseUserData;
      var isLoading = this.state.isLoading;
      return _react["default"].createElement("div", null, isLoading == true ? _react["default"].createElement("div", {
        "class": "d-flex justify-content-center"
      }, _react["default"].createElement(_mainStyling.SouseSpinner, null)) : _react["default"].createElement("div", null, souseUserData.filter(function (i) {
        return i.username === "" + _this4.state.postCreatorUsername + "";
      }).length > 0 ? _react["default"].createElement("div", null, this.userFinder()) : _react["default"].createElement("div", null, this.userNotFound())), this.pageLoader());
    }
  }]);

  return UserPage;
}(_react.Component);

UserPage.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(UserPage);

exports["default"] = _default;