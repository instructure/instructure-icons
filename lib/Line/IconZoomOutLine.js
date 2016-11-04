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

var IconZoomOutLine = function (_Component) {
  _inherits(IconZoomOutLine, _Component);

  function IconZoomOutLine() {
    _classCallCheck(this, IconZoomOutLine);

    return _possibleConstructorReturn(this, (IconZoomOutLine.__proto__ || Object.getPrototypeOf(IconZoomOutLine)).apply(this, arguments));
  }

  _createClass(IconZoomOutLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconZoomOutLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825zM537.64 822.437h480v-158.32h-480v158.32z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconZoomOutLine;
}(_react.Component);

exports.default = IconZoomOutLine;