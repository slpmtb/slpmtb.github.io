(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-faq-faq-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/faq/faq/faq.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/faq/faq/faq.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h1 class=\"main-heading\">Frequently Asked Questions</h1>\r\n\r\n    <div [ngClass]=\"routeAnimationsElements\" class=\"sub-section\">\r\n    <h3>Is this an official high school sport part of St. Louis Park High School?</h3>\r\n    <ul>\r\n      <li>Yes - the MN High School Cycling League sponsors a race season that is part of interscholastic sports in the\r\n        state of Minnesota. Most high school cycling programs are clubs and not official high school teams.\r\n      </li>\r\n      <li>No - the SLP MTB Team is a club and not officially connected to SLP High School as defined by the Minnesota\r\n        High School Cycling League (the state governing and guiding body for high school cyclist).\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n    <div [ngClass]=\"routeAnimationsElements\" class=\"sub-section\">\r\n    <h3>Is there a governing body or organization that oversees the club?</h3>\r\n    <ul>\r\n      <li>Yes - the SLP MTB Team is an official member of the state organization: MN High School Cycling League and part\r\n        the national organization: National Interscholastic Cycling Association or NICA.\r\n      </li>\r\n      <li>All practices, events, and races will be in compliance with rules and guidelines set by the MN High School\r\n        Cycling League and the National Interscholastic Cycling Association.\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n    <div [ngClass]=\"routeAnimationsElements\" class=\"sub-section\">\r\n    <h3>Is mountain biking safe?</h3>\r\n    <ul>\r\n      <li>Mountain biking, like all sports, has inherent risks and is an activity where accidents happen. Safety is a\r\n        core value of every SLP MTB event.\r\n      </li>\r\n      <li>Before joining the SLP MTB Team parents and students complete assumption of risk and liability release forms\r\n        and register as NICA members\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n    <div [ngClass]=\"routeAnimationsElements\" class=\"sub-section\">\r\n    <h3>What do practices and races look like?</h3>\r\n    <ul>\r\n      <li>Practices are fun! We always start with a bikes safety check, warm up ride, isolated skill instruction, ride\r\n        to practice the learned skill, free ride and end with a team huddle.\r\n      </li>\r\n      <li>Races are fun! Riders do not have to race. Riders can do all 5 races or 1 - it’s up to the rider. Middle\r\n        school races are on Saturday and high school races are on Sunday. Races are around the Twin Cities and the\r\n        entire state with most races less than 90 minutes away. On race day there is a window of time where riders do a\r\n        slow pre-ride of the 4 mile race course and the race is later in morning or afternoon. Middle school students\r\n        race 1 4 mile lap, freshman 2 laps, and varsity riders complete 4 laps.\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n    <div [ngClass]=\"routeAnimationsElements\" class=\"sub-section\">\r\n    <h3>How much does it cost?</h3>\r\n    <ul>\r\n      <li>Required Equipment</li>\r\n      <ul>\r\n        <li>The main cost is a bike. A safe functioning mountain bike for race type purposes starts around $450 - make\r\n          sure the student is fitted properly by a local bike professional\r\n        </li>\r\n        <li>Gloves are $15 to $35</li>\r\n        <li>Helmets start at about $60</li>\r\n        <li>Water bottles, standard repair kit, mini pump, spare tubes, bike tools, etc. are about $60</li>\r\n        <li>Riders need to have their own mountain bike and are required to wear helmets and closed-toe shoes when\r\n          riding. Gloves and sunglasses are strongly recommended. Riders must carry their own spare tube, mini-pump,\r\n          water and a jacket at all practices. Each rider is responsible for maintaining his/her own mountain\r\n          bike. We require every rider to establish a relationship with a local bike shop for bike tune ups, equipment\r\n          maintenance and questions. Many local shops offer discounts to team members for equipment and repairs.\r\n        </li>\r\n      </ul>\r\n      <li>Fees</li>\r\n      <ul>\r\n        <li>Team Registration: $100</li>\r\n        <li>League Fees</li>\r\n        <li>Annual Individual $100 to join MN League - provides required insurance</li>\r\n        <li>Required Uniform: $40-$75</li>\r\n        <ul>\r\n          <li>Race Fees</li>\r\n          <ul>\r\n            <li>Two Options</li>\r\n            <ul>\r\n              <li>$60 per individual race registration</li>\r\n              <li>$150 One Time for all / any races</li>\r\n            </ul>\r\n            <li>Races are:</li>\r\n            <ul>\r\n              <li>Middle School Riders on Saturday</li>\r\n              <li>High School Riders on Sunday</li>\r\n            </ul>\r\n            <li>Understanding the Fees:</li>\r\n            <ul>\r\n              <li>NICA / MN Cycling League is the governing body and provide the rider insurance for races and teams,\r\n                renting out and staffing the race venues, medical care etc… there are over 2,000 riders in the league\r\n                with about 1,700 riders at each race\r\n              </li>\r\n\r\n              <li>SLP MTB fees are used to reimburse rider leaders for background checks & NICA coach fees, NICA Team\r\n                fees, emergency bike bags and equipment to use a team\r\n              </li>\r\n            </ul>\r\n          </ul>\r\n        </ul>\r\n      </ul>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/faq/faq-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/faq/faq-routing.module.ts ***!
  \****************************************************/
/*! exports provided: FaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqRoutingModule", function() { return FaqRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/features/faq/faq/faq.component.ts");




const routes = [
    {
        path: '',
        component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"],
        data: { title: 'Faq' }
    }
];
let FaqRoutingModule = class FaqRoutingModule {
};
FaqRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FaqRoutingModule);



/***/ }),

/***/ "./src/app/features/faq/faq.module.ts":
/*!********************************************!*\
  !*** ./src/app/features/faq/faq.module.ts ***!
  \********************************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/features/faq/faq/faq.component.ts");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/features/faq/faq-routing.module.ts");






let FaqModule = class FaqModule {
};
FaqModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqRoutingModule"]]
    })
], FaqModule);



/***/ }),

/***/ "./src/app/features/faq/faq/faq.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/features/faq/faq/faq.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entry {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.faq-filter-info {\n  float: right;\n  font-weight: normal;\n}\n\n.faq-filter {\n  float: right;\n  position: relative;\n  left: 10px;\n  top: -5px;\n  margin-left: -10px;\n}\n\n.todo {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.todo .todo-done {\n  margin: 0 20px 0 0;\n}\n\n.todo .todo-label {\n  position: relative;\n  top: 2px;\n  cursor: pointer;\n}\n\n.todo .todo-label.todo-label-done {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmFxL2ZhcS9DOlxcVXNlcnNcXERhdmVcXHByb2plY3RzXFxzbHBtdGItd2lwL3NyY1xcYXBwXFxmZWF0dXJlc1xcZmFxXFxmYXFcXGZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvZmFxL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNBSjs7QURFSTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZmFxL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW50cnkge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZhcS1maWx0ZXItaW5mbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5mYXEtZmlsdGVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLnRvZG8tZG9uZSB7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgfVxyXG5cclxuICAudG9kby1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLnRvZG8tbGFiZWwtZG9uZSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5lbnRyeSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5mYXEtZmlsdGVyLWluZm8ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5mYXEtZmlsdGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogLTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udG9kbyAudG9kby1kb25lIHtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xufVxuLnRvZG8gLnRvZG8tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9kbyAudG9kby1sYWJlbC50b2RvLWxhYmVsLWRvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/faq/faq/faq.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/faq/faq/faq.component.ts ***!
  \***************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");



let FaqComponent = class FaqComponent {
    constructor() {
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
    }
    ngOnInit() {
    }
};
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'slpmtb-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/faq/faq/faq.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/features/faq/faq/faq.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqComponent);



/***/ })

}]);
//# sourceMappingURL=features-faq-faq-module-es2015.js.map