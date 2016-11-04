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

var IconAudioLine = function (_Component) {
  _inherits(IconAudioLine, _Component);

  function IconAudioLine() {
    _classCallCheck(this, IconAudioLine);

    return _possibleConstructorReturn(this, (IconAudioLine.__proto__ || Object.getPrototypeOf(IconAudioLine)).apply(this, arguments));
  }

  _createClass(IconAudioLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAudioLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M960 880c-176.48 0-320-143.52-320-320 0-176.4 143.52-320 320-320s320 143.6 320 320c0 176.48-143.52 320-320 320zm93.52 727.2c-3.76 41.52-38 72.8-79.6 72.8h-27.84c-41.68 0-75.92-31.28-79.68-72.72l-53.6-590.56c46.4 14.96 95.84 23.28 147.2 23.28 51.36 0 100.8-8.32 147.2-23.28l-53.68 590.48zM1440 560c0-264.72-215.28-480-480-480S480 295.28 480 560c0 143.28 63.36 271.68 163.28 359.76l63.76 701.92C718.32 1746.16 821.12 1840 946.08 1840h27.84c124.88 0 227.6-93.84 238.96-218.32l63.84-701.92C1376.56 831.68 1440 703.28 1440 560zm-560.04 640c0 44.24 35.84 80 80 80s80-35.76 80-80c0-44.16-35.84-80-80-80s-80 35.84-80 80', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAudioLine;
}(_react.Component);

exports.default = IconAudioLine;