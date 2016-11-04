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

var IconHighlighterLine = function (_Component) {
  _inherits(IconHighlighterLine, _Component);

  function IconHighlighterLine() {
    _classCallCheck(this, IconHighlighterLine);

    return _possibleConstructorReturn(this, (IconHighlighterLine.__proto__ || Object.getPrototypeOf(IconHighlighterLine)).apply(this, arguments));
  }

  _createClass(IconHighlighterLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconHighlighterLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M912.26 1343.056l-276.092-275.968 792.314-686.744 166.684 174.783-682.907 787.93zM1760 551.105c0-43.032-16.733-83.41-47.141-113.894l-170.627-170.6c-60.817-60.808-170.947-56.867-223.318-3.861L400.22 1058.642l520.406 520.246 792.152-914.13c30.409-30.324 47.142-70.701 47.222-113.653zM1116.4 1699h643.568v-160.868h-643.569V1699zM160 1618.566h437.868l121.071-121.053-218.893-218.86L160 1618.566z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHighlighterLine;
}(_react.Component);

exports.default = IconHighlighterLine;