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

var IconPinterestLine = function (_Component) {
  _inherits(IconPinterestLine, _Component);

  function IconPinterestLine() {
    _classCallCheck(this, IconPinterestLine);

    return _possibleConstructorReturn(this, (IconPinterestLine.__proto__ || Object.getPrototypeOf(IconPinterestLine)).apply(this, arguments));
  }

  _createClass(IconPinterestLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPinterestLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1600.02 0H319.98C143.25.033 0 143.31 0 320.04v1279.92A319.98 319.98 0 0 0 319.98 1920h1280.04c176.73-.033 319.98-143.31 319.98-320.04V320.04A319.98 319.98 0 0 0 1600.02 0zM1053 1282.8c-87.18-6.84-123.78-50.04-192.12-91.56-37.62 197.22-83.58 386.28-219.6 485.04-42-298.08 61.62-522 109.8-759.6-82.2-138.18 9.84-416.4 183-347.76 213 84.3-184.5 513.78 82.38 567.42 278.7 55.92 392.4-483.6 219.72-658.98-249.6-253.32-726.72-5.76-668.1 357 14.28 88.62 105.9 115.5 36.6 237.9-159.78-35.4-207.48-161.4-201.36-329.4 9.96-275.1 247.2-467.64 485.1-494.22 300.9-33.6 583.32 110.4 622.32 393.6 43.92 319.44-135.84 665.4-457.62 640.56h-.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPinterestLine;
}(_react.Component);

exports.default = IconPinterestLine;