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

var IconComposeLine = function (_Component) {
  _inherits(IconComposeLine, _Component);

  function IconComposeLine() {
    _classCallCheck(this, IconComposeLine);

    return _possibleConstructorReturn(this, (IconComposeLine.__proto__ || Object.getPrototypeOf(IconComposeLine)).apply(this, arguments));
  }

  _createClass(IconComposeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconComposeLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1480.022 1760H360.002C271.763 1760 200 1688.239 200 1599.997V479.977c0-88.16 71.761-160.002 160.003-160.002h560.01v160.003h-560.01v1120.02h1120.02V879.984h160.002v720.012c0 88.242-71.761 160.003-160.003 160.003zM824.62 829.16l226.244 226.244-282.805 56.56 56.56-282.804zm848.535-396.055c62.48-62.481 62.48-163.763 0-226.244-62.481-62.481-163.763-62.481-226.244 0L937.78 715.99l226.245 226.244 509.129-509.13z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconComposeLine;
}(_react.Component);

exports.default = IconComposeLine;