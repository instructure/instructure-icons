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

var IconReply2Line = function (_Component) {
  _inherits(IconReply2Line, _Component);

  function IconReply2Line() {
    _classCallCheck(this, IconReply2Line);

    return _possibleConstructorReturn(this, (IconReply2Line.__proto__ || Object.getPrototypeOf(IconReply2Line)).apply(this, arguments));
  }

  _createClass(IconReply2Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconReply2Line',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M879.94 160c-20.8 0-41.2 8.16-56.48 23.44l-720 720c-31.28 31.28-31.28 81.84 0 113.12l720 720a80.027 80.027 0 0 0 56.56 23.44c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92v-240h800.72c43.2 0 79.28-35.84 79.28-80.16v-799.6c0-43.76-35.44-80.24-79.28-80.24H960.02V240c0-32.32-19.52-61.52-49.36-73.92-10-4.08-20.4-6.08-30.72-6.08m-79.92 273.2V640h880v640h-880v206.88L273.22 960l526.8-526.8', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconReply2Line;
}(_react.Component);

exports.default = IconReply2Line;