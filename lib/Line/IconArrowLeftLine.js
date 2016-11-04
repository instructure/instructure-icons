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

var IconArrowLeftLine = function (_Component) {
  _inherits(IconArrowLeftLine, _Component);

  function IconArrowLeftLine() {
    _classCallCheck(this, IconArrowLeftLine);

    return _possibleConstructorReturn(this, (IconArrowLeftLine.__proto__ || Object.getPrototypeOf(IconArrowLeftLine)).apply(this, arguments));
  }

  _createClass(IconArrowLeftLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconArrowLeftLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1559.918 1642.354V277.876c0-110.96-73.44-150.88-165.52-88.16L428.88 847.396c-45.84 31.2-68.88 71.919-68.88 112.799 0 40.64 22.88 81.36 68.88 112.64l965.518 657.679c91.44 62.24 165.52 22.72 165.52-88.16m-160-101.68L547.52 960.115l852.398-580.56v1161.12', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconArrowLeftLine;
}(_react.Component);

exports.default = IconArrowLeftLine;