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

var _souseIndex = _interopRequireDefault(require("../navigation/souseIndex"));

var _editUserProfile = _interopRequireDefault(require("../userProfile/editUserProfile"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _userProfileStyling = require("../../assets/styles/userProfileStyling");

var _mainStyling = require("../../assets/styles/mainStyling");

var _postsStyling = require("../../assets/styles/postsStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

    _this.onSetFollow = function (e) {
      e.preventDefault();
      var loggedInUserId = _this.state.loggedInUserId;
      var creatorId = _this.state.creatorId;
      var creatorImage = _this.state.creatorImage;
      var creatorUsername = _this.state.creatorUsername;
      var followData = {
        followUserId: creatorId,
        // This is the user who received the follow
        followUserImage: creatorImage,
        // This is the user who received the follow
        followUsername: creatorUsername,
        // This is the user who received the follow
        initiatedFollowuserId: loggedInUserId // This is the user who pressed "Follow"

      };
      var apiRoute = "/souseAPI";
      var createRoute = "/follows/add";

      _axios["default"].post(apiRoute + createRoute, followData).then(function (res) {
        return console.log(res.data);
      });

      _this.setState({
        followUserId: '',
        followUserImage: '',
        followUsername: '',
        initiatedFollowuserId: ''
      });
    };

    _this.onSetFollower = function (e) {
      e.preventDefault();
      var loggedInUserId = _this.state.loggedInUserId;
      var creatorId = _this.state.creatorId;
      var loggedInUserImage = _this.state.loggedInUserImage;
      var loggedInUsername = _this.state.loggedInUsername;
      var followerData = {
        followerUserId: loggedInUserId,
        // This is the user who pressed "Follow"
        followerUserImage: loggedInUserImage,
        // This is the user who pressed "Follow"
        followerUsername: loggedInUsername,
        // This is the user who pressed "Follow"
        receivedFollowUserId: creatorId // This is the user who received the follow

      };
      var apiRoute = "/souseAPI";
      var createRoute = "/followers/add";

      _axios["default"].post(apiRoute + createRoute, followerData).then(function (res) {
        return console.log(res.data);
      });

      _this.setState({
        followerUserId: '',
        followerUserImage: '',
        followerUsername: '',
        receivedFollowUserId: ''
      });

      window.location.reload();
    };

    _this.onSetDeleteFollower = function (e) {
      var followerId = "" + _this.followerFinder()[0]._id + "";
      var apiRoute = "/souseAPI";
      var deleteRoute = "/followers/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + followerId).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });

      window.location.reload();
    };

    _this.onSetDeleteFollow = function (e) {
      var userId = _this.state.loggedInUserId;
      var souseFollowData = _this.props.souseFollowData;
      var souseFollowList = ["" + userId + ""],
          souseFollowsList = new Set(souseFollowList),
          souseFilterFollowData = souseFollowData.filter(function (souseFollowsData) {
        return souseFollowsList.has(souseFollowsData.initiatedFollowuserId);
      });
      var followId = "" + souseFilterFollowData[0]._id + "";
      var apiRoute = "/souseAPI";
      var deleteRoute = "/follows/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + followId).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });

      window.location.reload();
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var _loggedInUsername = user.username;
    var _loggedInUserId = user.id;
    var _loggedInUserImage = user.userImage;
    var souseUserId = _this.props.obj._id;
    var souseUserFirstName = _this.props.obj.firstName;
    var souseUserLastName = _this.props.obj.lastName;
    var souseUserEmail = _this.props.obj.email;
    var souseUserPassword = _this.props.obj.password;
    var souseUserSignUpDate = _this.props.obj.signUpDate;
    var souseUserImage = _this.props.obj.userImage;
    var souseNewUserImageSetup = _this.props.obj.newUserImageSetup;
    var souseUserTheme = _this.props.obj.userTheme;
    var souseUserTwitter = _this.props.obj.userTwitter;
    var souseUserFacebook = _this.props.obj.userFacebook;
    var souseUserInstagram = _this.props.obj.userInstagram;
    var souseUserLocation = _this.props.obj.userLocation;
    var souseUserBio = _this.props.obj.userBio;
    var usernameFinder = window.location.pathname;
    var usernameFound = usernameFinder.slice(1);
    var twitterUsername = souseUserTwitter;
    var twitterUsernameURL = "https://mobile.twitter.com/" + twitterUsername + "";
    var facebookUsername = souseUserFacebook;
    var facebookUsernameURL = "https://www.facebook.com/" + facebookUsername + "/";
    var instagramUsername = souseUserInstagram;
    var instagramUsernameURL = "https://www.instagram.com/" + instagramUsername + "/";
    _this.state = {
      loggedInUserId: _loggedInUserId,
      loggedInUsername: _loggedInUsername,
      loggedInUserImage: _loggedInUserImage,
      creatorId: souseUserId,
      creatorUsername: usernameFound,
      creatorFirstName: souseUserFirstName,
      creatorLastName: souseUserLastName,
      creatorEmail: souseUserEmail,
      creatorPassword: souseUserPassword,
      creatorSignUpDate: souseUserSignUpDate,
      creatorUnixTimestamp: new Date(souseUserSignUpDate).valueOf(),
      totalDisplayPosts: '1',
      totalDisplayFollowers: '1',
      totalDisplayFollows: '1',
      userPageDisplay: '1',
      creatorImage: souseUserImage,
      creatorTheme: souseUserTheme,
      creatorTwitter: twitterUsername,
      creatorTwitterURL: twitterUsernameURL,
      creatorFacebook: facebookUsername,
      creatorFacebookURL: facebookUsernameURL,
      creatorInstagram: instagramUsername,
      creatorInstagramURL: instagramUsernameURL,
      creatorLocation: souseUserLocation,
      creatorBio: souseUserBio,
      souseNewUserImageSetup: souseNewUserImageSetup,
      followerUserId: "",
      // This is the user who received the follow
      initiatedFollowinguserId: "",
      // This is the user who pressed "Follow"
      followingUserId: "",
      // This is the user who pressed "Follow"
      receivedFollowUserId: "" // This is the user who received the follow

    };
    _this.onSetFollow = _this.onSetFollow.bind(_assertThisInitialized(_this));
    _this.onSetFollower = _this.onSetFollower.bind(_assertThisInitialized(_this));
    _this.onSetDeleteFollow = _this.onSetDeleteFollow.bind(_assertThisInitialized(_this));
    _this.onSetDeleteFollower = _this.onSetDeleteFollower.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserProfile, [{
    key: "postFinder",
    value: function postFinder() {
      var _this2 = this;

      var souseUserData = this.props.souseUserData;
      var filteredUsernameData = Object.keys(souseUserData).filter(function (i) {
        return souseUserData[i].username === "" + _this2.state.creatorUsername + "";
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
    key: "followFinder",
    value: function followFinder() {
      var userId = this.state.creatorId;
      var souseFollowData = this.props.souseFollowData;
      var souseFollowList = ["" + userId + ""],
          souseFollowsList = new Set(souseFollowList),
          souseFilterFollowData = souseFollowData.filter(function (souseFollowsData) {
        return souseFollowsList.has(souseFollowsData.initiatedFollowuserId);
      });
      return souseFilterFollowData;
    }
  }, {
    key: "followerFinder",
    value: function followerFinder() {
      var userId = this.state.creatorId;
      var souseFollowerData = this.props.souseFollowerData;
      var souseFollowerList = ["" + userId + ""],
          souseFollowersList = new Set(souseFollowerList),
          souseFilterFollowerData = souseFollowerData.filter(function (souseFollowersData) {
        return souseFollowersList.has(souseFollowersData.receivedFollowUserId);
      });
      return souseFilterFollowerData;
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
      var loggedInUserImage = user.userImage;
      var loggedInUserFirstname = user.email;
      var souseUserData = this.props.souseUserData;
      var usernamePage = this.props.match.params.username;
      var creatorId = this.state.creatorId;
      var creatorUsername = this.state.creatorUsername;
      var creatorFirstName = this.state.creatorFirstName;
      var creatorLastName = this.state.creatorLastName;
      var creatorEmail = this.state.creatorEmail;
      var creatorPassword = this.state.creatorPassword;
      var creatorSignUpDate = this.state.creatorSignUpDate;
      var creatorUnixTimestamp = this.state.creatorUnixTimestamp;
      var creatorImage = this.state.creatorImage;
      var creatorTheme = this.state.creatorTheme;
      var creatorTwitter = this.state.creatorTwitter;
      var creatorFacebook = this.state.creatorFacebook;
      var creatorInstagram = this.state.creatorInstagram;
      var creatorLocation = this.state.creatorLocation;
      var creatorBio = this.state.creatorBio;
      var souseNewUserImageSetup = this.state.souseNewUserImageSetup;
      var userPageDisplay = this.state.userPageDisplay;
      var postsTotal = "" + this.postFinder().length + "";
      var followersTotal = "" + this.followerFinder().length + "";
      var followsTotal = "" + this.followFinder().length + "";
      return _react["default"].createElement("div", null, creatorImage === "" && loggedInUserId == creatorId ? _react["default"].createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: "/u/edit/" + loggedInUserId,
          state: {
            creatorId: creatorId,
            creatorUsername: creatorUsername,
            creatorFirstName: creatorFirstName,
            creatorLastName: creatorLastName,
            creatorEmail: creatorEmail,
            creatorPassword: creatorPassword,
            creatorSignUpDate: creatorSignUpDate,
            creatorUnixTimestamp: creatorUnixTimestamp,
            creatorImage: creatorImage,
            creatorTheme: creatorTheme,
            creatorTwitter: creatorTwitter,
            creatorFacebook: creatorFacebook,
            creatorInstagram: creatorInstagram,
            creatorLocation: creatorLocation,
            creatorBio: creatorBio
          }
        }
      }) : _react["default"].createElement("div", {
        "class": "mx-auto d-block pt-5"
      }, _react["default"].createElement("div", {
        "class": "d-none d-xl-block container-fluid pt-5"
      }, " ", _react["default"].createElement("div", {
        "class": "row userHeaderSection d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "container pt-5"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-6 d-flex justify-content-end pr-5"
      }, " ", _react["default"].createElement(_userProfileStyling.SouseUserPageIcon, null, _react["default"].createElement("img", {
        className: "souseUserPageImage",
        src: creatorImage,
        alt: "souseUserIcon",
        width: "85px",
        height: "85px"
      }))), _react["default"].createElement("div", {
        "class": "col-6 pl-5"
      }, " ", _react["default"].createElement("div", {
        "class": "row userNameRow"
      }, _react["default"].createElement(_userProfileStyling.UsernameUserPage, {
        className: "col-12"
      }, creatorUsername), _react["default"].createElement(_userProfileStyling.UserLocationUserPage, {
        className: "col-12"
      }, creatorLocation)), _react["default"].createElement("div", {
        "class": "row userButtonsRow"
      }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement(_userProfileStyling.UserDataUserPage, null), this.state.totalDisplayPosts === postsTotal ? _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, _react["default"].createElement("b", null, postsTotal), " Post") : _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, _react["default"].createElement("b", null, postsTotal), " Posts")), _react["default"].createElement("div", {
        "class": "col-12"
      }, this.state.totalDisplayFollowers === followersTotal ? _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '3'
          });
        }
      }, _react["default"].createElement("b", null, followersTotal), " Follower") : _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '3'
          });
        }
      }, _react["default"].createElement("b", null, followersTotal), " Followers")), _react["default"].createElement("div", {
        "class": "col-12"
      }, this.state.totalDisplayFollows === followsTotal ? _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '4'
          });
        }
      }, _react["default"].createElement("b", null, followsTotal), " Follow") : _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '4'
          });
        }
      }, _react["default"].createElement("b", null, followsTotal), " Follows"))), isAuthenticated ? _react["default"].createElement("div", null, creatorId !== loggedInUserId ? _react["default"].createElement("div", null, Array.isArray(this.followerFinder()) && this.followerFinder()[0] ? _react["default"].createElement("div", null, this.followerFinder()[0].followerUserId == loggedInUserId ? _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large",
        onClick: function onClick(e) {
          _this3.onSetDeleteFollow(e);

          _this3.onSetDeleteFollower(e);
        }
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Unfollow"))) : _react["default"].createElement("div", null)) : _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large",
        onClick: function onClick(e) {
          _this3.onSetFollow(e);

          _this3.onSetFollower(e);
        }
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Follow")))) : _react["default"].createElement(_reactRouterDom.Link, {
        "class": "d-block mx-auto",
        to: {
          pathname: "/u/edit/" + loggedInUserId,
          state: {
            creatorId: creatorId,
            creatorUsername: creatorUsername,
            creatorFirstName: creatorFirstName,
            creatorLastName: creatorLastName,
            creatorEmail: creatorEmail,
            creatorPassword: creatorPassword,
            creatorSignUpDate: creatorSignUpDate,
            creatorUnixTimestamp: creatorUnixTimestamp,
            creatorImage: creatorImage,
            creatorTheme: creatorTheme,
            creatorTwitter: creatorTwitter,
            creatorFacebook: creatorFacebook,
            creatorInstagram: creatorInstagram,
            creatorLocation: creatorLocation,
            creatorBio: creatorBio,
            souseNewUserImageSetup: souseNewUserImageSetup
          }
        }
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Edit Profile")))) : _react["default"].createElement("div", null))))), _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row m-0"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsUL, {
        className: "userProfileUserInfoUL col-12 d-flex justify-content-center"
      }, userPageDisplay == '2' ? _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5Selected, {
        className: "d-block justify-content-center bioOption selected",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '2'
          });
        }
      }, "Bio"))))) : _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5, {
        className: "d-block justify-content-center bioOption",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '2'
          });
        }
      }, "Bio"))))), userPageDisplay == '1' ? _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5Selected, {
        className: "d-block justify-content-center postsOption selected",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, "Posts"))))) : _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5, {
        className: "d-block justify-content-center postsOption",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, "Posts")))))), _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement(_souseIndex["default"], {
        userPageCreatorUsername: creatorUsername,
        loggedInUsername: loggedInUsername,
        souseUserData: souseUserData
      }))), _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, " ", _react["default"].createElement(_userProfileStyling.ProfilePreScrollable, null, userPageDisplay == '1' ? _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, " ", Object.keys(this.postFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3",
          obj: object,
          key: i
        }, _react["default"].createElement("div", {
          "class": "pb-5"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/p/".concat(_this3.postFinder()[i]._id)
        }, _react["default"].createElement("div", {
          "class": "souseImageFormat d-flex justify-content-center"
        }, _react["default"].createElement(_userProfileStyling.UserPostIcons, {
          className: "souseUserPostsUserHomePage",
          src: _this3.postFinder()[i].sousePosts.postImageURL,
          alt: "souseUserPosts",
          width: "250px",
          height: "250px"
        })))));
      })) : _react["default"].createElement("div", null, userPageDisplay == '2' ? _react["default"].createElement("div", {
        "class": "container-fluid"
      }, "   ", _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col"
      }, this.state.creatorTwitter === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement(_mainStyling.SouseLink, {
        href: this.state.creatorTwitterURL,
        target: "_blank"
      }, _react["default"].createElement(_userProfileStyling.TwitterIcon, null), " ", this.state.creatorTwitter)))), this.state.creatorFacebook === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement(_mainStyling.SouseLink, {
        href: this.state.creatorFacebookURL,
        target: "_blank"
      }, _react["default"].createElement(_userProfileStyling.FacebookIcon, null), " ", this.state.creatorFacebook)))), this.state.creatorInstagram === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement(_mainStyling.SouseLink, {
        href: this.state.creatorInstagramURL,
        target: "_blank"
      }, _react["default"].createElement(_userProfileStyling.InstagramIcon, null), " ", this.state.creatorInstagram))))), creatorBio === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col"
      }, _react["default"].createElement(_userProfileStyling.UserBio, null, creatorBio)))) : _react["default"].createElement("div", null), userPageDisplay == '3' ? _react["default"].createElement("div", null, "   ", Object.keys(this.followerFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/".concat(_this3.followerFinder()[i].followerUsername),
          onClick: function onClick() {
            return window.location.refresh();
          }
        }, _react["default"].createElement("div", {
          "class": "container-fluid d-flex justify-content-center"
        }, _react["default"].createElement("img", {
          "class": "souseUserIconUserHomePage followIcons",
          src: _this3.followerFinder()[i].followerUserImage,
          alt: "souseUserIcon",
          width: "85px",
          height: "85px"
        })), _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement("h6", {
          "class": "col-12"
        }, _this3.followerFinder()[i].followerUsername))));
      })) : _react["default"].createElement("div", null), userPageDisplay == '4' ? _react["default"].createElement("div", {
        "class": "row"
      }, "   ", Object.keys(this.followFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/".concat(_this3.followFinder()[i].followUsername),
          onClick: function onClick() {
            return window.location.refresh();
          }
        }, _react["default"].createElement("div", {
          "class": "container-fluid d-flex justify-content-center"
        }, _react["default"].createElement("img", {
          "class": "souseUserIconUserHomePage followIcons",
          src: _this3.followFinder()[i].followUserImage,
          alt: "souseUserIcon",
          width: "85px",
          height: "85px"
        })), _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement("h6", {
          "class": "col-12"
        }, _this3.followFinder()[i].followUsername))));
      })) : _react["default"].createElement("div", null)))))))), _react["default"].createElement("div", {
        "class": "d-xl-none container-fluid"
      }, " ", _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center pt-5"
      }, _react["default"].createElement(_postsStyling.SouseDiv, {
        className: "d-flex justify-content-center my-auto p-0"
      }, _react["default"].createElement("div", {
        className: "m-0 p-0 sousePortrait souseLandscape"
      }, _react["default"].createElement(_userProfileStyling.SouseUserPageIcon, null, _react["default"].createElement("img", {
        className: "souseUserPageImage mx-auto",
        src: creatorImage,
        alt: "souseUserIcon",
        width: "85px",
        height: "85px"
      })), _react["default"].createElement("div", {
        "class": "row userNameRow"
      }, _react["default"].createElement(_userProfileStyling.UsernameUserPage, {
        className: "col-12 d-flex justify-content-center"
      }, creatorUsername), _react["default"].createElement(_userProfileStyling.UserLocationUserPage, {
        className: "col-12 d-flex justify-content-center"
      }, creatorLocation)))), _react["default"].createElement(_postsStyling.SouseDiv, null, _react["default"].createElement("div", {
        className: "sousePortrait souseLandscape"
      }, _react["default"].createElement(_userProfileStyling.ProfilePreScrollable, {
        className: "d-flex justify-content-center p-0 m-0"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, isAuthenticated ? _react["default"].createElement("div", null, creatorId !== loggedInUserId ? _react["default"].createElement("div", null, Array.isArray(this.followerFinder()) && this.followerFinder()[0] ? _react["default"].createElement("div", null, this.followerFinder()[0].followerUserId == loggedInUserId ? _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large",
        onClick: function onClick(e) {
          _this3.onSetDeleteFollow(e);

          _this3.onSetDeleteFollower(e);
        }
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Unfollow"))) : _react["default"].createElement("div", null)) : _react["default"].createElement("div", null, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large",
        onClick: function onClick(e) {
          _this3.onSetFollow(e);

          _this3.onSetFollower(e);
        }
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Follow")))) : _react["default"].createElement(_reactRouterDom.Link, {
        "class": "d-block mx-auto",
        to: {
          pathname: "/u/edit/" + loggedInUserId,
          state: {
            creatorId: creatorId,
            creatorUsername: creatorUsername,
            creatorFirstName: creatorFirstName,
            creatorLastName: creatorLastName,
            creatorEmail: creatorEmail,
            creatorPassword: creatorPassword,
            creatorSignUpDate: creatorSignUpDate,
            creatorUnixTimestamp: creatorUnixTimestamp,
            creatorImage: creatorImage,
            creatorTheme: creatorTheme,
            creatorTwitter: creatorTwitter,
            creatorFacebook: creatorFacebook,
            creatorInstagram: creatorInstagram,
            creatorLocation: creatorLocation,
            creatorBio: creatorBio
          }
        }
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Edit Profile")))) : _react["default"].createElement("div", null)), _react["default"].createElement("div", {
        "class": "row userButtonsRow"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-4 my-auto d-flex justify-content-center"
      }, _react["default"].createElement(_userProfileStyling.UserDataUserPage, null), this.state.totalDisplayPosts === postsTotal ? _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, _react["default"].createElement("b", null, postsTotal), " Post") : _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, _react["default"].createElement("b", null, postsTotal), " Posts")), _react["default"].createElement("div", {
        "class": "col-4 my-auto d-flex justify-content-center"
      }, this.state.totalDisplayFollowers === followersTotal ? _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '3'
          });
        }
      }, _react["default"].createElement("b", null, followersTotal), " Follower") : _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '3'
          });
        }
      }, _react["default"].createElement("b", null, followersTotal), " Followers")), _react["default"].createElement("div", {
        "class": "col-4 my-auto d-flex justify-content-center"
      }, this.state.totalDisplayFollows === followsTotal ? _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '4'
          });
        }
      }, _react["default"].createElement("b", null, followsTotal), " Follow") : _react["default"].createElement(_userProfileStyling.UserDataUserPage, {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '4'
          });
        }
      }, _react["default"].createElement("b", null, followsTotal), " Follows"))))), " ", _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsUL, {
        className: "userProfileUserInfoUL col-12 d-flex justify-content-center"
      }, userPageDisplay == '2' ? _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5Selected, {
        className: "d-block justify-content-center bioOption selected",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '2'
          });
        }
      }, "Bio"))))) : _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5, {
        className: "d-block justify-content-center bioOption",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '2'
          });
        }
      }, "Bio"))))), userPageDisplay == '1' ? _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5Selected, {
        className: "d-block justify-content-center postsOption selected",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, "Posts"))))) : _react["default"].createElement("div", null, _react["default"].createElement(_userProfileStyling.UserPageOptionsLI, {
        className: "userProfileUserInfoLI"
      }, _react["default"].createElement(_userProfileStyling.UserPageOptionsLink, {
        className: "userProfileUserInfoLink"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.UserPageOptionsH5, {
        className: "d-block justify-content-center postsOption",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, "Posts")))))), _react["default"].createElement("div", {
        "class": "col-12 d-flex justify-content-center"
      }, _react["default"].createElement(_souseIndex["default"], {
        userPageCreatorUsername: creatorUsername,
        loggedInUsername: loggedInUsername,
        souseUserData: souseUserData
      })))), _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, " ", userPageDisplay == '1' ? _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, " ", Object.keys(this.postFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3 m-0 p-0",
          obj: object,
          key: i
        }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/p/".concat(_this3.postFinder()[i]._id)
        }, _react["default"].createElement("div", {
          "class": "souseImageFormat d-flex justify-content-center"
        }, _react["default"].createElement(_userProfileStyling.UserPostIcons, {
          className: "souseUserPostsUserHomePage",
          src: _this3.postFinder()[i].sousePosts.postImageURL,
          alt: "souseUserPosts",
          width: "250px",
          height: "250px"
        })))));
      })) : _react["default"].createElement("div", null, userPageDisplay == '2' ? _react["default"].createElement("div", {
        "class": "container-fluid"
      }, "   ", _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col"
      }, this.state.creatorTwitter === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement(_mainStyling.SouseLink, {
        href: this.state.creatorTwitterURL,
        target: "_blank"
      }, _react["default"].createElement(_userProfileStyling.TwitterIcon, null), " ", this.state.creatorTwitter)))), this.state.creatorFacebook === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement(_mainStyling.SouseLink, {
        href: this.state.creatorFacebookURL,
        target: "_blank"
      }, _react["default"].createElement(_userProfileStyling.FacebookIcon, null), " ", this.state.creatorFacebook)))), this.state.creatorInstagram === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement(_mainStyling.SouseLink, {
        href: this.state.creatorInstagramURL,
        target: "_blank"
      }, _react["default"].createElement(_userProfileStyling.InstagramIcon, null), " ", this.state.creatorInstagram))))), creatorBio === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col"
      }, _react["default"].createElement(_userProfileStyling.UserBio, null, creatorBio)))) : _react["default"].createElement("div", null), userPageDisplay == '3' ? _react["default"].createElement("div", null, "   ", Object.keys(this.followerFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/".concat(_this3.followerFinder()[i].followerUsername),
          onClick: function onClick() {
            return window.location.refresh();
          }
        }, _react["default"].createElement("div", {
          "class": "container-fluid d-flex justify-content-center"
        }, _react["default"].createElement("img", {
          "class": "souseUserIconUserHomePage followIcons",
          src: _this3.followerFinder()[i].followerUserImage,
          alt: "souseUserIcon",
          width: "85px",
          height: "85px"
        })), _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement("h6", {
          "class": "col-12"
        }, _this3.followerFinder()[i].followerUsername))));
      })) : _react["default"].createElement("div", null), userPageDisplay == '4' ? _react["default"].createElement("div", {
        "class": "row"
      }, "   ", Object.keys(this.followFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          "class": "col-3"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/".concat(_this3.followFinder()[i].followUsername),
          onClick: function onClick() {
            return window.location.refresh();
          }
        }, _react["default"].createElement("div", {
          "class": "container-fluid d-flex justify-content-center"
        }, _react["default"].createElement("img", {
          "class": "souseUserIconUserHomePage followIcons",
          src: _this3.followFinder()[i].followUserImage,
          alt: "souseUserIcon",
          width: "85px",
          height: "85px"
        })), _react["default"].createElement("div", {
          "class": "row"
        }, _react["default"].createElement("h6", {
          "class": "col-12"
        }, _this3.followFinder()[i].followUsername))));
      })) : _react["default"].createElement("div", null))))))))))));
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

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(UserProfile));

exports["default"] = _default;