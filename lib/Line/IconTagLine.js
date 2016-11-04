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

var IconTagLine = function (_Component) {
  _inherits(IconTagLine, _Component);

  function IconTagLine() {
    _classCallCheck(this, IconTagLine);

    return _possibleConstructorReturn(this, (IconTagLine.__proto__ || Object.getPrototypeOf(IconTagLine)).apply(this, arguments));
  }

  _createClass(IconTagLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTagLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M320 766.88l800 800L1566.88 1120l-800-800H320v446.88zM1120 1760c-20.48 0-40.96-7.84-56.56-23.44l-880-880C168.48 841.6 160 821.2 160 800V240c0-44.16 35.84-80 80-80h560c21.2 0 41.52 8.48 56.56 23.44l880 880c31.28 31.28 31.28 81.84 0 113.12l-560 560c-15.6 15.6-36.08 23.44-56.56 23.44zM720 560.008c0 88.24-71.68 160-160 160-88.48 0-160-71.76-160-160 0-88.4 71.52-160 160-160 88.32 0 160 71.6 160 160', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTagLine;
}(_react.Component);

exports.default = IconTagLine;