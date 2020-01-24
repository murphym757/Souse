"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _axios = _interopRequireDefault(require("axios"));

var _postForm = _interopRequireDefault(require("../posts/postForm"));

var _souseSearch = _interopRequireDefault(require("./souseSearch"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _mainStyling = require("../../assets/styles/mainStyling");

var _postsStyling = require("../../assets/styles/postsStyling");

var _materializeCss = _interopRequireDefault(require("materialize-css"));

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

var SouseIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(SouseIndex, _Component);

  function SouseIndex(props) {
    var _this;

    _classCallCheck(this, SouseIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SouseIndex).call(this, props));

    _this.filterList = function (usersFilter) {
      var filteredUsers = _this.state.souseUsers;
      filteredUsers = filteredUsers.filter(function (i) {
        var searchedUsername = i.username.toLowerCase();
        return searchedUsername.indexOf(usersFilter.toLowerCase()) !== -1;
      });

      _this.setState({
        filteredUsers: filteredUsers
      });
    };

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

      _this.setState({
        isLoading: true
      });
    };

    _this.onSubmitWithUploadedImage = function (e) {
      // Submits all changes
      e.preventDefault();

      _this.onImageUpload(e);

      _this.onSubmit(e);

      setTimeout(function () {
        _this.setState({
          isLoading: false
        });

        window.location.reload(true);
      }, 10000);
    };

    var _this$props$auth3 = _this.props.auth,
        isAuthenticated = _this$props$auth3.isAuthenticated,
        _user = _this$props$auth3.user;
    var loggedinUserTheme = _user.userTheme;
    var loggedinUser = _user.id;
    var loggedinUsername = _user.username;
    var souseUserData = _this.props.souseUserData;
    _this.state = {
      checked: false,
      userSearch: "",
      souseUsers: souseUserData,
      filteredUsers: [],
      switchColor: "",
      switchHandleColor: "",
      currentTheme: "souseDefaultTheme",
      //loggedinUserTheme
      postCreatorId: loggedinUser,
      postCaption: '',
      postLocation: '',
      postUnixTimestamp: new Date().valueOf(),
      postImageURL: '',
      username: loggedinUsername,
      imageUploadOption: true,
      isLoading: false,
      fullPostUploadLoader: true,
      selectedFileType: null,
      uploadButtonClicked: false
    };
    _this.handleThemeChange = _this.handleThemeChange.bind(_assertThisInitialized(_this));
    _this.onChangepostCaption = _this.onChangepostCaption.bind(_assertThisInitialized(_this));
    _this.onChangepostLocation = _this.onChangepostLocation.bind(_assertThisInitialized(_this));
    _this.handleSelectedImage = _this.handleSelectedImage.bind(_assertThisInitialized(_this));
    _this.onImageUpload = _this.onImageUpload.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onSubmitWithUploadedImage = _this.onSubmitWithUploadedImage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SouseIndex, [{
    key: "handleThemeChange",
    value: function handleThemeChange(checked) {
      this.setState({
        checked: checked
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var souseUsers = this.state.souseUsers;
      this.setState({
        souseUsers: souseUsers,
        filteredUsers: souseUsers
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();

      {
        /* Theme Finder */
      }
      var _this$props$auth4 = this.props.auth,
          isAuthenticated = _this$props$auth4.isAuthenticated,
          user = _this$props$auth4.user;
      var userThemeOG = user.userTheme;
      var theme1 = "souseDefaultTheme";
      var theme2 = "souseIMTheme";
      var theme3 = "souseFPTheme";
      var theme4 = "souseViceTheme";
      var theme5 = "souseVapeTheme";

      if (isAuthenticated) {
        var currentTheme = userThemeOG;

        if (currentTheme == theme1) {
          this.setState({
            switchColor: "#ff9496",
            switchHandleColor: "#c45758"
          });
        } else if (currentTheme == theme2) {
          this.setState({
            switchColor: "#797878",
            switchHandleColor: "#231f20"
          });
        } else if (currentTheme == theme3) {
          this.setState({
            switchColor: "#4b6fa3",
            switchHandleColor: "#2c4160"
          });
        } else if (currentTheme == theme4) {
          this.setState({
            switchColor: "#a0ecff",
            switchHandleColor: "#d780b5"
          });
        } else if (currentTheme == theme5) {
          this.setState({
            switchColor: "#aaffff",
            switchHandleColor: "#64c3a7"
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

      var _this$props$auth5 = this.props.auth,
          isAuthenticated = _this$props$auth5.isAuthenticated,
          user = _this$props$auth5.user;
      var souseUserData = this.props.souseUserData;
      var usernameUserPage = this.props.userPageCreatorUsername;
      var loggedInUsername = this.props.loggedInUsername;
      var souseFormState = this.state.souseFormState;
      var switchColor = this.state.switchColor;
      var switchHandleColor = this.state.switchHandleColor;
      var isLoading = this.state.isLoading;
      return _react["default"].createElement("div", {
        "class": "col-12 m-0 p-0"
      }, _react["default"].createElement("div", {
        "class": "collapse",
        id: "postCreateCollapse"
      }, _react["default"].createElement("div", {
        "class": "postCreateCollapse"
      }, _react["default"].createElement("div", {
        "class": "container"
      }, isAuthenticated ? _react["default"].createElement("div", null, usernameUserPage === loggedInUsername ? _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, isLoading == true ? _react["default"].createElement("div", {
        "class": "d-block justify-content-center"
      }, _react["default"].createElement(_mainStyling.SouseSpinner, null)) : _react["default"].createElement("div", {
        "class": "col-12 m-0 p-0"
      }, _react["default"].createElement("div", {
        "class": "col-12 m-0 p-0"
      }, this.state.checked ? _react["default"].createElement(_souseSearch["default"], {
        souseSearchedUsers: this.state.filteredUsers,
        match: this.props.match,
        onChange: this.filterList
      }) : _react["default"].createElement("div", {
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
      }, "Share")))))), _react["default"].createElement("div", {
        "class": "d-flex justify-content-center"
      }, _react["default"].createElement("label", null, _react["default"].createElement("h6", {
        "class": "d-flex justify-content-start"
      }, _react["default"].createElement(_postsStyling.PencilIcon, null)), _react["default"].createElement(_reactSwitch["default"], {
        checked: this.state.checked,
        onChange: this.handleThemeChange,
        onColor: switchColor,
        onHandleColor: switchHandleColor,
        handleDiameter: 30,
        uncheckedIcon: false,
        checkedIcon: false,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
        activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: 20,
        width: 48,
        className: "react-switch",
        id: "material-switch"
      }), _react["default"].createElement("h6", {
        "class": "d-flex justify-content-end"
      }, _react["default"].createElement(_postsStyling.SearchIcon, null)))))) : _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12 m-0 p-0"
      }, _react["default"].createElement(_souseSearch["default"], {
        souseSearchedUsers: this.state.filteredUsers,
        match: this.props.match,
        onChange: this.filterList
      })))) : _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12 m-0 p-0"
      }, _react["default"].createElement(_souseSearch["default"], {
        souseSearchedUsers: this.state.filteredUsers,
        match: this.props.match,
        onChange: this.filterList
      })))))), _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "fixed-action-btn pb-2"
      }, " ", _react["default"].createElement(_mainStyling.CreateIconLink, {
        className: "btn-floating btn-large addPostButton"
      }, _react["default"].createElement(_mainStyling.CreateIcon, {
        className: "fas fa-plus fa-xs",
        "data-toggle": "collapse",
        href: "#postCreateCollapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "postCreateCollapse"
      })))));
    }
  }]);

  return SouseIndex;
}(_react.Component);

SouseIndex.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(SouseIndex);

exports["default"] = _default;