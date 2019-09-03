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
      console.log(followerId);
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
      console.log(followId);
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
      creatorTwitter: twitterUsername,
      creatorTwitterURL: twitterUsernameURL,
      creatorFacebook: facebookUsername,
      creatorFacebookURL: facebookUsernameURL,
      creatorInstagram: instagramUsername,
      creatorInstagramURL: instagramUsernameURL,
      creatorLocation: souseUserLocation,
      creatorBio: souseUserBio,
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
      console.log(souseFilterFollowData);
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
      console.log(souseFilterFollowerData);
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
      var loggedInUserFirstname = user.email;
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
      var creatorTwitter = this.state.creatorTwitter;
      var creatorFacebook = this.state.creatorFacebook;
      var creatorInstagram = this.state.creatorInstagram;
      var creatorLocation = this.state.creatorLocation;
      var creatorBio = this.state.creatorBio;
      var userPageDisplay = this.state.userPageDisplay;
      var postsTotal = "" + this.postFinder().length + "";
      var followersTotal = "" + this.followerFinder().length + "";
      var followsTotal = "" + this.followFinder().length + "";
      var TwitterIcon = (0, _styledComponents["default"])(_Twitter.Twitter).withConfig({
        displayName: "userProfile__TwitterIcon",
        componentId: "sc-16lkwtc-0"
      })(["color:#c45758;height:1.1em;width:1.5em;"]);
      var FacebookIcon = (0, _styledComponents["default"])(_Facebook.Facebook).withConfig({
        displayName: "userProfile__FacebookIcon",
        componentId: "sc-16lkwtc-1"
      })(["color:#c45758;height:1.1em;width:1.5em;"]);
      var InstagramIcon = (0, _styledComponents["default"])(_Instagram.Instagram).withConfig({
        displayName: "userProfile__InstagramIcon",
        componentId: "sc-16lkwtc-2"
      })(["color:#c45758;height:1.1em;width:1.5em;"]);
      return _react["default"].createElement("div", {
        "class": "container pt-5"
      }, _react["default"].createElement("div", {
        "class": "row userHeaderSection d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "profilePageUserImage d-flex justify-content-center"
      }, " ", _react["default"].createElement("div", {
        "class": "souseUserCreatorPage col-8 d-flex"
      }, _react["default"].createElement("div", {
        "class": "container-fluid d-flex justify-content-center"
      }, _react["default"].createElement("img", {
        "class": "souseUserIconUserHomePage",
        src: creatorImage,
        alt: "souseUserIcon",
        width: "85px",
        height: "85px"
      }))), _react["default"].createElement("div", {
        "class": "profilePageUserData col-12"
      }, " ", _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "row userNameRow"
      }, _react["default"].createElement("h2", null, creatorUsername)), _react["default"].createElement("div", {
        "class": "row userButtonsRow"
      }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "col-12"
      }, this.state.totalDisplayPosts === postsTotal ? _react["default"].createElement("h5", {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, _react["default"].createElement("b", null, postsTotal), " Post") : _react["default"].createElement("h5", {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, _react["default"].createElement("b", null, postsTotal), " Posts")), _react["default"].createElement("div", {
        "class": "col-12"
      }, this.state.totalDisplayFollowers === followersTotal ? _react["default"].createElement("h5", {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '3'
          });
        }
      }, _react["default"].createElement("b", null, followersTotal), " Follower") : _react["default"].createElement("h5", {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '3'
          });
        }
      }, _react["default"].createElement("b", null, followersTotal), " Followers")), _react["default"].createElement("div", {
        "class": "col-12"
      }, this.state.totalDisplayFollows === followsTotal ? _react["default"].createElement("h5", {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '4'
          });
        }
      }, _react["default"].createElement("b", null, followsTotal), " Follow") : _react["default"].createElement("h5", {
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '4'
          });
        }
      }, _react["default"].createElement("b", null, followsTotal), " Follows"))), isAuthenticated ? _react["default"].createElement("div", null, creatorId !== loggedInUserId ? _react["default"].createElement("div", null, Array.isArray(this.followerFinder()) && this.followerFinder()[0] ? _react["default"].createElement("div", null, this.followerFinder()[0].followerUserId == loggedInUserId ? _react["default"].createElement("div", null, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large",
        onClick: function onClick(e) {
          _this3.onSetDeleteFollow(e);

          _this3.onSetDeleteFollower(e);
        }
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Unfollow"))) : _react["default"].createElement("div", null)) : _react["default"].createElement("div", null, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large",
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
            creatorTwitter: creatorTwitter,
            creatorFacebook: creatorFacebook,
            creatorInstagram: creatorInstagram,
            creatorLocation: creatorLocation,
            creatorBio: creatorBio
          }
        }
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Edit Profile")))) : _react["default"].createElement("div", null)), _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center m-0"
      }, _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("a", null, _react["default"].createElement("div", {
        "class": "col-4"
      }, " ", _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '2'
          });
        }
      }, "Bio")))), _react["default"].createElement("div", {
        "class": "col-4"
      }, " ", _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center"
      })), _react["default"].createElement("li", null, _react["default"].createElement("a", null, _react["default"].createElement("div", {
        "class": "col-4"
      }, " ", _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center",
        onClick: this.listClicked = function (e) {
          _this3.setState({
            userPageDisplay: '1'
          });
        }
      }, "Posts"))))))))))), _react["default"].createElement("div", {
        "class": "col-12"
      }, isAuthenticated ? _react["default"].createElement("div", null, _react["default"].createElement(_postIndex["default"], null)) : _react["default"].createElement("div", null))), _react["default"].createElement("div", {
        "class": "d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row pb-2 col d-flex justify-content-center"
      }, userPageDisplay == '1' ? _react["default"].createElement("div", null, " ", Object.keys(this.postFinder()).map(function (object, i) {
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
      })) : _react["default"].createElement("div", null, userPageDisplay == '2' ? _react["default"].createElement("div", {
        "class": "container-fluid"
      }, "   ", _react["default"].createElement("div", {
        "class": "row"
      }, this.state.creatorTwitter === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement("a", {
        href: this.state.creatorTwitterURL,
        target: "_blank"
      }, _react["default"].createElement(TwitterIcon, null), " ", this.state.creatorTwitter)))), this.state.creatorFacebook === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement("a", {
        href: this.state.creatorFacebookURL,
        target: "_blank"
      }, _react["default"].createElement(FacebookIcon, null), " ", this.state.creatorFacebook)))), this.state.creatorInstagram === "" ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row d-block mx-auto"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center m-0"
      }, _react["default"].createElement("a", {
        href: this.state.creatorInstagramURL,
        target: "_blank"
      }, _react["default"].createElement(InstagramIcon, null), " ", this.state.creatorInstagram)))))) : _react["default"].createElement("div", null), userPageDisplay == '3' ? _react["default"].createElement("div", null, "   ", Object.keys(this.followerFinder()).map(function (object, i) {
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
      })) : _react["default"].createElement("div", null))))));
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