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

var IconRemoveFromCollectionLine = function (_Component) {
  _inherits(IconRemoveFromCollectionLine, _Component);

  function IconRemoveFromCollectionLine() {
    _classCallCheck(this, IconRemoveFromCollectionLine);

    return _possibleConstructorReturn(this, (IconRemoveFromCollectionLine.__proto__ || Object.getPrototypeOf(IconRemoveFromCollectionLine)).apply(this, arguments));
  }

  _createClass(IconRemoveFromCollectionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconRemoveFromCollectionLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M880 409.32v686.8h160v-686.8l183.44 183.36 113.12-113.12L960 103 583.44 479.56l113.12 113.12L880 409.32zm720 1246.832H320v-320h286.88l160 160h386.24l160-160H1600v320zm-353.12-480l-160 160H833.12l-160-160H160v640h1600v-640h-513.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRemoveFromCollectionLine;
}(_react.Component);

exports.default = IconRemoveFromCollectionLine;