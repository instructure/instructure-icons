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

var IconModuleSolid = function (_Component) {
  _inherits(IconModuleSolid, _Component);

  function IconModuleSolid() {
    _classCallCheck(this, IconModuleSolid);

    return _possibleConstructorReturn(this, (IconModuleSolid.__proto__ || Object.getPrototypeOf(IconModuleSolid)).apply(this, arguments));
  }

  _createClass(IconModuleSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconModuleSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1709.682 571.07l-717.3-318.738a79.798 79.798 0 0 0-64.796 0L210.366 571.07c-28.772 12.75-47.342 41.277-47.342 72.752 0 31.555 18.57 60.082 47.342 72.831l717.22 318.737c10.361 4.542 21.44 6.853 32.438 6.853 10.999 0 22.077-2.31 32.358-6.853l717.3-318.737c28.772-12.75 47.342-41.276 47.342-72.831 0-31.475-18.57-60.002-47.342-72.752' }),
          _react2.default.createElement('path', { d: 'M1757 831.756L958.565 1194.48 163 863.072v172.516l766.316 319.375c9.803 4.223 20.243 6.056 30.684 6.056 11.238 0 22.475-2.311 32.916-6.933L1757 1006.822V831.756z' }),
          _react2.default.createElement('path', { d: 'M1757 1150.493l-798.435 362.723L163 1181.809v172.516L929.316 1673.7c9.803 4.223 20.243 6.056 30.684 6.056 11.238 0 22.475-2.311 32.916-6.933L1757 1325.56v-175.066z' })
        )
      );
    }
  }]);

  return IconModuleSolid;
}(_react.Component);

exports.default = IconModuleSolid;