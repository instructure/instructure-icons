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

var IconAddressBookLine = function (_Component) {
  _inherits(IconAddressBookLine, _Component);

  function IconAddressBookLine() {
    _classCallCheck(this, IconAddressBookLine);

    return _possibleConstructorReturn(this, (IconAddressBookLine.__proto__ || Object.getPrototypeOf(IconAddressBookLine)).apply(this, arguments));
  }

  _createClass(IconAddressBookLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAddressBookLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M320 160h960v320H320V160zm160 160h240v160H480V320zm400 0h240v160H880V320zM320 480c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160H320zm0 160h1280v960H320V640zm640 160c-88 0-160 71.68-160 160s72 160 160 160 160-71.68 160-160-72-160-160-160zm-209 320c-106 5.333-191 98.133-191 213.333V1440h800v-106.667c0-115.2-84-208-191-213.333-54 65.067-128 106.667-209 106.667s-155-41.6-209-106.667z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAddressBookLine;
}(_react.Component);

exports.default = IconAddressBookLine;