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

var IconReplyAll2Line = function (_Component) {
  _inherits(IconReplyAll2Line, _Component);

  function IconReplyAll2Line() {
    _classCallCheck(this, IconReplyAll2Line);

    return _possibleConstructorReturn(this, (IconReplyAll2Line.__proto__ || Object.getPrototypeOf(IconReplyAll2Line)).apply(this, arguments));
  }

  _createClass(IconReplyAll2Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconReplyAll2Line',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { d: 'M1216.102 198.868L513.671 901.299c-30.517 30.517-30.517 79.843 0 110.36l702.431 702.43a78.075 78.075 0 0 0 55.18 22.869c10.068 0 20.215-1.951 29.893-5.932 29.111-12.097 48.155-40.585 48.155-72.116v-234.144h390.937c42.146 0 77.346-34.965 77.346-78.204V566.474c0-42.693-34.575-78.282-77.346-78.282H1349.33V254.048c0-31.531-19.044-60.02-48.155-72.116-9.756-3.98-19.903-5.932-29.971-5.932-20.292 0-40.194 7.961-55.102 22.868zm-22.868 289.324v156.095h468.283v624.383h-468.283v201.832L679.29 956.48l513.945-513.946v45.659zM124.86 890.679c-30.48 30.48-30.48 79.898 0 110.378l719.957 719.957c30.48 30.48 79.898 30.48 110.378 0 30.48-30.48 30.48-79.898 0-110.378l-649.358-647.25 614.322-647.25c30.48-30.48 30.48-79.898 0-110.378-30.48-30.48-79.898-30.48-110.378 0L124.86 890.679z', id: 'a' })
        ),
        _react2.default.createElement('use', { xlinkHref: '#a', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconReplyAll2Line;
}(_react.Component);

exports.default = IconReplyAll2Line;