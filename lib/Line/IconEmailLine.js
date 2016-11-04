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

var IconEmailLine = function (_Component) {
  _inherits(IconEmailLine, _Component);

  function IconEmailLine() {
    _classCallCheck(this, IconEmailLine);

    return _possibleConstructorReturn(this, (IconEmailLine.__proto__ || Object.getPrototypeOf(IconEmailLine)).apply(this, arguments));
  }

  _createClass(IconEmailLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEmailLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M320 1320V694.32l597.6 373.52A80.132 80.132 0 0 0 960 1080c14.72 0 29.44-4.08 42.4-12.16L1600 694.32l.08 625.68H320zm1129.04-720L960 905.68 470.96 600h978.08zM1600 440H320c-88.24 0-160 71.76-160 160v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160V600c0-88.24-71.76-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEmailLine;
}(_react.Component);

exports.default = IconEmailLine;