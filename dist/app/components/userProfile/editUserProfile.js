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

var _authentication = require("../../../server/actions/authentication");

var _Page = _interopRequireDefault(require("../navigation/404Page"));

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jquery = _interopRequireDefault(require("jquery"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _config = _interopRequireDefault(require("../../../server/config"));

var _deleteUserProfile = _interopRequireDefault(require("./deleteUserProfile"));

var _materializeCss = _interopRequireDefault(require("materialize-css"));

var _mainStyling = require("../../assets/styles/mainStyling");

var _userProfileStyling = require("../../assets/styles/userProfileStyling");

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

var EditUserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(EditUserProfile, _Component);

  function EditUserProfile(props) {
    var _this;

    _classCallCheck(this, EditUserProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditUserProfile).call(this, props));

    _this.onUpdateUsername = function (e) {
      _this.setState({
        username: e.target.value
      });
    };

    _this.onUpdateFirstName = function (e) {
      _this.setState({
        firstName: e.target.value
      });
    };

    _this.onUpdateLastName = function (e) {
      _this.setState({
        lastName: e.target.value
      });
    };

    _this.onUpdateEmail = function (e) {
      _this.setState({
        email: e.target.value
      });
    };

    _this.onUpdatePassword = function (e) {
      _this.setState({
        password: e.target.value
      });
    };

    _this.onUpdateConfirmPassword = function (e) {
      _this.setState({
        newPassword: e.target.value
      });
    };

    _this.onUpdateUserInstagram = function (e) {
      _this.setState({
        userInstagram: e.target.value
      });
    };

    _this.onUpdateUserFacebook = function (e) {
      _this.setState({
        userFacebook: e.target.value
      });
    };

    _this.onUpdateUserTwitter = function (e) {
      _this.setState({
        userTwitter: e.target.value
      });
    };

    _this.onUpdateUserLocation = function (e) {
      _this.setState({
        userLocation: e.target.value
      });
    };

    _this.onUpdateUserBio = function (e) {
      _this.setState({
        userBio: e.target.value
      });
    };

    _this.onUpdateUserDefaultTheme = function (e) {
      _this.setState({
        userTheme: "souseDefaultTheme",
        themeSelected: "theme1Selected"
      });
    };

    _this.onUpdateUserIMTheme = function (e) {
      _this.setState({
        userTheme: "souseIMTheme",
        themeSelected: "theme2Selected"
      });
    };

    _this.onUpdateUserFPTheme = function (e) {
      _this.setState({
        userTheme: "souseFPTheme",
        themeSelected: "theme3Selected"
      });
    };

    _this.onUpdateUserVapeTheme = function (e) {
      _this.setState({
        userTheme: "souseVapeTheme",
        themeSelected: "theme5Selected"
      });
    };

    _this.onUpdateUserViceTheme = function (e) {
      _this.setState({
        userTheme: "souseViceTheme",
        themeSelected: "theme4Selected"
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
          newUserImageSetup: false,
          userId: loggedinUserId,
          userImage: "https://souse.s3.amazonaws.com/users/" + "" + _this.state.userId + "" + "/userimage/" + _this.state.userId + ".jpg"
        });
      } else if (selectedFile.type !== "image/jpeg") {
        _this.setState({
          selectedFileType: selectedFile,
          uploadButtonClicked: true,
          newUserImageSetup: false,
          userId: loggedinUserId,
          userImage: "https://souse.s3.amazonaws.com/users/" + "" + _this.state.userId + "" + "/userimage/" + _this.state.userId + "." + selectedFile.type.slice(6).toLowerCase()
        });
      }
    };

    _this.onImageUpload = function (e) {
      // Submits image change
      var _this$props$auth2 = _this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedinUserId = user.id;
      var userId = _this.state.userId;
      var apiRoute = "/souseAPI";
      var uploadRoute = "/u/upload";
      var uploadData = new FormData();
      uploadData.append("image", _this.state.selectedFileType, _this.state.selectedFileType.name);

      _axios["default"].post(apiRoute + uploadRoute + "/" + userId, uploadData, {
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
      // Submits all changes
      e.preventDefault();

      _this.onChangeUserData();

      setTimeout(function () {
        _this.setState({
          isLoading: false
        });

        _this.props.history.push("/");

        window.location.reload(true);
      }, 10000);
    };

    _this.onSubmitNewUser = function (e) {
      // Submits all changes
      e.preventDefault();

      _this.onImageUpload(e);

      _this.onChangeUserData();

      setTimeout(function () {
        _this.setState({
          isLoading: false
        });

        _this.props.history.push("/");

        window.location.reload(true);
      }, 10000);
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
      promise.then(_this.onImageUpload(e), _this.onChangeUserData(), setTimeout(function () {
        _this.setState({
          isLoading: false
        });

        _this.props.history.push("/");

        window.location.reload(true);
      }, 10000));
    };

    var _this$props$auth3 = _this.props.auth,
        isAuthenticated = _this$props$auth3.isAuthenticated,
        _user = _this$props$auth3.user;
    var loggedinUser = _user.id;
    var loggedinUsername = _user.username;
    var _this$props$location$ = _this.props.location.state,
        creatorId = _this$props$location$.creatorId,
        creatorUsername = _this$props$location$.creatorUsername,
        creatorFirstName = _this$props$location$.creatorFirstName,
        creatorLastName = _this$props$location$.creatorLastName,
        creatorEmail = _this$props$location$.creatorEmail,
        creatorPassword = _this$props$location$.creatorPassword,
        creatorSignUpDate = _this$props$location$.creatorSignUpDate,
        creatorUnixTimestamp = _this$props$location$.creatorUnixTimestamp,
        creatorImage = _this$props$location$.creatorImage,
        creatorTheme = _this$props$location$.creatorTheme,
        creatorTwitter = _this$props$location$.creatorTwitter,
        creatorFacebook = _this$props$location$.creatorFacebook,
        creatorInstagram = _this$props$location$.creatorInstagram,
        creatorLocation = _this$props$location$.creatorLocation,
        creatorBio = _this$props$location$.creatorBio,
        souseNewUserImageSetup = _this$props$location$.souseNewUserImageSetup;
    _this.state = {
      userId: creatorId,
      username: creatorUsername,
      firstName: creatorFirstName,
      lastName: creatorLastName,
      email: creatorEmail,
      password: "",
      newPassword: "",
      // Will change if user types something new
      signUpDate: creatorSignUpDate,
      unixTimestamp: creatorUnixTimestamp,
      userImage: creatorImage,
      userTheme: creatorTheme,
      userInstagram: creatorInstagram,
      userFacebook: creatorFacebook,
      userTwitter: creatorTwitter,
      userLocation: creatorLocation,
      userBio: creatorBio,
      isLoading: false,
      fullPostUploadLoader: false,
      newUserImageSetup: souseNewUserImageSetup,
      selectedFileType: null,
      uploadButtonClicked: false,
      userOptionsDisplay: "",
      switchColor: "",
      switchHandleColor: "",
      themeTypeSelected: false,
      userThemeType: "Light",
      currentTheme: "" + creatorTheme + "",
      //loggedinUserTheme
      errors: {}
    };
    _this.onUpdateUsername = _this.onUpdateUsername.bind(_assertThisInitialized(_this));
    _this.onUpdateFirstName = _this.onUpdateFirstName.bind(_assertThisInitialized(_this));
    _this.onUpdateLastName = _this.onUpdateLastName.bind(_assertThisInitialized(_this));
    _this.onUpdateEmail = _this.onUpdateEmail.bind(_assertThisInitialized(_this));
    _this.onUpdatePassword = _this.onUpdatePassword.bind(_assertThisInitialized(_this));
    _this.onUpdateConfirmPassword = _this.onUpdateConfirmPassword.bind(_assertThisInitialized(_this));
    _this.onUpdateUserInstagram = _this.onUpdateUserInstagram.bind(_assertThisInitialized(_this));
    _this.onUpdateUserFacebook = _this.onUpdateUserFacebook.bind(_assertThisInitialized(_this));
    _this.onUpdateUserTwitter = _this.onUpdateUserTwitter.bind(_assertThisInitialized(_this));
    _this.onUpdateUserLocation = _this.onUpdateUserLocation.bind(_assertThisInitialized(_this));
    _this.onUpdateUserBio = _this.onUpdateUserBio.bind(_assertThisInitialized(_this));
    _this.onUpdateUserDefaultTheme = _this.onUpdateUserDefaultTheme.bind(_assertThisInitialized(_this));
    _this.onUpdateUserIMTheme = _this.onUpdateUserIMTheme.bind(_assertThisInitialized(_this));
    _this.onUpdateUserFPTheme = _this.onUpdateUserFPTheme.bind(_assertThisInitialized(_this));
    _this.onUpdateUserViceTheme = _this.onUpdateUserViceTheme.bind(_assertThisInitialized(_this));
    _this.onUpdateUserVapeTheme = _this.onUpdateUserVapeTheme.bind(_assertThisInitialized(_this));
    _this.handleSelectedImage = _this.handleSelectedImage.bind(_assertThisInitialized(_this));
    _this.onImageUpload = _this.onImageUpload.bind(_assertThisInitialized(_this));
    _this.deleteImageUpload = _this.deleteImageUpload.bind(_assertThisInitialized(_this));
    _this.onChangeUserData = _this.onChangeUserData.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onSubmitNewUser = _this.onSubmitNewUser.bind(_assertThisInitialized(_this));
    _this.onSubmitWithUploadedImage = _this.onSubmitWithUploadedImage.bind(_assertThisInitialized(_this));
    _this.handleThemeTypeChange = _this.handleThemeTypeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditUserProfile, [{
    key: "componentDidMount",

    /*-----------------------------*/
    value: function componentDidMount() {
      var _this2 = this;

      _materializeCss["default"].AutoInit();

      {
        /* Theme Finder */
      }
      var _this$props$auth4 = this.props.auth,
          isAuthenticated = _this$props$auth4.isAuthenticated,
          user = _this$props$auth4.user;
      var theme1 = "souseDefaultTheme";
      var theme2 = "souseIMTheme";
      var theme3 = "souseFPTheme";
      var theme4 = "souseViceTheme";
      var theme5 = "souseVapeTheme";

      if (isAuthenticated) {
        var currentTheme = user.userThemeType;

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

      {
        /* Edit Post Command */
      }
      var apiRoute = "/souseAPI";
      var editRoute = "/u/edit";
      var userId = this.state.userId;

      _axios["default"].get(apiRoute + editRoute + "/" + userId).then(function (res) {
        _this2.setState({
          userTwitter: res.data.userTwitter,
          userFacebook: res.data.userFacebook,
          userInstagram: res.data.userInstagram,
          userLocation: res.data.userLocation,
          userBio: res.data.userBio,
          userImage: res.data.userImage
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "handleThemeTypeChange",
    value: function handleThemeTypeChange(themeTypeSelected) {
      this.setState({
        themeTypeSelected: themeTypeSelected,
        userThemeType: "Dark"
      });
    }
  }, {
    key: "deleteImageUpload",
    value: function deleteImageUpload(awsBucketName, cb) {
      var _this$props$auth5 = this.props.auth,
          isAuthenticated = _this$props$auth5.isAuthenticated,
          user = _this$props$auth5.user;
      var loggedinUserId = user.id;
      var s3bucket = new _awsSdk["default"].S3({
        accessKeyId: _config["default"].AWS_ACCESS_KEY_ID,
        secretAccessKey: _config["default"].AWS_SECRET_ACCESS_KEY,
        region: _config["default"].AWS_REGION
      });
      var params = {
        Bucket: awsBucketName,
        Prefix: 'users/' + "" + loggedinUserId + "" + '/userimage/'
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
    key: "onChangeUserData",
    value: function onChangeUserData() {
      // Submits any changes (besides images changes)
      if (this.state.password.length <= 0) {
        var userDataWithoutPasswordChange = {
          username: this.state.username,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          userImage: this.state.userImage,
          userTheme: this.state.userTheme,
          userThemeType: this.state.userThemeType,
          userInstagram: this.state.userInstagram,
          userFacebook: this.state.userFacebook,
          userTwitter: this.state.userTwitter,
          userLocation: this.state.userLocation,
          userBio: this.state.userBio,
          newUserImageSetup: this.state.newUserImageSetup
        };
        var apiRoute = "/souseAPI";
        var userWithoutPasswordChangeRoute = "/u/update/nopassword";
        var userId = this.state.userId;

        _axios["default"].post(apiRoute + userWithoutPasswordChangeRoute + "/" + userId, userDataWithoutPasswordChange)["catch"](function (error) {
          console.log(error);
        });
      } else {
        if (this.state.password.length >= 6) {
          var userDataWithPasswordChange = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            userImage: this.state.userImage,
            userTheme: this.state.userTheme,
            userThemeType: this.state.userThemeType,
            userInstagram: this.state.userInstagram,
            userFacebook: this.state.userFacebook,
            userTwitter: this.state.userTwitter,
            userLocation: this.state.userLocation,
            userBio: this.state.userBio,
            newUserImageSetup: this.state.newUserImageSetup
          };
          var _apiRoute = "/souseAPI";
          var userWithPasswordChangeRoute = "/u/update";
          var _userId = this.state.userId;

          _axios["default"].post(_apiRoute + userWithPasswordChangeRoute + "/" + _userId, userDataWithPasswordChange)["catch"](function (error) {
            console.log(error);
          });
        } else {}
      }

      this.setState({
        isLoading: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$auth6 = this.props.auth,
          isAuthenticated = _this$props$auth6.isAuthenticated,
          user = _this$props$auth6.user;
      var loggedinUserImage = user.userImage;
      var loggedinUserId = user.id;
      var errors = this.state.errors;
      var switchColor = this.state.switchColor;
      var switchHandleColor = this.state.switchHandleColor;
      var userOptionsDisplay = this.state.userOptionsDisplay;
      var userIdPathname = window.location.pathname;
      var userIdFound = userIdPathname.slice(8);
      var isLoading = this.state.isLoading;
      return _react["default"].createElement("div", {
        "class": "pt-5"
      }, isLoading == true ? _react["default"].createElement("div", {
        "class": "d-flex justify-content-center"
      }, _react["default"].createElement(_mainStyling.SouseSpinner, null)) : _react["default"].createElement("div", null, isAuthenticated && loggedinUserId == userIdFound ? _react["default"].createElement("div", {
        "class": "container-fluid pt-5"
      }, _react["default"].createElement(_mainStyling.SouseForm, {
        onSubmit: this.onSubmitWithUploadedImage
      }, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "email",
        name: "email",
        "class": (0, _classnames["default"])('form-control', {
          'is-invalid': errors.email
        }),
        id: "souseEmail",
        value: this.state.email,
        onChange: this.onUpdateEmail
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseEmail"
      }, "Email"), errors.email && _react["default"].createElement("div", {
        "class": "invalid-feedback"
      }, errors.email))), _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "username",
        "class": (0, _classnames["default"])('form-control', {
          'is-invalid': errors.username
        }),
        id: "souseUsername",
        maxLength: 30,
        value: this.state.username,
        onChange: this.onUpdateUsername
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseUsername"
      }, "Username (", this.state.username.length, "/30)"), errors.username && _react["default"].createElement("div", {
        "class": "invalid-feedback"
      }, errors.username)))), _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "firstName",
        "class": (0, _classnames["default"])('form-control', {
          'is-invalid': errors.firstName
        }),
        id: "souseFirstName",
        value: this.state.firstName,
        onChange: this.onUpdateFirstName
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseFirstName"
      }, "First Name  (", this.state.firstName.length, "/30)"), errors.firstName && _react["default"].createElement("div", {
        "class": "invalid-feedback"
      }, errors.firstName))), _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "lastName",
        "class": (0, _classnames["default"])('form-control', {
          'is-invalid': errors.lastName
        }),
        id: "souseLastName",
        value: this.state.lastName,
        onChange: this.onUpdateLastName
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseLastName"
      }, "Last Name  (", this.state.lastName.length, "/30)"), errors.lastName && _react["default"].createElement("div", {
        "class": "invalid-feedback"
      }, errors.lastName)))), _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "password",
        name: "newPassword",
        className: "form-control",
        id: "souseNewPassword",
        minValue: 6,
        onChange: this.onUpdatePassword
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseNewPassword"
      }, "New Password"), this.state.password.length <= 0 ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "m-0 p-0"
      }, this.state.password.length >= 6 ? _react["default"].createElement("div", null, this.state.password != this.state.newPassword ? _react["default"].createElement("div", null, this.state.newPassword.length <= 0 ? _react["default"].createElement(_mainStyling.ErrorFont, null, "Password meets requirements") : _react["default"].createElement(_mainStyling.ErrorFont, null, "Must match confirm password")) : _react["default"].createElement(_mainStyling.ErrorFont, null, "Password meets requirements")) : _react["default"].createElement(_mainStyling.ErrorFont, null, "Password must be at least 6 characters long")))), _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "password",
        name: "confirmPassword",
        className: "form-control",
        id: "souseConfirmPassword",
        minValue: 6,
        onChange: this.onUpdateConfirmPassword
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseConfirmPassword"
      }, "Confirm Password"), this.state.password.length <= 0 ? _react["default"].createElement("div", null) : _react["default"].createElement("div", {
        "class": "m-0 p-0"
      }, this.state.newPassword.length >= 6 ? _react["default"].createElement(_mainStyling.ErrorFont, null, "Password meets requirements") : _react["default"].createElement("div", null, this.state.newPassword != this.state.password ? _react["default"].createElement(_mainStyling.ErrorFont, null, "Must match new password") : _react["default"].createElement(_mainStyling.ErrorFont, null, "Password must be at least 6 characters long")))))), _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12 col-lg-4"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "userTwitter",
        className: "form-control",
        id: "souseUserTwitter",
        value: this.state.userTwitter,
        onChange: this.onUpdateUserTwitter
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseUserTwitter"
      }, "Twitter Username"))), _react["default"].createElement("div", {
        "class": "col-12 col-lg-4"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "userFacebook",
        className: "form-control",
        id: "souseUserFacebook",
        value: this.state.userFacebook,
        onChange: this.onUpdateUserFacebook
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseUserFacebook"
      }, "Facebook Username"))), _react["default"].createElement("div", {
        "class": "col-12 col-lg-4"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "userInstagram",
        className: "form-control",
        id: "souseUserInstagram",
        value: this.state.userInstagram,
        onChange: this.onUpdateUserInstagram
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseUserInstagram"
      }, "Instagram Username")))), _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("input", {
        type: "text",
        name: "userLocation",
        className: "form-control",
        id: "souseUserLocation",
        value: this.state.userLocation,
        onChange: this.onUpdateUserLocation
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseUserLocation"
      }, "Location")))), _react["default"].createElement("div", {
        "class": "row"
      }, " ", _react["default"].createElement("div", {
        "class": "col-12"
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, " ", _react["default"].createElement("textarea", {
        id: "souseUserBio",
        className: "materialize-textarea form-control",
        name: "userBio",
        maxLength: 150,
        rows: "2",
        value: this.state.userBio,
        onChange: this.onUpdateUserBio
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseUserBio"
      }, "Bio (", this.state.userBio.length, "/150)"))))), _react["default"].createElement("div", {
        "class": "col-12 col-lg-6"
      }, _react["default"].createElement("div", {
        "class": "pt-2 container"
      }, " ", " ", _react["default"].createElement("div", {
        "class": "row"
      }, userOptionsDisplay == "1" ? _react["default"].createElement("div", {
        "class": "pt-2 container"
      }, _react["default"].createElement("div", {
        "class": "collapse",
        id: "optionSelectionCollapse1"
      }, _react["default"].createElement("div", {
        "class": "optionSelectionCollapse1"
      }, _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "col-12"
      }, " ", _react["default"].createElement(_userProfileStyling.SouseDefaultChip, {
        className: "chip col-12 h-18 d-flex justify-content-center",
        onClick: this.onUpdateUserDefaultTheme
      }, _react["default"].createElement("div", {
        className: "chipFont"
      }, "Official")), _react["default"].createElement(_userProfileStyling.SouseIMChip, {
        className: "chip col-12 h-18 d-flex justify-content-center",
        onClick: this.onUpdateUserIMTheme
      }, _react["default"].createElement("div", {
        className: "chipFont"
      }, "Inter Miami")), _react["default"].createElement(_userProfileStyling.SouseFPChip, {
        className: "chip col-12 h-18 d-flex justify-content-center",
        onClick: this.onUpdateUserFPTheme
      }, _react["default"].createElement("div", {
        className: "chipFont"
      }, "FIU Panthers")), _react["default"].createElement(_userProfileStyling.SouseViceChip, {
        className: "chip col-12 h-18 d-flex justify-content-center",
        onClick: this.onUpdateUserViceTheme
      }, _react["default"].createElement("div", {
        className: "chipFont"
      }, "Miami Heat (Vice)")), _react["default"].createElement(_userProfileStyling.SouseVapeChip, {
        className: "chip col-12 h-18 d-flex justify-content-center",
        onClick: this.onUpdateUserVapeTheme
      }, _react["default"].createElement("div", {
        className: "chipFont"
      }, "Vaporwave")), this.state.themeSelected ? _react["default"].createElement("div", {
        "class": "col-12 d-flex justify-content-center pt-5 pb-5"
      }, _react["default"].createElement(_userProfileStyling.SouseImageSwitchComboShow, {
        className: "switchFadeIn"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("h6", {
        "class": "d-block justify-content-center"
      }, "Theme change will take ", _react["default"].createElement("br", null), " place upon next login"), _react["default"].createElement("label", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        "class": "col-4 d-flex justify-content-end"
      }, _react["default"].createElement(_userProfileStyling.SunIcon, null)), _react["default"].createElement(_reactSwitch["default"], {
        checked: this.state.themeTypeSelected,
        onChange: this.handleThemeTypeChange,
        onColor: this.state.switchColor,
        onHandleColor: this.state.switchHandleColor,
        handleDiameter: 30,
        uncheckedIcon: false,
        checkedIcon: false,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
        activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: 20,
        width: 48,
        className: "react-switch col-4",
        id: "material-switch"
      }), _react["default"].createElement("div", {
        className: "col-4 d-flex justify-content-end"
      }, _react["default"].createElement(_userProfileStyling.MoonIcon, null)))))) : _react["default"].createElement("div", null)))))) : _react["default"].createElement(_deleteUserProfile["default"], {
        souseCurrentTheme: this.state.currentTheme,
        souseLoggedInUserID: this.state.userId
      }), _react["default"].createElement("div", {
        "class": "col-6"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center",
        "data-toggle": "collapse",
        href: "#optionSelectionCollapse1",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "optionSelectionCollapse1",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            userOptionsDisplay: '1'
          });
        }
      }, _react["default"].createElement(_userProfileStyling.InvertColorsIcon, null))), _react["default"].createElement("div", {
        "class": "col-6"
      }, _react["default"].createElement("h5", {
        "class": "d-flex justify-content-center",
        "data-toggle": "collapse",
        href: "#optionSelectionCollapse2",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "optionSelectionCollapse2",
        onClick: this.optionClicked = function (e) {
          _this3.setState({
            userOptionsDisplay: '2'
          });
        }
      }, _react["default"].createElement(_userProfileStyling.DeleteIcon, null)))), this.state.fullPostUploadLoader ? _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center"
      }, this.state.isLoading ? _react["default"].createElement("div", null, _react["default"].createElement("h4", {
        "class": "d-flex justify-content-center pb-2"
      }, "User Image Updated"), _react["default"].createElement("div", {
        "class": "form-group col-12"
      }, _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large d-block mx-auto"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update User")))) : _react["default"].createElement("div", {
        "class": "row d-flex justify-content-center col-12"
      }, " ", _react["default"].createElement(SouseLoadingIcon, {
        className: "spinner-grow",
        role: "status"
      }, _react["default"].createElement("span", {
        "class": "sr-only"
      }, "Loading...")), _react["default"].createElement(SouseLoadingIcon2, {
        className: "spinner-grow",
        role: "status"
      }, _react["default"].createElement("span", {
        "class": "sr-only"
      }, "Loading...")), _react["default"].createElement(SouseLoadingIcon3, {
        className: "spinner-grow",
        role: "status"
      }, _react["default"].createElement("span", {
        "class": "sr-only"
      }, "Loading...")))) : _react["default"].createElement("div", {
        "class": "row"
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
      })), _react["default"].createElement(_userProfileStyling.UploadSpan, {
        className: "d-flex justify-content-center",
        "data-error": "wrong",
        "data-success": "right"
      }, "You can upload any images with the following file extensions (JPEG, PNG, and GIF).")), _react["default"].createElement("div", {
        "class": "form-group col-12"
      }, this.state.newUserImageSetup == true ? _react["default"].createElement("h4", {
        "class": "d-flex justify-content-center"
      }, "Please upload a profile image to complete the setup process") : _react["default"].createElement("div", null, this.state.uploadButtonClicked == false ? _react["default"].createElement(_mainStyling.SouseButton, {
        type: "button",
        className: "waves-effect waves-light btn-large d-block mx-auto",
        onClick: this.onSubmit
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update User")) : _react["default"].createElement("div", null, loggedinUserImage == "" ? _react["default"].createElement(_mainStyling.SouseButton, {
        type: "button",
        className: "waves-effect waves-light btn-large d-block mx-auto",
        onClick: this.onSubmitNewUser
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update User")) : _react["default"].createElement(_mainStyling.SouseButton, {
        type: "submit",
        className: "waves-effect waves-light btn-large d-block mx-auto"
      }, _react["default"].createElement("p", {
        "class": "lead buttonFont"
      }, "Update User"))))))))))) : _react["default"].createElement(_Page["default"], null)));
    }
  }]);

  return EditUserProfile;
}(_react.Component);

EditUserProfile.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  logoutUser: _authentication.logoutUser
})((0, _reactRouterDom.withRouter)(EditUserProfile));

exports["default"] = _default;