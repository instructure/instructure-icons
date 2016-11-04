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

var IconMessageLine = function (_Component) {
  _inherits(IconMessageLine, _Component);

  function IconMessageLine() {
    _classCallCheck(this, IconMessageLine);

    return _possibleConstructorReturn(this, (IconMessageLine.__proto__ || Object.getPrototypeOf(IconMessageLine)).apply(this, arguments));
  }

  _createClass(IconMessageLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMessageLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M320 1321V695.32l597.6 373.52A80.132 80.132 0 0 0 960 1081c14.72 0 29.44-4.08 42.4-12.16l597.6-373.6.08 625.76H320zm1129.04-720L960 906.6 470.96 601h978.08zM1600 441H320c-88.24 0-160 71.76-160 160v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160V601c0-88.24-71.76-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMessageLine;
}(_react.Component);

exports.default = IconMessageLine;