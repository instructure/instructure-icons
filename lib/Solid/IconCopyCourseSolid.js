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

var IconCopyCourseSolid = function (_Component) {
  _inherits(IconCopyCourseSolid, _Component);

  function IconCopyCourseSolid() {
    _classCallCheck(this, IconCopyCourseSolid);

    return _possibleConstructorReturn(this, (IconCopyCourseSolid.__proto__ || Object.getPrototypeOf(IconCopyCourseSolid)).apply(this, arguments));
  }

  _createClass(IconCopyCourseSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCopyCourseSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1560 240V0H120v1760h240V240h1200zM863.44 696.56L966.88 800H680V400H520v480c0 44.16 35.84 80 80 80h366.88l-103.44 103.44 113.12 113.12L1273.12 880 976.56 583.44 863.44 696.56zM631.393 400H520v88.081A562.42 562.42 0 0 1 631.393 400zm577.214 0H1800v1520H520v-648.081C621.641 1375.643 763.305 1440 920 1440c309.28 0 560-250.72 560-560 0-203.706-108.767-382.008-271.393-480z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCopyCourseSolid;
}(_react.Component);

exports.default = IconCopyCourseSolid;