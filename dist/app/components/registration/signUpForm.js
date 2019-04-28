"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _authentication = require("../../../server/actions/authentication");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SignUpForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SignUpForm, _Component);

  function SignUpForm(props) {
    var _this;

    _classCallCheck(this, SignUpForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignUpForm).call(this, props));

    _this.onChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var user = {
        username: _this.state.username,
        firstName: _this.state.firstName,
        lastName: _this.state.lastName,
        email: _this.state.email,
        password: _this.state.password,
        password_confirm: _this.state.password_confirm
      };

      _this.props.registerUser(user, _this.props.history);
    };

    _this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: {}
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SignUpForm, [{
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.state.errors;
      return _react.default.createElement("div", null, _react.default.createElement("form", {
        onSubmit: this.onSubmit
      }, _react.default.createElement("div", {
        class: "input-field"
      }, _react.default.createElement("input", {
        type: "email",
        name: "email",
        class: (0, _classnames.default)('form-control', {
          'is-invalid': errors.email
        }),
        id: "souseEmail",
        value: this.state.email,
        onChange: this.onChange
      }), _react.default.createElement("label", {
        for: "souseEmail"
      }, "Email"), errors.email && _react.default.createElement("div", {
        class: "invalid-feedback"
      }, errors.email)), _react.default.createElement("div", {
        class: "input-field"
      }, _react.default.createElement("input", {
        type: "text",
        name: "username",
        class: (0, _classnames.default)('form-control', {
          'is-invalid': errors.username
        }),
        id: "souseUsername",
        value: this.state.usename,
        onChange: this.onChange
      }), _react.default.createElement("label", {
        for: "souseUsername"
      }, "Username"), errors.username && _react.default.createElement("div", {
        class: "invalid-feedback"
      }, errors.username)), _react.default.createElement("div", {
        class: "input-field"
      }, _react.default.createElement("input", {
        type: "text",
        name: "firstName",
        class: (0, _classnames.default)('form-control', {
          'is-invalid': errors.firstName
        }),
        id: "souseFirstName",
        value: this.state.firstName,
        onChange: this.onChange
      }), _react.default.createElement("label", {
        for: "souseFirstName"
      }, "First Name"), errors.firstName && _react.default.createElement("div", {
        class: "invalid-feedback"
      }, errors.firstName)), _react.default.createElement("div", {
        class: "input-field"
      }, _react.default.createElement("input", {
        type: "text",
        name: "lastName",
        class: (0, _classnames.default)('form-control', {
          'is-invalid': errors.lastName
        }),
        id: "souseLastName",
        value: this.state.lastName,
        onChange: this.onChange
      }), _react.default.createElement("label", {
        for: "souseLastName"
      }, "Last Name"), errors.lastName && _react.default.createElement("div", {
        class: "invalid-feedback"
      }, errors.lastName)), _react.default.createElement("div", {
        class: "input-field"
      }, _react.default.createElement("input", {
        type: "password",
        name: "password",
        class: (0, _classnames.default)('form-control', {
          'is-invalid': errors.password
        }),
        id: "sousePassword",
        value: this.state.password,
        onChange: this.onChange
      }), _react.default.createElement("label", {
        for: "sousePassword"
      }, "Password"), errors.password && _react.default.createElement("div", {
        class: "invalid-feedback"
      }, errors.password)), _react.default.createElement("div", {
        class: "input-field"
      }, _react.default.createElement("input", {
        type: "password",
        name: "password_confirm",
        class: (0, _classnames.default)('form-control', {
          'is-invalid': errors.password_confirm
        }),
        id: "sousePasswordConfirm",
        value: this.state.password_confirm,
        onChange: this.onChange
      }), _react.default.createElement("label", {
        for: "sousePasswordConfirm"
      }, "Password Confirm"), errors.password_confirm && _react.default.createElement("div", {
        class: "invalid-feedback"
      }, errors.password_confirm)), _react.default.createElement("div", {
        class: "form-group"
      }, _react.default.createElement("button", {
        type: "submit",
        class: "waves-effect waves-light btn-large"
      }, "Sign Up"))));
    }
  }]);

  return SignUpForm;
}(_react.Component);

SignUpForm.propTypes = {
  registerUser: _propTypes.default.func.isRequired,
  auth: _propTypes.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  registerUser: _authentication.registerUser
})((0, _reactRouterDom.withRouter)(SignUpForm));

exports.default = _default;