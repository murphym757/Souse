"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _authentication = require("../../../server/actions/authentication");

var _classnames = _interopRequireDefault(require("classnames"));

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

var LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));

    _this.onChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var user = {
        email: _this.state.email,
        password: _this.state.password
      };

      _this.props.loginUser(user);
    };

    _this.state = {
      email: '',
      password: '',
      errors: {}
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/');
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/');
      }

      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.state.errors;
      return _react["default"].createElement("div", null, _react["default"].createElement("form", {
        onSubmit: this.onSubmit
      }, _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("input", {
        type: "email",
        name: "email",
        "class": (0, _classnames["default"])('form-control', {
          'is-invalid': errors.email
        }),
        id: "souseEmail",
        value: this.state.email,
        onChange: this.onChange
      }), _react["default"].createElement("label", {
        "for": "email"
      }, "Email"), _react["default"].createElement("span", {
        "class": "helper-text",
        "data-error": "wrong",
        "data-success": "right"
      }, "We'll never share your email with anyone else."), errors.email && _react["default"].createElement("div", {
        "class": "invalid-feedback"
      }, errors.email)), _react["default"].createElement("div", {
        "class": "input-field"
      }, _react["default"].createElement("input", {
        type: "password",
        name: "password",
        "class": (0, _classnames["default"])('form-control', {
          'is-invalid': errors.password
        }),
        id: "sousePassword",
        value: this.state.password,
        onChange: this.onChange
      }), _react["default"].createElement("label", {
        "for": "password"
      }, "Password"), errors.password && _react["default"].createElement("div", {
        "class": "invalid-feedback"
      }, errors.password)), _react["default"].createElement("div", {
        "class": "form-group"
      }, _react["default"].createElement("button", {
        type: "submit",
        "class": "waves-effect waves-light btn-large"
      }, "Login"))));
    }
  }]);

  return LoginForm;
}(_react.Component);

LoginForm.propTypes = {
  loginUser: _propTypes["default"].func.isRequired,
  auth: _propTypes["default"].object.isRequired,
  errors: _propTypes["default"].func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  loginUser: _authentication.loginUser
})(LoginForm);

exports["default"] = _default;