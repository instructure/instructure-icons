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

var IconWarningSolid = function (_Component) {
  _inherits(IconWarningSolid, _Component);

  function IconWarningSolid() {
    _classCallCheck(this, IconWarningSolid);

    return _possibleConstructorReturn(this, (IconWarningSolid.__proto__ || Object.getPrototypeOf(IconWarningSolid)).apply(this, arguments));
  }

  _createClass(IconWarningSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconWarningSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1751.547 1581.395l-720-1382.4c-27.12-51.993-116-51.993-143.12 0l-720 1382.4c-12.32 23.808-11.12 51.994 3.52 74.803 14.56 22.58 40.24 36.327 68 36.327h1440c27.76 0 53.44-13.824 68.08-36.403 14.56-22.733 15.84-50.842 3.52-74.727zm-871.6-810.47h160v460.8h-160v-460.8zm80 710.4c-55.2 0-100-42.931-100-96 0-52.992 44.8-96 100-96s100 43.008 100 96c0 53.069-44.8 96-100 96z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconWarningSolid;
}(_react.Component);

exports.default = IconWarningSolid;