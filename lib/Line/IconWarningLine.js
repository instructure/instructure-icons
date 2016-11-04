'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconWarningLine = function (_Component) {
  _inherits(IconWarningLine, _Component);

  function IconWarningLine() {
    _classCallCheck(this, IconWarningLine);

    return _possibleConstructorReturn(this, (IconWarningLine.__proto__ || Object.getPrototypeOf(IconWarningLine)).apply(this, arguments));
  }

  _createClass(IconWarningLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconWarningLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1680.027 1756.46h-1440c-27.76 0-53.44-14.4-68.08-37.92-14.64-23.68-15.84-53.04-3.52-77.92l720-1440c27.12-54.16 116-54.16 143.12 0l720 1440c12.32 24.88 11.12 54.16-3.52 77.92-14.56 23.6-40.24 37.92-68 37.92zm-1310.56-160h1181.12L960.027 415.42l-590.56 1181.04zm510.56-800h160v480h-160v-480zm80 740c55.229 0 100-44.772 100-100s-44.771-100-100-100c-55.228 0-100 44.772-100 100s44.772 100 100 100z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconWarningLine;
}(_react.Component);

exports.default = IconWarningLine;