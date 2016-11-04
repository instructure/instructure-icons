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

var IconInfoLine = function (_Component) {
  _inherits(IconInfoLine, _Component);

  function IconInfoLine() {
    _classCallCheck(this, IconInfoLine);

    return _possibleConstructorReturn(this, (IconInfoLine.__proto__ || Object.getPrototypeOf(IconInfoLine)).apply(this, arguments));
  }

  _createClass(IconInfoLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconInfoLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960.175 1603.365c-354.283 0-642.544-288.26-642.544-642.544 0-354.276 288.26-642.537 642.544-642.537s642.545 288.261 642.545 642.537c0 354.283-288.261 642.544-642.545 642.544m0-1445.719c-442.874 0-803.174 360.308-803.174 803.175 0 442.954 360.3 803.182 803.174 803.182 442.875 0 803.175-360.228 803.175-803.182 0-442.867-360.3-803.175-803.175-803.175' }),
          _react2.default.createElement('path', { d: 'M812 937.007C812 906.075 837.077 881 868.002 881h183.996c30.93 0 56.002 25.08 56.002 56.007v506.986c0 30.932-25.077 56.007-56.002 56.007H868.002c-30.93 0-56.002-25.08-56.002-56.007V937.007zM960 733c86.156 0 156-69.844 156-156s-69.844-156-156-156-156 69.844-156 156 69.844 156 156 156z' })
        )
      );
    }
  }]);

  return IconInfoLine;
}(_react.Component);

exports.default = IconInfoLine;