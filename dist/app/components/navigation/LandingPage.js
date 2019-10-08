"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _usersPage = _interopRequireDefault(require("../userProfile/usersPage"));

var _mainStyling = require("../../assets/styles/mainStyling");

var _userProfileStyling = require("../../assets/styles/userProfileStyling");

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

var LandingPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingPage, _Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "userFinder",
    value: function userFinder() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var loggedinUserId = user.id;
      var souseUserData = this.props.souseUserData;
      var souseUserList = ["" + loggedinUserId + ""],
          souseUsersList = new Set(souseUserList),
          souseFilterUserData = souseUserData.filter(function (souseUsersData) {
        return souseUsersList.has(souseUsersData._id);
      });
      return souseFilterUserData;
    }
  }, {
    key: "postFinder",
    value: function postFinder() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedinUserId = user.id;
      var sousePostData = this.props.sousePostData;
      var sousePostList = ["" + loggedinUserId + ""],
          sousePostsList = new Set(sousePostList),
          souseFilterPostData = sousePostData.filter(function (sousePostsData) {
        return sousePostsList.has(sousePostsData.postCreator);
      });
      return souseFilterPostData;
    }
  }, {
    key: "followFinder",
    value: function followFinder() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedinUserId = user.id;
      var souseFollowData = this.props.souseFollowData;
      var souseFollowList = ["" + loggedinUserId + ""],
          souseFollowsList = new Set(souseFollowList),
          souseFilterFollowData = souseFollowData.filter(function (souseFollowsData) {
        return souseFollowsList.has(souseFollowsData.initiatedFollowuserId);
      });
      return souseFilterFollowData;
    }
  }, {
    key: "followerFinder",
    value: function followerFinder() {
      var _this$props$auth4 = this.props.auth,
          isAuthenticated = _this$props$auth4.isAuthenticated,
          user = _this$props$auth4.user;
      var loggedinUserId = user.id;
      var souseFollowerData = this.props.souseFollowerData;
      var souseFollowerList = ["" + loggedinUserId + ""],
          souseFollowersList = new Set(souseFollowerList),
          souseFilterFollowerData = souseFollowerData.filter(function (souseFollowersData) {
        return souseFollowersList.has(souseFollowersData.receivedFollowUserId);
      });
      return souseFilterFollowerData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$auth5 = this.props.auth,
          isAuthenticated = _this$props$auth5.isAuthenticated,
          user = _this$props$auth5.user;
      var souseUserData = this.props.souseUserData;
      var loggedinUser = user.username;
      var loggedinUserId = user.id;
      var postsTotal = "" + this.postFinder().length + "";
      var followersTotal = "" + this.followerFinder().length + "";
      var followsTotal = "" + this.followFinder().length + "";
      return _react["default"].createElement("div", {
        "class": "container-fluid"
      }, Object.keys(this.userFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "container"
        }, _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, "   ", _react["default"].createElement(_userProfileStyling.SouseUserPageIcon, null, _react["default"].createElement("img", {
          className: "souseUserPageImage userHomePageImageBorder",
          src: _this.userFinder()[i].userImage,
          alt: "souseUserIcon",
          width: "85px",
          height: "85px"
        }))), _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, "   ", _react["default"].createElement("h2", null, _this.userFinder()[i].username)), _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, "   ", _react["default"].createElement("div", {
          "class": "col-4"
        }, _react["default"].createElement("h4", {
          "class": "float-right"
        }, postsTotal, " Posts")), _react["default"].createElement("div", {
          "class": "col-4"
        }, _react["default"].createElement("h4", {
          "class": "d-flex justify-content-center"
        }, followersTotal, " Followers")), _react["default"].createElement("div", {
          "class": "col-4"
        }, _react["default"].createElement("h4", {
          "class": "float-left"
        }, followsTotal, " Follows"))), Object.keys(_this.userFinder()).map(function (object, i) {
          return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
            to: {
              pathname: "/".concat(_this.userFinder()[i].username),
              state: {
                souseUserId: _this.userFinder()[i]._id,
                souseUserUsername: _this.userFinder()[i].username,
                souseUserFirstName: _this.userFinder()[i].firstName,
                souseUserLastName: souseUserData[i].lastName,
                souseUserEmail: _this.userFinder()[i].email,
                souseUserPassword: _this.userFinder()[i].password,
                souseUserSignUpDate: _this.userFinder()[i].signUpDate,
                souseUserImage: _this.userFinder()[i].userImage,
                souseUserTwitter: _this.userFinder()[i].userTwitter,
                souseUserFacebook: _this.userFinder()[i].userFacebook,
                souseUserInstagram: _this.userFinder()[i].userInstagram,
                souseUserLocation: _this.userFinder()[i].userLocation,
                souseUserBio: _this.userFinder()[i].userBio
              }
            }
          }, _react["default"].createElement("div", {
            "class": "row d-flex justify-content-center"
          }, "   ", _react["default"].createElement(_mainStyling.SouseButton, {
            type: "submit",
            className: "waves-effect waves-light btn-large"
          }, _react["default"].createElement("p", {
            "class": "lead buttonFont"
          }, "Confirm")))));
        }));
      }), isAuthenticated ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-6"
      }, _react["default"].createElement("img", {
        "class": "souseHomeLogo-navbar d-block justify-content-center",
        src: "../../src/app/assets/images/iPhoneXSMaxSouse.svg",
        width: "450",
        alt: "logo"
      })), _react["default"].createElement("div", {
        "class": "col-6"
      }, _react["default"].createElement("h1", {
        "class": "d-block justify-content-center"
      }, "Forms")))));
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