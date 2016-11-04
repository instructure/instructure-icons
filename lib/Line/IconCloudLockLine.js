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

var IconCloudLockLine = function (_Component) {
  _inherits(IconCloudLockLine, _Component);

  function IconCloudLockLine() {
    _classCallCheck(this, IconCloudLockLine);

    return _possibleConstructorReturn(this, (IconCloudLockLine.__proto__ || Object.getPrototypeOf(IconCloudLockLine)).apply(this, arguments));
  }

  _createClass(IconCloudLockLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCloudLockLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1040.016 853.009c61.712 0 112 50.232 112 112h-224c0-61.768 50.288-112 112-112m0-112c-123.536 0-224 100.464-224 224-30.968 0-56 25.032-56 56v312c0 30.968 25.032 56 56 56h448c30.968 0 56-25.032 56-56v-312c0-30.968-25.032-56-56-56 0-123.536-100.464-224-224-224m573.817 9.142c.43-7.345.586-14.534.586-21.684 0-257.782-210.312-467.47-468.915-467.47-187.496 0-354.597 112.326-428.478 277.943-11.84-1.212-23.638-1.758-35.476-1.758-199.373 0-363.036 155.614-375.226 351.51C191.38 966.207 120 1096.7 120 1236.96c0 209.96 155.732 390.62 362.177 420.274l802.454.976c284.155 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37m-329.202 712.712H503.705c-107.833-18.637-188.356-114.631-188.356-225.902 0-87.125 51.885-167.258 132.095-204.296l64.739-29.85-10.002-80.522c-.47-3.4-1.172-6.72-1.25-10.12 0-99.08 81.069-179.642 180.619-179.642 21.41 0 43.329 4.259 65.13 12.698l107.754 41.727 23.207-113.186c25.786-126 138.464-217.423 267.863-217.423 150.887 0 273.566 122.054 273.566 272.12 0 14.69-1.602 30.28-5.001 48.916l-11.955 64.505 55.245 35.475c92.243 59.152 147.292 159.014 147.292 267.159 0 175.54-143.542 318.34-320.02 318.34', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCloudLockLine;
}(_react.Component);

exports.default = IconCloudLockLine;