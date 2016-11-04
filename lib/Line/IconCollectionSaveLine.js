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

var IconCollectionSaveLine = function (_Component) {
  _inherits(IconCollectionSaveLine, _Component);

  function IconCollectionSaveLine() {
    _classCallCheck(this, IconCollectionSaveLine);

    return _possibleConstructorReturn(this, (IconCollectionSaveLine.__proto__ || Object.getPrototypeOf(IconCollectionSaveLine)).apply(this, arguments));
  }

  _createClass(IconCollectionSaveLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCollectionSaveLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1336.619 776.56l-113.126-113.12-183.449 183.44V160H880.036v686.88l-183.45-183.44-113.125 113.12L960.04 1153.2l376.579-376.64zM1360.06 1040v320H560.02v-320H160v720h1600v-720h-399.94zm-800.04 480h960.048v-320h80.004v400H319.928v-400h80.004v320H560.02z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCollectionSaveLine;
}(_react.Component);

exports.default = IconCollectionSaveLine;