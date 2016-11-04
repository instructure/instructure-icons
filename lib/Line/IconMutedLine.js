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

var IconMutedLine = function (_Component) {
  _inherits(IconMutedLine, _Component);

  function IconMutedLine() {
    _classCallCheck(this, IconMutedLine);

    return _possibleConstructorReturn(this, (IconMutedLine.__proto__ || Object.getPrototypeOf(IconMutedLine)).apply(this, arguments));
  }

  _createClass(IconMutedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMutedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1088.099 1503.269l-227.439-325.26L1088.1 950.57v552.699zM1732.41 306.175l-118.627-118.627-1426.21 1426.21L306.2 1732.385l433.904-433.82 219.804 314.186c34.984 41.612 80.455 60.32 128.107 60.32 22.064 0 43.625-4.194 64.096-12.667 63.005-26.008 103.693-86.915 103.693-155.122V782.865l476.606-476.69zM500.71 1063.392V750.297h295.393l291.87-417.209v143.04l164.853-164.852c-7.047-59.901-43.96-112.168-100.757-135.49-61.999-25.672-135.49-10.99-182.723 36.41L708.685 582.507H500.71c-92.536 0-167.79 75.254-167.79 167.79v335.579c0 40.52 15.018 77.183 39.011 106.294l128.779-128.778z' })
        )
      );
    }
  }]);

  return IconMutedLine;
}(_react.Component);

exports.default = IconMutedLine;