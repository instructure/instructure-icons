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

var IconLinkSolid = function (_Component) {
  _inherits(IconLinkSolid, _Component);

  function IconLinkSolid() {
    _classCallCheck(this, IconLinkSolid);

    return _possibleConstructorReturn(this, (IconLinkSolid.__proto__ || Object.getPrototypeOf(IconLinkSolid)).apply(this, arguments));
  }

  _createClass(IconLinkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconLinkSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M762.573 987.466l-565.587 565.8 169.652 169.717 565.587-565.801-169.652-169.716zm395.774-56.572l565.747-565.72-169.652-169.797-565.747 565.8 169.652 169.717zm565.827-282.86l-28.396-28.327-169.652 169.717 28.316 28.326c15.517 15.523 15.517 40.888 0 56.492l-678.688 678.944c-10.158 10.243-22.076 11.763-28.315 11.763-6.24 0-18.077-1.52-28.316-11.683l-28.315-28.326-169.652 169.796 28.316 28.247c52.87 52.89 123.18 82.017 197.967 82.017s145.096-29.126 197.967-82.017l678.768-678.945c109.101-109.303 109.101-286.861 0-396.005zM225.302 1298.731l-28.316-28.246C144.116 1217.515 115 1147.18 115 1072.364c0-74.816 29.115-145.231 81.986-198.042l678.688-679.025c105.743-105.703 290.192-105.783 395.934.08l28.396 28.246-169.732 169.796-28.235-28.246c-10.159-10.242-22.077-11.762-28.316-11.762-6.159 0-18.077 1.52-28.235 11.682l-678.768 679.025c-10.238 10.162-11.758 22.085-11.758 28.246 0 6.241 1.52 18.164 11.758 28.406l28.236 28.166-169.652 169.796z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconLinkSolid;
}(_react.Component);

exports.default = IconLinkSolid;