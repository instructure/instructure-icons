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

var IconFlagSolid = function (_Component) {
  _inherits(IconFlagSolid, _Component);

  function IconFlagSolid() {
    _classCallCheck(this, IconFlagSolid);

    return _possibleConstructorReturn(this, (IconFlagSolid.__proto__ || Object.getPrototypeOf(IconFlagSolid)).apply(this, arguments));
  }

  _createClass(IconFlagSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFlagSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M402.333 1757H243V163h159.333zM641.333 358.751v564.914l734.049-282.457-734.049-282.457zm-79.666 760.657c-15.854 0-31.628-4.782-45.092-14.027-21.669-14.824-34.575-39.372-34.575-65.673v-797c0-26.301 12.906-50.849 34.575-65.673 21.67-14.904 49.234-18.092 73.692-8.767l1035.667 398.5c30.751 11.875 51.066 41.444 51.066 74.44 0 32.996-20.315 62.564-51.066 74.44l-1035.667 398.5c-9.241 3.427-18.96 5.26-28.6 5.26z' })
        )
      );
    }
  }]);

  return IconFlagSolid;
}(_react.Component);

exports.default = IconFlagSolid;