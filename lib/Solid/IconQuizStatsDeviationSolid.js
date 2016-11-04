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

var IconQuizStatsDeviationSolid = function (_Component) {
  _inherits(IconQuizStatsDeviationSolid, _Component);

  function IconQuizStatsDeviationSolid() {
    _classCallCheck(this, IconQuizStatsDeviationSolid);

    return _possibleConstructorReturn(this, (IconQuizStatsDeviationSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsDeviationSolid)).apply(this, arguments));
  }

  _createClass(IconQuizStatsDeviationSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsDeviationSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M1128.8 1189.04c-39.36 52.08-99.44 78.08-180.24 78.08-78.16 0-138-24.96-179.44-74.88-41.52-49.92-62.24-122.88-62.24-219.04 0-48.56 5.52-91.68 16.48-129.28 10.96-37.68 28.48-69.28 52.56-94.88 24.08-25.68 55.04-45.12 92.72-58.48 37.76-13.36 83.12-20 136.08-20h40.96c24.08 8 45.12 21.04 63.04 39.2 17.92 18.16 32.64 40.16 44.16 66.08 11.52 25.92 20.24 54.88 26.08 86.88 5.92 32 8.88 65.68 8.88 100.88 0 98.24-19.68 173.36-59.04 225.44zM1004.72 560c-71.68 0-135.28 9.52-190.64 28.48-55.44 18.96-102 46-139.68 81.28-37.76 35.2-66.24 78.16-85.52 128.88S560 906.48 560 970c0 64.08 9.36 121.36 28.08 171.76 18.72 50.48 45.04 93.36 79.04 128.56 34 35.2 74.96 62.08 122.88 80.48 47.92 18.4 101.04 27.6 159.36 27.6 59.92 0 113.76-10 161.36-30 47.68-20 88.08-48.16 121.28-84.48 33.12-36.32 58.56-79.44 76.24-129.36 17.68-49.92 26.48-105.04 26.48-165.36 0-69.92-11.36-129.68-34.08-179.36-22.8-49.6-54.72-89.44-96-119.28h193.52c7.52 0 14.16-1.36 20.08-4 5.92-2.72 10.8-6.16 14.88-10.4 4-4.32 7.04-8.96 9.2-14.08 2.16-5.04 3.2-10 3.2-14.8V560h-440.8zM960 1600c-353.52 0-640-286.48-640-640 0-353.44 286.48-640 640-640 353.44 0 640 286.48 640 640s-286.48 640-640 640zm0-1440c-442 0-800 358.24-800 800 0 441.92 358.16 800 800 800 441.92 0 800-358.16 800-800 0-441.92-358.24-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconQuizStatsDeviationSolid;
}(_react.Component);

exports.default = IconQuizStatsDeviationSolid;