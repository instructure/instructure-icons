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

var IconHomeLine = function (_Component) {
  _inherits(IconHomeLine, _Component);

  function IconHomeLine() {
    _classCallCheck(this, IconHomeLine);

    return _possibleConstructorReturn(this, (IconHomeLine.__proto__ || Object.getPrototypeOf(IconHomeLine)).apply(this, arguments));
  }

  _createClass(IconHomeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconHomeLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1439.99 920.006c-44.158 0-79.998 35.84-79.998 79.999l.16 559.99h-160.157V1240c0-44.159-35.839-79.998-79.998-79.998H800.003c-44.16 0-79.998 35.84-79.998 79.998v319.994H560.008v-559.99c0-44.158-35.84-79.998-79.999-79.998H433.13L960 393.136l526.87 526.87h-46.88zm-159.996-479.99h79.998v126.877l-79.998-79.998v-46.88zm456.551 503.43L1519.99 726.89V360.017c0-44.16-35.839-79.999-79.998-79.999h-239.996c-34.399 0-63.118 21.92-74.398 52.4L1016.559 223.46c-31.28-31.28-81.839-31.28-113.118 0L183.455 943.446c-22.88 22.88-29.76 57.279-17.36 87.198 12.4 29.84 41.6 49.36 73.919 49.36H400.01v479.99c0 88.239 71.758 159.997 159.997 159.997h159.997c88.238 0 159.997-71.758 159.997-159.997V1320h159.996v239.995c0 88.239 71.76 159.997 159.997 159.997h159.997c88.239 0 159.997-71.758 159.997-159.997v-479.99h159.997c32.32 0 61.52-19.52 73.919-49.36 12.4-29.92 5.52-64.319-17.36-87.198z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHomeLine;
}(_react.Component);

exports.default = IconHomeLine;