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

var IconUploadSolid = function (_Component) {
  _inherits(IconUploadSolid, _Component);

  function IconUploadSolid() {
    _classCallCheck(this, IconUploadSolid);

    return _possibleConstructorReturn(this, (IconUploadSolid.__proto__ || Object.getPrototypeOf(IconUploadSolid)).apply(this, arguments));
  }

  _createClass(IconUploadSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUploadSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1302.606 1677.762l-847.063-.754C250.587 1647.548 96 1468.07 96 1259.552c0-144.068 75.806-277.702 196.952-353.508 4.778-199.425 168.96-360.172 370.02-360.172a354.31 354.31 0 0 1 55.565 4.4C787.638 374.147 960.327 253 1155.101 253c258.469 0 468.747 209.566 468.747 467.196 0 11.692-.545 23.634-1.635 35.913 125.128 97.638 198.461 245.897 198.461 405.386 0 284.66-232.404 516.267-518.068 516.267zm4.456-527.225l136.97-137.587L987.465 557l-455.95 455.95 136.97 137.587L890.6 927.807V1567h194.35V927.806l222.113 222.731z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUploadSolid;
}(_react.Component);

exports.default = IconUploadSolid;