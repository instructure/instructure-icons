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

var IconQuizStatsAvgLine = function (_Component) {
  _inherits(IconQuizStatsAvgLine, _Component);

  function IconQuizStatsAvgLine() {
    _classCallCheck(this, IconQuizStatsAvgLine);

    return _possibleConstructorReturn(this, (IconQuizStatsAvgLine.__proto__ || Object.getPrototypeOf(IconQuizStatsAvgLine)).apply(this, arguments));
  }

  _createClass(IconQuizStatsAvgLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsAvgLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M962 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zm0-145.455c361.495 0 654.545-293.05 654.545-654.545 0-361.495-293.05-654.545-654.545-654.545-361.495 0-654.545 293.05-654.545 654.545 0 361.495 293.05 654.545 654.545 654.545zm316.206-561.942v48.573c0 5.287-1.9 10.409-5.697 15.365-3.797 4.957-9.403 9.335-16.818 13.135-7.414 3.8-16.275 6.856-26.583 9.17-10.307 2.312-21.971 3.469-34.991 3.469-15.19 0-29.838-1.983-43.944-5.948-14.105-3.965-27.035-9.995-38.79-18.09-11.754-8.096-22.152-18.422-31.193-30.979-9.042-12.556-15.914-27.26-20.616-44.112-19.53 27.756-41.773 49.151-66.728 64.186-24.956 15.035-53.347 22.552-85.174 22.552-21.7 0-41.05-2.644-58.049-7.93-16.999-5.287-32.008-13.052-45.028-23.296 3.616 14.209 6.058 28.83 7.324 43.865 1.265 15.034 1.898 28.995 1.898 41.882v118.954H747.09c-18.807 0-33.365-4.378-43.672-13.134-10.308-8.757-15.462-21.396-15.462-37.917v-623.52h134v300.36c0 30.73 7.957 55.347 23.87 73.85 15.914 18.505 39.423 27.757 70.527 27.757 28.934 0 53.618-7.27 74.052-21.808 20.435-14.54 36.8-35.026 49.097-61.46v-318.7h134v358.351c0 22.47 5.787 38.99 17.36 49.565 11.574 10.573 27.488 15.86 47.741 15.86h39.604z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconQuizStatsAvgLine;
}(_react.Component);

exports.default = IconQuizStatsAvgLine;