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

var IconMsExcelLine = function (_Component) {
  _inherits(IconMsExcelLine, _Component);

  function IconMsExcelLine() {
    _classCallCheck(this, IconMsExcelLine);

    return _possibleConstructorReturn(this, (IconMsExcelLine.__proto__ || Object.getPrototypeOf(IconMsExcelLine)).apply(this, arguments));
  }

  _createClass(IconMsExcelLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMsExcelLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M898 894v299.91h181.657v-74.978H970.663V894zM1206.828 968.977h127.16V894h-127.16c-50.064 0-90.828 42.062-90.828 93.722 0 51.659 40.764 93.721 90.828 93.721h36.332c10.027 0 18.165 8.435 18.165 18.744 0 10.31-8.138 18.745-18.165 18.745H1116v74.977h127.16c50.064 0 90.828-42.062 90.828-93.722 0-51.659-40.764-93.721-90.828-93.721h-36.332c-10.027 0-18.165-8.435-18.165-18.744 0-10.31 8.138-18.745 18.165-18.745M687.761 1193.91l44.796-77.078 44.833 77.077h84.761l-87.231-149.954L862.15 894h-84.76l-44.834 77.077L687.761 894H603l87.195 149.955L603 1193.909zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z' }),
          _react2.default.createElement('path', { d: 'M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z' })
        )
      );
    }
  }]);

  return IconMsExcelLine;
}(_react.Component);

exports.default = IconMsExcelLine;