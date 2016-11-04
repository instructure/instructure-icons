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

var IconFolderLockedLine = function (_Component) {
  _inherits(IconFolderLockedLine, _Component);

  function IconFolderLockedLine() {
    _classCallCheck(this, IconFolderLockedLine);

    return _possibleConstructorReturn(this, (IconFolderLockedLine.__proto__ || Object.getPrototypeOf(IconFolderLockedLine)).apply(this, arguments));
  }

  _createClass(IconFolderLockedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFolderLockedLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M851.68 240H320c-88.32 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240m0 160l55.76 139.44C931.76 600.16 990.56 640 1056 640h544v880H320V400h531.68M733.333 902.857v91.429h-16.525c-42.42 0-76.808 34.385-76.808 76.805v212.104c0 42.418 34.384 76.805 76.801 76.805H1123.2c42.416 0 76.801-34.385 76.801-76.805v-212.104c0-42.419-34.39-76.805-76.808-76.805h-16.525v-91.429c0-100.571-84-182.857-186.667-182.857s-186.667 82.286-186.667 182.857zM920 811.43c52.267 0 93.333 40.228 93.333 91.428v91.429H826.667v-91.429c0-51.2 41.066-91.428 93.333-91.428z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFolderLockedLine;
}(_react.Component);

exports.default = IconFolderLockedLine;