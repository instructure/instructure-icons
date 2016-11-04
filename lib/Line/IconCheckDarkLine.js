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

var IconCheckDarkLine = function (_Component) {
  _inherits(IconCheckDarkLine, _Component);

  function IconCheckDarkLine() {
    _classCallCheck(this, IconCheckDarkLine);

    return _possibleConstructorReturn(this, (IconCheckDarkLine.__proto__ || Object.getPrototypeOf(IconCheckDarkLine)).apply(this, arguments));
  }

  _createClass(IconCheckDarkLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCheckDarkLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M937.152 1320c-31.68 0-62.24-12.56-84.88-35.12l-377.12-377.12c-46.88-46.88-46.88-122.8 0-169.68 46.8-46.88 122.8-46.88 169.68 0l277.04 276.88 546.16-764.72c38.56-53.84 113.44-66.32 167.44-27.92 53.92 38.56 66.4 113.44 27.92 167.44l-628.56 880c-20.56 28.64-52.64 46.96-87.76 49.84-3.28.24-6.64.4-9.92.4zM1600 880v720H320V320h891.44V160H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V880h-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCheckDarkLine;
}(_react.Component);

exports.default = IconCheckDarkLine;