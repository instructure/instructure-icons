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

var IconOffLine = function (_Component) {
  _inherits(IconOffLine, _Component);

  function IconOffLine() {
    _classCallCheck(this, IconOffLine);

    return _possibleConstructorReturn(this, (IconOffLine.__proto__ || Object.getPrototypeOf(IconOffLine)).apply(this, arguments));
  }

  _createClass(IconOffLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconOffLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1226.188 392.261v196.86c158.615 92.009 265.687 263.275 265.687 459.426 0 293.03-238.322 531.333-531.375 531.333s-531.375-238.303-531.375-531.333c0-196.15 107.072-367.417 265.688-459.427V392.261C435.5 497.643 252 751.886 252 1048.547c0 390.618 317.85 708.444 708.5 708.444s708.5-317.826 708.5-708.444c0-296.661-183.502-550.904-442.813-656.286' }),
          _react2.default.createElement('path', { d: 'M1049.063 871.444H871.937V163h177.125z' })
        )
      );
    }
  }]);

  return IconOffLine;
}(_react.Component);

exports.default = IconOffLine;