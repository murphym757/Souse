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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _provider = _interopRequireDefault(require("@bootstrap-styled/provider"));

var _theme = require("bootstrap-styled/lib/theme");

var _globalStyling = require("../assets/styles/globalStyling");

var _mainStyling = require("../assets/styles/mainStyling");

var _v = require("@bootstrap-styled/v4");

var _globalTheme = require("../assets/styles/globalTheme");

var _loginForm = _interopRequireDefault(require("./registration/loginForm"));

var _signUpForm = _interopRequireDefault(require("./registration/signUpForm"));

var _LandingPage = _interopRequireDefault(require("./navigation/LandingPage"));

var _userProfile = _interopRequireDefault(require("./userProfile/userProfile"));

var _usersPage = _interopRequireDefault(require("./userProfile/usersPage"));

var _Page = _interopRequireDefault(require("./navigation/404Page"));

var _navbar = _interopRequireDefault(require("./navigation/navbar"));

var _postsPage = _interopRequireDefault(require("./posts/postsPage"));

var _postEditForm = _interopRequireDefault(require("./posts/postEditForm"));

var _commentDeleteSection = _interopRequireDefault(require("./posts/commentDeleteSection"));

var _editUserProfile = _interopRequireDefault(require("./userProfile/editUserProfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  function MainSource(props) {
    var _this;

    _classCallCheck(this, MainSource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainSource).call(this, props));
    _this.state = {
      posts: [],
      users: [],
      comments: [],
      followers: [],
      follows: [],
      currentTheme: "souseDefaultTheme",
      userThemeType: "Light"
    };
    return _this;
  }

  _createClass(MainSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      {
        /* Posts Collection */
      }
      var apiRoute = "/souseAPI";
      var findPostRoute = "/p";

      _axios["default"].get(apiRoute + findPostRoute).then(function (res) {
        var posts = res.data;
        console.log(posts);

        _this2.setState({
          posts: posts
        });
      })["catch"](function (error) {
        console.log(error);
      });

      {
        /* Users Collection */
      }
      var findUserRoute = "/u";

      _axios["default"].get(apiRoute + findUserRoute).then(function (res) {
        var users = res.data;

        _this2.setState({
          users: users
        });
      })["catch"](function (error) {
        console.log(error);
      });

      {
        /* Comments Collection */
      }
      var findCommentRoute = "/c";

      _axios["default"].get(apiRoute + findCommentRoute).then(function (res) {
        var comments = res.data;

        _this2.setState({
          comments: comments
        });
      })["catch"](function (error) {
        console.log(error);
      });

      {
        /* Followers Collection */
      }
      var findFollowerRoute = "/followers";

      _axios["default"].get(apiRoute + findFollowerRoute).then(function (res) {
        var followers = res.data;

        _this2.setState({
          followers: followers
        });
      })["catch"](function (error) {
        console.log(error);
      });

      {
        /* Follow Collection */
      }
      var findFollowRoute = "/follows";

      _axios["default"].get(apiRoute + findFollowRoute).then(function (res) {
        var follows = res.data;

        _this2.setState({
          follows: follows
        });
      })["catch"](function (error) {
        console.log(error);
      });

      {
        /* Theme Finder */
      }
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var userThemeOG = user.userTheme;
      var themeTypeOG = user.userThemeType;
      var theme1 = "souseDefaultTheme";
      var theme2 = "souseIMTheme";
      var theme3 = "souseFPTheme";
      var theme4 = "souseViceTheme";
      var theme5 = "souseVapeTheme";

      if (isAuthenticated) {
        var userTheme = userThemeOG;
        var themeType = themeTypeOG;

        if (userTheme == theme1) {
          if (themeType == "Light") {
            this.setState({
              currentTheme: _globalTheme.souseDefaultTheme
            });
          } else {
            this.setState({
              currentTheme: _globalTheme.souseDefaultThemeDark
            });
          }
        } else if (userTheme == theme2) {
          if (themeType == "Light") {
            this.setState({
              currentTheme: _globalTheme.souseIMTheme
            });
          } else {
            this.setState({
              currentTheme: _globalTheme.souseIMThemeDark
            });
          }
        } else if (userTheme == theme3) {
          if (themeType == "Light") {
            this.setState({
              currentTheme: _globalTheme.souseFPTheme
            });
          } else {
            this.setState({
              currentTheme: _globalTheme.souseFPThemeDark
            });
          }
        } else if (userTheme == theme4) {
          if (themeType == "Light") {
            this.setState({
              currentTheme: _globalTheme.souseViceTheme
            });
          } else {
            this.setState({
              currentTheme: _globalTheme.souseViceThemeDark
            });
          }
        } else if (userTheme == theme5) {
          if (themeType == "Light") {
            this.setState({
              currentTheme: _globalTheme.souseVapeTheme
            });
          } else {
            this.setState({
              currentTheme: _globalTheme.souseVapeThemeDark
            });
          }
        } else if (userTheme == undefined) {
          this.setState({
            currentTheme: _globalTheme.souseDefaultTheme
          });
        }
      } else {
        this.setState({
          currentTheme: _globalTheme.souseDefaultTheme
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var souseUsers = this.state.users;
      var sousePosts = this.state.posts;
      var souseComments = this.state.comments;
      var souseFollowers = this.state.followers;
      var souseFollows = this.state.follows;

      var Card = _styledComponents["default"].div.withConfig({
        displayName: "main__Card",
        componentId: "sc-1ucehs2-0"
      })(["display:block;z-index:9999;position:fixed;width:100%;height:100%;top:0;right:0;left:0;bottom:0;overflow:auto;background-color:", ";color:", ";font-family:'Nunito Sans',sans-serif;font-weight:400;"], function (props) {
        return props.theme.primaryColor;
      }, function (props) {
        return props.theme.secondaryColor;
      });

      return _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement("div", {
        "class": "container-fluid entireProjectContainer"
      }, isAuthenticated ? _react["default"].createElement(_provider["default"], {
        theme: this.state.currentTheme
      }, _react["default"].createElement(_globalStyling.GlobalStyle, null), _react["default"].createElement(Card, {
        className: "align-content-stretch flex-wrap entireProjectCard m-0"
      }, _react["default"].createElement(_v.CardBlock, null, _react["default"].createElement("div", {
        "class": "row h-100 m-0 p-0"
      }, _react["default"].createElement(_navbar["default"], {
        souseUserData: souseUsers
      }), _react["default"].createElement(_mainStyling.SouseCenterContainer, null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        render: function render(props) {
          return _react["default"].createElement(_LandingPage["default"], _extends({}, props, {
            souseUserData: souseUsers,
            sousePostData: sousePosts,
            souseCommentData: souseComments,
            souseFollowerData: souseFollowers,
            souseFollowData: souseFollows
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/signup",
        component: _signUpForm["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/login",
        component: _loginForm["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/:username",
        render: function render(props) {
          return _react["default"].createElement(_usersPage["default"], _extends({}, props, {
            souseUserData: souseUsers,
            sousePostData: sousePosts,
            souseFollowerData: souseFollowers,
            souseFollowData: souseFollows
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/u/edit/:id",
        render: function render(props) {
          return _react["default"].createElement(_editUserProfile["default"], _extends({}, props, {
            sousePostData: sousePosts,
            souseCommentData: souseComments,
            souseFollowerData: souseFollowers,
            souseFollowData: souseFollows
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/p/:id",
        render: function render(props) {
          return _react["default"].createElement(_postsPage["default"], _extends({}, props, {
            souseUserData: souseUsers,
            sousePostData: sousePosts,
            souseCommentData: souseComments
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/p/edit/:id",
        component: _postEditForm["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/c/delete/:id",
        component: _commentDeleteSection["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        component: _Page["default"]
      }))))))) : _react["default"].createElement(_provider["default"], {
        theme: _globalTheme.souseDefaultTheme
      }, _react["default"].createElement(_globalStyling.GlobalStyle, null), _react["default"].createElement(Card, {
        className: "align-content-stretch flex-wrap entireProjectCard m-0"
      }, _react["default"].createElement(_v.CardBlock, null, _react["default"].createElement("div", {
        "class": "row h-100 m-0 p-0"
      }, _react["default"].createElement(_navbar["default"], {
        souseUserData: souseUsers
      }), _react["default"].createElement(_mainStyling.SouseCenterContainer, null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        render: function render(props) {
          return _react["default"].createElement(_LandingPage["default"], _extends({}, props, {
            souseUserData: souseUsers,
            sousePostData: sousePosts,
            souseCommentData: souseComments,
            souseFollowerData: souseFollowers,
            souseFollowData: souseFollows
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/signup",
        component: _signUpForm["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/login",
        component: _loginForm["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/:username",
        render: function render(props) {
          return _react["default"].createElement(_usersPage["default"], _extends({}, props, {
            souseUserData: souseUsers,
            sousePostData: sousePosts,
            souseFollowerData: souseFollowers,
            souseFollowData: souseFollows
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/u/edit/:id",
        render: function render(props) {
          return _react["default"].createElement(_editUserProfile["default"], _extends({}, props, {
            sousePostData: sousePosts,
            souseCommentData: souseComments,
            souseFollowerData: souseFollowers,
            souseFollowData: souseFollows
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/p/:id",
        render: function render(props) {
          return _react["default"].createElement(_postsPage["default"], _extends({}, props, {
            souseUserData: souseUsers,
            sousePostData: sousePosts,
            souseCommentData: souseComments
          }));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/p/edit/:id",
        component: _postEditForm["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/c/delete/:id",
        component: _commentDeleteSection["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        component: _Page["default"]
      })))))))));
    }
  }]);

  return MainSource;
}(_react.Component);

MainSource.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(MainSource);

exports["default"] = _default;