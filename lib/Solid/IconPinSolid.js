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

var IconPinSolid = function (_Component) {
  _inherits(IconPinSolid, _Component);

  function IconPinSolid() {
    _classCallCheck(this, IconPinSolid);

    return _possibleConstructorReturn(this, (IconPinSolid.__proto__ || Object.getPrototypeOf(IconPinSolid)).apply(this, arguments));
  }

  _createClass(IconPinSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconPinSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M191.093 847.177c-35.662 49.246-24.649 118.078 24.598 153.739s118.078 24.648 153.74-24.598l76.869-76.87 307.478 307.479-153.739 153.739c-84.557 84.556-84.557 222.922 0 307.478l461.218-461.217 461.217 461.217 221.385 86.094-67.645-239.833-461.218-461.218 461.218-461.217c-84.557-84.557-222.922-84.557-307.479 0l-153.739 153.739L907.518 438.23l76.87-76.87c42.453-42.453 42.453-111.284 0-153.738-42.455-42.454-111.286-42.454-153.74 0L215.69 822.579a108.71 108.71 0 0 0-13.837 13.836 108.71 108.71 0 0 0-9.224 9.224l-1.537 1.538z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPinSolid;
}(_react.Component);

exports.default = IconPinSolid;