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

var IconUnpublishSolid = function (_Component) {
  _inherits(IconUnpublishSolid, _Component);

  function IconUnpublishSolid() {
    _classCallCheck(this, IconUnpublishSolid);

    return _possibleConstructorReturn(this, (IconUnpublishSolid.__proto__ || Object.getPrototypeOf(IconUnpublishSolid)).apply(this, arguments));
  }

  _createClass(IconUnpublishSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnpublishSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1309.311 1626.667l-864.39-.81C235.75 1595.556 78 1410.796 78 1196.16c0-148.287 77.402-285.884 200.984-363.887 4.898-205.295 172.404-370.758 377.635-370.758 18.901 0 37.802 1.505 56.664 4.516C783.837 284.705 960.028 160 1158.793 160c263.732 0 478.337 215.754 478.337 480.95 0 12.004-.573 24.317-1.645 36.938C1763.162 778.393 1838 931.042 1838 1095.193c0 293.063-237.18 531.474-528.689 531.474zm-195.023-592.332l276.206-276.206-118.623-118.041-275.624 275.624-275.624-275.624L602 758.129l275.624 276.206L602 1309.959 720.623 1428l275.624-275.624L1271.87 1428l118.623-118.041-276.206-275.624z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnpublishSolid;
}(_react.Component);

exports.default = IconUnpublishSolid;