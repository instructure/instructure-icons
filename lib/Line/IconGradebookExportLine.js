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

var IconGradebookExportLine = function (_Component) {
  _inherits(IconGradebookExportLine, _Component);

  function IconGradebookExportLine() {
    _classCallCheck(this, IconGradebookExportLine);

    return _possibleConstructorReturn(this, (IconGradebookExportLine.__proto__ || Object.getPrototypeOf(IconGradebookExportLine)).apply(this, arguments));
  }

  _createClass(IconGradebookExportLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconGradebookExportLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1384.907 446.872l-113.111 113.12 159.988 160H984.938c-176.466 0-319.975 143.52-319.975 320v80H824.95v-80c0-88.16 71.754-160 159.987-160h446.846l-159.988 160 113.111 113.12L1738 799.992l-353.093-353.12zM1064.932 1440H344.988V480h879.932V320H185v1280h1039.92v-400h-159.988v240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconGradebookExportLine;
}(_react.Component);

exports.default = IconGradebookExportLine;