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

var IconMasteryPathSolid = function (_Component) {
  _inherits(IconMasteryPathSolid, _Component);

  function IconMasteryPathSolid() {
    _classCallCheck(this, IconMasteryPathSolid);

    return _possibleConstructorReturn(this, (IconMasteryPathSolid.__proto__ || Object.getPrototypeOf(IconMasteryPathSolid)).apply(this, arguments));
  }

  _createClass(IconMasteryPathSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMasteryPathSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1600.459 857.069L1897 560.534 1600.459 264l-113.113 113.11 103.434 103.431h-206.867c-312.38 0-395.415 119.11-468.61 224.221-65.676 94.312-122.472 175.745-411.334 175.745H24v159.986h479.97c288.86 0 345.657 81.433 411.333 175.745 73.195 105.11 156.23 224.22 468.61 224.22h206.867l-103.434 103.432L1600.46 1657 1897 1360.466l-296.541-296.535-113.113 113.11 103.434 103.431h-206.867c-228.865 0-274.383-65.274-337.339-155.666-38.237-54.955-81.274-116.63-162.31-164.306 81.036-47.676 124.073-109.35 162.31-164.306 62.956-90.392 108.474-155.666 337.339-155.666h206.867l-103.434 103.43 113.113 113.11z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMasteryPathSolid;
}(_react.Component);

exports.default = IconMasteryPathSolid;