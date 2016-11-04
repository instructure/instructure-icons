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

var IconNotGradedLine = function (_Component) {
  _inherits(IconNotGradedLine, _Component);

  function IconNotGradedLine() {
    _classCallCheck(this, IconNotGradedLine);

    return _possibleConstructorReturn(this, (IconNotGradedLine.__proto__ || Object.getPrototypeOf(IconNotGradedLine)).apply(this, arguments));
  }

  _createClass(IconNotGradedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconNotGradedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M615.871 423.458C715.205 359.523 833.351 322.4 960 322.4c351.557 0 637.6 286.043 637.6 637.6 0 126.649-37.123 244.795-101.058 344.129l-1.986-1.985-329.85-329.85 195.125-273.216-162.11-115.724-175.81 246.143-406.04-406.039zM493.16 526.172C387.256 640.054 322.4 792.6 322.4 960c0 351.557 286.043 637.6 637.6 637.6 167.4 0 319.946-64.856 433.828-170.76l-11.984-11.984-311.057-311.057-177.759 248.899-322.307-322.227 140.91-140.91 155.973 155.973 60.38-84.536L493.16 526.172zM960 1757c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconNotGradedLine;
}(_react.Component);

exports.default = IconNotGradedLine;