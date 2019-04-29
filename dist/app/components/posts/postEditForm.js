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

    _this.onSubmit = function (e) {
      e.preventDefault();
      var postData = {
        postCreatorId: _this.state.postCreatorId,
        postCaption: _this.state.postCaption
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
    var loggedInUsername = user.username;
    var loggedInUserId = user.id;
    var postIdPathname = window.location.pathname;
    var postIdFound = postIdPathname.slice(8);
    _this.state = {
      posts: [],
      users: [],
      originalPostId: postIdFound,
      postCreatorId: '',
      postCaption: ''
    };
    _this.onChangepostCaption = _this.onChangepostCaption.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
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
          postCreatorId: res.data.postCreator
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth2 = this.props.auth,
          isAuthenticated = _this$props$auth2.isAuthenticated,
          user = _this$props$auth2.user;
      var loggedInUser = "" + user.id + "";
      var postCreatorId = this.state.postCreatorId;
      return _react["default"].createElement("div", null, isAuthenticated && postCreatorId == loggedInUser ? _react["default"].createElement("div", {
        "class": "container"
      }, _react["default"].createElement("form", {
        onSubmit: this.onSubmit
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("textarea", {
        "class": "materialize-textarea",
        name: "postCaption",
        id: "souseCaptionPost",
        rows: "1",
        value: this.state.postCaption,
        onChange: this.onChangepostCaption
      }), _react["default"].createElement("label", {
        "class": "active",
        "for": "souseCaptionPost"
      }, "Caption")), _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, "Update")))) : _react["default"].createElement("div", null));
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