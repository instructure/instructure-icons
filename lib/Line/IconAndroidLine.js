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

var IconAndroidLine = function (_Component) {
  _inherits(IconAndroidLine, _Component);

  function IconAndroidLine() {
    _classCallCheck(this, IconAndroidLine);

    return _possibleConstructorReturn(this, (IconAndroidLine.__proto__ || Object.getPrototypeOf(IconAndroidLine)).apply(this, arguments));
  }

  _createClass(IconAndroidLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAndroidLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1203.084 1354.053H715.947V948.106h487.137v405.947zm324.757-568.326H391.19c-44.816 0-81.189 36.373-81.189 81.19v568.325h162.379V948.106h81.19v487.136c0 44.817 36.372 81.19 81.189 81.19h81.19V1760h162.378v-243.568h162.379V1760h162.379v-243.568h81.19c44.816 0 81.189-36.373 81.189-81.19V948.106h81.189v487.136h162.379V866.916c0-44.816-36.373-81.19-81.19-81.19zM553.568 623.348c0 44.817 36.373 81.19 81.19 81.19h649.515c44.817 0 81.19-36.373 81.19-81.19 0-82.65-25.088-159.294-67.631-223.514l125.031-125.032L1308.062 160 1183.03 285.032c-64.22-42.462-140.864-67.631-223.515-67.631-82.65 0-159.293 25.169-223.514 67.63L610.969 160 496.167 274.802 621.2 399.834c-42.543 64.22-67.63 140.863-67.63 223.514zM959.515 379.78c105.871 0 196.154 67.874 229.685 162.379H729.83c33.532-94.505 123.814-162.38 229.685-162.38', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAndroidLine;
}(_react.Component);

exports.default = IconAndroidLine;