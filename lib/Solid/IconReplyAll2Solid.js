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

var IconReplyAll2Solid = function (_Component) {
  _inherits(IconReplyAll2Solid, _Component);

  function IconReplyAll2Solid() {
    _classCallCheck(this, IconReplyAll2Solid);

    return _possibleConstructorReturn(this, (IconReplyAll2Solid.__proto__ || Object.getPrototypeOf(IconReplyAll2Solid)).apply(this, arguments));
  }

  _createClass(IconReplyAll2Solid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconReplyAll2Solid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1357.888 478.621V239.68c0-32.178-19.433-61.249-49.142-73.594-29.947-12.346-64.036-5.576-86.815 17.283L505.107 900.193c-31.142 31.142-31.142 81.48 0 112.621l716.824 716.825a79.674 79.674 0 0 0 56.31 23.336c10.275 0 20.629-1.99 30.505-6.053 29.709-12.345 49.142-41.416 49.142-73.594v-238.941h437.957c21.772 0 39.922-17.842 39.922-39.851V518.472c0-22.031-17.874-39.85-39.922-39.85h-437.957zM108.328 889.323c-31.104 31.105-31.104 81.535 0 112.64l734.71 734.709c31.104 31.104 81.534 31.104 112.639 0 31.104-31.105 31.104-81.535 0-112.64L293.014 963.52l626.91-660.513c31.104-31.105 31.104-81.535 0-112.64-31.105-31.104-81.535-31.104-112.64 0L108.328 889.324z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconReplyAll2Solid;
}(_react.Component);

exports.default = IconReplyAll2Solid;