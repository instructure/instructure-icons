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

var IconMsPptLine = function (_Component) {
  _inherits(IconMsPptLine, _Component);

  function IconMsPptLine() {
    _classCallCheck(this, IconMsPptLine);

    return _possibleConstructorReturn(this, (IconMsPptLine.__proto__ || Object.getPrototypeOf(IconMsPptLine)).apply(this, arguments));
  }

  _createClass(IconMsPptLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMsPptLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1133 879v74.977h83.578v224.932h83.577V953.977h83.578V879zM631.578 953.977h41.788c23.026 0 41.79 16.795 41.79 37.489 0 20.694-18.764 37.489-41.79 37.489h-41.788v-74.978zm0 149.955h41.788c69.119 0 125.367-50.46 125.367-112.466C798.733 929.46 742.485 879 673.366 879H548v299.91h83.578v-74.978zM1007.155 991.466c0 20.694-18.763 37.489-41.789 37.489h-41.788v-74.978h41.788c23.026 0 41.79 16.795 41.79 37.489zM840 879v299.91h83.578v-74.978h41.788c69.119 0 125.367-50.46 125.367-112.466 0-62.006-56.248-112.466-125.367-112.466H840zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z' }),
          _react2.default.createElement('path', { d: 'M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z' })
        )
      );
    }
  }]);

  return IconMsPptLine;
}(_react.Component);

exports.default = IconMsPptLine;