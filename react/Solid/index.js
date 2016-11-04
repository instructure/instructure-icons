(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InstructureIconsSolid"] = factory(require("react"));
	else
		root["InstructureIconsSolid"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(220);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAddSolid = function (_Component) {
	  _inherits(IconAddSolid, _Component);

	  function IconAddSolid() {
	    _classCallCheck(this, IconAddSolid);

	    return _possibleConstructorReturn(this, (IconAddSolid.__proto__ || Object.getPrototypeOf(IconAddSolid)).apply(this, arguments));
	  }

	  _createClass(IconAddSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAddSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1600c-352.88 0-640-287.12-640-640s287.12-640 640-640 640 287.12 640 640-287.12 640-640 640m0-1440c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800m80 400H880v320H560v160h320v320h160v-320h320V880h-320V560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAddSolid;
	}(_react.Component);

	exports.default = IconAddSolid;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _shortid = __webpack_require__(4);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var alphabet = __webpack_require__(6);
	var encode = __webpack_require__(8);
	var decode = __webpack_require__(10);
	var isValid = __webpack_require__(11);

	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;

	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;

	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(12) || 0;

	// Counter is used when shortid is called multiple times in one second.
	var counter;

	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;

	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {

	    var str = '';

	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }

	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);

	    return str;
	}


	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}

	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}

	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }

	    return alphabet.shuffled();
	}


	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomFromSeed = __webpack_require__(7);

	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;

	var shuffled;

	function reset() {
	    shuffled = false;
	}

	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }

	    if (_alphabet_ === alphabet) {
	        return;
	    }

	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }

	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });

	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }

	    alphabet = _alphabet_;
	    reset();
	}

	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}

	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}

	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }

	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;

	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}

	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}

	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}

	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

	var seed = 1;

	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}

	function setSeed(_seed_) {
	    seed = _seed_;
	}

	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomByte = __webpack_require__(9);

	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;

	    var str = '';

	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}

	module.exports = encode;


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}

	module.exports = randomByte;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(6);

	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}

	module.exports = decode;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(6);

	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }

	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}

	module.exports = isShortId;


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = 0;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAddressBookSolid = function (_Component) {
	  _inherits(IconAddressBookSolid, _Component);

	  function IconAddressBookSolid() {
	    _classCallCheck(this, IconAddressBookSolid);

	    return _possibleConstructorReturn(this, (IconAddressBookSolid.__proto__ || Object.getPrototypeOf(IconAddressBookSolid)).apply(this, arguments));
	  }

	  _createClass(IconAddressBookSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAddressBookSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M320 160h400v240H320V160zm480 0h400v240H800V160zM320 480c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160H320zm640 240c-88 0-160 71.68-160 160s72 160 160 160 160-71.68 160-160-72-160-160-160zm-209 400c-106 5.333-191 98.133-191 213.333V1440h800v-106.667c0-115.2-84-208-191-213.333-54 65.067-128 106.667-209 106.667s-155-41.6-209-106.667z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAddressBookSolid;
	}(_react.Component);

	exports.default = IconAddressBookSolid;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAnalyticsSolid = function (_Component) {
	  _inherits(IconAnalyticsSolid, _Component);

	  function IconAnalyticsSolid() {
	    _classCallCheck(this, IconAnalyticsSolid);

	    return _possibleConstructorReturn(this, (IconAnalyticsSolid.__proto__ || Object.getPrototypeOf(IconAnalyticsSolid)).apply(this, arguments));
	  }

	  _createClass(IconAnalyticsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAnalyticsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M879.983 764.832v-682.8c-182.804 16.48-348.967 89.52-482.33 200.48l482.33 482.32zM1039.985 82v956c0 21.2-8.4 41.52-23.44 56.56l-574.25 574.16C587.657 1774.8 766.3 1838 959.984 1838 1445.993 1838 1840 1444 1840 958c0-459.04-351.526-835.52-800.015-876zM249.763 440.88C143.601 586.08 80 764.24 80 958c0 214.16 76.641 410.32 203.844 562.96L806.894 998l-557.13-557.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAnalyticsSolid;
	}(_react.Component);

	exports.default = IconAnalyticsSolid;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAndroidSolid = function (_Component) {
	  _inherits(IconAndroidSolid, _Component);

	  function IconAndroidSolid() {
	    _classCallCheck(this, IconAndroidSolid);

	    return _possibleConstructorReturn(this, (IconAndroidSolid.__proto__ || Object.getPrototypeOf(IconAndroidSolid)).apply(this, arguments));
	  }

	  _createClass(IconAndroidSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAndroidSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1528.78 785.776H392.185c-44.814 0-81.185 36.371-81.185 81.186v568.297h162.37V948.147h81.186v487.112c0 44.895 36.37 81.185 81.185 81.185h81.186V1760h162.37v-243.556h162.37V1760h162.371v-243.556h81.186c44.814 0 81.185-36.29 81.185-81.185V948.147h81.185v487.112h162.37V866.962c0-44.896-36.289-81.186-81.184-81.186zM554.637 623.325c0 44.895 36.371 81.185 81.185 81.185h649.483c44.814 0 81.185-36.29 81.185-81.185 0-82.566-25.086-159.286-67.627-223.422l125.025-125.026L1309.092 160l-125.025 125.025c-64.218-42.46-140.938-67.546-223.585-67.546-82.646 0-159.285 25.168-223.503 67.628L611.954 160.08 497.158 274.877l125.025 125.026c-42.46 64.136-67.546 140.856-67.546 223.422z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAndroidSolid;
	}(_react.Component);

	exports.default = IconAndroidSolid;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAnnouncementSolid = function (_Component) {
	  _inherits(IconAnnouncementSolid, _Component);

	  function IconAnnouncementSolid() {
	    _classCallCheck(this, IconAnnouncementSolid);

	    return _possibleConstructorReturn(this, (IconAnnouncementSolid.__proto__ || Object.getPrototypeOf(IconAnnouncementSolid)).apply(this, arguments));
	  }

	  _createClass(IconAnnouncementSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAnnouncementSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1648.996 160h-91.605L682.386 523.602c-12.241 4.88-31.922 7.36-46.643 7.36H271.004c-44.162 0-80.004 35.84-80.004 80v328.883c0 44.24 35.842 80 80.004 80h143.608l253.053 668.244c27.041 61.44 108.085 88.48 169.529 61.44 61.443-27.04 88.484-108.08 61.443-169.52l-184.25-437.283c7.36-34.4 31.922-54.08 68.724-54.08v-7.36l774.28 307.121h91.605c44.162 0 80.004-35.84 80.004-80V240c0-44.16-35.842-80-80.004-80', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAnnouncementSolid;
	}(_react.Component);

	exports.default = IconAnnouncementSolid;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowDownSolid = function (_Component) {
	  _inherits(IconArrowDownSolid, _Component);

	  function IconArrowDownSolid() {
	    _classCallCheck(this, IconArrowDownSolid);

	    return _possibleConstructorReturn(this, (IconArrowDownSolid.__proto__ || Object.getPrototypeOf(IconArrowDownSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowDownSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowDownSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M847.496 1491.284c62.15 91.308 162.913 91.313 225.067 0l657.494-965.956C1792.207 434.02 1753.05 360 1642.59 360H277.468c-110.456 0-149.62 74.015-87.466 165.328l657.494 965.956z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowDownSolid;
	}(_react.Component);

	exports.default = IconArrowDownSolid;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowLeftSolid = function (_Component) {
	  _inherits(IconArrowLeftSolid, _Component);

	  function IconArrowLeftSolid() {
	    _classCallCheck(this, IconArrowLeftSolid);

	    return _possibleConstructorReturn(this, (IconArrowLeftSolid.__proto__ || Object.getPrototypeOf(IconArrowLeftSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowLeftSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowLeftSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M428.663 847.279c-91.443 62.263-91.658 163.065 0 225.475l965.765 657.59c91.443 62.263 165.572 23.337 165.572-87.283V276.971c0-110.467-73.914-149.692-165.572-87.282L428.663 847.28z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowLeftSolid;
	}(_react.Component);

	exports.default = IconArrowLeftSolid;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowOpenDownSolid = function (_Component) {
	  _inherits(IconArrowOpenDownSolid, _Component);

	  function IconArrowOpenDownSolid() {
	    _classCallCheck(this, IconArrowOpenDownSolid);

	    return _possibleConstructorReturn(this, (IconArrowOpenDownSolid.__proto__ || Object.getPrototypeOf(IconArrowOpenDownSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowOpenDownSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowOpenDownSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M958 1056.43L438.043 536.402c-64.444-64.453-168.117-64.45-232.062-.497-64.39 64.4-63.722 167.867.497 232.095l616.513 616.6c37.041 37.046 87.042 52.798 135.009 47.352 47.967 5.446 97.968-10.306 135.009-47.352l616.513-616.6c64.22-64.228 64.887-167.695.497-232.095-63.945-63.953-167.618-63.956-232.062.497L958 1056.431z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowOpenDownSolid;
	}(_react.Component);

	exports.default = IconArrowOpenDownSolid;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowOpenLeftSolid = function (_Component) {
	  _inherits(IconArrowOpenLeftSolid, _Component);

	  function IconArrowOpenLeftSolid() {
	    _classCallCheck(this, IconArrowOpenLeftSolid);

	    return _possibleConstructorReturn(this, (IconArrowOpenLeftSolid.__proto__ || Object.getPrototypeOf(IconArrowOpenLeftSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowOpenLeftSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowOpenLeftSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M863.702 960l520.212-519.957c64.477-64.444 64.474-168.117.498-232.062-64.423-64.39-167.926-63.722-232.177.497L535.42 824.991c-37.06 37.041-52.817 87.042-47.37 135.009-5.447 47.967 10.31 97.968 47.37 135.009l616.816 616.513c64.251 64.22 167.754 64.887 232.177.497 63.976-63.945 63.979-167.618-.498-232.062L863.702 960z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowOpenLeftSolid;
	}(_react.Component);

	exports.default = IconArrowOpenLeftSolid;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowOpenRightSolid = function (_Component) {
	  _inherits(IconArrowOpenRightSolid, _Component);

	  function IconArrowOpenRightSolid() {
	    _classCallCheck(this, IconArrowOpenRightSolid);

	    return _possibleConstructorReturn(this, (IconArrowOpenRightSolid.__proto__ || Object.getPrototypeOf(IconArrowOpenRightSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowOpenRightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowOpenRightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1055.631 960L535.42 440.043c-64.477-64.444-64.474-168.117-.498-232.062 64.423-64.39 167.926-63.722 232.177.497l616.816 616.513c37.06 37.041 52.817 87.042 47.37 135.009 5.447 47.967-10.31 97.968-47.37 135.009l-616.816 616.513c-64.251 64.22-167.754 64.887-232.177.497-63.976-63.945-63.979-167.618.498-232.062L1055.63 960z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowOpenRightSolid;
	}(_react.Component);

	exports.default = IconArrowOpenRightSolid;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowOpenUpSolid = function (_Component) {
	  _inherits(IconArrowOpenUpSolid, _Component);

	  function IconArrowOpenUpSolid() {
	    _classCallCheck(this, IconArrowOpenUpSolid);

	    return _possibleConstructorReturn(this, (IconArrowOpenUpSolid.__proto__ || Object.getPrototypeOf(IconArrowOpenUpSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowOpenUpSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowOpenUpSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 863.702l-519.957 520.212c-64.444 64.477-168.117 64.474-232.062.498-64.39-64.423-63.722-167.926.497-232.177L824.991 535.42c37.041-37.06 87.042-52.817 135.009-47.37 47.967-5.447 97.968 10.31 135.009 47.37l616.513 616.816c64.22 64.251 64.887 167.754.497 232.177-63.945 63.976-167.618 63.979-232.062-.498L960 863.702z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowOpenUpSolid;
	}(_react.Component);

	exports.default = IconArrowOpenUpSolid;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowRightSolid = function (_Component) {
	  _inherits(IconArrowRightSolid, _Component);

	  function IconArrowRightSolid() {
	    _classCallCheck(this, IconArrowRightSolid);

	    return _possibleConstructorReturn(this, (IconArrowRightSolid.__proto__ || Object.getPrototypeOf(IconArrowRightSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowRightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowRightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1491.337 847.279c91.443 62.263 91.658 163.065 0 225.475l-965.765 657.59C434.129 1792.607 360 1753.68 360 1643.06V276.971c0-110.467 73.914-149.692 165.572-87.282l965.765 657.59z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowRightSolid;
	}(_react.Component);

	exports.default = IconArrowRightSolid;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconArrowUpSolid = function (_Component) {
	  _inherits(IconArrowUpSolid, _Component);

	  function IconArrowUpSolid() {
	    _classCallCheck(this, IconArrowUpSolid);

	    return _possibleConstructorReturn(this, (IconArrowUpSolid.__proto__ || Object.getPrototypeOf(IconArrowUpSolid)).apply(this, arguments));
	  }

	  _createClass(IconArrowUpSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconArrowUpSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M847.279 428.663c62.263-91.443 163.065-91.658 225.475 0l657.59 965.765c62.263 91.443 23.337 165.572-87.283 165.572H276.971c-110.467 0-149.692-73.914-87.282-165.572l657.59-965.765z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconArrowUpSolid;
	}(_react.Component);

	exports.default = IconArrowUpSolid;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAssignmentSolid = function (_Component) {
	  _inherits(IconAssignmentSolid, _Component);

	  function IconAssignmentSolid() {
	    _classCallCheck(this, IconAssignmentSolid);

	    return _possibleConstructorReturn(this, (IconAssignmentSolid.__proto__ || Object.getPrototypeOf(IconAssignmentSolid)).apply(this, arguments));
	  }

	  _createClass(IconAssignmentSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAssignmentSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1480 1520V800h320v720c0 88.32-71.68 160-160 160s-160-71.68-160-160zm160-1120l160 240h-320l160-240zm-560-160H280c-88.24 0-160 71.76-160 160v1120c0 88.24 71.76 160 160 160h800c88.24 0 160-71.76 160-160V400c0-88.24-71.76-160-160-160zm-80 480H360V560h640v160zm0 320H360V880h640v160zm-240 320H360v-160h400v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAssignmentSolid;
	}(_react.Component);

	exports.default = IconAssignmentSolid;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconAudioSolid = function (_Component) {
	  _inherits(IconAudioSolid, _Component);

	  function IconAudioSolid() {
	    _classCallCheck(this, IconAudioSolid);

	    return _possibleConstructorReturn(this, (IconAudioSolid.__proto__ || Object.getPrototypeOf(IconAudioSolid)).apply(this, arguments));
	  }

	  _createClass(IconAudioSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconAudioSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 120c-220.96 0-400 179.04-400 400 0 220.88 179.04 400 400 400s400-179.12 400-400c0-220.96-179.04-400-400-400zm-210.8 918.56l40.16 601.76C795.2 1728.16 872 1800 960 1800c88 0 164.8-71.84 170.64-159.68l40.16-601.76c-65.12 26.48-136.16 41.44-210.8 41.44-74.64 0-145.68-14.96-210.8-41.44zM1040 1320c0 44.16-35.84 80-80 80s-80-35.84-80-80 35.84-80 80-80 80 35.84 80 80z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconAudioSolid;
	}(_react.Component);

	exports.default = IconAudioSolid;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconBookmarkSolid = function (_Component) {
	  _inherits(IconBookmarkSolid, _Component);

	  function IconBookmarkSolid() {
	    _classCallCheck(this, IconBookmarkSolid);

	    return _possibleConstructorReturn(this, (IconBookmarkSolid.__proto__ || Object.getPrototypeOf(IconBookmarkSolid)).apply(this, arguments));
	  }

	  _createClass(IconBookmarkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconBookmarkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1520 720h-320V480c0-88.24 71.76-160 160-160s160 71.76 160 160v240zm-160-560H560c-176.48 0-320 143.52-320 320v1200c0 32.32 19.52 61.52 49.36 73.92 29.92 12.32 64.32 5.44 87.2-17.36L720 1393.12l343.44 343.44A80.027 80.027 0 0 0 1120 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92V880h400c44.16 0 80-35.84 80-80V480c0-176.48-143.52-320-320-320z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconBookmarkSolid;
	}(_react.Component);

	exports.default = IconBookmarkSolid;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconBoxSolid = function (_Component) {
	  _inherits(IconBoxSolid, _Component);

	  function IconBoxSolid() {
	    _classCallCheck(this, IconBoxSolid);

	    return _possibleConstructorReturn(this, (IconBoxSolid.__proto__ || Object.getPrototypeOf(IconBoxSolid)).apply(this, arguments));
	  }

	  _createClass(IconBoxSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconBoxSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M398 0H78C33.84 0-2 35.84-2 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zM398 1440H78c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm-1680-80h160V560H158v800zM558 320h800V160H558v160zm1040 1040h160V560h-160v800zM558 1760h800v-160H558v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconBoxSolid;
	}(_react.Component);

	exports.default = IconBoxSolid;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCalendarAddSolid = function (_Component) {
	  _inherits(IconCalendarAddSolid, _Component);

	  function IconCalendarAddSolid() {
	    _classCallCheck(this, IconCalendarAddSolid);

	    return _possibleConstructorReturn(this, (IconCalendarAddSolid.__proto__ || Object.getPrototypeOf(IconCalendarAddSolid)).apply(this, arguments));
	  }

	  _createClass(IconCalendarAddSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCalendarAddSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1600 1480h-240v240h-160v-240H960v-160h240v-240h160v240h240v160zm0-1160h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V480c0-88.4-71.6-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCalendarAddSolid;
	}(_react.Component);

	exports.default = IconCalendarAddSolid;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCalendarDaySolid = function (_Component) {
	  _inherits(IconCalendarDaySolid, _Component);

	  function IconCalendarDaySolid() {
	    _classCallCheck(this, IconCalendarDaySolid);

	    return _possibleConstructorReturn(this, (IconCalendarDaySolid.__proto__ || Object.getPrototypeOf(IconCalendarDaySolid)).apply(this, arguments));
	  }

	  _createClass(IconCalendarDaySolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCalendarDaySolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1181.84 973.6c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4l-143.92 255.2c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H825.84c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8zM1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCalendarDaySolid;
	}(_react.Component);

	exports.default = IconCalendarDaySolid;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCalendarDaysSolid = function (_Component) {
	  _inherits(IconCalendarDaysSolid, _Component);

	  function IconCalendarDaysSolid() {
	    _classCallCheck(this, IconCalendarDaysSolid);

	    return _possibleConstructorReturn(this, (IconCalendarDaysSolid.__proto__ || Object.getPrototypeOf(IconCalendarDaysSolid)).apply(this, arguments));
	  }

	  _createClass(IconCalendarDaysSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCalendarDaysSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1181.84 973.6c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4l-143.92 255.2c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H825.84c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8zM1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCalendarDaysSolid;
	}(_react.Component);

	exports.default = IconCalendarDaysSolid;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCalendarMonthSolid = function (_Component) {
	  _inherits(IconCalendarMonthSolid, _Component);

	  function IconCalendarMonthSolid() {
	    _classCallCheck(this, IconCalendarMonthSolid);

	    return _possibleConstructorReturn(this, (IconCalendarMonthSolid.__proto__ || Object.getPrototypeOf(IconCalendarMonthSolid)).apply(this, arguments));
	  }

	  _createClass(IconCalendarMonthSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCalendarMonthSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1280 1240h320V920h-320v320zm0 480h320v-320h-320v320zm-480-480h320V920H800v320zm0 480h320v-320H800v320zm-480 0h320v-320H320v320zM1600 320h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V480c0-88.4-71.6-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCalendarMonthSolid;
	}(_react.Component);

	exports.default = IconCalendarMonthSolid;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCalendarReservedSolid = function (_Component) {
	  _inherits(IconCalendarReservedSolid, _Component);

	  function IconCalendarReservedSolid() {
	    _classCallCheck(this, IconCalendarReservedSolid);

	    return _possibleConstructorReturn(this, (IconCalendarReservedSolid.__proto__ || Object.getPrototypeOf(IconCalendarReservedSolid)).apply(this, arguments));
	  }

	  _createClass(IconCalendarReservedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCalendarReservedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1594.96 1252.88l-400 453.36c-17.6 19.92-42.4 32-68.88 33.6-2.08.08-4.08.16-6.08.16-24.48 0-48.08-8.88-66.48-25.28l-240-213.28c-41.28-36.72-44.96-99.92-8.32-141.2 36.8-41.36 100.16-44.96 141.2-8.24l164.96 146.64 333.6-378.08c36.56-41.52 99.6-45.44 141.2-8.88 41.36 36.56 45.36 99.76 8.8 141.2m4.96-932.88H1480V120c0-66.24-53.76-120-120.08-120C1293.68 0 1240 53.76 1240 120v200H679.92V120c0-66.24-53.68-120-120-120-66.24 0-120 53.76-120 120v200h-120C231.6 320 160 391.68 160 480v1280c0 88.4 71.6 160 159.92 160h1280c88.4 0 160.08-71.6 160.08-160V480c0-88.32-71.68-160-160.08-160', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCalendarReservedSolid;
	}(_react.Component);

	exports.default = IconCalendarReservedSolid;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCheckDarkSolid = function (_Component) {
	  _inherits(IconCheckDarkSolid, _Component);

	  function IconCheckDarkSolid() {
	    _classCallCheck(this, IconCheckDarkSolid);

	    return _possibleConstructorReturn(this, (IconCheckDarkSolid.__proto__ || Object.getPrototypeOf(IconCheckDarkSolid)).apply(this, arguments));
	  }

	  _createClass(IconCheckDarkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCheckDarkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1209.599 1339.52c-41.048 57.36-105.22 93.84-175.553 99.68-6.562.56-13.203.8-19.764.8-63.372 0-124.584-25.12-169.712-70.32L467.379 992.56c-93.778-93.68-93.778-245.68 0-339.36 93.777-93.76 245.646-93.76 339.424 0L983.636 830l464.008-649.52c5.36-7.6 11.922-13.76 18.003-20.48H317.03C228.614 160 157 231.6 157 320v1280c0 88.32 71.614 160 160.03 160h1280.242c88.337 0 160.03-71.68 160.03-160V572.96L1209.6 1339.52zm-195.349-19.528c-31.686 0-62.252-12.56-84.896-35.12l-377.111-377.12c-46.89-46.88-46.89-122.8 0-169.68 46.889-46.88 122.823-46.88 169.712 0l277.012 276.88 546.343-764.72c38.568-53.84 113.462-66.4 167.392-27.92 53.93 38.56 66.493 113.52 27.925 167.44l-628.679 880c-20.563 28.64-52.65 46.96-87.776 49.84-3.36.24-6.641.4-9.922.4z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCheckDarkSolid;
	}(_react.Component);

	exports.default = IconCheckDarkSolid;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCheckMarkSolid = function (_Component) {
	  _inherits(IconCheckMarkSolid, _Component);

	  function IconCheckMarkSolid() {
	    _classCallCheck(this, IconCheckMarkSolid);

	    return _possibleConstructorReturn(this, (IconCheckMarkSolid.__proto__ || Object.getPrototypeOf(IconCheckMarkSolid)).apply(this, arguments));
	  }

	  _createClass(IconCheckMarkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCheckMarkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1209.599 1339.52c-41.048 57.36-105.22 93.84-175.553 99.68-6.562.56-13.203.8-19.764.8-63.372 0-124.584-25.12-169.712-70.32L467.379 992.56c-93.778-93.68-93.778-245.68 0-339.36 93.777-93.76 245.646-93.76 339.424 0L983.636 830l464.008-649.52c5.36-7.6 11.922-13.76 18.003-20.48H317.03C228.614 160 157 231.6 157 320v1280c0 88.32 71.614 160 160.03 160h1280.242c88.337 0 160.03-71.68 160.03-160V572.96L1209.6 1339.52zm-195.349-19.528c-31.686 0-62.252-12.56-84.896-35.12l-377.111-377.12c-46.89-46.88-46.89-122.8 0-169.68 46.889-46.88 122.823-46.88 169.712 0l277.012 276.88 546.343-764.72c38.568-53.84 113.462-66.4 167.392-27.92 53.93 38.56 66.493 113.52 27.925 167.44l-628.679 880c-20.563 28.64-52.65 46.96-87.776 49.84-3.36.24-6.641.4-9.922.4z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCheckMarkSolid;
	}(_react.Component);

	exports.default = IconCheckMarkSolid;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCheckPlusSolid = function (_Component) {
	  _inherits(IconCheckPlusSolid, _Component);

	  function IconCheckPlusSolid() {
	    _classCallCheck(this, IconCheckPlusSolid);

	    return _possibleConstructorReturn(this, (IconCheckPlusSolid.__proto__ || Object.getPrototypeOf(IconCheckPlusSolid)).apply(this, arguments));
	  }

	  _createClass(IconCheckPlusSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCheckPlusSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1840 1400.004h-240.003v-239.997h-160.002v239.997h-240.002v159.999h240.002V1800h160.002v-239.997H1840v-159.999zM719.987 1560.003c-42.24 0-83.04-16.72-113.121-46.88l-480.005-479.995c-62.481-62.479-62.481-163.758 0-226.237 62.48-62.48 163.761-62.48 226.242 0l346.484 346.396 690.168-966.23c51.36-71.998 151.442-88.558 223.202-37.279 72.001 51.44 88.641 151.359 37.28 223.198L850.23 1492.963c-27.36 38.32-70.161 62.56-117.042 66.48-4.48.4-8.8.56-13.2.56z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCheckPlusSolid;
	}(_react.Component);

	exports.default = IconCheckPlusSolid;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCheckSolid = function (_Component) {
	  _inherits(IconCheckSolid, _Component);

	  function IconCheckSolid() {
	    _classCallCheck(this, IconCheckSolid);

	    return _possibleConstructorReturn(this, (IconCheckSolid.__proto__ || Object.getPrototypeOf(IconCheckSolid)).apply(this, arguments));
	  }

	  _createClass(IconCheckSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCheckSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M799.967 1680c-42.24 0-83.039-16.72-113.118-46.88l-479.99-479.993c-62.479-62.48-62.479-163.758 0-226.237 62.479-62.48 163.757-62.48 226.235 0l346.473 346.395 690.146-966.227c51.359-72 151.437-88.56 223.195-37.28 71.999 51.44 88.638 151.358 37.28 223.197L930.203 1612.961c-27.36 38.32-70.159 62.56-117.038 66.479-4.48.4-8.8.56-13.2.56', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCheckSolid;
	}(_react.Component);

	exports.default = IconCheckSolid;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconClockSolid = function (_Component) {
	  _inherits(IconClockSolid, _Component);

	  function IconClockSolid() {
	    _classCallCheck(this, IconClockSolid);

	    return _possibleConstructorReturn(this, (IconClockSolid.__proto__ || Object.getPrototypeOf(IconClockSolid)).apply(this, arguments));
	  }

	  _createClass(IconClockSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconClockSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 160c441.067 0 799.911 358.933 799.911 800S1401.067 1760 960 1760c-441.156 0-800-358.933-800-800s358.844-800 800-800zm0 160c-352.757 0-640 287.265-640 640s287.243 640 640 640c352.679 0 639.911-287.276 639.911-640S1312.68 320 960 320zm239.067 996.907L862.222 1092.31v-541.2h195.556V987.69l249.724 166.515-108.435 162.703z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconClockSolid;
	}(_react.Component);

	exports.default = IconClockSolid;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCloudLockSolid = function (_Component) {
	  _inherits(IconCloudLockSolid, _Component);

	  function IconCloudLockSolid() {
	    _classCallCheck(this, IconCloudLockSolid);

	    return _possibleConstructorReturn(this, (IconCloudLockSolid.__proto__ || Object.getPrototypeOf(IconCloudLockSolid)).apply(this, arguments));
	  }

	  _createClass(IconCloudLockSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCloudLockSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1613.833 750.153c.43-7.345.586-14.533.586-21.683 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C191.38 966.21 120 1096.703 120 1236.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37zM1266 922c0-123.536-100.464-224-224-224S818 798.464 818 922c-30.968 0-56 25.032-56 56v392c0 30.968 25.032 56 56 56h448c30.968 0 56-25.032 56-56V978c0-30.968-25.032-56-56-56zm-224-112c61.712 0 112 50.232 112 112H930c0-61.768 50.288-112 112-112z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCloudLockSolid;
	}(_react.Component);

	exports.default = IconCloudLockSolid;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCollapseSolid = function (_Component) {
	  _inherits(IconCollapseSolid, _Component);

	  function IconCollapseSolid() {
	    _classCallCheck(this, IconCollapseSolid);

	    return _possibleConstructorReturn(this, (IconCollapseSolid.__proto__ || Object.getPrototypeOf(IconCollapseSolid)).apply(this, arguments));
	  }

	  _createClass(IconCollapseSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCollapseSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M583.44 1303.44l113.12 113.12L880 1233.12V1760h160v-526.88l183.44 183.44 113.12-113.12L960 926.88l-376.56 376.56zM480 800h960V640H480v160zm0-240h960V400H480v160zm0-240h960V160H480v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCollapseSolid;
	}(_react.Component);

	exports.default = IconCollapseSolid;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCollectionSaveSolid = function (_Component) {
	  _inherits(IconCollectionSaveSolid, _Component);

	  function IconCollectionSaveSolid() {
	    _classCallCheck(this, IconCollectionSaveSolid);

	    return _possibleConstructorReturn(this, (IconCollectionSaveSolid.__proto__ || Object.getPrototypeOf(IconCollectionSaveSolid)).apply(this, arguments));
	  }

	  _createClass(IconCollectionSaveSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCollectionSaveSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1223.445 663.432L1040 846.87V160H879.993v686.87L696.547 663.432 583.423 776.551l376.573 376.634 376.573-376.634-113.124-113.119zM1360.06 1040v320H560.02v-320H160v720h1600v-720h-399.94z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCollectionSaveSolid;
	}(_react.Component);

	exports.default = IconCollectionSaveSolid;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCollectionSolid = function (_Component) {
	  _inherits(IconCollectionSolid, _Component);

	  function IconCollectionSolid() {
	    _classCallCheck(this, IconCollectionSolid);

	    return _possibleConstructorReturn(this, (IconCollectionSolid.__proto__ || Object.getPrototypeOf(IconCollectionSolid)).apply(this, arguments));
	  }

	  _createClass(IconCollectionSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCollectionSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M800 920v240h319.76l.24-240H800zm480 240c0 88.24-71.76 160-160 160H800c-88.24 0-160-71.76-160-160v-160H160v560c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160v-560h-480v160zm400-640h-320V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H240c-88.32 0-160 71.68-160 160v240h560c0-88.16 71.76-160 160-160h320c88.24 0 160 71.84 160 160h560V680c0-88.32-71.68-160-160-160zm-480 0H720V360h480v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCollectionSolid;
	}(_react.Component);

	exports.default = IconCollectionSolid;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCommonsSolid = function (_Component) {
	  _inherits(IconCommonsSolid, _Component);

	  function IconCommonsSolid() {
	    _classCallCheck(this, IconCommonsSolid);

	    return _possibleConstructorReturn(this, (IconCommonsSolid.__proto__ || Object.getPrototypeOf(IconCommonsSolid)).apply(this, arguments));
	  }

	  _createClass(IconCommonsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCommonsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M338.72 959.646c0-214.788 177.76-390.843 396-390.843h320.32V310H732.96C373.92 310 80 600.493 80 959.646c0 359.15 293.92 649.647 652.96 649.647h320.32V1350.49H732.96c-218.24 0-394.24-176.055-394.24-390.844zm1501.28 0l-526.24-464.784v309.856h-554.4c-86.24 0-154.88 68.66-154.88 154.928s68.64 154.928 154.88 154.928h554.4v309.857L1840 959.653v-.007z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCommonsSolid;
	}(_react.Component);

	exports.default = IconCommonsSolid;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCompleteSolid = function (_Component) {
	  _inherits(IconCompleteSolid, _Component);

	  function IconCompleteSolid() {
	    _classCallCheck(this, IconCompleteSolid);

	    return _possibleConstructorReturn(this, (IconCompleteSolid.__proto__ || Object.getPrototypeOf(IconCompleteSolid)).apply(this, arguments));
	  }

	  _createClass(IconCompleteSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCompleteSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M900 1420l-400-300 120-160 240 180 420-560 160 120-540 720zm60-1260c-441.84 0-800 358.24-800 800s358.16 800 800 800 800-358.24 800-800-358.16-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCompleteSolid;
	}(_react.Component);

	exports.default = IconCompleteSolid;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconComposeSolid = function (_Component) {
	  _inherits(IconComposeSolid, _Component);

	  function IconComposeSolid() {
	    _classCallCheck(this, IconComposeSolid);

	    return _possibleConstructorReturn(this, (IconComposeSolid.__proto__ || Object.getPrototypeOf(IconComposeSolid)).apply(this, arguments));
	  }

	  _createClass(IconComposeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconComposeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1129.767 1202.796l-565.604 113.12 113.12-565.684 430.244-430.243H360C271.761 319.99 200 391.83 200 479.99V1600c0 88.16 71.76 160.001 160.001 160.001H1480.01c88.24 0 160-71.84 160-160.001V692.472l-510.243 510.324zM824.645 829.153l226.241 226.242-282.802 56.56 56.56-282.802zm848.526-396.051c62.48-62.48 62.48-163.761 0-226.242-62.48-62.48-163.761-62.48-226.242 0L937.806 715.984l226.241 226.242 509.124-509.124z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconComposeSolid;
	}(_react.Component);

	exports.default = IconComposeSolid;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCopyCourseSolid = function (_Component) {
	  _inherits(IconCopyCourseSolid, _Component);

	  function IconCopyCourseSolid() {
	    _classCallCheck(this, IconCopyCourseSolid);

	    return _possibleConstructorReturn(this, (IconCopyCourseSolid.__proto__ || Object.getPrototypeOf(IconCopyCourseSolid)).apply(this, arguments));
	  }

	  _createClass(IconCopyCourseSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCopyCourseSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1560 240V0H120v1760h240V240h1200zM863.44 696.56L966.88 800H680V400H520v480c0 44.16 35.84 80 80 80h366.88l-103.44 103.44 113.12 113.12L1273.12 880 976.56 583.44 863.44 696.56zM631.393 400H520v88.081A562.42 562.42 0 0 1 631.393 400zm577.214 0H1800v1520H520v-648.081C621.641 1375.643 763.305 1440 920 1440c309.28 0 560-250.72 560-560 0-203.706-108.767-382.008-271.393-480z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCopyCourseSolid;
	}(_react.Component);

	exports.default = IconCopyCourseSolid;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCopySolid = function (_Component) {
	  _inherits(IconCopySolid, _Component);

	  function IconCopySolid() {
	    _classCallCheck(this, IconCopySolid);

	    return _possibleConstructorReturn(this, (IconCopySolid.__proto__ || Object.getPrototypeOf(IconCopySolid)).apply(this, arguments));
	  }

	  _createClass(IconCopySolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCopySolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M480 1920h1280V319.987H480V1920zm960-879.991h-240V800.007h-160v240.002H800v160.001h240v240.002h160V1200.01h240v-160.001zM160 0v1600.013h160V160.001h1040V0H160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCopySolid;
	}(_react.Component);

	exports.default = IconCopySolid;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconCoursesSolid = function (_Component) {
	  _inherits(IconCoursesSolid, _Component);

	  function IconCoursesSolid() {
	    _classCallCheck(this, IconCoursesSolid);

	    return _possibleConstructorReturn(this, (IconCoursesSolid.__proto__ || Object.getPrototypeOf(IconCoursesSolid)).apply(this, arguments));
	  }

	  _createClass(IconCoursesSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconCoursesSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M480 960H320V320h160v640zm80-800H240c-44.16 0-80 35.84-80 80v1440c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V240c0-44.16-35.84-80-80-80zm560 320H800c-44.16 0-80 35.84-80 80v1120c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V560c0-44.16-35.84-80-80-80zm-80 800H880V640h160v640zm640-960h-320c-44.16 0-80 35.84-80 80v1280c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V400c0-44.16-35.84-80-80-80zm-80 800h-160V480h160v640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconCoursesSolid;
	}(_react.Component);

	exports.default = IconCoursesSolid;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionCheckSolid = function (_Component) {
	  _inherits(IconDiscussionCheckSolid, _Component);

	  function IconDiscussionCheckSolid() {
	    _classCallCheck(this, IconDiscussionCheckSolid);

	    return _possibleConstructorReturn(this, (IconDiscussionCheckSolid.__proto__ || Object.getPrototypeOf(IconDiscussionCheckSolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionCheckSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionCheckSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M891.697 1575.716L263.427 944.2l369.06-370.967L873.71 815.7l386.325-427.145H320.601C232.029 388.556 160 461.04 160 549.986v968.584c0 89.028 72.03 161.43 160.6 161.43h1124.205c88.571 0 160.6-72.402 160.6-161.43V786.563l-713.708 789.153zm-5.525-233.872L490.532 944.24l141.971-142.704 246.763 248.038L1611.444 240 1760 375.682l-873.828 966.162z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionCheckSolid;
	}(_react.Component);

	exports.default = IconDiscussionCheckSolid;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionNewSolid = function (_Component) {
	  _inherits(IconDiscussionNewSolid, _Component);

	  function IconDiscussionNewSolid() {
	    _classCallCheck(this, IconDiscussionNewSolid);

	    return _possibleConstructorReturn(this, (IconDiscussionNewSolid.__proto__ || Object.getPrototypeOf(IconDiscussionNewSolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionNewSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionNewSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionNewSolid;
	}(_react.Component);

	exports.default = IconDiscussionNewSolid;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionReply2Solid = function (_Component) {
	  _inherits(IconDiscussionReply2Solid, _Component);

	  function IconDiscussionReply2Solid() {
	    _classCallCheck(this, IconDiscussionReply2Solid);

	    return _possibleConstructorReturn(this, (IconDiscussionReply2Solid.__proto__ || Object.getPrototypeOf(IconDiscussionReply2Solid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionReply2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionReply2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1480.004 480.026H960.01V240.031c0-32.32-19.52-61.519-49.36-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.992 719.985A80.027 80.027 0 0 0 880.01 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995H1759.997c44.195 0 80.003-35.814 80.003-79.991V560.017c0-44.183-35.818-79.99-80.003-79.99h-279.993z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionReply2Solid;
	}(_react.Component);

	exports.default = IconDiscussionReply2Solid;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionReplyDarkSolid = function (_Component) {
	  _inherits(IconDiscussionReplyDarkSolid, _Component);

	  function IconDiscussionReplyDarkSolid() {
	    _classCallCheck(this, IconDiscussionReplyDarkSolid);

	    return _possibleConstructorReturn(this, (IconDiscussionReplyDarkSolid.__proto__ || Object.getPrototypeOf(IconDiscussionReplyDarkSolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionReplyDarkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionReplyDarkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M238 1200c132.548 0 240-107.452 240-240S370.548 720 238 720-2 827.452-2 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionReplyDarkSolid;
	}(_react.Component);

	exports.default = IconDiscussionReplyDarkSolid;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionReplySolid = function (_Component) {
	  _inherits(IconDiscussionReplySolid, _Component);

	  function IconDiscussionReplySolid() {
	    _classCallCheck(this, IconDiscussionReplySolid);

	    return _possibleConstructorReturn(this, (IconDiscussionReplySolid.__proto__ || Object.getPrototypeOf(IconDiscussionReplySolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionReplySolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionReplySolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M238 1200c132.548 0 240-107.452 240-240S370.548 720 238 720-2 827.452-2 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionReplySolid;
	}(_react.Component);

	exports.default = IconDiscussionReplySolid;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionSearchSolid = function (_Component) {
	  _inherits(IconDiscussionSearchSolid, _Component);

	  function IconDiscussionSearchSolid() {
	    _classCallCheck(this, IconDiscussionSearchSolid);

	    return _possibleConstructorReturn(this, (IconDiscussionSearchSolid.__proto__ || Object.getPrototypeOf(IconDiscussionSearchSolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionSearchSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionSearchSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1793.266 1567.007l-316.747-316.747c78.807-121.61 121.45-263.143 121.45-411.315C1597.89 419.549 1258.42 80 838.945 80 419.549 80 80 419.469 80 838.945c0 419.315 339.469 758.944 758.945 758.944 148.252 0 289.784-42.643 411.235-121.37l316.667 316.667c62.725 62.885 163.934 62.725 226.339.08 62.405-62.405 62.405-163.934.08-226.26zM240.014 838.945c0-330.989 267.862-598.851 598.93-598.851 330.829 0 598.932 267.782 598.932 598.85 0 159.934-62.326 310.347-175.535 423.397-113.13 113.21-263.463 175.455-423.476 175.455-330.749.08-598.851-267.863-598.851-598.851z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionSearchSolid;
	}(_react.Component);

	exports.default = IconDiscussionSearchSolid;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionSolid = function (_Component) {
	  _inherits(IconDiscussionSolid, _Component);

	  function IconDiscussionSolid() {
	    _classCallCheck(this, IconDiscussionSolid);

	    return _possibleConstructorReturn(this, (IconDiscussionSolid.__proto__ || Object.getPrototypeOf(IconDiscussionSolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1000 240c-441.12 0-800 323.04-800 720 0 138.8 43.28 271.36 125.84 386.88L120 1680h880c441.12 0 800-323.04 800-720s-358.88-720-800-720', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionSolid;
	}(_react.Component);

	exports.default = IconDiscussionSolid;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDiscussionXSolid = function (_Component) {
	  _inherits(IconDiscussionXSolid, _Component);

	  function IconDiscussionXSolid() {
	    _classCallCheck(this, IconDiscussionXSolid);

	    return _possibleConstructorReturn(this, (IconDiscussionXSolid.__proto__ || Object.getPrototypeOf(IconDiscussionXSolid)).apply(this, arguments));
	  }

	  _createClass(IconDiscussionXSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDiscussionXSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.76 0-800 358.24-800 800s358.24 800 800 800c441.84 0 800-358.24 800-800s-358.16-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDiscussionXSolid;
	}(_react.Component);

	exports.default = IconDiscussionXSolid;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDocumentSolid = function (_Component) {
	  _inherits(IconDocumentSolid, _Component);

	  function IconDocumentSolid() {
	    _classCallCheck(this, IconDocumentSolid);

	    return _possibleConstructorReturn(this, (IconDocumentSolid.__proto__ || Object.getPrototypeOf(IconDocumentSolid)).apply(this, arguments));
	  }

	  _createClass(IconDocumentSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDocumentSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1120 640V240l400 400h-400zm240 800H560v-160h800v160zM560 960h800v160H560V960zm0-320h320v160H560V640zm673.12-480H480c-88.24 0-160 71.84-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V526.88L1233.12 160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDocumentSolid;
	}(_react.Component);

	exports.default = IconDocumentSolid;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDownloadSolid = function (_Component) {
	  _inherits(IconDownloadSolid, _Component);

	  function IconDownloadSolid() {
	    _classCallCheck(this, IconDownloadSolid);

	    return _possibleConstructorReturn(this, (IconDownloadSolid.__proto__ || Object.getPrototypeOf(IconDownloadSolid)).apply(this, arguments));
	  }

	  _createClass(IconDownloadSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDownloadSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1611.833 750.153c.43-7.345.586-14.533.586-21.683 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C189.38 966.21 118 1096.703 118 1236.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37m-237.257 334.299l-376.56 376.56-376.56-376.56 113.12-113.12 183.44 183.44v-446.96h160v446.96l183.44-183.44 113.12 113.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDownloadSolid;
	}(_react.Component);

	exports.default = IconDownloadSolid;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDragHandleSolid = function (_Component) {
	  _inherits(IconDragHandleSolid, _Component);

	  function IconDragHandleSolid() {
	    _classCallCheck(this, IconDragHandleSolid);

	    return _possibleConstructorReturn(this, (IconDragHandleSolid.__proto__ || Object.getPrototypeOf(IconDragHandleSolid)).apply(this, arguments));
	  }

	  _createClass(IconDragHandleSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDragHandleSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M640 480h240V240H640v240zm400 0h240V240h-240v240zM640 880h240V640H640v240zm400 0h240V640h-240v240zm-400 400h240v-240H640v240zm400 0h240v-240h-240v240zm-400 400h240v-240H640v240zm400 0h240v-240h-240v240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDragHandleSolid;
	}(_react.Component);

	exports.default = IconDragHandleSolid;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconDropDownSolid = function (_Component) {
	  _inherits(IconDropDownSolid, _Component);

	  function IconDropDownSolid() {
	    _classCallCheck(this, IconDropDownSolid);

	    return _possibleConstructorReturn(this, (IconDropDownSolid.__proto__ || Object.getPrototypeOf(IconDropDownSolid)).apply(this, arguments));
	  }

	  _createClass(IconDropDownSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconDropDownSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1473.12l-376.56-376.56 113.12-113.12L880 1166.88V480h160v686.88l183.44-183.44 113.12 113.12L960 1473.12zM960 160c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconDropDownSolid;
	}(_react.Component);

	exports.default = IconDropDownSolid;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEditSolid = function (_Component) {
	  _inherits(IconEditSolid, _Component);

	  function IconEditSolid() {
	    _classCallCheck(this, IconEditSolid);

	    return _possibleConstructorReturn(this, (IconEditSolid.__proto__ || Object.getPrototypeOf(IconEditSolid)).apply(this, arguments));
	  }

	  _createClass(IconEditSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEditSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1490.22 634.72l-204.88-204.88 204.88-204.96 204.88 204.96-204.88 204.88zM235.18 1684.88l128.08-332.96 204.88 204.88-332.96 128.08zm1562.4-1357.52L1592.7 122.48c-56.64-56.64-148.32-56.64-204.96 0l-1097.6 1097.6c-19.2 19.2-32.64 43.36-38.72 69.84L81.9 1751.198c-12 52.16 34.72 98.96 86.88 86.88l461.28-169.44c26.48-6.16 50.72-19.6 69.92-38.8l1097.6-1097.6c56.56-56.56 56.56-148.32 0-204.88z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEditSolid;
	}(_react.Component);

	exports.default = IconEditSolid;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEducatorsSolid = function (_Component) {
	  _inherits(IconEducatorsSolid, _Component);

	  function IconEducatorsSolid() {
	    _classCallCheck(this, IconEducatorsSolid);

	    return _possibleConstructorReturn(this, (IconEducatorsSolid.__proto__ || Object.getPrototypeOf(IconEducatorsSolid)).apply(this, arguments));
	  }

	  _createClass(IconEducatorsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEducatorsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M880.026 399.998v79.999h159.998v-80C1040.024 267.68 932.345 160 800.026 160H640.028v159.998h159.998c44.08 0 80 35.92 80 80zM1440.02 160s-159.998 0-239.998 80c-79.999 79.998-79.999 239.997-79.999 239.997s159.999 0 239.998-80C1440.02 319.999 1440.02 160 1440.02 160zm-210.27 349.373c-91.999 0-184.158 35.52-269.757 103.438-85.52-67.919-177.678-103.438-269.678-103.438C424.958 509.373 240 789.05 240 1040.007 240 1403.364 517.437 1760 799.994 1760c21.04 0 41.44-8.56 56.4-23.2 23.28-22.88 72.32-56.8 103.599-56.8 31.36 0 80.319 33.84 103.599 56.72 15.04 14.88 35.28 23.28 56.4 23.28 282.636 0 559.994-356.636 559.994-719.993 0-250.957-184.879-530.634-450.236-530.634z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEducatorsSolid;
	}(_react.Component);

	exports.default = IconEducatorsSolid;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEmailSolid = function (_Component) {
	  _inherits(IconEmailSolid, _Component);

	  function IconEmailSolid() {
	    _classCallCheck(this, IconEmailSolid);

	    return _possibleConstructorReturn(this, (IconEmailSolid.__proto__ || Object.getPrototypeOf(IconEmailSolid)).apply(this, arguments));
	  }

	  _createClass(IconEmailSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEmailSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M959.976 905.84l717.2-445.12c-22.96-12.8-49.04-20.72-77.2-20.72h-1280c-28.16 0-54.24 7.92-77.2 20.72l717.2 445.12zm42.184 162.112c-12.96 8-27.52 12-42.16 12-14.64 0-29.28-4-42.24-12l-757.52-470.16c0 .8-.24 1.52-.24 2.16v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160v-720c0-.64-.24-1.36-.24-2.16l-757.6 470.16z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEmailSolid;
	}(_react.Component);

	exports.default = IconEmailSolid;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEmptySolid = function (_Component) {
	  _inherits(IconEmptySolid, _Component);

	  function IconEmptySolid() {
	    _classCallCheck(this, IconEmptySolid);

	    return _possibleConstructorReturn(this, (IconEmptySolid.__proto__ || Object.getPrototypeOf(IconEmptySolid)).apply(this, arguments));
	  }

	  _createClass(IconEmptySolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEmptySolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M958 1559.972c-331.318 0-599.972-268.542-599.972-599.916 0-331.374 268.654-599.972 599.972-599.972S1557.972 628.626 1557.972 960c0 331.374-268.654 599.916-599.972 599.916v.056zM958 160c-441.738 0-800 358.318-800 800s358.318 800 800 800 800-358.318 800-800c0-441.738-358.318-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEmptySolid;
	}(_react.Component);

	exports.default = IconEmptySolid;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEndSolid = function (_Component) {
	  _inherits(IconEndSolid, _Component);

	  function IconEndSolid() {
	    _classCallCheck(this, IconEndSolid);

	    return _possibleConstructorReturn(this, (IconEndSolid.__proto__ || Object.getPrototypeOf(IconEndSolid)).apply(this, arguments));
	  }

	  _createClass(IconEndSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEndSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.76 0-800 358.24-800 800s358.24 800 800 800c441.84 0 800-358.24 800-800s-358.16-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEndSolid;
	}(_react.Component);

	exports.default = IconEndSolid;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEquationSolid = function (_Component) {
	  _inherits(IconEquationSolid, _Component);

	  function IconEquationSolid() {
	    _classCallCheck(this, IconEquationSolid);

	    return _possibleConstructorReturn(this, (IconEquationSolid.__proto__ || Object.getPrototypeOf(IconEquationSolid)).apply(this, arguments));
	  }

	  _createClass(IconEquationSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEquationSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M718 480h160v480H718c-132.32 0-240-107.68-240-240s107.68-240 240-240m0 640h160v480h160V480h160v1120h160V480h240V320H718c-220.56 0-400 179.44-400 400s179.44 400 400 400', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEquationSolid;
	}(_react.Component);

	exports.default = IconEquationSolid;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEquellaSolid = function (_Component) {
	  _inherits(IconEquellaSolid, _Component);

	  function IconEquellaSolid() {
	    _classCallCheck(this, IconEquellaSolid);

	    return _possibleConstructorReturn(this, (IconEquellaSolid.__proto__ || Object.getPrototypeOf(IconEquellaSolid)).apply(this, arguments));
	  }

	  _createClass(IconEquellaSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEquellaSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M892.689 1672.168c1.308-7.043 8.652-12.778 16.4-12.778h62.076c7.646 0 12.676 5.735 11.268 12.778l-12.073 58.756c-1.409 7.042-8.753 12.878-16.5 12.878h-62.177c-7.546 0-12.577-5.836-11.067-12.878l12.073-58.756zm-599.334 16.298c1.409-7.042 8.753-12.878 16.4-12.878h62.177c7.646 0 12.677 5.836 11.067 12.878l-11.872 58.757c-1.51 7.042-8.854 12.777-16.5 12.777H292.55c-7.646 0-12.676-5.735-11.268-12.777l12.073-58.757zM269.511 653.19c1.408-7.043 8.753-12.878 16.4-12.878h62.076c7.646 0 12.676 5.835 11.067 12.878l-11.872 58.756c-1.61 7.043-9.055 12.778-16.601 12.778h-62.076c-7.647 0-12.677-5.735-11.269-12.778l12.074-58.756h.2zm415.921-480.413c1.51-7.042 8.854-12.777 16.5-12.777h62.077c7.747 0 12.777 5.835 11.369 12.777l-12.074 58.857c-1.408 7.043-8.853 12.878-16.5 12.878h-62.177c-7.646 0-12.676-6.036-11.067-12.878l11.872-58.857zm653.563 0c1.408-7.042 8.753-12.777 16.399-12.777h62.076c7.647 0 12.677 5.835 11.067 12.777l-11.872 58.857c-1.509 7.043-8.853 12.778-16.6 12.778h-62.077c-7.646 0-12.676-6.037-11.268-12.878l12.073-58.857.202.1zM935.95 491.007c1.61-7.244 9.055-13.08 16.6-13.08h62.077c7.646 0 12.677 6.037 11.268 13.08l-12.073 58.655c-1.408 7.043-8.753 12.778-16.5 12.778h-62.076c-7.647 0-12.576-5.735-11.067-12.778l11.872-58.756-.1.1zm-174.357-117.01c1.51-7.042 9.055-12.676 16.4-12.676h110.47c7.646 0 12.575 5.835 11.066 12.777L878.603 478.33c-1.509 7.043-9.055 12.677-16.5 12.677h-110.67c-7.546 0-12.577-5.735-11.068-12.677l21.128-104.333h.101zM478.176 1392.975c1.509-7.043 9.055-12.677 16.4-12.677h110.368c7.747 0 12.677 5.634 11.269 12.576l-21.33 104.333c-1.408 7.043-8.853 12.677-16.298 12.677H467.914c-7.446 0-12.476-5.735-11.068-12.677l21.33-104.333v.1zm446.406 107.15c1.51-7.043 9.055-12.778 16.4-12.778h110.47c7.646 0 12.576 5.735 11.066 12.677l-21.128 104.332c-1.509 7.043-9.055 12.577-16.5 12.577H914.42c-7.545 0-12.576-5.735-11.067-12.577l21.129-104.433.1.201zm290.863-81.495c4.327-21.128 26.36-38.231 49.098-38.231h172.747c22.839 0 37.83 17.103 33.504 38.231l-33.403 163.391c-4.326 21.128-26.46 38.232-49.299 38.232h-172.445c-22.839 0-37.83-16.903-33.403-38.232l33.403-163.39h-.202zm-803.672-389.36c4.326-21.128 26.36-38.433 49.098-38.433h172.747c22.839 0 37.83 17.104 33.503 38.232L633.72 1192.66c-4.326 21.129-26.46 38.232-49.3 38.232H411.774c-22.738 0-37.83-17.103-33.402-38.232l33.402-163.39zm55.336-337.647c4.225-21.128 26.158-38.232 49.097-38.232h172.647c22.838 0 37.83 17.104 33.503 38.232l-33.402 163.592c-4.327 21.128-26.46 38.232-49.3 38.232H467.11c-22.839 0-37.93-17.104-33.503-38.232l33.402-163.592h.1zM1406 360.717c4.326-21.128 26.46-38.232 49.299-38.232h172.646c22.839 0 37.83 17.104 33.503 38.232l-33.302 163.491c-4.326 21.128-26.36 38.232-49.097 38.232h-172.747c-22.839 0-37.83-17.104-33.504-38.232l33.403-163.491h-.201zM871.76 742.532c10.062-49.3 61.574-89.241 114.897-89.241h524.782c53.323 0 88.537 39.942 78.476 89.341l-101.616 496.51c-10.061 49.3-61.574 89.342-114.897 89.342H848.622c-53.324 0-88.537-39.942-78.476-89.342l101.616-496.41v-.2z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEquellaSolid;
	}(_react.Component);

	exports.default = IconEquellaSolid;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconExpandItemsSolid = function (_Component) {
	  _inherits(IconExpandItemsSolid, _Component);

	  function IconExpandItemsSolid() {
	    _classCallCheck(this, IconExpandItemsSolid);

	    return _possibleConstructorReturn(this, (IconExpandItemsSolid.__proto__ || Object.getPrototypeOf(IconExpandItemsSolid)).apply(this, arguments));
	  }

	  _createClass(IconExpandItemsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconExpandItemsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1138.841 741.29l93.943-93.913L986.5 401.17 740.216 647.377l93.943 93.913 85.904-85.877v609.174l-85.904-85.877-93.943 93.913L986.5 1518.83l246.284-246.207-93.943-93.913-85.904 85.877V655.413zM455 163h1063v132.833H455zM455 1624.167h1063V1757H455z' })
	        )
	      );
	    }
	  }]);

	  return IconExpandItemsSolid;
	}(_react.Component);

	exports.default = IconExpandItemsSolid;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconExpandSolid = function (_Component) {
	  _inherits(IconExpandSolid, _Component);

	  function IconExpandSolid() {
	    _classCallCheck(this, IconExpandSolid);

	    return _possibleConstructorReturn(this, (IconExpandSolid.__proto__ || Object.getPrototypeOf(IconExpandSolid)).apply(this, arguments));
	  }

	  _createClass(IconExpandSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconExpandSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1039.667 1405.196V959.992H880.333v445.204l-182.675-182.752-112.649 112.696L960 1710.288l374.991-375.148-112.649-112.696zM482 800.6h956V641.2H482zM482 561.5h956V402.1H482zM482 322.4h956V163H482z' })
	        )
	      );
	    }
	  }]);

	  return IconExpandSolid;
	}(_react.Component);

	exports.default = IconExpandSolid;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconExportContentSolid = function (_Component) {
	  _inherits(IconExportContentSolid, _Component);

	  function IconExportContentSolid() {
	    _classCallCheck(this, IconExportContentSolid);

	    return _possibleConstructorReturn(this, (IconExportContentSolid.__proto__ || Object.getPrototypeOf(IconExportContentSolid)).apply(this, arguments));
	  }

	  _createClass(IconExportContentSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconExportContentSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1360 446.872l-113.12 113.12 160 160H960c-176.48 0-320 143.52-320 320v80h160v-80c0-88.16 71.76-160 160-160h446.88l-160 160 113.12 113.12 353.12-353.12L1360 446.872z' }),
	          _react2.default.createElement('path', { d: 'M1040 1440H320V480h880V320H160v1280h1040v-400h-160z' })
	        )
	      );
	    }
	  }]);

	  return IconExportContentSolid;
	}(_react.Component);

	exports.default = IconExportContentSolid;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconExportSolid = function (_Component) {
	  _inherits(IconExportSolid, _Component);

	  function IconExportSolid() {
	    _classCallCheck(this, IconExportSolid);

	    return _possibleConstructorReturn(this, (IconExportSolid.__proto__ || Object.getPrototypeOf(IconExportSolid)).apply(this, arguments));
	  }

	  _createClass(IconExportSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconExportSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1360 446.872l-113.12 113.12 160 160H960c-176.48 0-320 143.52-320 320v80h160v-80c0-88.16 71.76-160 160-160h446.88l-160 160 113.12 113.12 353.12-353.12L1360 446.872z' }),
	          _react2.default.createElement('path', { d: 'M1040 1440H320V480h880V320H160v1280h1040v-400h-160z' })
	        )
	      );
	    }
	  }]);

	  return IconExportSolid;
	}(_react.Component);

	exports.default = IconExportSolid;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconEyeSolid = function (_Component) {
	  _inherits(IconEyeSolid, _Component);

	  function IconEyeSolid() {
	    _classCallCheck(this, IconEyeSolid);

	    return _possibleConstructorReturn(this, (IconEyeSolid.__proto__ || Object.getPrototypeOf(IconEyeSolid)).apply(this, arguments));
	  }

	  _createClass(IconEyeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEyeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1249.714c-160.052 0-289.818-129.647-289.818-289.714S799.948 670.286 960 670.286 1249.818 799.933 1249.818 960 1120.052 1249.714 960 1249.714M960 453c-460.231 0-797 507-797 507s336.769 507 797 507 797-507 797-507-336.769-507-797-507', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEyeSolid;
	}(_react.Component);

	exports.default = IconEyeSolid;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFacebookBoxedSolid = function (_Component) {
	  _inherits(IconFacebookBoxedSolid, _Component);

	  function IconFacebookBoxedSolid() {
	    _classCallCheck(this, IconFacebookBoxedSolid);

	    return _possibleConstructorReturn(this, (IconFacebookBoxedSolid.__proto__ || Object.getPrototypeOf(IconFacebookBoxedSolid)).apply(this, arguments));
	  }

	  _createClass(IconFacebookBoxedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFacebookBoxedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1518.249 960h-259.374v697.375H960V960H816.042V731.859H960V583.667c0-201.343 86.873-321.042 323.582-321.042h272.773v246.82h-222.761c-66.25-.099-74.37 34.471-74.37 98.879l-.349 123.535h298.875L1518.199 960h.05zm-26.9-797H428.7C282.55 163 163 282.55 163 428.7v1062.6c0 146.25 119.55 265.7 265.7 265.7h1062.65c146.1 0 265.65-119.45 265.65-265.7V428.7c0-146.15-119.55-265.7-265.65-265.7z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconFacebookBoxedSolid;
	}(_react.Component);

	exports.default = IconFacebookBoxedSolid;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFacebookSolid = function (_Component) {
	  _inherits(IconFacebookSolid, _Component);

	  function IconFacebookSolid() {
	    _classCallCheck(this, IconFacebookSolid);

	    return _possibleConstructorReturn(this, (IconFacebookSolid.__proto__ || Object.getPrototypeOf(IconFacebookSolid)).apply(this, arguments));
	  }

	  _createClass(IconFacebookSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFacebookSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1111.242 1920h-360.05V960H511V629.2l240.193-.16-.4-194.88C750.792 164.24 824.05 0 1142.306 0h264.772v330.88h-165.493c-123.94 0-129.864 46.24-129.864 132.64l-.48 165.6h297.839l-35.148 330.8-262.451.08-.16 960h-.08z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconFacebookSolid;
	}(_react.Component);

	exports.default = IconFacebookSolid;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFilesCopyrightSolid = function (_Component) {
	  _inherits(IconFilesCopyrightSolid, _Component);

	  function IconFilesCopyrightSolid() {
	    _classCallCheck(this, IconFilesCopyrightSolid);

	    return _possibleConstructorReturn(this, (IconFilesCopyrightSolid.__proto__ || Object.getPrototypeOf(IconFilesCopyrightSolid)).apply(this, arguments));
	  }

	  _createClass(IconFilesCopyrightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFilesCopyrightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 163c440.143 0 797 356.857 797 797s-356.857 797-797 797-797-356.857-797-797 356.857-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
	          _react2.default.createElement('path', { d: 'M1174.924 812.077l-108.79 56.72c-11.69-24.176-25.903-41.179-42.773-50.876-17.002-9.696-32.677-14.545-47.155-14.545-72.527 0-108.857 47.953-108.857 143.925 0 43.636 9.232 78.505 27.563 104.673 18.33 26.234 45.429 39.318 81.294 39.318 47.288 0 80.696-23.245 100.023-69.803l100.09 50.875c-21.253 39.783-50.742 71.066-88.467 93.78-37.725 22.847-79.301 34.205-124.797 34.205-72.527 0-130.973-22.316-175.473-66.948-44.432-44.5-66.682-106.533-66.682-186.033 0-77.575 22.449-139.143 67.48-184.639 44.897-45.628 101.75-68.409 170.358-68.409 100.621-.066 172.617 39.252 216.12 117.757h.066z' })
	        )
	      );
	    }
	  }]);

	  return IconFilesCopyrightSolid;
	}(_react.Component);

	exports.default = IconFilesCopyrightSolid;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFilesCreativeCommonsSolid = function (_Component) {
	  _inherits(IconFilesCreativeCommonsSolid, _Component);

	  function IconFilesCreativeCommonsSolid() {
	    _classCallCheck(this, IconFilesCreativeCommonsSolid);

	    return _possibleConstructorReturn(this, (IconFilesCreativeCommonsSolid.__proto__ || Object.getPrototypeOf(IconFilesCreativeCommonsSolid)).apply(this, arguments));
	  }

	  _createClass(IconFilesCreativeCommonsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFilesCreativeCommonsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 163c440.183 0 797 356.817 797 797s-356.817 797-797 797-797-356.817-797-797 356.817-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
	          _react2.default.createElement('path', { d: 'M1447.339 817.257l-112.377 59.244c-12.114-25.291-27.098-43.038-44.765-53.133-17.8-10.096-34.75-15.197-50.875-15.197-75.901 0-113.891 50.079-113.891 150.288 0 45.535 9.643 81.932 28.851 109.269 19.208 27.363 47.554 41.019 85.013 41.019 49.574 0 84.482-24.335 104.726-72.9l106.267 53.134c-23.246 41.524-54.648 74.121-94.046 97.925a245.009 245.009 0 0 1-129.061 35.679c-76.937 0-138.412-23.246-184.373-69.87-46.146-46.492-69.153-111.315-69.153-194.256 0-80.975 23.512-145.213 70.614-192.794 47.05-47.528 106.48-71.332 178.37-71.332 105.256-.053 180.2 40.913 224.7 122.924zm-490.341 0l-113.891 59.244c-12.168-25.291-27.098-43.038-44.765-53.133-17.72-10.096-34.165-15.197-49.361-15.197-75.874 0-113.865 50.079-113.865 150.288 0 45.535 9.644 81.932 28.852 109.269 19.234 27.363 47.554 41.019 85.013 41.019 49.626 0 84.535-24.335 104.805-72.9l104.753 53.134c-22.263 41.524-53.134 74.121-92.612 97.925-39.424 23.804-82.967 35.679-130.548 35.679-75.901 0-137.164-23.246-183.709-69.87-46.544-46.492-69.817-111.315-69.817-194.256 0-80.975 23.538-145.213 70.588-192.794 47.023-47.555 106.532-71.358 178.395-71.358 105.284-.053 180.653 40.912 226.215 122.924l-.053.026z' })
	        )
	      );
	    }
	  }]);

	  return IconFilesCreativeCommonsSolid;
	}(_react.Component);

	exports.default = IconFilesCreativeCommonsSolid;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFilesFairUseSolid = function (_Component) {
	  _inherits(IconFilesFairUseSolid, _Component);

	  function IconFilesFairUseSolid() {
	    _classCallCheck(this, IconFilesFairUseSolid);

	    return _possibleConstructorReturn(this, (IconFilesFairUseSolid.__proto__ || Object.getPrototypeOf(IconFilesFairUseSolid)).apply(this, arguments));
	  }

	  _createClass(IconFilesFairUseSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFilesFairUseSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 163c440.183 0 797 356.817 797 797s-356.817 797-797 797-797-356.817-797-797 356.817-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
	          _react2.default.createElement('path', { d: 'M774.033 694.333v509.23h111.979V993.155h213.25V906.15h-213.25V788.46h246.007v-94.126z' })
	        )
	      );
	    }
	  }]);

	  return IconFilesFairUseSolid;
	}(_react.Component);

	exports.default = IconFilesFairUseSolid;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFilesObtainedPermissionSolid = function (_Component) {
	  _inherits(IconFilesObtainedPermissionSolid, _Component);

	  function IconFilesObtainedPermissionSolid() {
	    _classCallCheck(this, IconFilesObtainedPermissionSolid);

	    return _possibleConstructorReturn(this, (IconFilesObtainedPermissionSolid.__proto__ || Object.getPrototypeOf(IconFilesObtainedPermissionSolid)).apply(this, arguments));
	  }

	  _createClass(IconFilesObtainedPermissionSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFilesObtainedPermissionSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 163c440.183 0 797 356.817 797 797s-356.817 797-797 797-797-356.817-797-797 356.817-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
	          _react2.default.createElement('path', { d: 'M848.951 551.139c0-73.723 37.008-110.65 111.049-110.65s110.996 36.874 110.996 110.677c0 72.898-37.008 109.348-110.996 109.348s-111.049-36.45-111.049-109.322v-.053zm325.973 201.8v320.926h-91.07v381.072H836.199v-381.046h-91.07V752.966c0-14.027 4.994-25.903 14.93-35.706a49.928 49.928 0 0 1 36.29-14.718h327.355c13.283 0 25.158 4.889 35.6 14.718 10.36 9.83 15.62 21.705 15.62 35.706v-.027z' })
	        )
	      );
	    }
	  }]);

	  return IconFilesObtainedPermissionSolid;
	}(_react.Component);

	exports.default = IconFilesObtainedPermissionSolid;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFilesPublicDomainSolid = function (_Component) {
	  _inherits(IconFilesPublicDomainSolid, _Component);

	  function IconFilesPublicDomainSolid() {
	    _classCallCheck(this, IconFilesPublicDomainSolid);

	    return _possibleConstructorReturn(this, (IconFilesPublicDomainSolid.__proto__ || Object.getPrototypeOf(IconFilesPublicDomainSolid)).apply(this, arguments));
	  }

	  _createClass(IconFilesPublicDomainSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFilesPublicDomainSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 163c440.183 0 797 356.817 797 797s-356.817 797-797 797-797-356.817-797-797 356.817-797 797-797zm0 159.4c352.141 0 637.6 285.459 637.6 637.6s-285.459 637.6-637.6 637.6S322.4 1312.141 322.4 960 607.859 322.4 960 322.4z' }),
	          _react2.default.createElement('path', { d: 'M1106.648 817.417v252.277h63.973c38.92 0 67.134-11.424 84.694-34.377 17.534-22.901 26.301-53.453 26.301-91.762s-8.767-68.887-26.3-91.814c-17.535-22.848-46.227-34.271-86.077-34.271l-62.618-.08.027.027zm-109.72 343.32V726.374h170.876c70.136 0 125.183 17.72 165.086 53.213 39.797 35.493 59.722 90.14 59.722 163.916 0 73.855-19.925 128.53-59.722 163.97-39.903 35.493-94.923 53.24-165.086 53.24H996.981l-.053.026zm-301.665-353.15v131.77h93.94c22.768 0 39.85-6.375 51.274-18.968 11.423-12.593 17.109-28.267 17.109-46.97 0-43.914-23.725-65.885-71.2-65.885h-91.07l-.053.053zm-109.587 353.15V726.374H804.85c108.126 0 162.242 48.989 162.242 147.1 0 16.843-2.603 32.942-7.81 48.35-5.207 15.41-14.24 30.818-27.045 46.28-12.805 15.408-32.013 28.028-57.65 37.83-25.584 9.75-55.95 14.692-91.044 14.692h-86.82v140.113H585.676z' })
	        )
	      );
	    }
	  }]);

	  return IconFilesPublicDomainSolid;
	}(_react.Component);

	exports.default = IconFilesPublicDomainSolid;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFilmstripSolid = function (_Component) {
	  _inherits(IconFilmstripSolid, _Component);

	  function IconFilmstripSolid() {
	    _classCallCheck(this, IconFilmstripSolid);

	    return _possibleConstructorReturn(this, (IconFilmstripSolid.__proto__ || Object.getPrototypeOf(IconFilmstripSolid)).apply(this, arguments));
	  }

	  _createClass(IconFilmstripSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFilmstripSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M815.09 887.556v434.666l362.274-217.333z' }),
	          _react2.default.createElement('path', { d: 'M1322.273 597.778l108.682-144.89h181.136v144.89h-289.818zm289.89 869.333H307.91V742.667h1304.182l.072 724.444zM307.91 452.89h362.273L561.5 597.778H307.91v-144.89zm434.727 144.889l108.682-144.89h398.5l-108.682 144.89h-398.5zM163 308v1159.111C163 1547.017 227.992 1612 307.91 1612h1304.18c79.918 0 144.91-64.983 144.91-144.889V308H163z' })
	        )
	      );
	    }
	  }]);

	  return IconFilmstripSolid;
	}(_react.Component);

	exports.default = IconFilmstripSolid;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFlagSolid = function (_Component) {
	  _inherits(IconFlagSolid, _Component);

	  function IconFlagSolid() {
	    _classCallCheck(this, IconFlagSolid);

	    return _possibleConstructorReturn(this, (IconFlagSolid.__proto__ || Object.getPrototypeOf(IconFlagSolid)).apply(this, arguments));
	  }

	  _createClass(IconFlagSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFlagSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M402.333 1757H243V163h159.333zM641.333 358.751v564.914l734.049-282.457-734.049-282.457zm-79.666 760.657c-15.854 0-31.628-4.782-45.092-14.027-21.669-14.824-34.575-39.372-34.575-65.673v-797c0-26.301 12.906-50.849 34.575-65.673 21.67-14.904 49.234-18.092 73.692-8.767l1035.667 398.5c30.751 11.875 51.066 41.444 51.066 74.44 0 32.996-20.315 62.564-51.066 74.44l-1035.667 398.5c-9.241 3.427-18.96 5.26-28.6 5.26z' })
	        )
	      );
	    }
	  }]);

	  return IconFlagSolid;
	}(_react.Component);

	exports.default = IconFlagSolid;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFolderLockedSolid = function (_Component) {
	  _inherits(IconFolderLockedSolid, _Component);

	  function IconFolderLockedSolid() {
	    _classCallCheck(this, IconFolderLockedSolid);

	    return _possibleConstructorReturn(this, (IconFolderLockedSolid.__proto__ || Object.getPrototypeOf(IconFolderLockedSolid)).apply(this, arguments));
	  }

	  _createClass(IconFolderLockedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFolderLockedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 480h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240H320c-88.4 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80zM733.333 902.857v91.429h-16.525c-42.42 0-76.808 34.385-76.808 76.805v212.104c0 42.418 34.384 76.805 76.801 76.805H1123.2c42.416 0 76.801-34.385 76.801-76.805v-212.104c0-42.419-34.39-76.805-76.808-76.805h-16.525v-91.429c0-100.571-84-182.857-186.667-182.857s-186.667 82.286-186.667 182.857zM920 811.43c52.267 0 93.333 40.228 93.333 91.428v91.429H826.667v-91.429c0-51.2 41.066-91.428 93.333-91.428z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconFolderLockedSolid;
	}(_react.Component);

	exports.default = IconFolderLockedSolid;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconFolderSolid = function (_Component) {
	  _inherits(IconFolderSolid, _Component);

	  function IconFolderSolid() {
	    _classCallCheck(this, IconFolderSolid);

	    return _possibleConstructorReturn(this, (IconFolderSolid.__proto__ || Object.getPrototypeOf(IconFolderSolid)).apply(this, arguments));
	  }

	  _createClass(IconFolderSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconFolderSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 480h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240H320c-88.4 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconFolderSolid;
	}(_react.Component);

	exports.default = IconFolderSolid;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconForwardSolid = function (_Component) {
	  _inherits(IconForwardSolid, _Component);

	  function IconForwardSolid() {
	    _classCallCheck(this, IconForwardSolid);

	    return _possibleConstructorReturn(this, (IconForwardSolid.__proto__ || Object.getPrototypeOf(IconForwardSolid)).apply(this, arguments));
	  }

	  _createClass(IconForwardSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconForwardSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M439.993 480.026h519.989V240.031c0-32.32 19.52-61.519 49.359-73.918 30.08-12.4 64.319-5.6 87.198 17.36l719.985 719.985c31.28 31.279 31.28 81.838 0 113.117L1096.54 1736.56a80.026 80.026 0 0 1-56.559 23.44c-10.32 0-20.72-2-30.639-6.08-29.84-12.4-49.359-41.599-49.359-73.918v-239.995H81.002a.998.998 0 0 1-1.002-1.005v-957.97a.999.999 0 0 1 1.002-1.006h358.99z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconForwardSolid;
	}(_react.Component);

	exports.default = IconForwardSolid;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGithubSolid = function (_Component) {
	  _inherits(IconGithubSolid, _Component);

	  function IconGithubSolid() {
	    _classCallCheck(this, IconGithubSolid);

	    return _possibleConstructorReturn(this, (IconGithubSolid.__proto__ || Object.getPrototypeOf(IconGithubSolid)).apply(this, arguments));
	  }

	  _createClass(IconGithubSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGithubSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1087.2 1189.574c0-49 11.75-91 35.2-125.9 23.45-34.9 51.65-52.4 84.5-52.4 33.4 0 61.8 17.5 85.3 52.4s35.2 77 35.2 126-11.75 91-35.2 125.9c-23.45 34.9-51.9 52.4-85.3 52.4-32.85 0-61-17.5-84.5-52.4s-35.2-77-35.2-126zm-503.15 0c0-49 11.8-91 35.25-125.9 23.45-34.9 51.9-52.4 85.3-52.4 33.5 0 61.75 17.35 85 52s34.75 76.85 34.75 126.4c0 49.55-11.6 91.65-34.8 126.35-23.2 34.7-51.5 52-85 52-33.35 0-61.75-17.5-85.25-52.4s-35.2-77-35.2-126l-.05-.05zm-227.65-13.3c0 44.85 5.6 84.65 16.8 119.3 11.2 34.65 25.5 63.8 43 87.3s41.8 43.5 72.8 59.85 61.3 29.1 90.75 38c29.5 8.8 67.3 15.75 113.5 20.7 46.2 4.95 87.3 8 123.5 9 36.3 1 82.35 1.5 138.15 1.5 55.8 0 101.85-.5 138.1-1.5s77.5-4 123.6-9c46.1-5 84-11.85 113.5-20.75 29.4-8.85 59.65-21.5 90.7-38 31.05-16.5 55.3-36.35 72.75-59.8 17.45-23.45 31.85-52.5 43.1-87.25 11.2-34.65 16.8-74.4 16.8-119.25 0-76.15-34.15-145-102.5-206.5-20.35-18.85-44-33-71.2-42.7-27.2-9.7-57.75-15-92-16.4-34.1-1.3-66.85-1-98.15.8-31.3 1.8-69.85 4.3-115.75 7.5-45.9 3.1-85.5 4.65-118.9 4.65-33.4 0-73-1.5-118.9-4.65-46-3.15-84.5-5.6-115.85-7.5-31.35-1.9-64-2-98.2-.75-34.2 1.3-64.85 6.8-92 16.5-27.15 9.7-50.85 23.8-71.2 42.6-68.35 62.6-102.5 131.5-102.5 206.5l.1-.15zM160 979.924c0-129.35 43.3-241.25 129.9-335.65-4.7-12.5-9-26.75-12.9-42.65-3.9-15.9-7.5-38.6-11-68s-2-63.5 4-102.15c6-38.65 17-78 33.2-118.2 3.15-1 7.5-2 12.9-2.75s18.65-.1 39.5 2 43.3 6.65 67.3 13.7c24 7.05 56.2 20.6 96.65 40.7s82.85 45.25 127.2 75.5c76.15-20.85 180.5-31.3 313-31.3 133 0 237.5 10.5 313.7 31.3 44.35-30.25 86.5-55.4 126.35-75.5 39.85-20.1 72.5-33.65 97.8-40.7 25.35-7 47.5-11.75 66.5-14.1 19-2.35 32.8-2.75 41.15-1.2l11.75 2.35c16.15 40.15 27.25 79.5 33.25 118.15 6 38.65 7.3 72.65 3.9 102.1-3.4 29.45-7 52.15-10.9 68-3.9 15.85-8.2 30.15-12.9 42.7 86.45 94.4 129.65 206.3 129.65 335.65 0 72.5-6.75 138.1-20.3 196.75-13.55 58.65-32.5 109.65-56.7 153-24.2 43.35-55 81.3-92.3 114.2-37.3 32.85-77.7 59.7-121.25 80.6-43.55 20.9-93.3 37.8-149.1 50.85-55.8 13.05-112.65 22.15-170.5 27.4-63.75 5.45-127.75 8.05-191.75 7.8-69.35 0-133-2.65-190.9-7.85-57.9-5.2-114.6-14.35-170.15-27.4-55.5-13-105-30-148.25-50.85s-83.5-47.7-120.5-80.6c-37-32.85-67.5-71-91.5-114.25s-42.8-94.2-56.4-152.85c-13.55-58.75-20.4-124.3-20.4-196.8v.05z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGithubSolid;
	}(_react.Component);

	exports.default = IconGithubSolid;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGradebookExportSolid = function (_Component) {
	  _inherits(IconGradebookExportSolid, _Component);

	  function IconGradebookExportSolid() {
	    _classCallCheck(this, IconGradebookExportSolid);

	    return _possibleConstructorReturn(this, (IconGradebookExportSolid.__proto__ || Object.getPrototypeOf(IconGradebookExportSolid)).apply(this, arguments));
	  }

	  _createClass(IconGradebookExportSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGradebookExportSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1383.907 446.872l-113.111 113.12 159.988 160H983.938c-176.466 0-319.975 143.52-319.975 320v80H823.95v-80c0-88.16 71.754-160 159.987-160h446.846l-159.988 160 113.111 113.12L1737 799.992l-353.093-353.12zM1063.932 1440H343.988V480h879.932V320H184v1280h1039.92v-400h-159.988v240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGradebookExportSolid;
	}(_react.Component);

	exports.default = IconGradebookExportSolid;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGradebookImportSolid = function (_Component) {
	  _inherits(IconGradebookImportSolid, _Component);

	  function IconGradebookImportSolid() {
	    _classCallCheck(this, IconGradebookImportSolid);

	    return _possibleConstructorReturn(this, (IconGradebookImportSolid.__proto__ || Object.getPrototypeOf(IconGradebookImportSolid)).apply(this, arguments));
	  }

	  _createClass(IconGradebookImportSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGradebookImportSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M537.093 446.872l113.111 113.12-159.988 160h446.846c176.466 0 319.975 143.52 319.975 320v80H1097.05v-80c0-88.16-71.754-160-159.987-160H490.216l159.988 160-113.111 113.12L184 799.992l353.093-353.12zM857.068 1440h719.944V480H697.08V320H1737v1280H697.08v-400h159.988v240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGradebookImportSolid;
	}(_react.Component);

	exports.default = IconGradebookImportSolid;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGradebookSolid = function (_Component) {
	  _inherits(IconGradebookSolid, _Component);

	  function IconGradebookSolid() {
	    _classCallCheck(this, IconGradebookSolid);

	    return _possibleConstructorReturn(this, (IconGradebookSolid.__proto__ || Object.getPrototypeOf(IconGradebookSolid)).apply(this, arguments));
	  }

	  _createClass(IconGradebookSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGradebookSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M240 240v1440c0 44.24 35.84 80 80 80h240V160H320c-44.16 0-80 35.84-80 80zm1360-80H640v1600h960c44.16 0 80-35.76 80-80V240c0-44.16-35.84-80-80-80zm-470 1142.48c0 75.84-61.68 137.52-137.52 137.52H800v-440h192.48c75.84 0 137.52 61.68 137.52 137.52 0 31.12-10.72 59.44-28.16 82.48 17.44 23.04 28.16 51.44 28.16 82.48zM1520 1110h-164.96c-30.32 0-55.04 24.72-55.04 55.04v110c0 30.32 24.64 55.04 55.04 55.04H1520V1440h-164.96c-90.96 0-164.96-74-164.96-164.96v-110c0-90.96 74-164.96 164.96-164.96H1520V1110zm-527.52 165.04H910v55.04h82.48c15.12 0 27.52-12.32 27.52-27.52s-12.32-27.52-27.52-27.52zM1060 730v110H950V455.04c0-30.4 24.64-55.04 55.04-55.04h220c30.32 0 54.96 24.64 54.96 55.04V840h-110V730h-110zm0-220h110v110h-110V510zm-67.52 600H910v55.04h82.48c15.12 0 27.52-12.32 27.52-27.52s-12.32-27.52-27.52-27.52z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGradebookSolid;
	}(_react.Component);

	exports.default = IconGradebookSolid;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGroupDarkNewSolid = function (_Component) {
	  _inherits(IconGroupDarkNewSolid, _Component);

	  function IconGroupDarkNewSolid() {
	    _classCallCheck(this, IconGroupDarkNewSolid);

	    return _possibleConstructorReturn(this, (IconGroupDarkNewSolid.__proto__ || Object.getPrototypeOf(IconGroupDarkNewSolid)).apply(this, arguments));
	  }

	  _createClass(IconGroupDarkNewSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGroupDarkNewSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGroupDarkNewSolid;
	}(_react.Component);

	exports.default = IconGroupDarkNewSolid;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGroupNewSolid = function (_Component) {
	  _inherits(IconGroupNewSolid, _Component);

	  function IconGroupNewSolid() {
	    _classCallCheck(this, IconGroupNewSolid);

	    return _possibleConstructorReturn(this, (IconGroupNewSolid.__proto__ || Object.getPrototypeOf(IconGroupNewSolid)).apply(this, arguments));
	  }

	  _createClass(IconGroupNewSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGroupNewSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGroupNewSolid;
	}(_react.Component);

	exports.default = IconGroupNewSolid;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconGroupSolid = function (_Component) {
	  _inherits(IconGroupSolid, _Component);

	  function IconGroupSolid() {
	    _classCallCheck(this, IconGroupSolid);

	    return _possibleConstructorReturn(this, (IconGroupSolid.__proto__ || Object.getPrototypeOf(IconGroupSolid)).apply(this, arguments));
	  }

	  _createClass(IconGroupSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconGroupSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1040 960v140h560v254.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260h-400v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260H480v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1100h560V960H555V858.667c0-109.44 86.063-197.6 193.388-202.667 54.674 61.813 129.6 101.333 211.612 101.333 82.013 0 156.938-39.52 211.612-101.333C1279.95 661.067 1365 749.227 1365 858.667V960h-325zm-79.5-694C849.125 266 758 356.72 758 468.5S849.125 671 960.5 671 1163 580.28 1163 468.5 1071.875 266 960.5 266z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconGroupSolid;
	}(_react.Component);

	exports.default = IconGroupSolid;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconHamburgerSolid = function (_Component) {
	  _inherits(IconHamburgerSolid, _Component);

	  function IconHamburgerSolid() {
	    _classCallCheck(this, IconHamburgerSolid);

	    return _possibleConstructorReturn(this, (IconHamburgerSolid.__proto__ || Object.getPrototypeOf(IconHamburgerSolid)).apply(this, arguments));
	  }

	  _createClass(IconHamburgerSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconHamburgerSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1520 1480H400v-240h1120v240zm0-400H400V840h1120v240zm0-400H400V440h1120v240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconHamburgerSolid;
	}(_react.Component);

	exports.default = IconHamburgerSolid;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconHeartSolid = function (_Component) {
	  _inherits(IconHeartSolid, _Component);

	  function IconHeartSolid() {
	    _classCallCheck(this, IconHeartSolid);

	    return _possibleConstructorReturn(this, (IconHeartSolid.__proto__ || Object.getPrototypeOf(IconHeartSolid)).apply(this, arguments));
	  }

	  _createClass(IconHeartSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconHeartSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1280 320c-127.52 0-245.68 66.96-320 166.4C885.68 386.96 767.52 320 640 320c-220.56 0-400 179.44-400 400 0 439.28 649.92 850.56 677.6 867.84A80.132 80.132 0 0 0 960 1600c14.72 0 29.44-4.08 42.4-12.16 27.68-17.28 677.6-428.56 677.6-867.84 0-220.56-179.44-400-400-400', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconHeartSolid;
	}(_react.Component);

	exports.default = IconHeartSolid;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconHighlighterSolid = function (_Component) {
	  _inherits(IconHighlighterSolid, _Component);

	  function IconHighlighterSolid() {
	    _classCallCheck(this, IconHighlighterSolid);

	    return _possibleConstructorReturn(this, (IconHighlighterSolid.__proto__ || Object.getPrototypeOf(IconHighlighterSolid)).apply(this, arguments));
	  }

	  _createClass(IconHighlighterSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconHighlighterSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M80 1642h480.009l81.441-81.448-240.004-240.025L80 1642zm1186.31-162.865c-144.883 0-283.846 57.526-386.327 160.017H1840v-160.017h-573.69zm-182.46-997.054l-677.052 677.03 396.007 396.12 677.052-677.19-396.007-395.96zm552.154 239.824c62.481-62.486 62.481-163.776 0-226.343l-169.763-169.697c-62.4-62.487-163.763-62.487-226.244 0l-71.281 71.367 396.007 395.96 71.281-71.287z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconHighlighterSolid;
	}(_react.Component);

	exports.default = IconHighlighterSolid;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconHomeSolid = function (_Component) {
	  _inherits(IconHomeSolid, _Component);

	  function IconHomeSolid() {
	    _classCallCheck(this, IconHomeSolid);

	    return _possibleConstructorReturn(this, (IconHomeSolid.__proto__ || Object.getPrototypeOf(IconHomeSolid)).apply(this, arguments));
	  }

	  _createClass(IconHomeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconHomeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1736.545 943.446L1519.99 726.89V360.017h-239.995v126.878L1016.559 223.46c-31.28-31.28-81.839-31.28-113.118 0L183.455 943.446c-22.88 22.88-29.76 57.279-17.36 87.198 12.4 29.92 41.6 49.36 73.919 49.36H400.01v639.987h399.992V1320h319.994v399.992h399.992v-639.988h159.997c32.32 0 61.52-19.44 73.919-49.359 12.4-29.92 5.52-64.319-17.36-87.198', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconHomeSolid;
	}(_react.Component);

	exports.default = IconHomeSolid;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconHourGlassSolid = function (_Component) {
	  _inherits(IconHourGlassSolid, _Component);

	  function IconHourGlassSolid() {
	    _classCallCheck(this, IconHourGlassSolid);

	    return _possibleConstructorReturn(this, (IconHourGlassSolid.__proto__ || Object.getPrototypeOf(IconHourGlassSolid)).apply(this, arguments));
	  }

	  _createClass(IconHourGlassSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconHourGlassSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M879.84 837.36l-35.28-23.84C841.68 811.68 560 618.4 560 320h800c0 298.4-281.68 491.68-284.4 493.44L1040 837.2v245.6l35.6 23.76c2.88 1.92 284.4 193.04 284.4 493.44H560c0-298.24 281.68-491.6 284.4-493.44l35.6-23.76-.16-245.44zM400 1600h-80c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h1280c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80h-80c0-315.76-229.44-528.48-320-600.24v-79.52c90.56-71.6 320-284.32 320-600.24h80c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80H320c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h80c0 315.92 229.44 528.64 320 600.24v79.52c-90.56 71.76-320 284.48-320 600.24zm560-879.968s132.08-88.24 200.24-240H759.76c68.16 151.76 200.24 240 200.24 240', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconHourGlassSolid;
	}(_react.Component);

	exports.default = IconHourGlassSolid;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconImageSolid = function (_Component) {
	  _inherits(IconImageSolid, _Component);

	  function IconImageSolid() {
	    _classCallCheck(this, IconImageSolid);

	    return _possibleConstructorReturn(this, (IconImageSolid.__proto__ || Object.getPrototypeOf(IconImageSolid)).apply(this, arguments));
	  }

	  _createClass(IconImageSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconImageSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M480 1360l240-320 160 160 320-400 240 560H480zm200-880c110.32 0 200 89.52 200 200 0 110.56-89.68 200-200 200-110.56 0-200-89.44-200-200 0-110.48 89.44-200 200-200zM160 244.004a4 4 0 0 1 4.006-4.004h1591.988a4.005 4.005 0 0 1 4.006 4.004v1431.992a4 4 0 0 1-4.006 4.004H164.006a4.005 4.005 0 0 1-4.006-4.004V244.004z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconImageSolid;
	}(_react.Component);

	exports.default = IconImageSolid;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconImportContentSolid = function (_Component) {
	  _inherits(IconImportContentSolid, _Component);

	  function IconImportContentSolid() {
	    _classCallCheck(this, IconImportContentSolid);

	    return _possibleConstructorReturn(this, (IconImportContentSolid.__proto__ || Object.getPrototypeOf(IconImportContentSolid)).apply(this, arguments));
	  }

	  _createClass(IconImportContentSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconImportContentSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1360 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H913.12l160-160L960 526.88 606.88 880 960 1233.12 1073.12 1120l-160-160H1360zm-80-640v160H400v960h720v-240h160v400H240V320h1040z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconImportContentSolid;
	}(_react.Component);

	exports.default = IconImportContentSolid;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconImportSolid = function (_Component) {
	  _inherits(IconImportSolid, _Component);

	  function IconImportSolid() {
	    _classCallCheck(this, IconImportSolid);

	    return _possibleConstructorReturn(this, (IconImportSolid.__proto__ || Object.getPrototypeOf(IconImportSolid)).apply(this, arguments));
	  }

	  _createClass(IconImportSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconImportSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1360 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H913.12l160-160L960 526.88 606.88 880 960 1233.12 1073.12 1120l-160-160H1360zm-80-640v160H400v960h720v-240h160v400H240V320h1040z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconImportSolid;
	}(_react.Component);

	exports.default = IconImportSolid;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconIndent2Solid = function (_Component) {
	  _inherits(IconIndent2Solid, _Component);

	  function IconIndent2Solid() {
	    _classCallCheck(this, IconIndent2Solid);

	    return _possibleConstructorReturn(this, (IconIndent2Solid.__proto__ || Object.getPrototypeOf(IconIndent2Solid)).apply(this, arguments));
	  }

	  _createClass(IconIndent2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconIndent2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M320 400h1440V240H320v160zm480 320h960V560H800v160zm0 320h960V880H800v160zm0 320h960v-160H800v160zm-480 320h1440v-160H320v160zM160 480l480 480-480 480V480z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconIndent2Solid;
	}(_react.Component);

	exports.default = IconIndent2Solid;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconIndentSolid = function (_Component) {
	  _inherits(IconIndentSolid, _Component);

	  function IconIndentSolid() {
	    _classCallCheck(this, IconIndentSolid);

	    return _possibleConstructorReturn(this, (IconIndentSolid.__proto__ || Object.getPrototypeOf(IconIndentSolid)).apply(this, arguments));
	  }

	  _createClass(IconIndentSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconIndentSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M320 400h1440V240H320v160zm480 320h960V560H800v160zm0 320h960V880H800v160zm0 320h960v-160H800v160zm-480 320h1440v-160H320v160zM160 480l480 480-480 480V480z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconIndentSolid;
	}(_react.Component);

	exports.default = IconIndentSolid;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconInfoSolid = function (_Component) {
	  _inherits(IconInfoSolid, _Component);

	  function IconInfoSolid() {
	    _classCallCheck(this, IconInfoSolid);

	    return _possibleConstructorReturn(this, (IconInfoSolid.__proto__ || Object.getPrototypeOf(IconInfoSolid)).apply(this, arguments));
	  }

	  _createClass(IconInfoSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconInfoSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zM809 934c0-30.928 25.07-56 55.994-56h191.012c30.925 0 55.994 25.07 55.994 56v521c0 30.928-25.07 56-55.994 56H864.994c-30.925 0-55.994-25.07-55.994-56V934zm151.5-206c88.09 0 159.5-71.41 159.5-159.5S1048.59 409 960.5 409 801 480.41 801 568.5 872.41 728 960.5 728z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconInfoSolid;
	}(_react.Component);

	exports.default = IconInfoSolid;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconInstructureSolid = function (_Component) {
	  _inherits(IconInstructureSolid, _Component);

	  function IconInstructureSolid() {
	    _classCallCheck(this, IconInstructureSolid);

	    return _possibleConstructorReturn(this, (IconInstructureSolid.__proto__ || Object.getPrototypeOf(IconInstructureSolid)).apply(this, arguments));
	  }

	  _createClass(IconInstructureSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconInstructureSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M391.447 960c0 115.723-90.566 216.352-201.258 226.415C170.063 1110.943 160 1035.472 160 960c0-75.472 10.063-155.975 30.189-226.415C305.912 743.648 391.447 844.277 391.447 960zm135.849-70.44c38.893 0 70.44 31.547 70.44 70.44s-31.547 70.44-70.44 70.44-70.44-31.547-70.44-70.44 31.547-70.44 70.44-70.44zm75.471 322.012c-30.188 30.189-30.188 75.472 0 100.63 30.189 25.156 75.472 30.188 100.63 0 30.188-30.19 30.188-75.472 0-100.63-25.158-25.157-75.472-25.157-100.63 0zm-45.283 145.912c-80.503-80.503-211.32-90.566-306.918-20.126 80.503 135.85 191.195 246.541 322.013 322.013 75.471-85.535 65.408-216.352-15.095-301.887zm45.283-759.748c-30.188 30.189-30.188 75.472 0 100.629 30.189 25.157 75.472 30.188 100.63 0 30.188-30.189 25.156-75.472 0-100.63-30.19-25.156-75.472-25.156-100.63 0zm603.774 618.868c-30.189 25.157-30.189 70.44-5.032 100.629 25.158 30.188 70.44 30.188 100.63 5.031 0 0 5.03 0 5.03-5.031 25.158-30.189 25.158-75.472-5.03-100.63-25.158-25.156-65.41-25.156-95.598 0zm110.692-513.208c25.157-30.188 25.157-75.471-5.032-100.629-25.157-25.157-70.44-25.157-95.597 0-25.157 30.189-25.157 75.472 5.031 100.63 25.157 25.156 65.409 25.156 95.598 0zm40.251-145.912c80.503 80.503 211.321 90.566 306.919 20.126-80.504-135.849-191.195-246.54-322.013-322.013-75.472 90.567-65.409 221.384 15.094 301.887zm-800 0c85.535-80.503 90.566-211.32 20.126-301.887C441.761 331.07 331.07 441.761 255.597 577.61c90.567 70.44 221.384 60.377 301.887-20.126zm800 800c-80.503 80.503-90.566 211.321-20.126 306.919 135.85-80.504 246.541-191.195 322.013-322.013-85.535-75.472-216.352-65.409-301.887 15.094zM960 456.855c-40.252 0-70.44 30.189-70.44 70.44 0 40.252 30.188 70.44 70.44 70.44 40.252 0 70.44-35.22 70.44-75.47 0-35.221-35.22-65.41-70.44-65.41zm0-65.408c115.723 0 216.352-90.566 231.447-201.258C1115.975 170.063 1040.503 160 960 160c-80.503 0-155.975 10.063-231.447 30.189C743.648 305.912 844.277 391.447 960 391.447zm0 930.817c-40.252 0-75.472 30.189-75.472 70.44 0 40.252 30.189 75.472 70.44 75.472H960c40.252 0 70.44-35.22 70.44-75.472-5.031-40.251-35.22-70.44-70.44-70.44zm0 206.29c-115.723 0-216.352 85.534-226.415 201.257C809.057 1749.937 884.528 1760 960 1760c75.472 0 155.975-10.063 226.415-30.189-15.094-115.723-110.692-201.258-226.415-201.258zm432.704-644.026c-40.251 0-70.44 30.189-70.44 70.44 0 40.252 30.189 70.44 70.44 70.44 40.252 0 70.44-30.188 70.44-70.44 0-35.22-30.188-70.44-70.44-70.44zM1528.554 960c0 115.723 90.565 216.352 201.257 226.415C1749.937 1110.943 1760 1035.472 1760 960c0-75.472-10.063-155.975-30.189-226.415-115.723 10.063-201.258 110.692-201.258 226.415z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconInstructureSolid;
	}(_react.Component);

	exports.default = IconInstructureSolid;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconIntegrationsSolid = function (_Component) {
	  _inherits(IconIntegrationsSolid, _Component);

	  function IconIntegrationsSolid() {
	    _classCallCheck(this, IconIntegrationsSolid);

	    return _possibleConstructorReturn(this, (IconIntegrationsSolid.__proto__ || Object.getPrototypeOf(IconIntegrationsSolid)).apply(this, arguments));
	  }

	  _createClass(IconIntegrationsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconIntegrationsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1792 512h-256V128c0-70.4-57.6-128-128-128h-128c-70.4 0-128 57.6-128 128v384H768V128C768 57.6 710.4 0 640 0H512c-70.4 0-128 57.6-128 128v384H128C57.6 512 0 569.6 0 640v256c0 70.4 57.6 128 128 128h64v441.6c0 76.8 83.2 134.4 192 134.4h320v128c0 108.8 83.2 192 192 192h128c108.8 0 192-83.2 192-192v-128h320c108.8 0 192-57.6 192-134.4V1024h64c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128zm-512 0V128h128v384h-128zm-768 0V128h128v384H512zm512 1280H896c-38.4 0-64-25.6-64-64v-128h256v128c0 38.4-25.6 64-64 64zm576-364.8c0 25.6-25.6 44.8-64 44.8H384c-32 0-64-19.2-64-44.8V1024h1280v403.2zm64-531.2H128V640h1664v256h-128z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconIntegrationsSolid;
	}(_react.Component);

	exports.default = IconIntegrationsSolid;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconInvitationSolid = function (_Component) {
	  _inherits(IconInvitationSolid, _Component);

	  function IconInvitationSolid() {
	    _classCallCheck(this, IconInvitationSolid);

	    return _possibleConstructorReturn(this, (IconInvitationSolid.__proto__ || Object.getPrototypeOf(IconInvitationSolid)).apply(this, arguments));
	  }

	  _createClass(IconInvitationSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconInvitationSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1221.28 1200H698.72L160 892.16V1600c0 88.32 71.76 160 160 160h1280c88.32 0 160-71.68 160-160V892.16L1221.28 1200zM480 320h960v570.72l160-91.44V160H320v639.28l160 91.44V320zm160 560h480V720H640v160zm0-240h640V480H640v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconInvitationSolid;
	}(_react.Component);

	exports.default = IconInvitationSolid;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconKeyboardShortcutsSolid = function (_Component) {
	  _inherits(IconKeyboardShortcutsSolid, _Component);

	  function IconKeyboardShortcutsSolid() {
	    _classCallCheck(this, IconKeyboardShortcutsSolid);

	    return _possibleConstructorReturn(this, (IconKeyboardShortcutsSolid.__proto__ || Object.getPrototypeOf(IconKeyboardShortcutsSolid)).apply(this, arguments));
	  }

	  _createClass(IconKeyboardShortcutsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconKeyboardShortcutsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1693.417 599.8h-659.625v-73.3c0-40.49 32.806-73.3 73.291-73.3h73.292c121.106 0 219.875-98.78 219.875-219.9V160h-146.583v73.3c0 40.49-32.807 73.3-73.292 73.3h-73.292c-121.105 0-219.875 98.78-219.875 219.9v73.3H227.583C146.613 599.8 81 665.421 81 746.4v733c0 80.979 65.613 146.6 146.583 146.6h1465.834c80.97 0 146.583-65.62 146.583-146.6v-733c0-80.979-65.613-146.6-146.583-146.6zM1400 820h147v147h-147V820zm-220 0h147v147h-147V820zm221 220v147h-147v-147h147zM961 820h147v147H961V820zm220 220v147h-147v-147h147zm-220 0v147H814v-147h147zM741 820h147v147H741V820zm-220 0h147v147H521V820zm220 220v147H594v-147h147zM301 820h147v147H301V820zm220 220v147H374v-147h147zm-73 367H301v-147h147v147zm879 0H521v-147h806v147zm220 0h-147v-147h147v147zm74-220h-147v-147h147v147z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconKeyboardShortcutsSolid;
	}(_react.Component);

	exports.default = IconKeyboardShortcutsSolid;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLikeSolid = function (_Component) {
	  _inherits(IconLikeSolid, _Component);

	  function IconLikeSolid() {
	    _classCallCheck(this, IconLikeSolid);

	    return _possibleConstructorReturn(this, (IconLikeSolid.__proto__ || Object.getPrototypeOf(IconLikeSolid)).apply(this, arguments));
	  }

	  _createClass(IconLikeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconLikeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M538.07 893.534c0-179.837 334.297-249.516 402.149-301.675 67.931-52.239 245.482-150.877 261.165-359.753C1217.066 23.229 1530.4-5.81 1540.882 371.383c0 232.076-47.048 284.235-47.048 284.235 167.149 0 283.73 98.639 288.93 197.277 5.2 98.638-74.813 771.667-315.014 812.306-240.282 40.64-913.998 5.84-929.68-208.876v-562.79zm-320.056 786.45H378.04c44.168 0 80.014-35.839 80.014-79.998V800c0-44.16-35.846-79.999-80.014-79.999H218.014C173.846 720.001 138 755.841 138 800v799.986c0 44.16 35.846 79.999 80.014 79.999z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconLikeSolid;
	}(_react.Component);

	exports.default = IconLikeSolid;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLinkSolid = function (_Component) {
	  _inherits(IconLinkSolid, _Component);

	  function IconLinkSolid() {
	    _classCallCheck(this, IconLinkSolid);

	    return _possibleConstructorReturn(this, (IconLinkSolid.__proto__ || Object.getPrototypeOf(IconLinkSolid)).apply(this, arguments));
	  }

	  _createClass(IconLinkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconLinkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M762.573 987.466l-565.587 565.8 169.652 169.717 565.587-565.801-169.652-169.716zm395.774-56.572l565.747-565.72-169.652-169.797-565.747 565.8 169.652 169.717zm565.827-282.86l-28.396-28.327-169.652 169.717 28.316 28.326c15.517 15.523 15.517 40.888 0 56.492l-678.688 678.944c-10.158 10.243-22.076 11.763-28.315 11.763-6.24 0-18.077-1.52-28.316-11.683l-28.315-28.326-169.652 169.796 28.316 28.247c52.87 52.89 123.18 82.017 197.967 82.017s145.096-29.126 197.967-82.017l678.768-678.945c109.101-109.303 109.101-286.861 0-396.005zM225.302 1298.731l-28.316-28.246C144.116 1217.515 115 1147.18 115 1072.364c0-74.816 29.115-145.231 81.986-198.042l678.688-679.025c105.743-105.703 290.192-105.783 395.934.08l28.396 28.246-169.732 169.796-28.235-28.246c-10.159-10.242-22.077-11.762-28.316-11.762-6.159 0-18.077 1.52-28.235 11.682l-678.768 679.025c-10.238 10.162-11.758 22.085-11.758 28.246 0 6.241 1.52 18.164 11.758 28.406l28.236 28.166-169.652 169.796z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconLinkSolid;
	}(_react.Component);

	exports.default = IconLinkSolid;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLinkedinSolid = function (_Component) {
	  _inherits(IconLinkedinSolid, _Component);

	  function IconLinkedinSolid() {
	    _classCallCheck(this, IconLinkedinSolid);

	    return _possibleConstructorReturn(this, (IconLinkedinSolid.__proto__ || Object.getPrototypeOf(IconLinkedinSolid)).apply(this, arguments));
	  }

	  _createClass(IconLinkedinSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconLinkedinSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1560 1546.96h-257.36v-414.04c0-104-37.2-174.96-130.2-174.96-71.08 0-113.44 47.84-131.96 94.08-6.8 16.48-8.52 39.6-8.52 62.72v432.08H774.72s3.44-701.2 0-773.84h257.24v109.72c34.24-52.72 95.32-127.84 231.88-127.84 169.24 0 296.16 110.64 296.16 348.28v443.8zM503.84 667.44h-1.72C415.8 667.44 360 607.92 360 533.68 360 457.76 417.52 400 505.52 400s142.12 57.76 143.84 133.68c0 74.28-55.84 133.76-145.52 133.76zm128.6 879.52H375.2V773.12h257.24v773.84zM1600 160H320c-88.36 0-160 71.64-160 160v1280c0 88.36 71.64 160 160 160h1280c88.36 0 160-71.64 160-160V320c0-88.36-71.64-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconLinkedinSolid;
	}(_react.Component);

	exports.default = IconLinkedinSolid;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLockSolid = function (_Component) {
	  _inherits(IconLockSolid, _Component);

	  function IconLockSolid() {
	    _classCallCheck(this, IconLockSolid);

	    return _possibleConstructorReturn(this, (IconLockSolid.__proto__ || Object.getPrototypeOf(IconLockSolid)).apply(this, arguments));
	  }

	  _createClass(IconLockSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconLockSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M503.5 617.143v228.571H338.992c-35.342 0-63.992 28.65-63.992 63.996v786.295c0 35.343 28.655 63.995 64.002 63.995h1242.996c35.347 0 64.002-28.65 64.002-63.995V909.71c0-35.344-28.65-63.996-63.992-63.996H1417.5V617.143c0-251.429-205.65-457.143-457-457.143s-457 205.714-457 457.143zM960.936 1519c113.183 0 204.936-91.782 204.936-205s-91.753-205-204.936-205S756 1200.782 756 1314s91.753 205 204.936 205zM960.5 388.571c127.96 0 228.5 100.572 228.5 228.572v228.571H732V617.143c0-128 100.54-228.572 228.5-228.572z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconLockSolid;
	}(_react.Component);

	exports.default = IconLockSolid;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLtiSolid = function (_Component) {
	  _inherits(IconLtiSolid, _Component);

	  function IconLtiSolid() {
	    _classCallCheck(this, IconLtiSolid);

	    return _possibleConstructorReturn(this, (IconLtiSolid.__proto__ || Object.getPrototypeOf(IconLtiSolid)).apply(this, arguments));
	  }

	  _createClass(IconLtiSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconLtiSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1320 320H680c-66.24 0-120 53.76-120 120 0 66.24 53.76 120 120 120h200v920c0 66.24 53.76 120 120 120 66.24 0 120-53.76 120-120V560h200c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120M600 1360H320V440c0-66.24-53.76-120-120-120-66.24 0-120 53.76-120 120v1040c0 66.24 53.76 120 120 120h400c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120m1240-920v1040c0 66.24-53.76 120-120 120-66.24 0-120-53.76-120-120V440c0-66.24 53.76-120 120-120 66.24 0 120 53.76 120 120', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconLtiSolid;
	}(_react.Component);

	exports.default = IconLtiSolid;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMarkAsReadSolid = function (_Component) {
	  _inherits(IconMarkAsReadSolid, _Component);

	  function IconMarkAsReadSolid() {
	    _classCallCheck(this, IconMarkAsReadSolid);

	    return _possibleConstructorReturn(this, (IconMarkAsReadSolid.__proto__ || Object.getPrototypeOf(IconMarkAsReadSolid)).apply(this, arguments));
	  }

	  _createClass(IconMarkAsReadSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMarkAsReadSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zm0-240c309.28 0 560-250.72 560-560s-250.72-560-560-560-560 250.72-560 560 250.72 560 560 560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMarkAsReadSolid;
	}(_react.Component);

	exports.default = IconMarkAsReadSolid;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMarkerSolid = function (_Component) {
	  _inherits(IconMarkerSolid, _Component);

	  function IconMarkerSolid() {
	    _classCallCheck(this, IconMarkerSolid);

	    return _possibleConstructorReturn(this, (IconMarkerSolid.__proto__ || Object.getPrototypeOf(IconMarkerSolid)).apply(this, arguments));
	  }

	  _createClass(IconMarkerSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMarkerSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1016.56 1816.54l480-479.994c15.6-15.6 23.44-36.08 23.44-56.56V160c0-44.16-35.84-79.999-80-79.999H480c-44.16 0-80 35.84-80 80v1119.986c0 20.48 7.84 40.96 23.44 56.56l480 479.994c31.28 31.28 81.84 31.28 113.12 0z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMarkerSolid;
	}(_react.Component);

	exports.default = IconMarkerSolid;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMasqueradeSolid = function (_Component) {
	  _inherits(IconMasqueradeSolid, _Component);

	  function IconMasqueradeSolid() {
	    _classCallCheck(this, IconMasqueradeSolid);

	    return _possibleConstructorReturn(this, (IconMasqueradeSolid.__proto__ || Object.getPrototypeOf(IconMasqueradeSolid)).apply(this, arguments));
	  }

	  _createClass(IconMasqueradeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMasqueradeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1080.904 933.435c-20.695-1.774-27.721-10.574-28-32.278-1.46-115.479 88.73-223.93 203.653-237.948 84.034-10.296 168.66-15.861 257.773-23.966-3.86 16.87-5.67 39.166-13.947 58.748-80.348 190.122-235.479 251.166-419.479 235.444m-273.704 0c-184 15.722-339.13-45.322-419.478-235.444-8.279-19.582-10.087-41.878-13.948-58.748 89.113 8.105 173.704 13.67 257.774 23.966C746.47 677.226 836.66 785.679 835.2 901.157c-.278 21.704-7.304 30.504-28 32.278m647.165-808.418c-11.687 18.957-21.67 38.992-35.026 56.696-35.791 47.34-70.713 95.026-109.843 139.548-10.992 12.522-33.357 22.017-49.879 20.243-73.878-7.93-130.713 20.105-164.174 87.966-67.756-29.357-123.86-6.574-158.643 54.365-34.783-60.94-83.617-83.722-151.409-54.365-33.426-67.861-83.06-95.896-156.904-87.966-16.522 1.774-38.887-7.721-49.878-20.243-39.13-44.522-74.052-92.209-109.844-139.548-13.391-17.704-23.339-37.74-35.026-56.696-520.487 553.635-138.782 843.166-138.782 843.166 12.278 6.608 28.07 16.278 31.686 27.86 12.035 38.54 39.061 51.166 75.305 56.627 15.095 2.26 32.939 9.182 42.609 20.104 27.895 31.513 60.695 38.643 98.052 25.739 23.06-7.965 41.217-6.156 61.078 8.591 32.974 24.418 67.478 19.861 102.087.661 32.73-18.191 65.67-36.452 99.93-51.408 26.157-11.374 43.687-4.383 61.705 20.834 21.704 30.435 34.608 58.818 69.391 93.879 34.783-35.061 54.957-63.444 76.66-93.879 17.983-25.217 39.166-32.208 65.323-20.834 34.26 14.956 68.974 33.217 101.739 51.408 34.608 19.2 70.017 23.757 102.956-.66 19.896-14.748 39.965-16.557 62.992-8.592 27.79 9.6 42.504 8.07 77.287-6.296v626.957c0 38.26 31.304 69.565 69.565 69.565 38.26 0 69.565-31.304 69.565-69.565V999.696c0-1.287-.417-2.33-.035-3.653 3.618-11.582 18.713-21.252 30.991-27.86 0 0 380.974-289.53-139.478-843.166', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMasqueradeSolid;
	}(_react.Component);

	exports.default = IconMasqueradeSolid;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMasteryPathSolid = function (_Component) {
	  _inherits(IconMasteryPathSolid, _Component);

	  function IconMasteryPathSolid() {
	    _classCallCheck(this, IconMasteryPathSolid);

	    return _possibleConstructorReturn(this, (IconMasteryPathSolid.__proto__ || Object.getPrototypeOf(IconMasteryPathSolid)).apply(this, arguments));
	  }

	  _createClass(IconMasteryPathSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMasteryPathSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1600.459 857.069L1897 560.534 1600.459 264l-113.113 113.11 103.434 103.431h-206.867c-312.38 0-395.415 119.11-468.61 224.221-65.676 94.312-122.472 175.745-411.334 175.745H24v159.986h479.97c288.86 0 345.657 81.433 411.333 175.745 73.195 105.11 156.23 224.22 468.61 224.22h206.867l-103.434 103.432L1600.46 1657 1897 1360.466l-296.541-296.535-113.113 113.11 103.434 103.431h-206.867c-228.865 0-274.383-65.274-337.339-155.666-38.237-54.955-81.274-116.63-162.31-164.306 81.036-47.676 124.073-109.35 162.31-164.306 62.956-90.392 108.474-155.666 337.339-155.666h206.867l-103.434 103.43 113.113 113.11z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMasteryPathSolid;
	}(_react.Component);

	exports.default = IconMasteryPathSolid;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMaterialsRequiredLightSolid = function (_Component) {
	  _inherits(IconMaterialsRequiredLightSolid, _Component);

	  function IconMaterialsRequiredLightSolid() {
	    _classCallCheck(this, IconMaterialsRequiredLightSolid);

	    return _possibleConstructorReturn(this, (IconMaterialsRequiredLightSolid.__proto__ || Object.getPrototypeOf(IconMaterialsRequiredLightSolid)).apply(this, arguments));
	  }

	  _createClass(IconMaterialsRequiredLightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMaterialsRequiredLightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1712.806 461.086s0 .114-.114.114l.286-.743c0 .286 0 .457-.172.572v.057zm-580.574 912.171c-6.971 21.143-19.485 41.714-37.657 61.943-18.229 20.171-41.886 38.114-72.286 53.829-30.514 15.714-72 25.142-116.686 28.4v78.114h-57.486v-78.057c-70.115-5.086-126.458-25.657-166.515-64.115-40-38.514-63.143-98.4-69.372-168.057h134.172c-.571 31.6 8.8 63.143 28.515 83.886 19.657 20.8 41.257 32.914 73.143 38.629V1210.17c0-1.2-7.314-2.628-12.743-4.171-5.371-1.543-11.2-2.971-17.543-4.286-23.543-6.343-46.686-13.657-69.543-22.228-22.857-8.572-43.315-19.829-61.429-34-18.057-14.286-32.514-31.829-43.314-52.857-10.743-21.029-16.172-47.486-16.172-78.972 0-32.057 6.114-60.514 18.572-85.028 12.457-24.572 28.743-45.143 49.086-61.943C715.202 850.057 738.63 836.97 765.26 828c26.628-9.029 57.143-14.686 82.686-16.514V740.57h57.486v70.915c25.542 3.143 54.857 9.314 79.943 18.4 25.028 9.085 46.857 21.714 65.943 37.828 19.028 16.115 34.457 36.172 46.514 60.115 12.115 23.942 18.915 53.428 20.858 85.142H983.432c-.572-25.371-8.057-46.742-23.315-64.342-15.257-17.658-35.6-26.572-54.743-26.572v167.257c6.458 1.886 14.915 3.772 22.858 5.657 7.885 1.829 16.114 4.115 24.971 6.515 46.972 12.628 83.086 28.228 108.515 46.914 25.429 18.629 44.057 37.829 56.114 58.057 12.172 20.172 19.143 40.343 21.543 60.514 2.4 20.229 3.315 38 3.315 53.829 0 13.829-3.6 31.314-10.572 52.4l.114.057zM883.946 277.143c139.543 0 259.086 115.2 307.658 279.828H576.23c48.572-164.628 168.172-279.828 307.716-279.828zm829.66 181.314V460c.286-10.457-42.343-17.029-105.315-17.029h-271.086a859.832 859.832 0 0 1 14.457 38h256.572c3.2 0 6.286.8 9.258.858l-76.515 59.542c-12.743 5.715-67.543 15.6-137.372 15.6h-119.258C1232.176 328.914 1072.404 160 883.946 160c-188.515 0-348.402 168.857-400.573 396.857H265.372c-3.143 0-6.286.229-9.257.229l76.4-59.257c9.2-4.172 40.343-10.343 83.2-13.486 4.4-14.572 9.372-28.914 14.686-42.972-57.886 2.972-108.915 11.886-122.458 22.4L163.486 576.114c-2.857 2.172-3.772 4.172-3.2 6.286-.115-.343-.286-.629-.286-.971 7.771 192.914 15.429 385.885 23.143 579.028l23.143 579.029c0 .628.228 1.314.571 1.943.115.285.343.457.572.628.285.457.628.857 1.028 1.2l1.086.8c.629.343 1.029.743 1.6 1.029l1.6.8 1.943.971c.629.229 1.314.572 2 .743l2.4.914 2.4.743c1.829.572 3.714 1.086 5.657 1.372l3.257.742 3.2.572 3.6.743 1.543.285 1.943.286 5.086.743c.571 0 1.314.171 1.943.286l1.828.171 3.372.343 2.514.286c.743 0 1.657 0 2.4.228l3.029.286 1.657.114c1.6.115 3.257.286 4.971.343l1.6.114h.114l6.458.4c.628 0 1.2 0 1.828.115.743 0 1.543 0 2.4.171.8.114 1.486 1.486 2.229 1.486 2.114.114 4.228 1.657 6.343 1.657h.114c.457 0 .914-1.429 1.429-1.429 1.6 0 3.2-.628 4.742-.628 1.429 0 2.915-.343 4.229-.343.571 0 .971-.171 1.429-.114.342 0 .571-.115.857 0 2.114 0 4.228 1.2 6.343 1.2 1.314 0 2.685 1.2 4 1.2h1140.804c2 0 4.057-1.2 5.943-1.315 1.829 0 3.429.572 5.086.572.171 0 .285.743.4.743h.285c1.772 0 3.6-1.372 5.372-1.429 1.657 0 3.314-.743 4.971-.8.743 0 1.486-.4 2.286-.4l1.086-.171 1.371-.115c1.543 0 3.143-.114 4.8-.285l4.515-.286c.628 0 1.2 0 1.714-.114h.971c.629-.115 1.315-.115 2-.172 1.772-.114 3.6-1.2 5.257-1.314 1.658-.114 3.6-1.371 5.258-1.371.171 0 .342.971.628.971 2.629-.114 5.257.171 7.886 0 .457 0 .914.114 1.371 0 6.115-.4 11.943-.914 17.772-1.486h1.086l5.657-.743 3.485-.4h.858l8.343-1.2c.342 0 .628 0 .914-.114l2.514-.343c1.657-.228 3.486-.571 5.143-.743l1.943-.342 4-.572 2.971-.571 2.629-.629 3.486-.571 2.057-.457 3.657-.858 2.4-.571c.286 0 .629 0 .857-.114 1.886-.457 3.772-.972 5.6-1.429l.743-.228 1.2-.4c.914-.286 1.771-.572 2.743-.743l3.257-1.029.571-.171h.172a86.745 86.745 0 0 0 5.371-2.057c.229 0 .4-.172.629-.286l.457-.114 2.629-1.143c.457-.286.8-.515 1.2-.629l.628-.343.457-.228 2-1.2 1.2-.915 144.515-112.285c.114 0 .286-.172.4-.286.457-.4.914-.8 1.314-1.2l.8-1.086s0-.114.115-.114c.114 0 0 0 0-.114.228-.4.457-.915.571-1.315.114-.4 0-.685 0-1.2L1713.72 458.114l-.114.343zM789.374 941.371c-8.229 6.515-14.743 14.858-19.486 24.572-4.743 9.714-7.2 21.257-7.2 34.457 0 20.743 6.572 36.914 20 48.229 13.372 11.371 33.657 20.457 65.6 27.314v-154c-12.742 0-21.2 1.6-31.371 4.743-10.172 3.143-19.257 8.057-27.543 14.685zm195.315 318.515c-15.543-12.286-40.686-23.486-78.972-33.543v181.428c12.743-1.2 22.743-3.942 35.2-8.114 12.4-4.114 23.2-9.886 33.086-17.428 9.772-7.543 17.772-16.858 24.172-27.886 6.4-11.086 9.543-24.057 9.543-39.2 0-24.572-7.543-42.972-23.086-55.2l.057-.057z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMaterialsRequiredLightSolid;
	}(_react.Component);

	exports.default = IconMaterialsRequiredLightSolid;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMaterialsRequiredSolid = function (_Component) {
	  _inherits(IconMaterialsRequiredSolid, _Component);

	  function IconMaterialsRequiredSolid() {
	    _classCallCheck(this, IconMaterialsRequiredSolid);

	    return _possibleConstructorReturn(this, (IconMaterialsRequiredSolid.__proto__ || Object.getPrototypeOf(IconMaterialsRequiredSolid)).apply(this, arguments));
	  }

	  _createClass(IconMaterialsRequiredSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMaterialsRequiredSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M754.057 574.686c7.6-12.343 15.886-23.829 24.743-34.115h245.371c8.972 10.343 17.143 21.772 24.743 34.115H754.057zM901.486 407.77c-112.8.058-209.429 94.629-248.743 228h497.6c-39.429-133.371-136.057-227.942-248.857-228zm670.057 149.6c.171-.171.171-.457.343-.685-.057.228-.057.343-.172.514l-.114.114-.057.057zm38.057 942.458c0 .342-.229.685-.4 1.085v.115c0 .114-.114 0-.114.114a8.429 8.429 0 0 1-1.657 1.828l-.343.286-116.743 91.543-.972.629-1.542.914-.343.171-.4.172c-.172 0-.686.4-1.143.571-.514.343-1.314.572-2.057.914l-.457.172c-.172 0-.229.114-.4.171l-1.543.572c-.915.4-1.829.743-2.8 1.143h-.172l-.571.171-2.572.743c-.742.228-1.485.457-2.228.571l-.972.343-.571.172c-1.486.4-2.971.8-4.514 1.142-.229 0-.515.115-.686.172l-1.943.4-3.086.686-1.657.342-2.8.572-2.228.4-2.343.343-3.257.514c-.572 0-1.029.171-1.543.286-1.372.285-2.8.571-4.229.685l-2 .343c-.228 0-.457 0-.685.115l-6.686.914h-.8l-2.8.343-4.572.571h-.914c-4.628.572-9.428 1.029-14.343 1.429-.4 0-.743 0-1.085.114l-6.458.514h-.342c-1.429 0-2.8.172-4.286.229l-4.286.228c-.457 0-.971 0-1.486.115h-.8l-1.371.171-3.771.172c-1.315 0-2.515.114-3.829.171h-3.829c-1.314.114-2.685.114-4.057.171-1.371 0-2.8 0-4.285.115h-4.515l-4.857.114H429.83c-.4 0-.743 0-1.143-.114h-3.315l-3.942-.172h-1.315l-5.143-.228c-.514 0-1.085 0-1.828-.115-.743-.114-1.257 0-1.886-.114-.571 0-1.028 0-1.486-.114l-5.257-.343h-.114c-.4 0-.743 0-1.086-.114-1.428-.115-2.8-.172-4.114-.343l-1.314-.057c-.857 0-1.715-.172-2.457-.229-.743 0-1.429-.114-2.058-.171l-2-.286-2.8-.343-1.428-.228c-.572 0-1.143-.172-1.714-.229l-4.058-.571-1.714-.229c-.514 0-.686-.171-1.086-.229l-2.971-.514-2.629-.457a35.49 35.49 0 0 1-2.628-.571c-.743-.172-1.486-.343-2.229-.572l-2.4-.743-1.885-.514-1.943-.686c-.515-.171-1.086-.343-1.6-.571l-1.657-.8-1.143-.514-1.257-.915-.915-.571c-.285-.343-.571-.686-.8-1.086a1.796 1.796 0 0 1-.571-.571 2.874 2.874 0 0 1-.457-1.543c-6.172-157.257-12.457-314.514-18.686-471.829l-18.571-471.771c0 .343.171.571.228.857-.571-1.657.172-3.371 2.514-5.143l116.8-91.486c10.915-8.571 52.058-15.885 99.029-18.228a587.813 587.813 0 0 0-11.943 35.028c-34.628 2.515-59.771 7.658-67.2 10.972L393.83 635.6c2.457.114 5.028.114 7.542.114h176.343c42.115-186.971 171.257-323.543 323.772-323.543 152.514 0 281.657 136.572 323.828 323.543h96.457c56.4 0 100.743-7.943 110.972-12.685l61.771-48.4H1279.6c-3.543-11.658-7.543-22.972-11.714-34.115h219.143c50.914 0 85.485 6.286 85.085 14.8l.115-.228 37.485 943.828c0 .343-.114.572-.171.972l.057-.057zM1664.457 160H255.543C202.8 160 160 202.743 160 255.543v1408.914c0 52.8 42.743 95.543 95.543 95.543h1408.914c52.8 0 95.543-42.743 95.543-95.543V255.543c0-52.743-42.743-95.543-95.543-95.543zM901.543 407.771h-.114.114zm92.286 877.315h-.058c-5.142 8.971-11.771 16.571-19.6 22.743-7.828 6.171-17.028 10.971-27.028 14.342-10.057 3.372-19.6 5.6-28.857 6.515v-147.943c30.343 8.286 51.771 17.314 64.343 27.428 12.571 10.058 18.857 24.972 18.857 45.029 0 12.343-2.572 22.971-7.657 31.886zm-120.972-226.8c-24.628-5.6-42.343-13.086-53.143-22.286-10.8-9.257-16.114-22.4-16.114-39.314 0-10.8 1.886-20.115 5.771-28.115 3.829-7.942 9.086-14.628 15.772-20 6.686-5.371 14.114-9.371 22.4-11.942 8.286-2.572 16.628-3.886 25.314-3.886v125.543zm218.057 106.457l-.171-.114c-9.714-16.458-24.857-32.286-45.429-47.372-20.514-15.086-49.828-27.886-87.771-38.057-7.257-2.114-14-3.943-20.343-5.429l-18.857-4.628V932.857c17.486 0 32.457 7.257 44.743 21.543 12.343 14.229 18.685 31.886 19.2 52.343h109.371c-1.543-26.686-7.257-49.772-16.971-69.257-9.657-19.486-22.343-35.829-37.715-48.915-15.371-13.028-33.257-23.314-53.485-30.8-20.286-7.485-42-12.285-65.029-14.914v-59.371h-45.486v59.371c-23.085 1.486-45.428 6-66.971 13.429-21.543 7.371-40.571 18-56.971 31.6-16.458 13.6-29.658 30.457-39.772 50.4-10.057 19.885-14.914 43.2-14.914 69.371 0 25.657 4.343 47.029 13.086 64.286 8.742 17.2 20.457 31.543 35.028 43.086 14.686 11.542 31.2 20.8 49.657 27.771 18.457 6.914 37.2 12.971 56.229 18.057 8.4 1.657 16.628 4 24.628 6.914v160.858c-23.485-4.572-43.314-15.372-59.2-32.343-15.885-16.972-23.6-40-23.085-69.257H682.057c5.086 60.571 23.886 106.571 56.172 137.828 32.285 31.314 77.2 49.086 134.742 53.2v65.486h45.543v-65.486c38.515-2.571 70.057-10.343 94.686-23.143 24.629-12.8 44.229-27.428 58.857-43.885 14.572-16.458 24.743-33.258 30.4-50.343 5.657-17.143 8.514-31.543 8.514-42.857 0-12.858-.914-27.429-2.685-43.886-1.772-16.4-7.543-32.857-17.372-49.2z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMaterialsRequiredSolid;
	}(_react.Component);

	exports.default = IconMaterialsRequiredSolid;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMatureLightSolid = function (_Component) {
	  _inherits(IconMatureLightSolid, _Component);

	  function IconMatureLightSolid() {
	    _classCallCheck(this, IconMatureLightSolid);

	    return _possibleConstructorReturn(this, (IconMatureLightSolid.__proto__ || Object.getPrototypeOf(IconMatureLightSolid)).apply(this, arguments));
	  }

	  _createClass(IconMatureLightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMatureLightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1429.843 160L1760 1413.782l-341.087 92.987-223.5-848.696 71.762 890.015-284.33 77.466-375.032-807.236 223.43 848.625L490.09 1760 160 506.288l530.708-144.724 295.736 704.881-87.24-761.721L1429.843 160', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMatureLightSolid;
	}(_react.Component);

	exports.default = IconMatureLightSolid;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMatureSolid = function (_Component) {
	  _inherits(IconMatureSolid, _Component);

	  function IconMatureSolid() {
	    _classCallCheck(this, IconMatureSolid);

	    return _possibleConstructorReturn(this, (IconMatureSolid.__proto__ || Object.getPrototypeOf(IconMatureSolid)).apply(this, arguments));
	  }

	  _createClass(IconMatureSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMatureSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1610 160H310c-150 0-150 151.493-150 151.493v1300S160 1760 310 1760h1300c150 0 150-148.507 150-148.507v-1300S1760 160 1610 160zm-244.85 1288.657l-196.568-725 63.209 760.298-250.15 66.194-329.925-689.627 196.568 725L548.134 1665 257.761 594.03l466.866-123.657 260.224 602.164-76.791-650.746 466.865-123.657 290.448 1071.045-300.074 79.478h-.15z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMatureSolid;
	}(_react.Component);

	exports.default = IconMatureSolid;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMediaSolid = function (_Component) {
	  _inherits(IconMediaSolid, _Component);

	  function IconMediaSolid() {
	    _classCallCheck(this, IconMediaSolid);

	    return _possibleConstructorReturn(this, (IconMediaSolid.__proto__ || Object.getPrototypeOf(IconMediaSolid)).apply(this, arguments));
	  }

	  _createClass(IconMediaSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMediaSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1641 560h-160V400h160v160zm0 960h-160v-160h160v160zm-400-960h-160V400h160v160zm-480 640V720l480 240-480 240zm480 320h-160v-160h160v160zm-400 0H681v-160h160v160zM441 560H281V400h160v160zm0 960H281v-160h160v160zM681 400h160v160H681V400zm960-160H281c-88.4 0-160 71.6-160 160v1120c0 88.32 71.6 160 160 160h1360c88.32 0 160-71.68 160-160V400c0-88.4-71.68-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMediaSolid;
	}(_react.Component);

	exports.default = IconMediaSolid;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMessageSolid = function (_Component) {
	  _inherits(IconMessageSolid, _Component);

	  function IconMessageSolid() {
	    _classCallCheck(this, IconMessageSolid);

	    return _possibleConstructorReturn(this, (IconMessageSolid.__proto__ || Object.getPrototypeOf(IconMessageSolid)).apply(this, arguments));
	  }

	  _createClass(IconMessageSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMessageSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1759.76 598.772l-757.6 470.196c-12.88 8-27.52 12.081-42.16 12.081-14.64 0-29.28-4.08-42.16-12l-757.6-470.197c0 .72-.24 1.44-.24 2.08v720.056C160 1409.154 231.76 1481 320 1481h1280c88.24 0 160-71.846 160-160.012V600.932c0-.72-.24-1.44-.24-2.16zM960 906.876L242.8 461.802C265.76 449 291.84 441 320 441h1280c28.16 0 54.16 8 77.2 20.802L960 906.876z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMessageSolid;
	}(_react.Component);

	exports.default = IconMessageSolid;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMiniArrowDownSolid = function (_Component) {
	  _inherits(IconMiniArrowDownSolid, _Component);

	  function IconMiniArrowDownSolid() {
	    _classCallCheck(this, IconMiniArrowDownSolid);

	    return _possibleConstructorReturn(this, (IconMiniArrowDownSolid.__proto__ || Object.getPrototypeOf(IconMiniArrowDownSolid)).apply(this, arguments));
	  }

	  _createClass(IconMiniArrowDownSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMiniArrowDownSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMiniArrowDownSolid;
	}(_react.Component);

	exports.default = IconMiniArrowDownSolid;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMiniArrowLeftSolid = function (_Component) {
	  _inherits(IconMiniArrowLeftSolid, _Component);

	  function IconMiniArrowLeftSolid() {
	    _classCallCheck(this, IconMiniArrowLeftSolid);

	    return _possibleConstructorReturn(this, (IconMiniArrowLeftSolid.__proto__ || Object.getPrototypeOf(IconMiniArrowLeftSolid)).apply(this, arguments));
	  }

	  _createClass(IconMiniArrowLeftSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMiniArrowLeftSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M694.018 926.244c-27.296 18.796-27.3 49.268 0 68.067l509.835 351.074c27.297 18.796 49.425 7.18 49.425-25.96V601.13c0-33.133-22.125-44.758-49.425-25.96L694.018 926.245z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMiniArrowLeftSolid;
	}(_react.Component);

	exports.default = IconMiniArrowLeftSolid;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMiniArrowRightSolid = function (_Component) {
	  _inherits(IconMiniArrowRightSolid, _Component);

	  function IconMiniArrowRightSolid() {
	    _classCallCheck(this, IconMiniArrowRightSolid);

	    return _possibleConstructorReturn(this, (IconMiniArrowRightSolid.__proto__ || Object.getPrototypeOf(IconMiniArrowRightSolid)).apply(this, arguments));
	  }

	  _createClass(IconMiniArrowRightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMiniArrowRightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMiniArrowRightSolid;
	}(_react.Component);

	exports.default = IconMiniArrowRightSolid;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMiniArrowUpSolid = function (_Component) {
	  _inherits(IconMiniArrowUpSolid, _Component);

	  function IconMiniArrowUpSolid() {
	    _classCallCheck(this, IconMiniArrowUpSolid);

	    return _possibleConstructorReturn(this, (IconMiniArrowUpSolid.__proto__ || Object.getPrototypeOf(IconMiniArrowUpSolid)).apply(this, arguments));
	  }

	  _createClass(IconMiniArrowUpSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMiniArrowUpSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M994.034 694.296c-18.796-27.297-49.269-27.3-68.067 0L574.893 1204.13c-18.797 27.296-7.18 49.424 25.959 49.424h718.297c33.133 0 44.757-22.124 25.959-49.424L994.034 694.296z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMiniArrowUpSolid;
	}(_react.Component);

	exports.default = IconMiniArrowUpSolid;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMinimizeSolid = function (_Component) {
	  _inherits(IconMinimizeSolid, _Component);

	  function IconMinimizeSolid() {
	    _classCallCheck(this, IconMinimizeSolid);

	    return _possibleConstructorReturn(this, (IconMinimizeSolid.__proto__ || Object.getPrototypeOf(IconMinimizeSolid)).apply(this, arguments));
	  }

	  _createClass(IconMinimizeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMinimizeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797' }),
	          _react2.default.createElement('path', { d: 'M1358.5 1039.7h-797V880.3h797z' })
	        )
	      );
	    }
	  }]);

	  return IconMinimizeSolid;
	}(_react.Component);

	exports.default = IconMinimizeSolid;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconModuleSolid = function (_Component) {
	  _inherits(IconModuleSolid, _Component);

	  function IconModuleSolid() {
	    _classCallCheck(this, IconModuleSolid);

	    return _possibleConstructorReturn(this, (IconModuleSolid.__proto__ || Object.getPrototypeOf(IconModuleSolid)).apply(this, arguments));
	  }

	  _createClass(IconModuleSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconModuleSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1709.682 571.07l-717.3-318.738a79.798 79.798 0 0 0-64.796 0L210.366 571.07c-28.772 12.75-47.342 41.277-47.342 72.752 0 31.555 18.57 60.082 47.342 72.831l717.22 318.737c10.361 4.542 21.44 6.853 32.438 6.853 10.999 0 22.077-2.31 32.358-6.853l717.3-318.737c28.772-12.75 47.342-41.276 47.342-72.831 0-31.475-18.57-60.002-47.342-72.752' }),
	          _react2.default.createElement('path', { d: 'M1757 831.756L958.565 1194.48 163 863.072v172.516l766.316 319.375c9.803 4.223 20.243 6.056 30.684 6.056 11.238 0 22.475-2.311 32.916-6.933L1757 1006.822V831.756z' }),
	          _react2.default.createElement('path', { d: 'M1757 1150.493l-798.435 362.723L163 1181.809v172.516L929.316 1673.7c9.803 4.223 20.243 6.056 30.684 6.056 11.238 0 22.475-2.311 32.916-6.933L1757 1325.56v-175.066z' })
	        )
	      );
	    }
	  }]);

	  return IconModuleSolid;
	}(_react.Component);

	exports.default = IconModuleSolid;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

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

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMoveDownBottomSolid = function (_Component) {
	  _inherits(IconMoveDownBottomSolid, _Component);

	  function IconMoveDownBottomSolid() {
	    _classCallCheck(this, IconMoveDownBottomSolid);

	    return _possibleConstructorReturn(this, (IconMoveDownBottomSolid.__proto__ || Object.getPrototypeOf(IconMoveDownBottomSolid)).apply(this, arguments));
	  }

	  _createClass(IconMoveDownBottomSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMoveDownBottomSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M880 160v1006.88L696.56 983.44l-113.12 113.12L960 1473.12l376.56-376.56-113.12-113.12L1040 1166.88V160H880zM320 1760h1280v-160H320v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMoveDownBottomSolid;
	}(_react.Component);

	exports.default = IconMoveDownBottomSolid;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMoveDownSolid = function (_Component) {
	  _inherits(IconMoveDownSolid, _Component);

	  function IconMoveDownSolid() {
	    _classCallCheck(this, IconMoveDownSolid);

	    return _possibleConstructorReturn(this, (IconMoveDownSolid.__proto__ || Object.getPrototypeOf(IconMoveDownSolid)).apply(this, arguments));
	  }

	  _createClass(IconMoveDownSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMoveDownSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1239.839 1185.847L1040 1370.962V160H880v1210.962l-199.839-185.115L560 1300l400 380 400-380z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMoveDownSolid;
	}(_react.Component);

	exports.default = IconMoveDownSolid;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMoveUpSolid = function (_Component) {
	  _inherits(IconMoveUpSolid, _Component);

	  function IconMoveUpSolid() {
	    _classCallCheck(this, IconMoveUpSolid);

	    return _possibleConstructorReturn(this, (IconMoveUpSolid.__proto__ || Object.getPrototypeOf(IconMoveUpSolid)).apply(this, arguments));
	  }

	  _createClass(IconMoveUpSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMoveUpSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1360 616.56L960 240 560 616.56l120.161 113.12L880 546.24V1760h160V546.24l199.839 183.44z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMoveUpSolid;
	}(_react.Component);

	exports.default = IconMoveUpSolid;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMoveUpTopSolid = function (_Component) {
	  _inherits(IconMoveUpTopSolid, _Component);

	  function IconMoveUpTopSolid() {
	    _classCallCheck(this, IconMoveUpTopSolid);

	    return _possibleConstructorReturn(this, (IconMoveUpTopSolid.__proto__ || Object.getPrototypeOf(IconMoveUpTopSolid)).apply(this, arguments));
	  }

	  _createClass(IconMoveUpTopSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMoveUpTopSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1040 1760V753.12l183.44 183.44 113.12-113.12L960 446.88 583.44 823.44l113.12 113.12L880 753.12V1760h160zm560-1600H320v160h1280V160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconMoveUpTopSolid;
	}(_react.Component);

	exports.default = IconMoveUpTopSolid;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMsExcelSolid = function (_Component) {
	  _inherits(IconMsExcelSolid, _Component);

	  function IconMsExcelSolid() {
	    _classCallCheck(this, IconMsExcelSolid);

	    return _possibleConstructorReturn(this, (IconMsExcelSolid.__proto__ || Object.getPrototypeOf(IconMsExcelSolid)).apply(this, arguments));
	  }

	  _createClass(IconMsExcelSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMsExcelSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M898 894v299.91h181.657v-74.978H970.663V894zM1206.828 968.977h127.16V894h-127.16c-50.064 0-90.828 42.062-90.828 93.722 0 51.659 40.764 93.721 90.828 93.721h36.332c10.027 0 18.165 8.435 18.165 18.744 0 10.31-8.138 18.745-18.165 18.745H1116v74.977h127.16c50.064 0 90.828-42.062 90.828-93.722 0-51.659-40.764-93.721-90.828-93.721h-36.332c-10.027 0-18.165-8.435-18.165-18.744 0-10.31 8.138-18.745 18.165-18.745M687.761 1193.91l44.796-77.078 44.833 77.077h84.761l-87.231-149.954L862.15 894h-84.76l-44.834 77.077L687.761 894H603l87.195 149.955L603 1193.909zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z' }),
	          _react2.default.createElement('path', { d: 'M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z' })
	        )
	      );
	    }
	  }]);

	  return IconMsExcelSolid;
	}(_react.Component);

	exports.default = IconMsExcelSolid;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMsPptSolid = function (_Component) {
	  _inherits(IconMsPptSolid, _Component);

	  function IconMsPptSolid() {
	    _classCallCheck(this, IconMsPptSolid);

	    return _possibleConstructorReturn(this, (IconMsPptSolid.__proto__ || Object.getPrototypeOf(IconMsPptSolid)).apply(this, arguments));
	  }

	  _createClass(IconMsPptSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMsPptSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1133 879v74.977h83.578v224.932h83.577V953.977h83.578V879zM631.578 953.977h41.788c23.026 0 41.79 16.795 41.79 37.489 0 20.694-18.764 37.489-41.79 37.489h-41.788v-74.978zm0 149.955h41.788c69.119 0 125.367-50.46 125.367-112.466C798.733 929.46 742.485 879 673.366 879H548v299.91h83.578v-74.978zM1007.155 991.466c0 20.694-18.763 37.489-41.789 37.489h-41.788v-74.978h41.788c23.026 0 41.79 16.795 41.79 37.489zM840 879v299.91h83.578v-74.978h41.788c69.119 0 125.367-50.46 125.367-112.466 0-62.006-56.248-112.466-125.367-112.466H840zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z' }),
	          _react2.default.createElement('path', { d: 'M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z' })
	        )
	      );
	    }
	  }]);

	  return IconMsPptSolid;
	}(_react.Component);

	exports.default = IconMsPptSolid;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMsWordSolid = function (_Component) {
	  _inherits(IconMsWordSolid, _Component);

	  function IconMsWordSolid() {
	    _classCallCheck(this, IconMsWordSolid);

	    return _possibleConstructorReturn(this, (IconMsWordSolid.__proto__ || Object.getPrototypeOf(IconMsWordSolid)).apply(this, arguments));
	  }

	  _createClass(IconMsWordSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMsWordSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1271.165 964.73h125.252v-82.273h-125.252c-68.996 0-125.165 55.427-125.165 123.302v82.058c0 67.874 56.169 123.258 125.165 123.258h125.252v-82.272h-125.252c-22.994 0-41.533-18.33-41.533-40.986v-82.058c0-22.64 18.54-41.03 41.533-41.03zm-458.792 82.036c0-90.494-74.839-164.309-166.828-164.309H562v328.618h83.545c91.989 0 166.828-73.815 166.828-164.309zM646 965.457c45.878 0 83.415 36.84 83.415 82.058 0 45.235-37.537 82.059-83.415 82.059V965.457zm208 40.088v82.058c0 67.875 56.212 123.088 125.208 123.088s125.209-55.213 125.209-123.088v-82.058c0-67.875-56.213-123.088-125.209-123.088-68.996 0-125.208 55.213-125.208 123.088zm167.154.941v82.059c0 22.656-18.584 41.029-41.577 41.029-22.994 0-41.577-18.373-41.577-41.03v-82.058c0-22.64 18.583-41.029 41.577-41.029 22.993 0 41.577 18.39 41.577 41.03zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z' }),
	          _react2.default.createElement('path', { d: 'M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z' })
	        )
	      );
	    }
	  }]);

	  return IconMsWordSolid;
	}(_react.Component);

	exports.default = IconMsWordSolid;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMutedSolid = function (_Component) {
	  _inherits(IconMutedSolid, _Component);

	  function IconMutedSolid() {
	    _classCallCheck(this, IconMutedSolid);

	    return _possibleConstructorReturn(this, (IconMutedSolid.__proto__ || Object.getPrototypeOf(IconMutedSolid)).apply(this, arguments));
	  }

	  _createClass(IconMutedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconMutedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1578.947 264.259l-1354.631 1354.9 112.673 112.696 395.791-395.95 288.378 316.25c22.79 22.794 57.054 29.568 86.855 17.215 29.802-12.274 49.166-41.364 49.166-73.563V911.503l534.442-534.548-112.674-112.696zM1157.179 460.672V320.559c0-32.199-19.364-61.29-49.166-73.563-29.801-12.354-64.066-5.58-86.855 17.295L679.073 639.359H440.021c-43.827 0-79.685 35.865-79.685 79.7v478.2c0 16.896 6.535 31.88 15.619 44.791l781.224-781.378z' })
	        )
	      );
	    }
	  }]);

	  return IconMutedSolid;
	}(_react.Component);

	exports.default = IconMutedSolid;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconNextUnreadSolid = function (_Component) {
	  _inherits(IconNextUnreadSolid, _Component);

	  function IconNextUnreadSolid() {
	    _classCallCheck(this, IconNextUnreadSolid);

	    return _possibleConstructorReturn(this, (IconNextUnreadSolid.__proto__ || Object.getPrototypeOf(IconNextUnreadSolid)).apply(this, arguments));
	  }

	  _createClass(IconNextUnreadSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconNextUnreadSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M639.5 801L160 1040.75V1760h959v-719.25L639.5 801zm0 135L999 1115.816v225.368L639.5 1521 280 1341.184v-225.368L639.5 936zM400 1162v120l240 120 240-120v-120H400zM1272.552 322.696l182.752 182.752H771v159.4h684.304L1272.552 847.6l112.696 112.696 375.227-375.148L1385.248 210z' })
	        )
	      );
	    }
	  }]);

	  return IconNextUnreadSolid;
	}(_react.Component);

	exports.default = IconNextUnreadSolid;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconNotGradedSolid = function (_Component) {
	  _inherits(IconNotGradedSolid, _Component);

	  function IconNotGradedSolid() {
	    _classCallCheck(this, IconNotGradedSolid);

	    return _possibleConstructorReturn(this, (IconNotGradedSolid.__proto__ || Object.getPrototypeOf(IconNotGradedSolid)).apply(this, arguments));
	  }

	  _createClass(IconNotGradedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconNotGradedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M615.871 423.458C715.205 359.523 833.351 322.4 960 322.4c351.557 0 637.6 286.043 637.6 637.6 0 126.649-37.123 244.795-101.058 344.129l-1.986-1.985-329.85-329.85 195.125-273.216-162.11-115.724-175.81 246.143-406.04-406.039zM493.16 526.172C387.256 640.054 322.4 792.6 322.4 960c0 351.557 286.043 637.6 637.6 637.6 167.4 0 319.946-64.856 433.828-170.76l-11.984-11.984-311.057-311.057-177.759 248.899-322.307-322.227 140.91-140.91 155.973 155.973 60.38-84.536L493.16 526.172zM960 1757c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconNotGradedSolid;
	}(_react.Component);

	exports.default = IconNotGradedSolid;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconNoteDarkSolid = function (_Component) {
	  _inherits(IconNoteDarkSolid, _Component);

	  function IconNoteDarkSolid() {
	    _classCallCheck(this, IconNoteDarkSolid);

	    return _possibleConstructorReturn(this, (IconNoteDarkSolid.__proto__ || Object.getPrototypeOf(IconNoteDarkSolid)).apply(this, arguments));
	  }

	  _createClass(IconNoteDarkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconNoteDarkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1438.2 720.9H481.8V561.5h956.4v159.4zm0 318.8H481.8V880.3h956.4v159.4zm-239.1 318.8H481.8v-159.4h717.3v159.4zM1597.6 163H322.4C234.49 163 163 234.49 163 322.4v1275.2c0 87.91 71.49 159.4 159.4 159.4h1275.2c87.91 0 159.4-71.49 159.4-159.4V322.4c0-87.91-71.49-159.4-159.4-159.4z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconNoteDarkSolid;
	}(_react.Component);

	exports.default = IconNoteDarkSolid;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconNoteLightSolid = function (_Component) {
	  _inherits(IconNoteLightSolid, _Component);

	  function IconNoteLightSolid() {
	    _classCallCheck(this, IconNoteLightSolid);

	    return _possibleConstructorReturn(this, (IconNoteLightSolid.__proto__ || Object.getPrototypeOf(IconNoteLightSolid)).apply(this, arguments));
	  }

	  _createClass(IconNoteLightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconNoteLightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1691.835 1691.76H228.909V228.903h1463.2l-.274 1462.857zm.274-1645.714H228.91c-100.87 0-182.9 82.011-182.9 182.857V1691.76c0 100.846 82.03 182.857 182.9 182.857h1463.2c100.87 0 182.9-82.011 182.9-182.857V228.903c0-100.846-82.03-182.857-182.9-182.857z' }),
	          _react2.default.createElement('path', { d: 'M1509.2 503.143H411.8V686h1097.4zM1509.2 868.857H411.8v182.857h1097.4zM1234.85 1234.571H411.8v182.858h823.05z' })
	        )
	      );
	    }
	  }]);

	  return IconNoteLightSolid;
	}(_react.Component);

	exports.default = IconNoteLightSolid;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconOffSolid = function (_Component) {
	  _inherits(IconOffSolid, _Component);

	  function IconOffSolid() {
	    _classCallCheck(this, IconOffSolid);

	    return _possibleConstructorReturn(this, (IconOffSolid.__proto__ || Object.getPrototypeOf(IconOffSolid)).apply(this, arguments));
	  }

	  _createClass(IconOffSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconOffSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1226.188 392.261v196.86c158.615 92.009 265.687 263.275 265.687 459.426 0 293.03-238.322 531.333-531.375 531.333s-531.375-238.303-531.375-531.333c0-196.15 107.072-367.417 265.688-459.427V392.261C435.5 497.643 252 751.886 252 1048.547c0 390.618 317.85 708.444 708.5 708.444s708.5-317.826 708.5-708.444c0-296.661-183.502-550.904-442.813-656.286' }),
	          _react2.default.createElement('path', { d: 'M1049.063 871.444H871.937V163h177.125z' })
	        )
	      );
	    }
	  }]);

	  return IconOffSolid;
	}(_react.Component);

	exports.default = IconOffSolid;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconOutdent2Solid = function (_Component) {
	  _inherits(IconOutdent2Solid, _Component);

	  function IconOutdent2Solid() {
	    _classCallCheck(this, IconOutdent2Solid);

	    return _possibleConstructorReturn(this, (IconOutdent2Solid.__proto__ || Object.getPrototypeOf(IconOutdent2Solid)).apply(this, arguments));
	  }

	  _createClass(IconOutdent2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconOutdent2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M239.4 402.333H1674V243H239.4zM717.6 721H1674V561.667H717.6zM717.6 1039.667H1674V880.333H717.6zM717.6 1358.333H1674V1199H717.6zM239.4 1677H1674v-159.333H239.4zM558.2 482L80 960l478.2 478z' })
	        )
	      );
	    }
	  }]);

	  return IconOutdent2Solid;
	}(_react.Component);

	exports.default = IconOutdent2Solid;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconOutdentSolid = function (_Component) {
	  _inherits(IconOutdentSolid, _Component);

	  function IconOutdentSolid() {
	    _classCallCheck(this, IconOutdentSolid);

	    return _possibleConstructorReturn(this, (IconOutdentSolid.__proto__ || Object.getPrototypeOf(IconOutdentSolid)).apply(this, arguments));
	  }

	  _createClass(IconOutdentSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconOutdentSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M239.4 402.333H1674V243H239.4zM717.6 721H1674V561.667H717.6zM717.6 1039.667H1674V880.333H717.6zM717.6 1358.333H1674V1199H717.6zM239.4 1677H1674v-159.333H239.4zM558.2 482L80 960l478.2 478z' })
	        )
	      );
	    }
	  }]);

	  return IconOutdentSolid;
	}(_react.Component);

	exports.default = IconOutdentSolid;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPaintSolid = function (_Component) {
	  _inherits(IconPaintSolid, _Component);

	  function IconPaintSolid() {
	    _classCallCheck(this, IconPaintSolid);

	    return _possibleConstructorReturn(this, (IconPaintSolid.__proto__ || Object.getPrototypeOf(IconPaintSolid)).apply(this, arguments));
	  }

	  _createClass(IconPaintSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPaintSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1690.164 250.043c-93.116-93.39-243.911-93.39-337.026 0L657.634 946.93c88.348-5.892 178.524 23.646 246.056 91.24 67.453 67.675 96.929 158.12 90.97 246.654l695.504-697.046C1734.814 542.954 1760 482.285 1760 418.91a239.002 239.002 0 0 0-69.836-168.867zM377.613 1150.789c-221.109 221.574 30.27 335.346-217.613 583.83 0 0 410.2 52.309 631.229-169.265 114.328-114.49 114.328-300.076 0-414.565-114.17-114.41-299.447-114.41-413.616 0z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPaintSolid;
	}(_react.Component);

	exports.default = IconPaintSolid;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPaperclipSolid = function (_Component) {
	  _inherits(IconPaperclipSolid, _Component);

	  function IconPaperclipSolid() {
	    _classCallCheck(this, IconPaperclipSolid);

	    return _possibleConstructorReturn(this, (IconPaperclipSolid.__proto__ || Object.getPrototypeOf(IconPaperclipSolid)).apply(this, arguments));
	  }

	  _createClass(IconPaperclipSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPaperclipSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M846.615 1757C626.666 1757 467 1581.432 467 1339.524v-645.19C467 391.396 679.13 163 960.5 163S1454 391.397 1454 694.333v531.334h-151.846V694.333c0-219.896-143.723-379.523-341.654-379.523-197.931 0-341.654 159.627-341.654 379.523v645.19c0 132.303 70.457 265.667 227.77 265.667 157.312 0 227.769-133.364 227.769-265.666V770.238c0-45.695-11.085-151.81-113.885-151.81-102.8 0-113.885 106.115-113.885 151.81v531.333H694.77V770.238c0-181.64 106.824-303.619 265.731-303.619 158.907 0 265.73 121.979 265.73 303.62v569.285c0 241.908-159.665 417.476-379.615 417.476', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPaperclipSolid;
	}(_react.Component);

	exports.default = IconPaperclipSolid;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPartialSolid = function (_Component) {
	  _inherits(IconPartialSolid, _Component);

	  function IconPartialSolid() {
	    _classCallCheck(this, IconPartialSolid);

	    return _possibleConstructorReturn(this, (IconPartialSolid.__proto__ || Object.getPrototypeOf(IconPartialSolid)).apply(this, arguments));
	  }

	  _createClass(IconPartialSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPartialSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797' }),
	          _react2.default.createElement('path', { d: 'M1358.5 1039.7h-797V880.3h797z' })
	        )
	      );
	    }
	  }]);

	  return IconPartialSolid;
	}(_react.Component);

	exports.default = IconPartialSolid;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPdfSolid = function (_Component) {
	  _inherits(IconPdfSolid, _Component);

	  function IconPdfSolid() {
	    _classCallCheck(this, IconPdfSolid);

	    return _possibleConstructorReturn(this, (IconPdfSolid.__proto__ || Object.getPrototypeOf(IconPdfSolid)).apply(this, arguments));
	  }

	  _createClass(IconPdfSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPdfSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M670 1038.92h36.341c20.025 0 36.342-18.126 36.342-40.46S726.366 958 706.34 958H670v80.92zm-.333 161.08H597V877h109c60.095 0 109 54.345 109 121.125s-48.905 121.125-109 121.125h-36.333V1200zM1324 957.75V877h-145.333c-40.076 0-72.667 36.257-72.667 80.75V1200h72.667v-121.125h109v-80.75h-109V957.75H1324zM924 958v161.84c40.085 0 72.683-36.293 72.683-80.92 0-44.587-32.598-80.92-72.683-80.92zm-.333-81c80.151 0 145.333 72.433 145.333 161.5S1003.818 1200 923.667 1200H851V877h72.667zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80zm-1120-80H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPdfSolid;
	}(_react.Component);

	exports.default = IconPdfSolid;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPeerGradedSolid = function (_Component) {
	  _inherits(IconPeerGradedSolid, _Component);

	  function IconPeerGradedSolid() {
	    _classCallCheck(this, IconPeerGradedSolid);

	    return _possibleConstructorReturn(this, (IconPeerGradedSolid.__proto__ || Object.getPrototypeOf(IconPeerGradedSolid)).apply(this, arguments));
	  }

	  _createClass(IconPeerGradedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPeerGradedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1840 231.986L1727.959 120l-340.165 339.999-181.69-181.602-112.042 111.986 293.732 293.589zM593.222 736c88.292 0 164.465 41.1 211.208 103.337-77.904 63.412-124.647 150.309-124.647 250.123 0 34.055 5.194 64.586 15.58 95.118-32.892 12.917-65.785 22.311-102.14 22.311-143.691 0-259.682-105.686-259.682-234.857 0-129.172 115.991-234.858 259.681-234.858V736zm432.561 159.703c130.28 0 235.445 105.95 235.445 235.445 0 129.494-105.165 235.444-235.445 235.444-130.28 0-235.444-105.95-235.444-235.444 0-129.495 105.165-235.445 235.444-235.445zm-747.79 258.728c67.648 80.235 160.468 129.005 265.875 132.151-42.478 59.783-69.222 132.151-69.222 210.813v103.833H160v-261.156c0-81.808 48.77-152.603 117.992-187.214v1.573zm1022.597 157.323c69.222 34.61 117.992 105.406 117.992 187.214v261.156H631.968v-261.156c0-81.808 48.77-152.603 117.992-187.214 70.796 83.38 166.763 132.151 275.315 132.151 108.553 0 204.52-50.343 275.315-132.151z' })
	        )
	      );
	    }
	  }]);

	  return IconPeerGradedSolid;
	}(_react.Component);

	exports.default = IconPeerGradedSolid;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPeerReviewSolid = function (_Component) {
	  _inherits(IconPeerReviewSolid, _Component);

	  function IconPeerReviewSolid() {
	    _classCallCheck(this, IconPeerReviewSolid);

	    return _possibleConstructorReturn(this, (IconPeerReviewSolid.__proto__ || Object.getPrototypeOf(IconPeerReviewSolid)).apply(this, arguments));
	  }

	  _createClass(IconPeerReviewSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPeerReviewSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1642.607 277.398C1568.012 202.399 1467.952 160 1360.025 160c-220.586 0-399.975 179.463-399.975 399.992h133.325c0-147.064 119.593-266.661 266.65-266.661 71.862 0 137.658 29.399 187.388 79.265l-120.726 120.73H1760V160l-117.393 117.398zm-282.582 549.288c-71.796 0-137.591-29.333-187.388-79.265l120.726-120.73H960.05v333.326l117.593-117.598c74.528 74.265 176.322 117.598 282.382 117.598 220.586 0 399.975-179.397 399.975-399.992h-133.325c0 147.064-119.593 266.661-266.65 266.661zM447.82 921c71.906 0 133.942 33.472 172.01 84.159-63.447 51.643-101.514 122.412-101.514 203.702 0 27.734 4.23 52.6 12.689 77.464-26.789 10.52-53.577 18.171-83.185 18.171-117.023 0-211.487-86.071-211.487-191.27 0-105.198 94.464-191.27 211.487-191.27V921zm352.281 130.064c106.1 0 191.748 86.286 191.748 191.748 0 105.461-85.647 191.748-191.748 191.748-106.1 0-191.748-86.287-191.748-191.748 0-105.462 85.648-191.748 191.748-191.748zm-609.007 210.71c55.094 65.344 130.687 105.062 216.531 107.625-34.594 48.687-56.375 107.625-56.375 171.687v84.563H95V1412.96c0-66.625 39.719-124.281 96.094-152.468v1.28zm832.812 128.125c56.375 28.187 96.094 85.844 96.094 152.469v212.687H479.375v-212.687c0-66.625 39.719-124.282 96.094-152.47 57.656 67.907 135.812 107.626 224.218 107.626 88.407 0 166.563-41 224.22-107.625z' })
	        )
	      );
	    }
	  }]);

	  return IconPeerReviewSolid;
	}(_react.Component);

	exports.default = IconPeerReviewSolid;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

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

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPinterestSolid = function (_Component) {
	  _inherits(IconPinterestSolid, _Component);

	  function IconPinterestSolid() {
	    _classCallCheck(this, IconPinterestSolid);

	    return _possibleConstructorReturn(this, (IconPinterestSolid.__proto__ || Object.getPrototypeOf(IconPinterestSolid)).apply(this, arguments));
	  }

	  _createClass(IconPinterestSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPinterestSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1600.02 0H319.98C143.25.033 0 143.31 0 320.04v1279.92A319.98 319.98 0 0 0 319.98 1920h1280.04c176.73-.033 319.98-143.31 319.98-320.04V320.04A319.98 319.98 0 0 0 1600.02 0zM1053 1282.8c-87.18-6.84-123.78-50.04-192.12-91.56-37.62 197.22-83.58 386.28-219.6 485.04-42-298.08 61.62-522 109.8-759.6-82.2-138.18 9.84-416.4 183-347.76 213 84.3-184.5 513.78 82.38 567.42 278.7 55.92 392.4-483.6 219.72-658.98-249.6-253.32-726.72-5.76-668.1 357 14.28 88.62 105.9 115.5 36.6 237.9-159.78-35.4-207.48-161.4-201.36-329.4 9.96-275.1 247.2-467.64 485.1-494.22 300.9-33.6 583.32 110.4 622.32 393.6 43.92 319.44-135.84 665.4-457.62 640.56h-.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPinterestSolid;
	}(_react.Component);

	exports.default = IconPinterestSolid;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPlusSolid = function (_Component) {
	  _inherits(IconPlusSolid, _Component);

	  function IconPlusSolid() {
	    _classCallCheck(this, IconPlusSolid);

	    return _possibleConstructorReturn(this, (IconPlusSolid.__proto__ || Object.getPrototypeOf(IconPlusSolid)).apply(this, arguments));
	  }

	  _createClass(IconPlusSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPlusSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPlusSolid;
	}(_react.Component);

	exports.default = IconPlusSolid;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPostToSisSolid = function (_Component) {
	  _inherits(IconPostToSisSolid, _Component);

	  function IconPostToSisSolid() {
	    _classCallCheck(this, IconPostToSisSolid);

	    return _possibleConstructorReturn(this, (IconPostToSisSolid.__proto__ || Object.getPrototypeOf(IconPostToSisSolid)).apply(this, arguments));
	  }

	  _createClass(IconPostToSisSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPostToSisSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M961.12 1106.68l331.04 331.44-99.44 99.6-161.28-161.48V1840H890.8v-463.76l-161.28 161.48-99.44-99.6 331.04-331.44zM1540.84 768c-10.12 22.4-25.2 41.76-45.2 58-20 16.28-44.8 28.96-74.4 38-29.6 9.08-63.84 13.6-102.8 13.6-31.48 0-62-3.84-91.6-11.6-29.6-7.72-55.72-19.84-78.4-36.4-22.64-16.52-40.64-37.6-54-63.2-13.32-25.6-19.72-56-19.2-91.2h121.6c0 19.2 3.48 35.48 10.4 48.8 6.96 13.36 16.16 24.16 27.6 32.4 11.48 8.28 24.96 14.4 40.4 18.4 15.48 4 31.48 6 48 6 11.2 0 23.2-.92 36-2.8 12.8-1.84 24.8-5.44 36-10.8 11.2-5.32 20.56-12.64 28-22 7.48-9.32 11.2-21.2 11.2-35.6 0-15.44-4.92-28-14.8-37.6-9.84-9.6-22.8-17.6-38.8-24-16-6.4-34.12-12-54.4-16.8-20.24-4.8-40.8-10.12-61.6-16-21.32-5.32-42.12-11.84-62.4-19.6-20.24-7.72-38.4-17.72-54.4-30-16-12.24-28.92-27.6-38.8-46-9.84-18.4-14.8-40.64-14.8-66.8 0-29.32 6.28-54.8 18.8-76.4 12.56-21.6 28.96-39.6 49.2-54 20.28-14.4 43.2-25.04 68.8-32 25.6-6.92 51.2-10.4 76.8-10.4 29.88 0 58.56 3.36 86 10 27.48 6.68 51.88 17.48 73.2 32.4 21.36 14.96 38.28 34 50.8 57.2 12.56 23.2 18.8 51.36 18.8 84.4h-121.6c-1.04-17.04-4.64-31.2-10.8-42.4-6.12-11.2-14.24-20-24.4-26.4-10.12-6.4-21.72-10.92-34.8-13.6-13.04-2.64-27.32-4-42.8-4-10.12 0-20.24 1.08-30.4 3.2-10.12 2.16-19.32 5.88-27.6 11.2-8.24 5.36-15.04 12-20.4 20-5.32 8-8 18.16-8 30.4 0 11.2 2.16 20.28 6.4 27.2 4.28 6.96 12.68 13.36 25.2 19.2 12.56 5.88 29.88 11.76 52 17.6 22.16 5.88 51.08 13.36 86.8 22.4 10.68 2.16 25.48 6 44.4 11.6 18.96 5.6 37.76 14.56 56.4 26.8 18.68 12.28 34.8 28.68 48.4 49.2 13.6 20.56 20.4 46.8 20.4 78.8 0 26.16-5.04 50.4-15.2 72.8zm-645.6 96.8h125.6V293.6h-125.6v571.2zm-69.6-96.8c-10.12 22.4-25.2 41.76-45.2 58-20 16.28-44.8 28.96-74.4 38-29.6 9.08-63.84 13.6-102.8 13.6-31.44 0-62-3.84-91.6-11.6-29.6-7.72-55.72-19.84-78.4-36.4-22.64-16.52-40.64-37.6-54-63.2-13.32-25.6-19.72-56-19.2-91.2h121.6c0 19.2 3.48 35.48 10.4 48.8 6.96 13.36 16.16 24.16 27.6 32.4 11.48 8.28 24.92 14.4 40.4 18.4 15.48 4 31.48 6 48 6 11.2 0 23.2-.92 36-2.8 12.8-1.84 24.8-5.44 36-10.8 11.2-5.32 20.56-12.64 28-22 7.48-9.32 11.2-21.2 11.2-35.6 0-15.44-4.92-28-14.8-37.6-9.88-9.6-22.8-17.6-38.8-24-16-6.4-34.12-12-54.4-16.8-20.24-4.8-40.8-10.12-61.6-16-21.32-5.32-42.12-11.84-62.4-19.6-20.28-7.72-38.4-17.72-54.4-30-16-12.24-28.92-27.6-38.8-46-9.84-18.4-14.8-40.64-14.8-66.8 0-29.32 6.28-54.8 18.8-76.4 12.56-21.6 28.92-39.6 49.2-54 20.28-14.4 43.2-25.04 68.8-32 25.6-6.92 51.2-10.4 76.8-10.4 29.88 0 58.56 3.36 86 10 27.48 6.68 51.88 17.48 73.2 32.4 21.36 14.96 38.28 34 50.8 57.2 12.56 23.2 18.8 51.36 18.8 84.4h-121.6c-1.04-17.04-4.64-31.2-10.8-42.4-6.12-11.2-14.24-20-24.4-26.4-10.12-6.4-21.72-10.92-34.8-13.6-13.08-2.64-27.32-4-42.8-4-10.12 0-20.24 1.08-30.4 3.2-10.12 2.16-19.32 5.88-27.6 11.2-8.24 5.36-15.04 12-20.4 20-5.32 8-8 18.16-8 30.4 0 11.2 2.16 20.28 6.4 27.2 4.28 6.96 12.68 13.36 25.2 19.2 12.56 5.88 29.88 11.76 52 17.6 22.16 5.88 51.08 13.36 86.8 22.4 10.68 2.16 25.48 6 44.4 11.6 18.96 5.6 37.76 14.56 56.4 26.8 18.68 12.28 34.8 28.68 48.4 49.2 13.6 20.56 20.4 46.8 20.4 78.8 0 26.16-5.04 50.4-15.2 72.8zm802.08-688H292.32C219.32 80 160 139.28 160 212.36v724.2c0 73.44 59.24 132.36 132.32 132.36h1335.4c72.96 0 132.28-59.28 132.28-132.36v-724.2C1760 138.92 1700.8 80 1627.72 80z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPostToSisSolid;
	}(_react.Component);

	exports.default = IconPostToSisSolid;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPrerequisiteSolid = function (_Component) {
	  _inherits(IconPrerequisiteSolid, _Component);

	  function IconPrerequisiteSolid() {
	    _classCallCheck(this, IconPrerequisiteSolid);

	    return _possibleConstructorReturn(this, (IconPrerequisiteSolid.__proto__ || Object.getPrototypeOf(IconPrerequisiteSolid)).apply(this, arguments));
	  }

	  _createClass(IconPrerequisiteSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPrerequisiteSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1652.322 1040.534L258.812 1040c-55.317 0-98.812 42.749-98.812 96.078v528.271c0 53.276 43.049 95.651 98.421 95.651H1661.58c55.372 0 98.421-42.375 98.421-95.65v-528.272c0-53.276-52.305-95.544-107.622-95.544h-.056zM808.96 1358.48h76.16c0-10.453 1.027-21 3.08-31.64s5.507-20.347 10.36-29.12 11.293-15.867 19.32-21.28c8.027-5.413 17.827-8.12 29.4-8.12 17.173 0 31.267 5.32 42.28 15.96 11.013 10.64 16.52 25.48 16.52 44.52 0 11.947-2.707 22.587-8.12 31.92-5.413 9.333-12.133 17.733-20.16 25.2-8.027 7.467-16.893 14.28-26.6 20.44-9.707 6.16-18.853 12.227-27.44 18.2-16.8 11.573-32.76 22.96-47.88 34.16-15.12 11.2-28.28 23.427-39.48 36.68-11.2 13.253-20.067 28.28-26.6 45.08-6.533 16.8-9.8 36.587-9.8 59.36h287.84v-68.32H902.48c9.707-13.44 20.907-25.2 33.6-35.28a520.677 520.677 0 0 1 39.2-28.28 2976.634 2976.634 0 0 0 40.04-26.6c13.253-8.96 25.107-18.947 35.56-29.96 10.453-11.013 18.853-23.613 25.2-37.8 6.347-14.187 9.52-31.173 9.52-50.96 0-19.04-3.64-36.213-10.92-51.52-7.28-15.307-17.08-28.187-29.4-38.64s-26.6-18.48-42.84-24.08c-16.24-5.6-33.32-8.4-51.24-8.4-23.52 0-44.333 4.013-62.44 12.04s-33.133 19.227-45.08 33.6c-11.947 14.373-20.907 31.173-26.88 50.4-5.973 19.227-8.587 40.04-7.84 62.44zM1104 160v72h-72v-72h72zm-576 72h144v-72H528v72zm288 0h72v-72h-72v72zm576-72h-144v72h144v-72zm288 320v80h80v-80h-80zm-64-248.655s46.073.819 46.073 36.819V304h97.925v-72.655S1761.78 160 1664.665 160h-48.611v71.345H1616zM672 880v-72H528v72h144zm720-72h-144v72h144v-72zM160 559.623h80.284V480H160v79.623zM304 808h-35.06c-35.713 0-34.772-33.756-34.772-33.756V736H160v73.589S159.427 880 232.205 880H304v-72zm1358.056-72v38.233s-5.778 35.732-46.056 35.732V880h40.602c105.178 0 103.396-70.392 103.396-70.392V736H1662.056zM1032 808v72h72v-72h-72zm-216 0v72h72v-72h-72zM257.944 304v-35.877c0-33.628 46.056-36.818 46.056-36.818V160h-48.702C201.683 160 160 188.39 160 229.136V304h97.944zm774.269 416.498V317.109h-70.055c-2.496 20.496-7.536 13.833-15.168 24.68-7.68 10.849-17.04 20.16-28.08 26.88a115.607 115.607 0 0 1-37.632 14.113c-13.92 2.592-27.936 3.984-43.296 3.6l53.147 62.16h71.029v271.956h70.055z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPrerequisiteSolid;
	}(_react.Component);

	exports.default = IconPrerequisiteSolid;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPrinterSolid = function (_Component) {
	  _inherits(IconPrinterSolid, _Component);

	  function IconPrinterSolid() {
	    _classCallCheck(this, IconPrinterSolid);

	    return _possibleConstructorReturn(this, (IconPrinterSolid.__proto__ || Object.getPrototypeOf(IconPrinterSolid)).apply(this, arguments));
	  }

	  _createClass(IconPrinterSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPrinterSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1440 1120c0-44.16-35.84-80-80-80s-80 35.84-80 80c0 44.24 35.84 80 80 80s80-35.76 80-80zm-880 640h800v-320H560v320zm1200-880v720h-240v320H400v-320H160V880c0-132.32 107.68-240 240-240h160v160h800V640h160c132.32 0 240 107.68 240 240zM560 480H400V0h1120v480h-160V160H560v320z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPrinterSolid;
	}(_react.Component);

	exports.default = IconPrinterSolid;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPublishSolid = function (_Component) {
	  _inherits(IconPublishSolid, _Component);

	  function IconPublishSolid() {
	    _classCallCheck(this, IconPublishSolid);

	    return _possibleConstructorReturn(this, (IconPublishSolid.__proto__ || Object.getPrototypeOf(IconPublishSolid)).apply(this, arguments));
	  }

	  _createClass(IconPublishSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconPublishSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1351.26 665l157.885 157.861L871.915 1460 458 1046.145l157.884-157.862 256.03 255.994L1351.262 665zm260.58 86.05c.4-7.359.56-14.478.56-21.677C1612.4 471.65 1402.08 262 1143.52 262 956 262 788.88 374.304 715.04 539.88c-11.84-1.2-23.68-1.76-35.52-1.76-199.36 0-363.04 155.578-375.2 351.47C189.36 967.1 118 1097.56 118 1237.78c0 209.97 155.68 390.584 362.16 420.26l802.48.96c284.16 0 515.36-230.367 515.36-513.606 0-153.898-68.56-297.238-186.16-394.344z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconPublishSolid;
	}(_react.Component);

	exports.default = IconPublishSolid;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

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

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconQuizSolid = function (_Component) {
	  _inherits(IconQuizSolid, _Component);

	  function IconQuizSolid() {
	    _classCallCheck(this, IconQuizSolid);

	    return _possibleConstructorReturn(this, (IconQuizSolid.__proto__ || Object.getPrototypeOf(IconQuizSolid)).apply(this, arguments));
	  }

	  _createClass(IconQuizSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconQuizSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zm0-145.455c361.495 0 654.545-293.05 654.545-654.545 0-361.495-293.05-654.545-654.545-654.545-361.495 0-654.545 293.05-654.545 654.545 0 361.495 293.05 654.545 654.545 654.545zm378.451-726.949H1015.22V432.485l-430.977 568.889h323.233v455.11l430.976-568.888z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconQuizSolid;
	}(_react.Component);

	exports.default = IconQuizSolid;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconQuizStatsAvgSolid = function (_Component) {
	  _inherits(IconQuizStatsAvgSolid, _Component);

	  function IconQuizStatsAvgSolid() {
	    _classCallCheck(this, IconQuizStatsAvgSolid);

	    return _possibleConstructorReturn(this, (IconQuizStatsAvgSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsAvgSolid)).apply(this, arguments));
	  }

	  _createClass(IconQuizStatsAvgSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconQuizStatsAvgSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zm0-145.455c361.495 0 654.545-293.05 654.545-654.545 0-361.495-293.05-654.545-654.545-654.545-361.495 0-654.545 293.05-654.545 654.545 0 361.495 293.05 654.545 654.545 654.545zm316.206-561.942v48.573c0 5.287-1.9 10.409-5.697 15.365-3.797 4.957-9.403 9.335-16.818 13.135-7.414 3.8-16.275 6.856-26.583 9.17-10.307 2.312-21.971 3.469-34.991 3.469-15.19 0-29.838-1.983-43.944-5.948-14.105-3.965-27.035-9.995-38.79-18.09-11.754-8.096-22.152-18.422-31.193-30.979-9.042-12.556-15.914-27.26-20.616-44.112-19.53 27.756-41.773 49.151-66.728 64.186-24.956 15.035-53.347 22.552-85.174 22.552-21.7 0-41.05-2.644-58.049-7.93-16.999-5.287-32.008-13.052-45.028-23.296 3.616 14.209 6.058 28.83 7.324 43.865 1.265 15.034 1.898 28.995 1.898 41.882v118.954H745.09c-18.807 0-33.365-4.378-43.672-13.134-10.308-8.757-15.462-21.396-15.462-37.917v-623.52h134v300.36c0 30.73 7.957 55.347 23.87 73.85 15.914 18.505 39.423 27.757 70.527 27.757 28.934 0 53.618-7.27 74.052-21.808 20.435-14.54 36.8-35.026 49.097-61.46v-318.7h134v358.351c0 22.47 5.787 38.99 17.36 49.565 11.574 10.573 27.488 15.86 47.741 15.86h39.604z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconQuizStatsAvgSolid;
	}(_react.Component);

	exports.default = IconQuizStatsAvgSolid;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

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

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconQuizStatsHighSolid = function (_Component) {
	  _inherits(IconQuizStatsHighSolid, _Component);

	  function IconQuizStatsHighSolid() {
	    _classCallCheck(this, IconQuizStatsHighSolid);

	    return _possibleConstructorReturn(this, (IconQuizStatsHighSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsHighSolid)).apply(this, arguments));
	  }

	  _createClass(IconQuizStatsHighSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconQuizStatsHighSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zm0-145.455c361.495 0 654.545-293.05 654.545-654.545 0-361.495-293.05-654.545-654.545-654.545-361.495 0-654.545 293.05-654.545 654.545 0 361.495 293.05 654.545 654.545 654.545zm-164.923-988.8v145.432h235.84L589.372 1212.72l102.852 102.852 441.543-441.543v235.84h145.433V625.744H795.077z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconQuizStatsHighSolid;
	}(_react.Component);

	exports.default = IconQuizStatsHighSolid;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconQuizStatsLowSolid = function (_Component) {
	  _inherits(IconQuizStatsLowSolid, _Component);

	  function IconQuizStatsLowSolid() {
	    _classCallCheck(this, IconQuizStatsLowSolid);

	    return _possibleConstructorReturn(this, (IconQuizStatsLowSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsLowSolid)).apply(this, arguments));
	  }

	  _createClass(IconQuizStatsLowSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconQuizStatsLowSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1760c441.828 0 800-358.172 800-800s-358.172-800-800-800-800 358.172-800 800 358.172 800 800 800zm0-145.455c361.495 0 654.545-293.05 654.545-654.545 0-361.495-293.05-654.545-654.545-654.545-361.495 0-654.545 293.05-654.545 654.545 0 361.495 293.05 654.545 654.545 654.545zm319.2-834.523h-145.432v235.84L692.225 574.319 589.373 677.17l441.543 441.543H795.077v145.432h484.124V780.022z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconQuizStatsLowSolid;
	}(_react.Component);

	exports.default = IconQuizStatsLowSolid;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconQuizStatsTimeSolid = function (_Component) {
	  _inherits(IconQuizStatsTimeSolid, _Component);

	  function IconQuizStatsTimeSolid() {
	    _classCallCheck(this, IconQuizStatsTimeSolid);

	    return _possibleConstructorReturn(this, (IconQuizStatsTimeSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsTimeSolid)).apply(this, arguments));
	  }

	  _createClass(IconQuizStatsTimeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconQuizStatsTimeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1840c486.01 0 880-393.99 880-880S1446.01 80 960 80 80 473.99 80 960s393.99 880 880 880zm0-160c397.645 0 720-322.355 720-720s-322.355-720-720-720-720 322.355-720 720 322.355 720 720 720zm183.44-423.44l-240-240A79.927 79.927 0 0 1 880 960V560h160v366.88l216.56 216.56-113.12 113.12z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconQuizStatsTimeSolid;
	}(_react.Component);

	exports.default = IconQuizStatsTimeSolid;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRefreshSolid = function (_Component) {
	  _inherits(IconRefreshSolid, _Component);

	  function IconRefreshSolid() {
	    _classCallCheck(this, IconRefreshSolid);

	    return _possibleConstructorReturn(this, (IconRefreshSolid.__proto__ || Object.getPrototypeOf(IconRefreshSolid)).apply(this, arguments));
	  }

	  _createClass(IconRefreshSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRefreshSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M508.03 508.094C625.875 389.769 786.2 320.006 959.968 320.006c352.974 0 640.026 287.132 640.026 640.026H1760C1760 518.894 1401.186 160 959.968 160c-217.209 0-417.617 87.123-564.983 235.05L239.94 240.002v480.02h480.02l-211.93-211.93zm903.94 903.94c-117.845 118.325-278.171 188.088-451.938 188.088-352.974 0-640.026-287.132-640.026-640.026H160c0 441.138 358.814 800.032 800.032 800.032 217.209 0 417.617-87.123 564.983-235.13l155.046 155.127v-480.02h-480.02l211.93 211.93z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRefreshSolid;
	}(_react.Component);

	exports.default = IconRefreshSolid;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRemoveFromCollectionSolid = function (_Component) {
	  _inherits(IconRemoveFromCollectionSolid, _Component);

	  function IconRemoveFromCollectionSolid() {
	    _classCallCheck(this, IconRemoveFromCollectionSolid);

	    return _possibleConstructorReturn(this, (IconRemoveFromCollectionSolid.__proto__ || Object.getPrototypeOf(IconRemoveFromCollectionSolid)).apply(this, arguments));
	  }

	  _createClass(IconRemoveFromCollectionSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRemoveFromCollectionSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1336.528 519.56L959.968 143l-376.56 376.56 113.12 113.12 183.44-183.36v766.8h160v-766.8l183.44 183.36 113.12-113.12zm-67.888 696.584c-35.68 137.76-159.76 240-308.64 240-148.96 0-273.04-102.24-308.72-240H160v560h1600v-560h-491.36z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRemoveFromCollectionSolid;
	}(_react.Component);

	exports.default = IconRemoveFromCollectionSolid;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRepliedSolid = function (_Component) {
	  _inherits(IconRepliedSolid, _Component);

	  function IconRepliedSolid() {
	    _classCallCheck(this, IconRepliedSolid);

	    return _possibleConstructorReturn(this, (IconRepliedSolid.__proto__ || Object.getPrototypeOf(IconRepliedSolid)).apply(this, arguments));
	  }

	  _createClass(IconRepliedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRepliedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1479.991 480.026H960.002V240.031c0-32.32-19.52-61.519-49.359-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.985 719.985a80.026 80.026 0 0 0 56.559 23.44c10.32 0 20.72-2 30.639-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995h878.98a.998.998 0 0 0 1.002-1.005v-957.97a.999.999 0 0 0-1.002-1.006h-358.99z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRepliedSolid;
	}(_react.Component);

	exports.default = IconRepliedSolid;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconReply2Solid = function (_Component) {
	  _inherits(IconReply2Solid, _Component);

	  function IconReply2Solid() {
	    _classCallCheck(this, IconReply2Solid);

	    return _possibleConstructorReturn(this, (IconReply2Solid.__proto__ || Object.getPrototypeOf(IconReply2Solid)).apply(this, arguments));
	  }

	  _createClass(IconReply2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconReply2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1479.991 480.026H960.002V240.031c0-32.32-19.52-61.519-49.359-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.985 719.985a80.026 80.026 0 0 0 56.559 23.44c10.32 0 20.72-2 30.639-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995h878.98a.998.998 0 0 0 1.002-1.005v-957.97a.999.999 0 0 0-1.002-1.006h-358.99z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconReply2Solid;
	}(_react.Component);

	exports.default = IconReply2Solid;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconReplyAll2Solid = function (_Component) {
	  _inherits(IconReplyAll2Solid, _Component);

	  function IconReplyAll2Solid() {
	    _classCallCheck(this, IconReplyAll2Solid);

	    return _possibleConstructorReturn(this, (IconReplyAll2Solid.__proto__ || Object.getPrototypeOf(IconReplyAll2Solid)).apply(this, arguments));
	  }

	  _createClass(IconReplyAll2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconReplyAll2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1357.888 478.621V239.68c0-32.178-19.433-61.249-49.142-73.594-29.947-12.346-64.036-5.576-86.815 17.283L505.107 900.193c-31.142 31.142-31.142 81.48 0 112.621l716.824 716.825a79.674 79.674 0 0 0 56.31 23.336c10.275 0 20.629-1.99 30.505-6.053 29.709-12.345 49.142-41.416 49.142-73.594v-238.941h437.957c21.772 0 39.922-17.842 39.922-39.851V518.472c0-22.031-17.874-39.85-39.922-39.85h-437.957zM108.328 889.323c-31.104 31.105-31.104 81.535 0 112.64l734.71 734.709c31.104 31.104 81.534 31.104 112.639 0 31.104-31.105 31.104-81.535 0-112.64L293.014 963.52l626.91-660.513c31.104-31.105 31.104-81.535 0-112.64-31.105-31.104-81.535-31.104-112.64 0L108.328 889.324z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconReplyAll2Solid;
	}(_react.Component);

	exports.default = IconReplyAll2Solid;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconReplySolid = function (_Component) {
	  _inherits(IconReplySolid, _Component);

	  function IconReplySolid() {
	    _classCallCheck(this, IconReplySolid);

	    return _possibleConstructorReturn(this, (IconReplySolid.__proto__ || Object.getPrototypeOf(IconReplySolid)).apply(this, arguments));
	  }

	  _createClass(IconReplySolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconReplySolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1479.991 480.026H960.002V240.031c0-32.32-19.52-61.519-49.359-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.985 719.985a80.026 80.026 0 0 0 56.559 23.44c10.32 0 20.72-2 30.639-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995h878.98a.998.998 0 0 0 1.002-1.005v-957.97a.999.999 0 0 0-1.002-1.006h-358.99z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconReplySolid;
	}(_react.Component);

	exports.default = IconReplySolid;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconResetSolid = function (_Component) {
	  _inherits(IconResetSolid, _Component);

	  function IconResetSolid() {
	    _classCallCheck(this, IconResetSolid);

	    return _possibleConstructorReturn(this, (IconResetSolid.__proto__ || Object.getPrototypeOf(IconResetSolid)).apply(this, arguments));
	  }

	  _createClass(IconResetSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconResetSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 160c-217.2 0-417.6 87.12-564.96 235.04L240 240v480h480L508.08 508.08C625.92 389.68 786.24 320 960 320c352.88 0 640 287.12 640 640s-287.12 640-640 640-640-287.12-640-640H160c0 441.12 358.88 800 800 800s800-358.88 800-800-358.88-800-800-800', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconResetSolid;
	}(_react.Component);

	exports.default = IconResetSolid;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRssAddSolid = function (_Component) {
	  _inherits(IconRssAddSolid, _Component);

	  function IconRssAddSolid() {
	    _classCallCheck(this, IconRssAddSolid);

	    return _possibleConstructorReturn(this, (IconRssAddSolid.__proto__ || Object.getPrototypeOf(IconRssAddSolid)).apply(this, arguments));
	  }

	  _createClass(IconRssAddSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRssAddSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 800h-640V160H880v640H240v160h640v640h160V960h640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRssAddSolid;
	}(_react.Component);

	exports.default = IconRssAddSolid;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRssSolid = function (_Component) {
	  _inherits(IconRssSolid, _Component);

	  function IconRssSolid() {
	    _classCallCheck(this, IconRssSolid);

	    return _possibleConstructorReturn(this, (IconRssSolid.__proto__ || Object.getPrototypeOf(IconRssSolid)).apply(this, arguments));
	  }

	  _createClass(IconRssSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRssSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M280 200v159.992c705.76 0 1280 574.21 1280 1279.932h160C1720 845.966 1074.08 200 280 200zm0 479.975v159.991c441.12 0 800 358.701 800 799.958h160c0-529.332-430.64-959.95-960-959.95zM440 1720c132.548 0 240-107.446 240-239.987 0-132.542-107.452-239.988-240-239.988s-240 107.446-240 239.988C200 1612.554 307.452 1720 440 1720z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRssSolid;
	}(_react.Component);

	exports.default = IconRssSolid;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRubricDarkSolid = function (_Component) {
	  _inherits(IconRubricDarkSolid, _Component);

	  function IconRubricDarkSolid() {
	    _classCallCheck(this, IconRubricDarkSolid);

	    return _possibleConstructorReturn(this, (IconRubricDarkSolid.__proto__ || Object.getPrototypeOf(IconRubricDarkSolid)).apply(this, arguments));
	  }

	  _createClass(IconRubricDarkSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRubricDarkSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M800 480h960V320H800v160zm0 560h960V880H800v160zm0 560h960v-160H800v160zM560 160H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRubricDarkSolid;
	}(_react.Component);

	exports.default = IconRubricDarkSolid;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconRubricSolid = function (_Component) {
	  _inherits(IconRubricSolid, _Component);

	  function IconRubricSolid() {
	    _classCallCheck(this, IconRubricSolid);

	    return _possibleConstructorReturn(this, (IconRubricSolid.__proto__ || Object.getPrototypeOf(IconRubricSolid)).apply(this, arguments));
	  }

	  _createClass(IconRubricSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconRubricSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M800 480h960V320H800v160zm0 560h960V880H800v160zm0 560h960v-160H800v160zM560 160H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconRubricSolid;
	}(_react.Component);

	exports.default = IconRubricSolid;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconSearchAddressBookSolid = function (_Component) {
	  _inherits(IconSearchAddressBookSolid, _Component);

	  function IconSearchAddressBookSolid() {
	    _classCallCheck(this, IconSearchAddressBookSolid);

	    return _possibleConstructorReturn(this, (IconSearchAddressBookSolid.__proto__ || Object.getPrototypeOf(IconSearchAddressBookSolid)).apply(this, arguments));
	  }

	  _createClass(IconSearchAddressBookSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconSearchAddressBookSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconSearchAddressBookSolid;
	}(_react.Component);

	exports.default = IconSearchAddressBookSolid;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconSearchSolid = function (_Component) {
	  _inherits(IconSearchSolid, _Component);

	  function IconSearchSolid() {
	    _classCallCheck(this, IconSearchSolid);

	    return _possibleConstructorReturn(this, (IconSearchSolid.__proto__ || Object.getPrototypeOf(IconSearchSolid)).apply(this, arguments));
	  }

	  _createClass(IconSearchSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconSearchSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconSearchSolid;
	}(_react.Component);

	exports.default = IconSearchSolid;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconSettings2Solid = function (_Component) {
	  _inherits(IconSettings2Solid, _Component);

	  function IconSettings2Solid() {
	    _classCallCheck(this, IconSettings2Solid);

	    return _possibleConstructorReturn(this, (IconSettings2Solid.__proto__ || Object.getPrototypeOf(IconSettings2Solid)).apply(this, arguments));
	  }

	  _createClass(IconSettings2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconSettings2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1200c-132.56 0-240-107.44-240-240s107.44-240 240-240 240 107.44 240 240-107.44 240-240 240zm800-320l-274.96-137.52 97.2-291.6-113.12-113.12-291.6 97.2L1040 160H880L742.48 434.96l-291.6-97.2-113.12 113.12 97.2 291.6L160 880v160l274.96 137.52-97.2 291.6 113.12 113.12 291.6-97.2L880 1760h160l137.52-274.96 291.6 97.2 113.12-113.12-97.2-291.6L1760 1040V880z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconSettings2Solid;
	}(_react.Component);

	exports.default = IconSettings2Solid;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconSkypeSolid = function (_Component) {
	  _inherits(IconSkypeSolid, _Component);

	  function IconSkypeSolid() {
	    _classCallCheck(this, IconSkypeSolid);

	    return _possibleConstructorReturn(this, (IconSkypeSolid.__proto__ || Object.getPrototypeOf(IconSkypeSolid)).apply(this, arguments));
	  }

	  _createClass(IconSkypeSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconSkypeSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1683.9 1062.49c4.4-32.5 6.9-65.5 6.9-99.1 0-403.6-329-730.85-734.7-730.85-40.3 0-79.85 3.35-118.35 9.65-134.756-87.896-306.836-94.897-448.286-18.239C248.013 300.609 159.93 448.602 160 609.489c0 88.1 26 170 70.6 238.7-6 37.5-9 76-9 115.2 0 403.65 328.75 730.9 734.6 730.9 45.8 0 90.4-4.5 133.75-12.3 135.224 84.161 305.456 88.36 444.665 10.97 139.21-77.39 225.494-224.195 225.385-383.47 0-91.6-28-176.7-76-247h-.1zm-659.1 439.5c-233.5 12.15-342.7-39.5-442.8-133.4-111.75-104.9-66.85-224.5 24.2-230.65 91-6.15 145.65 103.1 194.2 133.5 48.5 30.25 233.1 99.25 330.6-12.2 106.15-121.35-70.6-184.15-200.2-203.15-185-27.4-418.6-127.5-400.4-324.7 18.2-197.15 167.5-298.2 324.5-312.5 200.3-18.15 330.65 30.4 433.75 118.35 119.2 101.65 54.7 215.3-21.25 224.5-75.65 9-160.65-167.25-327.5-169.9-171.9-2.75-288.15 178.9-75.85 230.5 212.5 51.65 439.9 72.8 521.8 267 82 194.2-127.35 400.4-361 412.5l-.05.15z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconSkypeSolid;
	}(_react.Component);

	exports.default = IconSkypeSolid;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconSpeedGraderSolid = function (_Component) {
	  _inherits(IconSpeedGraderSolid, _Component);

	  function IconSpeedGraderSolid() {
	    _classCallCheck(this, IconSpeedGraderSolid);

	    return _possibleConstructorReturn(this, (IconSpeedGraderSolid.__proto__ || Object.getPrototypeOf(IconSpeedGraderSolid)).apply(this, arguments));
	  }

	  _createClass(IconSpeedGraderSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconSpeedGraderSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 160c-441.8 0-800 358.2-800 800s358.2 800 800 800c441.85 0 800-358.2 800-800s-358.15-800-800-800zm0 1400c-314.5 0-572-242.1-597.5-550H560V910H362.5A596.35 596.35 0 0 1 489 589l152.8 152.85 70.7-70.7-155-155.1A596.5 596.5 0 0 1 910 362.5V560h100V362.5a597 597 0 0 1 358.25 158.7l-515.2 336.5-114.6 328.9 319.2-124.4 342-509.5A596.7 596.7 0 0 1 1557.5 910H1360v100h197.5c-25.5 307.9-283 550-597.5 550z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconSpeedGraderSolid;
	}(_react.Component);

	exports.default = IconSpeedGraderSolid;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconStandardsSolid = function (_Component) {
	  _inherits(IconStandardsSolid, _Component);

	  function IconStandardsSolid() {
	    _classCallCheck(this, IconStandardsSolid);

	    return _possibleConstructorReturn(this, (IconStandardsSolid.__proto__ || Object.getPrototypeOf(IconStandardsSolid)).apply(this, arguments));
	  }

	  _createClass(IconStandardsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconStandardsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1718.8 450.08l-720-400c-24.24-13.44-53.52-13.44-77.76 0l-720 400A80.03 80.03 0 0 0 160 520c0 55.52 9.12 1360 800 1360s800-1304.48 800-1360c0-29.04-15.76-55.76-41.2-69.92zm-731.76 935.2L580 1080l120-160 232.88 174.72 342.32-547.68 169.6 106-457.76 732.24z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconStandardsSolid;
	}(_react.Component);

	exports.default = IconStandardsSolid;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconStarLightSolid = function (_Component) {
	  _inherits(IconStarLightSolid, _Component);

	  function IconStarLightSolid() {
	    _classCallCheck(this, IconStarLightSolid);

	    return _possibleConstructorReturn(this, (IconStarLightSolid.__proto__ || Object.getPrototypeOf(IconStarLightSolid)).apply(this, arguments));
	  }

	  _createClass(IconStarLightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconStarLightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 1278.359c15.44 0 30.96 4.48 44.4 13.44l298.874 199.276-100.159-350.714c-8.08-27.919-.24-57.998 20.32-78.558l263.435-263.435h-286.875c-30.319 0-57.998-17.12-71.598-44.24L960 417.256 791.603 754.13c-13.6 27.12-41.279 44.239-71.598 44.239H433.13l263.435 263.435c20.56 20.56 28.4 50.639 20.32 78.558l-100.159 350.714 298.875-199.276a80.059 80.059 0 0 1 44.399-13.44m479.99 479.99c-15.439 0-30.879-4.48-44.398-13.439L960 1454.516 524.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconStarLightSolid;
	}(_react.Component);

	exports.default = IconStarLightSolid;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconStarSolid = function (_Component) {
	  _inherits(IconStarSolid, _Component);

	  function IconStarSolid() {
	    _classCallCheck(this, IconStarSolid);

	    return _possibleConstructorReturn(this, (IconStarSolid.__proto__ || Object.getPrototypeOf(IconStarSolid)).apply(this, arguments));
	  }

	  _createClass(IconStarSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconStarSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1439.99 1758.35c-15.439 0-30.879-4.48-44.398-13.44L960 1454.516 524.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconStarSolid;
	}(_react.Component);

	exports.default = IconStarSolid;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconStatsSolid = function (_Component) {
	  _inherits(IconStatsSolid, _Component);

	  function IconStatsSolid() {
	    _classCallCheck(this, IconStatsSolid);

	    return _possibleConstructorReturn(this, (IconStatsSolid.__proto__ || Object.getPrototypeOf(IconStatsSolid)).apply(this, arguments));
	  }

	  _createClass(IconStatsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconStatsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M600 1440c0-44.24-35.84-80-80-80H280c-44.16 0-80 35.76-80 80v160c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80v-160zm560-560c0-44.24-35.84-80-80-80H840c-44.16 0-80 35.76-80 80v720c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80V880zm560-560c0-44.24-35.84-80-80-80h-240c-44.16 0-80 35.76-80 80v1280c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80V320z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconStatsSolid;
	}(_react.Component);

	exports.default = IconStatsSolid;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconStrikethroughSolid = function (_Component) {
	  _inherits(IconStrikethroughSolid, _Component);

	  function IconStrikethroughSolid() {
	    _classCallCheck(this, IconStrikethroughSolid);

	    return _possibleConstructorReturn(this, (IconStrikethroughSolid.__proto__ || Object.getPrototypeOf(IconStrikethroughSolid)).apply(this, arguments));
	  }

	  _createClass(IconStrikethroughSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconStrikethroughSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1678 880H238v160h720c132.32 0 240 107.68 240 240s-107.68 240-240 240H718v-80H558v160c0 44.16 35.84 80 80 80h320c220.56 0 400-179.44 400-400 0-90.4-31.28-172.96-82-240h402V880zM732.768 720c-8.96-25.12-14.8-51.76-14.8-80 0-132.32 107.68-240 240-240h160v80h160V320c0-44.16-35.76-80-80-80h-240c-220.48 0-400 179.44-400 400 0 27.36 2.88 54.16 8.16 80h166.64z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconStrikethroughSolid;
	}(_react.Component);

	exports.default = IconStrikethroughSolid;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconStudentViewSolid = function (_Component) {
	  _inherits(IconStudentViewSolid, _Component);

	  function IconStudentViewSolid() {
	    _classCallCheck(this, IconStudentViewSolid);

	    return _possibleConstructorReturn(this, (IconStudentViewSolid.__proto__ || Object.getPrototypeOf(IconStudentViewSolid)).apply(this, arguments));
	  }

	  _createClass(IconStudentViewSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconStudentViewSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1240 1640H280c-88.24 0-160-71.76-160-160V680h160v800h960v160zm400-1360H600c-88.24 0-160 71.68-160 160v720c0 88.24 71.76 160 160 160h1040c88.24 0 160-71.76 160-160V440c0-88.32-71.76-160-160-160zm-80 480h-320V600h320v160zm0 320h-320V920h320v160zm-880 0c0-147.28 92.72-240 240-240-88.32 0-160-71.68-160-160s71.68-160 160-160 160 71.68 160 160-71.68 160-160 160c147.28 0 240 92.72 240 240H680z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconStudentViewSolid;
	}(_react.Component);

	exports.default = IconStudentViewSolid;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconSyllabusSolid = function (_Component) {
	  _inherits(IconSyllabusSolid, _Component);

	  function IconSyllabusSolid() {
	    _classCallCheck(this, IconSyllabusSolid);

	    return _possibleConstructorReturn(this, (IconSyllabusSolid.__proto__ || Object.getPrototypeOf(IconSyllabusSolid)).apply(this, arguments));
	  }

	  _createClass(IconSyllabusSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconSyllabusSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M800 480h960V320H800v160zm0 560h960V880H800v160zm0 560h960v-160H800v160zM560 160H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconSyllabusSolid;
	}(_react.Component);

	exports.default = IconSyllabusSolid;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTableSolid = function (_Component) {
	  _inherits(IconTableSolid, _Component);

	  function IconTableSolid() {
	    _classCallCheck(this, IconTableSolid);

	    return _possibleConstructorReturn(this, (IconTableSolid.__proto__ || Object.getPrototypeOf(IconTableSolid)).apply(this, arguments));
	  }

	  _createClass(IconTableSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTableSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1569.371 278.625V80.999H1437.62v197.626h-197.627v131.75h197.627V608h131.752V410.375H1767v-131.75zM933.462 502.715v455.368h401.406V744.126h182.715v213.957h3.787v182.715h-3.787v435.487h.947V1759H160V324.734h2.84V320h910.736v182.715H933.462zm-182.715 0v455.368H342.715V502.715h408.032zm182.716 638.083v435.487h401.405v-435.487H933.463zm-182.716 0v435.487H342.715v-435.487h408.032z' })
	        )
	      );
	    }
	  }]);

	  return IconTableSolid;
	}(_react.Component);

	exports.default = IconTableSolid;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTagSolid = function (_Component) {
	  _inherits(IconTagSolid, _Component);

	  function IconTagSolid() {
	    _classCallCheck(this, IconTagSolid);

	    return _possibleConstructorReturn(this, (IconTagSolid.__proto__ || Object.getPrototypeOf(IconTagSolid)).apply(this, arguments));
	  }

	  _createClass(IconTagSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTagSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M559.995 719.993c-88.479 0-159.998-71.76-159.998-159.998 0-88.399 71.52-159.998 159.998-159.998 88.319 0 159.998 71.6 159.998 159.998 0 88.239-71.68 159.998-159.998 159.998m1176.545 343.436l-879.989-879.99A79.926 79.926 0 0 0 799.992 160H239.999C195.839 160 160 195.84 160 239.999v559.993c0 21.2 8.48 41.6 23.44 56.56l879.989 879.988c15.6 15.6 36.08 23.44 56.559 23.44 20.48 0 40.96-7.84 56.56-23.44l559.992-559.993c31.28-31.28 31.28-81.839 0-113.118', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTagSolid;
	}(_react.Component);

	exports.default = IconTagSolid;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTargetSolid = function (_Component) {
	  _inherits(IconTargetSolid, _Component);

	  function IconTargetSolid() {
	    _classCallCheck(this, IconTargetSolid);

	    return _possibleConstructorReturn(this, (IconTargetSolid.__proto__ || Object.getPrototypeOf(IconTargetSolid)).apply(this, arguments));
	  }

	  _createClass(IconTargetSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTargetSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1040 1432.8V1120H880v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H800V880H487.2C521.12 679.44 679.44 521.12 880 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1120v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1840 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H880v245.6C591.12 361.84 361.84 591.12 325.52 880H80v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1840V880z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTargetSolid;
	}(_react.Component);

	exports.default = IconTargetSolid;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTextCenteredSolid = function (_Component) {
	  _inherits(IconTextCenteredSolid, _Component);

	  function IconTextCenteredSolid() {
	    _classCallCheck(this, IconTextCenteredSolid);

	    return _possibleConstructorReturn(this, (IconTextCenteredSolid.__proto__ || Object.getPrototypeOf(IconTextCenteredSolid)).apply(this, arguments));
	  }

	  _createClass(IconTextCenteredSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTextCenteredSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 240H240v160h1440V240zm-160 320H400v160h1120V560zM160 1040h1600V880H160v160zm240 320h1120v-160H400v160zm-160 320h1440v-160H240v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTextCenteredSolid;
	}(_react.Component);

	exports.default = IconTextCenteredSolid;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTextLeftSolid = function (_Component) {
	  _inherits(IconTextLeftSolid, _Component);

	  function IconTextLeftSolid() {
	    _classCallCheck(this, IconTextLeftSolid);

	    return _possibleConstructorReturn(this, (IconTextLeftSolid.__proto__ || Object.getPrototypeOf(IconTextLeftSolid)).apply(this, arguments));
	  }

	  _createClass(IconTextLeftSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTextLeftSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1600 240H160v160h1440V240zm-320 320H160v160h1120V560zM160 1040h1600V880H160v160zm1120 160H160v160h1120v-160zM160 1680h1440v-160H160v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTextLeftSolid;
	}(_react.Component);

	exports.default = IconTextLeftSolid;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTextRightSolid = function (_Component) {
	  _inherits(IconTextRightSolid, _Component);

	  function IconTextRightSolid() {
	    _classCallCheck(this, IconTextRightSolid);

	    return _possibleConstructorReturn(this, (IconTextRightSolid.__proto__ || Object.getPrototypeOf(IconTextRightSolid)).apply(this, arguments));
	  }

	  _createClass(IconTextRightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTextRightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M320 400h1440V240H320v160zm320 320h1120V560H640v160zm-480 320h1600V880H160v160zm480 320h1120v-160H640v160zm-320 320h1440v-160H320v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTextRightSolid;
	}(_react.Component);

	exports.default = IconTextRightSolid;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTextSolid = function (_Component) {
	  _inherits(IconTextSolid, _Component);

	  function IconTextSolid() {
	    _classCallCheck(this, IconTextSolid);

	    return _possibleConstructorReturn(this, (IconTextSolid.__proto__ || Object.getPrototypeOf(IconTextSolid)).apply(this, arguments));
	  }

	  _createClass(IconTextSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTextSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1488 160H432c-72.864 0-132 59.733-132 133.333V560h264V426.667h264v1066.666H564V1760h792v-266.667h-264V426.667h264V560h264V293.333c0-73.6-59.136-133.333-132-133.333', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTextSolid;
	}(_react.Component);

	exports.default = IconTextSolid;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTextareaSolid = function (_Component) {
	  _inherits(IconTextareaSolid, _Component);

	  function IconTextareaSolid() {
	    _classCallCheck(this, IconTextareaSolid);

	    return _possibleConstructorReturn(this, (IconTextareaSolid.__proto__ || Object.getPrototypeOf(IconTextareaSolid)).apply(this, arguments));
	  }

	  _createClass(IconTextareaSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTextareaSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M478 1600v-160H318V480h160V320h961v160h479V0h-479v160H478V0H-1v480h159v960H-1v480h479v-160h963v160h479v-480h-479v160H478z' }),
	          _react2.default.createElement('path', { d: 'M1600 1520h160V400h-160z' }),
	          _react2.default.createElement('path', { d: 'M600 730.907V544.7c0-13.134 6.567-19.701 19.7-19.701h680.636c13.134 0 19.701 6.567 19.701 19.7v186.207c0 13.134-6.567 19.7-19.7 19.7h-79.44c-13.557 0-19.7-6.566-18.43-19.7l6.355-101.683h-175.401v676.823h108.037c13.134 0 19.7 6.567 19.7 19.7v63.552c0 13.134-6.566 19.701-19.7 19.701H779.85c-13.134 0-19.7-6.567-19.7-19.7v-63.552c0-7.203 1.482-12.287 4.448-15.253 2.966-2.965 8.05-4.448 15.252-4.448h106.767V629.224H710.579l6.356 101.683c1.27 13.134-4.66 19.7-17.795 19.7H619.7c-13.133 0-19.7-6.566-19.7-19.7z', stroke: '#333', strokeWidth: '3' })
	        )
	      );
	    }
	  }]);

	  return IconTextareaSolid;
	}(_react.Component);

	exports.default = IconTextareaSolid;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTimerSolid = function (_Component) {
	  _inherits(IconTimerSolid, _Component);

	  function IconTimerSolid() {
	    _classCallCheck(this, IconTimerSolid);

	    return _possibleConstructorReturn(this, (IconTimerSolid.__proto__ || Object.getPrototypeOf(IconTimerSolid)).apply(this, arguments));
	  }

	  _createClass(IconTimerSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTimerSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 0c-82.96 0-163.12 11.68-240 31.6v165.28C795.84 173.04 876.4 160 960 160c441.2 0 800 358.88 800 800s-358.8 800-800 800c-441.12 0-800-358.88-800-800 0-223.04 92.16-424.48 240-569.52V640h160V160H80v160h166.32C93.6 490 0 714 0 960c0 529.36 430.72 960 960 960 529.36 0 960-430.64 960-960S1489.36 0 960 0zm-80 400v560c0 21.2 8.4 41.6 23.44 56.64l320 320 113.12-113.2L1040 926.88V400H880z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTimerSolid;
	}(_react.Component);

	exports.default = IconTimerSolid;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconToggleLeftSolid = function (_Component) {
	  _inherits(IconToggleLeftSolid, _Component);

	  function IconToggleLeftSolid() {
	    _classCallCheck(this, IconToggleLeftSolid);

	    return _possibleConstructorReturn(this, (IconToggleLeftSolid.__proto__ || Object.getPrototypeOf(IconToggleLeftSolid)).apply(this, arguments));
	  }

	  _createClass(IconToggleLeftSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconToggleLeftSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M320 320h400V160H320c-88.24 0-160 71.76-160 160v1280c0 88.24 71.76 160 160 160h400v-160H320V320zm1040-160h-160v160h160V160zm-160 1600h160v-160h-160v160zm400-1600h-80v160h80v80h160v-80c0-88.24-71.76-160-160-160zm0 1440h-80v160h80c88.24 0 160-71.76 160-160v-80h-160v80zm0-880h160V560h-160v160zm0 640h160v-160h-160v160zm0-320h160V880h-160v160zm-536.56-343.44L1166.88 800H880c-176.48 0-320 143.52-320 320h160c0-88.24 71.76-160 160-160h286.88l-103.44 103.44 113.12 113.12L1473.12 880l-296.56-296.56-113.12 113.12zM1040 160H880v400h160V160zM880 1760h160v-560H880v560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconToggleLeftSolid;
	}(_react.Component);

	exports.default = IconToggleLeftSolid;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconToggleRightSolid = function (_Component) {
	  _inherits(IconToggleRightSolid, _Component);

	  function IconToggleRightSolid() {
	    _classCallCheck(this, IconToggleRightSolid);

	    return _possibleConstructorReturn(this, (IconToggleRightSolid.__proto__ || Object.getPrototypeOf(IconToggleRightSolid)).apply(this, arguments));
	  }

	  _createClass(IconToggleRightSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconToggleRightSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1600 160h-400v160h400v1280h-400v160h400c88.24 0 160-71.76 160-160V320c0-88.24-71.76-160-160-160zm-880 0H560v160h160V160zM560 1760h160v-160H560v160zM160 320v80h160v-80h80V160h-80c-88.24 0-160 71.76-160 160zm160 1200H160v80c0 88.24 71.76 160 160 160h80v-160h-80v-80zm0-960H160v160h160V560zm0 640H160v160h160v-160zm0-320H160v160h160V880zm1040 240c0-176.48-143.52-320-320-320H753.12l103.44-103.44-113.12-113.12L446.88 880l296.56 296.56 113.12-113.12L753.12 960H1040c88.24 0 160 71.76 160 160h160zm-320-960H880v400h160V160zM880 1760h160v-560H880v560z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconToggleRightSolid;
	}(_react.Component);

	exports.default = IconToggleRightSolid;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTrashSolid = function (_Component) {
	  _inherits(IconTrashSolid, _Component);

	  function IconTrashSolid() {
	    _classCallCheck(this, IconTrashSolid);

	    return _possibleConstructorReturn(this, (IconTrashSolid.__proto__ || Object.getPrototypeOf(IconTrashSolid)).apply(this, arguments));
	  }

	  _createClass(IconTrashSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTrashSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { d: 'M860 160c-110 0-200 90-200 200H460c-110 0-200 90-200 200h1400c0-110-90-200-200-200h-200c0-110-90-200-200-200H860zM460 760v962c0 22 16 38 38 38h926c22 0 38-16 38-38V760h-200v700c0 56-44 100-100 100s-100-44-100-100V760H862v700c0 56-44 100-100 100s-100-44-100-100V760H460z' }),
	          _react2.default.createElement('path', { d: 'M459 698h1002v182H459z' })
	        )
	      );
	    }
	  }]);

	  return IconTrashSolid;
	}(_react.Component);

	exports.default = IconTrashSolid;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTroubleSolid = function (_Component) {
	  _inherits(IconTroubleSolid, _Component);

	  function IconTroubleSolid() {
	    _classCallCheck(this, IconTroubleSolid);

	    return _possibleConstructorReturn(this, (IconTroubleSolid.__proto__ || Object.getPrototypeOf(IconTroubleSolid)).apply(this, arguments));
	  }

	  _createClass(IconTroubleSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTroubleSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTroubleSolid;
	}(_react.Component);

	exports.default = IconTroubleSolid;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTwitterBoxedSolid = function (_Component) {
	  _inherits(IconTwitterBoxedSolid, _Component);

	  function IconTwitterBoxedSolid() {
	    _classCallCheck(this, IconTwitterBoxedSolid);

	    return _possibleConstructorReturn(this, (IconTwitterBoxedSolid.__proto__ || Object.getPrototypeOf(IconTwitterBoxedSolid)).apply(this, arguments));
	  }

	  _createClass(IconTwitterBoxedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTwitterBoxedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M80 182.995C80 127.77 124.774 83 180.007 83h1559.986C1795.225 83 1840 127.771 1840 182.995v1483.488c0 55.226-44.774 99.995-100.007 99.995H180.007c-55.232 0-100.007-44.771-100.007-99.995V182.995zm1490.75 363.656a502.195 502.195 0 0 1-143.607 39.22c52.197-31.14 91.262-80.096 109.933-137.764a502.208 502.208 0 0 1-158.844 60.424c-47.276-50.186-113.32-78.625-182.423-78.554-66.33-.01-129.947 26.22-176.854 72.92-46.906 46.7-73.258 110.044-73.258 176.093 0 19.535 2.209 38.538 6.475 56.745-201.12-10.033-388.501-104.63-515.5-260.242a247.108 247.108 0 0 0-33.902 125.17c-.058 83.288 41.715 161.086 111.305 207.291a249.933 249.933 0 0 1-113.286-31.103v3.11c.008 118.532 83.885 220.644 200.555 244.16a251.605 251.605 0 0 1-112.905 4.248c32.723 101.463 126.617 170.978 233.619 172.963-88.6 69.237-198.015 106.78-310.641 106.584a507.848 507.848 0 0 1-59.652-3.527c114.333 73.174 247.408 112.02 383.32 111.895 460 0 711.56-379.457 711.56-708.542 0-10.81-.266-21.545-.761-32.241a507.23 507.23 0 0 0 124.866-128.812v-.038z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTwitterBoxedSolid;
	}(_react.Component);

	exports.default = IconTwitterBoxedSolid;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTwitterSolid = function (_Component) {
	  _inherits(IconTwitterSolid, _Component);

	  function IconTwitterSolid() {
	    _classCallCheck(this, IconTwitterSolid);

	    return _possibleConstructorReturn(this, (IconTwitterSolid.__proto__ || Object.getPrototypeOf(IconTwitterSolid)).apply(this, arguments));
	  }

	  _createClass(IconTwitterSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconTwitterSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1786.72 484.054a700.8 700.8 0 0 1-201.067 55.146 351.573 351.573 0 0 0 153.92-193.706 701.333 701.333 0 0 1-222.4 84.96A349.707 349.707 0 0 0 1261.76 320a350.133 350.133 0 0 0-350.187 350.134c0 27.466 3.094 54.186 9.067 79.786C639.05 735.814 376.693 602.803 198.88 384a348.587 348.587 0 0 0-47.467 176c-.082 117.108 58.407 226.498 155.84 291.467a348.8 348.8 0 0 1-158.613-43.733v4.373c.012 166.664 117.448 310.243 280.8 343.307a350.827 350.827 0 0 1-158.08 5.973c45.816 142.665 177.278 240.41 327.093 243.2a702.507 702.507 0 0 1-434.933 149.867 708.07 708.07 0 0 1-83.52-4.96 990.933 990.933 0 0 0 536.693 157.333c644.054 0 996.267-533.547 996.267-996.267 0-15.2-.373-30.293-1.067-45.333a711.84 711.84 0 0 0 174.827-181.12v-.053z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconTwitterSolid;
	}(_react.Component);

	exports.default = IconTwitterSolid;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUnknown2Solid = function (_Component) {
	  _inherits(IconUnknown2Solid, _Component);

	  function IconUnknown2Solid() {
	    _classCallCheck(this, IconUnknown2Solid);

	    return _possibleConstructorReturn(this, (IconUnknown2Solid.__proto__ || Object.getPrototypeOf(IconUnknown2Solid)).apply(this, arguments));
	  }

	  _createClass(IconUnknown2Solid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUnknown2Solid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M576.077 1382.4c-3.38-25.19-5.683-50.688-5.683-76.8 0-339.302 294.681-614.4 658.252-614.4 159.053 0 304.896 52.685 418.714 140.314 2.458-20.89 3.686-42.087 3.686-63.514 0-338.765-310.118-614.4-691.2-614.4-381.081 0-691.2 275.635-691.2 614.4 0 116.352 35.943 227.251 104.448 324.48L83.251 1382.4h492.826zm1110.374 106.675c27.187-57.677 41.319-120.269 41.319-183.475 0-254.131-223.95-460.8-499.2-460.8-275.252 0-499.2 206.669-499.2 460.8s223.948 460.8 499.2 460.8h642.662l-184.78-277.325z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUnknown2Solid;
	}(_react.Component);

	exports.default = IconUnknown2Solid;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUnlockSolid = function (_Component) {
	  _inherits(IconUnlockSolid, _Component);

	  function IconUnlockSolid() {
	    _classCallCheck(this, IconUnlockSolid);

	    return _possibleConstructorReturn(this, (IconUnlockSolid.__proto__ || Object.getPrototypeOf(IconUnlockSolid)).apply(this, arguments));
	  }

	  _createClass(IconUnlockSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUnlockSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1520 845.714h62.008c35.341 0 63.992 28.652 63.992 63.996v786.295c0 35.345-28.655 63.995-64.002 63.995H339.002c-35.347 0-64.002-28.652-64.002-63.995V909.71c0-35.345 28.65-63.996 63.992-63.996H503.5V617.143C503.5 365.714 709.15 160 960.5 160c205.47 0 380.4 137.467 437.416 325h-249.92c-40.997-58.679-109.1-96.429-187.496-96.429-127.96 0-228.5 100.572-228.5 228.572v228.571h308V846h480v-.286zM960.936 1519c113.183 0 204.936-91.782 204.936-205s-91.753-205-204.936-205S756 1200.782 756 1314s91.753 205 204.936 205z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUnlockSolid;
	}(_react.Component);

	exports.default = IconUnlockSolid;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUnmutedSolid = function (_Component) {
	  _inherits(IconUnmutedSolid, _Component);

	  function IconUnmutedSolid() {
	    _classCallCheck(this, IconUnmutedSolid);

	    return _possibleConstructorReturn(this, (IconUnmutedSolid.__proto__ || Object.getPrototypeOf(IconUnmutedSolid)).apply(this, arguments));
	  }

	  _createClass(IconUnmutedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUnmutedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M910.64 246.32c-29.92-12.32-64.32-5.52-87.2 17.36L480 640.16H240c-44 0-80 36.08-80 80v480c0 44 36 80 80 80h240l343.44 376.64c22.88 22.88 57.28 29.68 87.2 17.36 29.92-12.4 49.36-41.6 49.36-74v-1280c0-32.24-19.44-61.6-49.36-73.84zM1120 400.16v160c220.56 0 400 179.52 400 400 0 220.56-179.44 400-400 400v160c308.8 0 560-251.12 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.24-107.68-240-240-240v160c44.08 0 80 35.92 80 80s-35.92 80-80 80v160c132.32 0 240-107.6 240-240z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUnmutedSolid;
	}(_react.Component);

	exports.default = IconUnmutedSolid;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUnpublishSolid = function (_Component) {
	  _inherits(IconUnpublishSolid, _Component);

	  function IconUnpublishSolid() {
	    _classCallCheck(this, IconUnpublishSolid);

	    return _possibleConstructorReturn(this, (IconUnpublishSolid.__proto__ || Object.getPrototypeOf(IconUnpublishSolid)).apply(this, arguments));
	  }

	  _createClass(IconUnpublishSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUnpublishSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1309.311 1626.667l-864.39-.81C235.75 1595.556 78 1410.796 78 1196.16c0-148.287 77.402-285.884 200.984-363.887 4.898-205.295 172.404-370.758 377.635-370.758 18.901 0 37.802 1.505 56.664 4.516C783.837 284.705 960.028 160 1158.793 160c263.732 0 478.337 215.754 478.337 480.95 0 12.004-.573 24.317-1.645 36.938C1763.162 778.393 1838 931.042 1838 1095.193c0 293.063-237.18 531.474-528.689 531.474zm-195.023-592.332l276.206-276.206-118.623-118.041-275.624 275.624-275.624-275.624L602 758.129l275.624 276.206L602 1309.959 720.623 1428l275.624-275.624L1271.87 1428l118.623-118.041-276.206-275.624z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUnpublishSolid;
	}(_react.Component);

	exports.default = IconUnpublishSolid;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUnpublishedSolid = function (_Component) {
	  _inherits(IconUnpublishedSolid, _Component);

	  function IconUnpublishedSolid() {
	    _classCallCheck(this, IconUnpublishedSolid);

	    return _possibleConstructorReturn(this, (IconUnpublishedSolid.__proto__ || Object.getPrototypeOf(IconUnpublishedSolid)).apply(this, arguments));
	  }

	  _createClass(IconUnpublishedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUnpublishedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1613.833 729.153c.43-7.345.586-14.533.586-21.683 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C191.38 945.21 120 1075.703 120 1215.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUnpublishedSolid;
	}(_react.Component);

	exports.default = IconUnpublishedSolid;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUpdownSolid = function (_Component) {
	  _inherits(IconUpdownSolid, _Component);

	  function IconUpdownSolid() {
	    _classCallCheck(this, IconUpdownSolid);

	    return _possibleConstructorReturn(this, (IconUpdownSolid.__proto__ || Object.getPrototypeOf(IconUpdownSolid)).apply(this, arguments));
	  }

	  _createClass(IconUpdownSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUpdownSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M696.56 1303.44l-113.12 113.12L960 1793.12l376.56-376.56-113.12-113.12L1040 1486.88V433.12l183.44 183.44 113.12-113.12L960 126.88 583.44 503.44l113.12 113.12L880 433.12v1053.76z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUpdownSolid;
	}(_react.Component);

	exports.default = IconUpdownSolid;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUploadSolid = function (_Component) {
	  _inherits(IconUploadSolid, _Component);

	  function IconUploadSolid() {
	    _classCallCheck(this, IconUploadSolid);

	    return _possibleConstructorReturn(this, (IconUploadSolid.__proto__ || Object.getPrototypeOf(IconUploadSolid)).apply(this, arguments));
	  }

	  _createClass(IconUploadSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUploadSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1302.606 1677.762l-847.063-.754C250.587 1647.548 96 1468.07 96 1259.552c0-144.068 75.806-277.702 196.952-353.508 4.778-199.425 168.96-360.172 370.02-360.172a354.31 354.31 0 0 1 55.565 4.4C787.638 374.147 960.327 253 1155.101 253c258.469 0 468.747 209.566 468.747 467.196 0 11.692-.545 23.634-1.635 35.913 125.128 97.638 198.461 245.897 198.461 405.386 0 284.66-232.404 516.267-518.068 516.267zm4.456-527.225l136.97-137.587L987.465 557l-455.95 455.95 136.97 137.587L890.6 927.807V1567h194.35V927.806l222.113 222.731z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUploadSolid;
	}(_react.Component);

	exports.default = IconUploadSolid;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUserAddSolid = function (_Component) {
	  _inherits(IconUserAddSolid, _Component);

	  function IconUserAddSolid() {
	    _classCallCheck(this, IconUserAddSolid);

	    return _possibleConstructorReturn(this, (IconUserAddSolid.__proto__ || Object.getPrototypeOf(IconUserAddSolid)).apply(this, arguments));
	  }

	  _createClass(IconUserAddSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUserAddSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUserAddSolid;
	}(_react.Component);

	exports.default = IconUserAddSolid;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconUserSolid = function (_Component) {
	  _inherits(IconUserSolid, _Component);

	  function IconUserSolid() {
	    _classCallCheck(this, IconUserSolid);

	    return _possibleConstructorReturn(this, (IconUserSolid.__proto__ || Object.getPrototypeOf(IconUserSolid)).apply(this, arguments));
	  }

	  _createClass(IconUserSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconUserSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1490.88 1005.124c-131.68 144-320.4 234.879-530.88 234.879-210.48 0-399.28-90.88-530.96-234.88C232.48 1030.404 80 1196.484 80 1400.004V1880h1760v-479.998c0-203.519-152.48-369.598-349.12-394.878zm-50.912-485.126c0 265.119-214.88 479.998-480 479.998s-480-214.88-480-479.998c0-265.119 214.88-479.998 480-479.998s480 214.88 480 479.998z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconUserSolid;
	}(_react.Component);

	exports.default = IconUserSolid;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconVideoSolid = function (_Component) {
	  _inherits(IconVideoSolid, _Component);

	  function IconVideoSolid() {
	    _classCallCheck(this, IconVideoSolid);

	    return _possibleConstructorReturn(this, (IconVideoSolid.__proto__ || Object.getPrototypeOf(IconVideoSolid)).apply(this, arguments));
	  }

	  _createClass(IconVideoSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconVideoSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1600 240.24H240c-88.4 0-160 71.68-160 160v1120c0 88.4 71.6 160 160 160h1360c88.32 0 160-71.6 160-160v-1120c0-88.4-71.68-160-160-160zm-960 160h160v160H640v-160zm-240 1120H240v-160h160v160zm0-960H240v-160h160v160zm400 960H640v-160h160v160zm400 0h-160v-160h160v160zm-480-320v-480l480 240-480 240zm480-640h-160v-160h160v160zm400 960h-160v-160h160v160zm0-960h-160v-160h160v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconVideoSolid;
	}(_react.Component);

	exports.default = IconVideoSolid;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconWarningSolid = function (_Component) {
	  _inherits(IconWarningSolid, _Component);

	  function IconWarningSolid() {
	    _classCallCheck(this, IconWarningSolid);

	    return _possibleConstructorReturn(this, (IconWarningSolid.__proto__ || Object.getPrototypeOf(IconWarningSolid)).apply(this, arguments));
	  }

	  _createClass(IconWarningSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconWarningSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1751.547 1581.395l-720-1382.4c-27.12-51.993-116-51.993-143.12 0l-720 1382.4c-12.32 23.808-11.12 51.994 3.52 74.803 14.56 22.58 40.24 36.327 68 36.327h1440c27.76 0 53.44-13.824 68.08-36.403 14.56-22.733 15.84-50.842 3.52-74.727zm-871.6-810.47h160v460.8h-160v-460.8zm80 710.4c-55.2 0-100-42.931-100-96 0-52.992 44.8-96 100-96s100 43.008 100 96c0 53.069-44.8 96-100 96z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconWarningSolid;
	}(_react.Component);

	exports.default = IconWarningSolid;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconWindowsSolid = function (_Component) {
	  _inherits(IconWindowsSolid, _Component);

	  function IconWindowsSolid() {
	    _classCallCheck(this, IconWindowsSolid);

	    return _possibleConstructorReturn(this, (IconWindowsSolid.__proto__ || Object.getPrototypeOf(IconWindowsSolid)).apply(this, arguments));
	  }

	  _createClass(IconWindowsSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconWindowsSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M869.109 284.508c277.972-45.277 561.615-84.892 839.583-124.507V895.728c-277.968 0-561.611 5.658-839.583 5.658V284.508zM160 380.718c209.897-33.956 419.794-62.255 635.362-84.891v605.558c-215.568 0-425.465 5.661-635.362 5.661V380.72zm0 588.581c209.897 0 419.794 5.659 635.362 0v611.22c-215.568-28.299-425.465-56.597-635.362-84.892V969.299zm709.109 5.66h839.583v735.727c-277.968-45.277-561.611-79.234-839.583-118.85V974.96z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconWindowsSolid;
	}(_react.Component);

	exports.default = IconWindowsSolid;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconWordpressSolid = function (_Component) {
	  _inherits(IconWordpressSolid, _Component);

	  function IconWordpressSolid() {
	    _classCallCheck(this, IconWordpressSolid);

	    return _possibleConstructorReturn(this, (IconWordpressSolid.__proto__ || Object.getPrototypeOf(IconWordpressSolid)).apply(this, arguments));
	  }

	  _createClass(IconWordpressSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconWordpressSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M975.798 1265.589l-225.007 543.55c66.47 15.743 135.814 24.311 207.211 24.311 73.94 0 145.67-9.051 214.27-25.916l-196.474-541.945zm739.493-735.66c16.72 78.464 13.259 173.66-19.36 278.35-85.067 272.452-295.72 762.564-377.266 949.259 306.103-135.153 519.337-436.886 519.337-787.706 0-160.683-44.86-311.056-122.711-439.904zM280.93 668.155s-42.71-53.98-88.04-53.98h-45.994c-44.371 96.704-68.894 226.576-68.894 345.599 0 358.072 222.014 665.183 538.345 796.08L280.93 668.156zM177.422 536.814C324.206 266.044 618.557 89 958.002 89c219.726 0 420.484 92.603 574.699 223.307-44.059-8.432-92.166 1.045-140.624 28.45-113.403 64.327-150.48 246.4-3.442 337.824 91.872 56.764 124.55 198.899 121.46 285.7-3.032 86.936-213.508 486.185-213.508 486.185L1091.684 754.59s-7.04-48.815-7.04-62.895c0-17.755 5.906-39.494 16.994-51.891 7.607-8.259 19.262-25.627 33.029-25.627h97.113v-77.362h-528v77.362h16.387c17.287 0 34.183 23.016 50.493 39.513 19.282 19.689 43.55 93.764 72.942 170.624l76.775 250.113-165.46 378.149L573.384 696.8s5.378-51.795 16.349-60.595c7.138-6.053 18.147-22.029 30.839-22.029h4.987v-77.362H177.422z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconWordpressSolid;
	}(_react.Component);

	exports.default = IconWordpressSolid;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconXSolid = function (_Component) {
	  _inherits(IconXSolid, _Component);

	  function IconXSolid() {
	    _classCallCheck(this, IconXSolid);

	    return _possibleConstructorReturn(this, (IconXSolid.__proto__ || Object.getPrototypeOf(IconXSolid)).apply(this, arguments));
	  }

	  _createClass(IconXSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconXSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1716.48 433.12l-226.32-226.24-526.8 526.88-526.88-526.88-226.32 226.24L737.04 960l-526.88 526.88 226.32 226.24 526.88-526.88 526.8 526.88 226.32-226.24L1189.6 960z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconXSolid;
	}(_react.Component);

	exports.default = IconXSolid;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconZippedSolid = function (_Component) {
	  _inherits(IconZippedSolid, _Component);

	  function IconZippedSolid() {
	    _classCallCheck(this, IconZippedSolid);

	    return _possibleConstructorReturn(this, (IconZippedSolid.__proto__ || Object.getPrototypeOf(IconZippedSolid)).apply(this, arguments));
	  }

	  _createClass(IconZippedSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconZippedSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1440 160H480c-88.32 0-160 71.6-160 160v1280c0 88.32 71.68 160 160 160h960c88.32 0 160-71.68 160-160V320c0-88.4-71.68-160-160-160zm-160 480h-160v160h160v160h-160v160H960V960h160V800H960V640h160V480H960V320h160v160h160v160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconZippedSolid;
	}(_react.Component);

	exports.default = IconZippedSolid;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconZoomInSolid = function (_Component) {
	  _inherits(IconZoomInSolid, _Component);

	  function IconZoomInSolid() {
	    _classCallCheck(this, IconZoomInSolid);

	    return _possibleConstructorReturn(this, (IconZoomInSolid.__proto__ || Object.getPrototypeOf(IconZoomInSolid)).apply(this, arguments));
	  }

	  _createClass(IconZoomInSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconZoomInSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-215.52-778.05h-136v204h-204v136h204v204h136v-204h204v-136h-204v-204z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconZoomInSolid;
	}(_react.Component);

	exports.default = IconZoomInSolid;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _IconBase = __webpack_require__(3);

	var _IconBase2 = _interopRequireDefault(_IconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconZoomOutSolid = function (_Component) {
	  _inherits(IconZoomOutSolid, _Component);

	  function IconZoomOutSolid() {
	    _classCallCheck(this, IconZoomOutSolid);

	    return _possibleConstructorReturn(this, (IconZoomOutSolid.__proto__ || Object.getPrototypeOf(IconZoomOutSolid)).apply(this, arguments));
	  }

	  _createClass(IconZoomOutSolid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconZoomOutSolid',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-524.52-440.25h480v-158.32h-480v158.32z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconZoomOutSolid;
	}(_react.Component);

	exports.default = IconZoomOutSolid;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconZoomOutSolid = exports.IconZoomInSolid = exports.IconZippedSolid = exports.IconXSolid = exports.IconWordpressSolid = exports.IconWindowsSolid = exports.IconWarningSolid = exports.IconVideoSolid = exports.IconUserSolid = exports.IconUserAddSolid = exports.IconUploadSolid = exports.IconUpdownSolid = exports.IconUnpublishSolid = exports.IconUnpublishedSolid = exports.IconUnmutedSolid = exports.IconUnlockSolid = exports.IconUnknown2Solid = exports.IconTwitterSolid = exports.IconTwitterBoxedSolid = exports.IconTroubleSolid = exports.IconTrashSolid = exports.IconToggleRightSolid = exports.IconToggleLeftSolid = exports.IconTimerSolid = exports.IconTextSolid = exports.IconTextRightSolid = exports.IconTextLeftSolid = exports.IconTextCenteredSolid = exports.IconTextareaSolid = exports.IconTargetSolid = exports.IconTagSolid = exports.IconTableSolid = exports.IconSyllabusSolid = exports.IconStudentViewSolid = exports.IconStrikethroughSolid = exports.IconStatsSolid = exports.IconStarSolid = exports.IconStarLightSolid = exports.IconStandardsSolid = exports.IconSpeedGraderSolid = exports.IconSkypeSolid = exports.IconSettings2Solid = exports.IconSearchSolid = exports.IconSearchAddressBookSolid = exports.IconRubricSolid = exports.IconRubricDarkSolid = exports.IconRssSolid = exports.IconRssAddSolid = exports.IconResetSolid = exports.IconReplySolid = exports.IconReplyAll2Solid = exports.IconReply2Solid = exports.IconRepliedSolid = exports.IconRemoveFromCollectionSolid = exports.IconRefreshSolid = exports.IconQuizStatsTimeSolid = exports.IconQuizStatsLowSolid = exports.IconQuizStatsHighSolid = exports.IconQuizStatsDeviationSolid = exports.IconQuizStatsAvgSolid = exports.IconQuizSolid = exports.IconQuestionSolid = exports.IconPublishSolid = exports.IconPrinterSolid = exports.IconPrerequisiteSolid = exports.IconPostToSisSolid = exports.IconPlusSolid = exports.IconPinterestSolid = exports.IconPinSolid = exports.IconPeerReviewSolid = exports.IconPeerGradedSolid = exports.IconPdfSolid = exports.IconPartialSolid = exports.IconPaperclipSolid = exports.IconPaintSolid = exports.IconOutdentSolid = exports.IconOutdent2Solid = exports.IconOffSolid = exports.IconNotGradedSolid = exports.IconNoteLightSolid = exports.IconNoteDarkSolid = exports.IconNextUnreadSolid = exports.IconMutedSolid = exports.IconMsWordSolid = exports.IconMsPptSolid = exports.IconMsExcelSolid = exports.IconMoveUpTopSolid = exports.IconMoveUpSolid = exports.IconMoveDownSolid = exports.IconMoveDownBottomSolid = exports.IconMoreSolid = exports.IconModuleSolid = exports.IconMinimizeSolid = exports.IconMiniArrowUpSolid = exports.IconMiniArrowRightSolid = exports.IconMiniArrowLeftSolid = exports.IconMiniArrowDownSolid = exports.IconMessageSolid = exports.IconMediaSolid = exports.IconMatureSolid = exports.IconMatureLightSolid = exports.IconMaterialsRequiredSolid = exports.IconMaterialsRequiredLightSolid = exports.IconMasteryPathSolid = exports.IconMasqueradeSolid = exports.IconMarkerSolid = exports.IconMarkAsReadSolid = exports.IconLtiSolid = exports.IconLockSolid = exports.IconLinkSolid = exports.IconLinkedinSolid = exports.IconLikeSolid = exports.IconKeyboardShortcutsSolid = exports.IconInvitationSolid = exports.IconIntegrationsSolid = exports.IconInstructureSolid = exports.IconInfoSolid = exports.IconIndentSolid = exports.IconIndent2Solid = exports.IconImportSolid = exports.IconImportContentSolid = exports.IconImageSolid = exports.IconHourGlassSolid = exports.IconHomeSolid = exports.IconHighlighterSolid = exports.IconHeartSolid = exports.IconHamburgerSolid = exports.IconGroupSolid = exports.IconGroupNewSolid = exports.IconGroupDarkNewSolid = exports.IconGradebookSolid = exports.IconGradebookImportSolid = exports.IconGradebookExportSolid = exports.IconGithubSolid = exports.IconForwardSolid = exports.IconFolderSolid = exports.IconFolderLockedSolid = exports.IconFlagSolid = exports.IconFilmstripSolid = exports.IconFilesPublicDomainSolid = exports.IconFilesObtainedPermissionSolid = exports.IconFilesFairUseSolid = exports.IconFilesCreativeCommonsSolid = exports.IconFilesCopyrightSolid = exports.IconFacebookSolid = exports.IconFacebookBoxedSolid = exports.IconEyeSolid = exports.IconExportSolid = exports.IconExportContentSolid = exports.IconExpandSolid = exports.IconExpandItemsSolid = exports.IconEquellaSolid = exports.IconEquationSolid = exports.IconEndSolid = exports.IconEmptySolid = exports.IconEmailSolid = exports.IconEducatorsSolid = exports.IconEditSolid = exports.IconDropDownSolid = exports.IconDragHandleSolid = exports.IconDownloadSolid = exports.IconDocumentSolid = exports.IconDiscussionXSolid = exports.IconDiscussionSolid = exports.IconDiscussionSearchSolid = exports.IconDiscussionReplySolid = exports.IconDiscussionReplyDarkSolid = exports.IconDiscussionReply2Solid = exports.IconDiscussionNewSolid = exports.IconDiscussionCheckSolid = exports.IconCoursesSolid = exports.IconCopySolid = exports.IconCopyCourseSolid = exports.IconComposeSolid = exports.IconCompleteSolid = exports.IconCommonsSolid = exports.IconCollectionSolid = exports.IconCollectionSaveSolid = exports.IconCollapseSolid = exports.IconCloudLockSolid = exports.IconClockSolid = exports.IconCheckSolid = exports.IconCheckPlusSolid = exports.IconCheckMarkSolid = exports.IconCheckDarkSolid = exports.IconCalendarReservedSolid = exports.IconCalendarMonthSolid = exports.IconCalendarDaysSolid = exports.IconCalendarDaySolid = exports.IconCalendarAddSolid = exports.IconBoxSolid = exports.IconBookmarkSolid = exports.IconAudioSolid = exports.IconAssignmentSolid = exports.IconArrowUpSolid = exports.IconArrowRightSolid = exports.IconArrowOpenUpSolid = exports.IconArrowOpenRightSolid = exports.IconArrowOpenLeftSolid = exports.IconArrowOpenDownSolid = exports.IconArrowLeftSolid = exports.IconArrowDownSolid = exports.IconAppleSolid = exports.IconAnnouncementSolid = exports.IconAndroidSolid = exports.IconAnalyticsSolid = exports.IconAddSolid = exports.IconAddressBookSolid = undefined;

	var _IconAddressBookSolid2 = __webpack_require__(13);

	var _IconAddressBookSolid3 = _interopRequireDefault(_IconAddressBookSolid2);

	var _IconAddSolid2 = __webpack_require__(1);

	var _IconAddSolid3 = _interopRequireDefault(_IconAddSolid2);

	var _IconAnalyticsSolid2 = __webpack_require__(14);

	var _IconAnalyticsSolid3 = _interopRequireDefault(_IconAnalyticsSolid2);

	var _IconAndroidSolid2 = __webpack_require__(15);

	var _IconAndroidSolid3 = _interopRequireDefault(_IconAndroidSolid2);

	var _IconAnnouncementSolid2 = __webpack_require__(16);

	var _IconAnnouncementSolid3 = _interopRequireDefault(_IconAnnouncementSolid2);

	var _IconAppleSolid2 = __webpack_require__(17);

	var _IconAppleSolid3 = _interopRequireDefault(_IconAppleSolid2);

	var _IconArrowDownSolid2 = __webpack_require__(18);

	var _IconArrowDownSolid3 = _interopRequireDefault(_IconArrowDownSolid2);

	var _IconArrowLeftSolid2 = __webpack_require__(19);

	var _IconArrowLeftSolid3 = _interopRequireDefault(_IconArrowLeftSolid2);

	var _IconArrowOpenDownSolid2 = __webpack_require__(20);

	var _IconArrowOpenDownSolid3 = _interopRequireDefault(_IconArrowOpenDownSolid2);

	var _IconArrowOpenLeftSolid2 = __webpack_require__(21);

	var _IconArrowOpenLeftSolid3 = _interopRequireDefault(_IconArrowOpenLeftSolid2);

	var _IconArrowOpenRightSolid2 = __webpack_require__(22);

	var _IconArrowOpenRightSolid3 = _interopRequireDefault(_IconArrowOpenRightSolid2);

	var _IconArrowOpenUpSolid2 = __webpack_require__(23);

	var _IconArrowOpenUpSolid3 = _interopRequireDefault(_IconArrowOpenUpSolid2);

	var _IconArrowRightSolid2 = __webpack_require__(24);

	var _IconArrowRightSolid3 = _interopRequireDefault(_IconArrowRightSolid2);

	var _IconArrowUpSolid2 = __webpack_require__(25);

	var _IconArrowUpSolid3 = _interopRequireDefault(_IconArrowUpSolid2);

	var _IconAssignmentSolid2 = __webpack_require__(26);

	var _IconAssignmentSolid3 = _interopRequireDefault(_IconAssignmentSolid2);

	var _IconAudioSolid2 = __webpack_require__(27);

	var _IconAudioSolid3 = _interopRequireDefault(_IconAudioSolid2);

	var _IconBookmarkSolid2 = __webpack_require__(28);

	var _IconBookmarkSolid3 = _interopRequireDefault(_IconBookmarkSolid2);

	var _IconBoxSolid2 = __webpack_require__(29);

	var _IconBoxSolid3 = _interopRequireDefault(_IconBoxSolid2);

	var _IconCalendarAddSolid2 = __webpack_require__(30);

	var _IconCalendarAddSolid3 = _interopRequireDefault(_IconCalendarAddSolid2);

	var _IconCalendarDaySolid2 = __webpack_require__(31);

	var _IconCalendarDaySolid3 = _interopRequireDefault(_IconCalendarDaySolid2);

	var _IconCalendarDaysSolid2 = __webpack_require__(32);

	var _IconCalendarDaysSolid3 = _interopRequireDefault(_IconCalendarDaysSolid2);

	var _IconCalendarMonthSolid2 = __webpack_require__(33);

	var _IconCalendarMonthSolid3 = _interopRequireDefault(_IconCalendarMonthSolid2);

	var _IconCalendarReservedSolid2 = __webpack_require__(34);

	var _IconCalendarReservedSolid3 = _interopRequireDefault(_IconCalendarReservedSolid2);

	var _IconCheckDarkSolid2 = __webpack_require__(35);

	var _IconCheckDarkSolid3 = _interopRequireDefault(_IconCheckDarkSolid2);

	var _IconCheckMarkSolid2 = __webpack_require__(36);

	var _IconCheckMarkSolid3 = _interopRequireDefault(_IconCheckMarkSolid2);

	var _IconCheckPlusSolid2 = __webpack_require__(37);

	var _IconCheckPlusSolid3 = _interopRequireDefault(_IconCheckPlusSolid2);

	var _IconCheckSolid2 = __webpack_require__(38);

	var _IconCheckSolid3 = _interopRequireDefault(_IconCheckSolid2);

	var _IconClockSolid2 = __webpack_require__(39);

	var _IconClockSolid3 = _interopRequireDefault(_IconClockSolid2);

	var _IconCloudLockSolid2 = __webpack_require__(40);

	var _IconCloudLockSolid3 = _interopRequireDefault(_IconCloudLockSolid2);

	var _IconCollapseSolid2 = __webpack_require__(41);

	var _IconCollapseSolid3 = _interopRequireDefault(_IconCollapseSolid2);

	var _IconCollectionSaveSolid2 = __webpack_require__(42);

	var _IconCollectionSaveSolid3 = _interopRequireDefault(_IconCollectionSaveSolid2);

	var _IconCollectionSolid2 = __webpack_require__(43);

	var _IconCollectionSolid3 = _interopRequireDefault(_IconCollectionSolid2);

	var _IconCommonsSolid2 = __webpack_require__(44);

	var _IconCommonsSolid3 = _interopRequireDefault(_IconCommonsSolid2);

	var _IconCompleteSolid2 = __webpack_require__(45);

	var _IconCompleteSolid3 = _interopRequireDefault(_IconCompleteSolid2);

	var _IconComposeSolid2 = __webpack_require__(46);

	var _IconComposeSolid3 = _interopRequireDefault(_IconComposeSolid2);

	var _IconCopyCourseSolid2 = __webpack_require__(47);

	var _IconCopyCourseSolid3 = _interopRequireDefault(_IconCopyCourseSolid2);

	var _IconCopySolid2 = __webpack_require__(48);

	var _IconCopySolid3 = _interopRequireDefault(_IconCopySolid2);

	var _IconCoursesSolid2 = __webpack_require__(49);

	var _IconCoursesSolid3 = _interopRequireDefault(_IconCoursesSolid2);

	var _IconDiscussionCheckSolid2 = __webpack_require__(50);

	var _IconDiscussionCheckSolid3 = _interopRequireDefault(_IconDiscussionCheckSolid2);

	var _IconDiscussionNewSolid2 = __webpack_require__(51);

	var _IconDiscussionNewSolid3 = _interopRequireDefault(_IconDiscussionNewSolid2);

	var _IconDiscussionReply2Solid2 = __webpack_require__(52);

	var _IconDiscussionReply2Solid3 = _interopRequireDefault(_IconDiscussionReply2Solid2);

	var _IconDiscussionReplyDarkSolid2 = __webpack_require__(53);

	var _IconDiscussionReplyDarkSolid3 = _interopRequireDefault(_IconDiscussionReplyDarkSolid2);

	var _IconDiscussionReplySolid2 = __webpack_require__(54);

	var _IconDiscussionReplySolid3 = _interopRequireDefault(_IconDiscussionReplySolid2);

	var _IconDiscussionSearchSolid2 = __webpack_require__(55);

	var _IconDiscussionSearchSolid3 = _interopRequireDefault(_IconDiscussionSearchSolid2);

	var _IconDiscussionSolid2 = __webpack_require__(56);

	var _IconDiscussionSolid3 = _interopRequireDefault(_IconDiscussionSolid2);

	var _IconDiscussionXSolid2 = __webpack_require__(57);

	var _IconDiscussionXSolid3 = _interopRequireDefault(_IconDiscussionXSolid2);

	var _IconDocumentSolid2 = __webpack_require__(58);

	var _IconDocumentSolid3 = _interopRequireDefault(_IconDocumentSolid2);

	var _IconDownloadSolid2 = __webpack_require__(59);

	var _IconDownloadSolid3 = _interopRequireDefault(_IconDownloadSolid2);

	var _IconDragHandleSolid2 = __webpack_require__(60);

	var _IconDragHandleSolid3 = _interopRequireDefault(_IconDragHandleSolid2);

	var _IconDropDownSolid2 = __webpack_require__(61);

	var _IconDropDownSolid3 = _interopRequireDefault(_IconDropDownSolid2);

	var _IconEditSolid2 = __webpack_require__(62);

	var _IconEditSolid3 = _interopRequireDefault(_IconEditSolid2);

	var _IconEducatorsSolid2 = __webpack_require__(63);

	var _IconEducatorsSolid3 = _interopRequireDefault(_IconEducatorsSolid2);

	var _IconEmailSolid2 = __webpack_require__(64);

	var _IconEmailSolid3 = _interopRequireDefault(_IconEmailSolid2);

	var _IconEmptySolid2 = __webpack_require__(65);

	var _IconEmptySolid3 = _interopRequireDefault(_IconEmptySolid2);

	var _IconEndSolid2 = __webpack_require__(66);

	var _IconEndSolid3 = _interopRequireDefault(_IconEndSolid2);

	var _IconEquationSolid2 = __webpack_require__(67);

	var _IconEquationSolid3 = _interopRequireDefault(_IconEquationSolid2);

	var _IconEquellaSolid2 = __webpack_require__(68);

	var _IconEquellaSolid3 = _interopRequireDefault(_IconEquellaSolid2);

	var _IconExpandItemsSolid2 = __webpack_require__(69);

	var _IconExpandItemsSolid3 = _interopRequireDefault(_IconExpandItemsSolid2);

	var _IconExpandSolid2 = __webpack_require__(70);

	var _IconExpandSolid3 = _interopRequireDefault(_IconExpandSolid2);

	var _IconExportContentSolid2 = __webpack_require__(71);

	var _IconExportContentSolid3 = _interopRequireDefault(_IconExportContentSolid2);

	var _IconExportSolid2 = __webpack_require__(72);

	var _IconExportSolid3 = _interopRequireDefault(_IconExportSolid2);

	var _IconEyeSolid2 = __webpack_require__(73);

	var _IconEyeSolid3 = _interopRequireDefault(_IconEyeSolid2);

	var _IconFacebookBoxedSolid2 = __webpack_require__(74);

	var _IconFacebookBoxedSolid3 = _interopRequireDefault(_IconFacebookBoxedSolid2);

	var _IconFacebookSolid2 = __webpack_require__(75);

	var _IconFacebookSolid3 = _interopRequireDefault(_IconFacebookSolid2);

	var _IconFilesCopyrightSolid2 = __webpack_require__(76);

	var _IconFilesCopyrightSolid3 = _interopRequireDefault(_IconFilesCopyrightSolid2);

	var _IconFilesCreativeCommonsSolid2 = __webpack_require__(77);

	var _IconFilesCreativeCommonsSolid3 = _interopRequireDefault(_IconFilesCreativeCommonsSolid2);

	var _IconFilesFairUseSolid2 = __webpack_require__(78);

	var _IconFilesFairUseSolid3 = _interopRequireDefault(_IconFilesFairUseSolid2);

	var _IconFilesObtainedPermissionSolid2 = __webpack_require__(79);

	var _IconFilesObtainedPermissionSolid3 = _interopRequireDefault(_IconFilesObtainedPermissionSolid2);

	var _IconFilesPublicDomainSolid2 = __webpack_require__(80);

	var _IconFilesPublicDomainSolid3 = _interopRequireDefault(_IconFilesPublicDomainSolid2);

	var _IconFilmstripSolid2 = __webpack_require__(81);

	var _IconFilmstripSolid3 = _interopRequireDefault(_IconFilmstripSolid2);

	var _IconFlagSolid2 = __webpack_require__(82);

	var _IconFlagSolid3 = _interopRequireDefault(_IconFlagSolid2);

	var _IconFolderLockedSolid2 = __webpack_require__(83);

	var _IconFolderLockedSolid3 = _interopRequireDefault(_IconFolderLockedSolid2);

	var _IconFolderSolid2 = __webpack_require__(84);

	var _IconFolderSolid3 = _interopRequireDefault(_IconFolderSolid2);

	var _IconForwardSolid2 = __webpack_require__(85);

	var _IconForwardSolid3 = _interopRequireDefault(_IconForwardSolid2);

	var _IconGithubSolid2 = __webpack_require__(86);

	var _IconGithubSolid3 = _interopRequireDefault(_IconGithubSolid2);

	var _IconGradebookExportSolid2 = __webpack_require__(87);

	var _IconGradebookExportSolid3 = _interopRequireDefault(_IconGradebookExportSolid2);

	var _IconGradebookImportSolid2 = __webpack_require__(88);

	var _IconGradebookImportSolid3 = _interopRequireDefault(_IconGradebookImportSolid2);

	var _IconGradebookSolid2 = __webpack_require__(89);

	var _IconGradebookSolid3 = _interopRequireDefault(_IconGradebookSolid2);

	var _IconGroupDarkNewSolid2 = __webpack_require__(90);

	var _IconGroupDarkNewSolid3 = _interopRequireDefault(_IconGroupDarkNewSolid2);

	var _IconGroupNewSolid2 = __webpack_require__(91);

	var _IconGroupNewSolid3 = _interopRequireDefault(_IconGroupNewSolid2);

	var _IconGroupSolid2 = __webpack_require__(92);

	var _IconGroupSolid3 = _interopRequireDefault(_IconGroupSolid2);

	var _IconHamburgerSolid2 = __webpack_require__(93);

	var _IconHamburgerSolid3 = _interopRequireDefault(_IconHamburgerSolid2);

	var _IconHeartSolid2 = __webpack_require__(94);

	var _IconHeartSolid3 = _interopRequireDefault(_IconHeartSolid2);

	var _IconHighlighterSolid2 = __webpack_require__(95);

	var _IconHighlighterSolid3 = _interopRequireDefault(_IconHighlighterSolid2);

	var _IconHomeSolid2 = __webpack_require__(96);

	var _IconHomeSolid3 = _interopRequireDefault(_IconHomeSolid2);

	var _IconHourGlassSolid2 = __webpack_require__(97);

	var _IconHourGlassSolid3 = _interopRequireDefault(_IconHourGlassSolid2);

	var _IconImageSolid2 = __webpack_require__(98);

	var _IconImageSolid3 = _interopRequireDefault(_IconImageSolid2);

	var _IconImportContentSolid2 = __webpack_require__(99);

	var _IconImportContentSolid3 = _interopRequireDefault(_IconImportContentSolid2);

	var _IconImportSolid2 = __webpack_require__(100);

	var _IconImportSolid3 = _interopRequireDefault(_IconImportSolid2);

	var _IconIndent2Solid2 = __webpack_require__(101);

	var _IconIndent2Solid3 = _interopRequireDefault(_IconIndent2Solid2);

	var _IconIndentSolid2 = __webpack_require__(102);

	var _IconIndentSolid3 = _interopRequireDefault(_IconIndentSolid2);

	var _IconInfoSolid2 = __webpack_require__(103);

	var _IconInfoSolid3 = _interopRequireDefault(_IconInfoSolid2);

	var _IconInstructureSolid2 = __webpack_require__(104);

	var _IconInstructureSolid3 = _interopRequireDefault(_IconInstructureSolid2);

	var _IconIntegrationsSolid2 = __webpack_require__(105);

	var _IconIntegrationsSolid3 = _interopRequireDefault(_IconIntegrationsSolid2);

	var _IconInvitationSolid2 = __webpack_require__(106);

	var _IconInvitationSolid3 = _interopRequireDefault(_IconInvitationSolid2);

	var _IconKeyboardShortcutsSolid2 = __webpack_require__(107);

	var _IconKeyboardShortcutsSolid3 = _interopRequireDefault(_IconKeyboardShortcutsSolid2);

	var _IconLikeSolid2 = __webpack_require__(108);

	var _IconLikeSolid3 = _interopRequireDefault(_IconLikeSolid2);

	var _IconLinkedinSolid2 = __webpack_require__(110);

	var _IconLinkedinSolid3 = _interopRequireDefault(_IconLinkedinSolid2);

	var _IconLinkSolid2 = __webpack_require__(109);

	var _IconLinkSolid3 = _interopRequireDefault(_IconLinkSolid2);

	var _IconLockSolid2 = __webpack_require__(111);

	var _IconLockSolid3 = _interopRequireDefault(_IconLockSolid2);

	var _IconLtiSolid2 = __webpack_require__(112);

	var _IconLtiSolid3 = _interopRequireDefault(_IconLtiSolid2);

	var _IconMarkAsReadSolid2 = __webpack_require__(113);

	var _IconMarkAsReadSolid3 = _interopRequireDefault(_IconMarkAsReadSolid2);

	var _IconMarkerSolid2 = __webpack_require__(114);

	var _IconMarkerSolid3 = _interopRequireDefault(_IconMarkerSolid2);

	var _IconMasqueradeSolid2 = __webpack_require__(115);

	var _IconMasqueradeSolid3 = _interopRequireDefault(_IconMasqueradeSolid2);

	var _IconMasteryPathSolid2 = __webpack_require__(116);

	var _IconMasteryPathSolid3 = _interopRequireDefault(_IconMasteryPathSolid2);

	var _IconMaterialsRequiredLightSolid2 = __webpack_require__(117);

	var _IconMaterialsRequiredLightSolid3 = _interopRequireDefault(_IconMaterialsRequiredLightSolid2);

	var _IconMaterialsRequiredSolid2 = __webpack_require__(118);

	var _IconMaterialsRequiredSolid3 = _interopRequireDefault(_IconMaterialsRequiredSolid2);

	var _IconMatureLightSolid2 = __webpack_require__(119);

	var _IconMatureLightSolid3 = _interopRequireDefault(_IconMatureLightSolid2);

	var _IconMatureSolid2 = __webpack_require__(120);

	var _IconMatureSolid3 = _interopRequireDefault(_IconMatureSolid2);

	var _IconMediaSolid2 = __webpack_require__(121);

	var _IconMediaSolid3 = _interopRequireDefault(_IconMediaSolid2);

	var _IconMessageSolid2 = __webpack_require__(122);

	var _IconMessageSolid3 = _interopRequireDefault(_IconMessageSolid2);

	var _IconMiniArrowDownSolid2 = __webpack_require__(123);

	var _IconMiniArrowDownSolid3 = _interopRequireDefault(_IconMiniArrowDownSolid2);

	var _IconMiniArrowLeftSolid2 = __webpack_require__(124);

	var _IconMiniArrowLeftSolid3 = _interopRequireDefault(_IconMiniArrowLeftSolid2);

	var _IconMiniArrowRightSolid2 = __webpack_require__(125);

	var _IconMiniArrowRightSolid3 = _interopRequireDefault(_IconMiniArrowRightSolid2);

	var _IconMiniArrowUpSolid2 = __webpack_require__(126);

	var _IconMiniArrowUpSolid3 = _interopRequireDefault(_IconMiniArrowUpSolid2);

	var _IconMinimizeSolid2 = __webpack_require__(127);

	var _IconMinimizeSolid3 = _interopRequireDefault(_IconMinimizeSolid2);

	var _IconModuleSolid2 = __webpack_require__(128);

	var _IconModuleSolid3 = _interopRequireDefault(_IconModuleSolid2);

	var _IconMoreSolid2 = __webpack_require__(129);

	var _IconMoreSolid3 = _interopRequireDefault(_IconMoreSolid2);

	var _IconMoveDownBottomSolid2 = __webpack_require__(130);

	var _IconMoveDownBottomSolid3 = _interopRequireDefault(_IconMoveDownBottomSolid2);

	var _IconMoveDownSolid2 = __webpack_require__(131);

	var _IconMoveDownSolid3 = _interopRequireDefault(_IconMoveDownSolid2);

	var _IconMoveUpSolid2 = __webpack_require__(132);

	var _IconMoveUpSolid3 = _interopRequireDefault(_IconMoveUpSolid2);

	var _IconMoveUpTopSolid2 = __webpack_require__(133);

	var _IconMoveUpTopSolid3 = _interopRequireDefault(_IconMoveUpTopSolid2);

	var _IconMsExcelSolid2 = __webpack_require__(134);

	var _IconMsExcelSolid3 = _interopRequireDefault(_IconMsExcelSolid2);

	var _IconMsPptSolid2 = __webpack_require__(135);

	var _IconMsPptSolid3 = _interopRequireDefault(_IconMsPptSolid2);

	var _IconMsWordSolid2 = __webpack_require__(136);

	var _IconMsWordSolid3 = _interopRequireDefault(_IconMsWordSolid2);

	var _IconMutedSolid2 = __webpack_require__(137);

	var _IconMutedSolid3 = _interopRequireDefault(_IconMutedSolid2);

	var _IconNextUnreadSolid2 = __webpack_require__(138);

	var _IconNextUnreadSolid3 = _interopRequireDefault(_IconNextUnreadSolid2);

	var _IconNoteDarkSolid2 = __webpack_require__(140);

	var _IconNoteDarkSolid3 = _interopRequireDefault(_IconNoteDarkSolid2);

	var _IconNoteLightSolid2 = __webpack_require__(141);

	var _IconNoteLightSolid3 = _interopRequireDefault(_IconNoteLightSolid2);

	var _IconNotGradedSolid2 = __webpack_require__(139);

	var _IconNotGradedSolid3 = _interopRequireDefault(_IconNotGradedSolid2);

	var _IconOffSolid2 = __webpack_require__(142);

	var _IconOffSolid3 = _interopRequireDefault(_IconOffSolid2);

	var _IconOutdent2Solid2 = __webpack_require__(143);

	var _IconOutdent2Solid3 = _interopRequireDefault(_IconOutdent2Solid2);

	var _IconOutdentSolid2 = __webpack_require__(144);

	var _IconOutdentSolid3 = _interopRequireDefault(_IconOutdentSolid2);

	var _IconPaintSolid2 = __webpack_require__(145);

	var _IconPaintSolid3 = _interopRequireDefault(_IconPaintSolid2);

	var _IconPaperclipSolid2 = __webpack_require__(146);

	var _IconPaperclipSolid3 = _interopRequireDefault(_IconPaperclipSolid2);

	var _IconPartialSolid2 = __webpack_require__(147);

	var _IconPartialSolid3 = _interopRequireDefault(_IconPartialSolid2);

	var _IconPdfSolid2 = __webpack_require__(148);

	var _IconPdfSolid3 = _interopRequireDefault(_IconPdfSolid2);

	var _IconPeerGradedSolid2 = __webpack_require__(149);

	var _IconPeerGradedSolid3 = _interopRequireDefault(_IconPeerGradedSolid2);

	var _IconPeerReviewSolid2 = __webpack_require__(150);

	var _IconPeerReviewSolid3 = _interopRequireDefault(_IconPeerReviewSolid2);

	var _IconPinSolid2 = __webpack_require__(151);

	var _IconPinSolid3 = _interopRequireDefault(_IconPinSolid2);

	var _IconPinterestSolid2 = __webpack_require__(152);

	var _IconPinterestSolid3 = _interopRequireDefault(_IconPinterestSolid2);

	var _IconPlusSolid2 = __webpack_require__(153);

	var _IconPlusSolid3 = _interopRequireDefault(_IconPlusSolid2);

	var _IconPostToSisSolid2 = __webpack_require__(154);

	var _IconPostToSisSolid3 = _interopRequireDefault(_IconPostToSisSolid2);

	var _IconPrerequisiteSolid2 = __webpack_require__(155);

	var _IconPrerequisiteSolid3 = _interopRequireDefault(_IconPrerequisiteSolid2);

	var _IconPrinterSolid2 = __webpack_require__(156);

	var _IconPrinterSolid3 = _interopRequireDefault(_IconPrinterSolid2);

	var _IconPublishSolid2 = __webpack_require__(157);

	var _IconPublishSolid3 = _interopRequireDefault(_IconPublishSolid2);

	var _IconQuestionSolid2 = __webpack_require__(158);

	var _IconQuestionSolid3 = _interopRequireDefault(_IconQuestionSolid2);

	var _IconQuizSolid2 = __webpack_require__(159);

	var _IconQuizSolid3 = _interopRequireDefault(_IconQuizSolid2);

	var _IconQuizStatsAvgSolid2 = __webpack_require__(160);

	var _IconQuizStatsAvgSolid3 = _interopRequireDefault(_IconQuizStatsAvgSolid2);

	var _IconQuizStatsDeviationSolid2 = __webpack_require__(161);

	var _IconQuizStatsDeviationSolid3 = _interopRequireDefault(_IconQuizStatsDeviationSolid2);

	var _IconQuizStatsHighSolid2 = __webpack_require__(162);

	var _IconQuizStatsHighSolid3 = _interopRequireDefault(_IconQuizStatsHighSolid2);

	var _IconQuizStatsLowSolid2 = __webpack_require__(163);

	var _IconQuizStatsLowSolid3 = _interopRequireDefault(_IconQuizStatsLowSolid2);

	var _IconQuizStatsTimeSolid2 = __webpack_require__(164);

	var _IconQuizStatsTimeSolid3 = _interopRequireDefault(_IconQuizStatsTimeSolid2);

	var _IconRefreshSolid2 = __webpack_require__(165);

	var _IconRefreshSolid3 = _interopRequireDefault(_IconRefreshSolid2);

	var _IconRemoveFromCollectionSolid2 = __webpack_require__(166);

	var _IconRemoveFromCollectionSolid3 = _interopRequireDefault(_IconRemoveFromCollectionSolid2);

	var _IconRepliedSolid2 = __webpack_require__(167);

	var _IconRepliedSolid3 = _interopRequireDefault(_IconRepliedSolid2);

	var _IconReply2Solid2 = __webpack_require__(168);

	var _IconReply2Solid3 = _interopRequireDefault(_IconReply2Solid2);

	var _IconReplyAll2Solid2 = __webpack_require__(169);

	var _IconReplyAll2Solid3 = _interopRequireDefault(_IconReplyAll2Solid2);

	var _IconReplySolid2 = __webpack_require__(170);

	var _IconReplySolid3 = _interopRequireDefault(_IconReplySolid2);

	var _IconResetSolid2 = __webpack_require__(171);

	var _IconResetSolid3 = _interopRequireDefault(_IconResetSolid2);

	var _IconRssAddSolid2 = __webpack_require__(172);

	var _IconRssAddSolid3 = _interopRequireDefault(_IconRssAddSolid2);

	var _IconRssSolid2 = __webpack_require__(173);

	var _IconRssSolid3 = _interopRequireDefault(_IconRssSolid2);

	var _IconRubricDarkSolid2 = __webpack_require__(174);

	var _IconRubricDarkSolid3 = _interopRequireDefault(_IconRubricDarkSolid2);

	var _IconRubricSolid2 = __webpack_require__(175);

	var _IconRubricSolid3 = _interopRequireDefault(_IconRubricSolid2);

	var _IconSearchAddressBookSolid2 = __webpack_require__(176);

	var _IconSearchAddressBookSolid3 = _interopRequireDefault(_IconSearchAddressBookSolid2);

	var _IconSearchSolid2 = __webpack_require__(177);

	var _IconSearchSolid3 = _interopRequireDefault(_IconSearchSolid2);

	var _IconSettings2Solid2 = __webpack_require__(178);

	var _IconSettings2Solid3 = _interopRequireDefault(_IconSettings2Solid2);

	var _IconSkypeSolid2 = __webpack_require__(179);

	var _IconSkypeSolid3 = _interopRequireDefault(_IconSkypeSolid2);

	var _IconSpeedGraderSolid2 = __webpack_require__(180);

	var _IconSpeedGraderSolid3 = _interopRequireDefault(_IconSpeedGraderSolid2);

	var _IconStandardsSolid2 = __webpack_require__(181);

	var _IconStandardsSolid3 = _interopRequireDefault(_IconStandardsSolid2);

	var _IconStarLightSolid2 = __webpack_require__(182);

	var _IconStarLightSolid3 = _interopRequireDefault(_IconStarLightSolid2);

	var _IconStarSolid2 = __webpack_require__(183);

	var _IconStarSolid3 = _interopRequireDefault(_IconStarSolid2);

	var _IconStatsSolid2 = __webpack_require__(184);

	var _IconStatsSolid3 = _interopRequireDefault(_IconStatsSolid2);

	var _IconStrikethroughSolid2 = __webpack_require__(185);

	var _IconStrikethroughSolid3 = _interopRequireDefault(_IconStrikethroughSolid2);

	var _IconStudentViewSolid2 = __webpack_require__(186);

	var _IconStudentViewSolid3 = _interopRequireDefault(_IconStudentViewSolid2);

	var _IconSyllabusSolid2 = __webpack_require__(187);

	var _IconSyllabusSolid3 = _interopRequireDefault(_IconSyllabusSolid2);

	var _IconTableSolid2 = __webpack_require__(188);

	var _IconTableSolid3 = _interopRequireDefault(_IconTableSolid2);

	var _IconTagSolid2 = __webpack_require__(189);

	var _IconTagSolid3 = _interopRequireDefault(_IconTagSolid2);

	var _IconTargetSolid2 = __webpack_require__(190);

	var _IconTargetSolid3 = _interopRequireDefault(_IconTargetSolid2);

	var _IconTextareaSolid2 = __webpack_require__(195);

	var _IconTextareaSolid3 = _interopRequireDefault(_IconTextareaSolid2);

	var _IconTextCenteredSolid2 = __webpack_require__(191);

	var _IconTextCenteredSolid3 = _interopRequireDefault(_IconTextCenteredSolid2);

	var _IconTextLeftSolid2 = __webpack_require__(192);

	var _IconTextLeftSolid3 = _interopRequireDefault(_IconTextLeftSolid2);

	var _IconTextRightSolid2 = __webpack_require__(193);

	var _IconTextRightSolid3 = _interopRequireDefault(_IconTextRightSolid2);

	var _IconTextSolid2 = __webpack_require__(194);

	var _IconTextSolid3 = _interopRequireDefault(_IconTextSolid2);

	var _IconTimerSolid2 = __webpack_require__(196);

	var _IconTimerSolid3 = _interopRequireDefault(_IconTimerSolid2);

	var _IconToggleLeftSolid2 = __webpack_require__(197);

	var _IconToggleLeftSolid3 = _interopRequireDefault(_IconToggleLeftSolid2);

	var _IconToggleRightSolid2 = __webpack_require__(198);

	var _IconToggleRightSolid3 = _interopRequireDefault(_IconToggleRightSolid2);

	var _IconTrashSolid2 = __webpack_require__(199);

	var _IconTrashSolid3 = _interopRequireDefault(_IconTrashSolid2);

	var _IconTroubleSolid2 = __webpack_require__(200);

	var _IconTroubleSolid3 = _interopRequireDefault(_IconTroubleSolid2);

	var _IconTwitterBoxedSolid2 = __webpack_require__(201);

	var _IconTwitterBoxedSolid3 = _interopRequireDefault(_IconTwitterBoxedSolid2);

	var _IconTwitterSolid2 = __webpack_require__(202);

	var _IconTwitterSolid3 = _interopRequireDefault(_IconTwitterSolid2);

	var _IconUnknown2Solid2 = __webpack_require__(203);

	var _IconUnknown2Solid3 = _interopRequireDefault(_IconUnknown2Solid2);

	var _IconUnlockSolid2 = __webpack_require__(204);

	var _IconUnlockSolid3 = _interopRequireDefault(_IconUnlockSolid2);

	var _IconUnmutedSolid2 = __webpack_require__(205);

	var _IconUnmutedSolid3 = _interopRequireDefault(_IconUnmutedSolid2);

	var _IconUnpublishedSolid2 = __webpack_require__(207);

	var _IconUnpublishedSolid3 = _interopRequireDefault(_IconUnpublishedSolid2);

	var _IconUnpublishSolid2 = __webpack_require__(206);

	var _IconUnpublishSolid3 = _interopRequireDefault(_IconUnpublishSolid2);

	var _IconUpdownSolid2 = __webpack_require__(208);

	var _IconUpdownSolid3 = _interopRequireDefault(_IconUpdownSolid2);

	var _IconUploadSolid2 = __webpack_require__(209);

	var _IconUploadSolid3 = _interopRequireDefault(_IconUploadSolid2);

	var _IconUserAddSolid2 = __webpack_require__(210);

	var _IconUserAddSolid3 = _interopRequireDefault(_IconUserAddSolid2);

	var _IconUserSolid2 = __webpack_require__(211);

	var _IconUserSolid3 = _interopRequireDefault(_IconUserSolid2);

	var _IconVideoSolid2 = __webpack_require__(212);

	var _IconVideoSolid3 = _interopRequireDefault(_IconVideoSolid2);

	var _IconWarningSolid2 = __webpack_require__(213);

	var _IconWarningSolid3 = _interopRequireDefault(_IconWarningSolid2);

	var _IconWindowsSolid2 = __webpack_require__(214);

	var _IconWindowsSolid3 = _interopRequireDefault(_IconWindowsSolid2);

	var _IconWordpressSolid2 = __webpack_require__(215);

	var _IconWordpressSolid3 = _interopRequireDefault(_IconWordpressSolid2);

	var _IconXSolid2 = __webpack_require__(216);

	var _IconXSolid3 = _interopRequireDefault(_IconXSolid2);

	var _IconZippedSolid2 = __webpack_require__(217);

	var _IconZippedSolid3 = _interopRequireDefault(_IconZippedSolid2);

	var _IconZoomInSolid2 = __webpack_require__(218);

	var _IconZoomInSolid3 = _interopRequireDefault(_IconZoomInSolid2);

	var _IconZoomOutSolid2 = __webpack_require__(219);

	var _IconZoomOutSolid3 = _interopRequireDefault(_IconZoomOutSolid2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.IconAddressBookSolid = _IconAddressBookSolid3.default;
	exports.IconAddSolid = _IconAddSolid3.default;
	exports.IconAnalyticsSolid = _IconAnalyticsSolid3.default;
	exports.IconAndroidSolid = _IconAndroidSolid3.default;
	exports.IconAnnouncementSolid = _IconAnnouncementSolid3.default;
	exports.IconAppleSolid = _IconAppleSolid3.default;
	exports.IconArrowDownSolid = _IconArrowDownSolid3.default;
	exports.IconArrowLeftSolid = _IconArrowLeftSolid3.default;
	exports.IconArrowOpenDownSolid = _IconArrowOpenDownSolid3.default;
	exports.IconArrowOpenLeftSolid = _IconArrowOpenLeftSolid3.default;
	exports.IconArrowOpenRightSolid = _IconArrowOpenRightSolid3.default;
	exports.IconArrowOpenUpSolid = _IconArrowOpenUpSolid3.default;
	exports.IconArrowRightSolid = _IconArrowRightSolid3.default;
	exports.IconArrowUpSolid = _IconArrowUpSolid3.default;
	exports.IconAssignmentSolid = _IconAssignmentSolid3.default;
	exports.IconAudioSolid = _IconAudioSolid3.default;
	exports.IconBookmarkSolid = _IconBookmarkSolid3.default;
	exports.IconBoxSolid = _IconBoxSolid3.default;
	exports.IconCalendarAddSolid = _IconCalendarAddSolid3.default;
	exports.IconCalendarDaySolid = _IconCalendarDaySolid3.default;
	exports.IconCalendarDaysSolid = _IconCalendarDaysSolid3.default;
	exports.IconCalendarMonthSolid = _IconCalendarMonthSolid3.default;
	exports.IconCalendarReservedSolid = _IconCalendarReservedSolid3.default;
	exports.IconCheckDarkSolid = _IconCheckDarkSolid3.default;
	exports.IconCheckMarkSolid = _IconCheckMarkSolid3.default;
	exports.IconCheckPlusSolid = _IconCheckPlusSolid3.default;
	exports.IconCheckSolid = _IconCheckSolid3.default;
	exports.IconClockSolid = _IconClockSolid3.default;
	exports.IconCloudLockSolid = _IconCloudLockSolid3.default;
	exports.IconCollapseSolid = _IconCollapseSolid3.default;
	exports.IconCollectionSaveSolid = _IconCollectionSaveSolid3.default;
	exports.IconCollectionSolid = _IconCollectionSolid3.default;
	exports.IconCommonsSolid = _IconCommonsSolid3.default;
	exports.IconCompleteSolid = _IconCompleteSolid3.default;
	exports.IconComposeSolid = _IconComposeSolid3.default;
	exports.IconCopyCourseSolid = _IconCopyCourseSolid3.default;
	exports.IconCopySolid = _IconCopySolid3.default;
	exports.IconCoursesSolid = _IconCoursesSolid3.default;
	exports.IconDiscussionCheckSolid = _IconDiscussionCheckSolid3.default;
	exports.IconDiscussionNewSolid = _IconDiscussionNewSolid3.default;
	exports.IconDiscussionReply2Solid = _IconDiscussionReply2Solid3.default;
	exports.IconDiscussionReplyDarkSolid = _IconDiscussionReplyDarkSolid3.default;
	exports.IconDiscussionReplySolid = _IconDiscussionReplySolid3.default;
	exports.IconDiscussionSearchSolid = _IconDiscussionSearchSolid3.default;
	exports.IconDiscussionSolid = _IconDiscussionSolid3.default;
	exports.IconDiscussionXSolid = _IconDiscussionXSolid3.default;
	exports.IconDocumentSolid = _IconDocumentSolid3.default;
	exports.IconDownloadSolid = _IconDownloadSolid3.default;
	exports.IconDragHandleSolid = _IconDragHandleSolid3.default;
	exports.IconDropDownSolid = _IconDropDownSolid3.default;
	exports.IconEditSolid = _IconEditSolid3.default;
	exports.IconEducatorsSolid = _IconEducatorsSolid3.default;
	exports.IconEmailSolid = _IconEmailSolid3.default;
	exports.IconEmptySolid = _IconEmptySolid3.default;
	exports.IconEndSolid = _IconEndSolid3.default;
	exports.IconEquationSolid = _IconEquationSolid3.default;
	exports.IconEquellaSolid = _IconEquellaSolid3.default;
	exports.IconExpandItemsSolid = _IconExpandItemsSolid3.default;
	exports.IconExpandSolid = _IconExpandSolid3.default;
	exports.IconExportContentSolid = _IconExportContentSolid3.default;
	exports.IconExportSolid = _IconExportSolid3.default;
	exports.IconEyeSolid = _IconEyeSolid3.default;
	exports.IconFacebookBoxedSolid = _IconFacebookBoxedSolid3.default;
	exports.IconFacebookSolid = _IconFacebookSolid3.default;
	exports.IconFilesCopyrightSolid = _IconFilesCopyrightSolid3.default;
	exports.IconFilesCreativeCommonsSolid = _IconFilesCreativeCommonsSolid3.default;
	exports.IconFilesFairUseSolid = _IconFilesFairUseSolid3.default;
	exports.IconFilesObtainedPermissionSolid = _IconFilesObtainedPermissionSolid3.default;
	exports.IconFilesPublicDomainSolid = _IconFilesPublicDomainSolid3.default;
	exports.IconFilmstripSolid = _IconFilmstripSolid3.default;
	exports.IconFlagSolid = _IconFlagSolid3.default;
	exports.IconFolderLockedSolid = _IconFolderLockedSolid3.default;
	exports.IconFolderSolid = _IconFolderSolid3.default;
	exports.IconForwardSolid = _IconForwardSolid3.default;
	exports.IconGithubSolid = _IconGithubSolid3.default;
	exports.IconGradebookExportSolid = _IconGradebookExportSolid3.default;
	exports.IconGradebookImportSolid = _IconGradebookImportSolid3.default;
	exports.IconGradebookSolid = _IconGradebookSolid3.default;
	exports.IconGroupDarkNewSolid = _IconGroupDarkNewSolid3.default;
	exports.IconGroupNewSolid = _IconGroupNewSolid3.default;
	exports.IconGroupSolid = _IconGroupSolid3.default;
	exports.IconHamburgerSolid = _IconHamburgerSolid3.default;
	exports.IconHeartSolid = _IconHeartSolid3.default;
	exports.IconHighlighterSolid = _IconHighlighterSolid3.default;
	exports.IconHomeSolid = _IconHomeSolid3.default;
	exports.IconHourGlassSolid = _IconHourGlassSolid3.default;
	exports.IconImageSolid = _IconImageSolid3.default;
	exports.IconImportContentSolid = _IconImportContentSolid3.default;
	exports.IconImportSolid = _IconImportSolid3.default;
	exports.IconIndent2Solid = _IconIndent2Solid3.default;
	exports.IconIndentSolid = _IconIndentSolid3.default;
	exports.IconInfoSolid = _IconInfoSolid3.default;
	exports.IconInstructureSolid = _IconInstructureSolid3.default;
	exports.IconIntegrationsSolid = _IconIntegrationsSolid3.default;
	exports.IconInvitationSolid = _IconInvitationSolid3.default;
	exports.IconKeyboardShortcutsSolid = _IconKeyboardShortcutsSolid3.default;
	exports.IconLikeSolid = _IconLikeSolid3.default;
	exports.IconLinkedinSolid = _IconLinkedinSolid3.default;
	exports.IconLinkSolid = _IconLinkSolid3.default;
	exports.IconLockSolid = _IconLockSolid3.default;
	exports.IconLtiSolid = _IconLtiSolid3.default;
	exports.IconMarkAsReadSolid = _IconMarkAsReadSolid3.default;
	exports.IconMarkerSolid = _IconMarkerSolid3.default;
	exports.IconMasqueradeSolid = _IconMasqueradeSolid3.default;
	exports.IconMasteryPathSolid = _IconMasteryPathSolid3.default;
	exports.IconMaterialsRequiredLightSolid = _IconMaterialsRequiredLightSolid3.default;
	exports.IconMaterialsRequiredSolid = _IconMaterialsRequiredSolid3.default;
	exports.IconMatureLightSolid = _IconMatureLightSolid3.default;
	exports.IconMatureSolid = _IconMatureSolid3.default;
	exports.IconMediaSolid = _IconMediaSolid3.default;
	exports.IconMessageSolid = _IconMessageSolid3.default;
	exports.IconMiniArrowDownSolid = _IconMiniArrowDownSolid3.default;
	exports.IconMiniArrowLeftSolid = _IconMiniArrowLeftSolid3.default;
	exports.IconMiniArrowRightSolid = _IconMiniArrowRightSolid3.default;
	exports.IconMiniArrowUpSolid = _IconMiniArrowUpSolid3.default;
	exports.IconMinimizeSolid = _IconMinimizeSolid3.default;
	exports.IconModuleSolid = _IconModuleSolid3.default;
	exports.IconMoreSolid = _IconMoreSolid3.default;
	exports.IconMoveDownBottomSolid = _IconMoveDownBottomSolid3.default;
	exports.IconMoveDownSolid = _IconMoveDownSolid3.default;
	exports.IconMoveUpSolid = _IconMoveUpSolid3.default;
	exports.IconMoveUpTopSolid = _IconMoveUpTopSolid3.default;
	exports.IconMsExcelSolid = _IconMsExcelSolid3.default;
	exports.IconMsPptSolid = _IconMsPptSolid3.default;
	exports.IconMsWordSolid = _IconMsWordSolid3.default;
	exports.IconMutedSolid = _IconMutedSolid3.default;
	exports.IconNextUnreadSolid = _IconNextUnreadSolid3.default;
	exports.IconNoteDarkSolid = _IconNoteDarkSolid3.default;
	exports.IconNoteLightSolid = _IconNoteLightSolid3.default;
	exports.IconNotGradedSolid = _IconNotGradedSolid3.default;
	exports.IconOffSolid = _IconOffSolid3.default;
	exports.IconOutdent2Solid = _IconOutdent2Solid3.default;
	exports.IconOutdentSolid = _IconOutdentSolid3.default;
	exports.IconPaintSolid = _IconPaintSolid3.default;
	exports.IconPaperclipSolid = _IconPaperclipSolid3.default;
	exports.IconPartialSolid = _IconPartialSolid3.default;
	exports.IconPdfSolid = _IconPdfSolid3.default;
	exports.IconPeerGradedSolid = _IconPeerGradedSolid3.default;
	exports.IconPeerReviewSolid = _IconPeerReviewSolid3.default;
	exports.IconPinSolid = _IconPinSolid3.default;
	exports.IconPinterestSolid = _IconPinterestSolid3.default;
	exports.IconPlusSolid = _IconPlusSolid3.default;
	exports.IconPostToSisSolid = _IconPostToSisSolid3.default;
	exports.IconPrerequisiteSolid = _IconPrerequisiteSolid3.default;
	exports.IconPrinterSolid = _IconPrinterSolid3.default;
	exports.IconPublishSolid = _IconPublishSolid3.default;
	exports.IconQuestionSolid = _IconQuestionSolid3.default;
	exports.IconQuizSolid = _IconQuizSolid3.default;
	exports.IconQuizStatsAvgSolid = _IconQuizStatsAvgSolid3.default;
	exports.IconQuizStatsDeviationSolid = _IconQuizStatsDeviationSolid3.default;
	exports.IconQuizStatsHighSolid = _IconQuizStatsHighSolid3.default;
	exports.IconQuizStatsLowSolid = _IconQuizStatsLowSolid3.default;
	exports.IconQuizStatsTimeSolid = _IconQuizStatsTimeSolid3.default;
	exports.IconRefreshSolid = _IconRefreshSolid3.default;
	exports.IconRemoveFromCollectionSolid = _IconRemoveFromCollectionSolid3.default;
	exports.IconRepliedSolid = _IconRepliedSolid3.default;
	exports.IconReply2Solid = _IconReply2Solid3.default;
	exports.IconReplyAll2Solid = _IconReplyAll2Solid3.default;
	exports.IconReplySolid = _IconReplySolid3.default;
	exports.IconResetSolid = _IconResetSolid3.default;
	exports.IconRssAddSolid = _IconRssAddSolid3.default;
	exports.IconRssSolid = _IconRssSolid3.default;
	exports.IconRubricDarkSolid = _IconRubricDarkSolid3.default;
	exports.IconRubricSolid = _IconRubricSolid3.default;
	exports.IconSearchAddressBookSolid = _IconSearchAddressBookSolid3.default;
	exports.IconSearchSolid = _IconSearchSolid3.default;
	exports.IconSettings2Solid = _IconSettings2Solid3.default;
	exports.IconSkypeSolid = _IconSkypeSolid3.default;
	exports.IconSpeedGraderSolid = _IconSpeedGraderSolid3.default;
	exports.IconStandardsSolid = _IconStandardsSolid3.default;
	exports.IconStarLightSolid = _IconStarLightSolid3.default;
	exports.IconStarSolid = _IconStarSolid3.default;
	exports.IconStatsSolid = _IconStatsSolid3.default;
	exports.IconStrikethroughSolid = _IconStrikethroughSolid3.default;
	exports.IconStudentViewSolid = _IconStudentViewSolid3.default;
	exports.IconSyllabusSolid = _IconSyllabusSolid3.default;
	exports.IconTableSolid = _IconTableSolid3.default;
	exports.IconTagSolid = _IconTagSolid3.default;
	exports.IconTargetSolid = _IconTargetSolid3.default;
	exports.IconTextareaSolid = _IconTextareaSolid3.default;
	exports.IconTextCenteredSolid = _IconTextCenteredSolid3.default;
	exports.IconTextLeftSolid = _IconTextLeftSolid3.default;
	exports.IconTextRightSolid = _IconTextRightSolid3.default;
	exports.IconTextSolid = _IconTextSolid3.default;
	exports.IconTimerSolid = _IconTimerSolid3.default;
	exports.IconToggleLeftSolid = _IconToggleLeftSolid3.default;
	exports.IconToggleRightSolid = _IconToggleRightSolid3.default;
	exports.IconTrashSolid = _IconTrashSolid3.default;
	exports.IconTroubleSolid = _IconTroubleSolid3.default;
	exports.IconTwitterBoxedSolid = _IconTwitterBoxedSolid3.default;
	exports.IconTwitterSolid = _IconTwitterSolid3.default;
	exports.IconUnknown2Solid = _IconUnknown2Solid3.default;
	exports.IconUnlockSolid = _IconUnlockSolid3.default;
	exports.IconUnmutedSolid = _IconUnmutedSolid3.default;
	exports.IconUnpublishedSolid = _IconUnpublishedSolid3.default;
	exports.IconUnpublishSolid = _IconUnpublishSolid3.default;
	exports.IconUpdownSolid = _IconUpdownSolid3.default;
	exports.IconUploadSolid = _IconUploadSolid3.default;
	exports.IconUserAddSolid = _IconUserAddSolid3.default;
	exports.IconUserSolid = _IconUserSolid3.default;
	exports.IconVideoSolid = _IconVideoSolid3.default;
	exports.IconWarningSolid = _IconWarningSolid3.default;
	exports.IconWindowsSolid = _IconWindowsSolid3.default;
	exports.IconWordpressSolid = _IconWordpressSolid3.default;
	exports.IconXSolid = _IconXSolid3.default;
	exports.IconZippedSolid = _IconZippedSolid3.default;
	exports.IconZoomInSolid = _IconZoomInSolid3.default;
	exports.IconZoomOutSolid = _IconZoomOutSolid3.default;

/***/ }
/******/ ])
});
;