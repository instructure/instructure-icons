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

var IconRemoveFromCollectionSolid = function (_Component) {
  _inherits(IconRemoveFromCollectionSolid, _Component);

  function IconRemoveFromCollectionSolid() {
    _classCallCheck(this, IconRemoveFromCollectionSolid);

    return _possibleConstructorReturn(this, (IconRemoveFromCollectionSolid.__proto__ || Object.getPrototypeOf(IconRemoveFromCollectionSolid)).apply(this, arguments));
  }

  _createClass(IconRemoveFromCollectionSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconRemoveFromCollectionSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1336.528 519.56L959.968 143l-376.56 376.56 113.12 113.12 183.44-183.36v766.8h160v-766.8l183.44 183.36 113.12-113.12zm-67.888 696.584c-35.68 137.76-159.76 240-308.64 240-148.96 0-273.04-102.24-308.72-240H160v560h1600v-560h-491.36z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRemoveFromCollectionSolid;
}(_react.Component);

exports.default = IconRemoveFromCollectionSolid;