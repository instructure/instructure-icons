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

var IconDiscussionReply2Solid = function (_Component) {
  _inherits(IconDiscussionReply2Solid, _Component);

  function IconDiscussionReply2Solid() {
    _classCallCheck(this, IconDiscussionReply2Solid);

    return _possibleConstructorReturn(this, (IconDiscussionReply2Solid.__proto__ || Object.getPrototypeOf(IconDiscussionReply2Solid)).apply(this, arguments));
  }

  _createClass(IconDiscussionReply2Solid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconDiscussionReply2Solid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1480.004 480.026H960.01V240.031c0-32.32-19.52-61.519-49.36-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.992 719.985A80.027 80.027 0 0 0 880.01 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995H1759.997c44.195 0 80.003-35.814 80.003-79.991V560.017c0-44.183-35.818-79.99-80.003-79.99h-279.993z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconDiscussionReply2Solid;
}(_react.Component);

exports.default = IconDiscussionReply2Solid;