(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\">\r\n    <p><a class=\"portfolio-link\" href=\"http://www.im-anh.com/\" target=\"_blank\">Anh Vo.</a> 2020</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-photo/add-photo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-photo/add-photo.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-section\">\r\n    <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Upload a photo</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form>         \r\n                <div class=\"form-group\">\r\n                    <label>Title</label>\r\n                    <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"title\"/>\r\n                </div>       \r\n                <div class=\"file-field d-flex\">\r\n                    <div class=\"btn btn-neutral\">\r\n                      <span>Choose file</span>\r\n                      <input type=\"file\" class=\"custom-file-input\" (change)=\"fileUploadChange($event)\" id=\"path\">                      \r\n                    </div>\r\n                    <div class=\"form-control ml-2 w-50\" *ngIf=\"path\">{{path.name}}</div>\r\n                    <div class=\"form-control ml-2 w-50\" *ngIf=\"!path\">Upload photo...</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Caption</label>\r\n                    <input type=\"text\" name=\"caption\" class=\"form-control\" [(ngModel)]=\"caption\"/>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer d-flex justify-content-between\">\r\n            <button type=\"button\" class=\"btn btn-positive\" (click)=\"onSubmit()\">Upload</button>\r\n            <button type=\"button\" class=\"btn btn-neutral\" (click)=\"modal.close('Cancel')\">Cancel</button>\r\n        </div>\r\n    </ng-template>\r\n    \r\n    <button class=\"btn btn-lg btn-positive\" (click)=\"open(content)\" *ngIf=\"authService.isAuthenticated\">Upload photo</button>\r\n</div>    \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"auth-btn\">  \r\n    <p (click)=\"onLogout()\" *ngIf=\"authService.isAuthenticated\" class=\"clickable\">\r\n        <i class=\"fas fa-sign-out-alt\"></i> Logout\r\n    </p>   \r\n    <p class=\"clickable\" (click)=\"open(content)\" *ngIf=\"!authService.isAuthenticated\"><i class=\"fas fa-sign-in-alt\"></i> Login / Register</p>\r\n    <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Authentication</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">            \r\n            <ng-flash-message></ng-flash-message>\r\n            <form>                \r\n                <div class=\"form-group\">\r\n                    <label>Username</label>\r\n                    <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" required/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Password</label>\r\n                    <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\" required/>\r\n                </div>\r\n                <div class=\"file-field d-flex\">\r\n                    <div class=\"btn btn-neutral\">\r\n                      <span>Choose file</span>\r\n                      <input type=\"file\" class=\"custom-file-input\" (change)=\"fileUploadChange($event)\" id=\"path\">                      \r\n                    </div>\r\n                    <div class=\"form-control ml-2 w-50\" *ngIf=\"avatar\">{{avatar.name}}</div>\r\n                    <div class=\"form-control ml-2 w-50\" *ngIf=\"!avatar\">Upload photo...</div>\r\n                </div>\r\n            </form>\r\n            <p class=\"sign-in\">Already has an account? Please click <span class=\"clickable sign-in-link\" (click)=\"onLogin()\">Sign in!</span></p>\r\n        </div>\r\n        <div class=\"modal-footer d-flex justify-content-between\">\r\n            <button type=\"button\" class=\"btn btn-positive\" (click)=\"onRegister()\">Sign up</button>\r\n            <button type=\"button\" class=\"btn btn-neutral\" (click)=\"modal.close('Cancel')\">Cancel</button>\r\n        </div>\r\n    </ng-template>   \r\n</div>    \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/navbar/navbar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/navbar/navbar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row nav-bar\">\r\n    <div class=\"col nav-section\">\r\n        <a [routerLink]=\"['/']\" class=\"logo\"><i class=\"far fa-images\"></i> MyGallery</a>\r\n    </div>\r\n   \r\n    <div class=\"col menu nav-section\">\r\n      <div ngbDropdown class=\"d-inline-block\">\r\n        <button class=\"menu-btn\" id=\"dropdownBasic1\" ngbDropdownToggle>\r\n          <i *ngIf=\"!authService.isAuthenticated\" class=\"fas fa-bars\"></i>\r\n          <img *ngIf=\"authService.isAuthenticated && authService.loadedUser && authService.loadedUser.avatar !== ''\" src=\"{{authService.loadedUser.avatar}}\" class=\"avatar\"/>        \r\n        </button>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">          \r\n            <div ngbDropdownItem><app-auth></app-auth></div>       \r\n            <div ngbDropdownItem  *ngIf=\"authService.isAuthenticated\"><a [routerLink]=\"['/my_uploads']\"><i class=\"fas fa-caret-square-up\"></i> My uploads</a></div>  \r\n            <div ngbDropdownItem  *ngIf=\"authService.isAuthenticated\"><a [routerLink]=\"['/saved']\"><i class=\"fas fa-folder-plus\"></i> My saved</a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-uploads/my-uploads.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-uploads/my-uploads.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mx-auto w-100 mt-5 mb-5 justify-content-center text-center container-fluid\">\r\n    <h2 class=\"title\">My Uploads</h2>\r\n    <div class=\"photos-opts\">\r\n        <div class=\"photo-opts-left\">\r\n            <app-add-photo (addPhoto)=\"addPhoto($event)\"></app-add-photo>\r\n        </div>\r\n        <div class=\"photo-opts-right\">\r\n            <select class='select-option' (change)='onFilter($event)'>\r\n                <option *ngFor='let opt of filters' [value]=\"opt.id\">{{opt.text}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <ng-flash-message></ng-flash-message>    \r\n    <div class=\"photo-list d-flex justify-content-center flex-wrap\">\r\n        <app-photo-item *ngFor=\"let photo of photos\" [photo]=\"photo\" (deletePhoto)=\"deletePhoto($event)\"></app-photo-item>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-item/photo-item.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-item/photo-item.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <button *ngIf=\"deletable()\" (click)=\"onDeletePhoto(photo)\" class=\"del-img-btn clickable\"><i class=\"fas fa-trash\"></i></button>\r\n    <!-- Image card -->\r\n    <img class=\"card-img-top\" src=\"{{photo.path}}\" alt=\"Card image cap\"/>\r\n    <div class=\"card-body\">\r\n      <div class=\"card-text\">\r\n        <p (click)=\"openLargeModal(content)\" class=\"card-title\">{{photo.title}}</p>        \r\n      </div>\r\n      <div class=\"img-info\">\r\n        <div class=\"img-author\"><p>by {{photo.by}}</p></div>\r\n        <div class=\"img-opts\">\r\n          <p class=\"clickable\" *ngIf=\"!saved()\" (click)=\"onSavePhoto()\"><i class=\"fas fa-folder-plus\"></i> Save  </p>\r\n          <p class=\"clickable saved\" *ngIf=\"saved()\" (click)=\"onUnsavePhoto()\"><i class=\"fas fa-folder-plus\"></i> Saved  </p>\r\n          <p class=\"clickable\" *ngIf=\"!loved()\" (click)=\"onLovePhoto()\"><i class=\"fas fa-heart\"></i> Love</p>        \r\n          <p class=\"clickable loved\" *ngIf=\"loved()\" (click)=\"onUnlovePhoto()\"><i class=\"fas fa-heart\"></i> Loved</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Image Modal -->\r\n    <div class=\"image-modal\">\r\n      <ng-template #content let-modal>\r\n          <div class=\"modal-header\">\r\n          <h4 class=\"modal-title card-title\" id=\"modal-basic-title\">{{photo.title}}</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          </div>\r\n          <div class=\"modal-body\">            \r\n          </div>\r\n          <div class=\"modal-footer d-flex justify-content-between\">\r\n            <img class=\"card-img-top\" src=\"{{photo.path}}\" alt=\"Card image cap\"/>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-text\">\r\n                <p><b>Posted by:</b> {{photo.by}}</p>\r\n                <p><b>Description:</b> {{photo.caption}}</p>\r\n                <p><b>Url:</b> {{photo.path}}</p>              \r\n              </div>\r\n              <div class=\"img-opts-column\">              \r\n                <p class=\"clickable\"> <i class=\"fas fa-folder-plus\"></i> {{photo.savedBy.length}} Saves</p> \r\n                <p class=\"clickable\"> <i class=\"fas fa-heart\"></i> {{photo.lovedBy.length}} Loves</p>  \r\n              </div>\r\n            </div>\r\n          </div>\r\n      </ng-template> \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photos/photos.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photos/photos.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mx-auto w-100 mt-5 mb-5 justify-content-center container-fluid\">\r\n    <input class=\"search-input form-control\" placeholder=\"Search an image...\" type=\"text\" value=\"searchInput\" name=\"searchInput\" [(ngModel)]=\"searchInput\" (ngModelChange)=\"search()\" />\r\n    <div class=\"photo-opts-left\">\r\n        <app-add-photo (addPhoto)=\"addPhoto($event)\"></app-add-photo>\r\n    </div>\r\n    <ng-flash-message></ng-flash-message>\r\n    <div class=\"photo-list\">        \r\n        <app-photo-item *ngFor=\"let photo of showedPhotos\" [photo]=\"photo\" (deletePhoto)=\"deletePhoto($event)\"></app-photo-item>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/saved-photo/saved-photo.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/saved-photo/saved-photo.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mx-auto w-100 mt-5 mb-5 justify-content-center text-center container-fluid\">\r\n    <h2 class=\"title\">My Saved Photos</h2>\r\n    <div class=\"photo-opts-right\">\r\n        <select class='select-option' (change)='onFilter($event)'>\r\n            <option *ngFor='let opt of filters' [value]=\"opt.id\">{{opt.text}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"photo-list\">\r\n        <app-photo-item *ngFor=\"let photo of photos\" [photo]=\"photo\"></app-photo-item>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n    border-top: 1px solid #008080;\r\n    margin: 1em 4em;\r\n    padding: 1em;\r\n}\r\n.footer p, .portfolio-link, .portfolio-link:hover, .portfolio-link:active{\r\n    color:#008080;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA4MDgwO1xyXG4gICAgbWFyZ2luOiAxZW0gNGVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5mb290ZXIgcCwgLnBvcnRmb2xpby1saW5rLCAucG9ydGZvbGlvLWxpbms6aG92ZXIsIC5wb3J0Zm9saW8tbGluazphY3RpdmV7XHJcbiAgICBjb2xvcjojMDA4MDgwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-src';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/photos/photos.component */ "./src/app/components/photos/photos.component.ts");
/* harmony import */ var _components_photo_item_photo_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/photo-item/photo-item.component */ "./src/app/components/photo-item/photo-item.component.ts");
/* harmony import */ var _components_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-photo/add-photo.component */ "./src/app/components/add-photo/add-photo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layouts/navbar/navbar.component */ "./src/app/components/layouts/navbar/navbar.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_saved_photo_saved_photo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/saved-photo/saved-photo.component */ "./src/app/components/saved-photo/saved-photo.component.ts");
/* harmony import */ var _components_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/my-uploads/my-uploads.component */ "./src/app/components/my-uploads/my-uploads.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");

















const appRoutes = [
    { path: '', component: _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"] },
    { path: 'auth', component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"] },
    { path: 'saved', component: _components_saved_photo_saved_photo_component__WEBPACK_IMPORTED_MODULE_14__["SavedPhotoComponent"] },
    { path: 'my_uploads', component: _components_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_15__["MyUploadsComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"],
            _components_photo_item_photo_item_component__WEBPACK_IMPORTED_MODULE_7__["PhotoItemComponent"],
            _components_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_8__["AddPhotoComponent"],
            _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
            _components_saved_photo_saved_photo_component__WEBPACK_IMPORTED_MODULE_14__["SavedPhotoComponent"],
            _components_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_15__["MyUploadsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__["NgFlashMessagesModule"].forRoot()
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-photo/add-photo.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-photo/add-photo.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload-section{\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcGhvdG8vYWRkLXBob3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1waG90by9hZGQtcGhvdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtc2VjdGlvbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/add-photo/add-photo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-photo/add-photo.component.ts ***!
  \*************************************************************/
/*! exports provided: AddPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoComponent", function() { return AddPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let AddPhotoComponent = class AddPhotoComponent {
    constructor(modalService, authService) {
        this.modalService = modalService;
        this.authService = authService;
        this.addPhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    fileUploadChange(event) {
        this.path = event.target.files[0];
    }
    onSubmit() {
        const photo = {
            caption: this.caption,
            title: this.title,
            path: this.path
        };
        this.addPhoto.emit(photo);
        this.modalService.dismissAll("close modal");
        this.title = '';
        this.path = '';
        this.caption = '';
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
};
AddPhotoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddPhotoComponent.prototype, "addPhoto", void 0);
AddPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-photo/add-photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-photo.component.css */ "./src/app/components/add-photo/add-photo.component.css")).default]
    })
], AddPhotoComponent);



/***/ }),

/***/ "./src/app/components/auth/auth.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/auth/auth.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-in-link{\r\n    color: darkgreen;\r\n    font-weight: bold;\r\n    /* text-decoration: underline; */\r\n    padding: .15em;\r\n    border-bottom: 1px solid black;\r\n}\r\n.sign-in{\r\n    margin-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1saW5re1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXHJcbiAgICBwYWRkaW5nOiAuMTVlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uc2lnbi1pbntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthComponent = class AuthComponent {
    constructor(modalService, authService, ngFlashMessage, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.ngFlashMessage = ngFlashMessage;
        this.router = router;
    }
    ngOnInit() {
        this.authService.loadUser(this.authService.token);
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    fileUploadChange(event) {
        this.avatar = event.target.files[0];
    }
    onRegister() {
        const user = {
            username: this.username,
            password: this.password,
            avatar: this.avatar
        };
        if (!this.authService.validateInput(user)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ["Please fill in all the required fields"],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
        }
        else {
            this.authService.registerUser(user).subscribe(data => {
                this.ngFlashMessage.showFlashMessage({
                    messages: ["Your account is successfully registered"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                this.authService.loadUser(data.token);
            });
            this.modalService.dismissAll("close modal");
        }
    }
    onLogin() {
        const user = {
            username: this.username,
            password: this.password,
        };
        if (!this.authService.validateInput(user)) {
            this.ngFlashMessage.showFlashMessage({
                messages: ["Please fill in all the required fields"],
                dismissible: true,
                timeout: 3000,
                type: 'danger'
            });
        }
        else {
            this.authService.loginUser(user).subscribe(data => this.authService.loadUser(data.token));
            this.modalService.dismissAll("close modal");
        }
    }
    onLogout() {
        this.authService.logoutUser();
        this.username = "";
        this.password = "";
        this.avatar = "";
        this.router.navigate(['/']);
    }
};
AuthComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/components/auth/auth.component.css")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/components/layouts/navbar/navbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/layouts/navbar/navbar.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Nav bar */\r\n.nav-bar{\r\n    background-color: #008080;\r\n    padding: 1.5em 2em 1.5em 2em;\r\n    font-weight: bold;\r\n}\r\n.avatar{\r\n    height: 1.5em;\r\n    width: 1.5em;\r\n    margin: 0em .5em;\r\n    border-radius: 50%;\r\n}\r\n.menu-btn, .menu-btn:focus{\r\n    color: white;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline-color: transparent;\r\n}\r\n.dropdown-menu{\r\n    padding: 0em;    \r\n    background-color: #008080;\r\n    border: 1px solid #e0ebeb;\r\n}\r\n.dropdown-item{\r\n    margin: 0em;\r\n    border-bottom: 1px solid #e0ebeb;\r\n    padding: 1em 1.5em .5em;\r\n    color: #e0ebeb;\r\n}\r\n.dropdown-item a{\r\n    margin: 0em;\r\n    color: #e0ebeb;\r\n}\r\n.dropdown-item:active, .dropdown-item:hover, .dropdown-item:hover a,\r\n.dropdown-item a:active, .dropdown-item a:hover{\r\n    color:#008080;\r\n    background-color:  #e0ebeb;\r\n}\r\n.auth-btn p{\r\n    margin-bottom: 0px;\r\n}\r\n.nav-section{\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n.welcome.nav-section{\r\n    justify-content: center;\r\n}\r\n.menu.nav-section{\r\n    justify-content: flex-end;\r\n    font-size: 1.5em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBOztJQUVJLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOYXYgYmFyICovXHJcbi5uYXYtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDJlbSAxLjVlbSAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXZhdGFye1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdpZHRoOiAxLjVlbTtcclxuICAgIG1hcmdpbjogMGVtIC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm1lbnUtYnRuLCAubWVudS1idG46Zm9jdXN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5kcm9wZG93bi1tZW51e1xyXG4gICAgcGFkZGluZzogMGVtOyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwODA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlYmViO1xyXG59XHJcbi5kcm9wZG93bi1pdGVte1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZWJlYjtcclxuICAgIHBhZGRpbmc6IDFlbSAxLjVlbSAuNWVtO1xyXG4gICAgY29sb3I6ICNlMGViZWI7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW0gYXtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgY29sb3I6ICNlMGViZWI7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlLCAuZHJvcGRvd24taXRlbTpob3ZlciwgLmRyb3Bkb3duLWl0ZW06aG92ZXIgYSxcclxuLmRyb3Bkb3duLWl0ZW0gYTphY3RpdmUsIC5kcm9wZG93bi1pdGVtIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjojMDA4MDgwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNlMGViZWI7XHJcbn1cclxuLmF1dGgtYnRuIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm5hdi1zZWN0aW9ue1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLndlbGNvbWUubmF2LXNlY3Rpb257XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWVudS5uYXYtc2VjdGlvbntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/layouts/navbar/navbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/navbar/navbar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/layouts/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/my-uploads/my-uploads.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-uploads/my-uploads.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title{\r\n    margin: 1em 0em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS11cGxvYWRzL215LXVwbG9hZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LXVwbG9hZHMvbXktdXBsb2Fkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luOiAxZW0gMGVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/my-uploads/my-uploads.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-uploads/my-uploads.component.ts ***!
  \***************************************************************/
/*! exports provided: MyUploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyUploadsComponent", function() { return MyUploadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MyUploadsComponent = class MyUploadsComponent {
    constructor(photoService, ngFlashMessage, authService, router) {
        this.photoService = photoService;
        this.ngFlashMessage = ngFlashMessage;
        this.authService = authService;
        this.router = router;
        this.filters = this.photoService.getFilterOptions();
    }
    ngOnInit() {
        if (!this.authService.isAuthenticated)
            this.router.navigate(['/']);
        this.photoService.getMyUploads().subscribe(data => this.photos = data);
    }
    onFilter(event) {
        console.log(event.target.value);
        switch (event.target.value) {
            case "1":
                this.photos = this.photos.sort((a, b) => {
                    var x = a.title.toLowerCase();
                    var y = b.title.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case "2":
                this.photos = this.photos.sort((a, b) => {
                    var x = a.title.toLowerCase();
                    var y = b.title.toLowerCase();
                    if (x > y) {
                        return -1;
                    }
                    if (x < y) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case "3":
                this.photos = this.photos.sort((a, b) => a.lovedBy.length - b.lovedBy.length);
                break;
            default:
                return this.photos;
        }
        console.log(this.photos);
    }
    addPhoto(photo) {
        this.photoService.addPhoto(photo).subscribe(res => {
            this.photos.unshift(res);
            this.ngFlashMessage.showFlashMessage({
                messages: ["Photo is added"],
                dismissible: true,
                timeout: 3000,
                type: 'success'
            });
        });
    }
    deletePhoto(photo) {
        this.photos = this.photos.filter(pt => pt._id !== photo._id);
        this.photoService.deletePhoto(photo).subscribe(() => {
            this.ngFlashMessage.showFlashMessage({
                messages: ["Photo is removed"],
                dismissible: true,
                timeout: 3000,
                type: 'success'
            });
        });
    }
};
MyUploadsComponent.ctorParameters = () => [
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MyUploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-uploads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-uploads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-uploads/my-uploads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-uploads.component.css */ "./src/app/components/my-uploads/my-uploads.component.css")).default]
    })
], MyUploadsComponent);



/***/ }),

/***/ "./src/app/components/photo-item/photo-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/photo-item/photo-item.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    width: 25rem;\r\n    height: 20rem;\r\n    padding: .25em;\r\n    margin:1em;\r\n    background-color: rgba(210, 224, 224, .75);\r\n    color: #151e1e;\r\n}\r\n.card img{\r\n    height: calc(20rem - .75em);\r\n}\r\n.card .card-body{\r\n    text-align: left;\r\n    padding: 1em;\r\n    background-color: rgb(210, 224, 224);\r\n    min-height: 5rem;\r\n    transition:  transform 1s;\r\n    margin-top: -4.5rem;\r\n    visibility: hidden;   \r\n}\r\n.card:hover{\r\n    cursor:pointer;\r\n}\r\n.card:hover .card-body{\r\n    transform: translateY(-.5rem);\r\n    visibility: visible;\r\n    z-index: 1;\r\n    \r\n}\r\n.card-title::first-letter{\r\n    text-transform: uppercase;\r\n}\r\np.card-title{\r\n    font-size: .85em;\r\n    font-weight: bold;\r\n    white-space: nowrap;\r\n    width: 10rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.img-info{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: .75em;\r\n}\r\n.img-opts{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n.img-opts p{\r\n    margin: 0em 1em;\r\n}\r\n.loved{\r\n    color: darkred;\r\n    background-color: white;\r\n    /* margin-bottom: -0.5em; */\r\n    padding: .25em .75em .25em;\r\n    border: .75px solid darkred;\r\n    border-radius: .5em;\r\n}\r\n.saved{\r\n    color: darkgreen;\r\n    background-color: white;\r\n    /* margin-bottom: -0.5em; */\r\n    padding: .25em .75em .25em;\r\n    border: .75px solid darkgreen;\r\n    border-radius: .5em;\r\n}\r\n.del-img-btn{\r\n    position: absolute;\r\n    top: .25em;\r\n    right: .25em;\r\n    color:darkred;\r\n    border:none;\r\n}\r\n/* Image item Modal */\r\n.image-modal .img-opts{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1pdGVtL3Bob3RvLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsVUFBVTs7QUFFZDtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG90by1pdGVtL3Bob3RvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIHBhZGRpbmc6IC4yNWVtO1xyXG4gICAgbWFyZ2luOjFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMjQsIDIyNCwgLjc1KTtcclxuICAgIGNvbG9yOiAjMTUxZTFlO1xyXG59XHJcbi5jYXJkIGltZ3tcclxuICAgIGhlaWdodDogY2FsYygyMHJlbSAtIC43NWVtKTtcclxufVxyXG4uY2FyZCAuY2FyZC1ib2R5e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIyNCwgMjI0KTtcclxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAgdHJhbnNmb3JtIDFzO1xyXG4gICAgbWFyZ2luLXRvcDogLTQuNXJlbTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgICBcclxufVxyXG4uY2FyZDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkLWJvZHl7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS41cmVtKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgXHJcbn1cclxuLmNhcmQtdGl0bGU6OmZpcnN0LWxldHRlcntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxucC5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uaW1nLWluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAuNzVlbTtcclxufVxyXG4uaW1nLW9wdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmltZy1vcHRzIHB7XHJcbiAgICBtYXJnaW46IDBlbSAxZW07XHJcbn1cclxuLmxvdmVke1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IC0wLjVlbTsgKi9cclxuICAgIHBhZGRpbmc6IC4yNWVtIC43NWVtIC4yNWVtO1xyXG4gICAgYm9yZGVyOiAuNzVweCBzb2xpZCBkYXJrcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxufVxyXG4uc2F2ZWR7XHJcbiAgICBjb2xvcjogZGFya2dyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAtMC41ZW07ICovXHJcbiAgICBwYWRkaW5nOiAuMjVlbSAuNzVlbSAuMjVlbTtcclxuICAgIGJvcmRlcjogLjc1cHggc29saWQgZGFya2dyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxufVxyXG4uZGVsLWltZy1idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC4yNWVtO1xyXG4gICAgcmlnaHQ6IC4yNWVtO1xyXG4gICAgY29sb3I6ZGFya3JlZDtcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcbi8qIEltYWdlIGl0ZW0gTW9kYWwgKi9cclxuLmltYWdlLW1vZGFsIC5pbWctb3B0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/photo-item/photo-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/photo-item/photo-item.component.ts ***!
  \***************************************************************/
/*! exports provided: PhotoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoItemComponent", function() { return PhotoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_photo_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/photo-item.service */ "./src/app/services/photo-item.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let PhotoItemComponent = class PhotoItemComponent {
    constructor(authService, photoItemService, modalService) {
        this.authService = authService;
        this.photoItemService = photoItemService;
        this.modalService = modalService;
        this.deletePhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openLargeModal(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    deletable() {
        if (this.authService.loadedUser) {
            return this.photo.user === this.authService.loadedUser._id;
        }
    }
    saved() {
        if (this.authService.loadedUser) {
            return this.photo.savedBy.findIndex(saved => saved.user === this.authService.loadedUser._id) >= 0;
        }
    }
    loved() {
        if (this.authService.loadedUser) {
            return this.photo.lovedBy.findIndex(loved => loved.user === this.authService.loadedUser._id) >= 0;
        }
    }
    onSavePhoto() {
        if (!this.authService.isAuthenticated) {
            alert("Please log in ");
        }
        else
            return this.photoItemService.savePhoto(this.photo._id).subscribe(data => this.photo.savedBy = data);
    }
    onUnsavePhoto() {
        return this.photoItemService.unsavePhoto(this.photo._id).subscribe(data => this.photo.savedBy = data);
    }
    onLovePhoto() {
        if (!this.authService.isAuthenticated) {
            alert("Please log in ");
        }
        else
            return this.photoItemService.lovePhoto(this.photo._id).subscribe(data => this.photo.lovedBy = data);
    }
    onUnlovePhoto() {
        return this.photoItemService.unlovePhoto(this.photo._id).subscribe(data => this.photo.lovedBy = data);
    }
    onDeletePhoto(photo) {
        this.deletePhoto.emit(photo);
    }
};
PhotoItemComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_photo_item_service__WEBPACK_IMPORTED_MODULE_3__["PhotoItemService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PhotoItemComponent.prototype, "photo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PhotoItemComponent.prototype, "deletePhoto", void 0);
PhotoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-item/photo-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-item.component.css */ "./src/app/components/photo-item/photo-item.component.css")).default]
    })
], PhotoItemComponent);



/***/ }),

/***/ "./src/app/components/photos/photos.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/photos/photos.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/photos/photos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/photos/photos.component.ts ***!
  \*******************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




let PhotosComponent = class PhotosComponent {
    constructor(photoService, ngFlashMessage) {
        this.photoService = photoService;
        this.ngFlashMessage = ngFlashMessage;
    }
    ngOnInit() {
        this.photoService.getPhotos().subscribe(photos => {
            this.photos = photos;
            this.showedPhotos = photos;
        });
    }
    search() {
        let text = this.searchInput;
        this.showedPhotos = this.photos;
        if (text !== "") {
            this.showedPhotos = this.showedPhotos.filter(photo => photo.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0);
        }
        else {
            this.ngOnInit();
        }
    }
    addPhoto(photo) {
        this.photoService.addPhoto(photo).subscribe(res => {
            this.showedPhotos.unshift(res);
            this.ngFlashMessage.showFlashMessage({
                messages: ["Photo is added"],
                dismissible: true,
                timeout: 3000,
                type: 'success'
            });
        });
    }
    deletePhoto(photo) {
        this.showedPhotos = this.showedPhotos.filter(pt => pt._id !== photo._id);
        this.photoService.deletePhoto(photo).subscribe(() => {
            this.ngFlashMessage.showFlashMessage({
                messages: ["Photo is removed"],
                dismissible: true,
                timeout: 3000,
                type: 'success'
            });
        });
    }
};
PhotosComponent.ctorParameters = () => [
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] }
];
PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photos/photos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photos.component.css */ "./src/app/components/photos/photos.component.css")).default]
    })
], PhotosComponent);



/***/ }),

/***/ "./src/app/components/saved-photo/saved-photo.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/saved-photo/saved-photo.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZWQtcGhvdG8vc2F2ZWQtcGhvdG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/saved-photo/saved-photo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/saved-photo/saved-photo.component.ts ***!
  \*****************************************************************/
/*! exports provided: SavedPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedPhotoComponent", function() { return SavedPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SavedPhotoComponent = class SavedPhotoComponent {
    constructor(photoService, authService, router) {
        this.photoService = photoService;
        this.authService = authService;
        this.router = router;
        this.filters = this.photoService.getFilterOptions();
    }
    ngOnInit() {
        if (!this.authService.isAuthenticated)
            this.router.navigate(['/']);
        this.photoService.getSavedPhotos().subscribe(data => this.photos = data);
    }
    onFilter(event) {
        console.log(event.target.value);
        switch (event.target.value) {
            case "1":
                this.photos = this.photos.sort((a, b) => {
                    var x = a.title.toLowerCase();
                    var y = b.title.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case "2":
                this.photos = this.photos.sort((a, b) => {
                    var x = a.title.toLowerCase();
                    var y = b.title.toLowerCase();
                    if (x > y) {
                        return -1;
                    }
                    if (x < y) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case "3":
                this.photos = this.photos.sort((a, b) => a.lovedBy.length - b.lovedBy.length);
                break;
            default:
                return this.photos;
        }
        console.log(this.photos);
    }
};
SavedPhotoComponent.ctorParameters = () => [
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SavedPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saved-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./saved-photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/saved-photo/saved-photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./saved-photo.component.css */ "./src/app/components/saved-photo/saved-photo.component.css")).default]
    })
], SavedPhotoComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:5000/api/user';
        this.isAuthenticated = false;
    }
    loadUser(token) {
        this.token = token;
        if (this.token) {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'application/json',
                'x-auth-token': this.token
            });
            this.http.get(this.url + '/auth', { headers: headers }).subscribe(data => this.loadedUser = data);
            this.isAuthenticated = true;
            return this.loadedUser;
        }
    }
    validateInput({ username, password }) {
        if (username === undefined || password === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    registerUser(user) {
        var formData = new FormData();
        formData.append("username", user.username);
        formData.append("password", user.password);
        formData.append("avatar", user.avatar);
        return this.http.post(this.url + '/register', formData);
    }
    loginUser(user) {
        return this.http.post(this.url + '/login', JSON.stringify(user), httpOptions);
    }
    logoutUser() {
        this.isAuthenticated = false;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/photo-item.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/photo-item.service.ts ***!
  \************************************************/
/*! exports provided: PhotoItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoItemService", function() { return PhotoItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




let PhotoItemService = class PhotoItemService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = 'http://localhost:5000/api/photos';
    }
    getHttpOptions(token) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'x-auth-token': token
        });
    }
    savePhoto(photo_id) {
        //res.json(photo.savedBy(user_id))
        return this.http.put(this.url + `/saved/${photo_id}`, null, { headers: this.getHttpOptions(this.authService.token) });
    }
    unsavePhoto(photo_id) {
        //res.json(photo.savedBy(user_id))
        return this.http.put(this.url + `/unsave/${photo_id}`, null, { headers: this.getHttpOptions(this.authService.token) });
    }
    lovePhoto(photo_id) {
        //res.json(photo.lovedBy(user_id))
        return this.http.put(this.url + `/loved/${photo_id}`, null, { headers: this.getHttpOptions(this.authService.token) });
    }
    unlovePhoto(photo_id) {
        //res.json(photo.lovedBy(user_id))
        return this.http.put(this.url + `/unlove/${photo_id}`, null, { headers: this.getHttpOptions(this.authService.token) });
    }
};
PhotoItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PhotoItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoItemService);



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




let PhotoService = class PhotoService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.urlPhoto = 'http://localhost:5000/api/photos';
        this.urlUser = 'http://localhost:5000/api/user';
    }
    getFilterOptions() {
        return [
            { id: 0, text: "Newest first" },
            { id: 1, text: "Name A-Z" },
            { id: 2, text: "Name Z-A" },
            { id: 3, text: "Most popular" }
        ];
    }
    getPhotos() {
        return this.http.get(this.urlPhoto);
    }
    getMyUploads() {
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-auth-token': this.authService.token
        });
        //res.json(photos)
        return this.http.get(this.urlPhoto + `/${this.authService.loadedUser._id}`, { headers: header });
    }
    getSavedPhotos() {
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-auth-token': this.authService.token
        });
        return this.http.get(this.urlUser + '/saved', { headers: header });
    }
    addPhoto(photo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-auth-token': this.authService.token
        });
        var formData = new FormData();
        formData.append("caption", photo.caption);
        formData.append("path", photo.path);
        formData.append("title", photo.title);
        return this.http.post(this.urlPhoto + "/upload", formData, { headers: headers });
    }
    deletePhoto(photo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'x-auth-token': this.authService.token
        });
        return this.http.delete(this.urlPhoto + `/${photo._id}`, { headers: headers });
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\MEAN\Photo-Gallery-MEAN\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);