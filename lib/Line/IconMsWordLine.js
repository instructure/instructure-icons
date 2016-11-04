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

var IconMsWordLine = function (_Component) {
  _inherits(IconMsWordLine, _Component);

  function IconMsWordLine() {
    _classCallCheck(this, IconMsWordLine);

    return _possibleConstructorReturn(this, (IconMsWordLine.__proto__ || Object.getPrototypeOf(IconMsWordLine)).apply(this, arguments));
  }

  _createClass(IconMsWordLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMsWordLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1271.165 964.73h125.252v-82.273h-125.252c-68.996 0-125.165 55.427-125.165 123.302v82.058c0 67.874 56.169 123.258 125.165 123.258h125.252v-82.272h-125.252c-22.994 0-41.533-18.33-41.533-40.986v-82.058c0-22.64 18.54-41.03 41.533-41.03zm-458.792 82.036c0-90.494-74.839-164.309-166.828-164.309H562v328.618h83.545c91.989 0 166.828-73.815 166.828-164.309zM646 965.457c45.878 0 83.415 36.84 83.415 82.058 0 45.235-37.537 82.059-83.415 82.059V965.457zm208 40.088v82.058c0 67.875 56.212 123.088 125.208 123.088s125.209-55.213 125.209-123.088v-82.058c0-67.875-56.213-123.088-125.209-123.088-68.996 0-125.208 55.213-125.208 123.088zm167.154.941v82.059c0 22.656-18.584 41.029-41.577 41.029-22.994 0-41.577-18.373-41.577-41.03v-82.058c0-22.64 18.583-41.029 41.577-41.029 22.993 0 41.577 18.39 41.577 41.03zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z' }),
          _react2.default.createElement('path', { d: 'M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z' })
        )
      );
    }
  }]);

  return IconMsWordLine;
}(_react.Component);

exports.default = IconMsWordLine;