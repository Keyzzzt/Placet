/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");


window.onload = function () {

    let info = document.querySelector('.footer__information');
    let infoTitle = document.querySelector('.info__title');
    let infoList = document.querySelector('.footer__information ul');
    let infoArrow = document.querySelector('.footer__information div');

    let individuals = document.querySelector('.footer__individuals');
    let individualsTitle = document.querySelector('.ind__title');
    let individualsList = document.querySelector('.footer__individuals ul');
    let individualsArrow = document.querySelector('.footer__individuals div');

    let business = document.querySelector('.footer__business');
    let businessTitle = document.querySelector('.bus__title');
    let businessList = document.querySelector('.footer__business ul');
    let busArrow = document.querySelector('.footer__business div');

    let company = document.querySelector('.footer__company');
    let companyTitle = document.querySelector('.com__title');
    let companyList = document.querySelector('.footer__company ul');
    let comArrow = document.querySelector('.footer__company div');

    let burgerFees = document.querySelector('.burger__fees-title');
    let feesList = document.querySelector('.burger__fees-list');

    let burgerYoxPay = document.querySelector('.burger__yoxpay-title');
    let YoxPayList = document.querySelector('.burger__yoxpay-list');

    let langBurger = document.querySelector('.burger-lang')
    let langBurgerList = document.querySelector('.lang__list-burger')

    let langBottom = document.querySelector('.lang-wrapper div')
    let langBottomList = document.querySelector('.lang__list')
    let langArrow = document.querySelector('.triangle-down-dark')

    let openBurger = document.querySelector('.header__burger')
    let closeBurger = document.querySelector('.header__close')
    let burgerMenu = document.querySelector('.ham')

    closeBurger.addEventListener('click', () => {
        burgerMenu.classList.remove('display-block')
    })

    openBurger.addEventListener('click', () => {
        burgerMenu.classList.add('display-block')
    })

    langBurger.addEventListener('click', () => {
        langBurgerList.classList.toggle('display-block')
        // if (langArrow.classList == 'triangle-down-dark') {
        //     langArrow.classList.add('triangle-up-dark')
        //     langArrow.classList.remove('triangle-down-dark')
        // } else {
        //     langArrow.classList.remove('triangle-up-dark')
        //     langArrow.classList.add('triangle-down-dark')
        // }
    })

    burgerYoxPay.addEventListener('click', () => {
        YoxPayList.classList.toggle('display-block')
        // if (langArrow.classList == 'triangle-down-dark') {
        //     langArrow.classList.add('triangle-up-dark')
        //     langArrow.classList.remove('triangle-down-dark')
        // } else {
        //     langArrow.classList.remove('triangle-up-dark')
        //     langArrow.classList.add('triangle-down-dark')
        // }
    })

    burgerFees.addEventListener('click', () => {
        feesList.classList.toggle('display-block')
        // if (langArrow.classList == 'triangle-down-dark') {
        //     langArrow.classList.add('triangle-up-dark')
        //     langArrow.classList.remove('triangle-down-dark')
        // } else {
        //     langArrow.classList.remove('triangle-up-dark')
        //     langArrow.classList.add('triangle-down-dark')
        // }
    })

    langBottom.addEventListener('click', () => {
        langBottomList.classList.toggle('display-block')
        if (langArrow.classList == 'triangle-down-dark') {
            langArrow.classList.add('triangle-up-dark')
            langArrow.classList.remove('triangle-down-dark')
        } else {
            langArrow.classList.remove('triangle-up-dark')
            langArrow.classList.add('triangle-down-dark')
        }
    })


    individuals.addEventListener('click', () => {
        individualsList.classList.toggle('display-block');
        individualsTitle.classList.toggle('active-footermenu-color');
        if (individualsArrow.classList == 'triangle-down-gray') {
            individualsArrow.classList.add('triangle-up-dark')
            individualsArrow.classList.remove('triangle-down-gray')
        } else {
            individualsArrow.classList.remove('triangle-up-dark')
            individualsArrow.classList.add('triangle-down-gray')
        }
    });
    info.addEventListener('click', (e) => {
        infoList.classList.toggle('display-block');
        infoTitle.classList.toggle('active-footermenu-color');
        if (infoArrow.classList == 'triangle-down-gray') {
            infoArrow.classList.add('triangle-up-dark')
            infoArrow.classList.remove('triangle-down-gray')
        } else {
            infoArrow.classList.remove('triangle-up-dark')
            infoArrow.classList.add('triangle-down-gray')
        }


    });
    business.addEventListener('click', (e) => {
        businessList.classList.toggle('display-block');
        businessTitle.classList.toggle('active-footermenu-color');
        if (busArrow.classList == 'triangle-down-gray') {
            busArrow.classList.add('triangle-up-dark')
            busArrow.classList.remove('triangle-down-gray')
        } else {
            busArrow.classList.remove('triangle-up-dark')
            busArrow.classList.add('triangle-down-gray')
        }
    });
    company.addEventListener('click', (e) => {
        companyList.classList.toggle('display-block');
        companyTitle.classList.toggle('active-footermenu-color');
        if (comArrow.classList == 'triangle-down-gray') {
            comArrow.classList.add('triangle-up-dark')
            comArrow.classList.remove('triangle-down-gray')
        } else {
            comArrow.classList.remove('triangle-up-dark')
            comArrow.classList.add('triangle-down-gray')
        }
    });



}
}();
/******/ })()
;
//# sourceMappingURL=main.js.map