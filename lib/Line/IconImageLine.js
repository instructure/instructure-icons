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

var IconImageLine = function (_Component) {
  _inherits(IconImageLine, _Component);

  function IconImageLine() {
    _classCallCheck(this, IconImageLine);

    return _possibleConstructorReturn(this, (IconImageLine.__proto__ || Object.getPrototypeOf(IconImageLine)).apply(this, arguments));
  }

  _createClass(IconImageLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconImageLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M160 399.607C160 311.46 231.857 240 319.264 240h1281.472c87.96 0 159.264 71.41 159.264 159.607v1120.786c0 88.148-71.857 159.607-159.264 159.607H319.264C231.304 1680 160 1608.59 160 1520.393V399.607zm160 0v1120.786c0-.116-.277-.393-.736-.393h1281.472c-.76 0-.736-.023-.736.393V399.607c0 .116.277.393.736.393H319.264c.76 0 .736.023.736-.393zM480 1360l240-320 160 160 320-400 240 560H480zm200-800c110.32 0 200 89.52 200 200 0 110.56-89.68 200-200 200-110.56 0-200-89.44-200-200 0-110.48 89.44-200 200-200z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconImageLine;
}(_react.Component);

exports.default = IconImageLine;