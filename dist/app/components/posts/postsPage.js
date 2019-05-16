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

var _postsGrid = _interopRequireDefault(require("../posts/postsGrid"));

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

var PostPage =
/*#__PURE__*/
function (_Component) {
  _inherits(PostPage, _Component);

  function PostPage(props) {
    var _this;

    _classCallCheck(this, PostPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostPage).call(this, props));
    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedInUsername = user.username;
    var loggedInUserId = user.id;
    var postIdFinder = window.location.pathname;
    var postIdFound = postIdFinder.slice(3);
    _this.state = {
      posts: [],
      users: [],
      originalPostId: postIdFound,
      postCreatorId: '',
      postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
    };
    return _this;
  }

  _createClass(PostPage, [{
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
        console.log(users);

        _this2.setState({
          users: users
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "postFinder",
    value: function postFinder() {
      var _this3 = this;

      var sousePosts = this.state.posts;
      var filteredPostData = Object.keys(sousePosts).filter(function (i) {
        // Finds Specific Post
        return sousePosts[i]._id === "" + _this3.state.originalPostId + "";
      }),
          postIdFinder = Object.keys(sousePosts).map(function (object, i) {
        return sousePosts[filteredPostData]._id;
      }),
          postId = postIdFinder.find(function (i) {
        return "" + postIdFinder[0] + "";
      });
      var sousePostList = ["" + postId + ""],
          sousePostsList = new Set(sousePostList),
          souseFilterPosts = sousePosts.filter(function (sousePost) {
        return sousePostsList.has(sousePost._id);
      });
      var filteredPostCreator = Object.keys(sousePosts).filter(function (i) {
        // Finds Username of Specific Post
        return sousePosts[i]._id === "" + _this3.state.originalPostId + "";
      }),
          postCreatorIdFinder = Object.keys(sousePosts).map(function (object, i) {
        return sousePosts[filteredPostCreator].postCreator;
      }),
          postCreatorId = postCreatorIdFinder.find(function (i) {
        return "" + postCreatorIdFinder[0] + "";
      });
      var souseUsers = this.state.users;
      var filteredUsernameData = Object.keys(souseUsers).filter(function (i) {
        // Finds Username in souseUsersDB and display data from it (Username)
        return souseUsers[i]._id === "" + postCreatorId + "";
      }),
          postUserNameFinder = Object.keys(souseUsers).map(function (object, i) {
        return souseUsers[filteredUsernameData].username;
      }),
          postUserName = postUserNameFinder.find(function (i) {
        return "" + postUserNameFinder[0] + "";
      });
      var sousePostCreatorName = postUserName;
      var sousePostCreatorImage = this.state.postCreatorImage;
      var userData = souseFilterPosts.map(function (object, i) {
        return _react["default"].createElement(_postsGrid["default"], {
          obj: object,
          key: i,
          postCreatorName: sousePostCreatorName,
          postCreatorImage: sousePostCreatorImage
        });
      });
      return userData;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      return _react["default"].createElement("div", null, isAuthenticated ? _react["default"].createElement("div", null, this.postFinder()) : _react["default"].createElement("div", null, this.postFinder()));
    }
  }]);

  return PostPage;
}(_react.Component);

PostPage.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PostPage);

exports["default"] = _default;