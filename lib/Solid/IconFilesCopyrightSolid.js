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

var IconFilesCopyrightSolid = function (_Component) {
  _inherits(IconFilesCopyrightSolid, _Component);

  function IconFilesCopyrightSolid() {
    _classCallCheck(this, IconFilesCopyrightSolid);

    return _possibleConstructorReturn(this, (IconFilesCopyrightSolid.__proto__ || Object.getPrototypeOf(IconFilesCopyrightSolid)).apply(this, arguments));
  }

  _createClass(IconFilesCopyrightSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFilesCopyrightSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 163c440.143 0 797 356.857 797 797s-356.857 797-797 797-797-356.857-797-797 356.857-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
          _react2.default.createElement('path', { d: 'M1174.924 812.077l-108.79 56.72c-11.69-24.176-25.903-41.179-42.773-50.876-17.002-9.696-32.677-14.545-47.155-14.545-72.527 0-108.857 47.953-108.857 143.925 0 43.636 9.232 78.505 27.563 104.673 18.33 26.234 45.429 39.318 81.294 39.318 47.288 0 80.696-23.245 100.023-69.803l100.09 50.875c-21.253 39.783-50.742 71.066-88.467 93.78-37.725 22.847-79.301 34.205-124.797 34.205-72.527 0-130.973-22.316-175.473-66.948-44.432-44.5-66.682-106.533-66.682-186.033 0-77.575 22.449-139.143 67.48-184.639 44.897-45.628 101.75-68.409 170.358-68.409 100.621-.066 172.617 39.252 216.12 117.757h.066z' })
        )
      );
    }
  }]);

  return IconFilesCopyrightSolid;
}(_react.Component);

exports.default = IconFilesCopyrightSolid;