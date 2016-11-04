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

var IconMoreSolid = function (_Component) {
  _inherits(IconMoreSolid, _Component);

  function IconMoreSolid() {
    _classCallCheck(this, IconMoreSolid);

    return _possibleConstructorReturn(this, (IconMoreSolid.__proto__ || Object.getPrototypeOf(IconMoreSolid)).apply(this, arguments));
  }

  _createClass(IconMoreSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconMoreSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M982.111 517.222c-97.82 0-176.889-79.346-176.889-177.11 0-97.855 79.07-177.112 176.89-177.112 97.73 0 176.888 79.257 176.888 177.111 0 97.765-79.158 177.111-176.889 177.111M982.111 1137.111c-97.82 0-176.889-79.346-176.889-177.111 0-97.854 79.07-177.111 176.89-177.111 97.73 0 176.888 79.257 176.888 177.111 0 97.765-79.158 177.111-176.889 177.111M982.111 1757c-97.82 0-176.889-79.346-176.889-177.111 0-97.854 79.07-177.111 176.89-177.111 97.73 0 176.888 79.257 176.888 177.11 0 97.766-79.158 177.112-176.889 177.112' })
        )
      );
    }
  }]);

  return IconMoreSolid;
}(_react.Component);

exports.default = IconMoreSolid;