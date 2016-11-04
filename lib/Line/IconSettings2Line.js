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

var IconSettings2Line = function (_Component) {
  _inherits(IconSettings2Line, _Component);

  function IconSettings2Line() {
    _classCallCheck(this, IconSettings2Line);

    return _possibleConstructorReturn(this, (IconSettings2Line.__proto__ || Object.getPrototypeOf(IconSettings2Line)).apply(this, arguments));
  }

  _createClass(IconSettings2Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconSettings2Line',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M960 1120c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm160-960H800l-93.76 187.44-198.8-66.24L281.2 507.44l66.24 198.8L160 800v320l187.44 93.76-66.24 198.8 226.24 226.24 198.8-66.24L800 1760h320l93.76-187.44 198.8 66.24 226.24-226.24-66.24-198.8L1760 1120V800l-187.44-93.76 66.24-198.8-226.24-226.24-198.8 66.24L1120 160zM960 1280c176.48 0 320-143.52 320-320s-143.52-320-320-320-320 143.52-320 320 143.52 320 320 320zm61.12-960l49.52 99.04 62 124.08 131.68-43.84 105.04-35.04 86.4 86.4-35.04 105.04-43.84 131.68 124.08 62 99.04 49.52v122.24l-99.04 49.52-124.08 62 43.84 131.68 35.04 105.04-86.4 86.4-105.04-35.04-131.68-43.84-62 124.08-49.52 99.04H898.88l-49.52-99.04-62-124.08-131.68 43.84-105.04 35.04-86.4-86.4 35.04-105.04 43.84-131.68-124.08-62-99.04-49.52V898.88l99.04-49.52 124.08-62-43.84-131.68-35.04-105.04 86.4-86.4 105.04 35.04 131.68 43.84 62-124.08L898.88 320h122.24z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconSettings2Line;
}(_react.Component);

exports.default = IconSettings2Line;