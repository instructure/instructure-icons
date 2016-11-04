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

var IconWindowsSolid = function (_Component) {
  _inherits(IconWindowsSolid, _Component);

  function IconWindowsSolid() {
    _classCallCheck(this, IconWindowsSolid);

    return _possibleConstructorReturn(this, (IconWindowsSolid.__proto__ || Object.getPrototypeOf(IconWindowsSolid)).apply(this, arguments));
  }

  _createClass(IconWindowsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconWindowsSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M869.109 284.508c277.972-45.277 561.615-84.892 839.583-124.507V895.728c-277.968 0-561.611 5.658-839.583 5.658V284.508zM160 380.718c209.897-33.956 419.794-62.255 635.362-84.891v605.558c-215.568 0-425.465 5.661-635.362 5.661V380.72zm0 588.581c209.897 0 419.794 5.659 635.362 0v611.22c-215.568-28.299-425.465-56.597-635.362-84.892V969.299zm709.109 5.66h839.583v735.727c-277.968-45.277-561.611-79.234-839.583-118.85V974.96z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconWindowsSolid;
}(_react.Component);

exports.default = IconWindowsSolid;