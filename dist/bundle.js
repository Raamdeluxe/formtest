/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

eval("// create a form element\nconst form = document.createElement(\"form\");\n\n// create a input element for name\nconst nameInput = document.createElement(\"input\");\nnameInput.setAttribute(\"type\", \"text\");\nnameInput.setAttribute(\"name\", \"name\");\nnameInput.setAttribute(\"placeholder\", \"Enter your name\");\n\n// create a input element for email\nconst emailInput = document.createElement(\"input\");\nemailInput.setAttribute(\"type\", \"email\");\nemailInput.setAttribute(\"name\", \"email\");\nemailInput.setAttribute(\"placeholder\", \"Enter your email\");\n\n// create a submit button\nconst submitBtn = document.createElement(\"button\");\nsubmitBtn.setAttribute(\"type\", \"submit\");\nsubmitBtn.innerText = \"Submit\";\n\n// append all the elements to the form\nform.appendChild(nameInput);\nform.appendChild(emailInput);\nform.appendChild(submitBtn);\n\n// append the form to the body\ndocument.body.appendChild(form);\n\n\n//# sourceURL=webpack://formtest/./src/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/form.js"]();
/******/ 	
/******/ })()
;