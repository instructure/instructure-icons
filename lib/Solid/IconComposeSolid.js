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

var IconComposeSolid = function (_Component) {
  _inherits(IconComposeSolid, _Component);

  function IconComposeSolid() {
    _classCallCheck(this, IconComposeSolid);

    return _possibleConstructorReturn(this, (IconComposeSolid.__proto__ || Object.getPrototypeOf(IconComposeSolid)).apply(this, arguments));
  }

  _createClass(IconComposeSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconComposeSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1129.767 1202.796l-565.604 113.12 113.12-565.684 430.244-430.243H360C271.761 319.99 200 391.83 200 479.99V1600c0 88.16 71.76 160.001 160.001 160.001H1480.01c88.24 0 160-71.84 160-160.001V692.472l-510.243 510.324zM824.645 829.153l226.241 226.242-282.802 56.56 56.56-282.802zm848.526-396.051c62.48-62.48 62.48-163.761 0-226.242-62.48-62.48-163.761-62.48-226.242 0L937.806 715.984l226.241 226.242 509.124-509.124z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconComposeSolid;
}(_react.Component);

exports.default = IconComposeSolid;