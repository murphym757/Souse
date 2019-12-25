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

var _reactSwitch = _interopRequireDefault(require("react-switch"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _config = _interopRequireDefault(require("../../../server/config"));

var _materializeCss = _interopRequireDefault(require("materialize-css"));

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

var DeleteUserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteUserProfile, _Component);

  function DeleteUserProfile(props) {
    var _this;

    _classCallCheck(this, DeleteUserProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeleteUserProfile).call(this, props));
    var _this$props$auth = _this.props.auth,
        isAuthenticated = _this$props$auth.isAuthenticated,
        user = _this$props$auth.user;
    var loggedinUserTheme = user.userTheme;
    var souseLoggedInUserID = _this.props.souseLoggedInUserID;
    _this.state = {
      userId: souseLoggedInUserID,
      deleteUser: false,
      deleteUserConfirm: false,
      switchColor: "",
      switchHandleColor: ""
    };
    _this.deleteUser = _this.deleteUser.bind(_assertThisInitialized(_this));
    _this.deleteImageUpload = _this.deleteImageUpload.bind(_assertThisInitialized(_this));
    _this.deleteUserPosts = _this.deleteUserPosts.bind(_assertThisInitialized(_this));
    _this.deleteUserComments = _this.deleteUserComments.bind(_assertThisInitialized(_this));
    _this.deleteUserFollowers = _this.deleteUserFollowers.bind(_assertThisInitialized(_this));
    _this.deleteUserFollows = _this.deleteUserFollows.bind(_assertThisInitialized(_this));
    _this.handleChangeDelete = _this.handleChangeDelete.bind(_assertThisInitialized(_this));
    _this.handleChangeDeleteConfirm = _this.handleChangeDeleteConfirm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DeleteUserProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();

      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var theme1 = "souseDefaultTheme";
      var theme2 = "souseIMTheme";
      var theme3 = "souseFPTheme";
      var theme4 = "souseViceTheme";
      var theme5 = "souseVapeTheme";

      if (isAuthenticated) {
        var currentTheme = user.userTheme;

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
    key: "deleteProfile",
    value: function deleteProfile() {
      this.deleteUserPosts();
      this.deleteUserFollowers();
      this.deleteUserFollows();
      this.deleteUserComments();
      this.deleteImageUpload();
      this.deleteUser();
    }
  }, {
    key: "deleteUserPosts",
    value: function deleteUserPosts() {
      var userId = this.state.userId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/u/p/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + userId).then(console.log('Posts Deleted'))["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "deleteUserComments",
    value: function deleteUserComments() {
      var userId = this.state.userId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/u/c/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + userId).then(console.log('Comments Deleted'))["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "deleteUserFollowers",
    value: function deleteUserFollowers() {
      var userId = this.state.userId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/u/followers/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + userId).then(console.log('Followers Deleted'))["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "deleteUserFollows",
    value: function deleteUserFollows() {
      var userId = this.state.userId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/u/follows/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + userId).then(console.log('Follows Deleted'))["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "deleteUser",
    value: function deleteUser() {
      var userId = this.state.userId;
      var apiRoute = "/souseAPI";
      var deleteRoute = "/u/delete";

      _axios["default"].get(apiRoute + deleteRoute + "/" + userId).then(console.log('Deleted'))["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "deleteImageUpload",
    value: function deleteImageUpload() {
      var _this$props$auth3 = this.props.auth,
          isAuthenticated = _this$props$auth3.isAuthenticated,
          user = _this$props$auth3.user;
      var loggedinUserId = user.id;
      var s3bucket = new _awsSdk["default"].S3({
        accessKeyId: _config["default"].AWS_ACCESS_KEY_ID,
        secretAccessKey: _config["default"].AWS_SECRET_ACCESS_KEY,
        region: _config["default"].AWS_REGION
      });
      var params = {
        Bucket: _config["default"].AWS_BUCKET_NAME,
        Prefix: 'users/' + "" + loggedinUserId + "/"
      };
      s3bucket.listObjects(params, function (err, data, cb) {
        if (err) return cb(err);
        if (data.Deleted.length == 0) return cb();
        params = {
          Bucket: _config["default"].AWS_BUCKET_NAME
        };
        params.Delete = {
          Objects: []
        };
        data.Deleted.forEach(function (content) {
          params.Delete.Objects.push({
            Key: content.Key
          });
        });
        s3bucket.deleteObjects(params, function (err, data, cb) {
          if (err) return cb(err);
          if (data.Deleted.length == 1000) emptyBucket(_config["default"].AWS_BUCKET_NAME, cb);else cb();
        });
      });
    }
  }, {
    key: "handleChangeDelete",
    value: function handleChangeDelete(deleteUser) {
      this.setState({
        deleteUser: deleteUser
      });
    }
  }, {
    key: "handleChangeDeleteConfirm",
    value: function handleChangeDeleteConfirm(deleteUserConfirm) {
      this.setState({
        deleteUserConfirm: deleteUserConfirm
      });
      this.deleteProfile();
      this.props.history.push("/");
      this.props.logoutUser(this.props.history);
      window.location.reload(true);
    }
  }, {
    key: "render",
    value: function render() {
      var switchColor = this.state.switchColor;
      var switchHandleColor = this.state.switchHandleColor;
      return _react["default"].createElement("div", {
        "class": "pt-2 container"
      }, _react["default"].createElement("div", {
        "class": "collapse",
        id: "optionSelectionCollapse2"
      }, _react["default"].createElement("div", {
        "class": "optionSelectionCollapse2"
      }, _react["default"].createElement("div", {
        "class": "row pt-5"
      }, _react["default"].createElement("div", {
        "class": "col-3"
      }, _react["default"].createElement("deleteAccountFont", null, _react["default"].createElement("h4", {
        "class": "deleteAccountFont"
      }, "Delete Account"))), _react["default"].createElement("div", {
        "class": "col-9"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("label", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement(_userProfileStyling.EditUserProfileOptionsFont, {
        className: "col-4 d-flex justify-content-end"
      }, "No"), _react["default"].createElement(_reactSwitch["default"], {
        checked: this.state.deleteUser,
        onChange: this.handleChangeDelete,
        onColor: switchColor,
        onHandleColor: switchHandleColor,
        handleDiameter: 30,
        uncheckedIcon: false,
        checkedIcon: false,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
        activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: 20,
        width: 48,
        className: "react-switch col-4",
        id: "material-switch"
      }), _react["default"].createElement(_userProfileStyling.EditUserProfileOptionsFont, {
        className: "col-4"
      }, "Yes"))))))), this.state.deleteUser ? _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "row"
      }, _react["default"].createElement("div", {
        "class": "col-3"
      }, _react["default"].createElement("deleteAccountFont", null, _react["default"].createElement("h4", {
        "class": "deleteAccountFont"
      }, "Are you sure?"))), _react["default"].createElement("div", {
        "class": "col-9"
      }, _react["default"].createElement("div", {
        "class": "container-fluid"
      }, _react["default"].createElement("label", {
        "class": "row d-flex justify-content-center"
      }, _react["default"].createElement(_userProfileStyling.EditUserProfileOptionsFont, {
        className: "col-4 d-flex justify-content-end"
      }, "No"), _react["default"].createElement(_reactSwitch["default"], {
        checked: this.state.deleteUserConfirm,
        onChange: this.handleChangeDeleteConfirm,
        onColor: switchColor,
        onHandleColor: switchHandleColor,
        handleDiameter: 30,
        uncheckedIcon: false,
        checkedIcon: false,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
        activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: 20,
        width: 48,
        className: "react-switch col-4",
        id: "material-switch"
      }), _react["default"].createElement(_userProfileStyling.EditUserProfileOptionsFont, {
        className: "col-4"
      }, "Yes")))))) : _react["default"].createElement("div", null));
    }
  }]);

  return DeleteUserProfile;
}(_react.Component);

DeleteUserProfile.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  logoutUser: _authentication.logoutUser
})((0, _reactRouterDom.withRouter)(DeleteUserProfile));

exports["default"] = _default;