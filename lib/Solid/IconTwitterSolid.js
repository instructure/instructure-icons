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

var IconTwitterSolid = function (_Component) {
  _inherits(IconTwitterSolid, _Component);

  function IconTwitterSolid() {
    _classCallCheck(this, IconTwitterSolid);

    return _possibleConstructorReturn(this, (IconTwitterSolid.__proto__ || Object.getPrototypeOf(IconTwitterSolid)).apply(this, arguments));
  }

  _createClass(IconTwitterSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTwitterSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1786.72 484.054a700.8 700.8 0 0 1-201.067 55.146 351.573 351.573 0 0 0 153.92-193.706 701.333 701.333 0 0 1-222.4 84.96A349.707 349.707 0 0 0 1261.76 320a350.133 350.133 0 0 0-350.187 350.134c0 27.466 3.094 54.186 9.067 79.786C639.05 735.814 376.693 602.803 198.88 384a348.587 348.587 0 0 0-47.467 176c-.082 117.108 58.407 226.498 155.84 291.467a348.8 348.8 0 0 1-158.613-43.733v4.373c.012 166.664 117.448 310.243 280.8 343.307a350.827 350.827 0 0 1-158.08 5.973c45.816 142.665 177.278 240.41 327.093 243.2a702.507 702.507 0 0 1-434.933 149.867 708.07 708.07 0 0 1-83.52-4.96 990.933 990.933 0 0 0 536.693 157.333c644.054 0 996.267-533.547 996.267-996.267 0-15.2-.373-30.293-1.067-45.333a711.84 711.84 0 0 0 174.827-181.12v-.053z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTwitterSolid;
}(_react.Component);

exports.default = IconTwitterSolid;