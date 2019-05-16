"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _awsS = _interopRequireDefault(require("aws-s3"));

var _config = _interopRequireDefault(require("../../../server/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
        console.log(data.location);

        _this.setState({
          postImageURL: data.location,
          isLoading: false
        });
      })["catch"](function (err) {
        alert(err);
      });

      _this.setState({
        postImageFileType: e.target.files[0].type.slice(6),
        fullPostUploadLoader: false
      });
    };

    _this.fullPostUpload = function (e) {
      e.preventDefault();

      _this.setState({
        imageUploadOption: false
      });
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var postData = {
        postCreatorId: _this.state.postCreatorId,
        postCaption: _this.state.postCaption,
        postUnixTimestamp: _this.state.postUnixTimestamp,
        postImageFileType: _this.state.postImageFileType,
        postImageURL: _this.state.postImageURL
      };
      var apiRoute = "/souseAPI";
      var createRoute = "/p/add";

      _axios["default"].post(apiRoute + createRoute, postData).then(function (res) {
        return console.log(res.data);
      });

      _this.setState({
        postCreatorId: '',
        postCaption: '',
        postUnixTimestamp: '',
        postImageFileType: '',
        postImageURL: ''
      });

      window.location.reload();
    };

    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUser = user.id;
    var loggedinUsername = user.username;
    var postsTotal = _this.props.postsTotal;
    _this.state = {
      posts: [],
      postCreatorId: loggedinUser,
      postCaption: '',
      postUnixTimestamp: new Date().valueOf(),
      postImageFileType: '',
      postImageURL: '',
      username: loggedinUsername,
      imageUploadOption: true,
      isLoading: true,
      fullPostUploadLoader: true
    };
    _this.onChangepostCaption = _this.onChangepostCaption.bind(_assertThisInitialized(_this));
    _this.onImageUpload = _this.onImageUpload.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PostCreate, [{
    key: "handleInit",
    value: function handleInit() {
      console.log('FilePond instance has initialised', this.pond);
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2;

      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      return _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("form", {
        onSubmit: this.onSubmit
      }, this.state.imageUploadOption ? _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement = {
        id: "souseCaptionPost",
        "class": "materialize-textarea",
        name: "postCaption"
      }, _defineProperty(_React$createElement, "id", "souseCaptionPost"), _defineProperty(_React$createElement, "rows", "1"), _defineProperty(_React$createElement, "value", this.state.postCaption), _defineProperty(_React$createElement, "onChange", this.onChangepostCaption), _React$createElement)), _react["default"].createElement("label", {
        "for": "souseCaptionPost"
      }, "Caption")), _react["default"].createElement("div", {
        "class": "mx-auto",
        onClick: this.fullPostUpload
      }, _react["default"].createElement("a", {
        "class": "souseLinkFont"
      }, _react["default"].createElement("h6", null, "Upload Image Here ", _react["default"].createElement("i", {
        "class": "fas fa-camera fa-lg"
      })))), _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, "Share"))) : _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", (_React$createElement2 = {
        id: "souseCaptionPost",
        "class": "materialize-textarea",
        name: "postCaption"
      }, _defineProperty(_React$createElement2, "id", "souseCaptionPost"), _defineProperty(_React$createElement2, "rows", "1"), _defineProperty(_React$createElement2, "value", this.state.postCaption), _defineProperty(_React$createElement2, "onChange", this.onChangepostCaption), _React$createElement2)), _react["default"].createElement("label", {
        "for": "souseCaptionPost"
      }, "Caption")), _react["default"].createElement("div", null, this.state.fullPostUploadLoader ? _react["default"].createElement("div", {
        "class": "file-field input-field"
      }, _react["default"].createElement("div", {
        "class": "btn-large"
      }, _react["default"].createElement("span", null, "Upload"), _react["default"].createElement("input", {
        type: "file",
        name: "souseImage",
        id: "souseImagePost",
        onChange: this.onImageUpload
      })), _react["default"].createElement("div", {
        "class": "file-path-wrapper"
      }, _react["default"].createElement("input", {
        "class": "file-path validate",
        type: "text"
      }))) : _react["default"].createElement("div", null, this.state.isLoading ? _react["default"].createElement("div", {
        "class": "progress"
      }, _react["default"].createElement("div", {
        "class": "indeterminate"
      })) : _react["default"].createElement("div", null, _react["default"].createElement("h6", null, "Image Successfully Uploaded"), _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, "Share"))))))));
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