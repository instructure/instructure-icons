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

var IconInfoSolid = function (_Component) {
  _inherits(IconInfoSolid, _Component);

  function IconInfoSolid() {
    _classCallCheck(this, IconInfoSolid);

    return _possibleConstructorReturn(this, (IconInfoSolid.__proto__ || Object.getPrototypeOf(IconInfoSolid)).apply(this, arguments));
  }

  _createClass(IconInfoSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconInfoSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zM809 934c0-30.928 25.07-56 55.994-56h191.012c30.925 0 55.994 25.07 55.994 56v521c0 30.928-25.07 56-55.994 56H864.994c-30.925 0-55.994-25.07-55.994-56V934zm151.5-206c88.09 0 159.5-71.41 159.5-159.5S1048.59 409 960.5 409 801 480.41 801 568.5 872.41 728 960.5 728z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconInfoSolid;
}(_react.Component);

exports.default = IconInfoSolid;