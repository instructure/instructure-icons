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

var IconUnpublishedLine = function (_Component) {
  _inherits(IconUnpublishedLine, _Component);

  function IconUnpublishedLine() {
    _classCallCheck(this, IconUnpublishedLine);

    return _possibleConstructorReturn(this, (IconUnpublishedLine.__proto__ || Object.getPrototypeOf(IconUnpublishedLine)).apply(this, arguments));
  }

  _createClass(IconUnpublishedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnpublishedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1324.615 1441.852H543.69c-107.833-18.636-188.356-114.63-188.356-225.9 0-87.127 51.885-167.259 132.095-204.297l64.739-29.849-10.002-80.523c-.469-3.399-1.172-6.72-1.25-10.119 0-99.08 81.07-179.643 180.62-179.643 21.41 0 43.328 4.259 65.128 12.698l107.755 41.726 23.207-113.185c25.786-126 138.464-217.423 267.863-217.423 150.887 0 273.566 122.054 273.566 272.121 0 14.69-1.602 30.28-5 48.915l-11.956 64.505 55.245 35.475c92.243 59.152 147.293 159.014 147.293 267.159 0 175.54-143.543 318.34-320.02 318.34m329.2-712.71c.43-7.345.587-14.534.587-21.684 0-257.782-210.313-467.47-468.915-467.47-187.496 0-354.598 112.326-428.479 277.943-11.838-1.212-23.637-1.759-35.475-1.759-199.373 0-363.036 155.615-375.226 351.511-114.943 77.515-186.324 208.008-186.324 348.268 0 209.961 155.732 390.62 362.177 420.274l802.454.976c284.154 0 515.37-230.433 515.37-513.689 0-153.935-68.568-297.282-186.168-394.37', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnpublishedLine;
}(_react.Component);

exports.default = IconUnpublishedLine;