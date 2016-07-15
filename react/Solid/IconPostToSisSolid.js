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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(140);


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

/***/ 140:
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

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconPostToSisSolid).apply(this, arguments));
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

/***/ }

/******/ })
});
;