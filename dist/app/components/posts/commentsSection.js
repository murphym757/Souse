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

var _materializeCss = _interopRequireDefault(require("materialize-css"));

var _Delete = require("styled-icons/typicons/Delete");

var _ThumbsOk = require("styled-icons/typicons/ThumbsOk");

var _ThumbsDown = require("styled-icons/typicons/ThumbsDown");

var _DotsHorizontalRounded = require("styled-icons/boxicons-regular/DotsHorizontalRounded");

var _reactTimestamp = _interopRequireDefault(require("react-timestamp"));

var _commentDeleteSection = _interopRequireDefault(require("./commentDeleteSection"));

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

var CommentsSection =
/*#__PURE__*/
function (_Component) {
  _inherits(CommentsSection, _Component);

  function CommentsSection(props) {
    var _this;

    _classCallCheck(this, CommentsSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentsSection).call(this, props));

    _this.onChangePostComment = function (e) {
      _this.setState({
        postComment: e.target.value
      });
    };

    _this.onSubmitComment = function (e) {
      e.preventDefault();
      var postData = {
        commentCreatorId: _this.state.commentCreatorId,
        commentCreatorUsername: _this.state.commentCreatorUsername,
        souseComment: _this.state.postComment,
        originalPostId: _this.state.originalPostId
      };
      var apiRoute = "/souseAPI";
      var createRoute = "/c/add";

      _axios["default"].post(apiRoute + createRoute, postData).then(function (res) {
        return console.log(res.data);
      });

      _this.setState({
        commentCreatorId: '',
        commentCreatorUsername: '',
        souseComment: '',
        originalPostId: ''
      });

      window.location.reload(false);
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUser = user.id;
    var loggedinUsername = user.username;
    var originalPostData = _this.props.originalPostData;
    var originalPostId = _this.props.originalPostData._id;
    _this.state = {
      commentCreatorId: loggedinUser,
      commentCreatorUsername: loggedinUsername,
      originalPostId: originalPostId,
      commentId: '',
      postComment: '',
      deleteCommentSelected: false
    };
    _this.onChangePostComment = _this.onChangePostComment.bind(_assertThisInitialized(_this));
    _this.onSubmitComment = _this.onSubmitComment.bind(_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CommentsSection, [{
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
      window.location.reload(false);
    }
  }, {
    key: "commentsFinder",
    value: function commentsFinder() {
      var souseCommentData = this.props.souseCommentData;
      var souseCommentList = ["" + this.state.originalPostId + ""],
          souseCommentsList = new Set(souseCommentList),
          souseFilterData = souseCommentData.filter(function (souseCommentsData) {
        return souseCommentsList.has(souseCommentsData.originalPostId);
      });
      console.log(souseFilterData);
      return souseFilterData;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedinUser = user.username;
      var originalPostId = this.props.originalPostData._id;
      var DeleteIcon = (0, _styledComponents["default"])(_Delete.Delete).withConfig({
        displayName: "commentsSection__DeleteIcon",
        componentId: "wmizgj-0"
      })(["color:#C45758;height:1.1em;width:1.5em;"]);
      var DotsHorizontalRoundedIcon = (0, _styledComponents["default"])(_DotsHorizontalRounded.DotsHorizontalRounded).withConfig({
        displayName: "commentsSection__DotsHorizontalRoundedIcon",
        componentId: "wmizgj-1"
      })(["color:#C45758;height:1.1em;width:1.5em;"]);
      var ThumbsOkIcon = (0, _styledComponents["default"])(_ThumbsOk.ThumbsOk).withConfig({
        displayName: "commentsSection__ThumbsOkIcon",
        componentId: "wmizgj-2"
      })(["color:#C45758;height:1.1em;width:1.5em;"]);
      var ThumbsDownIcon = (0, _styledComponents["default"])(_ThumbsDown.ThumbsDown).withConfig({
        displayName: "commentsSection__ThumbsDownIcon",
        componentId: "wmizgj-3"
      })(["color:#C45758;height:1.1em;width:1.5em;"]);
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "souseCommentInput"
      }, " ", _react["default"].createElement("div", {
        "class": "commentsPostsSection"
      }, _react["default"].createElement("div", {
        "class": "pre-scrollable"
      }, Object.keys(this.commentsFinder()).map(function (object, i) {
        return _react["default"].createElement("div", {
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
        }, _react["default"].createElement("span", {
          "class": "pr-1"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/".concat(_this2.commentsFinder()[i].commentCreatorUsername)
        }, _this2.commentsFinder()[i].commentCreatorUsername), " "), _this2.commentsFinder()[i].souseComment), _react["default"].createElement("div", {
          "class": "row souseCommentsDataReply"
        }, _react["default"].createElement("h6", {
          "class": "col-4 pl-4 commentTime"
        }, _react["default"].createElement(_reactTimestamp["default"], {
          relative: true,
          time: Date,
          relativeTo: _this2.commentsFinder()[i].commentCreatedDate
        })), _react["default"].createElement("h6", {
          "class": "col-8 pl-2"
        }, _this2.commentsFinder()[i].commentCreatorUsername == loggedinUser ? _react["default"].createElement("div", null, _react["default"].createElement("h6", null, _react["default"].createElement("div", {
          "class": "modal-trigger",
          href: "#modal1",
          onClick: _this2.deleteClicked = function (e) {
            _this2.setState({
              deleteCommentSelected: true,
              commentId: _this2.commentsFinder()[i]._id
            });
          }
        }, _react["default"].createElement(DotsHorizontalRoundedIcon, null))), _react["default"].createElement("div", {
          id: "modal1",
          "class": "modal"
        }, _react["default"].createElement("div", {
          "class": "container-fluid"
        }, _react["default"].createElement("div", {
          "class": "modal-content"
        }, _react["default"].createElement("div", {
          "class": "row d-flex justify-content-center"
        }, _react["default"].createElement("div", {
          "class": "container"
        }, _react["default"].createElement("button", {
          type: "button",
          "class": "btn btn-modalButton btn-lg btn-block",
          onClick: _this2["delete"]
        }, "Delete"), _react["default"].createElement("button", {
          type: "button",
          "class": "btn btn-modalButton btn-lg btn-block modal-close",
          onClick: _this2.deleteClickedAlt
        }, "Cancel"))))))) : _react["default"].createElement("div", null)), " ")));
      }))), isAuthenticated ? _react["default"].createElement("div", {
        "class": "row commentsFormSection"
      }, _react["default"].createElement("form", {
        "class": "col s12",
        onSubmit: this.onSubmitComment
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "input-field col s6"
      }, _react["default"].createElement("input", {
        id: "souse_comment",
        type: "text",
        maxLength: 1000,
        "class": "validate",
        value: this.state.postComment,
        onChange: this.onChangePostComment
      }), _react["default"].createElement("label", {
        "for": "souse_comment"
      }, "Add a Comment (", this.state.postComment.length, "/1000)"))))) : _react["default"].createElement("div", null)));
    }
  }]);

  return CommentsSection;
}(_react.Component);

CommentsSection.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(CommentsSection));

exports["default"] = _default;