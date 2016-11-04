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

var IconStandardsLine = function (_Component) {
  _inherits(IconStandardsLine, _Component);

  function IconStandardsLine() {
    _classCallCheck(this, IconStandardsLine);

    return _possibleConstructorReturn(this, (IconStandardsLine.__proto__ || Object.getPrototypeOf(IconStandardsLine)).apply(this, arguments));
  }

  _createClass(IconStandardsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconStandardsLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M960 1880c-790.88 0-800-1304.48-800-1360 0-29.04 15.76-55.76 41.12-69.92l720-400c24.24-13.44 53.52-13.44 77.76 0l720 400c25.36 14.16 41.12 40.88 41.12 69.92 0 55.52-9.12 1360-800 1360zM321.2 566.4C330 787.28 400.24 1720 960 1720s630-932.72 638.72-1153.6L960 211.44 321.2 566.4zm665.84 818.88L580 1080l120-160 232.88 174.72 342.24-547.68 169.68 106-457.76 732.24z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStandardsLine;
}(_react.Component);

exports.default = IconStandardsLine;