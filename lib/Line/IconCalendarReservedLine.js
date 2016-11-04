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

var IconCalendarReservedLine = function (_Component) {
  _inherits(IconCalendarReservedLine, _Component);

  function IconCalendarReservedLine() {
    _classCallCheck(this, IconCalendarReservedLine);

    return _possibleConstructorReturn(this, (IconCalendarReservedLine.__proto__ || Object.getPrototypeOf(IconCalendarReservedLine)).apply(this, arguments));
  }

  _createClass(IconCalendarReservedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCalendarReservedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M789.995 800h959.993V480c0-88.4-71.6-160-159.999-160H1469.99V120c0-66.32-53.76-120-120-120-66.239 0-119.998 53.68-119.998 120v200H669.996V120c0-66.32-53.76-120-119.999-120-66.24 0-120 53.68-120 120v200H310C221.599 320 150 391.6 150 480v1280c0 88.4 71.6 160 159.999 160h479.996v-160H310V800h479.996zm946.161 311.68c-41.52-36.56-104.72-32.64-141.199 8.8l-333.597 378.08-164.96-146.64c-41.119-36.64-104.398-33.12-141.198 8.32-36.64 41.28-32.96 104.48 8.4 141.2l239.998 213.28A99.732 99.732 0 0 0 1270 1740c2 0 4.08-.08 6.08-.16 26.48-1.6 51.36-13.76 68.879-33.68l399.997-453.28c36.56-41.44 32.64-104.64-8.8-141.2z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCalendarReservedLine;
}(_react.Component);

exports.default = IconCalendarReservedLine;