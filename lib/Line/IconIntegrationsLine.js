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

var IconIntegrationsLine = function (_Component) {
  _inherits(IconIntegrationsLine, _Component);

  function IconIntegrationsLine() {
    _classCallCheck(this, IconIntegrationsLine);

    return _possibleConstructorReturn(this, (IconIntegrationsLine.__proto__ || Object.getPrototypeOf(IconIntegrationsLine)).apply(this, arguments));
  }

  _createClass(IconIntegrationsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconIntegrationsLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1792 512h-256V128c0-70.4-57.6-128-128-128h-128c-70.4 0-128 57.6-128 128v384H768V128C768 57.6 710.4 0 640 0H512c-70.4 0-128 57.6-128 128v384H128C57.6 512 0 569.6 0 640v256c0 70.4 57.6 128 128 128h64v441.6c0 76.8 83.2 134.4 192 134.4h320v128c0 108.8 83.2 192 192 192h128c108.8 0 192-83.2 192-192v-128h320c108.8 0 192-57.6 192-134.4V1024h64c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128zm-512 0V128h128v384h-128zm-768 0V128h128v384H512zm512 1280H896c-38.4 0-64-25.6-64-64v-128h256v128c0 38.4-25.6 64-64 64zm576-364.8c0 25.6-25.6 44.8-64 44.8H384c-32 0-64-19.2-64-44.8V1024h1280v403.2zm64-531.2H128V640h1664v256h-128z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconIntegrationsLine;
}(_react.Component);

exports.default = IconIntegrationsLine;