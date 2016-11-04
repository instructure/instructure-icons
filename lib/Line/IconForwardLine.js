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

var IconForwardLine = function (_Component) {
  _inherits(IconForwardLine, _Component);

  function IconForwardLine() {
    _classCallCheck(this, IconForwardLine);

    return _possibleConstructorReturn(this, (IconForwardLine.__proto__ || Object.getPrototypeOf(IconForwardLine)).apply(this, arguments));
  }

  _createClass(IconForwardLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconForwardLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1040.08 160c20.8 0 41.2 8.16 56.48 23.44l720 720c31.28 31.28 31.28 81.84 0 113.12l-720 720A80.027 80.027 0 0 1 1040 1760c-10.32 0-20.72-2-30.64-6.08-29.84-12.4-49.36-41.6-49.36-73.92v-240H159.28c-43.2 0-79.28-35.84-79.28-80.16v-799.6c0-43.76 35.44-80.24 79.28-80.24H960V240c0-32.32 19.52-61.52 49.36-73.92 10-4.08 20.4-6.08 30.72-6.08M1120 433.2V640H240v640h880v206.88L1646.8 960 1120 433.2', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconForwardLine;
}(_react.Component);

exports.default = IconForwardLine;