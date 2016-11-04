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

var IconSkypeLine = function (_Component) {
  _inherits(IconSkypeLine, _Component);

  function IconSkypeLine() {
    _classCallCheck(this, IconSkypeLine);

    return _possibleConstructorReturn(this, (IconSkypeLine.__proto__ || Object.getPrototypeOf(IconSkypeLine)).apply(this, arguments));
  }

  _createClass(IconSkypeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconSkypeLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1685.9 1062.49c4.4-32.5 6.9-65.5 6.9-99.1 0-403.6-329-730.85-734.7-730.85-40.3 0-79.85 3.35-118.35 9.65-134.756-87.896-306.836-94.897-448.286-18.239C250.013 300.609 161.93 448.602 162 609.489c0 88.1 26 170 70.6 238.7-6 37.5-9 76-9 115.2 0 403.65 328.75 730.9 734.6 730.9 45.8 0 90.4-4.5 133.75-12.3 135.224 84.161 305.456 88.36 444.665 10.97 139.21-77.39 225.494-224.195 225.385-383.47 0-91.6-28-176.7-76-247h-.1zm-659.1 439.5c-233.5 12.15-342.7-39.5-442.8-133.4-111.75-104.9-66.85-224.5 24.2-230.65 91-6.15 145.65 103.1 194.2 133.5 48.5 30.25 233.1 99.25 330.6-12.2 106.15-121.35-70.6-184.15-200.2-203.15-185-27.4-418.6-127.5-400.4-324.7 18.2-197.15 167.5-298.2 324.5-312.5 200.3-18.15 330.65 30.4 433.75 118.35 119.2 101.65 54.7 215.3-21.25 224.5-75.65 9-160.65-167.25-327.5-169.9-171.9-2.75-288.15 178.9-75.85 230.5 212.5 51.65 439.9 72.8 521.8 267 82 194.2-127.35 400.4-361 412.5l-.05.15z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconSkypeLine;
}(_react.Component);

exports.default = IconSkypeLine;