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

var IconUserLine = function (_Component) {
  _inherits(IconUserLine, _Component);

  function IconUserLine() {
    _classCallCheck(this, IconUserLine);

    return _possibleConstructorReturn(this, (IconUserLine.__proto__ || Object.getPrototypeOf(IconUserLine)).apply(this, arguments));
  }

  _createClass(IconUserLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUserLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1490.88 1005.124c-131.68 143.999-320.4 234.879-530.88 234.879-210.48 0-399.28-90.88-530.96-234.88C232.48 1030.404 80 1196.484 80 1400.003V1880h1760v-479.998c0-203.52-152.48-369.598-349.12-394.878m46.88 177.519c84.4 37.6 142.24 121.76 142.24 217.359V1720H240v-320c0-95.598 57.76-179.758 142.16-217.358 159.6 139.12 365.28 217.359 577.84 217.359 212.48 0 418.16-78.24 577.76-217.36M959.968 40c-265.12 0-480 214.879-480 479.998s214.88 479.998 480 479.998 480-214.88 480-479.998c0-265.12-214.88-479.998-480-479.998m0 159.999c176.48 0 320 143.52 320 319.999s-143.52 319.999-320 319.999-320-143.52-320-320c0-176.478 143.52-319.998 320-319.998', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUserLine;
}(_react.Component);

exports.default = IconUserLine;