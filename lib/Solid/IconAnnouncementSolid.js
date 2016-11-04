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

var IconAnnouncementSolid = function (_Component) {
  _inherits(IconAnnouncementSolid, _Component);

  function IconAnnouncementSolid() {
    _classCallCheck(this, IconAnnouncementSolid);

    return _possibleConstructorReturn(this, (IconAnnouncementSolid.__proto__ || Object.getPrototypeOf(IconAnnouncementSolid)).apply(this, arguments));
  }

  _createClass(IconAnnouncementSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAnnouncementSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1648.996 160h-91.605L682.386 523.602c-12.241 4.88-31.922 7.36-46.643 7.36H271.004c-44.162 0-80.004 35.84-80.004 80v328.883c0 44.24 35.842 80 80.004 80h143.608l253.053 668.244c27.041 61.44 108.085 88.48 169.529 61.44 61.443-27.04 88.484-108.08 61.443-169.52l-184.25-437.283c7.36-34.4 31.922-54.08 68.724-54.08v-7.36l774.28 307.121h91.605c44.162 0 80.004-35.84 80.004-80V240c0-44.16-35.842-80-80.004-80', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAnnouncementSolid;
}(_react.Component);

exports.default = IconAnnouncementSolid;