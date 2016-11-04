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

var IconEducatorsLine = function (_Component) {
  _inherits(IconEducatorsLine, _Component);

  function IconEducatorsLine() {
    _classCallCheck(this, IconEducatorsLine);

    return _possibleConstructorReturn(this, (IconEducatorsLine.__proto__ || Object.getPrototypeOf(IconEducatorsLine)).apply(this, arguments));
  }

  _createClass(IconEducatorsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEducatorsLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1147.84 1598c-38.32-30.96-109.6-78-187.84-78-78.32 0-149.52 47.04-187.84 78C589.52 1571.68 400 1294 400 1040c0-171.36 126.8-370.56 290.24-370.56 70.32 0 142.08 36.08 213.2 107.12 31.28 31.28 81.84 31.28 113.12 0 71.12-71.04 142.88-107.12 213.12-107.12 163.52 0 290.32 199.2 290.32 370.56 0 254-189.52 531.68-372.16 558m81.84-1088.56c-63.92 0-127.84 18.24-189.68 51.52V400c0-132.32-107.68-240-240-240H640v160h160c44.08 0 80 36 80 80v160.96c-61.84-33.28-125.76-51.52-189.76-51.52C424.88 509.44 240 789.04 240 1040c0 363.36 277.36 720 560 720 20.96 0 41.36-8.48 56.32-23.2 23.28-22.88 72.32-56.8 103.68-56.8 31.28 0 80.24 33.84 103.6 56.72 14.96 14.96 35.28 23.28 56.4 23.28 282.64 0 560-356.64 560-720 0-250.96-184.96-530.56-450.32-530.56zm210.312-349.408s-160 0-240 80-80 240-80 240 160 0 240-80 80-240 80-240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEducatorsLine;
}(_react.Component);

exports.default = IconEducatorsLine;