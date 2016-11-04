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

var IconPeerGradedSolid = function (_Component) {
  _inherits(IconPeerGradedSolid, _Component);

  function IconPeerGradedSolid() {
    _classCallCheck(this, IconPeerGradedSolid);

    return _possibleConstructorReturn(this, (IconPeerGradedSolid.__proto__ || Object.getPrototypeOf(IconPeerGradedSolid)).apply(this, arguments));
  }

  _createClass(IconPeerGradedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPeerGradedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1840 231.986L1727.959 120l-340.165 339.999-181.69-181.602-112.042 111.986 293.732 293.589zM593.222 736c88.292 0 164.465 41.1 211.208 103.337-77.904 63.412-124.647 150.309-124.647 250.123 0 34.055 5.194 64.586 15.58 95.118-32.892 12.917-65.785 22.311-102.14 22.311-143.691 0-259.682-105.686-259.682-234.857 0-129.172 115.991-234.858 259.681-234.858V736zm432.561 159.703c130.28 0 235.445 105.95 235.445 235.445 0 129.494-105.165 235.444-235.445 235.444-130.28 0-235.444-105.95-235.444-235.444 0-129.495 105.165-235.445 235.444-235.445zm-747.79 258.728c67.648 80.235 160.468 129.005 265.875 132.151-42.478 59.783-69.222 132.151-69.222 210.813v103.833H160v-261.156c0-81.808 48.77-152.603 117.992-187.214v1.573zm1022.597 157.323c69.222 34.61 117.992 105.406 117.992 187.214v261.156H631.968v-261.156c0-81.808 48.77-152.603 117.992-187.214 70.796 83.38 166.763 132.151 275.315 132.151 108.553 0 204.52-50.343 275.315-132.151z' })
        )
      );
    }
  }]);

  return IconPeerGradedSolid;
}(_react.Component);

exports.default = IconPeerGradedSolid;