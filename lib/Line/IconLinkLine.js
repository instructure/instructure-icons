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

var IconLinkLine = function (_Component) {
  _inherits(IconLinkLine, _Component);

  function IconLinkLine() {
    _classCallCheck(this, IconLinkLine);

    return _possibleConstructorReturn(this, (IconLinkLine.__proto__ || Object.getPrototypeOf(IconLinkLine)).apply(this, arguments));
  }

  _createClass(IconLinkLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconLinkLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M791.396 1015.028l-561.762 562.647 112.337 112.402 561.761-562.647-112.336-112.402zm337.089-112.402l561.762-562.488-112.416-112.482-561.762 562.488 112.416 112.482zm561.762-224.884l-56.248-56.241-112.337 112.482 56.248 56.24c15.015 15.035 23.198 34.922 23.198 56.241 0 21.16-8.262 41.127-23.198 56.162l-674.098 675.049c-30.03 29.99-82.385 29.99-112.416 0l-56.168-56.241-112.337 112.402 56.169 56.24C724.105 1735.182 783.928 1760 847.644 1760c63.636 0 123.459-24.82 168.504-69.923l674.099-674.97C1735.213 970.083 1760 910.183 1760 846.464c0-63.718-24.787-123.698-69.753-168.722zM229.714 1240.07c-92.952-93.072-92.952-244.453 0-337.525l674.098-674.89c89.933-90.208 246.997-90.208 337.089 0l56.088 56.24L1184.732 396.3l-56.168-56.24c-15.094-15.036-34.956-23.309-56.247-23.309-21.292 0-41.233 8.273-56.169 23.308l-674.177 674.97c-30.984 31.103-30.984 81.537 0 112.56l56.168 56.242-112.336 112.481-56.09-56.24z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconLinkLine;
}(_react.Component);

exports.default = IconLinkLine;