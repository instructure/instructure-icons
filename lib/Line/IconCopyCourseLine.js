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

var IconCopyCourseLine = function (_Component) {
  _inherits(IconCopyCourseLine, _Component);

  function IconCopyCourseLine() {
    _classCallCheck(this, IconCopyCourseLine);

    return _possibleConstructorReturn(this, (IconCopyCourseLine.__proto__ || Object.getPrototypeOf(IconCopyCourseLine)).apply(this, arguments));
  }

  _createClass(IconCopyCourseLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCopyCourseLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1680 400v-80h-640v160h480v1440h160V400zM400 1760H0V0h1440v160H160v1600h240v-480h160v480h240-240v160H400v-160zm160 0h960v160H560v-160zM743.44 696.56L846.88 800H560V400H400v480c0 44.16 35.84 80 80 80h366.88l-103.44 103.44 113.12 113.12L1153.12 880 856.56 583.44 743.44 696.56z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCopyCourseLine;
}(_react.Component);

exports.default = IconCopyCourseLine;