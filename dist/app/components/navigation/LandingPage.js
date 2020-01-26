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

var _signUpForm = _interopRequireDefault(require("../registration/signUpForm"));

var _loginForm = _interopRequireDefault(require("../registration/loginForm"));

var _registrationStyling = require("../../assets/styles/registrationStyling");

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

var LandingPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingPage, _Component);

  function LandingPage(props) {
    var _this;

    _classCallCheck(this, LandingPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).call(this, props));
    _this.state = {
      connectionOption: "1",
      isLoading: true
    };
    return _this;
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
    key: "pageLoader",
    value: function pageLoader() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          isLoading: false
        });
      }, 1500);
    }
  }, {
    key: "postCountConverter",
    value: function postCountConverter() {
      var postsTotal = "" + this.postFinder().length + "";

      if (postsTotal >= 1000000) {
        postsTotal = (postsTotal / 1000000).toFixed(1) + "M";
      } else if (postsTotal >= 1000) {
        postsTotal = (postsTotal / 1000).toFixed(1) + "K";
      } else if (postsTotal <= 999) {
        postsTotal = postsTotal;
      }

      return postsTotal;
    }
  }, {
    key: "followerCountConverter",
    value: function followerCountConverter() {
      var followersTotal = "" + this.followerFinder().length + "";

      if (followersTotal >= 1000000) {
        followersTotal = (followersTotal / 1000000).toFixed(1) + "M";
      } else if (followersTotal >= 1000) {
        followersTotal = (followersTotal / 1000).toFixed(1) + "K";
      } else if (followersTotal <= 999) {
        followersTotal = followersTotal;
      }

      return followersTotal;
    }
  }, {
    key: "followCountConverter",
    value: function followCountConverter() {
      var followsTotal = "" + this.followFinder().length + "";

      if (followsTotal >= 1000000) {
        followsTotal = (followsTotal / 1000000).toFixed(1) + "M";
      } else if (followsTotal >= 1000) {
        followsTotal = (followsTotal / 1000).toFixed(1) + "K";
      } else if (followsTotal <= 999) {
        followsTotal = followsTotal;
      }

      return followsTotal;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$auth5 = this.props.auth,
          isAuthenticated = _this$props$auth5.isAuthenticated,
          user = _this$props$auth5.user;
      var souseUserData = this.props.souseUserData;
      var loggedinUser = user.username;
      var loggedinUserId = user.id;
      var isLoading = this.state.isLoading;
      var connectionOption = this.state.connectionOption;
      var postsTotal = "" + this.postFinder().length + "";
      var followersTotal = "" + this.followerFinder().length + "";
      var followsTotal = "" + this.followFinder().length + "";
      return _react["default"].createElement("div", null, isLoading == true ? _react["default"].createElement("div", {
        "class": "d-flex justify-content-center"
      }, _react["default"].createElement(_mainStyling.SouseSpinner, null)) : _react["default"].createElement("div", null, Object.keys(this.userFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "container-fluid"
        }, _react["default"].createElement("div", {
          "class": "row mx-auto my-auto"
        }, _react["default"].createElement(_userProfileStyling.SouseColumnLanding, {
          className: "mx-auto my-auto"
        }, _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, "   ", _react["default"].createElement(_userProfileStyling.SouseUserPageIconLanding, null, _react["default"].createElement("img", {
          className: "souseUserPageLandingImage",
          src: _this3.userFinder()[i].userImage,
          alt: "souseUserIcon",
          width: "85px",
          height: "85px"
        })))), _react["default"].createElement(_userProfileStyling.SouseColumnLanding, {
          className: "mx-auto my-auto"
        }, _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, "   ", _react["default"].createElement("h2", null, _this3.userFinder()[i].username)), _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, "   ", _react["default"].createElement("div", {
          "class": "col-4 d-flex justify-content-center"
        }, _react["default"].createElement("h5", null, _react["default"].createElement("b", null, _this3.postCountConverter()), " Posts")), _react["default"].createElement("div", {
          "class": "col-4 d-flex justify-content-center"
        }, _react["default"].createElement("h5", null, _react["default"].createElement("b", null, _this3.followerCountConverter()), " Followers")), _react["default"].createElement("div", {
          "class": "col-4 d-flex justify-content-center"
        }, _react["default"].createElement("h5", null, _react["default"].createElement("b", null, _this3.followCountConverter()), " Follows"))), Object.keys(_this3.userFinder()).map(function (object, i) {
          return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
            to: {
              pathname: "/".concat(_this3.userFinder()[i].username),
              state: {
                souseUserId: _this3.userFinder()[i]._id,
                souseUserUsername: _this3.userFinder()[i].username,
                souseUserFirstName: _this3.userFinder()[i].firstName,
                souseUserLastName: _this3.userFinder()[i].lastName,
                souseUserEmail: _this3.userFinder()[i].email,
                souseUserPassword: _this3.userFinder()[i].password,
                souseUserSignUpDate: _this3.userFinder()[i].signUpDate,
                souseUserImage: _this3.userFinder()[i].userImage,
                souseNewUserImageSetup: _this3.userFinder()[i].newUserImageSetup,
                souseUserTwitter: _this3.userFinder()[i].userTwitter,
                souseUserFacebook: _this3.userFinder()[i].userFacebook,
                souseUserInstagram: _this3.userFinder()[i].userInstagram,
                souseUserLocation: _this3.userFinder()[i].userLocation,
                souseUserBio: _this3.userFinder()[i].userBio
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
        }))));
      }), isAuthenticated ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "container-fluid"
      }, connectionOption == '1' ? _react["default"].createElement("div", {
        "class": "row h-100 m-0 p-0"
      }, _react["default"].createElement(_registrationStyling.IphoneContainer, {
        className: "col-sm-6"
      }, _react["default"].createElement(_registrationStyling.IphoneOuterImage, {
        "class": "souseHomeLogo-navbar d-block justify-content-center pt-5",
        src: "../../src/app/assets/images/iPhoneXSMaxSouse.svg",
        width: "450",
        alt: "logo"
      })), _react["default"].createElement(_registrationStyling.FormContainer, {
        className: "col-sm-6"
      }, _react["default"].createElement("div", {
        "class": "my-auto"
      }, _react["default"].createElement(_loginForm["default"], null)), _react["default"].createElement("div", {
        "class": "d-none d-xl-block"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement(_mainStyling.ConnectionOptionsLink, {
        className: "pt-2 d-flex justify-content-center",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            connectionOption: '2'
          });
        }
      }, "Sign Up"))), _react["default"].createElement("div", {
        "class": "d-xl-none"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement(_mainStyling.ConnectionOptionsLink, {
        className: "pt-2 d-flex justify-content-center",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            connectionOption: '2'
          });
        }
      }, "Sign Up"))))) : _react["default"].createElement("div", {
        "class": "row h-100 m-0 p-0"
      }, _react["default"].createElement("div", {
        "class": "col-sm-12 mx-auto my-auto"
      }, _react["default"].createElement("div", {
        "class": "container-fluid m-0 p-0"
      }, _react["default"].createElement(_signUpForm["default"], null), _react["default"].createElement(_mainStyling.ConnectionOptionsLink, {
        className: "pt-2 d-flex justify-content-center",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            connectionOption: '1'
          });
        }
      }, "Log In")))))), this.pageLoader());
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