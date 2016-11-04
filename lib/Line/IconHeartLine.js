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

var IconHeartLine = function (_Component) {
  _inherits(IconHeartLine, _Component);

  function IconHeartLine() {
    _classCallCheck(this, IconHeartLine);

    return _possibleConstructorReturn(this, (IconHeartLine.__proto__ || Object.getPrototypeOf(IconHeartLine)).apply(this, arguments));
  }

  _createClass(IconHeartLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconHeartLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M640 480c-132.32 0-240 107.68-240 240 0 269.04 371.44 576.56 560 704.48 188.56-127.92 560-435.44 560-704.48 0-132.32-107.68-240-240-240-135.12 0-240 129.04-240 240 0 44.16-35.84 80-80 80s-80-35.84-80-80c0-110.96-104.88-240-240-240m320 1120c-14.72 0-29.44-4.08-42.4-12.16C889.92 1570.56 240 1159.28 240 720c0-220.56 179.44-400 400-400 127.52 0 245.68 66.96 320 166.4 74.32-99.44 192.48-166.4 320-166.4 220.56 0 400 179.44 400 400 0 439.28-649.92 850.56-677.6 867.84A80.132 80.132 0 0 1 960 1600', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHeartLine;
}(_react.Component);

exports.default = IconHeartLine;