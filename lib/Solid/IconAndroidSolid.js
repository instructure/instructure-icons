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

var IconAndroidSolid = function (_Component) {
  _inherits(IconAndroidSolid, _Component);

  function IconAndroidSolid() {
    _classCallCheck(this, IconAndroidSolid);

    return _possibleConstructorReturn(this, (IconAndroidSolid.__proto__ || Object.getPrototypeOf(IconAndroidSolid)).apply(this, arguments));
  }

  _createClass(IconAndroidSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAndroidSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1528.78 785.776H392.185c-44.814 0-81.185 36.371-81.185 81.186v568.297h162.37V948.147h81.186v487.112c0 44.895 36.37 81.185 81.185 81.185h81.186V1760h162.37v-243.556h162.37V1760h162.371v-243.556h81.186c44.814 0 81.185-36.29 81.185-81.185V948.147h81.185v487.112h162.37V866.962c0-44.896-36.289-81.186-81.184-81.186zM554.637 623.325c0 44.895 36.371 81.185 81.185 81.185h649.483c44.814 0 81.185-36.29 81.185-81.185 0-82.566-25.086-159.286-67.627-223.422l125.025-125.026L1309.092 160l-125.025 125.025c-64.218-42.46-140.938-67.546-223.585-67.546-82.646 0-159.285 25.168-223.503 67.628L611.954 160.08 497.158 274.877l125.025 125.026c-42.46 64.136-67.546 140.856-67.546 223.422z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAndroidSolid;
}(_react.Component);

exports.default = IconAndroidSolid;