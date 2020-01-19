"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _config = _interopRequireDefault(require("../../../server/config"));

var _mainStyling = require("../../assets/styles/mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var PostCreate =
/*#__PURE__*/
function (_Component) {
  _inherits(PostCreate, _Component);

  function PostCreate(props) {
    var _this;

    _classCallCheck(this, PostCreate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostCreate).call(this, props));

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

    _this.fullPostUpload = function (e) {
      e.preventDefault();

      _this.setState({
        imageUploadOption: false
      });
    };

    _this.handleSelectedImage = function (e) {
      // Indentifies image change
      var _this$props$auth = _this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var loggedinUserId = user.id;
      var loggedInUsername = user.username;
      var postCreatedDate = _this.state.postUnixTimestamp;
      var selectedFile = e.target.files[0];
      e.preventDefault(); //jpeg|jpg|png|gif
      // JPEG to JPG

      if (selectedFile.type == "image/jpeg") {
        _this.setState({
          selectedFileType: selectedFile,
          uploadButtonClicked: true,
          postCreatorId: loggedinUserId,
          postImageURL: "https://souse.s3.amazonaws.com/users/" + loggedinUserId + '/posts/' + postCreatedDate + '/' + loggedinUserId + ".jpg"
        });
      } else if (selectedFile.type !== "image/jpeg") {
        _this.setState({
          selectedFileType: selectedFile,
          uploadButtonClicked: true,
          postCreatorId: loggedinUserId,
          postImageURL: "https://souse.s3.amazonaws.com/users/" + loggedinUserId + '/posts/' + postCreatedDate + '/' + loggedinUserId + "." + selectedFile.type.slice(6).toLowerCase()
        });
      }

      console.log(selectedFile.type + " and " + loggedinUserId);
    };

    _this.onImageUpload = function (e) {
      // Submits image change
      var _this$props$auth2 = _this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedInUsername = user.username;
      var postCreatedDate = _this.state.postUnixTimestamp;
      var apiRoute = "/souseAPI";
      var uploadRoute = "/u/upload";
      var uploadData = new FormData();
      uploadData.append("image", _this.state.selectedFileType, _this.state.selectedFileType.name);

      _axios["default"].post(apiRoute + uploadRoute + "/" + loggedInUsername + "/" + postCreatedDate, uploadData, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': "multipart/form-data; boundary=".concat(uploadData._boundary)
        }
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var postCreator = _this.state.postCreatorId;
      var postData = {
        postCreator: _this.state.postCreatorId,
        postCaption: _this.state.postCaption,
        postLocation: _this.state.postLocation,
        postUnixTimestamp: _this.state.postUnixTimestamp,
        postImageURL: _this.state.postImageURL
      };
      var apiRoute = "/souseAPI";
      var createRoute = "/p/add";

      _axios["default"].post(apiRoute + createRoute + "/" + postCreator, postData);

      _this.setState({
        postCreatorId: '',
        postCaption: '',
        postLocation: '',
        postUnixTimestamp: '',
        postImageURL: ''
      });

      window.location.reload();
    };

    _this.onSubmitWithUploadedImage = function (e) {
      // Submits all changes
      _this.onImageUpload(e);

      _this.onSubmit(e);

      window.location.reload(true);
    };

    var _this$props$auth3 = _this.props.auth,
        isAuthenticated = _this$props$auth3.isAuthenticated,
        _user = _this$props$auth3.user;
    var loggedinUser = _user.id;
    var loggedinUsername = _user.username;
    var postsTotal = _this.props.postsTotal;
    _this.state = {
      postCreatorId: loggedinUser,
      postCaption: '',
      postLocation: '',
      postUnixTimestamp: new Date().valueOf(),
      postImageURL: '',
      username: loggedinUsername,
      imageUploadOption: true,
      isLoading: true,
      fullPostUploadLoader: true,
      selectedFileType: null,
      uploadButtonClicked: false
    };
    _this.onChangepostCaption = _this.onChangepostCaption.bind(_assertThisInitialized(_this));
    _this.onChangepostLocation = _this.onChangepostLocation.bind(_assertThisInitialized(_this));
    _this.handleSelectedImage = _this.handleSelectedImage.bind(_assertThisInitialized(_this));
    _this.onImageUpload = _this.onImageUpload.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onSubmitWithUploadedImage = _this.onSubmitWithUploadedImage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostCreate, [{
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

      var _this$props$auth4 = this.props.auth,
          isAuthenticated = _this$props$auth4.isAuthenticated,
          user = _this$props$auth4.user;
      return _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement(_mainStyling.SouseForm, {
        onSubmit: this.onSubmitWithUploadedImage
      }, this.state.imageUploadOption ? _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement = {
        id: "souseCaptionPost",
        "class": "materialize-textarea",
        name: "postCaption"
      }, _defineProperty(_React$createElement, "id", "souseCaptionPost"), _defineProperty(_React$createElement, "maxLength", 1000), _defineProperty(_React$createElement, "rows", "1"), _defineProperty(_React$createElement, "value", this.state.postCaption), _defineProperty(_React$createElement, "onChange", this.onChangepostCaption), _React$createElement)), _react["default"].createElement("label", {
        "for": "souseCaptionPost"
      }, "Caption (", this.state.postCaption.length, "/1000)")), _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement2 = {
        id: "souseLocationPost",
        "class": "materialize-textarea",
        name: "postLocation"
      }, _defineProperty(_React$createElement2, "id", "souseLocationPost"), _defineProperty(_React$createElement2, "rows", "1"), _defineProperty(_React$createElement2, "value", this.state.postLocation), _defineProperty(_React$createElement2, "onChange", this.onChangepostLocation), _React$createElement2)), _react["default"].createElement("label", {
        "for": "souseLocationPost"
      }, "Location")), _react["default"].createElement("div", {
        "class": "mx-auto",
        onClick: this.fullPostUpload
      }, _react["default"].createElement("a", {
        "class": "souseLinkFont"
      }, _react["default"].createElement("h6", null, "Upload Image Here ", _react["default"].createElement("i", {
        "class": "fas fa-camera fa-lg"
      }))))) : _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement3 = {
        id: "souseCaptionPost",
        "class": "materialize-textarea",
        name: "postCaption"
      }, _defineProperty(_React$createElement3, "id", "souseCaptionPost"), _defineProperty(_React$createElement3, "rows", "1"), _defineProperty(_React$createElement3, "maxLength", 1000), _defineProperty(_React$createElement3, "value", this.state.postCaption), _defineProperty(_React$createElement3, "onChange", this.onChangepostCaption), _React$createElement3)), _react["default"].createElement("label", {
        "for": "souseCaptionPost"
      }, "Caption (", this.state.postCaption.length, "/1000)")), _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement4 = {
        id: "souseLocationPost",
        "class": "materialize-textarea",
        name: "postLocation"
      }, _defineProperty(_React$createElement4, "id", "souseLocationPost"), _defineProperty(_React$createElement4, "rows", "1"), _defineProperty(_React$createElement4, "value", this.state.postLocation), _defineProperty(_React$createElement4, "onChange", this.onChangepostLocation), _React$createElement4)), _react["default"].createElement("label", {
        "for": "souseLocationPost"
      }, "Location")), _react["default"].createElement("div", {
        "class": "file-field input-field"
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
      })))), this.state.uploadButtonClicked == false ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Share")))));
    }
  }]);

  return PostCreate;
}(_react.Component);

PostCreate.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PostCreate);

exports["default"] = _default;