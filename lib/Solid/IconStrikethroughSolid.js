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

var IconStrikethroughSolid = function (_Component) {
  _inherits(IconStrikethroughSolid, _Component);

  function IconStrikethroughSolid() {
    _classCallCheck(this, IconStrikethroughSolid);

    return _possibleConstructorReturn(this, (IconStrikethroughSolid.__proto__ || Object.getPrototypeOf(IconStrikethroughSolid)).apply(this, arguments));
  }

  _createClass(IconStrikethroughSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconStrikethroughSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1678 880H238v160h720c132.32 0 240 107.68 240 240s-107.68 240-240 240H718v-80H558v160c0 44.16 35.84 80 80 80h320c220.56 0 400-179.44 400-400 0-90.4-31.28-172.96-82-240h402V880zM732.768 720c-8.96-25.12-14.8-51.76-14.8-80 0-132.32 107.68-240 240-240h160v80h160V320c0-44.16-35.76-80-80-80h-240c-220.48 0-400 179.44-400 400 0 27.36 2.88 54.16 8.16 80h166.64z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStrikethroughSolid;
}(_react.Component);

exports.default = IconStrikethroughSolid;