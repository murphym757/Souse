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

var _Page = _interopRequireDefault(require("../navigation/404Page"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _mainStyling = require("../../assets/styles/mainStyling");

var _postsStyling = require("../../assets/styles/postsStyling");

var _userProfileStyling = require("../../assets/styles/userProfileStyling");

var _postDelete = _interopRequireDefault(require("./postDelete"));

var _styledSpinkit = require("styled-spinkit");

var _awsS = _interopRequireDefault(require("aws-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _config = _interopRequireDefault(require("../../../server/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    var _this;

    _classCallCheck(this, PostEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostEdit).call(this, props));

    _this.onChangepostCaption = function (e) {
      _this.setState({
        postCaption: e.target.value
      });
    };

    _this.onChangepostLocation = function (e) {
      _this.setState({
        postLocation: e.target.value
      });
    };

    _this.onUpdateImage = function (e) {
      _this.setState({
        updateImage: true
      });
    };

    _this.handleSelectedImage = function (e) {
      // Indentifies image change
      var _this$props$auth = _this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var loggedinUserId = user.id;
      var selectedFile = e.target.files[0];
      e.preventDefault(); //jpeg|jpg|png|gif
      // JPEG to JPG

      if (selectedFile.type == "image/jpeg") {
        _this.setState({
          selectedFileType: selectedFile,
          uploadButtonClicked: true,
          postCreatorId: loggedinUserId,
          postImageURL: "https://souse.s3.amazonaws.com/posts/" + _this.state.originalPostId + '/' + _this.state.originalPostId + ".jpg"
        });
      } else if (selectedFile.type !== "image/jpeg") {
        _this.setState({
          selectedFileType: selectedFile,
          uploadButtonClicked: true,
          postCreatorId: loggedinUserId,
          postImageURL: "https://souse.s3.amazonaws.com/posts/" + _this.state.originalPostId + '/' + _this.state.originalPostId + "." + selectedFile.type.slice(6).toLowerCase()
        });
      }

      console.log(selectedFile.type + " and " + loggedinUserId);
    };

    _this.onImageUpload = function (e) {
      // Submits image change
      var _this$props$auth2 = _this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedInUser = user.id;
      var postId = _this.state.originalPostId;
      var apiRoute = "/souseAPI";
      var uploadRoute = "/p/upload";
      var uploadData = new FormData();
      uploadData.append("image", _this.state.selectedFileType, _this.state.selectedFileType.name);

      _axios["default"].post(apiRoute + uploadRoute + "/" + postId, uploadData, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': "multipart/form-data; boundary=".concat(uploadData._boundary)
        }
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.onSubmitWithUploadedImage = function (e) {
      // Submits all changes
      var awsBucketName = _config["default"].AWS_BUCKET_NAME;
      e.preventDefault();
      var promise = new Promise(function () {
        setTimeout(function () {
          _this.deleteImageUpload(awsBucketName);
        }, 2000);
      });
      promise.then(_this.onImageUpload(e), _this.onSubmit(e), window.location.reload(true));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var postData = {
        postCreatorId: _this.state.postCreatorId,
        postCaption: _this.state.postCaption,
        postLocation: _this.state.postLocation,
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

      window.location.reload();
    };

    var _this$props$auth3 = _this.props.auth,
        isAuthenticated = _this$props$auth3.isAuthenticated,
        _user = _this$props$auth3.user;
    var postTimestamp = _this.props.location.state.postTimestamp;
    var loggedInUsername = _user.username;
    var loggedInUserId = _user.id;
    var postIdPathname = window.location.pathname;
    var postIdFound = postIdPathname.slice(8);
    _this.state = {
      posts: [],
      users: [],
      originalPostId: postIdFound,
      postCaption: '',
      postLocation: '',
      postImageURL: '',
      updateImage: false,
      updatedImage: false,
      isLoading: false,
      selectedFileType: null,
      uploadButtonClicked: false,
      postCreatorId: loggedInUserId,
      postUnixTimestamp: postTimestamp,
      postImageFileType: '',
      postImageFileName: '',
      newPostImageFileName: '',
      username: loggedInUsername,
      fullPostUploadLoader: false,
      deleteButtonClicked: false,
      userOptionsDisplay: '1'
    };
    _this.onChangepostCaption = _this.onChangepostCaption.bind(_assertThisInitialized(_this));
    _this.onChangepostLocation = _this.onChangepostLocation.bind(_assertThisInitialized(_this));
    _this.onUpdateImage = _this.onUpdateImage.bind(_assertThisInitialized(_this));
    _this.handleSelectedImage = _this.handleSelectedImage.bind(_assertThisInitialized(_this));
    _this.onImageUpload = _this.onImageUpload.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onSubmitWithUploadedImage = _this.onSubmitWithUploadedImage.bind(_assertThisInitialized(_this));
    _this.deleteImageUpload = _this.deleteImageUpload.bind(_assertThisInitialized(_this));
    _this.deletePost = _this.deletePost.bind(_assertThisInitialized(_this));
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
          postLocation: res.data.sousePosts.postLocation,
          postCreatorId: res.data.postCreator,
          postImageURL: res.data.sousePosts.postImageURL
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "deleteImageUpload",
    value: function deleteImageUpload(awsBucketName, cb) {
      var postId = this.state.originalPostId;
      var s3bucket = new _awsSdk["default"].S3({
        accessKeyId: _config["default"].AWS_ACCESS_KEY_ID,
        secretAccessKey: _config["default"].AWS_SECRET_ACCESS_KEY,
        region: _config["default"].AWS_REGION
      });
      var params = {
        Bucket: awsBucketName,
        Prefix: 'posts/' + "" + postId + "/"
      };
      s3bucket.listObjects(params, function (err, data) {
        if (err) return cb(err);
        if (data.Contents.length == 0) return cb();
        params = {
          Bucket: _config["default"].AWS_BUCKET_NAME
        };
        params.Delete = {
          Objects: []
        };
        data.Contents.forEach(function (content) {
          params.Delete.Objects.push({
            Key: content.Key
          });
        });
        s3bucket.deleteObjects(params, function (err, data) {
          if (err) return cb(err);
          if (data.Contents.length == 1000) emptyBucket(awsBucketName, cb);else cb();
        });
      });
    }
  }, {
    key: "deletePost",
    value: function deletePost() {
      var _this$props$auth4 = this.props.auth,
          isAuthenticated = _this$props$auth4.isAuthenticated,
          user = _this$props$auth4.user;
      var userName = user.username;
      var postId = this.state.originalPostId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/p/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + postId).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });

      this.deleteImageUpload();
      this.props.history.push("/" + userName);
      window.location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$auth5 = this.props.auth,
          isAuthenticated = _this$props$auth5.isAuthenticated,
          user = _this$props$auth5.user;
      var loggedInUser = "" + user.id + "";
      var postCreatorId = this.state.postCreatorId;
      var updateImage = this.state.updateImage;
      var userOptionsDisplay = this.state.userOptionsDisplay;
      return _react["default"].createElement("div", null, isAuthenticated && postCreatorId == loggedInUser ? _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement(_mainStyling.SouseForm, {
        className: "pt-5",
        onSubmit: this.onSubmitWithUploadedImage
      }, _react["default"].createElement("div", {
        "class": "row container mx-auto"
      }, _react["default"].createElement("div", {
        "class": "col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field pb-5"
      }, _react["default"].createElement("textarea", {
        "class": "materialize-textarea editText",
        name: "postCaption",
        id: "souseCaptionPost",
        rows: "1",
        maxLength: 1000,
        value: this.state.postCaption,
        onChange: this.onChangepostCaption
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseCaptionPost"
      }, "Caption (", this.state.postCaption.length, "/1000)")), _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("input", {
        type: "text",
        name: "postLocation",
        className: "form-control",
        id: "souseLocationPost",
        value: this.state.postLocation,
        onChange: this.onChangepostLocation
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseLocationPost"
      }, "Location"))), _react["default"].createElement("div", {
        "class": "col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "row justify-content-center"
      }, userOptionsDisplay == "1" ? _react["default"].createElement("div", {
        "data-toggle": "collapse",
        href: "#postDeleteCollapse2",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "postDeleteCollapse2",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            userOptionsDisplay: '2'
          });
        },
        "class": "form-group col-6 d-flex justify-content-center mx-auto my-auto"
      }, _react["default"].createElement(_userProfileStyling.DeleteIcon, null)) : _react["default"].createElement("div", {
        "data-toggle": "collapse",
        href: "#postDeleteCollapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "postDeleteCollapse",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            userOptionsDisplay: '1'
          });
        },
        "class": "form-group col-6 d-flex justify-content-center mx-auto my-auto"
      }, _react["default"].createElement(_userProfileStyling.DeleteIcon, null))), _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "row justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "form-group col d-flex justify-content-center"
      }, userOptionsDisplay == "1" ? _react["default"].createElement("div", {
        "class": "row justify-content-center col-12"
      }, _react["default"].createElement("div", {
        "class": "file-field input-field col-12"
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        className: "btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Upload"), _react["default"].createElement("input", {
        type: "file",
        id: "image",
        onChange: this.handleSelectedImage
      })), _react["default"].createElement("div", {
        "class": "file-path-wrapper"
      }, _react["default"].createElement("input", {
        "class": "file-path validate",
        type: "text"
      })), _react["default"].createElement("span", {
        "class": "helper-text d-flex justify-content-center",
        "data-error": "wrong",
        "data-success": "right"
      }, "Currently, Souse cannot upload images with capitalized file extensions (JPEG, PNG, and GIF). Please ensure that your file extensions are lowercase.")), this.state.uploadButtonClicked == false ? _react["default"].createElement(_mainStyling.SouseButton, {
        onClick: this.onSubmit,
        type: "button",
        className: "waves-effect waves-light btn-large"
      }, " ", _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update post no image")) : _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large"
      }, " ", _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update image"))) : _react["default"].createElement(_postDelete["default"], null)))))))) : _react["default"].createElement(_Page["default"], null));
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