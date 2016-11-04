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

var IconAssignmentLine = function (_Component) {
  _inherits(IconAssignmentLine, _Component);

  function IconAssignmentLine() {
    _classCallCheck(this, IconAssignmentLine);

    return _possibleConstructorReturn(this, (IconAssignmentLine.__proto__ || Object.getPrototypeOf(IconAssignmentLine)).apply(this, arguments));
  }

  _createClass(IconAssignmentLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAssignmentLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1647.727 1388v76.364c0 42.152-34.287 76.363-76.363 76.363-42.077 0-76.364-34.21-76.364-76.363V1388h152.727zm-76.818 282.865c126.306 0 229.091-102.785 229.091-229.09V578.636L1570.91 235l-229.092 343.636v863.139c0 126.305 102.786 229.09 229.091 229.09zM1036.364 311.364H272.727C188.498 311.364 120 379.862 120 464.09v1069.09c0 84.23 68.498 152.728 152.727 152.728h763.637c84.229 0 152.727-68.498 152.727-152.727V464.09c0-84.23-68.498-152.727-152.727-152.727zM272.727 1533.182V464.09h763.637l.152 1069.09H272.727zm152.728-763.637h458.181V616.818H425.455v152.727zm0 305.455h458.181V922.273H425.455V1075zm0 305.455h305.454v-152.728H425.455v152.728zm1069.09-766.728l76.364-114.545 76.364 114.545v587.848h-152.728V613.727z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAssignmentLine;
}(_react.Component);

exports.default = IconAssignmentLine;