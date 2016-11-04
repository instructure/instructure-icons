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

var IconCalendarDaysLine = function (_Component) {
  _inherits(IconCalendarDaysLine, _Component);

  function IconCalendarDaysLine() {
    _classCallCheck(this, IconCalendarDaysLine);

    return _possibleConstructorReturn(this, (IconCalendarDaysLine.__proto__ || Object.getPrototypeOf(IconCalendarDaysLine)).apply(this, arguments));
  }

  _createClass(IconCalendarDaysLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCalendarDaysLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M320 1760h1280V800H320v960zM1732.64 390.56a158.584 158.584 0 0 0-43.2-43.2C1663.92 330.08 1633.12 320 1600 320h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-33.12 0-63.92 10.08-89.44 27.36a158.584 158.584 0 0 0-43.2 43.2C170.08 416.08 160 446.88 160 480v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V480c0-33.12-10.08-63.92-27.36-89.44z' }),
          _react2.default.createElement('path', { d: 'M825.856 1171.992h184.8l-196.08 340c-1.52 2.16-.08 6.32 4.48 12.4 4.56 6.16 10.96 12.4 19.12 18.8 8.32 6.4 18.32 12 30 16.8 11.84 4.8 24.08 7.2 36.88 7.2 13.84 0 27.84-4.16 42-12.4 14.08-8.24 27.28-22.8 39.6-43.6l144-255.2c4.8-8 10.16-16.8 16-26.4 5.84-9.6 11.28-19.68 16.4-30.4 5.04-10.64 9.44-21.6 13.2-32.8 3.76-11.2 5.6-22.16 5.6-32.8v-8.8c0-10.64-1.2-20.96-3.68-30.8-2.32-9.84-7.28-18.56-14.72-26-7.52-7.44-18.32-13.6-32.48-18.4-14.08-4.8-33.2-7.2-57.12-7.2h-248c-22.96 0-40.4 4.32-52.4 12.8-12.08 8.56-18 24-18 46.4v8.8c0 22.96 5.92 38.96 18 48 12 9.04 29.44 13.6 52.4 13.6' })
        )
      );
    }
  }]);

  return IconCalendarDaysLine;
}(_react.Component);

exports.default = IconCalendarDaysLine;