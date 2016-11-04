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

var IconMarkerLine = function (_Component) {
  _inherits(IconMarkerLine, _Component);

  function IconMarkerLine() {
    _classCallCheck(this, IconMarkerLine);

    return _possibleConstructorReturn(this, (IconMarkerLine.__proto__ || Object.getPrototypeOf(IconMarkerLine)).apply(this, arguments));
  }

  _createClass(IconMarkerLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMarkerLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1016.56 1816.55l479.994-480c15.6-15.6 23.44-36.08 23.44-56.56v-1120c0-44.16-35.84-80-80-80H480.006c-44.159 0-79.999 35.84-79.999 80v1120c0 20.48 7.84 40.96 23.44 56.56l479.995 480c31.28 31.28 81.839 31.28 113.118 0zM560 239.998h800v959.99l-400 399.995-400-399.996V239.998z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMarkerLine;
}(_react.Component);

exports.default = IconMarkerLine;