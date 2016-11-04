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

var IconUnknown2Solid = function (_Component) {
  _inherits(IconUnknown2Solid, _Component);

  function IconUnknown2Solid() {
    _classCallCheck(this, IconUnknown2Solid);

    return _possibleConstructorReturn(this, (IconUnknown2Solid.__proto__ || Object.getPrototypeOf(IconUnknown2Solid)).apply(this, arguments));
  }

  _createClass(IconUnknown2Solid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconUnknown2Solid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M576.077 1382.4c-3.38-25.19-5.683-50.688-5.683-76.8 0-339.302 294.681-614.4 658.252-614.4 159.053 0 304.896 52.685 418.714 140.314 2.458-20.89 3.686-42.087 3.686-63.514 0-338.765-310.118-614.4-691.2-614.4-381.081 0-691.2 275.635-691.2 614.4 0 116.352 35.943 227.251 104.448 324.48L83.251 1382.4h492.826zm1110.374 106.675c27.187-57.677 41.319-120.269 41.319-183.475 0-254.131-223.95-460.8-499.2-460.8-275.252 0-499.2 206.669-499.2 460.8s223.948 460.8 499.2 460.8h642.662l-184.78-277.325z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnknown2Solid;
}(_react.Component);

exports.default = IconUnknown2Solid;