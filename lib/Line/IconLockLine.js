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

var IconLockLine = function (_Component) {
  _inherits(IconLockLine, _Component);

  function IconLockLine() {
    _classCallCheck(this, IconLockLine);

    return _possibleConstructorReturn(this, (IconLockLine.__proto__ || Object.getPrototypeOf(IconLockLine)).apply(this, arguments));
  }

  _createClass(IconLockLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconLockLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1570 1684H351V922h1219v762zM1189 617.143V846H732V617.143c0-128 100.54-228.572 228.5-228.572S1189 489.143 1189 617.143zM1582.508 846H1418V617.143C1418 365.714 1212.35 160 961 160S504 365.714 504 617.143V846H339.492c-31.501 0-58.063 22.541-63.469 52.467-.044.239-.089.477-.13.716a61.017 61.017 0 0 0-.466 3.282 61.95 61.95 0 0 0-.125 1.148 62.381 62.381 0 0 0-.228 3.209 62.853 62.853 0 0 0-.074 2.888v786.294c0 35.344 29.155 63.996 64.502 63.996h1242.996c35.347 0 63.502-28.65 63.502-63.996V909.71c0-35.344-28.151-63.71-63.492-63.71z' }),
          _react2.default.createElement('path', { d: 'M961.436 1519c-113.183 0-204.936-91.781-204.936-205s91.753-205 204.936-205c113.182 0 204.936 91.781 204.936 205s-91.754 205-204.936 205m0-486c-75.045 0-145.598 29.232-198.66 82.311C709.72 1168.384 680.5 1238.947 680.5 1314c0 75.052 29.22 145.615 82.276 198.688 53.062 53.079 123.615 82.312 198.66 82.312s145.597-29.233 198.66-82.312c53.056-53.073 82.276-123.636 82.276-198.688 0-75.053-29.22-145.616-82.276-198.689-53.063-53.079-123.615-82.311-198.66-82.311' })
        )
      );
    }
  }]);

  return IconLockLine;
}(_react.Component);

exports.default = IconLockLine;