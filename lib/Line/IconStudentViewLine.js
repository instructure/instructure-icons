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

var IconStudentViewLine = function (_Component) {
  _inherits(IconStudentViewLine, _Component);

  function IconStudentViewLine() {
    _classCallCheck(this, IconStudentViewLine);

    return _possibleConstructorReturn(this, (IconStudentViewLine.__proto__ || Object.getPrototypeOf(IconStudentViewLine)).apply(this, arguments));
  }

  _createClass(IconStudentViewLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconStudentViewLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1240 1640H280c-88.24 0-160-71.76-160-160V680h160v800h960v160zm400-320H600c-88.24 0-160-71.76-160-160V440c0-88.32 71.76-160 160-160h1040c88.24 0 160 71.68 160 160v720c0 88.24-71.76 160-160 160zM600 440v720h1040.08l-.08-720H600zm960 320h-320V600h320v160zm0 320h-320V920h320v160zm-880 0c0-147.28 92.72-240 240-240s240 92.72 240 240H680zm400-400c0 88.32-71.68 160-160 160s-160-71.68-160-160 71.68-160 160-160 160 71.68 160 160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStudentViewLine;
}(_react.Component);

exports.default = IconStudentViewLine;