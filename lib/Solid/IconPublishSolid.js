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

var IconPublishSolid = function (_Component) {
  _inherits(IconPublishSolid, _Component);

  function IconPublishSolid() {
    _classCallCheck(this, IconPublishSolid);

    return _possibleConstructorReturn(this, (IconPublishSolid.__proto__ || Object.getPrototypeOf(IconPublishSolid)).apply(this, arguments));
  }

  _createClass(IconPublishSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPublishSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1351.26 665l157.885 157.861L871.915 1460 458 1046.145l157.884-157.862 256.03 255.994L1351.262 665zm260.58 86.05c.4-7.359.56-14.478.56-21.677C1612.4 471.65 1402.08 262 1143.52 262 956 262 788.88 374.304 715.04 539.88c-11.84-1.2-23.68-1.76-35.52-1.76-199.36 0-363.04 155.578-375.2 351.47C189.36 967.1 118 1097.56 118 1237.78c0 209.97 155.68 390.584 362.16 420.26l802.48.96c284.16 0 515.36-230.367 515.36-513.606 0-153.898-68.56-297.238-186.16-394.344z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPublishSolid;
}(_react.Component);

exports.default = IconPublishSolid;