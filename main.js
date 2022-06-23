/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderNav)
/* harmony export */ });


function renderNav() {
    let content = document.getElementById("content");
   
    // Top Nav Bar
     let header = document.createElement("div");
     header.id = "header";
     content.appendChild(header);
 
     let nav = document.createElement("ul");
     nav.id = "links";
     header.appendChild(nav);
 
     let li = document.createElement("li");
     li.textContent = "Home";
     nav.appendChild(li);
 
     li = document.createElement("li");
     li.textContent = "Menu";
     nav.appendChild(li);
 
     li = document.createElement("li");
     li.textContent = "Contact";
     nav.appendChild(li);
}
   

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });


function renderHome() {
    let content = document.getElementById("content");

    // Main Content
    let main = document.createElement("div");
    main.id = "main";
    content.appendChild(main);

    let name = document.createElement("div");
    name.id = "restaurant-name";
    name.textContent = "Everything Coffee";
    main.appendChild(name);

    let description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "It all starts with a cup of coffee. But how far can you take it?";
    main.appendChild(description);
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });


function renderMenu() {
    let content = document.getElementById("content");

    let menu = document.createElement("div");
    menu.id = "menu";
    content.appendChild(menu);

    let subTitle = document.createElement("div");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Menu";
    menu.appendChild(subTitle);

    let dishes = document.createElement("div");
    dishes.id = "dishes";
    menu.appendChild(dishes);

    let dish = document.createElement("div");
    dish.classList.add("dish");
    let subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffee Fried Rice";
    let description = document.createElement("div");
    description.innerHTML = "Stir fry with eggs, vegetables, seatfood, and your choice of meat.\
    Most importantly the rice is washed, boiled, and seasoned with Columbian Coffee<br>";
    description.innerHTML += "Small: 10.95 Large: 15.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Aged Coffee Nuggets";
    description = document.createElement("div");
    description.innerHTML = "While our nuggets were the cheapest frozen nuggets we could find from Walmart.\
    These nuggets marinate for 3 days in Starbuck's finest Nitro Cold Brew<br>";
    description.innerHTML += "10-piece: 6.95 20-piece: 12.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffger, The Coffee Burger";
    description = document.createElement("div");
    description.innerHTML = "What makes this burger different from your typical burger comes down\
    to the patty. Our Tanzania Peaberry coffee beans get grinded to a fine texture and with the help\
    of some local honey, forms the succulent, mouthwateringly delicious star of this dish <br>";
    description.innerHTML += "Price-per-burger: 20";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffee Soup";
    description = document.createElement("div");
    description.innerHTML = "Isn't this just coffee? Wrong. Coffee soup is the result of a harmonious \
    fusion of 30 different types of coffee beans, and seasoned with our secret in house seasoning<br>";
    description.innerHTML += "small: 5.95 large (serves one univesity student): 20.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);

    dish = document.createElement("div");
    dish.classList.add("dish");
    subSubTitle = document.createElement("div");
    subSubTitle.classList.add("sub-sub-title");
    subSubTitle.textContent = "Coffee";
    description = document.createElement("div");
    description.innerHTML = "The start to a productive day. Our classic coffee is not made\
    with an espresso machine, French Press, or Drip Over. We make our in house coffee with a handful of love, an old bowl,\
    and Nescafe Instant Coffee. To help you appreciate the simplicity of coffee.<br>";
    description.innerHTML += "small: 0.95 medium: 1.95 large: 2.95";
    dish.appendChild(subSubTitle);
    dish.appendChild(description);
    dishes.appendChild(dish);
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });


function renderContact(){
    let content = document.getElementById("content");

    let contactContent = document.createElement("div");
    contactContent.id = "contact-content";
    content.appendChild(contactContent);

    let contactInfo = document.createElement("div");
    contactContent.appendChild(contactInfo);

    let subTitle = document.createElement("div");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Contact Us";
    contactInfo.appendChild(subTitle);

    let contactDetail = document.createElement("div");
    contactDetail.classList.add("detail");
    contactDetail.innerHTML = "Phone: 123-COF-FEEE<br><br>";
    contactDetail.innerHTML += "Email: coffeefood@coffeeeverything.com<br><br>";
    contactDetail.innerHTML += "Address: 123 Coffee Paradise Avenue, Coffeeland";
    contactInfo.appendChild(contactDetail);

    let hoursInfo = document.createElement("div");
    contactContent.appendChild(hoursInfo);

    subTitle = document.createElement("div");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Hours of Operation";
    hoursInfo.appendChild(subTitle);

    let hoursDetail = document.createElement("div");
    hoursDetail.classList.add("detail");
    hoursDetail.innerHTML = "Whenever you need your extra kick of caffeine, we got your back. 24/7";
    hoursInfo.appendChild(hoursDetail);
}

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





(0,_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

function clearPage(){
    let content = document.getElementById("content");

    content.removeChild(content.lastChild);
} 

// renderHome();
// renderContact();
let links = document.querySelectorAll('#links > li')
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        clearPage();
        let nextPage = e.target.textContent;
        if (nextPage == "Home") {
            (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if (nextPage == "Menu") {
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
        } else {
            (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }

    })
})
})();

/******/ })()
;