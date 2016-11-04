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

var IconUnmutedSolid = function (_Component) {
  _inherits(IconUnmutedSolid, _Component);

  function IconUnmutedSolid() {
    _classCallCheck(this, IconUnmutedSolid);

    return _possibleConstructorReturn(this, (IconUnmutedSolid.__proto__ || Object.getPrototypeOf(IconUnmutedSolid)).apply(this, arguments));
  }

  _createClass(IconUnmutedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnmutedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M910.64 246.32c-29.92-12.32-64.32-5.52-87.2 17.36L480 640.16H240c-44 0-80 36.08-80 80v480c0 44 36 80 80 80h240l343.44 376.64c22.88 22.88 57.28 29.68 87.2 17.36 29.92-12.4 49.36-41.6 49.36-74v-1280c0-32.24-19.44-61.6-49.36-73.84zM1120 400.16v160c220.56 0 400 179.52 400 400 0 220.56-179.44 400-400 400v160c308.8 0 560-251.12 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.24-107.68-240-240-240v160c44.08 0 80 35.92 80 80s-35.92 80-80 80v160c132.32 0 240-107.6 240-240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnmutedSolid;
}(_react.Component);

exports.default = IconUnmutedSolid;