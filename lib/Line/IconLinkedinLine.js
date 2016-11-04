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

var IconLinkedinLine = function (_Component) {
  _inherits(IconLinkedinLine, _Component);

  function IconLinkedinLine() {
    _classCallCheck(this, IconLinkedinLine);

    return _possibleConstructorReturn(this, (IconLinkedinLine.__proto__ || Object.getPrototypeOf(IconLinkedinLine)).apply(this, arguments));
  }

  _createClass(IconLinkedinLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconLinkedinLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1440 1082.52v355.04H1234.12v-331.24c0-83.2-29.76-139.96-104.16-139.96-56.84 0-90.76 38.28-105.6 75.24-5.44 13.2-6.8 31.68-6.8 50.2v345.68h-205.8s2.8-560.96 0-619.08h205.8v87.76c27.4-42.2 76.24-102.28 185.52-102.28 135.4 0 236.92 88.52 236.92 278.64zm-728.52-455.6c0 59.44-44.64 107.04-116.44 107.04h-1.36c-69.04 0-113.68-47.64-113.68-107.04C480 566.2 526 520 596.4 520c70.44 0 113.72 46.2 115.08 106.92zM492.16 818.48h205.8v619.08H492.16V818.48zM1600 1504c0 53-43 96-96 96H416c-53 0-96-43-96-96V416c0-53.04 43-96 96-96h1088c53 0 96 42.96 96 96v1088zm0-1344H320c-88.36 0-160 71.64-160 160v1280c0 88.36 71.64 160 160 160h1280c88.36 0 160-71.64 160-160V320c0-88.36-71.64-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconLinkedinLine;
}(_react.Component);

exports.default = IconLinkedinLine;