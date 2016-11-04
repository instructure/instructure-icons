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

var IconCommonsLine = function (_Component) {
  _inherits(IconCommonsLine, _Component);

  function IconCommonsLine() {
    _classCallCheck(this, IconCommonsLine);

    return _possibleConstructorReturn(this, (IconCommonsLine.__proto__ || Object.getPrototypeOf(IconCommonsLine)).apply(this, arguments));
  }

  _createClass(IconCommonsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconCommonsLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M670.22 960.444c0-41.213 32.145-73.367 73.32-73.367h621.185V679.04l318.613 281.404-318.613 281.404v-208.037H743.54c-41.176 0-73.32-32.154-73.32-73.367zm537.838-628.799V730.41H743.54c-127.711 0-229.987 102.307-229.987 230.034 0 127.727 102.276 230.034 229.987 230.034h464.517v398.764L1920 960.444l-711.942-628.799z' }),
          _react2.default.createElement('path', { d: 'M156.667 960.444c0-307.63 251.943-557.779 561.024-557.779h237.037v96.744H719.414c-256.538 0-466.084 207.04-466.084 461.035 0 254.212 208.043 461.035 464.36 461.035h235.315v96.744H717.69c-309.08 0-561.024-250.151-561.024-557.779zm561.024 304.368c-170 0-307.694-136.888-307.694-304.368 0-167.045 138.985-304.368 309.417-304.368h391.98V245.998H717.692C322.335 245.998 0 566.038 0 960.444c0 394.404 322.336 714.446 717.69 714.446h391.98v-410.078H717.69z' })
        )
      );
    }
  }]);

  return IconCommonsLine;
}(_react.Component);

exports.default = IconCommonsLine;