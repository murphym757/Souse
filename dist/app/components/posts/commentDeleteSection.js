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

var _ThumbsOk = require("styled-icons/typicons/ThumbsOk");

var _ThumbsDown = require("styled-icons/typicons/ThumbsDown");

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

var CommentDelete =
/*#__PURE__*/
function (_Component) {
  _inherits(CommentDelete, _Component);

  function CommentDelete(props) {
    var _this;

    _classCallCheck(this, CommentDelete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentDelete).call(this, props));
    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUser = user.id;
    var loggedinUsername = user.username;
    var originalPostId = _this.props.location.state.originalPostId;
    var commentIdFinder = window.location.pathname;
    var commentIdFound = commentIdFinder.slice(10);
    _this.state = {
      commentCreatorId: loggedinUser,
      commentCreatorUsername: loggedinUsername,
      commentId: commentIdFound,
      originalPostId: originalPostId.originalPostId
    };
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CommentDelete, [{
    key: "delete",
    value: function _delete() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var userName = user.username;
      var postId = this.state.originalPostId;
      var commentId = this.state.commentId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/c/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + commentId).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });

      this.props.history.push("/p/" + postId);
      window.location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedinUser = user.username;
      var ThumbsOkIcon = (0, _styledComponents["default"])(_ThumbsOk.ThumbsOk).withConfig({
        displayName: "commentDeleteSection__ThumbsOkIcon",
        componentId: "sc-1vwvo78-0"
      })(["color:#C45758;height:1.1em;width:1.5em;"]);
      var ThumbsDownIcon = (0, _styledComponents["default"])(_ThumbsDown.ThumbsDown).withConfig({
        displayName: "commentDeleteSection__ThumbsDownIcon",
        componentId: "sc-1vwvo78-1"
      })(["color:#C45758;height:1.1em;width:1.5em;"]);
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "souseCommentInput"
      }, " ", _react["default"].createElement("div", {
        "class": "commentsPostsSection"
      }, _react["default"].createElement("div", {
        "class": "pre-scrollable"
      }, _react["default"].createElement("div", {
        "class": "row no-gutters commentsSectionBody"
      }, _react["default"].createElement("div", {
        "class": "col-2"
      }, _react["default"].createElement("img", {
        "class": "souseUserIconComments",
        src: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
        alt: "souseUserIconComments",
        width: "25px",
        height: "25px"
      })), _react["default"].createElement("div", {
        "class": "col-10"
      }, _react["default"].createElement("h6", {
        "class": "souseCommentsCaption"
      }, _react["default"].createElement("div", {
        "class": "row optionRow"
      }, _react["default"].createElement("div", {
        "class": "col-6"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/p/".concat(this.state.originalPostId)
      }, _react["default"].createElement(ThumbsDownIcon, null))), _react["default"].createElement("div", {
        "class": "col-6",
        onClick: this["delete"]
      }, _react["default"].createElement(ThumbsOkIcon, null))))))))));
    }
  }]);

  return CommentDelete;
}(_react.Component);

CommentDelete.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(CommentDelete));

exports["default"] = _default;