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

var IconRssSolid = function (_Component) {
  _inherits(IconRssSolid, _Component);

  function IconRssSolid() {
    _classCallCheck(this, IconRssSolid);

    return _possibleConstructorReturn(this, (IconRssSolid.__proto__ || Object.getPrototypeOf(IconRssSolid)).apply(this, arguments));
  }

  _createClass(IconRssSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconRssSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M280 200v159.992c705.76 0 1280 574.21 1280 1279.932h160C1720 845.966 1074.08 200 280 200zm0 479.975v159.991c441.12 0 800 358.701 800 799.958h160c0-529.332-430.64-959.95-960-959.95zM440 1720c132.548 0 240-107.446 240-239.987 0-132.542-107.452-239.988-240-239.988s-240 107.446-240 239.988C200 1612.554 307.452 1720 440 1720z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRssSolid;
}(_react.Component);

exports.default = IconRssSolid;