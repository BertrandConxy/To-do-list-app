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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveActivities)\n/* harmony export */ });\nclass RemoveActivities {\n  static removeAct(target) {\n    target.parentNode.parentNode.removeChild(target.parentNode);\n  }\n\n  static resetList() {\n    localStorage.clear();\n  }\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/UI-remove-task.js?");

/***/ }),

/***/ "./src/js/add-remove-localstorage.js":
/*!*******************************************!*\
  !*** ./src/js/add-remove-localstorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageClass),\n/* harmony export */   \"StoreActivity\": () => (/* binding */ StoreActivity)\n/* harmony export */ });\n/* eslint-disable max-classes-per-file */\nclass LocalStorageClass {\n  static getActFromStore() {\n    let activities;\n    if (localStorage.getItem('activities') === null) {\n      activities = [];\n    } else {\n      activities = JSON.parse(localStorage.getItem('activities'));\n    }\n    return activities;\n  }\n\n  static addActToStore(activity) {\n    const activities = LocalStorageClass.getActFromStore();\n    activities.push(activity);\n    localStorage.setItem('activities', JSON.stringify(activities));\n  }\n\n  static removeFromTheStore(description) {\n    const activities = LocalStorageClass.getActFromStore();\n    const filteredArray = activities.filter((action) => action.description !== description);\n\n    filteredArray.forEach((act, indices) => {\n      act.index = indices + 1;\n    });\n    localStorage.setItem('activities', JSON.stringify(filteredArray));\n  }\n}\n\nclass StoreActivity {\n  constructor(index, description, complete) {\n    this.index = index;\n    this.description = description;\n    this.complete = complete;\n  }\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/add-remove-localstorage.js?");

/***/ }),

/***/ "./src/js/check-complete.js":
/*!**********************************!*\
  !*** ./src/js/check-complete.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckComplete)\n/* harmony export */ });\n/* harmony import */ var _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-remove-localstorage.js */ \"./src/js/add-remove-localstorage.js\");\n\r\n\r\nclass CheckComplete {\r\n  static lineThrough() {\r\n    const checkbox = document.querySelectorAll('.check');\r\n    checkbox.forEach((checks, indice) => {\r\n      const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n      activities.forEach((act) => {\r\n        if (act.index === indice + 1) {\r\n          if (act.complete === true) {\r\n            checks.parentElement.children[1].classList.add('line-through');\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  static updateComplete() {\r\n    const checkboxes = document.querySelectorAll('.check');\r\n    checkboxes.forEach((check, indice) => {\r\n      check.addEventListener('change', () => {\r\n        const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n        activities.forEach((act) => {\r\n          if (act.index === indice + 1) {\r\n            if (act.complete === false) {\r\n              act.complete = true;\r\n              check.checked = true;\r\n            } else {\r\n              act.complete = false;\r\n              check.checked = false;\r\n            }\r\n            window.location.reload()\r\n            localStorage.setItem('activities', JSON.stringify(activities));\r\n          }\r\n        });\r\n      });\r\n    });\r\n  }\r\n\r\n  static clearCompleted() {\r\n    const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n    const filteredActivities = activities.filter(\r\n      (act) => act.complete === false\r\n    );\r\n    filteredActivities.forEach((acts, indices) => {\r\n      acts.index = indices + 1;\r\n    });\r\n    localStorage.setItem('activities', JSON.stringify(filteredActivities));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/check-complete.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-remove-localstorage.js */ \"./src/js/add-remove-localstorage.js\");\n/* harmony import */ var _UI_remove_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI-remove-task.js */ \"./src/js/UI-remove-task.js\");\n/* harmony import */ var _check_complete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-complete.js */ \"./src/js/check-complete.js\");\n/* harmony import */ var _update_descript_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-descript.js */ \"./src/js/update-descript.js\");\n/* eslint-disable max-classes-per-file */\n\n\n\n\n\n\nlet counter = 1;\nclass CreateListItem {\n  static create(action) {\n    const list = document.getElementById('toDo-list');\n    const item = document.createElement('li');\n    item.innerHTML = `<input type=\"checkbox\" name=\"check\" class=\"check\"\n           ${action.complete ? 'checked' : ' '}>\n          <p contenteditable=\"true\" class=\"par\">${action.description}</p> \n          <i class=\"fas fa-trash-alt icon\"></i>\n          `;\n    list.appendChild(item);\n    counter += 1;\n  }\n}\nclass DisplayActivities {\n  static display() {\n    const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActFromStore();\n    activities.sort((a, b) => a.index - b.index);\n    activities.forEach((action) => {\n      CreateListItem.create(action);\n    });\n  }\n}\n\n// Dispay activity list on home page\ndocument.addEventListener('DOMContentLoaded', DisplayActivities.display());\n\n// Saving the activity when the user click enter\ndocument.querySelector('#input-activity').addEventListener('keyup', (e) => {\n  if (e.keyCode === 13) {\n    const index = counter;\n\n    const descrip = document.getElementById('input-activity').value;\n    const complete = false;\n\n    //   create activity object\n    const activity = new _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.StoreActivity(index, descrip, complete);\n    // add it to local storage\n    _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addActToStore(activity);\n\n    // append the Activity to the book list\n    CreateListItem.create(activity);\n\n    // refresh the page\n    window.location.reload();\n\n    //  Reseting the input\n    const input = document.querySelector('#input-activity');\n    input.value = ' ';\n  }\n});\n\n// Removing activity from the list\nconst trashIcon = document.querySelectorAll('.icon');\ntrashIcon.forEach((more) => {\n  more.addEventListener('click', (e) => {\n    _UI_remove_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeAct(e.target);\n    _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeFromTheStore(e.target.parentElement.children[1].innerHTML);\n    counter -= 1;\n  });\n});\n\n// editing and Updating the the task description when the user clicks on it\n\nconst paragraphs = document.querySelectorAll('.par');\n(0,_update_descript_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(paragraphs);\n\n//  Checking activity for completed\n_check_complete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateComplete();\n_check_complete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].lineThrough();\n\n// clear all completed\nconst button = document.getElementById('erase');\nbutton.addEventListener('click', () => {\n  _check_complete_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearCompleted();\n  window.location.reload();\n});\n\n// Reset the list\nconst resetBtn = document.querySelector('.recycle');\nresetBtn.addEventListener('click', () => {\n  _UI_remove_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetList();\n  window.location.reload();\n});\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/update-descript.js":
/*!***********************************!*\
  !*** ./src/js/update-descript.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updatePara)\n/* harmony export */ });\n/* harmony import */ var _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-remove-localstorage.js */ \"./src/js/add-remove-localstorage.js\");\n\r\nfunction updatePara (paragraphs){\r\nparagraphs.forEach((paragraph, indice) => {\r\n    paragraph.addEventListener('click', (e) => {\r\n      const activities = _add_remove_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActFromStore();\r\n      activities.forEach((act) => {\r\n        if (act.index === indice + 1) {\r\n          act.description = e.target.innerHTML;\r\n          localStorage.setItem('activities', JSON.stringify(activities));\r\n        }\r\n      });\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/update-descript.js?");

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