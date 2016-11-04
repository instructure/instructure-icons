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

var IconPaintSolid = function (_Component) {
  _inherits(IconPaintSolid, _Component);

  function IconPaintSolid() {
    _classCallCheck(this, IconPaintSolid);

    return _possibleConstructorReturn(this, (IconPaintSolid.__proto__ || Object.getPrototypeOf(IconPaintSolid)).apply(this, arguments));
  }

  _createClass(IconPaintSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPaintSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1690.164 250.043c-93.116-93.39-243.911-93.39-337.026 0L657.634 946.93c88.348-5.892 178.524 23.646 246.056 91.24 67.453 67.675 96.929 158.12 90.97 246.654l695.504-697.046C1734.814 542.954 1760 482.285 1760 418.91a239.002 239.002 0 0 0-69.836-168.867zM377.613 1150.789c-221.109 221.574 30.27 335.346-217.613 583.83 0 0 410.2 52.309 631.229-169.265 114.328-114.49 114.328-300.076 0-414.565-114.17-114.41-299.447-114.41-413.616 0z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPaintSolid;
}(_react.Component);

exports.default = IconPaintSolid;