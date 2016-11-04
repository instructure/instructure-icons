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

var IconCalendarReservedSolid = function (_Component) {
  _inherits(IconCalendarReservedSolid, _Component);

  function IconCalendarReservedSolid() {
    _classCallCheck(this, IconCalendarReservedSolid);

    return _possibleConstructorReturn(this, (IconCalendarReservedSolid.__proto__ || Object.getPrototypeOf(IconCalendarReservedSolid)).apply(this, arguments));
  }

  _createClass(IconCalendarReservedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCalendarReservedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1594.96 1252.88l-400 453.36c-17.6 19.92-42.4 32-68.88 33.6-2.08.08-4.08.16-6.08.16-24.48 0-48.08-8.88-66.48-25.28l-240-213.28c-41.28-36.72-44.96-99.92-8.32-141.2 36.8-41.36 100.16-44.96 141.2-8.24l164.96 146.64 333.6-378.08c36.56-41.52 99.6-45.44 141.2-8.88 41.36 36.56 45.36 99.76 8.8 141.2m4.96-932.88H1480V120c0-66.24-53.76-120-120.08-120C1293.68 0 1240 53.76 1240 120v200H679.92V120c0-66.24-53.68-120-120-120-66.24 0-120 53.76-120 120v200h-120C231.6 320 160 391.68 160 480v1280c0 88.4 71.6 160 159.92 160h1280c88.4 0 160.08-71.6 160.08-160V480c0-88.32-71.68-160-160.08-160', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCalendarReservedSolid;
}(_react.Component);

exports.default = IconCalendarReservedSolid;