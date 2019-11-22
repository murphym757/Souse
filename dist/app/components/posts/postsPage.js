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
      originalPostId: postIdFound,
      postCreatorId: '',
      postCreatorImage: ''
    };
    return _this;
  }

  _createClass(PostPage, [{
    key: "postCreatorIDFinder",
    value: function postCreatorIDFinder() {
      var sousePostData = this.props.sousePostData;
      var postId = this.state.originalPostId;
      var filteredPostCreator = Object.keys(sousePostData).filter(function (i) {
        return sousePostData[i]._id === "" + postId + "";
      }),
          postCreatorIdFinder = Object.keys(sousePostData).map(function (object, i) {
        return sousePostData[filteredPostCreator].postCreator;
      }),
          postCreatorId = postCreatorIdFinder.find(function (i) {
        return "" + postCreatorIdFinder[0] + "";
      });
      return postCreatorId;
    }
  }, {
    key: "postCreatorUsernameFinder",
    value: function postCreatorUsernameFinder() {
      var _this2 = this;

      var souseUserData = this.props.souseUserData;
      var filteredUsernameData = Object.keys(souseUserData).filter( // Finds Username in souseUsersDB and display data from it (Username)
      function (i) {
        return souseUserData[i]._id === "" + _this2.postCreatorIDFinder() + "";
      }),
          postUserNameFinder = Object.keys(souseUserData).map(function (object, i) {
        return souseUserData[filteredUsernameData].username;
      }),
          postUserName = postUserNameFinder.find(function (i) {
        return "" + postUserNameFinder[0] + "";
      });
      return postUserName;
    }
  }, {
    key: "postCreatorImageFinder",
    value: function postCreatorImageFinder() {
      var _this3 = this;

      var souseUserData = this.props.souseUserData;
      var filteredUsernameData = Object.keys(souseUserData).filter( // Finds Username in souseUsersDB and display data from it (Username)
      function (i) {
        return souseUserData[i]._id === "" + _this3.postCreatorIDFinder() + "";
      }),
          postUserImageFinder = Object.keys(souseUserData).map(function (object, i) {
        return souseUserData[filteredUsernameData].userImage;
      }),
          postUserImage = postUserImageFinder.find(function (i) {
        return "" + postUserImageFinder[0] + "";
      });
      return postUserImage;
    }
  }, {
    key: "foundUserData",
    value: function foundUserData() {
      var souseUserData = this.props.souseUserData;
      var souseCommentData = this.props.souseCommentData;
      var sousePostData = this.props.sousePostData;
      var postId = this.state.originalPostId;
      var sousePostCreatorName = this.postCreatorUsernameFinder();
      var sousePostCreatorImage = this.postCreatorImageFinder();
      console.log(sousePostCreatorImage);
      var sousePostList = ["" + postId + ""],
          sousePostsList = new Set(sousePostList),
          souseFilterPosts = sousePostData.filter(function (sousePostData) {
        return sousePostsList.has(sousePostData._id);
      });
      var userData = souseFilterPosts.map(function (object, i) {
        return _react["default"].createElement(_postsGrid["default"], {
          obj: object,
          key: i,
          postCreatorName: sousePostCreatorName,
          postCreatorImage: sousePostCreatorImage,
          souseUserData: souseUserData,
          souseCommentData: souseCommentData
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
      return _react["default"].createElement("div", null, isAuthenticated ? _react["default"].createElement("div", null, this.foundUserData()) : _react["default"].createElement("div", null, this.foundUserData()));
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