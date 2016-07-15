(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InstructureIconsLine"] = factory(require("react"));
	else
		root["InstructureIconsLine"] = factory(root["React"]);
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _shortid = __webpack_require__(4);

	var _shortid2 = _interopRequireDefault(_shortid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseIcon = function (_Component) {
	  _inherits(BaseIcon, _Component);

	  function BaseIcon(props) {
	    _classCallCheck(this, BaseIcon);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseIcon).call(this));

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
	      var _props = this.props;
	      var title = _props.title;
	      var width = _props.width;
	      var height = _props.height;
	      var viewBox = _props.viewBox;

	      var style = {
	        fill: 'currentColor'
	      };
	      return _react2.default.createElement(
	        'svg',
	        {
	          style: style,
	          width: width,
	          height: height,
	          viewBox: viewBox,
	          'aria-hidden': title ? null : 'true',
	          'aria-labelledby': this.labelledBy,
	          role: this.role },
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

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(5);


/***/ },

/***/ 5:
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

/***/ 6:
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

/***/ 7:
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

/***/ 8:
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

/***/ 9:
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

/***/ 10:
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

/***/ 11:
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

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	module.exports = 0;


/***/ },

/***/ 62:
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

	var IconEquellaLine = function (_Component) {
	  _inherits(IconEquellaLine, _Component);

	  function IconEquellaLine() {
	    _classCallCheck(this, IconEquellaLine);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconEquellaLine).apply(this, arguments));
	  }

	  _createClass(IconEquellaLine, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _IconBase2.default,
	        _extends({}, this.props, {
	          name: 'IconEquellaLine',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M894.689 1672.168c1.308-7.043 8.652-12.778 16.4-12.778h62.076c7.646 0 12.676 5.735 11.268 12.778l-12.073 58.756c-1.409 7.042-8.753 12.878-16.5 12.878h-62.177c-7.546 0-12.577-5.836-11.067-12.878l12.073-58.756zm-599.334 16.298c1.409-7.042 8.753-12.878 16.4-12.878h62.177c7.646 0 12.677 5.836 11.067 12.878l-11.872 58.757c-1.51 7.042-8.854 12.777-16.5 12.777H294.55c-7.646 0-12.676-5.735-11.268-12.777l12.073-58.757zM271.511 653.19c1.408-7.043 8.753-12.878 16.4-12.878h62.076c7.646 0 12.676 5.835 11.067 12.878l-11.872 58.756c-1.61 7.043-9.055 12.778-16.601 12.778h-62.076c-7.647 0-12.677-5.735-11.269-12.778l12.074-58.756h.2zm415.921-480.413c1.51-7.042 8.854-12.777 16.5-12.777h62.077c7.747 0 12.777 5.835 11.369 12.777l-12.074 58.857c-1.408 7.043-8.853 12.878-16.5 12.878h-62.177c-7.646 0-12.676-6.036-11.067-12.878l11.872-58.857zm653.563 0c1.408-7.042 8.753-12.777 16.399-12.777h62.076c7.647 0 12.677 5.835 11.067 12.777l-11.872 58.857c-1.509 7.043-8.853 12.778-16.6 12.778h-62.077c-7.646 0-12.676-6.037-11.268-12.878l12.073-58.857.202.1zM937.95 491.007c1.61-7.244 9.055-13.08 16.6-13.08h62.077c7.646 0 12.677 6.037 11.268 13.08l-12.073 58.655c-1.408 7.043-8.753 12.778-16.5 12.778h-62.076c-7.647 0-12.576-5.735-11.067-12.778l11.872-58.756-.1.1zm-174.357-117.01c1.51-7.042 9.055-12.676 16.4-12.676h110.47c7.646 0 12.575 5.835 11.066 12.777L880.603 478.33c-1.509 7.043-9.055 12.677-16.5 12.677h-110.67c-7.546 0-12.577-5.735-11.068-12.677l21.128-104.333h.101zM480.176 1392.975c1.509-7.043 9.055-12.677 16.4-12.677h110.368c7.747 0 12.677 5.634 11.269 12.576l-21.33 104.333c-1.408 7.043-8.853 12.677-16.298 12.677H469.914c-7.446 0-12.476-5.735-11.068-12.677l21.33-104.333v.1zm446.406 107.15c1.51-7.043 9.055-12.778 16.4-12.778h110.47c7.646 0 12.576 5.735 11.066 12.677l-21.128 104.332c-1.509 7.043-9.055 12.577-16.5 12.577H916.42c-7.545 0-12.576-5.735-11.067-12.577l21.129-104.433.1.201zm290.863-81.495c4.327-21.128 26.36-38.231 49.098-38.231h172.747c22.839 0 37.83 17.103 33.504 38.231l-33.403 163.391c-4.326 21.128-26.46 38.232-49.299 38.232h-172.445c-22.839 0-37.83-16.903-33.403-38.232l33.403-163.39h-.202zm-803.672-389.36c4.326-21.128 26.36-38.433 49.098-38.433h172.747c22.839 0 37.83 17.104 33.503 38.232L635.72 1192.66c-4.326 21.129-26.46 38.232-49.3 38.232H413.774c-22.738 0-37.83-17.103-33.402-38.232l33.402-163.39zm55.336-337.647c4.225-21.128 26.158-38.232 49.097-38.232h172.647c22.838 0 37.83 17.104 33.503 38.232l-33.402 163.592c-4.327 21.128-26.46 38.232-49.3 38.232H469.11c-22.839 0-37.93-17.104-33.503-38.232l33.402-163.592h.1zM1408 360.717c4.326-21.128 26.46-38.232 49.299-38.232h172.646c22.839 0 37.83 17.104 33.503 38.232l-33.302 163.491c-4.326 21.128-26.36 38.232-49.097 38.232h-172.747c-22.839 0-37.83-17.104-33.504-38.232l33.403-163.491h-.201zM873.76 742.532c10.062-49.3 61.574-89.241 114.897-89.241h524.782c53.323 0 88.537 39.942 78.476 89.341l-101.616 496.51c-10.061 49.3-61.574 89.342-114.897 89.342H850.622c-53.324 0-88.537-39.942-78.476-89.342l101.616-496.41v-.2z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
	      );
	    }
	  }]);

	  return IconEquellaLine;
	}(_react.Component);

	exports.default = IconEquellaLine;

/***/ }

/******/ })
});
;