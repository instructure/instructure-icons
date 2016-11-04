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

var IconAnalyticsSolid = function (_Component) {
  _inherits(IconAnalyticsSolid, _Component);

  function IconAnalyticsSolid() {
    _classCallCheck(this, IconAnalyticsSolid);

    return _possibleConstructorReturn(this, (IconAnalyticsSolid.__proto__ || Object.getPrototypeOf(IconAnalyticsSolid)).apply(this, arguments));
  }

  _createClass(IconAnalyticsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAnalyticsSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M879.983 764.832v-682.8c-182.804 16.48-348.967 89.52-482.33 200.48l482.33 482.32zM1039.985 82v956c0 21.2-8.4 41.52-23.44 56.56l-574.25 574.16C587.657 1774.8 766.3 1838 959.984 1838 1445.993 1838 1840 1444 1840 958c0-459.04-351.526-835.52-800.015-876zM249.763 440.88C143.601 586.08 80 764.24 80 958c0 214.16 76.641 410.32 203.844 562.96L806.894 998l-557.13-557.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAnalyticsSolid;
}(_react.Component);

exports.default = IconAnalyticsSolid;