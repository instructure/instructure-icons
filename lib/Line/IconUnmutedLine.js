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

var IconUnmutedLine = function (_Component) {
  _inherits(IconUnmutedLine, _Component);

  function IconUnmutedLine() {
    _classCallCheck(this, IconUnmutedLine);

    return _possibleConstructorReturn(this, (IconUnmutedLine.__proto__ || Object.getPrototypeOf(IconUnmutedLine)).apply(this, arguments));
  }

  _createClass(IconUnmutedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnmutedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M941.12 252.16c-59.12-24.48-129.2-10.48-174.24 34.72L518.32 640H320c-88.24 0-160 71.84-160 160v320c0 88.24 71.76 160 160 160h198.32l239.6 342.4c33.28 39.68 76.72 57.6 122.08 57.6 21.04 0 41.68-4.08 61.12-12.08 60.08-24.72 98.88-82.88 98.88-147.92V400c0-65.04-38.8-123.04-98.88-147.84zM601.68 1120H320V800h281.68L880 402.16l.08 1115.84-278.4-398zM1200 320v160c220.56 0 400 179.44 400 400s-179.44 400-400 400v160c308.8 0 560-251.2 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.32-107.68-240-240-240v160c44.08 0 80 35.92 80 80 0 44.16-35.92 80-80 80v160c132.32 0 240-107.68 240-240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnmutedLine;
}(_react.Component);

exports.default = IconUnmutedLine;