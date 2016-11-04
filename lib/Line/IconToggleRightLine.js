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

var IconToggleRightLine = function (_Component) {
  _inherits(IconToggleRightLine, _Component);

  function IconToggleRightLine() {
    _classCallCheck(this, IconToggleRightLine);

    return _possibleConstructorReturn(this, (IconToggleRightLine.__proto__ || Object.getPrototypeOf(IconToggleRightLine)).apply(this, arguments));
  }

  _createClass(IconToggleRightLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconToggleRightLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1602 160h-400v160h400v1280h-400v160h400c88.24 0 160-71.76 160-160V320c0-88.24-71.76-160-160-160zm-880 0H562v160h160V160zM562 1760h160v-160H562v160zM162 320v80h160v-80h80V160h-80c-88.24 0-160 71.76-160 160zm160 1200H162v80c0 88.24 71.76 160 160 160h80v-160h-80v-80zm0-960H162v160h160V560zm0 640H162v160h160v-160zm0-320H162v160h160V880zm1040 240c0-176.48-143.52-320-320-320H755.12l103.44-103.44-113.12-113.12L448.88 880l296.56 296.56 113.12-113.12L755.12 960H1042c88.24 0 160 71.76 160 160h160zm-320-960H882v400h160V160zM882 1760h160v-560H882v560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconToggleRightLine;
}(_react.Component);

exports.default = IconToggleRightLine;