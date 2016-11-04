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

var IconToggleLeftSolid = function (_Component) {
  _inherits(IconToggleLeftSolid, _Component);

  function IconToggleLeftSolid() {
    _classCallCheck(this, IconToggleLeftSolid);

    return _possibleConstructorReturn(this, (IconToggleLeftSolid.__proto__ || Object.getPrototypeOf(IconToggleLeftSolid)).apply(this, arguments));
  }

  _createClass(IconToggleLeftSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconToggleLeftSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M320 320h400V160H320c-88.24 0-160 71.76-160 160v1280c0 88.24 71.76 160 160 160h400v-160H320V320zm1040-160h-160v160h160V160zm-160 1600h160v-160h-160v160zm400-1600h-80v160h80v80h160v-80c0-88.24-71.76-160-160-160zm0 1440h-80v160h80c88.24 0 160-71.76 160-160v-80h-160v80zm0-880h160V560h-160v160zm0 640h160v-160h-160v160zm0-320h160V880h-160v160zm-536.56-343.44L1166.88 800H880c-176.48 0-320 143.52-320 320h160c0-88.24 71.76-160 160-160h286.88l-103.44 103.44 113.12 113.12L1473.12 880l-296.56-296.56-113.12 113.12zM1040 160H880v400h160V160zM880 1760h160v-560H880v560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconToggleLeftSolid;
}(_react.Component);

exports.default = IconToggleLeftSolid;