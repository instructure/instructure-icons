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

var IconHourGlassLine = function (_Component) {
  _inherits(IconHourGlassLine, _Component);

  function IconHourGlassLine() {
    _classCallCheck(this, IconHourGlassLine);

    return _possibleConstructorReturn(this, (IconHourGlassLine.__proto__ || Object.getPrototypeOf(IconHourGlassLine)).apply(this, arguments));
  }

  _createClass(IconHourGlassLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconHourGlassLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M879.84 837.36l-35.28-23.84C841.68 811.68 560 618.4 560 320h800c0 298.4-281.68 491.68-284.4 493.44L1040 837.2v245.6l35.6 23.76c2.88 1.92 284.4 193.04 284.4 493.44H560c0-298.24 281.68-491.6 284.4-493.44l35.6-23.76-.16-245.44zM400 1600h-80c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h1280c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80h-80c0-315.76-229.44-528.48-320-600.24v-79.52c90.56-71.6 320-284.32 320-600.24h80c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80H320c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h80c0 315.92 229.44 528.64 320 600.24v79.52c-90.56 71.76-320 284.48-320 600.24zm560-879.968s132.08-88.24 200.24-240H759.76c68.16 151.76 200.24 240 200.24 240', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHourGlassLine;
}(_react.Component);

exports.default = IconHourGlassLine;