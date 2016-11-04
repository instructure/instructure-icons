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

var IconRefreshSolid = function (_Component) {
  _inherits(IconRefreshSolid, _Component);

  function IconRefreshSolid() {
    _classCallCheck(this, IconRefreshSolid);

    return _possibleConstructorReturn(this, (IconRefreshSolid.__proto__ || Object.getPrototypeOf(IconRefreshSolid)).apply(this, arguments));
  }

  _createClass(IconRefreshSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconRefreshSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M508.03 508.094C625.875 389.769 786.2 320.006 959.968 320.006c352.974 0 640.026 287.132 640.026 640.026H1760C1760 518.894 1401.186 160 959.968 160c-217.209 0-417.617 87.123-564.983 235.05L239.94 240.002v480.02h480.02l-211.93-211.93zm903.94 903.94c-117.845 118.325-278.171 188.088-451.938 188.088-352.974 0-640.026-287.132-640.026-640.026H160c0 441.138 358.814 800.032 800.032 800.032 217.209 0 417.617-87.123 564.983-235.13l155.046 155.127v-480.02h-480.02l211.93 211.93z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRefreshSolid;
}(_react.Component);

exports.default = IconRefreshSolid;