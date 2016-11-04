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

var IconQuestionSolid = function (_Component) {
  _inherits(IconQuestionSolid, _Component);

  function IconQuestionSolid() {
    _classCallCheck(this, IconQuestionSolid);

    return _possibleConstructorReturn(this, (IconQuestionSolid.__proto__ || Object.getPrototypeOf(IconQuestionSolid)).apply(this, arguments));
  }

  _createClass(IconQuestionSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconQuestionSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1260.48 770.64c0 52.24-12.8 96.24-38.48 131.92v-.08c-15.04 21.76-44 49.44-86.64 83.2l-42.16 33.12c-22.96 18.16-25.68 22.64-33.28 46.8-4.64 15.2.4 69.84 0 105.52H860c2.4-71.36 14.72-127.12 24.88-153.04 10.32-25.92 49.28-58.56 92-92.32L1020.4 890c14.16-10.8 25.6-23.44 34.24-36.24 15.76-22.08 23.68-46.72 23.68-73.28 0-30.56-8.8-58.56-26.48-83.68-17.52-25.04-49.76-37.76-96.4-37.76-45.92 0-78.48 15.68-97.68 46.64-19.28 30.96-22.56 72.88-22.56 96.72H656.96c4.8-107.04 44.16-195.92 118.48-243.68 46.8-30.56 104.4-46 172.64-46 89.6 0 164.16 21.6 223.44 65.04 59.28 43.44 88.96 107.6 88.96 192.88M1059.92 1360c0 55.2-44.72 100-99.92 100a99.821 99.821 0 0 1-86.56-50 100.113 100.113 0 0 1 0-100c17.84-30.88 50.8-49.92 86.56-49.92 55.2 0 99.92 44.72 99.92 99.92M960 1600c-353.44 0-640-286.48-640-640 0-353.44 286.56-640 640-640s640 286.56 640 640c0 353.52-286.56 640-640 640m0-1440c-441.84 0-800 358.16-800 800s358.16 800 800 800 800-358.16 800-800-358.16-800-800-800', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconQuestionSolid;
}(_react.Component);

exports.default = IconQuestionSolid;