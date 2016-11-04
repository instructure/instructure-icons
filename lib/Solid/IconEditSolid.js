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

var IconEditSolid = function (_Component) {
  _inherits(IconEditSolid, _Component);

  function IconEditSolid() {
    _classCallCheck(this, IconEditSolid);

    return _possibleConstructorReturn(this, (IconEditSolid.__proto__ || Object.getPrototypeOf(IconEditSolid)).apply(this, arguments));
  }

  _createClass(IconEditSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconEditSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1490.22 634.72l-204.88-204.88 204.88-204.96 204.88 204.96-204.88 204.88zM235.18 1684.88l128.08-332.96 204.88 204.88-332.96 128.08zm1562.4-1357.52L1592.7 122.48c-56.64-56.64-148.32-56.64-204.96 0l-1097.6 1097.6c-19.2 19.2-32.64 43.36-38.72 69.84L81.9 1751.198c-12 52.16 34.72 98.96 86.88 86.88l461.28-169.44c26.48-6.16 50.72-19.6 69.92-38.8l1097.6-1097.6c56.56-56.56 56.56-148.32 0-204.88z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEditSolid;
}(_react.Component);

exports.default = IconEditSolid;