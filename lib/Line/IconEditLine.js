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

var IconEditLine = function (_Component) {
  _inherits(IconEditLine, _Component);

  function IconEditLine() {
    _classCallCheck(this, IconEditLine);

    return _possibleConstructorReturn(this, (IconEditLine.__proto__ || Object.getPrototypeOf(IconEditLine)).apply(this, arguments));
  }

  _createClass(IconEditLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEditLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1514.299 619.918l-214.24-214.24 214.24-214.238 214.24 214.239-214.24 214.24zm-856.883 856.877l-214.24-214.239 749.762-749.758 214.24 214.24-749.762 749.757zm-413.041 198.8l106.8-290.8 184 184-290.8 106.8zM1835.66 298.559L1621.42 84.4c-59.201-59.199-155.041-59.199-214.241 0L259.655 1231.837c-20.08 20.08-34.08 45.44-40.48 73.04l-177.2 482.318c-6.24 27.28 2.8 53.12 20.24 70.56 17.52 17.44 43.36 26.56 70.64 20.24l482.241-177.2c27.68-6.4 52.96-20.4 73.04-40.48L1835.66 512.799c59.12-59.12 59.12-155.039 0-214.239z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEditLine;
}(_react.Component);

exports.default = IconEditLine;