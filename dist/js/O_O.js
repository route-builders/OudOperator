(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("O_O", [], factory);
	else if(typeof exports === 'object')
		exports["O_O"] = factory();
	else
		root["O_O"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var OudOperator_1 = __webpack_require__(2);

var O_O = {
  Station: OudOperator_1.Station,
  TrainType: OudOperator_1.TrainType,
  Diagram: OudOperator_1.Diagram,
  Time: OudOperator_1.Time,
  Streak: OudOperator_1.Streak,
  StHandling: OudOperator_1.StHandling,
  DataSet: OudOperator_1.DataSet,
  EndpointWork: OudOperator_1.EndpointWork
};
exports["default"] = O_O;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Color =
/*#__PURE__*/
function () {
  function Color(v) {
    _classCallCheck(this, Color);

    this._r = 0;
    this._g = 0;
    this._b = 0;

    if (v === undefined) {
      return;
    }

    this.setFromHEX(v);
  }

  _createClass(Color, [{
    key: "setFromHEX",
    value: function setFromHEX(v) {
      var matchResults = [v.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/), v.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/)];

      if (matchResults[0] !== null) {
        this._r = parseInt(matchResults[0][1] + matchResults[0][1], 16);
        this._g = parseInt(matchResults[0][2] + matchResults[0][2], 16);
        this._b = parseInt(matchResults[0][3] + matchResults[0][3], 16);
      } else if (matchResults[1] !== null) {
        this._r = parseInt(matchResults[1][1], 16);
        this._g = parseInt(matchResults[1][2], 16);
        this._b = parseInt(matchResults[1][3], 16);
      } else {
        console.log('ERROR');
      }
    }
  }, {
    key: "setFromABGR",
    value: function setFromABGR(v) {
      var matchResult = v.match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
      this._r = parseInt(matchResult[4], 16);
      this._g = parseInt(matchResult[3], 16);
      this._b = parseInt(matchResult[2], 16);
    }
  }, {
    key: "RGB",
    value: function RGB() {
      return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')';
    }
  }, {
    key: "HEX",
    value: function HEX() {
      var withSharp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return (withSharp ? '#' : '') + this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
    }
  }, {
    key: "BGR",
    value: function BGR() {
      var withSharp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return (withSharp ? '#' : '') + this._b.toString(16) + this._g.toString(16) + this._r.toString(16) + '00';
    }
  }]);

  return Color;
}();

exports.Color = Color;

var Time =
/*#__PURE__*/
function () {
  function Time(v) {
    _classCallCheck(this, Time);

    this.isNull = true;
    this._h = 0;
    this._m = 0;
    this._s = 0;

    if (v === undefined || v === null) {
      this.isNull = true;
      this._h = 0;
      this._m = 0;
      this._s = 0;
      return;
    }

    this.setTime(v);
  }

  _createClass(Time, [{
    key: "setTime",
    value: function setTime(v) {
      if (v.match(/^[0-9]{3,6}$/) === null) {
        this._h = 0;
        this._m = 0;
        this._s = 0;
        return;
      }

      var time = parseInt(v);

      if (3 <= v.length && v.length <= 4) {
        this._h = Math.floor(time / 100);
        this._m = time % 100;
        this._s = 0;
        this.isNull = false;
      } else if (5 <= v.length && v.length <= 6) {
        this._h = Math.floor(time / 10000);
        this._m = Math.floor(time % 10000 / 100);
        this._s = time % 100;
        this.isNull = false;
      }

      this.normalize();
    }
  }, {
    key: "__slice",
    value: function __slice(v) {
      return ('00' + v).slice(-2);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      this._m += Math.floor(this._s / 60);
      this._h += Math.floor(this._m / 60);
      this._s %= 60;
      this._m %= 60;
      this._h %= 24;
    }
  }, {
    key: "str",
    value: function str() {
      var withCoron = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var withSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (withCoron) {
        return this.h + ':' + this.m + (withSecond ? ':' + this.s : '');
      } else {
        return this.h + this.m + (withSecond ? this.s : '');
      }
    }
  }, {
    key: "h",
    get: function get() {
      if (this.isNull) {
        return undefined;
      }

      return this.__slice(this._h);
    },
    set: function set(v) {
      if (_typeof(v) !== undefined) {
        this._h = 0;
      }

      var parseV = parseInt(v);
      this._h = parseV === NaN ? 0 : parseV;
    }
  }, {
    key: "m",
    get: function get() {
      if (this.isNull) {
        return undefined;
      }

      return this.__slice(this._h);
    },
    set: function set(v) {
      var parseV = parseInt(v);
      this._m = parseV === NaN ? 0 : parseV;
    }
  }, {
    key: "s",
    get: function get() {
      if (this.isNull) {
        return undefined;
      }

      return this.__slice(this._h);
    },
    set: function set(v) {
      var parseV = parseInt(v);
      this._s = parseV === NaN ? 0 : parseV;
    }
  }]);

  return Time;
}();

exports.Time = Time;

var DataSet =
/*#__PURE__*/
function () {
  function DataSet() {
    _classCallCheck(this, DataSet);

    this.loadingStartTime = 0;
    this._fileType = '';
    this._fileTypeAppComment = '';
    this._name = '';
    this._color = new Color();
    this._stations = new Array();
    this._trainTypes = new Array();
    this._diagrams = new Array();
    this.fileStruct = {
      Rosen: [[]],
      Eki: [[]],
      Ressyasyubetsu: [[]],
      Dia: [{}],
      DispProp: [[]]
    };
  }

  _createClass(DataSet, [{
    key: "fromOud2",
    value: function fromOud2(lines) {
      var _this = this;

      var starttime = new Date().getTime();
      return new Promise(function (resolve, _) {
        var propertyStack = new Array();
        var property = '';
        var mStation = new Station();
        var mStop = new Track();
        var mTrainType = new TrainType();
        var mDia = new Diagram();
        var mStreak = new Streak();
        var direct = 0;

        for (var i = 0; i < lines.length; i++) {
          if (lines[i] == '.') {
            if (propertyStack.length == 0) {
              break;
            }

            property = propertyStack.pop();
            continue;
          }

          if (lines[i].endsWith('.')) {
            propertyStack.push(property);
            property = lines[i].substring(0, lines[i].length - 1);

            if (property == 'Ressya') {
              mStreak = new Streak();

              switch (direct) {
                case 10:
                  mDia.downStreaks.push(mStreak);
                  break;

                case 20:
                  mDia.upStreaks.push(mStreak);
                  break;

                default:
              }
            }

            if (property == 'EkiTrack2') {
              mStop = new Track();
              mStation.tracks.push(mStop);
            }

            if (property == 'Eki') {
              mStation = new Station();

              _this.stations.push(mStation);
            }

            if (property == 'Ressyasyubetsu') {
              mTrainType = new TrainType();

              _this.trainTypes.push(mTrainType);
            }

            if (property == 'Dia') {
              mDia = new Diagram();

              _this.diagrams.push(mDia);
            }

            if (property == 'Kudari') {
              direct = 10;
            }

            if (property == 'Nobori') {
              direct = 20;
            }

            continue;
          }

          var command = DataSet.command(lines[i]);
          var value = DataSet.value(lines[i]);

          if (property == 'Ressya') {
            mStreak.setValue(command, value);
          }

          if (property == 'EkiTrack2') {
            mStop.setValue(command, value);
          }

          if (property == 'Eki') {
            mStation.setValue(command, value);
          }

          if (property == 'Ressyasyubetsu') {
            mTrainType.setValue(command, value);
          }

          if (property == 'Dia') {
            mDia.setValue(command, value);
          }

          if (property == 'Rosen') {
            _this.setValue(command, value);
          }

          if (property == 'DispProp') {
            _this.setValue(command, value);
          }

          if (property == '') {
            _this.setValue(command, value);
          }
        }

        var endtime = new Date().getTime();
        console.log('loading time=' + (endtime - starttime));
        resolve();
      }).then(function () {})["catch"](function (e) {
        console.log(e);

        if (e.fileName && e.lineNumber) {
          console.log('ファイル:' + e.fileName + ', 行:' + e.lineNumber);
        }
      });
    }
  }, {
    key: "fromOud",
    value: function fromOud(lines) {
      var _this2 = this;

      return new Promise(function (resolve, _) {
        _this2.loadingStartTime = new Date().getTime();
        var currentProp = '';

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var propMatch = line.match(/^(.+)\.$/);
          var propEndMatch = line.match(/^\.$/);

          if (propMatch !== null) {
            currentProp = propMatch[1];

            if (currentProp == 'Dia') {
              var direc = 'root';
              var Dia = {
                start: i,
                end: -1,
                Kudari: [[]],
                Nobori: [[]]
              };
              i += 1;
              var currentPropChild = '';

              for (var j = i; j < lines.length; j++) {
                var _line = lines[j];

                var propMatchChild = _line.match(/^(.+)\.$/);

                var propEndMatchChild = _line.match(/^\.$/);

                if (propMatchChild !== null) {
                  currentPropChild = propMatchChild[1];

                  if (currentPropChild == 'Kudari') {
                    direc = 'Kudari';
                  } else if (currentPropChild == 'Nobori') {
                    direc = 'Nobori';
                  } else if (currentPropChild == 'Ressya') {
                    Dia[direc][Dia[direc].length] = {
                      start: j
                    };
                  }
                } else if (propEndMatchChild !== null) {
                  if (currentPropChild == 'Ressya') {
                    Dia[direc][Dia[direc].length - 1].end = j;
                    currentPropChild = direc;
                  } else if (direc == 'Kudari' || direc == 'Nobori') {
                    Dia[direc][Dia[direc].length - 1].end = j;
                    Dia[direc].shift();
                    direc = 'root';
                  } else if (direc == 'root') {
                    i = j;
                    break;
                  }
                }
              }

              Dia.end = i;

              _this2.fileStruct.Dia.push(Dia);
            } else {
              _this2.fileStruct[currentProp][_this2.fileStruct[currentProp].length] = {
                start: i
              };
            }
          } else if (propEndMatch !== null) {
            if (currentProp == 'Dia') {
              _this2.fileStruct['Rosen'][_this2.fileStruct['Rosen'].length - 1].end = i;
            } else {
              _this2.fileStruct[currentProp][_this2.fileStruct[currentProp].length - 1].end = i;
            }
          }
        }

        _this2.fileStruct.Rosen.shift();

        _this2.fileStruct.Eki.shift();

        _this2.fileStruct.Ressyasyubetsu.shift();

        _this2.fileStruct.Dia.shift();

        _this2.fileStruct.DispProp.shift();

        _this2.stations = new Array(_this2.fileStruct.Eki.length);
        _this2.trainTypes = new Array(_this2.fileStruct.Ressyasyubetsu.length);
        _this2.diagrams = new Array(_this2.fileStruct.Dia.length);
        resolve();
      }).then(function () {
        Promise.all([new Promise(function (resolve, reject) {
          var fileTypeLine = DataSet.split(lines[0]);

          if (fileTypeLine[0] == 'FileType') {
            _this2.fileType = fileTypeLine[1];
          } else {
            reject(1);
            return;
          }

          var fileTypeAppCommentLine = DataSet.split(lines[_this2.fileStruct.DispProp[_this2.fileStruct.DispProp.length - 1].end + 1]);

          if (fileTypeAppCommentLine[0] == 'FileTypeAppComment') {
            _this2.fileTypeAppComment = fileTypeAppCommentLine[1];
          } else {
            reject(2);
            return;
          }

          resolve();
        }), new Promise(function (resolve, _) {
          var promises = [];

          var _loop = function _loop(_i) {
            promises.push(new Promise(function (_resolve, _reject) {
              var i = _i;
              var st = new Station();

              for (var j = _this2.fileStruct.Eki[i].start; j < _this2.fileStruct.Eki[i].end; j++) {
                var lineArr = DataSet.split(lines[j]);

                switch (lineArr[0]) {
                  case 'Ekimei':
                    st.name = lineArr[1];
                    break;

                  case 'Ekijikokukeisiki':
                    st.timeType = Station.timeTypeToInt(lineArr[1]);
                    break;

                  case 'Ekikibo':
                    st.scale = Station.scaleToInt(lineArr[1]);
                    break;

                  case 'Kyoukaisen':
                    st.boundary = true;
                    break;

                  case 'DiagramRessyajouhouHyoujiKudari':
                    st.trainInfoDown = Station.trainInfoToInt(lineArr[1]);
                    break;

                  case 'DiagramRessyajouhouHyoujiNobori':
                    st.trainInfoUp = Station.trainInfoToInt(lineArr[1]);
                    break;
                }
              }

              _this2.stations[i] = st;

              _resolve();
            }));
          };

          for (var _i = 0; _i < _this2.fileStruct.Eki.length; _i++) {
            _loop(_i);
          }

          Promise.all(promises).then(resolve);
        }), new Promise(function (resolve, _) {
          var promises = [];

          var _loop2 = function _loop2(_i) {
            promises.push(new Promise(function (_resolve, _reject) {
              var i = _i;
              var tr = new TrainType();

              for (var j = _this2.fileStruct.Ressyasyubetsu[i].start; j < _this2.fileStruct.Ressyasyubetsu[i].end; j++) {
                var lineArr = DataSet.split(lines[j]);

                switch (lineArr[0]) {
                  case 'Syubetsumei':
                    tr.name = lineArr[1];
                    break;

                  case 'Ryakusyou':
                    tr.shortname = lineArr[1];
                    break;

                  case 'JikokuhyouMojiColor':
                    var trainColor = new Color();
                    trainColor.setFromABGR(lineArr[1]);
                    tr.trainColor = trainColor;
                    break;

                  case 'JikokuhyouMojiIndex':
                    tr.fontIdx = Number.parseInt(lineArr[1]);
                    break;

                  case 'DiagramSenColor':
                    var lineColor = new Color();
                    lineColor.setFromABGR(lineArr[1]);
                    tr.lineColor = lineColor;
                    break;

                  case 'DiagramSenStyle':
                    tr.lineType = TrainType.lineStyleToInt(lineArr[1]);
                    break;

                  case 'DiagramSenIsBold':
                    tr.lineWeight = 2;
                    break;

                  case 'StopMarkDrawType':
                    tr.shoudDrawStopMark = true;
                    break;
                }
              }

              _this2.trainTypes[i] = tr;

              _resolve();
            }));
          };

          for (var _i = 0; _i < _this2.fileStruct.Ressyasyubetsu.length; _i++) {
            _loop2(_i);
          }

          Promise.all(promises).then(resolve);
        }), new Promise(function (resolve, _) {
          var promises = [];

          var _loop3 = function _loop3(_i) {
            promises.push(new Promise(function (_resolve, _reject) {
              var i = _i;
              var dia = new Diagram();
              dia.downStreaks = new Array(_this2.fileStruct.Dia[i].Kudari.length);
              dia.upStreaks = new Array(_this2.fileStruct.Dia[i].Nobori.length);
              var diaPromises = [];

              var _loop4 = function _loop4(_j) {
                diaPromises.push(new Promise(function (__resolve, __reject) {
                  var j = _j;
                  var st = new Streak();

                  for (var k = _this2.fileStruct.Dia[i].Kudari[j].start; k < _this2.fileStruct.Dia[i].Kudari[j].end; k++) {
                    var lineArr = DataSet.split(lines[k]);

                    switch (lineArr[0]) {
                      case 'Syubetsu':
                        st.typeIdx = Number.parseInt(lineArr[1]);
                        break;

                      case 'RessyaBangou':
                        st.operationNum = lineArr[1];
                        break;

                      case 'Ressyamei':
                        st.name = lineArr[1];
                        break;

                      case 'Gousuu':
                        st.no = lineArr[1];
                        break;

                      case 'EkiJikoku':
                        var stHandlingsStrArr = lineArr[1].split(',');
                        var stHandlings = new Array(stHandlingsStrArr.length);

                        for (var n = 0; n < stHandlingsStrArr.length; n++) {
                          var stStr = stHandlingsStrArr[n];
                          var sth = new StHandling();

                          if (stStr !== '') {
                            var homeAndTimes = stStr.split(';');
                            sth.type = Number.parseInt(homeAndTimes[0]);

                            if (homeAndTimes[1] !== undefined) {
                              var arrAndDep = homeAndTimes[1].split('/');

                              if (arrAndDep[1] === undefined) {
                                sth.arrival.isNull = true;
                                sth.departure.isNull = false;
                                sth.departure.setTime(arrAndDep[0]);
                              } else if (arrAndDep[1] === '') {
                                sth.arrival.isNull = false;
                                sth.arrival.setTime(arrAndDep[0]);
                                sth.departure.isNull = true;
                              } else {
                                sth.departure.isNull = false;
                                sth.departure.setTime(arrAndDep[0]);
                                sth.arrival.isNull = false;
                                sth.arrival.setTime(arrAndDep[1]);
                              }
                            }
                          }

                          stHandlings[n] = sth;
                        }

                        st.stHandlings = stHandlings;
                        break;

                      case 'Bikou':
                        st.comment = lineArr[1];
                        break;
                    }
                  }

                  dia.downStreaks[j] = st;

                  __resolve();
                }));
              };

              for (var _j = 0; _j < _this2.fileStruct.Dia[i].Kudari.length; _j++) {
                _loop4(_j);
              }

              var _loop5 = function _loop5(_j) {
                diaPromises.push(new Promise(function (__resolve, __reject) {
                  var j = _j;
                  var st = new Streak();

                  for (var k = _this2.fileStruct.Dia[i].Nobori[j].start; k < _this2.fileStruct.Dia[i].Nobori[j].end; k++) {
                    var lineArr = DataSet.split(lines[k]);

                    switch (lineArr[0]) {
                      case 'Syubetsu':
                        st.typeIdx = Number.parseInt(lineArr[1]);
                        break;

                      case 'RessyaBangou':
                        st.operationNum = lineArr[1];
                        break;

                      case 'Ressyamei':
                        st.name = lineArr[1];
                        break;

                      case 'Gousuu':
                        st.no = lineArr[1];
                        break;

                      case 'EkiJikoku':
                        var stHandlingsStrArr = lineArr[1].split(',');
                        var stHandlings = new Array(stHandlingsStrArr.length);

                        for (var n = 0; n < stHandlingsStrArr.length; n++) {
                          var stStr = stHandlingsStrArr[n];
                          var sth = new StHandling();

                          if (stStr !== '') {
                            var homeAndTimes = stStr.split(';');
                            sth.type = Number.parseInt(homeAndTimes[0]);
                            var arrival = new Time();
                            var departure = new Time();

                            if (homeAndTimes[1] !== undefined) {
                              var arrAndDep = homeAndTimes[1].split('/');

                              if (arrAndDep[1] === undefined) {
                                arrival.isNull = true;
                                departure.setTime(arrAndDep[0]);
                              } else if (arrAndDep[1] === '') {
                                arrival.setTime(arrAndDep[0]);
                                departure.isNull = true;
                              } else {
                                departure.setTime(arrAndDep[0]);
                                arrival.setTime(arrAndDep[1]);
                              }
                            } else {
                              arrival.isNull = true;
                              departure.isNull = true;
                            }

                            sth.arrival = arrival;
                            sth.departure = departure;
                          }

                          stHandlings[n] = sth;
                        }

                        st.stHandlings = stHandlings;
                        break;

                      case 'Bikou':
                        st.comment = lineArr[1];
                        break;
                    }
                  }

                  dia.upStreaks[j] = st;

                  __resolve();
                }));
              };

              for (var _j = 0; _j < _this2.fileStruct.Dia[i].Nobori.length; _j++) {
                _loop5(_j);
              }

              _this2.diagrams[i] = dia;

              _resolve();
            }));
          };

          for (var _i = 0; _i < _this2.fileStruct.Dia.length; _i++) {
            _loop3(_i);
          }

          Promise.all(promises).then(resolve);
        })]).then(function () {
          var endTime = new Date().getTime();
          console.log('loading time:' + (endTime - _this2.loadingStartTime));
        })["catch"](function () {
          return console.log('ERROR');
        });
      });
    }
  }, {
    key: "setValue",
    value: function setValue(command, value) {
      switch (command) {
        case 'FileType':
          this.fileType = value;
          break;

        case 'FileTypeAppComment':
          this.fileTypeAppComment = value;
          break;

        case 'Rosenmei':
          this.name = value;
          break;

        case 'KudariDiaAlias':
          break;

        case 'NoboriDiaAlias':
          break;

        case 'KitenJikoku':
          break;

        case 'DiagramDgrYZahyouKyoriDefault':
          break;

        case 'Comment':
          break;

        case 'JikokuhyouFont':
          break;

        case 'JikokuhyouVFont':
          break;

        case 'DiaEkimeiFont':
          break;

        case 'DiaJikokuFont':
          break;

        case 'DiaRessyaFont':
          break;

        case 'CommentFont':
          break;

        case 'DiaMojiColor':
          break;

        case 'DiaHaikeiColor':
          break;

        case 'DiaRessyaColor':
          break;

        case 'DiaJikuColor':
          break;

        case 'JikokuhyouBackColor':
          break;

        case 'StdOpeTimeLowerColor':
          break;

        case 'StdOpeTimeHigherColor':
          break;

        case 'StdOpeTimeUndefColor':
          break;

        case 'StdOpeTimeIllegalColor':
          break;

        case 'EkimeiLength':
          break;

        case 'JikokuhyouRessyaWidth':
          break;

        case 'AnySecondIncDec1':
          break;

        case 'AnySecondIncDec2':
          break;

        case 'DisplayRessyamei':
          break;

        case 'DisplayOuterTerminalEkimeiOriginSide':
          break;

        case 'DisplayOuterTerminalEkimeiTerminalSide':
          break;

        case 'DiagramDisplayOuterTerminal':
          break;
      }
    }
  }, {
    key: "fileStruct",
    get: function get() {
      return this._fileStruct;
    },
    set: function set(v) {
      this._fileStruct = v;
    }
  }, {
    key: "fileType",
    get: function get() {
      return this._fileType;
    },
    set: function set(v) {
      this._fileType = v;
    }
  }, {
    key: "fileTypeAppComment",
    get: function get() {
      return this._fileTypeAppComment;
    },
    set: function set(v) {
      this._fileTypeAppComment = v;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(v) {
      this._name = v;
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(v) {
      this._color = v;
    }
  }, {
    key: "stations",
    get: function get() {
      return this._stations;
    },
    set: function set(v) {
      this._stations = v;
    }
  }, {
    key: "trainTypes",
    get: function get() {
      return this._trainTypes;
    },
    set: function set(v) {
      this._trainTypes = v;
    }
  }, {
    key: "diagrams",
    get: function get() {
      return this._diagrams;
    },
    set: function set(v) {
      this._diagrams = v;
    }
  }], [{
    key: "command",
    value: function command(str) {
      return str.split(/=/)[0];
    }
  }, {
    key: "value",
    value: function value(str) {
      return str.split(/=/)[1];
    }
  }, {
    key: "split",
    value: function split(str) {
      return [DataSet.command(str), DataSet.value(str)];
    }
  }]);

  return DataSet;
}();

exports.DataSet = DataSet;

var Station =
/*#__PURE__*/
function () {
  function Station() {
    _classCallCheck(this, Station);

    this._name = '';
    this._timeType = 0;
    this._scale = 0;
    this._trainInfoDown = 0;
    this._trainInfoUp = 0;
    this._boundary = false;
    this._additionalOption = 0;
    this._shouldShowLineNumberDown = false;
    this._shouldShowLineNumberUp = false;
    this._shouldShowLines = false;
    this._tracks = new Array();
    this._mainLineDown = 0;
    this._mainLineUp = 0;
  }

  _createClass(Station, [{
    key: "parseTimeType",
    value: function parseTimeType() {
      switch (this.timeType) {
        case 10:
          return 'Jikokukeisiki_Hatsuchaku';

        case 20:
          return 'Jikokukeisiki_KudariChaku';

        case 30:
          return 'Jikokukeisiki_NoboriChaku';

        default:
          return 'Jikokukeisiki_Hatsu';
      }
    }
  }, {
    key: "parseScale",
    value: function parseScale() {
      switch (this.scale) {
        case 10:
          return 'Ekikibo_Syuyou';

        default:
          return 'Ekikibo_Ippan';
      }
    }
  }, {
    key: "setValue",
    value: function setValue(command, value) {
      switch (command) {
        case 'Ekimei':
          this.name = value;
          break;

        case 'Ekijikokukeisiki':
          this.timeType = Station.timeTypeToInt(value);
          break;

        case 'Ekikibo':
          this.scale = Station.scaleToInt(value);
          break;

        case 'DiagramRessyajouhouHyoujiKudari':
          this.trainInfoDown = Station.trainInfoToInt(value);
          break;

        case 'DiagramRessyajouhouHyoujiNobori':
          this.trainInfoUp = Station.trainInfoToInt(value);
          break;

        case 'DownMain':
          this.mainLineDown = parseInt(value);
          break;

        case 'UpMain':
          this.mainLineUp = parseInt(value);
          break;

        case 'LoopOriginEkiIndex':
          break;

        case 'BrunchCoreEkiIndex':
          break;

        case 'JikokuhyouTrackDisplayKudari':
          this.shouldShowLineNumberDown = value == '1';
          break;

        case 'JikokuhyouTrackDisplayNobori':
          this.shouldShowLineNumberUp = value == '1';
          break;

        case 'DiagramTrackDisplay':
          this.shouldShowLines = value == '1';
          break;

        case 'NextEkiDistance':
          break;
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(v) {
      this._name = v;
    }
  }, {
    key: "timeType",
    get: function get() {
      return this._timeType;
    },
    set: function set(v) {
      this._timeType = v;
    }
  }, {
    key: "scale",
    get: function get() {
      return this._scale;
    },
    set: function set(v) {
      this._scale = v;
    }
  }, {
    key: "trainInfoDown",
    get: function get() {
      return this._trainInfoDown;
    },
    set: function set(v) {
      this._trainInfoDown = v;
    }
  }, {
    key: "trainInfoUp",
    get: function get() {
      return this._trainInfoUp;
    },
    set: function set(v) {
      this._trainInfoUp = v;
    }
  }, {
    key: "boundary",
    get: function get() {
      return this._boundary;
    },
    set: function set(v) {
      this._boundary = v;
    }
  }, {
    key: "additionalOption",
    get: function get() {
      return this._additionalOption;
    },
    set: function set(v) {
      this._additionalOption = v;
    }
  }, {
    key: "shouldShowLineNumberDown",
    get: function get() {
      return this._shouldShowLineNumberDown;
    },
    set: function set(v) {
      this._shouldShowLineNumberDown = v;
    }
  }, {
    key: "shouldShowLineNumberUp",
    get: function get() {
      return this._shouldShowLineNumberUp;
    },
    set: function set(v) {
      this._shouldShowLineNumberUp = v;
    }
  }, {
    key: "shouldShowLines",
    get: function get() {
      return this._shouldShowLines;
    },
    set: function set(v) {
      this._shouldShowLines = v;
    }
  }, {
    key: "tracks",
    get: function get() {
      return this._tracks;
    },
    set: function set(v) {
      this._tracks = v;
    }
  }, {
    key: "mainLineDown",
    get: function get() {
      return this._mainLineDown;
    },
    set: function set(v) {
      this._mainLineDown = v;
    }
  }, {
    key: "mainLineUp",
    get: function get() {
      return this._mainLineUp;
    },
    set: function set(v) {
      this._mainLineUp = v;
    }
  }], [{
    key: "timeTypeToInt",
    value: function timeTypeToInt(value) {
      switch (value) {
        case 'Jikokukeisiki_Hatsuchaku':
          return 10;

        case 'Jikokukeisiki_KudariChaku':
          return 20;

        case 'Jikokukeisiki_NoboriChaku':
          return 30;

        default:
          return 0;
      }
    }
  }, {
    key: "scaleToInt",
    value: function scaleToInt(value) {
      switch (value) {
        case 'Ekikibo_Syuyou':
          return 10;

        default:
          return 0;
      }
    }
  }, {
    key: "trainInfoToInt",
    value: function trainInfoToInt(value) {
      switch (value) {
        case 'DiagramRessyajouhouHyouji_Anytime':
          return 20;

        case 'DiagramRessyajouhouHyouji_Not':
          return 0;

        default:
          return 10;
      }
    }
  }]);

  return Station;
}();

exports.Station = Station;

var Track =
/*#__PURE__*/
function () {
  function Track() {
    _classCallCheck(this, Track);
  }

  _createClass(Track, [{
    key: "setValue",
    value: function setValue(command, value) {
      switch (command) {
        case 'TrackName':
          this.name = value;
          break;

        case 'TrackRyakusyou':
          this.shortName = value;
          break;
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(v) {
      this._name = v;
    }
  }, {
    key: "shortName",
    get: function get() {
      return this._shortName;
    },
    set: function set(v) {
      this._shortName = v;
    }
  }]);

  return Track;
}();

exports.Track = Track;

var TrainType =
/*#__PURE__*/
function () {
  _createClass(TrainType, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(v) {
      this._name = v;
    }
  }, {
    key: "shortname",
    get: function get() {
      return this._shortname;
    },
    set: function set(v) {
      this._shortname = v;
    }
  }, {
    key: "trainColor",
    get: function get() {
      return this._trainColor;
    },
    set: function set(v) {
      this._trainColor = v;
    }
  }, {
    key: "fontIdx",
    get: function get() {
      return this._fontIdx;
    },
    set: function set(v) {
      this._fontIdx = v;
    }
  }, {
    key: "lineColor",
    get: function get() {
      return this._lineColor;
    },
    set: function set(v) {
      this._lineColor = v;
    }
  }, {
    key: "lineType",
    get: function get() {
      return this._lineType;
    },
    set: function set(v) {
      this._lineType = v;
    }
  }, {
    key: "lineWeight",
    get: function get() {
      return this._lineWeight;
    },
    set: function set(v) {
      this._lineWeight = v;
    }
  }, {
    key: "shoudDrawStopMark",
    get: function get() {
      return this._shoudDrawStopMark;
    },
    set: function set(v) {
      this._shoudDrawStopMark = v;
    }
  }]);

  function TrainType() {
    _classCallCheck(this, TrainType);

    this._name = '';
    this._shortname = '';
    this._trainColor = new Color();
    this._fontIdx = 0;
    this._lineColor = new Color();
    this._lineType = 0;
    this._lineWeight = 0;
    this._shoudDrawStopMark = false;
  }

  _createClass(TrainType, [{
    key: "setValue",
    value: function setValue(command, value) {
      switch (command) {
        case 'Syubetsumei':
          this.name = value;
          break;

        case 'Ryakusyou':
          this.shortname = value;
          break;

        case 'JikokuhyouMojiColor':
          this.trainColor.setFromABGR(value);
          break;

        case 'JikokuhyouFontIndex':
          this.fontIdx = parseInt(value);
          break;

        case 'JikokuhyouBackColor':
          break;

        case 'DiagramSenColor':
          this.lineColor.setFromABGR(value);
          break;

        case 'DiagramSenStyle':
          this.lineType = TrainType.lineStyleToInt(value);
          break;

        case 'DiagramSenIsBold':
          if (value == '1') {
            this.lineWeight = 2;
          } else {
            this.lineWeight = 0;
          }

          break;

        case 'StopMarkDrawType':
          this.shoudDrawStopMark = value == 'EStopMarkDrawType_DrawOnStop';
          break;

        case 'ParentSyubetsuIndex':
          break;
      }
    }
  }], [{
    key: "lineStyleToInt",
    value: function lineStyleToInt(str) {
      switch (str) {
        case 'SenStyle_Tensen':
          return 10;

        case 'SenStyle_Hasen':
          return 20;

        default:
          return 0;
      }
    }
  }]);

  return TrainType;
}();

exports.TrainType = TrainType;

var Diagram =
/*#__PURE__*/
function () {
  function Diagram() {
    _classCallCheck(this, Diagram);

    this._name = '';
    this._downStreaks = new Array();
    this._upStreaks = new Array();
  }

  _createClass(Diagram, [{
    key: "setValue",
    value: function setValue(command, value) {
      switch (command) {
        case 'DiaName':
          this.name = value;
          break;

        case 'MainBackColorIndex':
          break;

        case 'SubBackColorIndex':
          break;

        case 'BackPatternIndex':
          break;
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(v) {
      this._name = v;
    }
  }, {
    key: "downStreaks",
    get: function get() {
      return this._downStreaks;
    },
    set: function set(v) {
      this._downStreaks = v;
    }
  }, {
    key: "upStreaks",
    get: function get() {
      return this._upStreaks;
    },
    set: function set(v) {
      this._upStreaks = v;
    }
  }]);

  return Diagram;
}();

exports.Diagram = Diagram;

var Streak =
/*#__PURE__*/
function () {
  function Streak() {
    _classCallCheck(this, Streak);

    this._operationNum = '';
    this._typeIdx = 0;
    this._name = '';
    this._destIdx = 0;
    this._stHandlings = new Array();
    this._comment = '';
  }

  _createClass(Streak, [{
    key: "setValue",
    value: function setValue(command, value) {
      switch (command) {
        case 'Syubetsu':
          this.typeIdx = parseInt(value);
          break;

        case 'Ressyabangou':
          this.operationNum = value;
          break;

        case 'Ressyamei':
          this.name = value;
          break;

        case 'Gousuu':
          this.no = value;
          break;

        case 'EkiJikoku':
          var timeList = value.split(',');

          for (var i = 0; i < timeList.length; i++) {
            var mStHanding = new StHandling();
            this.stHandlings.push(mStHanding);

            if (timeList[i].indexOf(';') != -1) {
              mStHanding.type = parseInt(timeList[i].split(';')[0]);
              var mTimeList = timeList[i].split(';')[1].split('/');

              if (mTimeList.length == 2) {
                mStHanding.arrival.setTime(mTimeList[0]);

                if (mTimeList[1].length != 0) {
                  mStHanding.departure.setTime(mTimeList[1]);
                }
              } else {
                mStHanding.departure.setTime(mTimeList[0]);
              }
            } else {
              mStHanding.type = parseInt(timeList[i]);
            }
          }

          break;

        case 'RessyaTrack':
          var trackList = value.split(',');

          for (var _i2 = 0; _i2 < trackList.length; _i2++) {
            if (trackList[_i2].length == 0) {
              continue;
            }

            var _mStHanding = this.stHandlings[_i2];

            var a = trackList[_i2].split(';');

            _mStHanding.track = parseInt(a[0]);

            if (a.length >= 2) {
              var b = a[1].split('/');

              switch (b[0]) {
                case '0':
                  break;

                case '1':
                  _mStHanding.endpointWork.worktype = 10;
                  _mStHanding.endpointWork.track = parseInt(b[1].split('$')[0]);

                  _mStHanding.endpointWork.arrival.setTime(b[1].split('$')[1]);

                  _mStHanding.endpointWork.departure.setTime(b[2]);

                  break;

                case '2':
                  _mStHanding.endpointWork.worktype = 20;
                  _mStHanding.endpointWork.operationNum = b[1];
                  break;

                case '3':
                  _mStHanding.endpointWork.worktype = 30;
                  b[1].split('$')[0];
                  b[1].split('$')[1];
                  _mStHanding.endpointWork.operationNum = b[2];
                  break;
              }
            }
          }

          break;

        case 'Bikou':
          this, command = value;
          break;
      }
    }
  }, {
    key: "operationNum",
    get: function get() {
      return this._operationNum;
    },
    set: function set(v) {
      this._operationNum = v;
    }
  }, {
    key: "typeIdx",
    get: function get() {
      return this._typeIdx;
    },
    set: function set(v) {
      this._typeIdx = v;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(v) {
      this._name = v;
    }
  }, {
    key: "no",
    get: function get() {
      return this._no;
    },
    set: function set(v) {
      this._no = v;
    }
  }, {
    key: "destIdx",
    get: function get() {
      return this._destIdx;
    },
    set: function set(v) {
      this._destIdx = v;
    }
  }, {
    key: "stHandlings",
    get: function get() {
      return this._stHandlings;
    },
    set: function set(v) {
      this._stHandlings = v;
    }
  }, {
    key: "comment",
    get: function get() {
      return this._comment;
    },
    set: function set(v) {
      this._comment = v;
    }
  }]);

  return Streak;
}();

exports.Streak = Streak;

var StHandling =
/*#__PURE__*/
function () {
  function StHandling() {
    _classCallCheck(this, StHandling);

    this._type = 0;
    this._arrival = new Time();
    this._departure = new Time();
    this._track = 0;
    this._endpointWork = exports.EndpointWork;
    this.type = 0;
    this.arrival = new Time();
    this.departure = new Time();
  }

  _createClass(StHandling, [{
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(v) {
      this._type = v;
    }
  }, {
    key: "arrival",
    get: function get() {
      return this._arrival;
    },
    set: function set(v) {
      this._arrival = v;
    }
  }, {
    key: "departure",
    get: function get() {
      return this._departure;
    },
    set: function set(v) {
      this._departure = v;
    }
  }, {
    key: "track",
    get: function get() {
      return this._track;
    },
    set: function set(v) {
      this._track = v;
    }
  }, {
    key: "endpointWork",
    get: function get() {
      return this._endpointWork;
    },
    set: function set(v) {
      this._endpointWork = v;
    }
  }]);

  return StHandling;
}();

exports.StHandling = StHandling;

/***/ })
/******/ ])["default"];
});