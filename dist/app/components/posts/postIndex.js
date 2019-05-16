"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _postForm = _interopRequireDefault(require("./postForm"));

var _materializeCss = _interopRequireDefault(require("materialize-css"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PostIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(PostIndex, _Component);

  function PostIndex(props) {
    var _this;

    _classCallCheck(this, PostIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostIndex).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(PostIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _materializeCss["default"].AutoInit();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        "class": "collapse",
        id: "postCreateCollapse"
      }, _react["default"].createElement("div", {
        "class": "postCreateCollapse"
      }, _react["default"].createElement(_postForm["default"], null))), _react["default"].createElement("div", {
        "class": "fixed-action-btn"
      }, _react["default"].createElement("a", {
        "class": "btn-floating btn-large red"
      }, _react["default"].createElement("i", {
        "class": "fas fa-plus"
      })), _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("a", {
        "class": "btn-floating red addPostButton"
      }, _react["default"].createElement("i", {
        "class": "fas fa-pen fa-xs",
        "data-toggle": "collapse",
        href: "#postCreateCollapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "postCreateCollapse"
      }))), _react["default"].createElement("li", null, _react["default"].createElement("a", {
        "class": "btn-floating yellow darken-1"
      }, _react["default"].createElement("i", {
        "class": "fas fa-search fa-xs",
        "data-toggle": "collapse",
        href: "#collapseExample",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "collapseExample"
      }))))));
    }
  }]);

  return PostIndex;
}(_react.Component);

PostIndex.propTypes = {
  auth: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PostIndex);

exports["default"] = _default;