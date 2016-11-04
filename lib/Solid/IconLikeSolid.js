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

var IconLikeSolid = function (_Component) {
  _inherits(IconLikeSolid, _Component);

  function IconLikeSolid() {
    _classCallCheck(this, IconLikeSolid);

    return _possibleConstructorReturn(this, (IconLikeSolid.__proto__ || Object.getPrototypeOf(IconLikeSolid)).apply(this, arguments));
  }

  _createClass(IconLikeSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconLikeSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M538.07 893.534c0-179.837 334.297-249.516 402.149-301.675 67.931-52.239 245.482-150.877 261.165-359.753C1217.066 23.229 1530.4-5.81 1540.882 371.383c0 232.076-47.048 284.235-47.048 284.235 167.149 0 283.73 98.639 288.93 197.277 5.2 98.638-74.813 771.667-315.014 812.306-240.282 40.64-913.998 5.84-929.68-208.876v-562.79zm-320.056 786.45H378.04c44.168 0 80.014-35.839 80.014-79.998V800c0-44.16-35.846-79.999-80.014-79.999H218.014C173.846 720.001 138 755.841 138 800v799.986c0 44.16 35.846 79.999 80.014 79.999z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconLikeSolid;
}(_react.Component);

exports.default = IconLikeSolid;