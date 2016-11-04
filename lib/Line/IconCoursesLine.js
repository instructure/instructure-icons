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

var IconCoursesLine = function (_Component) {
  _inherits(IconCoursesLine, _Component);

  function IconCoursesLine() {
    _classCallCheck(this, IconCoursesLine);

    return _possibleConstructorReturn(this, (IconCoursesLine.__proto__ || Object.getPrototypeOf(IconCoursesLine)).apply(this, arguments));
  }

  _createClass(IconCoursesLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCoursesLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1600 1600h-320V480h320v1120zM800 640h320v960H800V640zM320 320h320v1280H320V320zm1360 0h-480c-44.16 0-80 35.84-80 80v80H800V240c0-44.16-35.84-80-80-80H240c-44.16 0-80 35.84-80 80v1440c0 44.16 35.84 80 80 80h1440c44.16 0 80-35.84 80-80V400c0-44.16-35.84-80-80-80zM400 1040h160V400H400v640zm480 160h160V720H880v480zm640-640h-160v560h160V560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCoursesLine;
}(_react.Component);

exports.default = IconCoursesLine;