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

var IconEmailSolid = function (_Component) {
  _inherits(IconEmailSolid, _Component);

  function IconEmailSolid() {
    _classCallCheck(this, IconEmailSolid);

    return _possibleConstructorReturn(this, (IconEmailSolid.__proto__ || Object.getPrototypeOf(IconEmailSolid)).apply(this, arguments));
  }

  _createClass(IconEmailSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEmailSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M959.976 905.84l717.2-445.12c-22.96-12.8-49.04-20.72-77.2-20.72h-1280c-28.16 0-54.24 7.92-77.2 20.72l717.2 445.12zm42.184 162.112c-12.96 8-27.52 12-42.16 12-14.64 0-29.28-4-42.24-12l-757.52-470.16c0 .8-.24 1.52-.24 2.16v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160v-720c0-.64-.24-1.36-.24-2.16l-757.6 470.16z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEmailSolid;
}(_react.Component);

exports.default = IconEmailSolid;