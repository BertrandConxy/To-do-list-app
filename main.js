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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ \"./src/js/local-storage.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ \"./src/js/remove.js\");\n/* eslint-disable max-classes-per-file */\r\n\r\n\r\n\r\n\r\n\r\nconst list = document.getElementById('toDo-list');\r\nlet current = 1\r\n\r\nclass CheckComplete {\r\n  static check() {\r\n    const checkbox = document.querySelectorAll('.check');\r\n    checkbox.forEach((checks) => {\r\n      if (checks.checked === true) {\r\n        checks.parentElement.children[1].classList.add('line-through');\r\n      }\r\n    });\r\n  }\r\n}\r\nclass CreateListItem {\r\n  static create(action) {\r\n    const item = document.createElement('li');\r\n    item.innerHTML = `<input type=\"checkbox\" name=\"check\" class=\"check\"\r\n         ${action.completed ? 'checked' : ' '}>\r\n        <p> ${action.description}</p> \r\n        <i class=\"fas fa-ellipsis-v icon\"></i>\r\n        `;\r\n    list.appendChild(item);\r\n    current++\r\n  }\r\n}\r\n\r\nclass DisplayActivities {\r\n  static display() {\r\n    const activities = _local_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActFromStore();\r\n    activities.sort((a, b) => a.index - b.index);\r\nactivities.forEach((action) => {\r\n      CreateListItem.create(action);\r\n    });\r\n  }\r\n}\r\n\r\n// Dispay activity list on home page\r\ndocument.addEventListener('DOMContentLoaded', DisplayActivities.display());\r\nCheckComplete.check();\r\n// Saving the activity when the user click add button\r\ndocument.querySelector('#input-activity').addEventListener('keyup', (e) => {\r\n  e.preventDefault();\r\nif (e.keyCode == 13 ) {\r\n  const index = current\r\n  const descrip = document.getElementById('input-activity').value;\r\n  const complete = false\r\n\r\n  //   create activity object\r\n  const activity = new _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.StoreActivity(index, descrip, complete);\r\n  // add it to local storage\r\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addActToStore(activity);\r\n  // append the Activity to the book list\r\n  CreateListItem.create(activity);\r\n  //  Reseting the input\r\n  const input = document.querySelector('#input-activity');\r\n  input.value = ' '\r\n  \r\n}\r\n});\r\n\r\nconst listItems = document.querySelectorAll('li')\r\nlistItems.forEach(listItem=> {\r\n  listItem.addEventListener('click', (e)=> {\r\n    const icon = e.target.children[2]\r\n    icon.innerHTML = `<i class=\"fas fa-trash-alt\"></i>`\r\n  })\r\n})\r\n\r\nconst moreIcon = document.querySelectorAll('.icon')\r\nmoreIcon.forEach(more=> {\r\n  more.addEventListener('click', (e)=> {\r\n    more.innerHTML = `<i class=\"fas fa-trash-alt\"></i>`\r\n    more.addEventListener('click', (e)=> {\r\n      _remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeAct(e)\r\n    })\r\n  })\r\n})\r\n\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/local-storage.js":
/*!*********************************!*\
  !*** ./src/js/local-storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageClass),\n/* harmony export */   \"StoreActivity\": () => (/* binding */ StoreActivity)\n/* harmony export */ });\nclass LocalStorageClass {\r\n    static getActFromStore() {\r\n      let activities;\r\n      if (localStorage.getItem('activities') === null) {\r\n         activities = [];\r\n      } else {\r\n        activities = JSON.parse(localStorage.getItem('activities'));\r\n      }\r\n      return activities;\r\n    }\r\n  \r\n    static addActToStore(activity) {\r\n      const activities = LocalStorageClass.getActFromStore();\r\n      activities.push(activity);\r\n      localStorage.setItem('activities', JSON.stringify(activities));\r\n    }\r\n  \r\n    static removeFromTheStore(title) {\r\n      const activities = LocalStorageClass.getActFromStore();\r\n      const filteredArray = books.filter((action) => book.title !== title);\r\n      localStorage.setItem('books', JSON.stringify(filteredArray));\r\n    }\r\n  }\r\n\r\n \r\nclass StoreActivity {\r\n    constructor(index, description,complete) {\r\n        this.index = index,\r\n        this.description = description,\r\n        this.complete = complete\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/local-storage.js?");

/***/ }),

/***/ "./src/js/remove.js":
/*!**************************!*\
  !*** ./src/js/remove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveActivities)\n/* harmony export */ });\nclass RemoveActivities {\r\n    static removeAct(target) {\r\n      console.log(target.parentElement)\r\n    \r\n\r\n          \r\n    }\r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/remove.js?");

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