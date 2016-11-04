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

var IconFilesObtainedPermissionSolid = function (_Component) {
  _inherits(IconFilesObtainedPermissionSolid, _Component);

  function IconFilesObtainedPermissionSolid() {
    _classCallCheck(this, IconFilesObtainedPermissionSolid);

    return _possibleConstructorReturn(this, (IconFilesObtainedPermissionSolid.__proto__ || Object.getPrototypeOf(IconFilesObtainedPermissionSolid)).apply(this, arguments));
  }

  _createClass(IconFilesObtainedPermissionSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFilesObtainedPermissionSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 163c440.183 0 797 356.817 797 797s-356.817 797-797 797-797-356.817-797-797 356.817-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
          _react2.default.createElement('path', { d: 'M848.951 551.139c0-73.723 37.008-110.65 111.049-110.65s110.996 36.874 110.996 110.677c0 72.898-37.008 109.348-110.996 109.348s-111.049-36.45-111.049-109.322v-.053zm325.973 201.8v320.926h-91.07v381.072H836.199v-381.046h-91.07V752.966c0-14.027 4.994-25.903 14.93-35.706a49.928 49.928 0 0 1 36.29-14.718h327.355c13.283 0 25.158 4.889 35.6 14.718 10.36 9.83 15.62 21.705 15.62 35.706v-.027z' })
        )
      );
    }
  }]);

  return IconFilesObtainedPermissionSolid;
}(_react.Component);

exports.default = IconFilesObtainedPermissionSolid;