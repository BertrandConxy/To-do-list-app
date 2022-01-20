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

/***/ "./src/js/UI-remove-task.js":
/*!**********************************!*\
  !*** ./src/js/UI-remove-task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveActivities)\n/* harmony export */ });\nclass RemoveActivities {\r\n  static removeAct(target) {\r\n    target.parentNode.parentNode.removeChild(target.parentNode);\r\n  }\r\n\r\n  static resetList () {\r\n      localStorage.clear()\r\n  }\r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/UI-remove-task.js?");

/***/ }),

/***/ "./src/js/add-remove-localstorage.js":
/*!*******************************************!*\
  !*** ./src/js/add-remove-localstorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageClass),\n/* harmony export */   \"StoreActivity\": () => (/* binding */ StoreActivity)\n/* harmony export */ });\n/* eslint-disable max-classes-per-file */\r\n\r\nclass LocalStorageClass {\r\n  static getActFromStore() {\r\n    let activities;\r\n    if (localStorage.getItem('activities') === null) {\r\n      activities = [];\r\n    } else {\r\n      activities = JSON.parse(localStorage.getItem('activities'));\r\n    }\r\n    return activities;\r\n  }\r\n\r\n  static addActToStore(activity) {\r\n    const activities = LocalStorageClass.getActFromStore();\r\n    activities.push(activity);\r\n    localStorage.setItem('activities', JSON.stringify(activities));\r\n  }\r\n\r\n  static removeFromTheStore(description) {\r\n    const activities = LocalStorageClass.getActFromStore();\r\n    const filteredArray = activities.filter((action) => action.description !== description);\r\n\r\n    filteredArray.forEach((act, indices) => {\r\n      act.index = indices + 1;\r\n    });\r\n    localStorage.setItem('activities', JSON.stringify(filteredArray));\r\n  }\r\n}\r\n\r\nclass StoreActivity {\r\n  constructor(index, description, complete) {\r\n    this.index = index;\r\n    this.description = description;\r\n    this.complete = complete;\r\n  }\r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/add-remove-localstorage.js?");

/***/ }),

/***/ "./src/js/check-complete.js":
/*!**********************************!*\
  !*** ./src/js/check-complete.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckComplete)\n/* harmony export */ });\n/* harmony import */ var _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-remove-localstorage.js */ \"./src/js/add-remove-localstorage.js\");\n\r\n\r\nclass CheckComplete {\r\n  static lineThrough () {\r\n    const checkbox = document.querySelectorAll('.check');\r\n    checkbox.forEach((checks, indice) => {\r\n      const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n      activities.forEach((act)=>{\r\n        if(act.index === indice+1) {\r\n          if(act.complete === true) {\r\n            checks.parentElement.children[1].classList.add('line-through')\r\n          }\r\n        }\r\n    });\r\n  })\r\n}  \r\n  static updateComplete () {\r\n    const checkboxes = document.querySelectorAll('.check');\r\n    checkboxes.forEach((check, indice)=>{\r\n      check.addEventListener('change', (e)=>{\r\n        const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n        activities.forEach((act)=>{\r\n          if(act.index === indice+1) {\r\n            if(act.complete === false) {\r\n              act.complete = true;\r\n              check.checked = true\r\n            } else{\r\n              act.complete = false;\r\n              check.checked = false\r\n            } \r\n            window.location.reload()\r\n            localStorage.setItem('activities', JSON.stringify(activities));\r\n          }\r\n        })\r\n      })\r\n    })\r\n  }\r\n\r\n  static clearCompleted() {\r\n      const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n      const filteredActivities = activities.filter((act) => act.complete === false);\r\n      filteredActivities.forEach((acts,indices)=>{\r\n        acts.index = indices+1;\r\n      })\r\n      localStorage.setItem('activities', JSON.stringify(filteredActivities));\r\n      \r\n  }\r\n  \r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/check-complete.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-remove-localstorage.js */ \"./src/js/add-remove-localstorage.js\");\n/* harmony import */ var _UI_remove_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI-remove-task.js */ \"./src/js/UI-remove-task.js\");\n/* harmony import */ var _check_complete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-complete.js */ \"./src/js/check-complete.js\");\n/* eslint-disable max-classes-per-file */\r\n\r\n\r\n\r\n\r\n\r\nconst list = document.getElementById('toDo-list');\r\nlet counter = 1;\r\n\r\nclass CreateListItem {\r\n  static create(action) {\r\n    const item = document.createElement('li');\r\n    item.innerHTML = `<input type=\"checkbox\" name=\"check\" class=\"check\"\r\n         ${action.complete ? 'checked' : ' '}>\r\n        <p contenteditable=\"true\" class=\"par\">${action.description}</p> \r\n        <i class=\"fas fa-trash-alt icon\"></i>\r\n        `;\r\n    list.appendChild(item);\r\n    counter += 1;\r\n  }\r\n}\r\n\r\nclass DisplayActivities {\r\n  static display() {\r\n    const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActFromStore();\r\n    activities.sort((a, b) => a.index - b.index);\r\n    activities.forEach((action) => {\r\n      CreateListItem.create(action);\r\n    });\r\n  }\r\n}\r\n\r\n// Dispay activity list on home page\r\ndocument.addEventListener('DOMContentLoaded', DisplayActivities.display());\r\n\r\n// Saving the activity when the user click enter\r\ndocument.querySelector('#input-activity').addEventListener('keyup', (e) => {\r\n  if (e.keyCode === 13) {\r\n    const index = counter;\r\n    const descrip = document.getElementById('input-activity').value;\r\n    const complete = false;\r\n\r\n    //   create activity object\r\n    const activity = new _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.StoreActivity(index, descrip, complete);\r\n    // add it to local storage\r\n    _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addActToStore(activity);\r\n\r\n    // append the Activity to the book list\r\n    CreateListItem.create(activity);\r\n    // refresh the page\r\n    window.location.reload();\r\n\r\n    //  Reseting the input\r\n    const input = document.querySelector('#input-activity');\r\n    input.value = ' ';\r\n  }\r\n});\r\n\r\n// Removing activity from the list\r\nconst trashIcon = document.querySelectorAll('.icon');\r\ntrashIcon.forEach((more) => {\r\n  more.addEventListener('click', (e) => {\r\n    _UI_remove_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeAct(e.target);\r\n    _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeFromTheStore(e.target.parentElement.children[1].innerHTML);\r\n    counter -= 1;\r\n  });\r\n});\r\n\r\n// editing and Updating the the task description when the user clicks on it\r\n\r\nconst paragraphs = document.querySelectorAll('.par');\r\nparagraphs.forEach((paragraph, indice) => {\r\n  paragraph.addEventListener('keyup', (e) => {\r\n    const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActFromStore();\r\n    activities.forEach((act) => {\r\n      if (act.index === indice + 1) {\r\n        act.description = e.target.innerHTML;\r\n        localStorage.setItem('activities', JSON.stringify(activities));\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n//  Checking activity for completed\r\n_check_complete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateComplete();\r\n_check_complete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].lineThrough()\r\n\r\n// clear all completed\r\nconst button = document.getElementById('erase')\r\nbutton.addEventListener('click', ()=>{\r\n  _check_complete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearCompleted()\r\n  window.location.reload()\r\n})\r\n\r\n// Reset the list\r\nconst resetBtn = document.querySelector('.recycle')\r\nresetBtn.addEventListener('click', ()=>{\r\n  _UI_remove_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetList();\r\n  window.location.reload();\r\n})\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/index.js?");

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