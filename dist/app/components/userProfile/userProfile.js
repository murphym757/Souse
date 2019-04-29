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
    var usernameFinder = window.location.pathname;
    var usernameFound = usernameFinder.slice(1);
    _this.state = {
      posts: [],
      users: [],
      postCreatorUsername: usernameFound,
      postCreatorId: '',
      postTotalDisplay: '1'
    };
    return _this;
  }

  _createClass(UserProfile, [{
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

      var souseUsers = this.state.users;
      var filteredUsernameData = Object.keys(souseUsers).filter(function (i) {
        return souseUsers[i].username === "" + _this3.state.postCreatorUsername + "";
      }),
          userIdFinder = Object.keys(souseUsers).map(function (object, i) {
        return souseUsers[filteredUsernameData]._id;
      }),
          userId = userIdFinder.find(function (i) {
        return "" + userIdFinder[0] + "";
      });
      var sousePosts = this.state.posts;
      var souseUserList = ["" + userId + ""],
          sousePostsList = new Set(souseUserList),
          souseFilterData = sousePosts.filter(function (sousePost) {
        return sousePostsList.has(sousePost.postCreator);
      });
      return souseFilterData;
    }
  }, {
    key: "postFilterDisplay",
    value: function postFilterDisplay() {
      var _this4 = this;

      var postFilterDisplay = Object.keys(this.postFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
          obj: object,
          key: i
        }, _react["default"].createElement("h6", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/p/".concat(_this4.postFinder()[i]._id)
        }, _this4.postFinder()[i]._id)));
      });
      return postFilterDisplay;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedInUsername = user.username;
      var usernamePage = this.props.match.params.username;
      var postsTotal = "" + this.postFinder().length + "";
      return _react["default"].createElement("div", {
        "class": "container"
      }, isAuthenticated ? _react["default"].createElement("div", null, _react["default"].createElement("h2", null, "lope"), _react["default"].createElement("h2", null, "Welcome, ", this.state.postCreatorUsername)) : _react["default"].createElement("h2", null, "Welcome Guest"), _react["default"].createElement("div", {
        "class": "usersPosts"
      }, _react["default"].createElement("h6", null, _react["default"].createElement(_postIndex["default"], null)), this.state.postTotalDisplay === postsTotal ? _react["default"].createElement("h6", null, postsTotal, " post") : _react["default"].createElement("h6", null, postsTotal, " posts"), this.postFilterDisplay()));
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