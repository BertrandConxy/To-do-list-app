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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* eslint-disable max-classes-per-file */\r\n\r\n\r\nconst list = document.getElementById('toDo-list');\r\nconst stores = [\r\n  {\r\n    index: 3,\r\n    description: 'Celebrate for the day',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 2,\r\n    description: 'Complete today project',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 1,\r\n    description: 'Wake up early',\r\n    completed: false,\r\n  },\r\n\r\n];\r\n\r\nclass CheckComplete {\r\n  static check() {\r\n    const checkbox = document.querySelectorAll('.check');\r\n    checkbox.forEach((checks) => {\r\n      if (checks.checked === true) {\r\n        checks.parentElement.children[1].classList.add('line-through');\r\n      }\r\n    });\r\n  }\r\n}\r\nclass CreateListItem {\r\n  static create(action) {\r\n    const item = document.createElement('li');\r\n    item.innerHTML += `<input type=\"checkbox\" name=\"check\" class=\"check\"\r\n         ${action.completed ? 'checked' : ' '}>\r\n        <p> ${action.description}</p> \r\n        <i class=\"fas fa-ellipsis-v icon\"></i>\r\n        `;\r\n    list.appendChild(item);\r\n  }\r\n}\r\n\r\nclass DisplayActivities {\r\n  static display() {\r\n    const activities = LocalStorageClass.getbooksFromStore();\r\n    activities.sort((a, b) => a.index - b.index);\r\nactivities.forEach((action) => {\r\n      CreateListItem.create(action);\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\r\n// Dispay activity list on home page\r\ndocument.addEventListener('DOMContentLoaded', DisplayActivities.display());\r\nCheckComplete.check();\r\n// Saving the activity when the user click add button\r\ndocument.querySelector('#form').addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n\r\n  const title = document.getElementById('title');\r\n  const author = document.getElementById('author');\r\n\r\n  //   create book object\r\n  const book = new CreateBook(title, author);\r\n  // add it to local storage\r\n  LocalStorageClass.addbookToStore(book);\r\n  // append the book to the book list\r\n  CreateBookElements.createBookElement(book);\r\n  //  Reseting the form inputs\r\n  const form = document.querySelector('#form');\r\n  form.reset();\r\n});\r\n\r\n//  removing the book when the user clicks remove button\r\n\r\n// Remove book from UI\r\ndocument.querySelector('.book-list').addEventListener('click', (e) => {\r\n  DisplayBookList.removeBook(e.target);\r\n\r\n  // remove book from the store\r\n  const child = e.target.parentElement.children[0].firstElementChild.innerHTML;\r\n  LocalStorageClass.removeFromTheStore(child);\r\n});\n\n//# sourceURL=webpack://Project-setup-webpack/./src/js/index.js?");

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