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

var IconPrinterLine = function (_Component) {
  _inherits(IconPrinterLine, _Component);

  function IconPrinterLine() {
    _classCallCheck(this, IconPrinterLine);

    return _possibleConstructorReturn(this, (IconPrinterLine.__proto__ || Object.getPrototypeOf(IconPrinterLine)).apply(this, arguments));
  }

  _createClass(IconPrinterLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPrinterLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1440 1080c0 44.16-35.84 80-80 80s-80-35.84-80-80 35.84-80 80-80 80 35.84 80 80zM560 520H400V40h1120v480h-160V200H560v320zm1040 880h-80v-160H400v160h-80V840c0-44.16 35.92-80 80-80v160h1120V760c44.08 0 80 35.84 80 80v560zM560 1720h800v-320H560v320zm960-1120h-160v160H560V600H400c-132.32 0-240 107.68-240 240v720h240v320h1120v-320h240V840c0-132.32-107.68-240-240-240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPrinterLine;
}(_react.Component);

exports.default = IconPrinterLine;