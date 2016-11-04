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

var IconHighlighterSolid = function (_Component) {
  _inherits(IconHighlighterSolid, _Component);

  function IconHighlighterSolid() {
    _classCallCheck(this, IconHighlighterSolid);

    return _possibleConstructorReturn(this, (IconHighlighterSolid.__proto__ || Object.getPrototypeOf(IconHighlighterSolid)).apply(this, arguments));
  }

  _createClass(IconHighlighterSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconHighlighterSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M80 1642h480.009l81.441-81.448-240.004-240.025L80 1642zm1186.31-162.865c-144.883 0-283.846 57.526-386.327 160.017H1840v-160.017h-573.69zm-182.46-997.054l-677.052 677.03 396.007 396.12 677.052-677.19-396.007-395.96zm552.154 239.824c62.481-62.486 62.481-163.776 0-226.343l-169.763-169.697c-62.4-62.487-163.763-62.487-226.244 0l-71.281 71.367 396.007 395.96 71.281-71.287z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHighlighterSolid;
}(_react.Component);

exports.default = IconHighlighterSolid;