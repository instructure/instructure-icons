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

var IconMediaLine = function (_Component) {
  _inherits(IconMediaLine, _Component);

  function IconMediaLine() {
    _classCallCheck(this, IconMediaLine);

    return _possibleConstructorReturn(this, (IconMediaLine.__proto__ || Object.getPrototypeOf(IconMediaLine)).apply(this, arguments));
  }

  _createClass(IconMediaLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMediaLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1360 1520h160v-160h-160v160zm-320 0h160v-160h-160v160zm-320 0h160v-160H720v160zm-320 0h160v-160H400v160zm960-960h160V400h-160v160zm-320 0h160V400h-160v160zm-320 0h160V400H720v160zm-320 0h160V400H400v160zm1280.08 1040L1680 320H240v1280h1440.08zM1840 320v1280c0 88.24-71.76 160-160 160H240c-88.24 0-160-71.76-160-160V320c0-88.32 71.76-160 160-160h1440c88.24 0 160 71.68 160 160zM800 720l480 240-480 240V720z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMediaLine;
}(_react.Component);

exports.default = IconMediaLine;