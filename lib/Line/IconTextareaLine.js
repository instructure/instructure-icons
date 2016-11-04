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

var IconTextareaLine = function (_Component) {
  _inherits(IconTextareaLine, _Component);

  function IconTextareaLine() {
    _classCallCheck(this, IconTextareaLine);

    return _possibleConstructorReturn(this, (IconTextareaLine.__proto__ || Object.getPrototypeOf(IconTextareaLine)).apply(this, arguments));
  }

  _createClass(IconTextareaLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTextareaLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M479 1600v-160H319V480h160V320h961v160h479V0h-479v160H479V0H0v480h159v960H0v480h479v-160h963v160h479v-480h-479v160H479z' }),
          _react2.default.createElement('path', { d: 'M1601 1520h160V400h-160z' }),
          _react2.default.createElement('path', { d: 'M600 730.907V544.7c0-13.134 6.567-19.701 19.7-19.701h680.636c13.134 0 19.701 6.567 19.701 19.7v186.207c0 13.134-6.567 19.7-19.7 19.7h-79.44c-13.557 0-19.7-6.566-18.43-19.7l6.355-101.683h-175.401v676.823h108.037c13.134 0 19.7 6.567 19.7 19.7v63.552c0 13.134-6.566 19.701-19.7 19.701H779.85c-13.134 0-19.7-6.567-19.7-19.7v-63.552c0-7.203 1.482-12.287 4.448-15.253 2.966-2.965 8.05-4.448 15.252-4.448h106.767V629.224H710.579l6.356 101.683c1.27 13.134-4.66 19.7-17.795 19.7H619.7c-13.133 0-19.7-6.566-19.7-19.7z', stroke: '#333', strokeWidth: '3' })
        )
      );
    }
  }]);

  return IconTextareaLine;
}(_react.Component);

exports.default = IconTextareaLine;