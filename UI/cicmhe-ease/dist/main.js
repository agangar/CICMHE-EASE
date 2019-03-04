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

module.exports = ".container{\r\n    height:1000px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"item app-facets\">\r\n      <app-toggle></app-toggle>\r\n    </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
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
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]
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

module.exports = ".export{\r\n    height:70px;\r\n}\r\n.Companylist{\r\n    height:325px;\r\n    OVERFLOW-Y:scroll;\r\n}\r\n.results-display{\r\n    background:#1e88e5;\r\n}\r\n.mat-button{\r\n    background: #eee;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/facets/facets.component.html":
/*!**********************************************!*\
  !*** ./src/app/facets/facets.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div id=\"export\">\r\n    <mat-card class=\"results-display\">\r\n      <h6>Company List\r\n        <button mat-button (click)=\"export()\" class=\"mat-button\">Export</button></h6>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"Companylist\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel (opened)=\"panelOpenState\" (closed)=\"panelOpenState\" *ngFor=\"let types of companyList\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{types.company}} <mat-icon *ngIf='(productCompanyList.includes(types.company))'>done</mat-icon>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <p>{{types.description}}</p>\r\n        <div class=\"company-link\"><a href=\"{{ types.link }}\" target=\"_blank\">More Info >></a></div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>"

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
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
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
    FacetsComponent.prototype.export = function () {
        var _this = this;
        var workBook = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new(); // create a new blank book
        var exportList = [];
        this.companyList.forEach(function (element) {
            if (_this.productCompanyList.includes(element.company))
                exportList.push(element);
        });
        var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(exportList);
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](workBook, 'CompanyList.xlsx');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetsComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetsComponent.prototype, "companyList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacetsComponent.prototype, "productCompanyList", void 0);
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

module.exports = "mat-card{\r\n    padding: 1%;\r\n    width: 90%;\r\n    border: solid darkgrey 1px;\r\n}\r\n\r\nmat-form-field{\r\n    width: 95%;\r\n    padding: 0.5%;\r\n    margin-left: 2%\r\n}\r\n\r\nbutton{\r\n    background-color: blue;\r\n    margin-left: 3%;\r\n    color : white;\r\n}"

/***/ }),

/***/ "./src/app/query/query.component.html":
/*!********************************************!*\
  !*** ./src/app/query/query.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>Materials Handling Activities Solutions</p>\r\n  <mat-card>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Material Handling Application\" (ngModelChange)=\"onSelect($event)\" [(ngModel)]=\"query\">\r\n        <mat-option *ngFor=\"let types of filters\" [value]=\"types.taskName\">\r\n          {{types.taskName}} ({{ types.description }})\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <!---<input matInput type=\"text\" placeholder=\"Enter Keywords\" [(ngModel)]=\"queryText\" (keypress)=\"handleEnter($event.keyCode)\">-->\r\n    <!-- <button (click)=\"search()\" mat-button><b>Search</b></button> -->\r\n  </mat-card>\r\n</div>"

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
    QueryComponent.prototype.onSelect = function (event) {
        console.log(event);
        this.queryEmittor.emit([event, 10, 0, 0]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QueryComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QueryComponent.prototype, "searchonProducts", void 0);
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

module.exports = "::ng-deep .mat-grid-tile .mat-figure{\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    height:10%;\r\n    /* width:50%; */\r\n    padding-top: 5%;\r\n    box-sizing: content-box;\r\n    \r\n    display: flow-root;\r\n}\r\n\r\nvideo{\r\n    width:  250px;\r\n    height: 200px;\r\n}\r\n\r\nimg{\r\n    width:  250px;\r\n    height: 200px;\r\n    \r\n    \r\n}\r\n\r\n.media{\r\n    /* border: solid black 2px; */\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.container{\r\n    \r\n    border: solid black 2px;\r\n    max-width: -webkit-min-content;\r\n    max-width: -moz-min-content;\r\n    max-width: min-content;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.paginator{\r\n    padding-left: 30%;\r\n}\r\n\r\n.results{\r\n    background: #eee;\r\n}"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\" >\r\n    <h5>Found {{resultCount}} items for your search</h5>\r\n    <mat-grid-list cols=\"2\">\r\n        <mat-grid-tile class=\"mat-grid-tile\" *ngFor=\"let x of apiResponse\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"media\" title=\"{{x.description}}\"\r\n                        *ngIf=\"x.fileType == 'mp4' || x.fileType == 'mkv' ||  x.fileType =='mov' ||  x.fileType =='flv' || x.fileType =='wmv'\">\r\n                        <video controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                            <source\r\n                                src=\"https://s3.us-east-2.amazonaws.com/cichmedata/dist/assets/Data/{{x.company}}/{{x.assetID}}.mp4\"\r\n                                onError=\"this.src='https://s3.us-east-2.amazonaws.com/cichmedata/dist/assets/NotFound.jpg';\" type=\"video/mp4\" />\r\n                        </video>\r\n                    </div>\r\n                    <div class=\"media\"\r\n                        *ngIf=\"x.fileType != 'mp4' && x.fileType != 'mkv' &&  x.fileType !='mov' &&  x.fileType !='flv' &&  x.fileType !='wmv'\">\r\n                        <img title=\"{{x.description}}\"\r\n                            src=\"https://s3.us-east-2.amazonaws.com/cichmedata/dist/assets/Data/{{x.company}}/{{x.assetID}}.{{x.fileType}}\"\r\n                            onError=\"this.src='https://s3.us-east-2.amazonaws.com/cichmedata/dist/assets/NotFound.jpg';\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row productName\">\r\n                    <h6> {{x.productName}} </h6>\r\n                </div>\r\n                <div class=\"row company\">\r\n                    Manufacturer: {{x.company}}\r\n                </div>\r\n                <div class=\"row description\">\r\n                    {{x.description}}\r\n                </div>\r\n            </div>\r\n\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n    <div class=\"row paginator\">\r\n        <mat-paginator [length]=\"resultCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[5, 10, 25]\"\r\n            (page)=\"handlePaginatorEvent($event)\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>"

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
        this.pageEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSize = 10;
        this.pageIndex = 1;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        if (this.resultsAvailable)
            console.log(this.resultCount);
    };
    ResultsComponent.prototype.handlePaginatorEvent = function (event) {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.pageEmitter.emit([this.searchQuery, this.pageSize, this.pageIndex, 1]);
    };
    ResultsComponent.prototype.search = function () {
        console.log(this.apiResponse);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResultsComponent.prototype, "searchonProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "apiResponse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResultsComponent.prototype, "resultsAvailable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "resultCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ResultsComponent.prototype, "searchQuery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ResultsComponent.prototype, "pageEmitter", void 0);
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

module.exports = ".containerz{\r\n    max-height: 50%;\r\n    OVERFLOW-Y:scroll;\r\n}\r\n\r\nh4{\r\n\r\n    color: white;\r\n}\r\n\r\n.results-display{\r\n    background:#1e88e5;\r\n}\r\n\r\n.mat-button{\r\n    background: #eee;\r\n    \r\n}\r\n\r\n.Not-Selected{\r\n    -webkit-filter: opacity(0.5);\r\n            filter: opacity(0.5);\r\n}\r\n\r\n.Lists{\r\n    height:430px;\r\n    OVERFLOW-Y:scroll;\r\n}\r\n\r\n.searchdetails{\r\n    height: 70px;\r\n}"

/***/ }),

/***/ "./src/app/search-history/search-history.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-history/search-history.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div id=\"searchdetails\">\r\n    <mat-card class=\"results-display\">\r\n      <h6>Current Search   \r\n      <button mat-button (click)=\"clear()\" class=\"mat-button\">Unselect All</button></h6>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"Lists\">\r\n  <mat-selection-list [(ngModel)]=\"resultProducts\" (ngModelChange)=\"onProductListChange($event)\">\r\n    <mat-list-option *ngFor=\"let types of productList\" [value]=\"types\" [ngClass]=\"(!(resultProducts.includes(types))) ? 'Not-Selected': 'Selected'\">\r\n      {{types}}\r\n    </mat-list-option>\r\n  </mat-selection-list>\r\n</div>\r\n</div>\r\n<!-- disabled=\"{{!(resultProducts.includes(types))}}\" -->"

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
        this.productsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchHistoryComponent.prototype.ngOnInit = function () {
    };
    SearchHistoryComponent.prototype.clear = function () {
        this.resultProducts = [];
    };
    SearchHistoryComponent.prototype.onProductListChange = function (event) {
        console.log(event.length);
        this.productsEmitter.emit(this.resultProducts);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchHistoryComponent.prototype, "productList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchHistoryComponent.prototype, "resultProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchHistoryComponent.prototype, "productsEmitter", void 0);
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

module.exports = ".container{\r\n    background-color: #eee;\r\n    margin: 0px;\r\n    max-width: 100%;\r\n    padding-top : 5%;\r\n}\r\n\r\nimg{\r\n    width:100%;\r\n}\r\n\r\n.grid-container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    background: #eee;\r\n    -ms-grid-columns: 70% 30%;\r\n        grid-template-columns: 70% 30%;\r\n    -ms-grid-rows: 100px 500px 400px max-content;\r\n        grid-template-rows: 100px 500px 400px -webkit-max-content;\r\n        grid-template-rows: 100px 500px 400px max-content;\r\n    grid-row-gap: 2%;\r\n    grid-column-gap: 1%;\r\n    padding-top: 4%;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    \r\n}\r\n\r\n.ease-Logo{\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column-end: 3;\r\n    max-height: 100px;\r\n}\r\n\r\n.itemz{\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column-end: 3;\r\n    border: solid darkgrey 3px;\r\n    \r\n}\r\n\r\n.item-1{\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    -ms-grid-column-span: 1;\r\n    grid-column-end: 2;\r\n}\r\n\r\n.item-2{\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column-end: 3;\r\n    border: solid darkgrey 3px;\r\n    height: 400px;\r\n    \r\n\r\n}\r\n\r\n.Blank{\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column-end: 3;\r\n    height: -webkit-fill-available;\r\n}"

/***/ }),

/***/ "./src/app/toggle/toggle.component.html":
/*!**********************************************!*\
  !*** ./src/app/toggle/toggle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div>\r\n    <img src=\"https://s3.us-east-2.amazonaws.com/cichmedata/dist/assets/MHIbar.PNG\">\r\n  </div>\r\n  <app-query [filters]=\"filters\" *ngIf=\"filterAvailable\" [searchonProducts]=\"searchonProducts\"\r\n    (queryEmittor)=\"onInputs($event)\"> </app-query>\r\n  <div id=\"progressBar\" *ngIf=\"searchInProgress\">\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n\r\n  <div id=\"progressBar\" *ngIf=\"!searchInProgress\">\r\n    <!-- Need to display a blank box of height = 4px here -->\r\n  </div>\r\n  <div class=\"grid-container\">\r\n    <div class=\"item-1 app-results\" *ngIf=\"resultsAvailable\">\r\n      <app-results [apiResponse]=\"apiResponse\" [searchQuery]=\"searchQuery\" [resultCount]=\"resultCount\"\r\n        [resultsAvailable]=\"resultsAvailable\" [searchonProducts]=\"searchonProducts\" (pageEmitter)=\"onInputs($event)\">\r\n      </app-results>\r\n    </div>\r\n    <div class=\"ease-Logo\">\r\n      <img src=\"https://s3.us-east-2.amazonaws.com/cichmedata/dist/assets/easeLogo2.PNG\">\r\n    </div>\r\n    <div class=\"itemz app-search-history\" *ngIf=\"resultsAvailable\">\r\n      <app-search-history [productList]=\"productList\" [resultProducts]=\"resultProducts\" *ngIf=\"productListAvailable\"\r\n        (productsEmitter)=\"onProducts($event)\"> </app-search-history>\r\n    </div>\r\n\r\n    <!-- <div class=\"item app-facets\">\r\n      <app-facets [filters]=\"filters\" ></app-facets>\r\n    </div>\r\n     -->\r\n    <div class=\"item-2 app-facets\" *ngIf=\"!searchInProgress && resultsAvailable\">\r\n      <app-facets [companyList]=\"companyList\" [productCompanyList]=\"productCompanyList\" *ngIf=\"companyListAvailable\">\r\n      </app-facets>\r\n    </div>\r\n    <div class=\"Blank\">\r\n\r\n    </div>\r\n  </div>\r\n  <div style=\"clear:both\"></div>\r\n</div>"

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
        this.searchonProducts = false;
        this.searchInProgress = false;
        this.resultsAvailable = false;
        this.errorOccured = false;
        this.apiResponse = '';
        this.resultProducts = '';
        this.filters = '';
        this.productCompanyList = '';
        this.productList = '';
        this.companyList = '';
        this.filterAvailable = false;
        this.productListAvailable = false;
        this.companyListAvailable = false;
        this.productSearchResultsAvailable = true;
    }
    ToggleComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Drop down population
        this.apiService.loadFilters().subscribe(function (response) {
            _this.filters = response;
            _this.filterAvailable = true;
        }, function (err) {
            _this.errorOccured = true;
            console.log("Error : " + JSON.stringify(err));
        });
        //List of products
        this.apiService.productList().subscribe(function (response) {
            _this.productList = response;
            _this.productListAvailable = true;
            console.log(response);
        }, function (err) {
            _this.errorOccured = true;
            console.log("Error : " + JSON.stringify(err));
        });
        //List of Company
        this.apiService.companyList().subscribe(function (response) {
            _this.companyList = response;
            _this.companyListAvailable = true;
        }, function (err) {
            _this.errorOccured = true;
            console.log("Error : " + JSON.stringify(err));
        });
    };
    //Drop down search
    ToggleComponent.prototype.onInputs = function (inputQuery) {
        var _this = this;
        this.searchInProgress = true;
        if (inputQuery[3] == 0) {
            this.searchonProducts = false;
        }
        if (this.searchonProducts) {
            this.productPaginator(inputQuery);
        }
        this.searchQuery = inputQuery[0];
        //count
        if (inputQuery[0] == "All Products") {
            this.apiService.allProductsCount().subscribe(function (response) {
                _this.resultCount = response;
            }, function (err) {
                _this.errorOccured = true;
                _this.resultsAvailable = false;
                console.log("Error : " + JSON.stringify(err));
            });
            //results
            this.apiService.loadAllProducts(inputQuery[1], inputQuery[2]).subscribe(function (response) {
                _this.apiResponse = response;
                _this.resultsAvailable = true;
                _this.resultProducts = _this.productList;
                _this.prodCompanyList();
            }, function (err) {
                _this.errorOccured = true;
                _this.searchInProgress = false;
                _this.resultsAvailable = false;
                console.log("Error : " + JSON.stringify(err));
            });
        }
        else {
            this.productListAvailable = false;
            //count
            this.apiService.dropDownResultCount(inputQuery[0]).subscribe(function (response) {
                _this.resultCount = response;
            }, function (err) {
                _this.errorOccured = true;
                _this.resultsAvailable = false;
                console.log("Error : " + JSON.stringify(err));
            });
            //results
            this.apiService.search(inputQuery[0], inputQuery[1], inputQuery[2]).subscribe(function (response) {
                _this.apiResponse = response;
            }, function (err) {
                _this.errorOccured = true;
                _this.searchInProgress = false;
                _this.resultsAvailable = false;
                console.log("Error : " + JSON.stringify(err));
            });
            //checkbox products in results
            this.apiService.resultProducts(inputQuery[0]).subscribe(function (response) {
                _this.productListAvailable = true;
                _this.resultProducts = response;
                _this.resultsAvailable = true;
                _this.prodCompanyList();
            }, function (err) {
                console.log("Error : " + JSON.stringify(err));
            });
        }
    };
    //Search on product filter
    ToggleComponent.prototype.onProducts = function (selectedProducts) {
        var _this = this;
        this.searchInProgress = true;
        this.searchonProducts = true;
        this.productSearchResultsAvailable = false;
        this.resultProducts = selectedProducts;
        this.apiService.searchProduct(selectedProducts, selectedProducts.length, 10, 0).subscribe(function (response) {
            _this.apiResponse = response;
        }, function (err) {
            _this.errorOccured = true;
            _this.searchInProgress = false;
            _this.resultsAvailable = false;
            console.log("Error : " + JSON.stringify(err));
        });
        this.apiService.productSearchCount(selectedProducts, selectedProducts.length).subscribe(function (response) {
            _this.resultCount = response;
            _this.productSearchResultsAvailable = true;
            _this.searchInProgress = false;
        }, function (err) {
            _this.errorOccured = true;
            _this.searchInProgress = false;
            _this.resultsAvailable = false;
            console.log("Error : " + JSON.stringify(err));
        });
        this.apiService.productCompanyList(this.resultProducts, this.resultProducts.length).subscribe(function (response) {
            _this.productCompanyList = response;
        }, function (err) {
            _this.errorOccured = true;
            _this.searchInProgress = false;
            _this.resultsAvailable = false;
            console.log("Error : " + JSON.stringify(err));
        });
    };
    ToggleComponent.prototype.productPaginator = function (input) {
        var _this = this;
        this.productSearchResultsAvailable = false;
        this.apiService.searchProduct(this.resultProducts, this.resultProducts.length, input[1], input[2]).subscribe(function (response) {
            _this.productSearchResultsAvailable = true;
            _this.searchInProgress = false;
            _this.apiResponse = response;
        }, function (err) {
            _this.errorOccured = true;
            _this.searchInProgress = false;
            _this.resultsAvailable = false;
            console.log("Error : " + JSON.stringify(err));
        });
    };
    ToggleComponent.prototype.prodCompanyList = function () {
        var _this = this;
        this.apiService.productCompanyList(this.productList, this.productList.length).subscribe(function (response) {
            _this.searchInProgress = false;
            _this.productCompanyList = response;
        }, function (err) {
            _this.errorOccured = true;
            _this.searchInProgress = false;
            _this.resultsAvailable = false;
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
    // Drop-down Search
    APICallsService.prototype.search = function (query, pageSize, pageIndex) {
        var URL = apiURL + "search";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('query', query).set('pageSize', pageSize.toString()).set('pageIndex', pageIndex.toString());
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    //Drop-down Populate
    APICallsService.prototype.loadFilters = function () {
        var URL = apiURL + "filters";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    // List of all products
    APICallsService.prototype.productList = function () {
        var URL = apiURL + "allproducts";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    // List of all company
    APICallsService.prototype.companyList = function () {
        var URL = apiURL + "companyList";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    // List of products in results
    APICallsService.prototype.resultProducts = function (query) {
        var URL = apiURL + "resultProducts";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('query', query);
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    // Serch from product List
    APICallsService.prototype.searchProduct = function (query, length, pageSize, pageIndex) {
        var URL = apiURL + "productSearch";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('length', length.toString()).set('pageSize', pageSize.toString()).set('pageIndex', pageIndex.toString());
        var count = 0;
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var x = query_1[_i];
            params = params.set((count++).toString(), x);
        }
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    //Show results for all Products
    APICallsService.prototype.loadAllProducts = function (pageSize, pageIndex) {
        var URL = apiURL + "allProductSearch";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('pageSize', pageSize.toString()).set('pageIndex', pageIndex.toString());
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    //All products count
    APICallsService.prototype.allProductsCount = function () {
        var URL = apiURL + "allProductsCount";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    //drop Down Result Count
    APICallsService.prototype.dropDownResultCount = function (query) {
        var URL = apiURL + "dropDownResultCount";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('query', query);
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    //Product search Result Count
    APICallsService.prototype.productSearchCount = function (query, length) {
        var URL = apiURL + "productCount";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('length', length.toString());
        var count = 0;
        for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
            var x = query_2[_i];
            params = params.set((count++).toString(), x);
        }
        return this.httpClient.get(URL, { headers: headers, params: params });
    };
    //Product search Result Count
    APICallsService.prototype.productCompanyList = function (query, length) {
        var URL = apiURL + "productCompanyList";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('length', length.toString());
        var count = 0;
        for (var _i = 0, query_3 = query; _i < query_3.length; _i++) {
            var x = query_3[_i];
            params = params.set((count++).toString(), x);
        }
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


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map