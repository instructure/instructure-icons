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

var IconCloudLockSolid = function (_Component) {
  _inherits(IconCloudLockSolid, _Component);

  function IconCloudLockSolid() {
    _classCallCheck(this, IconCloudLockSolid);

    return _possibleConstructorReturn(this, (IconCloudLockSolid.__proto__ || Object.getPrototypeOf(IconCloudLockSolid)).apply(this, arguments));
  }

  _createClass(IconCloudLockSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCloudLockSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1613.833 750.153c.43-7.345.586-14.533.586-21.683 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C191.38 966.21 120 1096.703 120 1236.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37zM1266 922c0-123.536-100.464-224-224-224S818 798.464 818 922c-30.968 0-56 25.032-56 56v392c0 30.968 25.032 56 56 56h448c30.968 0 56-25.032 56-56V978c0-30.968-25.032-56-56-56zm-224-112c61.712 0 112 50.232 112 112H930c0-61.768 50.288-112 112-112z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCloudLockSolid;
}(_react.Component);

exports.default = IconCloudLockSolid;