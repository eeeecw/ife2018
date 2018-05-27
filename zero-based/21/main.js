/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 任务一\r\nvar task1 = document.getElementById(\"task1\");\r\nvar t1_bt = task1.getElementsByTagName(\"button\");\r\nvar t1_input = document.getElementsByClassName(\"input\");\r\nvar t1_radio = document.getElementsByName(\"math-obj\");\r\nvar t1_p = document.getElementById(\"result\");\r\n\r\n// function t1_getInput(){\r\n//     t1_i1 = document.getElementById(\"radio-a\").value;\r\n//     t1_i2 = document.getElementById(\"radio-b\").value;\r\n// }\r\nfunction checkRadio(radios){\r\n    for(var i=0;i<radios.length;i++)  \r\n    {   \r\n        if(radios[i].checked)  \r\n        {  \r\n            return i; \r\n        }   \r\n    }   \r\n}\r\n\r\n//是否是数字\r\nt1_bt[0].onclick = function(){\r\n    var i = checkRadio(t1_radio);\r\n    if(!isNaN(i)){\r\n        if(!isNaN(t1_input[i].value)){\r\n            t1_p.innerText = \"是数字\";\r\n        }else{\r\n            t1_p.innerText = \"不是数字\";\r\n        }\r\n    }\r\n};\r\n\r\n//A四舍五入B位\r\nt1_bt[1].onclick = function(){\r\n    var i1 = parseFloat(t1_input[0].value);\r\n    var i2 = parseInt(t1_input[1].value);\r\n    t1_p.innerText = i1.toFixed(i2);\r\n};\r\n\r\n//绝对值\r\nt1_bt[2].onclick = function(){\r\n    var i = checkRadio(t1_radio); \r\n    t1_p.innerText = Math.abs(parseFloat(t1_input[i].value))\r\n}\r\n\r\n//向上舍入\r\nt1_bt[3].onclick = function(){\r\n    var i = checkRadio(t1_radio); \r\n    t1_p.innerText = Math.ceil(parseFloat(t1_input[i].value));\r\n}\r\n\r\n//向下舍入\r\nt1_bt[4].onclick = function(){\r\n    var i = checkRadio(t1_radio); \r\n    t1_p.innerText = Math.floor(parseFloat(t1_input[i].value));\r\n}\r\n\r\n//四舍五入\r\nt1_bt[5].onclick = function(){\r\n    var i = checkRadio(t1_radio); \r\n    t1_p.innerText = Math.round(parseFloat(t1_input[i].value));\r\n}\r\n\r\n//返回大值\r\nt1_bt[6].onclick = function(){\r\n    var i1 = parseFloat(t1_input[0].value);\r\n    var i2 = parseFloat(t1_input[1].value);\r\n    t1_p.innerText = i1 > i2 ? i1 : i2;\r\n}\r\n\r\n//返回小值\r\nt1_bt[7].onclick = function(){\r\n    var i1 = parseFloat(t1_input[0].value);\r\n    var i2 = parseFloat(t1_input[1].value);\r\n    t1_p.innerText = i1 > i2 ? i2 : i1;\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });