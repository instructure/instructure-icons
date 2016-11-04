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

var IconFacebookBoxedLine = function (_Component) {
  _inherits(IconFacebookBoxedLine, _Component);

  function IconFacebookBoxedLine() {
    _classCallCheck(this, IconFacebookBoxedLine);

    return _possibleConstructorReturn(this, (IconFacebookBoxedLine.__proto__ || Object.getPrototypeOf(IconFacebookBoxedLine)).apply(this, arguments));
  }

  _createClass(IconFacebookBoxedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFacebookBoxedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1540 305.321c49.199 19.515 84 67.543 84 123.679v1062c0 73.44-59.56 133-133 133h-235V960h247l38-218h-285V624c.046-61.529 7.751-94.532 71-94h213V305.321zM970 1624H429c-73.44 0-133-59.56-133-133V429c0-73.44 59.56-133 133-133h800.555C1041.091 311.98 970.395 422.928 970 600v142H833v218h137v664zm521-1461H429c-146.45 0-266 119.55-266 266v1062c0 146.516 119.55 266 266 266h1062c146.45 0 266-119.484 266-266V429c0-146.45-119.55-266-266-266z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFacebookBoxedLine;
}(_react.Component);

exports.default = IconFacebookBoxedLine;