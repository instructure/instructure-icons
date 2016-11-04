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

var IconInvitationLine = function (_Component) {
  _inherits(IconInvitationLine, _Component);

  function IconInvitationLine() {
    _classCallCheck(this, IconInvitationLine);

    return _possibleConstructorReturn(this, (IconInvitationLine.__proto__ || Object.getPrototypeOf(IconInvitationLine)).apply(this, arguments));
  }

  _createClass(IconInvitationLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconInvitationLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M640.024 880h480.024V720H640.024v160zm0-240h640.032V480H640.024v160zm-160.008 80H320.008V160h1280.064v560h-160.008V320H480.016v400zm-160.008 880v-549.2l348.817 290.72c14.401 11.92 32.562 18.48 51.203 18.48h480.024c18.72 0 36.882-6.56 51.283-18.48l348.817-290.72.08 549.2H320.008zm1393.99-792.48c-28.162-13.12-61.283-8.88-85.125 10.96L1171.091 1200H748.989L291.207 818.56c-23.762-19.84-57.123-24.16-85.125-10.96C178.001 820.72 160 848.96 160 880v720c0 88.24 71.764 160 160.008 160h1280.064c88.324 0 160.008-71.76 159.928-160.08v-720c0-30.96-17.921-59.28-46.002-72.4z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconInvitationLine;
}(_react.Component);

exports.default = IconInvitationLine;