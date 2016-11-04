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

var IconFacebookBoxedSolid = function (_Component) {
  _inherits(IconFacebookBoxedSolid, _Component);

  function IconFacebookBoxedSolid() {
    _classCallCheck(this, IconFacebookBoxedSolid);

    return _possibleConstructorReturn(this, (IconFacebookBoxedSolid.__proto__ || Object.getPrototypeOf(IconFacebookBoxedSolid)).apply(this, arguments));
  }

  _createClass(IconFacebookBoxedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFacebookBoxedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1518.249 960h-259.374v697.375H960V960H816.042V731.859H960V583.667c0-201.343 86.873-321.042 323.582-321.042h272.773v246.82h-222.761c-66.25-.099-74.37 34.471-74.37 98.879l-.349 123.535h298.875L1518.199 960h.05zm-26.9-797H428.7C282.55 163 163 282.55 163 428.7v1062.6c0 146.25 119.55 265.7 265.7 265.7h1062.65c146.1 0 265.65-119.45 265.65-265.7V428.7c0-146.15-119.55-265.7-265.65-265.7z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFacebookBoxedSolid;
}(_react.Component);

exports.default = IconFacebookBoxedSolid;