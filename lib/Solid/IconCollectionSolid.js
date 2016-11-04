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

var IconCollectionSolid = function (_Component) {
  _inherits(IconCollectionSolid, _Component);

  function IconCollectionSolid() {
    _classCallCheck(this, IconCollectionSolid);

    return _possibleConstructorReturn(this, (IconCollectionSolid.__proto__ || Object.getPrototypeOf(IconCollectionSolid)).apply(this, arguments));
  }

  _createClass(IconCollectionSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCollectionSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M800 920v240h319.76l.24-240H800zm480 240c0 88.24-71.76 160-160 160H800c-88.24 0-160-71.76-160-160v-160H160v560c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160v-560h-480v160zm400-640h-320V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H240c-88.32 0-160 71.68-160 160v240h560c0-88.16 71.76-160 160-160h320c88.24 0 160 71.84 160 160h560V680c0-88.32-71.68-160-160-160zm-480 0H720V360h480v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCollectionSolid;
}(_react.Component);

exports.default = IconCollectionSolid;