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

var IconCheckLine = function (_Component) {
  _inherits(IconCheckLine, _Component);

  function IconCheckLine() {
    _classCallCheck(this, IconCheckLine);

    return _possibleConstructorReturn(this, (IconCheckLine.__proto__ || Object.getPrototypeOf(IconCheckLine)).apply(this, arguments));
  }

  _createClass(IconCheckLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCheckLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M799.967 1680c-42.24 0-83.039-16.72-113.118-46.88l-479.99-479.993c-62.479-62.48-62.479-163.758 0-226.237 62.479-62.48 163.757-62.48 226.235 0l346.473 346.395 690.146-966.227c51.359-72 151.437-88.56 223.195-37.28 71.999 51.44 88.638 151.358 37.28 223.197L930.203 1612.961c-27.36 38.32-70.159 62.56-117.038 66.479-4.48.4-8.8.56-13.2.56', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCheckLine;
}(_react.Component);

exports.default = IconCheckLine;