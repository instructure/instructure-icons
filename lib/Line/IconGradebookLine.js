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

var IconGradebookLine = function (_Component) {
  _inherits(IconGradebookLine, _Component);

  function IconGradebookLine() {
    _classCallCheck(this, IconGradebookLine);

    return _possibleConstructorReturn(this, (IconGradebookLine.__proto__ || Object.getPrototypeOf(IconGradebookLine)).apply(this, arguments));
  }

  _createClass(IconGradebookLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconGradebookLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1680 80H240c-44.16 0-80 35.84-80 80v1600c0 44.24 35.84 80 80 80h1440c44.16 0 80-35.76 80-80V160c0-44.16-35.84-80-80-80zM320 240h160v1440H320V240zm1280 1440H640V240h960v1440zm-540-950h110v110h110V455.04c0-30.4-24.64-55.04-54.96-55.04h-220c-30.4 0-55.04 24.64-55.04 55.04V840h110V730zm110-220v110h-110V510h110zm-257.52 930c75.84 0 137.52-61.68 137.52-137.52 0-31.04-10.72-59.44-28.16-82.48 17.44-23.04 28.16-51.44 28.16-82.48 0-75.84-61.68-137.52-137.52-137.52H720v440h192.48zm0-330c15.12 0 27.52 12.32 27.52 27.52s-12.32 27.52-27.52 27.52H830V1110h82.48zm0 220H830v-55.04h82.48c15.12 0 27.52 12.4 27.52 27.52 0 15.2-12.32 27.52-27.52 27.52zM1190 1165.04v110c0 91.04 74 165.04 165.04 165.04H1520v-110h-165.04c-30.32 0-55.04-24.56-55.04-55.04v-110c0-30.32 24.64-55.04 55.04-55.04H1520v-110h-165.04c-90.96 0-164.96 74.08-164.96 165.04z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconGradebookLine;
}(_react.Component);

exports.default = IconGradebookLine;