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

var IconBookmarkLine = function (_Component) {
  _inherits(IconBookmarkLine, _Component);

  function IconBookmarkLine() {
    _classCallCheck(this, IconBookmarkLine);

    return _possibleConstructorReturn(this, (IconBookmarkLine.__proto__ || Object.getPrototypeOf(IconBookmarkLine)).apply(this, arguments));
  }

  _createClass(IconBookmarkLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconBookmarkLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1520 720h-320V480c0-88.24 71.76-160 160-160s160 71.76 160 160v240zm-480-240v1006.88l-263.44-263.44c-15.6-15.6-36.08-23.44-56.56-23.44-20.48 0-40.96 7.84-56.56 23.44L400 1486.88V480c0-88.24 71.76-160 160-160h522.96C1055.6 367.12 1040 421.76 1040 480zm320-320H560c-176.48 0-320 143.52-320 320v1200c0 32.32 19.52 61.52 49.36 73.92 29.92 12.32 64.32 5.44 87.2-17.36L720 1393.12l343.44 343.44A80.027 80.027 0 0 0 1120 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92V880h400c44.16 0 80-35.84 80-80V480c0-176.48-143.52-320-320-320z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconBookmarkLine;
}(_react.Component);

exports.default = IconBookmarkLine;