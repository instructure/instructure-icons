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

var IconPeerReviewSolid = function (_Component) {
  _inherits(IconPeerReviewSolid, _Component);

  function IconPeerReviewSolid() {
    _classCallCheck(this, IconPeerReviewSolid);

    return _possibleConstructorReturn(this, (IconPeerReviewSolid.__proto__ || Object.getPrototypeOf(IconPeerReviewSolid)).apply(this, arguments));
  }

  _createClass(IconPeerReviewSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPeerReviewSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1642.607 277.398C1568.012 202.399 1467.952 160 1360.025 160c-220.586 0-399.975 179.463-399.975 399.992h133.325c0-147.064 119.593-266.661 266.65-266.661 71.862 0 137.658 29.399 187.388 79.265l-120.726 120.73H1760V160l-117.393 117.398zm-282.582 549.288c-71.796 0-137.591-29.333-187.388-79.265l120.726-120.73H960.05v333.326l117.593-117.598c74.528 74.265 176.322 117.598 282.382 117.598 220.586 0 399.975-179.397 399.975-399.992h-133.325c0 147.064-119.593 266.661-266.65 266.661zM447.82 921c71.906 0 133.942 33.472 172.01 84.159-63.447 51.643-101.514 122.412-101.514 203.702 0 27.734 4.23 52.6 12.689 77.464-26.789 10.52-53.577 18.171-83.185 18.171-117.023 0-211.487-86.071-211.487-191.27 0-105.198 94.464-191.27 211.487-191.27V921zm352.281 130.064c106.1 0 191.748 86.286 191.748 191.748 0 105.461-85.647 191.748-191.748 191.748-106.1 0-191.748-86.287-191.748-191.748 0-105.462 85.648-191.748 191.748-191.748zm-609.007 210.71c55.094 65.344 130.687 105.062 216.531 107.625-34.594 48.687-56.375 107.625-56.375 171.687v84.563H95V1412.96c0-66.625 39.719-124.281 96.094-152.468v1.28zm832.812 128.125c56.375 28.187 96.094 85.844 96.094 152.469v212.687H479.375v-212.687c0-66.625 39.719-124.282 96.094-152.47 57.656 67.907 135.812 107.626 224.218 107.626 88.407 0 166.563-41 224.22-107.625z' })
        )
      );
    }
  }]);

  return IconPeerReviewSolid;
}(_react.Component);

exports.default = IconPeerReviewSolid;