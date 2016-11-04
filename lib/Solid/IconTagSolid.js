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

var IconTagSolid = function (_Component) {
  _inherits(IconTagSolid, _Component);

  function IconTagSolid() {
    _classCallCheck(this, IconTagSolid);

    return _possibleConstructorReturn(this, (IconTagSolid.__proto__ || Object.getPrototypeOf(IconTagSolid)).apply(this, arguments));
  }

  _createClass(IconTagSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTagSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M559.995 719.993c-88.479 0-159.998-71.76-159.998-159.998 0-88.399 71.52-159.998 159.998-159.998 88.319 0 159.998 71.6 159.998 159.998 0 88.239-71.68 159.998-159.998 159.998m1176.545 343.436l-879.989-879.99A79.926 79.926 0 0 0 799.992 160H239.999C195.839 160 160 195.84 160 239.999v559.993c0 21.2 8.48 41.6 23.44 56.56l879.989 879.988c15.6 15.6 36.08 23.44 56.559 23.44 20.48 0 40.96-7.84 56.56-23.44l559.992-559.993c31.28-31.28 31.28-81.839 0-113.118', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTagSolid;
}(_react.Component);

exports.default = IconTagSolid;