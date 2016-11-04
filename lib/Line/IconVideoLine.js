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

var IconVideoLine = function (_Component) {
  _inherits(IconVideoLine, _Component);

  function IconVideoLine() {
    _classCallCheck(this, IconVideoLine);

    return _possibleConstructorReturn(this, (IconVideoLine.__proto__ || Object.getPrototypeOf(IconVideoLine)).apply(this, arguments));
  }

  _createClass(IconVideoLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconVideoLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1680 160H240c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h1440c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM800 1200l480-240-480-240v480zm-560 400V320h1440l.08 1280H240zM400 400h160v160H400V400zm320 0h160v160H720V400zm320 0h160v160h-160V400zm320 0h160v160h-160V400zm-960 960h160v160H400v-160zm320 0h160v160H720v-160zm320 0h160v160h-160v-160zm320 0h160v160h-160v-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconVideoLine;
}(_react.Component);

exports.default = IconVideoLine;