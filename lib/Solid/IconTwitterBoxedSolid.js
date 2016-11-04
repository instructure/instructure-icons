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

var IconTwitterBoxedSolid = function (_Component) {
  _inherits(IconTwitterBoxedSolid, _Component);

  function IconTwitterBoxedSolid() {
    _classCallCheck(this, IconTwitterBoxedSolid);

    return _possibleConstructorReturn(this, (IconTwitterBoxedSolid.__proto__ || Object.getPrototypeOf(IconTwitterBoxedSolid)).apply(this, arguments));
  }

  _createClass(IconTwitterBoxedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTwitterBoxedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M80 182.995C80 127.77 124.774 83 180.007 83h1559.986C1795.225 83 1840 127.771 1840 182.995v1483.488c0 55.226-44.774 99.995-100.007 99.995H180.007c-55.232 0-100.007-44.771-100.007-99.995V182.995zm1490.75 363.656a502.195 502.195 0 0 1-143.607 39.22c52.197-31.14 91.262-80.096 109.933-137.764a502.208 502.208 0 0 1-158.844 60.424c-47.276-50.186-113.32-78.625-182.423-78.554-66.33-.01-129.947 26.22-176.854 72.92-46.906 46.7-73.258 110.044-73.258 176.093 0 19.535 2.209 38.538 6.475 56.745-201.12-10.033-388.501-104.63-515.5-260.242a247.108 247.108 0 0 0-33.902 125.17c-.058 83.288 41.715 161.086 111.305 207.291a249.933 249.933 0 0 1-113.286-31.103v3.11c.008 118.532 83.885 220.644 200.555 244.16a251.605 251.605 0 0 1-112.905 4.248c32.723 101.463 126.617 170.978 233.619 172.963-88.6 69.237-198.015 106.78-310.641 106.584a507.848 507.848 0 0 1-59.652-3.527c114.333 73.174 247.408 112.02 383.32 111.895 460 0 711.56-379.457 711.56-708.542 0-10.81-.266-21.545-.761-32.241a507.23 507.23 0 0 0 124.866-128.812v-.038z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTwitterBoxedSolid;
}(_react.Component);

exports.default = IconTwitterBoxedSolid;