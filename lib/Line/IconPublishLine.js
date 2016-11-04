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

var IconPublishLine = function (_Component) {
  _inherits(IconPublishLine, _Component);

  function IconPublishLine() {
    _classCallCheck(this, IconPublishLine);

    return _possibleConstructorReturn(this, (IconPublishLine.__proto__ || Object.getPrototypeOf(IconPublishLine)).apply(this, arguments));
  }

  _createClass(IconPublishLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPublishLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1263.44 765.368l113.12 113.104L920 1334.966 623.44 1038.45l113.12-113.104L920 1108.759l343.44-343.391zm21.2 698.3H503.68c-107.84-18.637-188.32-114.624-188.32-225.888 0-87.107 51.84-167.176 132.08-204.21l64.72-29.916-10-80.469c-.48-3.44-1.2-6.719-1.28-10.158 0-99.026 81.12-179.574 180.64-179.574 21.44 0 43.36 4.239 65.12 12.718l107.76 41.674 23.2-113.184c25.84-125.982 138.48-217.329 267.92-217.329 150.88 0 273.52 121.983 273.52 272.041 0 14.718-1.6 30.316-4.96 48.953l-12 64.47 55.28 35.436c92.24 59.191 147.28 159.017 147.28 267.162 0 175.494-143.52 318.274-320 318.274zm329.2-712.618c.4-7.359.56-14.478.56-21.677C1614.4 471.65 1404.08 262 1145.52 262 958 262 790.88 374.304 717.04 539.88c-11.84-1.2-23.68-1.76-35.52-1.76-199.36 0-363.04 155.578-375.2 351.47C191.36 967.1 120 1097.56 120 1237.78c0 209.97 155.68 390.584 362.16 420.26l802.48.96c284.16 0 515.36-230.367 515.36-513.606 0-153.898-68.56-297.238-186.16-394.344z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPublishLine;
}(_react.Component);

exports.default = IconPublishLine;