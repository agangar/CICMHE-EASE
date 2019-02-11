(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"item app-facets\">\r\n      <app-toggle></app-toggle>\r\n    </div>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query/query.component */ "./src/app/query/query.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _search_history_search_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-history/search-history.component */ "./src/app/search-history/search-history.component.ts");
/* harmony import */ var _facets_facets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facets/facets.component */ "./src/app/facets/facets.component.ts");
/* harmony import */ var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle/toggle.component */ "./src/app/toggle/toggle.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _query_query_component__WEBPACK_IMPORTED_MODULE_3__["QueryComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"],
                _search_history_search_history_component__WEBPACK_IMPORTED_MODULE_5__["SearchHistoryComponent"],
                _facets_facets_component__WEBPACK_IMPORTED_MODULE_6__["FacetsComponent"],
                _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__["ToggleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/facets/facets.component.css":
/*!*********************************************!*\
  !*** ./src/app/facets/facets.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facets/facets.component.html":
/*!**********************************************!*\
  !*** ./src/app/facets/facets.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containers\">\r\n  <mat-selection-list #shoes>\r\n    <mat-list-option *ngFor=\"let types of filters\">\r\n      {{types}}\r\n    </mat-list-option>\r\n  </mat-selection-list>\r\n</div>"

/***/ }),

/***/ "./src/app/facets/facets.component.ts":
/*!********************************************!*\
  !*** ./src/app/facets/facets.component.ts ***!
  \********************************************/
/*! exports provided: FacetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetsComponent", function() { return FacetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacetsComponent = /** @class */ (function () {
    function FacetsComponent() {
    }
    FacetsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetsComponent.prototype, "filters", void 0);
    FacetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facets',
            template: __webpack_require__(/*! ./facets.component.html */ "./src/app/facets/facets.component.html"),
            styles: [__webpack_require__(/*! ./facets.component.css */ "./src/app/facets/facets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacetsComponent);
    return FacetsComponent;
}());



/***/ }),

/***/ "./src/app/query/query.component.css":
/*!*******************************************!*\
  !*** ./src/app/query/query.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    padding: 1%;\r\n    width: 90%;\r\n    border: solid darkgrey 1px;\r\n}\r\n\r\nmat-form-field{\r\n    width: 80%;\r\n    padding: 0.5%;\r\n    margin-left: 2%\r\n}\r\n\r\nbutton{\r\n    background-color: blue;\r\n    margin-left: 3%;\r\n    color : white;\r\n}"

/***/ }),

/***/ "./src/app/query/query.component.html":
/*!********************************************!*\
  !*** ./src/app/query/query.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>Materials Handling Activities Solutions</p>\r\n  <mat-card>\r\n      <mat-form-field>\r\n          <mat-select placeholder=\"Material Handling Application\" [(value)]=\"query\">\r\n            <mat-option *ngFor=\"let types of filters\" [value]=\"types\">\r\n              {{types}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n    <!---<input matInput type=\"text\" placeholder=\"Enter Keywords\" [(ngModel)]=\"queryText\" (keypress)=\"handleEnter($event.keyCode)\">-->\r\n    <button (click)=\"search()\" mat-button><b>Search</b></button>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/query/query.component.ts":
/*!******************************************!*\
  !*** ./src/app/query/query.component.ts ***!
  \******************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueryComponent = /** @class */ (function () {
    function QueryComponent() {
        this.queryEmittor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.query = '';
    }
    QueryComponent.prototype.ngOnInit = function () {
        console.log(this.filters);
    };
    QueryComponent.prototype.search = function () {
        console.log(this.query);
        this.queryEmittor.emit(this.query);
    };
    QueryComponent.prototype.handleEnter = function (keyCode) {
        if (keyCode == 13) {
            this.search();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QueryComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QueryComponent.prototype, "queryEmittor", void 0);
    QueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query',
            template: __webpack_require__(/*! ./query.component.html */ "./src/app/query/query.component.html"),
            styles: [__webpack_require__(/*! ./query.component.css */ "./src/app/query/query.component.css")]
        })
    ], QueryComponent);
    return QueryComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile{\r\n    border: solid darkgrey 3px;\r\n    height:10%;\r\n    width:50%;\r\n}\r\nvideo{\r\n    height:200px;\r\n    width: 200px\r\n}"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<video controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n    <source src=\"../../../dist/Data/Kinetic Technologies/513.mp4\" type=\"video/mp4\" />\r\n    </video>\r\n<div>\r\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n    <mat-grid-tile *ngFor=\"let x of apiResponse\" >\r\n <img src=\"../../../dist/Data/{{x.company}}/{{x.assetID}}.{{x.fileType}}\">\r\n \r\n <br>\r\n        <div>{{x.fileType}}<br>{{ x.description}}<br>{{ x.company}}</div>\r\n \r\n\r\n</mat-grid-tile>\r\n</mat-grid-list>\r\n</div>"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.search = function () {
        console.log(this.apiResponse);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "apiResponse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResultsComponent.prototype, "resultsAvailable", void 0);
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/search-history/search-history.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-history/search-history.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerz{\r\n    max-height: 50%;\r\n    OVERFLOW-Y:scroll;\r\n}"

/***/ }),

/***/ "./src/app/search-history/search-history.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-history/search-history.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<mat-selection-list #shoes>\r\n    <mat-list-option *ngFor=\"let types of productList\">\r\n      {{types}}\r\n    </mat-list-option>\r\n  </mat-selection-list>\r\n</div>  "

/***/ }),

/***/ "./src/app/search-history/search-history.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-history/search-history.component.ts ***!
  \************************************************************/
/*! exports provided: SearchHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHistoryComponent", function() { return SearchHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchHistoryComponent = /** @class */ (function () {
    function SearchHistoryComponent() {
    }
    SearchHistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchHistoryComponent.prototype, "productList", void 0);
    SearchHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-history',
            template: __webpack_require__(/*! ./search-history.component.html */ "./src/app/search-history/search-history.component.html"),
            styles: [__webpack_require__(/*! ./search-history.component.css */ "./src/app/search-history/search-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchHistoryComponent);
    return SearchHistoryComponent;
}());



/***/ }),

/***/ "./src/app/toggle/toggle.component.css":
/*!*********************************************!*\
  !*** ./src/app/toggle/toggle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: #eee;\r\n    margin: 0px;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    padding-top : 5%;\r\n}\r\n\r\n.grid-container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 70% 30%;\r\n        grid-template-columns: 70% 30%;\r\n    grid-row-gap: 5%;\r\n    grid-column-gap: 1%;\r\n    padding-top: 4%;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    \r\n}\r\n\r\n.item{\r\n    border: solid darkgrey 3px;\r\n    height: 500px;\r\n    OVERFLOW-Y:scroll;\r\n}\r\n\r\n.item-1{\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-row-span: 2;\r\n    grid-row-end: 3;\r\n    height: 1000px;\r\n    OVERFLOW-Y:scroll;\r\n}"

/***/ }),

/***/ "./src/app/toggle/toggle.component.html":
/*!**********************************************!*\
  !*** ./src/app/toggle/toggle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-query [filters]=\"filters\"  *ngIf=\"filterAvailable\" (queryEmittor)=\"onInputs($event)\">  </app-query>\r\n\r\n  <div class=\"grid-container\" *ngIf=\"resultsAvailable\" >\r\n    <div class=\"item-1 app-results\">\r\n        <app-results [apiResponse]=\"apiResponse\" [resultsAvailable]=\"resultsAvailable\"></app-results>\r\n    </div>\r\n    \r\n    <div class=\"item app-search-history\" >\r\n      <app-search-history [productList]=\"productList\"  *ngIf=\"productListAvailable\">  </app-search-history>\r\n    </div>\r\n    \r\n    <!-- <div class=\"item app-facets\">\r\n      <app-facets [filters]=\"filters\" ></app-facets>\r\n    </div>\r\n     -->\r\n  </div>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/toggle/toggle.component.ts":
/*!********************************************!*\
  !*** ./src/app/toggle/toggle.component.ts ***!
  \********************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apicalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apicalls.service */ "./src/services/apicalls.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(apiService) {
        this.apiService = apiService;
        this.title = 'app';
        this.searchInProgress = false;
        this.resultsAvailable = false;
        this.errorOccured = false;
        this.apiResponse = '';
        this.filters = '';
        this.productList = '';
        this.filterAvailable = false;
        this.productListAvailable = false;
    }
    ToggleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loadFilters().subscribe(function (response) {
            _this.filters = response;
            _this.filterAvailable = true;
            console.log(_this.filterAvailable);
            console.log(response);
        }, function (err) {
            _this.errorOccured = true;
            console.log("Error : " + JSON.stringify(err));
        });
        this.apiService.productList().subscribe(function (response) {
            _this.productList = response;
            _this.productListAvailable = true;
            console.log(response);
        }, function (err) {
            _this.errorOccured = true;
            console.log("Error : " + JSON.stringify(err));
        });
    };
    ToggleComponent.prototype.onInputs = function (inputQuery) {
        var _this = this;
        this.apiService.search(inputQuery).subscribe(function (response) {
            _this.searchInProgress = false;
            _this.resultsAvailable = true;
            _this.apiResponse = response;
            console.log(response);
        }, function (err) {
            _this.errorOccured = true;
            _this.searchInProgress = false;
            console.log("Error : " + JSON.stringify(err));
        });
    };
    ToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "./src/app/toggle/toggle.component.html"),
            styles: [__webpack_require__(/*! ./toggle.component.css */ "./src/app/toggle/toggle.component.css")]
        }),
        __metadata("design:paramtypes", [_services_apicalls_service__WEBPACK_IMPORTED_MODULE_1__["APICallsService"]])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/apicalls.service.ts":
/*!******************************************!*\
  !*** ./src/services/apicalls.service.ts ***!
  \******************************************/
/*! exports provided: APICallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APICallsService", function() { return APICallsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiURL = "http://localhost:8081/api/";
var APICallsService = /** @class */ (function () {
    function APICallsService(httpClient) {
        this.httpClient = httpClient;
    }
    APICallsService.prototype.search = function (query) {
        var URL = apiURL + "search";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('query', query);
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    APICallsService.prototype.loadFilters = function () {
        var URL = apiURL + "filters";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    APICallsService.prototype.productList = function () {
        var URL = apiURL + "allproducts";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    APICallsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], APICallsService);
    return APICallsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IE\CICMHE-EASE\UI\cicmhe-ease\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map