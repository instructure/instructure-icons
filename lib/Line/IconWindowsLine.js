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

var IconWindowsLine = function (_Component) {
  _inherits(IconWindowsLine, _Component);

  function IconWindowsLine() {
    _classCallCheck(this, IconWindowsLine);

    return _possibleConstructorReturn(this, (IconWindowsLine.__proto__ || Object.getPrototypeOf(IconWindowsLine)).apply(this, arguments));
  }

  _createClass(IconWindowsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconWindowsLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1588.8 776c-100 0-200.8 1.6-301.6 2.4-99.2.8-199.2 1.6-298.4 2.4V386.4c199.2-31.2 401.6-60 600-88.8V776zm-720-492v616.8c277.6 0 561.6-5.6 839.2-5.6V160c-277.6 39.2-561.6 79.2-839.2 124zm0 1307.2c277.6 40 561.6 73.6 839.2 119.2v-736H868.8v616.8zm120-496.8h600v476c-137.6-20.8-276-39.2-410.4-57.6-63.2-8.8-126.4-16.8-189.6-25.6v-392.8zM160 906.4c209.6 0 419.2-5.6 635.2-5.6V295.2c-216 23.2-425.6 51.2-635.2 85.6v525.6zm120-423.2c132.8-20.8 263.2-38.4 395.2-53.6v352l-204 2.4c-64 .8-128 1.6-191.2 2.4V483.2zM160 968.8v526.4c209.6 28.8 419.2 56.8 635.2 84.8V968.8c-216 5.6-425.6 0-635.2 0zm515.2 122.4v352c-132.8-17.6-264.8-35.2-395.2-52.8v-300.8c28.8 0 58.4.8 88 .8 100 .8 203.2 1.6 307.2.8z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconWindowsLine;
}(_react.Component);

exports.default = IconWindowsLine;