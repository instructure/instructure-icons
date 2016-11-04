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

var IconGradebookSolid = function (_Component) {
  _inherits(IconGradebookSolid, _Component);

  function IconGradebookSolid() {
    _classCallCheck(this, IconGradebookSolid);

    return _possibleConstructorReturn(this, (IconGradebookSolid.__proto__ || Object.getPrototypeOf(IconGradebookSolid)).apply(this, arguments));
  }

  _createClass(IconGradebookSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconGradebookSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M240 240v1440c0 44.24 35.84 80 80 80h240V160H320c-44.16 0-80 35.84-80 80zm1360-80H640v1600h960c44.16 0 80-35.76 80-80V240c0-44.16-35.84-80-80-80zm-470 1142.48c0 75.84-61.68 137.52-137.52 137.52H800v-440h192.48c75.84 0 137.52 61.68 137.52 137.52 0 31.12-10.72 59.44-28.16 82.48 17.44 23.04 28.16 51.44 28.16 82.48zM1520 1110h-164.96c-30.32 0-55.04 24.72-55.04 55.04v110c0 30.32 24.64 55.04 55.04 55.04H1520V1440h-164.96c-90.96 0-164.96-74-164.96-164.96v-110c0-90.96 74-164.96 164.96-164.96H1520V1110zm-527.52 165.04H910v55.04h82.48c15.12 0 27.52-12.32 27.52-27.52s-12.32-27.52-27.52-27.52zM1060 730v110H950V455.04c0-30.4 24.64-55.04 55.04-55.04h220c30.32 0 54.96 24.64 54.96 55.04V840h-110V730h-110zm0-220h110v110h-110V510zm-67.52 600H910v55.04h82.48c15.12 0 27.52-12.32 27.52-27.52s-12.32-27.52-27.52-27.52z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconGradebookSolid;
}(_react.Component);

exports.default = IconGradebookSolid;