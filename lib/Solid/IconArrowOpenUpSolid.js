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

var IconArrowOpenUpSolid = function (_Component) {
  _inherits(IconArrowOpenUpSolid, _Component);

  function IconArrowOpenUpSolid() {
    _classCallCheck(this, IconArrowOpenUpSolid);

    return _possibleConstructorReturn(this, (IconArrowOpenUpSolid.__proto__ || Object.getPrototypeOf(IconArrowOpenUpSolid)).apply(this, arguments));
  }

  _createClass(IconArrowOpenUpSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconArrowOpenUpSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M960 863.702l-519.957 520.212c-64.444 64.477-168.117 64.474-232.062.498-64.39-64.423-63.722-167.926.497-232.177L824.991 535.42c37.041-37.06 87.042-52.817 135.009-47.37 47.967-5.447 97.968 10.31 135.009 47.37l616.513 616.816c64.22 64.251 64.887 167.754.497 232.177-63.945 63.976-167.618 63.979-232.062-.498L960 863.702z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconArrowOpenUpSolid;
}(_react.Component);

exports.default = IconArrowOpenUpSolid;