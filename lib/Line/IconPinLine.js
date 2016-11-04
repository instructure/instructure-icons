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

var IconPinLine = function (_Component) {
  _inherits(IconPinLine, _Component);

  function IconPinLine() {
    _classCallCheck(this, IconPinLine);

    return _possibleConstructorReturn(this, (IconPinLine.__proto__ || Object.getPrototypeOf(IconPinLine)).apply(this, arguments));
  }

  _createClass(IconPinLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPinLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1086.95 1149.79l-35.355-35.355-35.356 35.355-420.417 420.418c-32.79-63.098-22.823-143.235 29.91-195.968l153.74-153.739 35.355-35.356-35.355-35.355-307.479-307.479-35.355-35.355-35.356 35.355-76.869 76.87-5.142 6.03c-19.465 26.881-57.036 32.892-83.917 13.427-26.077-18.884-32.51-54.806-15.1-81.478l.127-.131a58.555 58.555 0 0 1 4.982-4.982l5.223-5.383a58.621 58.621 0 0 1 7.473-7.473l618.282-617.995c22.928-22.928 60.101-22.928 83.03 0 22.927 22.927 22.927 60.101 0 83.028l-76.87 76.87-35.356 35.355 35.355 35.356 307.478 307.478 35.356 35.355 35.355-35.355 153.74-153.739c52.733-52.734 132.87-62.701 195.967-29.911l-420.418 420.418-35.355 35.355 35.355 35.355 451.993 451.993 36.88 130.754-118.117-45.935-453.784-453.783zm695.37 569.094l-67.646-239.833-3.542-12.557-9.225-9.226-425.863-425.862 425.863-425.862 35.355-35.355-35.355-35.356c-104.083-104.083-274.106-104.083-378.189 0l-118.384 118.384-236.768-236.768 41.514-41.514c61.981-61.98 61.981-162.47 0-224.45-61.98-61.98-162.469-61.98-224.45 0L172.037 764.078a158.839 158.839 0 0 0-15.86 15.743 159.194 159.194 0 0 0-9.274 9.391l-3.638 3.639c-54.189 74.832-38.174 174.924 33.44 226.781 70.432 51.003 168.412 36.349 220.958-32.279l38.71-38.711 235.71 235.18 1.323 1.323-118.384 118.384c-104.083 104.083-104.083 274.107 0 378.189l35.355 35.356 35.355-35.356 425.863-425.862 425.862 425.862 7.434 7.435 9.8 3.81 221.383 86.094 93.47 36.349-27.225-96.522z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPinLine;
}(_react.Component);

exports.default = IconPinLine;