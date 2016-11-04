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

var IconLtiLine = function (_Component) {
  _inherits(IconLtiLine, _Component);

  function IconLtiLine() {
    _classCallCheck(this, IconLtiLine);

    return _possibleConstructorReturn(this, (IconLtiLine.__proto__ || Object.getPrototypeOf(IconLtiLine)).apply(this, arguments));
  }

  _createClass(IconLtiLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconLtiLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1320 320H680c-66.24 0-120 53.76-120 120 0 66.24 53.76 120 120 120h200v920c0 66.24 53.76 120 120 120 66.24 0 120-53.76 120-120V560h200c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120M600 1360H320V440c0-66.24-53.76-120-120-120-66.24 0-120 53.76-120 120v1040c0 66.24 53.76 120 120 120h400c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120m1240-920v1040c0 66.24-53.76 120-120 120-66.24 0-120-53.76-120-120V440c0-66.24 53.76-120 120-120 66.24 0 120 53.76 120 120', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconLtiLine;
}(_react.Component);

exports.default = IconLtiLine;