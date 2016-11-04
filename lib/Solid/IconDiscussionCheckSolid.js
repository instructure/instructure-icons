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

var IconDiscussionCheckSolid = function (_Component) {
  _inherits(IconDiscussionCheckSolid, _Component);

  function IconDiscussionCheckSolid() {
    _classCallCheck(this, IconDiscussionCheckSolid);

    return _possibleConstructorReturn(this, (IconDiscussionCheckSolid.__proto__ || Object.getPrototypeOf(IconDiscussionCheckSolid)).apply(this, arguments));
  }

  _createClass(IconDiscussionCheckSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconDiscussionCheckSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M891.697 1575.716L263.427 944.2l369.06-370.967L873.71 815.7l386.325-427.145H320.601C232.029 388.556 160 461.04 160 549.986v968.584c0 89.028 72.03 161.43 160.6 161.43h1124.205c88.571 0 160.6-72.402 160.6-161.43V786.563l-713.708 789.153zm-5.525-233.872L490.532 944.24l141.971-142.704 246.763 248.038L1611.444 240 1760 375.682l-873.828 966.162z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconDiscussionCheckSolid;
}(_react.Component);

exports.default = IconDiscussionCheckSolid;