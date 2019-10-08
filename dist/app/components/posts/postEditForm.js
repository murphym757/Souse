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

var _mainStyling = require("../../assets/styles/mainStyling");

var _styledSpinkit = require("styled-spinkit");

var _awsS = _interopRequireDefault(require("aws-s3"));

var _config = _interopRequireDefault(require("../../../server/config"));

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

var PostEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(PostEdit, _Component);

  function PostEdit(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, PostEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostEdit).call(this, props));

    _this.onChangepostCaption = function (e) {
      _this.setState({
        postCaption: e.target.value
      });
    };

    _this.onUpdateImage = function (e) {
      _this.setState({
        updateImage: true
      });
    };

    _this.onImageUpload = function (e) {
      var config = {
        bucketName: _config["default"].AWS_BUCKET_NAME,
        dirName: "posts/" + "" + _this.state.postCreatorId + "",
        region: _config["default"].AWS_REGION,
        accessKeyId: _config["default"].AWS_ACCESS_KEY_ID,
        secretAccessKey: _config["default"].AWS_SECRET_ACCESS_KEY,
        s3Url: _config["default"].AWS_Uploaded_File_URL_LINK
        /* Required */

      };
      var S3Client = new _awsS["default"](config);
      var newFileName = "" + _this.state.postUnixTimestamp + "";
      S3Client.uploadFile(e.target.files[0], newFileName).then(function (data) {
        _this.setState({
          postImageURL: data.location,
          isLoading: true
        });
      })["catch"](function (err) {
        alert(err);
      });

      _this.setState({
        postImageFileType: e.target.files[0].type.slice(6),
        newPostImageFileName: _this.state.postUnixTimestamp + "." + e.target.files[0].type.slice(6),
        fullPostUploadLoader: true
      });
    };

    _this.onUpdateImageDelete = function (e) {
      var config = {
        bucketName: _config["default"].AWS_BUCKET_NAME,
        dirName: "posts/" + "" + _this.state.postCreatorId + "",
        region: _config["default"].AWS_REGION,
        accessKeyId: _config["default"].AWS_ACCESS_KEY_ID,
        secretAccessKey: _config["default"].AWS_SECRET_ACCESS_KEY,
        s3Url: _config["default"].AWS_Uploaded_File_URL_LINK
        /* Required */

      };
      var S3Client = new _awsS["default"](config);
      var filename = "1561781587964.jpeg";
      S3Client.deleteFile(filename).then(function (res) {
        return console.log(res);
      })["catch"](function (err) {
        return console.error(err);
      });
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var postData = {
        postCreatorId: _this.state.postCreatorId,
        postCaption: _this.state.postCaption,
        postUnixTimestamp: _this.state.postUnixTimestamp,
        postImageFileType: _this.state.postImageFileType,
        postImageFileName: _this.state.newPostImageFileName,
        postImageURL: _this.state.postImageURL
      };
      var apiRoute = "/souseAPI";
      var updateRoute = "/p/update";
      var postId = _this.state.originalPostId;

      _axios["default"].post(apiRoute + updateRoute + "/" + postId, postData).then(function (res) {
        return console.log(res.data);
      });

      _this.props.history.push("/p/" + postId);
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var postTimestamp = _this.props.location.state.postTimestamp;
    var loggedInUsername = user.username;
    var loggedInUserId = user.id;
    var postIdPathname = window.location.pathname;
    var postIdFound = postIdPathname.slice(8);
    _this.state = (_this$state = {
      posts: [],
      users: [],
      originalPostId: postIdFound,
      postCreatorId: '',
      postCaption: '',
      postImageURL: '',
      updateImage: false,
      updatedImage: false,
      isLoading: false
    }, _defineProperty(_this$state, "postCreatorId", loggedInUserId), _defineProperty(_this$state, "postUnixTimestamp", postTimestamp), _defineProperty(_this$state, "postImageFileType", ''), _defineProperty(_this$state, "postImageFileName", ''), _defineProperty(_this$state, "newPostImageFileName", ''), _defineProperty(_this$state, "username", loggedInUsername), _defineProperty(_this$state, "fullPostUploadLoader", false), _this$state);
    _this.onChangepostCaption = _this.onChangepostCaption.bind(_assertThisInitialized(_this));
    _this.onUpdateImage = _this.onUpdateImage.bind(_assertThisInitialized(_this));
    _this.onImageUpload = _this.onImageUpload.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onUpdateImageDelete = _this.onUpdateImageDelete.bind(_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      {
        /* Edit Post Command */
      }
      var apiRoute = "/souseAPI";
      var editRoute = "/p/edit";
      var postId = this.state.originalPostId;

      _axios["default"].get(apiRoute + editRoute + "/" + postId).then(function (res) {
        _this2.setState({
          postCaption: res.data.sousePosts.postCaption,
          postCreatorId: res.data.postCreator,
          postImageURL: res.data.sousePosts.postImageURL
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var userName = user.username;
      var postId = this.state.originalPostId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/p/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + postId).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });

      this.props.history.push("/" + userName);
      window.location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedInUser = "" + user.id + "";
      var postCreatorId = this.state.postCreatorId;
      var updateImage = this.state.updateImage;
      var updatedImage = this.state.updatedImage;

      var TestFont = _styledComponents["default"].h6.withConfig({
        displayName: "postEditForm__TestFont",
        componentId: "sc-20ft5w-0"
      })(["color:", ";"], function (props) {
        return props.theme.main;
      });

      TestFont.defaultProps = {
        theme: {
          main: "palevioletred"
        }
      };
      return _react["default"].createElement("div", null, isAuthenticated && postCreatorId == loggedInUser ? _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement(_mainStyling.SouseForm, {
        onSubmit: this.onSubmit
      }, _react["default"].createElement(TestFont, null, "Hi There"), _react["default"].createElement("div", {
        "class": "row pt-5"
      }, _react["default"].createElement("div", {
        "class": "input-field col-6"
      }, _react["default"].createElement("textarea", {
        "class": "materialize-textarea editText",
        name: "postCaption",
        id: "souseCaptionPost",
        rows: "1",
        value: this.state.postCaption,
        onChange: this.onChangepostCaption
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseCaptionPost"
      }, "Caption")), _react["default"].createElement("div", {
        "class": "col-6"
      }, updateImage ? _react["default"].createElement("div", null, this.state.fullPostUploadLoader ? _react["default"].createElement("div", null, this.state.isLoading ? _react["default"].createElement("div", null, _react["default"].createElement("label", {
        "class": "d-block justify-content-center"
      }, "Image updated"), _react["default"].createElement("div", {
        "class": "thumbnail"
      }, _react["default"].createElement("div", {
        "class": "souseImageFormat"
      }, _react["default"].createElement("img", {
        "class": "d-flex mx-auto sousePostImage editPost pb-2",
        src: this.state.postImageURL,
        alt: "sousePostImage",
        width: "1080px",
        height: "1080px"
      })))) : _react["default"].createElement(_styledSpinkit.WaveLoading, {
        "__styled-spinkit__Wave": true,
        color: "#c45758"
      })) : _react["default"].createElement("div", {
        "class": "file-field input-field d-block mx-auto"
      }, _react["default"].createElement(_mainStyling.SouseUploadButton, {
        className: "btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Upload"), _react["default"].createElement("input", {
        type: "file",
        name: "souseImage",
        id: "souseImagePost",
        onChange: this.onImageUpload
      })), _react["default"].createElement("div", {
        "class": "file-path-wrapper"
      }, _react["default"].createElement("input", {
        "class": "file-path validate",
        type: "text"
      })))) : _react["default"].createElement("div", null, _react["default"].createElement("label", {
        "class": "d-flex justify-content-center"
      }, "Click image to update"), _react["default"].createElement("div", {
        "class": "thumbnail"
      }, _react["default"].createElement("div", {
        "class": "souseImageFormat"
      }, _react["default"].createElement("img", {
        "class": "d-flex mx-auto sousePostImage editPost pb-2",
        onClick: this.onUpdateImage,
        onChange: this.onChangeImageFileType,
        src: this.state.postImageURL,
        alt: "sousePostImage",
        width: "1080px",
        height: "1080px"
      }))))), _react["default"].createElement("div", {
        "class": "form-group col d-flex justify-content-center"
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        onClick: this.onUpdateImageDelete,
        type: "submit",
        className: "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update"))))), _react["default"].createElement("div", {
        "class": "form-group col d-flex justify-content-center pt-3"
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        onClick: this["delete"],
        className: "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Delete")))) : _react["default"].createElement("div", null));
    }
  }]);

  return PostEdit;
}(_react.Component);

PostEdit.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PostEdit);

exports["default"] = _default;