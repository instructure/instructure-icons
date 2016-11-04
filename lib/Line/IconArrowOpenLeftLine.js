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

var IconArrowOpenLeftLine = function (_Component) {
  _inherits(IconArrowOpenLeftLine, _Component);

  function IconArrowOpenLeftLine() {
    _classCallCheck(this, IconArrowOpenLeftLine);

    return _possibleConstructorReturn(this, (IconArrowOpenLeftLine.__proto__ || Object.getPrototypeOf(IconArrowOpenLeftLine)).apply(this, arguments));
  }

  _createClass(IconArrowOpenLeftLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconArrowOpenLeftLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M863.702 960l520.212-519.957c64.477-64.444 64.474-168.117.498-232.062-64.423-64.39-167.926-63.722-232.177.497L535.42 824.991c-37.06 37.041-52.817 87.042-47.37 135.009-5.447 47.967 10.31 97.968 47.37 135.009l616.816 616.513c64.251 64.22 167.754 64.887 232.177.497 63.976-63.945 63.979-167.618-.498-232.062L863.702 960z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconArrowOpenLeftLine;
}(_react.Component);

exports.default = IconArrowOpenLeftLine;