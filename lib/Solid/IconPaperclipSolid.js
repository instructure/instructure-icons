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

var IconPaperclipSolid = function (_Component) {
  _inherits(IconPaperclipSolid, _Component);

  function IconPaperclipSolid() {
    _classCallCheck(this, IconPaperclipSolid);

    return _possibleConstructorReturn(this, (IconPaperclipSolid.__proto__ || Object.getPrototypeOf(IconPaperclipSolid)).apply(this, arguments));
  }

  _createClass(IconPaperclipSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPaperclipSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M846.615 1757C626.666 1757 467 1581.432 467 1339.524v-645.19C467 391.396 679.13 163 960.5 163S1454 391.397 1454 694.333v531.334h-151.846V694.333c0-219.896-143.723-379.523-341.654-379.523-197.931 0-341.654 159.627-341.654 379.523v645.19c0 132.303 70.457 265.667 227.77 265.667 157.312 0 227.769-133.364 227.769-265.666V770.238c0-45.695-11.085-151.81-113.885-151.81-102.8 0-113.885 106.115-113.885 151.81v531.333H694.77V770.238c0-181.64 106.824-303.619 265.731-303.619 158.907 0 265.73 121.979 265.73 303.62v569.285c0 241.908-159.665 417.476-379.615 417.476', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPaperclipSolid;
}(_react.Component);

exports.default = IconPaperclipSolid;