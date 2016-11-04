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

var IconMutedSolid = function (_Component) {
  _inherits(IconMutedSolid, _Component);

  function IconMutedSolid() {
    _classCallCheck(this, IconMutedSolid);

    return _possibleConstructorReturn(this, (IconMutedSolid.__proto__ || Object.getPrototypeOf(IconMutedSolid)).apply(this, arguments));
  }

  _createClass(IconMutedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMutedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1578.947 264.259l-1354.631 1354.9 112.673 112.696 395.791-395.95 288.378 316.25c22.79 22.794 57.054 29.568 86.855 17.215 29.802-12.274 49.166-41.364 49.166-73.563V911.503l534.442-534.548-112.674-112.696zM1157.179 460.672V320.559c0-32.199-19.364-61.29-49.166-73.563-29.801-12.354-64.066-5.58-86.855 17.295L679.073 639.359H440.021c-43.827 0-79.685 35.865-79.685 79.7v478.2c0 16.896 6.535 31.88 15.619 44.791l781.224-781.378z' })
        )
      );
    }
  }]);

  return IconMutedSolid;
}(_react.Component);

exports.default = IconMutedSolid;