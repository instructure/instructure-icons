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

var IconEducatorsSolid = function (_Component) {
  _inherits(IconEducatorsSolid, _Component);

  function IconEducatorsSolid() {
    _classCallCheck(this, IconEducatorsSolid);

    return _possibleConstructorReturn(this, (IconEducatorsSolid.__proto__ || Object.getPrototypeOf(IconEducatorsSolid)).apply(this, arguments));
  }

  _createClass(IconEducatorsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEducatorsSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M880.026 399.998v79.999h159.998v-80C1040.024 267.68 932.345 160 800.026 160H640.028v159.998h159.998c44.08 0 80 35.92 80 80zM1440.02 160s-159.998 0-239.998 80c-79.999 79.998-79.999 239.997-79.999 239.997s159.999 0 239.998-80C1440.02 319.999 1440.02 160 1440.02 160zm-210.27 349.373c-91.999 0-184.158 35.52-269.757 103.438-85.52-67.919-177.678-103.438-269.678-103.438C424.958 509.373 240 789.05 240 1040.007 240 1403.364 517.437 1760 799.994 1760c21.04 0 41.44-8.56 56.4-23.2 23.28-22.88 72.32-56.8 103.599-56.8 31.36 0 80.319 33.84 103.599 56.72 15.04 14.88 35.28 23.28 56.4 23.28 282.636 0 559.994-356.636 559.994-719.993 0-250.957-184.879-530.634-450.236-530.634z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEducatorsSolid;
}(_react.Component);

exports.default = IconEducatorsSolid;