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

var IconCheckPlusLine = function (_Component) {
  _inherits(IconCheckPlusLine, _Component);

  function IconCheckPlusLine() {
    _classCallCheck(this, IconCheckPlusLine);

    return _possibleConstructorReturn(this, (IconCheckPlusLine.__proto__ || Object.getPrototypeOf(IconCheckPlusLine)).apply(this, arguments));
  }

  _createClass(IconCheckPlusLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCheckPlusLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1840 1400.004h-240.003v-239.997h-160.002v239.997h-240.002v159.999h240.002V1800h160.002v-239.997H1840v-159.999zM719.987 1560.003c-42.24 0-83.04-16.72-113.121-46.88l-480.005-479.995c-62.481-62.479-62.481-163.758 0-226.237 62.48-62.48 163.761-62.48 226.242 0l346.484 346.396 690.168-966.23c51.36-71.998 151.442-88.558 223.202-37.279 72.001 51.44 88.641 151.359 37.28 223.198L850.23 1492.963c-27.36 38.32-70.161 62.56-117.042 66.48-4.48.4-8.8.56-13.2.56z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCheckPlusLine;
}(_react.Component);

exports.default = IconCheckPlusLine;