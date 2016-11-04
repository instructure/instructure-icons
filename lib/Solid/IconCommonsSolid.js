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

var IconCommonsSolid = function (_Component) {
  _inherits(IconCommonsSolid, _Component);

  function IconCommonsSolid() {
    _classCallCheck(this, IconCommonsSolid);

    return _possibleConstructorReturn(this, (IconCommonsSolid.__proto__ || Object.getPrototypeOf(IconCommonsSolid)).apply(this, arguments));
  }

  _createClass(IconCommonsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCommonsSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M338.72 959.646c0-214.788 177.76-390.843 396-390.843h320.32V310H732.96C373.92 310 80 600.493 80 959.646c0 359.15 293.92 649.647 652.96 649.647h320.32V1350.49H732.96c-218.24 0-394.24-176.055-394.24-390.844zm1501.28 0l-526.24-464.784v309.856h-554.4c-86.24 0-154.88 68.66-154.88 154.928s68.64 154.928 154.88 154.928h554.4v309.857L1840 959.653v-.007z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCommonsSolid;
}(_react.Component);

exports.default = IconCommonsSolid;