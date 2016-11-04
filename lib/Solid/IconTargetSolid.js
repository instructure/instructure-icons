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

var IconTargetSolid = function (_Component) {
  _inherits(IconTargetSolid, _Component);

  function IconTargetSolid() {
    _classCallCheck(this, IconTargetSolid);

    return _possibleConstructorReturn(this, (IconTargetSolid.__proto__ || Object.getPrototypeOf(IconTargetSolid)).apply(this, arguments));
  }

  _createClass(IconTargetSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTargetSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1040 1432.8V1120H880v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H800V880H487.2C521.12 679.44 679.44 521.12 880 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1120v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1840 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H880v245.6C591.12 361.84 361.84 591.12 325.52 880H80v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1840V880z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTargetSolid;
}(_react.Component);

exports.default = IconTargetSolid;