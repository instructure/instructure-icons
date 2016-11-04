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

var IconUnlockSolid = function (_Component) {
  _inherits(IconUnlockSolid, _Component);

  function IconUnlockSolid() {
    _classCallCheck(this, IconUnlockSolid);

    return _possibleConstructorReturn(this, (IconUnlockSolid.__proto__ || Object.getPrototypeOf(IconUnlockSolid)).apply(this, arguments));
  }

  _createClass(IconUnlockSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnlockSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1520 845.714h62.008c35.341 0 63.992 28.652 63.992 63.996v786.295c0 35.345-28.655 63.995-64.002 63.995H339.002c-35.347 0-64.002-28.652-64.002-63.995V909.71c0-35.345 28.65-63.996 63.992-63.996H503.5V617.143C503.5 365.714 709.15 160 960.5 160c205.47 0 380.4 137.467 437.416 325h-249.92c-40.997-58.679-109.1-96.429-187.496-96.429-127.96 0-228.5 100.572-228.5 228.572v228.571h308V846h480v-.286zM960.936 1519c113.183 0 204.936-91.782 204.936-205s-91.753-205-204.936-205S756 1200.782 756 1314s91.753 205 204.936 205z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnlockSolid;
}(_react.Component);

exports.default = IconUnlockSolid;