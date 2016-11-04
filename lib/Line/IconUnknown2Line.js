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

var IconUnknown2Line = function (_Component) {
  _inherits(IconUnknown2Line, _Component);

  function IconUnknown2Line() {
    _classCallCheck(this, IconUnknown2Line);

    return _possibleConstructorReturn(this, (IconUnknown2Line.__proto__ || Object.getPrototypeOf(IconUnknown2Line)).apply(this, arguments));
  }

  _createClass(IconUnknown2Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnknown2Line',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1919.84 1760H1250.4c-286.72 0-520-215.28-520-480s233.28-480 520-480 520 215.28 520 480c0 65.76-14.8 131.04-43.12 191.12L1919.84 1760zM1250.4 960c-198.48 0-360 143.6-360 320s161.52 320 360 320h370.56l-81.92-122.96 27.04-43.68c29.44-47.6 44.32-99.12 44.32-153.36 0-176.4-161.52-320-360-320zm-680 400H57.28l302-301.92C287.84 956.72 250.4 841.2 250.4 720c0-352.88 323.04-640 720-640 357.44 0 664 236.88 713.12 551.12l-158.08 24.72C1488.4 418.72 1249.76 240 970.4 240c-308.8 0-560 215.28-560 480 0 105.6 40 206.24 115.52 290.88l50.4 56.4L443.52 1200H570.4v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnknown2Line;
}(_react.Component);

exports.default = IconUnknown2Line;