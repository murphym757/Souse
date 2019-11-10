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

var _reactTimestamp = _interopRequireDefault(require("react-timestamp"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mainStyling = require("../../assets/styles/mainStyling");

var _commentDeleteSection = _interopRequireDefault(require("./commentDeleteSection"));

var _commentsSection = _interopRequireDefault(require("./commentsSection"));

var _postsStyling = require("../../assets/styles/postsStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PostsGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(PostsGrid, _Component);

  function PostsGrid(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, PostsGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostsGrid).call(this, props));

    _this.displayComments = function (e) {
      _this.setState({
        commentSectionSelected: true
      });
    };

    _this.closeComments = function (e) {
      _this.setState({
        commentSectionSelected: false
      });
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUser = user.id;
    var sousePostCreatorId = _this.props.obj.postCreator;
    var sousePostCaption = _this.props.obj.sousePosts.postCaption;
    var sousePostLocation = _this.props.obj.sousePosts.postLocation;
    var sousePostImage = _this.props.obj.sousePosts.postImageURL;
    var sousePostUnixTimestamp = _this.props.obj.sousePosts.postUnixTimestamp;
    var sousePostCreatorName = _this.props.postCreatorName;
    var sousePostCreatorImage = _this.props.postCreatorImage;
    _this.state = (_this$state = {
      sousePostCreatorId: loggedinUser,
      sousePostCreatorName: sousePostCreatorName,
      sousePostCreatorImage: sousePostCreatorImage
    }, _defineProperty(_this$state, "sousePostCreatorId", sousePostCreatorId), _defineProperty(_this$state, "sousePostCaption", sousePostCaption), _defineProperty(_this$state, "sousePostLocation", sousePostLocation), _defineProperty(_this$state, "sousePostImage", sousePostImage), _defineProperty(_this$state, "sousePostUnixTimestamp", sousePostUnixTimestamp), _defineProperty(_this$state, "commentSectionSelected", false), _defineProperty(_this$state, "currentYear", new Date().getFullYear()), _this$state);
    _this.displayComments = _this.displayComments.bind(_assertThisInitialized(_this));
    _this.closeComments = _this.closeComments.bind(_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostsGrid, [{
    key: "commentsFinder",
    value: function commentsFinder() {
      var souseCommentData = this.props.souseCommentData;
      var souseCommentList = ["" + this.props.obj._id + ""],
          souseCommentsList = new Set(souseCommentList),
          souseFilterData = souseCommentData.filter(function (souseCommentsData) {
        return souseCommentsList.has(souseCommentsData.originalPostId);
      });
      return souseFilterData;
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var userName = user.username;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/p/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + this.props.obj._id).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });

      this.props.history.push("/" + userName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedinUser = user.id;
      var sousePostData = this.props.obj;
      var souseUserData = this.props.souseUserData;
      var souseCommentData = this.props.souseCommentData;
      var sousePostCreatorId = this.state.sousePostCreatorId;
      var sousePostImage = this.state.sousePostImage;
      var sousePostCaption = this.state.sousePostCaption;
      var sousePostLocation = this.state.sousePostLocation;
      var sousePostUnixTimestamp = this.state.sousePostUnixTimestamp;
      var sousePostCreatorName = this.state.sousePostCreatorName;
      var sousePostCreatorImage = this.state.sousePostCreatorImage;
      var commentSectionSelected = this.state.commentSectionSelected;
      var commentsTotal = "" + this.commentsFinder().length + "";
      return _react["default"].createElement("div", {
        "class": "mx-auto d-block"
      }, _react["default"].createElement("div", {
        "class": "d-none d-xl-block pt-5 container"
      }, " ", _react["default"].createElement("div", {
        "class": "row pt-5 d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "col-6 d-flex justify-content-center my-auto"
      }, _react["default"].createElement(_postsStyling.PostPageImage, {
        className: "souseUserPostsPage",
        src: sousePostImage,
        alt: "sousePostImage",
        width: "1080px",
        height: "1080px"
      })), _react["default"].createElement("div", {
        "class": "col-6"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, commentSectionSelected ? _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("h6", {
        "class": "float-right",
        onClick: this.closeComments
      }, _react["default"].createElement(_postsStyling.CloseIcon, null)))), _react["default"].createElement(_commentsSection["default"], {
        originalPostData: sousePostData,
        souseUserData: souseUserData,
        souseCommentorImage: sousePostCreatorImage,
        souseCommentData: souseCommentData
      }), " "))) : _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-2 p-0 m-0"
      }, _react["default"].createElement(_postsStyling.PostPageIcon, {
        className: "souseUserIconComments",
        src: sousePostCreatorImage,
        alt: "souseUserIconComments",
        width: "25px",
        height: "25px"
      })), _react["default"].createElement("div", {
        "class": "pl-2 col-8 p-0 my-auto"
      }, _react["default"].createElement(_postsStyling.PostCreatorName, {
        className: "sousePostCreatorName d-flex align-items-top  p-0 m-0"
      }, " ", sousePostCreatorName), _react["default"].createElement(_postsStyling.PostLocation, {
        className: "sousePostLocation d-flex align-items-bottom  p-0 m-0"
      }, " ", sousePostLocation)), isAuthenticated && sousePostCreatorId === loggedinUser ? _react["default"].createElement("div", {
        "class": "col-1 my-auto"
      }, " ", _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: {
          pathname: "/p/edit/" + this.props.obj._id,
          state: {
            postTimestamp: sousePostUnixTimestamp
          }
        }
      }, _react["default"].createElement("h6", null, _react["default"].createElement(_postsStyling.EditIcon, null)))))) : _react["default"].createElement("div", null))), _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement(_postsStyling.CaptionPreScrollable, {
        className: "col-12"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("h6", {
        "class": "sousePostCaption"
      }, sousePostCaption))), _react["default"].createElement("div", {
        "class": "col-12 no-gutters sousePostUserCommentsLink"
      }, commentsTotal == 0 ? _react["default"].createElement(_postsStyling.CommentsLinkFont, {
        className: "pt-3 pb-3"
      }, "This post has ", commentsTotal, " comments") : _react["default"].createElement(_postsStyling.CommentsLinkFont, {
        className: "pt-3 pb-3",
        onClick: this.displayComments
      }, "View all ", commentsTotal, " comments"))))), _react["default"].createElement("div", {
        "class": "souseFooter"
      }, _react["default"].createElement("h6", null, _react["default"].createElement("i", {
        "class": "far fa-copyright"
      }), this.state.currentYear, " Souse"))))), _react["default"].createElement("div", {
        "class": "d-xl-none container-fluid"
      }, " ", _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement(_postsStyling.SouseDiv, {
        className: "d-flex justify-content-center my-auto p-0"
      }, _react["default"].createElement("div", {
        className: "m-0 p-0 sousePortrait souseLandscape"
      }, _react["default"].createElement(_postsStyling.PostPageImage, {
        className: "souseUserPostsPage",
        src: sousePostImage,
        alt: "sousePostImage",
        width: "1080px",
        height: "1080px"
      }))), _react["default"].createElement(_postsStyling.SouseDiv, null, _react["default"].createElement("div", {
        className: "sousePortrait souseLandscape"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, commentSectionSelected ? _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12 p-0 m-0"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("h6", {
        "class": "float-right",
        onClick: this.closeComments
      }, _react["default"].createElement(_postsStyling.CloseIcon, null)))), _react["default"].createElement(_commentsSection["default"], {
        originalPostData: sousePostData,
        souseUserData: souseUserData,
        souseCommentorImage: sousePostCreatorImage,
        souseCommentData: souseCommentData
      }), " "))) : _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("div", {
        "class": "row pt-3"
      }, _react["default"].createElement("div", {
        "class": "col-2 p-0 m-0"
      }, _react["default"].createElement(_postsStyling.PostPageIcon, {
        className: "souseUserIconComments",
        src: sousePostCreatorImage,
        alt: "souseUserIconComments",
        width: "25px",
        height: "25px"
      })), _react["default"].createElement("div", {
        "class": "pl-2 col-8 p-0 my-auto"
      }, _react["default"].createElement(_postsStyling.PostCreatorName, {
        className: "sousePostCreatorName p-0 m-0"
      }, " ", sousePostCreatorName), _react["default"].createElement(_postsStyling.PostLocation, {
        className: "sousePostLocation p-0 m-0"
      }, " ", sousePostLocation)), isAuthenticated && sousePostCreatorId === loggedinUser ? _react["default"].createElement("div", {
        "class": "col-1 my-auto"
      }, " ", _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: {
          pathname: "/p/edit/" + this.props.obj._id,
          state: {
            postTimestamp: sousePostUnixTimestamp
          }
        }
      }, _react["default"].createElement("h6", null, _react["default"].createElement(_postsStyling.EditIcon, null)))))) : _react["default"].createElement("div", null))), _react["default"].createElement("div", {
        "class": "row"
      }, isAuthenticated && sousePostCreatorId === loggedinUser ? _react["default"].createElement(_postsStyling.CaptionPreScrollableLoggedIn, null, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("h6", {
        "class": "sousePostCaption"
      }, sousePostCaption))) : _react["default"].createElement(_postsStyling.CaptionPreScrollable, null, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("h6", {
        "class": "sousePostCaption"
      }, sousePostCaption))), _react["default"].createElement("div", {
        "class": "col-12 no-gutters sousePostUserCommentsLink"
      }, commentsTotal == 0 ? _react["default"].createElement(_postsStyling.CommentsLinkFont, {
        className: "pt-3 pb-3"
      }, "This post has ", commentsTotal, " comments") : _react["default"].createElement(_postsStyling.CommentsLinkFont, {
        className: "pt-3 pb-3",
        onClick: this.displayComments
      }, "View all ", commentsTotal, " comments"))))), _react["default"].createElement("div", {
        "class": "souseFooter"
      }, _react["default"].createElement("h6", null, _react["default"].createElement("i", {
        "class": "far fa-copyright"
      }), this.state.currentYear, " Souse")))))));
    }
  }]);

  return PostsGrid;
}(_react.Component);

PostsGrid.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(PostsGrid));

exports["default"] = _default;