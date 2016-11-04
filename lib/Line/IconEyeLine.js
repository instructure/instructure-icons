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

var IconEyeLine = function (_Component) {
  _inherits(IconEyeLine, _Component);

  function IconEyeLine() {
    _classCallCheck(this, IconEyeLine);

    return _possibleConstructorReturn(this, (IconEyeLine.__proto__ || Object.getPrototypeOf(IconEyeLine)).apply(this, arguments));
  }

  _createClass(IconEyeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEyeLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 1322.143c-301.773 0-546.96-259.005-632.6-362.215 85.423-103.284 329.74-362.07 632.6-362.07 301.773 0 546.96 259.004 632.6 362.214-85.423 103.284-329.74 362.07-632.6 362.07m783.74-403.86C1730.41 899.304 1410.813 453 960 453S189.59 899.305 176.26 918.281a72.262 72.262 0 0 0 0 83.438C189.59 1020.695 509.187 1467 960 1467s770.41-446.305 783.74-465.281a72.262 72.262 0 0 0 0-83.438' }),
          _react2.default.createElement('path', { d: 'M960 670.286c-159.835 0-289.818 129.937-289.818 289.714S800.165 1249.714 960 1249.714c159.835 0 289.818-129.937 289.818-289.714S1119.835 670.286 960 670.286' })
        )
      );
    }
  }]);

  return IconEyeLine;
}(_react.Component);

exports.default = IconEyeLine;