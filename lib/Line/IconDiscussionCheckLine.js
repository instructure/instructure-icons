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

var IconDiscussionCheckLine = function (_Component) {
  _inherits(IconDiscussionCheckLine, _Component);

  function IconDiscussionCheckLine() {
    _classCallCheck(this, IconDiscussionCheckLine);

    return _possibleConstructorReturn(this, (IconDiscussionCheckLine.__proto__ || Object.getPrototypeOf(IconDiscussionCheckLine)).apply(this, arguments));
  }

  _createClass(IconDiscussionCheckLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconDiscussionCheckLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1444.818 1680H320.602C232.03 1680 160 1607.598 160 1518.57V549.987c0-88.948 72.03-161.43 160.602-161.43h803.012v161.43H320.602v968.583h1124.216v-403.577h160.602v403.577c0 89.028-72.03 161.43-160.602 161.43zm-558.655-338.156L490.52 944.24l141.973-142.704 246.765 248.038L1611.443 240 1760 375.682l-873.837 966.162z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconDiscussionCheckLine;
}(_react.Component);

exports.default = IconDiscussionCheckLine;