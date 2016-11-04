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

var IconUnpublishLine = function (_Component) {
  _inherits(IconUnpublishLine, _Component);

  function IconUnpublishLine() {
    _classCallCheck(this, IconUnpublishLine);

    return _possibleConstructorReturn(this, (IconUnpublishLine.__proto__ || Object.getPrototypeOf(IconUnpublishLine)).apply(this, arguments));
  }

  _createClass(IconUnpublishLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnpublishLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1311.307 1626.667l-864.39-.81c-209.171-30.3-366.92-215.06-366.92-429.696 0-148.287 77.4-285.884 200.984-363.887 4.897-205.295 172.403-370.758 377.634-370.758 18.901 0 37.802 1.505 56.665 4.516C785.833 284.705 962.024 160 1160.79 160c263.731 0 478.337 215.754 478.337 480.95 0 12.004-.574 24.317-1.646 36.938 127.677 100.505 202.515 253.154 202.515 417.305 0 293.063-237.179 531.474-528.689 531.474zm-847.67-154.386h847.67c207.107 0 375.646-169.169 375.646-377.088 0-128.14-64.661-246.439-172.901-316.491l-43.235-27.983 9.297-50.986c4.056-22.193 5.97-40.835 5.97-58.782 0-180.053-145.928-326.565-325.295-326.565-153.885 0-287.875 109.73-318.56 260.912l-18.174 89.506-84.441-33c-26.974-10.576-54.216-15.902-80.999-15.902-123.927 0-224.706 101.238-224.706 225.635 0 5.288.957 10.382 1.645 15.477l8.112 65.768-50.734 23.583c-97.106 45.158-159.892 143.231-159.892 249.796 0 136.632 98.79 254.428 230.598 276.12zm824.477-623.843l-87.12-87.846-202.745 204.562-202.744-204.562-87.12 87.846 202.783 204.561-202.783 204.562 87.12 87.807 202.744-204.523 202.745 204.523 87.12-87.807-202.783-204.562 202.783-204.561z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnpublishLine;
}(_react.Component);

exports.default = IconUnpublishLine;