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

var IconAppleSolid = function (_Component) {
  _inherits(IconAppleSolid, _Component);

  function IconAppleSolid() {
    _classCallCheck(this, IconAppleSolid);

    return _possibleConstructorReturn(this, (IconAppleSolid.__proto__ || Object.getPrototypeOf(IconAppleSolid)).apply(this, arguments));
  }

  _createClass(IconAppleSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAppleSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1476.17 1015.164c-2.363-222.864 195.357-329.786 204.183-335.14-111.114-151.289-284.169-172.043-345.794-174.39-147.285-13.86-287.4 80.669-362.106 80.669-74.55 0-189.92-78.615-312.066-76.562-160.525 2.2-308.52 86.829-391.185 220.665-166.83 269.358-42.712 668.299 119.861 886.763 79.435 106.922 174.158 227.044 298.511 222.717 119.783-4.473 165.017-72.088 309.86-72.088 144.842 0 185.505 72.088 312.223 69.888 128.845-2.2 210.487-108.975 289.37-216.19 91.256-124.01 128.766-244.132 130.973-250.292-2.837-1.246-251.307-89.761-253.83-356.04zm-238.146-654.072c66.038-74.508 110.562-177.91 98.426-281.092-95.117 3.593-210.329 58.961-278.573 133.323-61.231 65.927-114.818 171.236-100.397 272.291 106.15 7.7 214.506-50.16 280.544-124.522z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAppleSolid;
}(_react.Component);

exports.default = IconAppleSolid;