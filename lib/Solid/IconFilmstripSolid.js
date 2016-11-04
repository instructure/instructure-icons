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

var IconFilmstripSolid = function (_Component) {
  _inherits(IconFilmstripSolid, _Component);

  function IconFilmstripSolid() {
    _classCallCheck(this, IconFilmstripSolid);

    return _possibleConstructorReturn(this, (IconFilmstripSolid.__proto__ || Object.getPrototypeOf(IconFilmstripSolid)).apply(this, arguments));
  }

  _createClass(IconFilmstripSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFilmstripSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M815.09 887.556v434.666l362.274-217.333z' }),
          _react2.default.createElement('path', { d: 'M1322.273 597.778l108.682-144.89h181.136v144.89h-289.818zm289.89 869.333H307.91V742.667h1304.182l.072 724.444zM307.91 452.89h362.273L561.5 597.778H307.91v-144.89zm434.727 144.889l108.682-144.89h398.5l-108.682 144.89h-398.5zM163 308v1159.111C163 1547.017 227.992 1612 307.91 1612h1304.18c79.918 0 144.91-64.983 144.91-144.889V308H163z' })
        )
      );
    }
  }]);

  return IconFilmstripSolid;
}(_react.Component);

exports.default = IconFilmstripSolid;