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

var _commentDeleteSection = _interopRequireDefault(require("./commentDeleteSection"));

var _commentsSection = _interopRequireDefault(require("./commentsSection"));

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

var PostsGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(PostsGrid, _Component);

  function PostsGrid(props) {
    var _this;

    _classCallCheck(this, PostsGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostsGrid).call(this, props));
    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUser = user.username;
    _this.state = {
      postCreatorId: loggedinUser,
      postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
      currentYear: new Date().getFullYear()
    };
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostsGrid, [{
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
      var postData = this.props.obj;
      var postId = this.props.obj._id;
      var souseUserData = this.props.souseUserData;
      var souseCommentData = this.props.souseCommentData;
      var postCreatorId = this.props.obj.postCreator;
      var postCaption = this.props.obj.sousePosts.postCaption;
      var sousePostImage = this.props.obj.sousePosts.postImageURL;
      var postUnixTimestamp = this.props.obj.sousePosts.postUnixTimestamp;
      var postCreatorName = this.props.postCreatorName;
      var postCreatorImage = this.props.postCreatorImage;
      return _react["default"].createElement("div", {
        "class": "mx-auto d-block pt-1"
      }, _react["default"].createElement("div", {
        "class": "d-none d-xl-block container"
      }, " ", _react["default"].createElement("div", {
        "class": "row pt-5"
      }, _react["default"].createElement("div", {
        "class": "col-8"
      }, _react["default"].createElement("div", {
        "class": "img-wrapper"
      }, _react["default"].createElement("div", {
        "class": "img-responsive"
      }, _react["default"].createElement("div", {
        "class": "souseImageFormat"
      }, _react["default"].createElement("img", {
        "class": "mx-auto d-block sousePostImage pb-2",
        src: sousePostImage,
        alt: "sousePostImage",
        width: "1080px",
        height: "1080px"
      }))))), _react["default"].createElement("div", {
        "class": "col-4"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-2"
      }, _react["default"].createElement("img", {
        "class": "souseUserIconComments",
        src: this.state.postUserImage,
        alt: "souseUserIconComments",
        width: "25px",
        height: "25px"
      })), _react["default"].createElement("div", {
        "class": "col-8"
      }, _react["default"].createElement("h6", {
        "class": "sousePostCreatorName"
      }, postCreatorName))), _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("h6", {
        "class": "sousePostCaption"
      }, postCaption))), isAuthenticated && postCreatorId === loggedinUser ? _react["default"].createElement("div", {
        "class": "container-fluid img-overlay col justify-content-left"
      }, _react["default"].createElement("div", {
        "class": "row profileImageRow"
      }, " ", _react["default"].createElement("div", {
        "class": "col-6"
      }), _react["default"].createElement("div", {
        "class": "col-3 d-flex flex-row"
      }, _react["default"].createElement("div", {
        "class": "buttonform-group"
      }, _react["default"].createElement("img", {
        "class": "souseUserIcon",
        src: postCreatorImage,
        alt: "souseUserIcon",
        width: "85px",
        height: "85px"
      }))), _react["default"].createElement("div", {
        "class": "col-3 d-flex flex-row-reverse"
      }, _react["default"].createElement("div", {
        "class": "form-group pt-4"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: {
          pathname: "/p/edit/" + this.props.obj._id,
          state: {
            postTimestamp: postUnixTimestamp
          }
        }
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Edit Post")))))), _react["default"].createElement("div", {
        "class": "row profileImageRow"
      }, " ", _react["default"].createElement("div", {
        "class": "col-6"
      }), _react["default"].createElement("div", {
        "class": "col-3 d-flex flex-row"
      }, _react["default"].createElement("p", {
        "class": "userData"
      }, this.props.postCreatorName)), _react["default"].createElement("div", {
        "class": "col-3 d-flex flex-row-reverse"
      }, _react["default"].createElement("p", {
        "class": "followData"
      }))), _react["default"].createElement("div", {
        "class": "row profileImageRow"
      }, " ", _react["default"].createElement("div", {
        "class": "col-6"
      }), _react["default"].createElement("div", {
        "class": "col-3 d-flex flex-row"
      }, _react["default"].createElement("p", {
        "class": "locationData"
      })), _react["default"].createElement("div", {
        "class": "col-3 d-flex flex-row-reverse"
      }, _react["default"].createElement("p", {
        "class": "followData"
      })))) : _react["default"].createElement("div", null), _react["default"].createElement(_commentsSection["default"], {
        originalPostData: postData,
        souseUserData: souseUserData,
        souseCommentData: souseCommentData
      }), " "), _react["default"].createElement("div", {
        "class": "souseFooter"
      }, _react["default"].createElement("h6", null, _react["default"].createElement("i", {
        "class": "far fa-copyright"
      }), this.state.currentYear, " Souse"))))), _react["default"].createElement("div", {
        "class": "d-xl-none container-fluid"
      }, " ", _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-sm-6 no-gutters postSection"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12 no-gutters sousePostImageColumn"
      }, _react["default"].createElement("div", {
        "class": "img-responsive"
      }, _react["default"].createElement("div", {
        "class": "souseImageFormat"
      }, _react["default"].createElement("img", {
        "class": "mx-auto d-block sousePostImage",
        src: sousePostImage,
        alt: "sousePostImage",
        width: "1080px",
        height: "1080px"
      })))), _react["default"].createElement("div", {
        "class": "col-12 no-gutters sousePostUserDataColumn"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-3 no-gutters souseUserImageColumn"
      }, _react["default"].createElement("img", {
        "class": "souseUserIconPost",
        src: this.state.postCreatorImage,
        alt: "souseUserIconPost",
        width: "25px",
        height: "25px"
      })), _react["default"].createElement("div", {
        "class": "col-9 souseUserNameColumn"
      }, _react["default"].createElement("h6", {
        "class": "souseUsername"
      }, _react["default"].createElement("span", null, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/".concat(postCreatorName)
      }, postCreatorName))), _react["default"].createElement("h6", {
        "class": "sousePostCaption"
      }, postCaption), _react["default"].createElement("div", {
        "class": "row souseEditPostButton"
      }, _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: {
          pathname: "/p/edit/" + this.props.obj._id,
          state: {
            postTimestamp: postUnixTimestamp
          }
        }
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-small"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Edit Post"))))))))), _react["default"].createElement("div", {
        "class": "col-sm-6 no-gutters souseCommentsColumn"
      }, " ", _react["default"].createElement(_commentsSection["default"], {
        originalPostData: postData,
        souseUserData: souseUserData,
        souseCommentData: souseCommentData
      }), " ", _react["default"].createElement("div", {
        "class": "souseFooter"
      }, _react["default"].createElement("h6", null, _react["default"].createElement("i", {
        "class": "far fa-copyright"
      }), this.state.currentYear, " Souse"))))));
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