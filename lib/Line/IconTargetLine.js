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

var IconTargetLine = function (_Component) {
  _inherits(IconTargetLine, _Component);

  function IconTargetLine() {
    _classCallCheck(this, IconTargetLine);

    return _possibleConstructorReturn(this, (IconTargetLine.__proto__ || Object.getPrototypeOf(IconTargetLine)).apply(this, arguments));
  }

  _createClass(IconTargetLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTargetLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1042 1432.8V1120H882v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H802V880H489.2C523.12 679.44 681.44 521.12 882 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1122v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1842 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H882v245.6C593.12 361.84 363.84 591.12 327.52 880H82v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1842V880z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTargetLine;
}(_react.Component);

exports.default = IconTargetLine;