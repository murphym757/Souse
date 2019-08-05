"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _userProfile = _interopRequireDefault(require("../userProfile/userProfile"));

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

var LandingPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingPage, _Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "followFinder",
    value: function followFinder() {
      var souseFollowData = this.props.souseFollowData;
      var filteredFollowData = Object.keys(souseFollowData).filter(function (i) {
        // Finds Specific Post
        return souseFollowData[i].initiatedFollowuserId === "" + loggedinUserId + "";
      }),
          followIdFinder = Object.keys(souseFollowData).map(function (object, i) {
        return souseFollowData[filteredFollowData]._id;
      }),
          followId = followIdFinder.find(function (i) {
        return "" + followIdFinder[0] + "";
      });
    }
  }, {
    key: "followerFinder",
    value: function followerFinder() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var loggedinUserId = user.id;
      var souseFollowerData = this.props.souseFollowerData;
      var filteredFollowerData = Object.keys(souseFollowerData).filter(function (i) {
        // Finds Specific Post
        return souseFollowerData[i].receivedFollowUserId === "" + loggedinUserId + "";
      }),
          followerIdFinder = Object.keys(souseFollowerData).map(function (object, i) {
        return souseFollowerData[filteredFollowerData]._id;
      }),
          followerId = followerIdFinder.find(function (i) {
        return "" + followerIdFinder[0] + "";
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var souseUserData = this.props.souseUserData;
      var loggedinUser = user.username;
      var loggedinUserId = user.id;
      return _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("h2", null, "LandingPage"), isAuthenticated ? _react["default"].createElement("div", null, _react["default"].createElement("h4", null, loggedinUser)) : _react["default"].createElement("div", null, _react["default"].createElement("h4", null, "Not Logged In")), _react["default"].createElement("div", {
        "class": "usersPosts"
      }, Object.keys(souseUserData).map(function (object, i) {
        return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: {
            pathname: "/".concat(souseUserData[i].username),
            state: {
              souseUserId: souseUserData[i]._id,
              souseUserUsername: souseUserData[i].username,
              souseUserFirstName: souseUserData[i].firstName,
              souseUserLastName: souseUserData[i].lastName,
              souseUserEmail: souseUserData[i].email,
              souseUserPassword: souseUserData[i].password,
              souseUserSignUpDate: souseUserData[i].signUpDate,
              souseUserImage: souseUserData[i].userImage,
              souseUserTwitter: souseUserData[i].userTwitter,
              souseUserFacebook: souseUserData[i].userFacebook,
              souseUserInstagram: souseUserData[i].userInstagram,
              souseUserLocation: souseUserData[i].userLocation,
              souseUserBio: souseUserData[i].userBio
            }
          }
        }, souseUserData[i].username));
      })));
    }
  }]);

  return LandingPage;
}(_react.Component);

LandingPage.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(LandingPage);

exports["default"] = _default;