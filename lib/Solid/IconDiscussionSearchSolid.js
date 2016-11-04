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

var IconDiscussionSearchSolid = function (_Component) {
  _inherits(IconDiscussionSearchSolid, _Component);

  function IconDiscussionSearchSolid() {
    _classCallCheck(this, IconDiscussionSearchSolid);

    return _possibleConstructorReturn(this, (IconDiscussionSearchSolid.__proto__ || Object.getPrototypeOf(IconDiscussionSearchSolid)).apply(this, arguments));
  }

  _createClass(IconDiscussionSearchSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconDiscussionSearchSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1793.266 1567.007l-316.747-316.747c78.807-121.61 121.45-263.143 121.45-411.315C1597.89 419.549 1258.42 80 838.945 80 419.549 80 80 419.469 80 838.945c0 419.315 339.469 758.944 758.945 758.944 148.252 0 289.784-42.643 411.235-121.37l316.667 316.667c62.725 62.885 163.934 62.725 226.339.08 62.405-62.405 62.405-163.934.08-226.26zM240.014 838.945c0-330.989 267.862-598.851 598.93-598.851 330.829 0 598.932 267.782 598.932 598.85 0 159.934-62.326 310.347-175.535 423.397-113.13 113.21-263.463 175.455-423.476 175.455-330.749.08-598.851-267.863-598.851-598.851z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconDiscussionSearchSolid;
}(_react.Component);

exports.default = IconDiscussionSearchSolid;