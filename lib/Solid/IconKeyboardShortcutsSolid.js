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

var IconKeyboardShortcutsSolid = function (_Component) {
  _inherits(IconKeyboardShortcutsSolid, _Component);

  function IconKeyboardShortcutsSolid() {
    _classCallCheck(this, IconKeyboardShortcutsSolid);

    return _possibleConstructorReturn(this, (IconKeyboardShortcutsSolid.__proto__ || Object.getPrototypeOf(IconKeyboardShortcutsSolid)).apply(this, arguments));
  }

  _createClass(IconKeyboardShortcutsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconKeyboardShortcutsSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1693.417 599.8h-659.625v-73.3c0-40.49 32.806-73.3 73.291-73.3h73.292c121.106 0 219.875-98.78 219.875-219.9V160h-146.583v73.3c0 40.49-32.807 73.3-73.292 73.3h-73.292c-121.105 0-219.875 98.78-219.875 219.9v73.3H227.583C146.613 599.8 81 665.421 81 746.4v733c0 80.979 65.613 146.6 146.583 146.6h1465.834c80.97 0 146.583-65.62 146.583-146.6v-733c0-80.979-65.613-146.6-146.583-146.6zM1400 820h147v147h-147V820zm-220 0h147v147h-147V820zm221 220v147h-147v-147h147zM961 820h147v147H961V820zm220 220v147h-147v-147h147zm-220 0v147H814v-147h147zM741 820h147v147H741V820zm-220 0h147v147H521V820zm220 220v147H594v-147h147zM301 820h147v147H301V820zm220 220v147H374v-147h147zm-73 367H301v-147h147v147zm879 0H521v-147h806v147zm220 0h-147v-147h147v147zm74-220h-147v-147h147v147z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconKeyboardShortcutsSolid;
}(_react.Component);

exports.default = IconKeyboardShortcutsSolid;