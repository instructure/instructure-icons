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

var IconDiscussionLine = function (_Component) {
  _inherits(IconDiscussionLine, _Component);

  function IconDiscussionLine() {
    _classCallCheck(this, IconDiscussionLine);

    return _possibleConstructorReturn(this, (IconDiscussionLine.__proto__ || Object.getPrototypeOf(IconDiscussionLine)).apply(this, arguments));
  }

  _createClass(IconDiscussionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconDiscussionLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M383.453 1519.988h616.554c352.877 0 639.994-251.197 639.994-559.995 0-308.797-287.117-559.994-639.994-559.994-352.876 0-639.994 251.197-639.994 559.994 0 122.96 45.44 239.998 131.359 338.557 26.8 30.88 26.16 77.04-1.68 107.04l-106.239 114.398zm616.554 159.999H200.015c-31.84 0-60.64-18.88-73.36-48-12.72-29.2-6.88-63.12 14.72-86.399l184.479-198.718c-82.56-115.52-125.84-248.078-125.84-386.877C200.015 563.037 558.892 240 1000.008 240 1441.123 240 1800 563.037 1800 959.993c0 396.957-358.877 719.994-799.993 719.994z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconDiscussionLine;
}(_react.Component);

exports.default = IconDiscussionLine;