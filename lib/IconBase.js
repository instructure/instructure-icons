'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseIcon = function (_Component) {
  _inherits(BaseIcon, _Component);

  function BaseIcon(props) {
    _classCallCheck(this, BaseIcon);

    var _this = _possibleConstructorReturn(this, (BaseIcon.__proto__ || Object.getPrototypeOf(BaseIcon)).call(this));

    _this.titleId = props.name + '__' + _shortid2.default.generate();
    _this.descId = props.name + '__' + _shortid2.default.generate();
    return _this;
  }

  _createClass(BaseIcon, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = this.props.title;

      return title ? _react2.default.createElement(
        'title',
        { id: this.titleId },
        title
      ) : null;
    }
  }, {
    key: 'renderDesc',
    value: function renderDesc() {
      var desc = this.props.desc;

      return desc ? _react2.default.createElement(
        'desc',
        { id: this.descId },
        desc
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          width = _props.width,
          height = _props.height,
          viewBox = _props.viewBox,
          props = _objectWithoutProperties(_props, ['title', 'width', 'height', 'viewBox']);

      delete props.name;
      delete props.children;
      delete props.desc;

      var style = {
        fill: 'currentColor'
      };

      return _react2.default.createElement(
        'svg',
        _extends({}, props, {
          style: style,
          width: width,
          height: height,
          viewBox: viewBox,
          'aria-hidden': title ? null : 'true',
          'aria-labelledby': this.labelledBy,
          role: this.role }),
        this.renderTitle(),
        this.renderDesc(),
        _react2.default.createElement(
          'g',
          { role: 'presentation' },
          this.props.children
        )
      );
    }
  }, {
    key: 'role',
    get: function get() {
      if (this.props.title) {
        return 'img';
      } else {
        return 'presentation';
      }
    }
  }, {
    key: 'labelledBy',
    get: function get() {
      var ids = [];

      if (this.props.title) {
        ids.push(this.titleId);
      }

      if (this.props.desc) {
        ids.push(this.descId);
      }

      return ids.length > 0 ? ids.join(' ') : null;
    }
  }]);

  return BaseIcon;
}(_react.Component);

BaseIcon.propTypes = {
  name: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node.isRequired,
  viewBox: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  desc: _react.PropTypes.string,
  width: _react.PropTypes.string,
  height: _react.PropTypes.string
};
BaseIcon.defaultProps = {
  width: '1em',
  height: '1em'
};
exports.default = BaseIcon;