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

var IconCollectionLine = function (_Component) {
  _inherits(IconCollectionLine, _Component);

  function IconCollectionLine() {
    _classCallCheck(this, IconCollectionLine);

    return _possibleConstructorReturn(this, (IconCollectionLine.__proto__ || Object.getPrototypeOf(IconCollectionLine)).apply(this, arguments));
  }

  _createClass(IconCollectionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCollectionLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1680 920h-400c0-88.16-71.76-160-160-160H800c-88.24 0-160 71.84-160 160H240V760c0-44.16 35.92-80 80-80h1280c44.08 0 80 35.84 80 80v160zm-880 160V920h320l-.24 160H800zm800 400c0 44.16-35.92 80-80 80H400c-44.08 0-80-35.84-80-80v-400h320c0 88.24 71.76 160 160 160h320c88.24 0 160-71.76 160-160h320v400zM720 360h480v160H720V360zm880 160h-240V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H320C187.68 520 80 627.68 80 760v320h80v400c0 132.32 107.68 240 240 240h1120c132.32 0 240-107.68 240-240v-400h80V760c0-132.32-107.68-240-240-240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCollectionLine;
}(_react.Component);

exports.default = IconCollectionLine;