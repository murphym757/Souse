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

var _postIndex = _interopRequireDefault(require("../posts/postIndex"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Twitter = require("styled-icons/feather/Twitter");

var _Facebook = require("styled-icons/feather/Facebook");

var _Instagram = require("styled-icons/feather/Instagram");

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

var UserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile(props) {
    var _this;

    _classCallCheck(this, UserProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserProfile).call(this, props));
    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedInUsername = user.username;
    var loggedInUserId = user.id;
    var _this$props$location$ = _this.props.location.state,
        souseUserId = _this$props$location$.souseUserId,
        souseUserUsername = _this$props$location$.souseUserUsername,
        souseUserFirstName = _this$props$location$.souseUserFirstName,
        souseUserLastName = _this$props$location$.souseUserLastName,
        souseUserPassword = _this$props$location$.souseUserPassword,
        souseUserSignUpDate = _this$props$location$.souseUserSignUpDate;
    var usernameFinder = window.location.pathname;
    var usernameFound = usernameFinder.slice(1);
    var twitterUsername = "SeaP305";
    var twitterUsernameURL = "https://mobile.twitter.com/" + twitterUsername + "";
    var facebookUsername = null;
    var facebookUsernameURL = "https://www.facebook.com/" + facebookUsername + "/";
    var instagramUsername = "seapanther_305";
    var instagramUsernameURL = "https://www.instagram.com/" + instagramUsername + "/";
    var userLocation = "Miami";
    var userBio = "Hi my name is my name. duh! :)";
    _this.state = {
      postCreatorId: souseUserId,
      postCreatorUsername: souseUserUsername,
      postCreatorFirstName: souseUserFirstName,
      postCreatorLastName: souseUserLastName,
      postCreatorPassword: souseUserPassword,
      postCreatorSignUpDate: souseUserSignUpDate,
      postTotalDisplay: '1',
      postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
      postCreatorTwitter: twitterUsername,
      postCreatorTwitterURL: twitterUsernameURL,
      postCreatorFacebook: facebookUsername,
      postCreatorFacebookURL: facebookUsernameURL,
      postCreatorInstagram: instagramUsername,
      postCreatorInstagramURL: instagramUsernameURL,
      postCreatorLocation: userLocation,
      postCreatorBio: userBio
    };
    return _this;
  }

  _createClass(UserProfile, [{
    key: "postFinder",
    value: function postFinder() {
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
      var sousePostData = this.props.sousePostData;
      var souseUserList = ["" + userId + ""],
          sousePostsList = new Set(souseUserList),
          souseFilterData = sousePostData.filter(function (sousePostData) {
        return sousePostsList.has(sousePostData.postCreator);
      });
      return souseFilterData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedInUsername = user.username;
      var loggedInUserId = user.id;
      var loggedInUserFirstname = user.firstName;
      var usernamePage = this.props.match.params.username;
      var postCreatorId = this.state.postCreatorId;
      var postCreatorUsername = this.state.postCreatorUsername;
      var postCreatorFirstName = this.state.postCreatorFirstName;
      var postCreatorLastName = this.state.postCreatorLastName;
      var postCreatorPassword = this.state.postCreatorPassword;
      var postCreatorSignUpDate = this.state.postCreatorSignUpDate;
      var postCreatorImage = this.state.postCreatorImage;
      var postCreatorTwitter = this.state.postCreatorTwitter;
      var postCreatorFacebook = this.state.postCreatorFacebook;
      var postCreatorInstagram = this.state.postCreatorInstagram;
      var postCreatorLocation = this.state.postCreatorLocation;
      var postCreatorBio = this.state.postCreatorBio;
      var postsTotal = "" + this.postFinder().length + "";
      var TwitterIcon = (0, _styledComponents["default"])(_Twitter.Twitter).withConfig({
        displayName: "userProfile__TwitterIcon",
        componentId: "sc-16lkwtc-0"
      })(["color:blue;height:1.1em;width:1.5em;"]);
      var FacebookIcon = (0, _styledComponents["default"])(_Facebook.Facebook).withConfig({
        displayName: "userProfile__FacebookIcon",
        componentId: "sc-16lkwtc-1"
      })(["color:blue;height:1.1em;width:1.5em;"]);
      var InstagramIcon = (0, _styledComponents["default"])(_Instagram.Instagram).withConfig({
        displayName: "userProfile__InstagramIcon",
        componentId: "sc-16lkwtc-2"
      })(["color:blue;height:1.1em;width:1.5em;"]);
      return _react["default"].createElement("div", {
        "class": "container pt-5"
      }, _react["default"].createElement("div", {
        "class": "row userHeaderSection d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "profilePageUserImage d-flex justify-content-center"
      }, " ", _react["default"].createElement("div", {
        "class": "souseUserCreatorPage col-6 d-flex"
      }, _react["default"].createElement("div", {
        "class": "container-fluid d-flex justify-content-center"
      }, _react["default"].createElement("img", {
        "class": "souseUserIconUserHomePage",
        src: postCreatorImage,
        alt: "souseUserIcon",
        width: "85px",
        height: "85px"
      }))), _react["default"].createElement("div", {
        "class": "profilePageUserData d-flex justify-content-center"
      }, " ", _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row col-12 userNameRow"
      }, _react["default"].createElement("h2", {
        "class": "d-flex justify-content-center"
      }, this.state.postCreatorUsername), _react["default"].createElement(_reactRouterDom.Link, {
        to: {
          pathname: "/u/edit/" + loggedInUserId,
          state: {
            postCreatorId: postCreatorId,
            postCreatorUsername: postCreatorUsername,
            postCreatorFirstName: postCreatorFirstName,
            postCreatorLastName: postCreatorLastName,
            postCreatorPassword: postCreatorPassword,
            postCreatorSignUpDate: postCreatorSignUpDate,
            postCreatorImage: postCreatorImage,
            postCreatorTwitter: postCreatorTwitter,
            postCreatorFacebook: postCreatorFacebook,
            postCreatorInstagram: postCreatorInstagram,
            postCreatorLocation: postCreatorLocation,
            postCreatorBio: postCreatorBio
          }
        }
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Edit Profile")))), _react["default"].createElement("div", {
        "class": "row col-12 userNumericDataRow"
      }, this.state.postTotalDisplay === postsTotal ? _react["default"].createElement("h6", {
        "class": "col d-flex justify-content-center"
      }, postsTotal, " post") : _react["default"].createElement("h6", {
        "class": "col d-flex justify-content-center"
      }, postsTotal, " posts")), _react["default"].createElement("div", {
        "class": "row userAltContactRow"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, this.state.postCreatorTwitter === null ? _react["default"].createElement("div", null) : _react["default"].createElement("h6", {
        "class": "col-12 d-flex justify-content-center"
      }, _react["default"].createElement("a", {
        href: this.state.postCreatorTwitterURL,
        target: "_blank"
      }, _react["default"].createElement(TwitterIcon, null), " ", this.state.postCreatorTwitter)), this.state.postCreatorFacebook === null ? _react["default"].createElement("div", null) : _react["default"].createElement("h6", {
        "class": "col-12 d-flex justify-content-center"
      }, _react["default"].createElement("a", {
        href: this.state.postCreatorFacebookURL,
        target: "_blank"
      }, _react["default"].createElement(FacebookIcon, null), " ", this.state.postCreatorFacebook)), this.state.postCreatorInstagram === null ? _react["default"].createElement("div", null) : _react["default"].createElement("h6", {
        "class": "col-12 d-flex justify-content-center"
      }, _react["default"].createElement("a", {
        href: this.state.postCreatorInstagramURL,
        target: "_blank"
      }, _react["default"].createElement(InstagramIcon, null), " ", this.state.postCreatorInstagram)))))))), _react["default"].createElement("div", {
        "class": "col-12"
      }, isAuthenticated ? _react["default"].createElement("div", null, _react["default"].createElement(_postIndex["default"], null)) : _react["default"].createElement("div", null))), _react["default"].createElement("div", {
        "class": "d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row pb-2 col d-flex justify-content-center"
      }, Object.keys(this.postFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          obj: object,
          key: i
        }, _react["default"].createElement("div", {
          "class": "col-12 pb-4"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/p/".concat(_this3.postFinder()[i]._id)
        }, _react["default"].createElement("div", {
          "class": "img-wrapper"
        }, _react["default"].createElement("div", {
          "class": "img-responsive"
        }, _react["default"].createElement("div", {
          "class": "souseImageFormat"
        }, _react["default"].createElement("img", {
          "class": "souseUserPostsUserHomePage",
          src: _this3.postFinder()[i].sousePosts.postImageURL,
          alt: "souseUserPosts",
          width: "200px",
          height: "200px"
        })))))));
      })))));
    }
  }]);

  return UserProfile;
}(_react.Component);

UserProfile.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(UserProfile);

exports["default"] = _default;