/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Project-setup-webpack/./src/css/style.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"n\": () => (/* binding */ n)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ \"./src/js/local-storage.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ \"./src/js/remove.js\");\n/* eslint-disable max-classes-per-file */\r\n\r\n\r\n\r\n\r\n\r\nconst list = document.getElementById('toDo-list');\r\nlet n = 1\r\n\r\nclass CheckComplete {\r\n  static check() {\r\n    const checkbox = document.querySelectorAll('.check');\r\n    checkbox.forEach((checks) => {\r\n      if (checks.checked === true) {\r\n        checks.parentElement.children[1].classList.add('line-through');\r\n      }\r\n    });\r\n  }\r\n}\r\nclass CreateListItem {\r\n  static create(action) {\r\n    const item = document.createElement('li');\r\n    item.innerHTML = `<input type=\"checkbox\" name=\"check\" class=\"check\"\r\n         ${action.completed ? 'checked' : ' '}>\r\n        <p contenteditable=\"true\" class=\"par\">${action.description}</p> \r\n        <i class=\"fas fa-ellipsis-v icon\"></i>\r\n        `;\r\n    list.appendChild(item)\r\n    n++\r\n  }\r\n}\r\n\r\nclass DisplayActivities {\r\n  static display() {\r\n    const activities = _local_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActFromStore();\r\n    activities.sort((a, b) => a.index - b.index);\r\n    activities.forEach((action) => {\r\n      CreateListItem.create(action);\r\n    });\r\n  }\r\n}\r\n\r\n// Dispay activity list on home page\r\ndocument.addEventListener('DOMContentLoaded', DisplayActivities.display());\r\nCheckComplete.check();\r\n// Saving the activity when the user click enter\r\ndocument.querySelector('#input-activity').addEventListener('keyup', (e) => {\r\nif (e.keyCode == 13 ) {\r\n  const index = n\r\n  const descrip = document.getElementById('input-activity').value;\r\n  const complete = false\r\n\r\n  //   create activity object\r\n  const activity = new _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.StoreActivity(index, descrip, complete);\r\n  // add it to local storage\r\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addActToStore(activity);\r\n  \r\n  // append the Activity to the book list\r\n  CreateListItem.create(activity);\r\n  // refresh the page\r\n  location.reload()\r\n  \r\n  //  Reseting the input\r\n  const input = document.querySelector('#input-activity');\r\n  input.value = ' '\r\n}\r\n});\r\n\r\n// Removing activity\r\nconst moreIcon = document.querySelectorAll('.icon')\r\nmoreIcon.forEach((more) => {\r\n  more.addEventListener('click', (e)=> {\r\n    _remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeAct(e.target)\r\n    _remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeFromTheStore(e.target.parentElement.children[1].innerHTML)\r\n    n--;\r\n  })\r\n})\r\n\r\nclass Update {\r\n  static updateList (target) {\r\n    const activities = _local_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActFromStore();\r\n    const currentTask = activities.find((act)=>act.description === target)\r\n    currentTask.description = target;\r\n    console.log(currentTask)\r\n    activities.push(currentTask)\r\n    localStorage.setItem('activities', JSON.stringify(activities))\r\n  }\r\n}\r\n\r\n// Updating the descritption when the user clicks on it\r\n\r\nconst paragraphs =document.querySelectorAll('.par')\r\nparagraphs.forEach((paragraph)=>{\r\n  paragraph.addEventListener('click', (e)=>{\r\n    \r\n  \r\n  })\r\n})\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/local-storage.js":
/*!*********************************!*\
  !*** ./src/js/local-storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageClass),\n/* harmony export */   \"StoreActivity\": () => (/* binding */ StoreActivity)\n/* harmony export */ });\nclass LocalStorageClass {\r\n    static getActFromStore() {\r\n      let activities;\r\n      if (localStorage.getItem('activities') === null) {\r\n         activities = [];\r\n      } else {\r\n        activities = JSON.parse(localStorage.getItem('activities'));\r\n      }\r\n      return activities;\r\n    }\r\n  \r\n    static addActToStore(activity) {\r\n      const activities = LocalStorageClass.getActFromStore();\r\n      activities.push(activity);\r\n      localStorage.setItem('activities', JSON.stringify(activities));\r\n    }\r\n\r\n\r\n  }\r\n\r\nclass StoreActivity {\r\n    constructor(index, description,complete) {\r\n        this.index = index,\r\n        this.description = description,\r\n        this.complete = complete\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/local-storage.js?");

/***/ }),

/***/ "./src/js/remove.js":
/*!**************************!*\
  !*** ./src/js/remove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveActivities)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ \"./src/js/local-storage.js\");\n\r\n\r\nclass RemoveActivities {\r\n    static removeAct(target) {\r\n      target.parentNode.parentNode.removeChild(target.parentNode)   \r\n    }\r\n\r\n    static removeFromTheStore(description) {\r\n      const activities = _local_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n      const filteredArray = activities.filter((action) => action.description !== description);\r\n      \r\n      filteredArray.forEach((act,indices)=>{\r\n        act.index = indices+1;\r\n      })\r\n      localStorage.setItem('activities', JSON.stringify(filteredArray));\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/remove.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;