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

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Votre compte</h2>\r\n\r\n<table *ngIf=\"customerInfo\" class=\"table\">\r\n  <tbody>\r\n    <tr>\r\n      <th>Prénom</th>\r\n      <td>{{ customerInfo.firstname }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Nom</th>\r\n      <td>{{ customerInfo.lastname }}</td>\r\n    </tr>\r\n    <tr>\r\n      <th>E-mail</th>\r\n      <td>{{ customerInfo.email }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"text-right\">\r\n  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-danger\"><span class=\"oi oi-account-logout\"></span> Déconnexion</button>\r\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(customerService) {
        this.customerService = customerService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        if (this.customerService.isLoggedIn) {
            console.log('yes');
            this.customerInfo = this.customerService.customerInfo;
            console.log(this.customerInfo);
        }
        else {
            console.log('no');
        }
    };
    AccountComponent.prototype.logout = function () {
        this.customerService.logout();
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tests/tests.component */ "./src/app/tests/tests.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../best-seller/best-seller.component */ "./src/app/best-seller/best-seller.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var tabRouting = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"]
    },
    {
        path: 'bst', component: _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_7__["BestSellerComponent"]
    },
    {
        path: 'product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
    },
    {
        path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
    },
    {
        path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_11__["ConnectComponent"]
    },
    {
        path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    },
    {
        path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"]
    },
    {
        path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"]
    },
    // MBAD : Mettre en commentaire pour la build Prod
    {
        path: 'tests', component: _tests_tests_component__WEBPACK_IMPORTED_MODULE_3__["TestsComponent"]
    },
    // MBAD : Mettre en commentaire pour la build Prod
    // pour le chemin default dessous, toujours à laisser en dernier dans la liste du router
    {
        path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule
                [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(tabRouting)]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <!-- Pont de départ des composant 'Router' -->\n  <!-- <app-catalog></app-catalog>\n  <app-tests></app-tests> -->\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tests_tests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tests/tests.component */ "./src/app/tests/tests.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./best-seller/best-seller.component */ "./src/app/best-seller/best-seller.component.ts");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./image/image.component */ "./src/app/image/image.component.ts");
/* harmony import */ var _product_thumb_product_thumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-thumb/product-thumb.component */ "./src/app/product-thumb/product-thumb.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default.a);



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _tests_tests_component__WEBPACK_IMPORTED_MODULE_10__["TestsComponent"],
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_11__["CatalogComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_12__["PriceComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
                _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_16__["BestSellerComponent"],
                _image_image_component__WEBPACK_IMPORTED_MODULE_17__["ImageComponent"],
                _product_thumb_product_thumb_component__WEBPACK_IMPORTED_MODULE_18__["ProductThumbComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_21__["ConnectComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_22__["AccountComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_24__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'fr-FR' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.customerService.isLoggedIn) {
            console.log('Allow entry:', this.customerService.isLoggedIn);
            return true;
        }
        else {
            console.log('Deny entry:', this.customerService.isLoggedIn);
            this.router.navigate(['/connect']);
            return false; // juste pour retourner une valeur, car l'accès aura déjà été empêché par la navigation.
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/best-seller/best-seller.component.css":
/*!*******************************************************!*\
  !*** ./src/app/best-seller/best-seller.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n  color: gray;\r\n}"

/***/ }),

/***/ "./src/app/best-seller/best-seller.component.html":
/*!********************************************************!*\
  !*** ./src/app/best-seller/best-seller.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Nos meilleures ventes</h3>\n<hr>\n\n<!-- Ce code fonctionne : à conserver pour livraison du 16/07 -->\n<div class=\"row\">\n  <div *ngFor=\"let mVentes of produitRating\" class=\"col-sm-6 col-md-4 col-lg-3\">\n    <app-product-thumb [produit]=\"mVentes\" [isBst]=\"true\"></app-product-thumb>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/best-seller/best-seller.component.ts":
/*!******************************************************!*\
  !*** ./src/app/best-seller/best-seller.component.ts ***!
  \******************************************************/
/*! exports provided: BestSellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestSellerComponent", function() { return BestSellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BestSellerComponent = /** @class */ (function () {
    function BestSellerComponent(serviceCatalog) {
        this.serviceCatalog = serviceCatalog;
        // TODO
    }
    BestSellerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO
        var maFunctionCallBackRating = function (listeProduitsReturn) {
            _this.produitRating = listeProduitsReturn;
            // console.log(listeProduitsReturn);
            // console.log(this.produitRating);      
        };
        this.serviceCatalog.getProductsByRating(5).subscribe(maFunctionCallBackRating);
    };
    BestSellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-best-seller',
            template: __webpack_require__(/*! ./best-seller.component.html */ "./src/app/best-seller/best-seller.component.html"),
            styles: [__webpack_require__(/*! ./best-seller.component.css */ "./src/app/best-seller/best-seller.component.css")]
        }),
        __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"]])
    ], BestSellerComponent);
    return BestSellerComponent;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
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

var CartService = /** @class */ (function () {
    function CartService() {
        this.cartItemsArray = []; // tableau d'objets de type CartItem.
        var lsCart = localStorage.getItem('cart');
        if (lsCart) {
            this.cart = JSON.parse(lsCart);
        }
        else {
            this.cart = {
                lines: {},
                total: 0,
                shippingCost: 0,
                nbItems: 0,
            };
            this.updateLocalStorage();
        }
        this.updateCartItemsArray();
        // console.log('CartService - constructor(), this.cart:', this.cart);
    }
    CartService.prototype.updateLocalStorage = function () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };
    CartService.prototype.addProduct = function (product) {
        // console.log('CartService addProduct()');
        if (product.id in this.cart.lines) {
            this.cart.lines[product.id].qty++;
            // this.cart.lines[product.id].itemTotal = this.cart.lines[product.id].qty * product.price;
        }
        else {
            this.cart.lines[product.id] = {
                qty: 1,
                product: product,
                itemTotal: product.price,
            };
        }
        this.calculateCart();
    };
    CartService.prototype.addOne = function (productId) {
        if (productId in this.cart.lines) {
            this.cart.lines[productId].qty++;
        }
        this.calculateCart();
    };
    CartService.prototype.removeOne = function (productId) {
        if (productId in this.cart.lines) {
            if (this.cart.lines[productId].qty > 1) {
                this.cart.lines[productId].qty--;
            }
            else {
                this.removeProduct(productId);
            }
        }
        this.calculateCart();
    };
    CartService.prototype.removeProduct = function (productId) {
        if (productId in this.cart.lines) {
            // console.log('Le produit à supprimer a été trouvé', this.cart);
            delete this.cart.lines[productId];
            // console.log(this.cart);
            this.calculateCart();
        }
    };
    CartService.prototype.getProductQty = function (productId) {
        if (productId in this.cart.lines) {
            return this.cart.lines[productId].qty;
        }
        else {
            return 0;
        }
    };
    CartService.prototype.calculateCart = function () {
        this.cart.total = 0;
        this.cart.nbItems = 0;
        for (var prop in this.cart.lines) {
            if (this.cart.lines.hasOwnProperty(prop)) {
                this.cart.lines[prop].itemTotal = this.cart.lines[prop].qty * this.cart.lines[prop].product.price;
                this.cart.total += this.cart.lines[prop].itemTotal;
                this.cart.nbItems += this.cart.lines[prop].qty;
            }
        }
        this.updateCartItemsArray();
        this.updateLocalStorage();
    };
    CartService.prototype.updateCartItemsArray = function () {
        // console.log('updateCartItemsArray() - this.cart:', this.cart);
        this.cartItemsArray = [];
        for (var prop in this.cart.lines) {
            if (this.cart.lines.hasOwnProperty(prop)) {
                this.cartItemsArray.push(this.cart.lines[prop]);
            }
        }
        return this.cartItemsArray;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"cartService.cartItemsArray.length; then cart; else noCart\"></ng-container>\r\n\r\n<ng-template #cart>\r\n  <h2>Votre panier</h2>\r\n  <table class=\"table table-striped table-hover\">\r\n    <thead>\r\n      <tr class=\"table-active\">\r\n        <th>Article</th>\r\n        <th title=\"Prix unitaire\">\r\n          <span class=\"d-none d-md-block\">Prix unitaire</span>\r\n          <span class=\"d-md-none\">Prix U.</span>\r\n        </th>\r\n        <th title=\"Quantité\">\r\n          <span class=\"d-none d-md-block\">Quantité</span>\r\n          <span class=\"d-md-none\">Qté</span>\r\n        </th>\r\n        <th>Actions</th>\r\n        <th>Total article</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of cartService.cartItemsArray\">\r\n        <td>\r\n\r\n          <a routerLink=\"/product/{{ item.product.id }}\"><img src=\"{{ item.product.image }}\" alt=\"\" class=\"img-fluid img-thumbnail\" style=\"width:100px;\"></a>\r\n          <a routerLink=\"/product/{{ item.product.id }}\" class=\"align-top\">{{ item.product.name }}</a>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          <app-price [price]=\"item.product.price\"></app-price>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          {{ item.qty }}\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" (click)=\"removeOne(item.product.id)\" class=\"btn btn-sm btn-outline-secondary\" placement=\"bottom\" ngbTooltip=\"Diminuer la quantité\"><span class=\"oi oi-minus\"></span></button>&nbsp;\r\n          <button type=\"button\" (click)=\"addOne(item.product.id)\" class=\"btn btn-sm btn-outline-secondary\" placement=\"bottom\" ngbTooltip=\"Augmenter la quantité\"><span class=\"oi oi-plus\"></span></button>&nbsp;\r\n          <button type=\"button\" (click)=\"removeProduct(item.product.id)\" class=\"btn btn-sm btn-outline-secondary\" placement=\"bottom\" ngbTooltip=\"Supprimer l'article\"><span class=\"oi oi-trash\"></span></button>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          <app-price [price]=\"item.itemTotal\"></app-price>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6 offset-md-6\">\r\n      <table class=\"table\">\r\n        <tbody>\r\n          <tr>\r\n            <th>\r\n              Total TTC\r\n            </th>\r\n            <td class=\"text-right\">\r\n              <app-price [price]=\"cartService.cart.total\"></app-price>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>\r\n              Frais de port\r\n            </th>\r\n            <td class=\"text-right\">\r\n              <app-price [price]=\"cartService.cart.shippingCost\"></app-price>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col text-right\">\r\n      <a routerLink=\"/payment\" class=\"btn btn-danger\">Passer la commande</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #noCart>\r\n  <h2>Votre panier est vide...</h2>\r\n  <p><a routerLink=\"/catalog\">Parcourez notre catalogue.</a></p>\r\n</ng-template>\r\n\r\n\r\n<ng-template #modalContent let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirmation de suppression</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Voulez-vous vraiment retirer ce produit ?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('Save click')\">Retirer le produit du panier</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, modalService) {
        this.cartService = cartService;
        this.modalService = modalService;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.removeOne = function (productId) {
        if (this.cartService.getProductQty(productId) > 1) {
            this.cartService.removeOne(productId);
        }
        else {
            this.removeProduct(productId);
        }
    };
    CartComponent.prototype.addOne = function (productId) {
        this.cartService.addOne(productId);
    };
    CartComponent.prototype.removeProduct = function (productId) {
        this.modalRemoveProduct(productId);
    };
    CartComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            // console.log('C', 'by pressing ESC');
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            // console.log('D', 'by clicking on a backdrop');
            return 'by clicking on a backdrop';
        }
        else {
            // console.log('E', reason);
            return "with: " + reason;
        }
    };
    CartComponent.prototype.modalRemoveProduct = function (productId) {
        var _this = this;
        this.modalService.open(this.modalContent, { centered: true })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.cartService.removeProduct(productId);
            // console.log('A', this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            // console.log('B', this.closeResult);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "modalContent", void 0);
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/catalog.service.ts":
/*!************************************!*\
  !*** ./src/app/catalog.service.ts ***!
  \************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
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


var CatalogService = /** @class */ (function () {
    // private apiBase: string = "http://192.168.105.79/api";
    function CatalogService(serviceHttp) {
        this.serviceHttp = serviceHttp;
        // private apiBase: string = "http://ng-ecommerce-api.virtuoworks.com/api";
        this.apiBase = "http://localhost/api";
        // TODO
    }
    // Récup de la liste complète des produits
    // getProducts(){
    //   const url = `${this.apiBase}/Products`;
    //   // console.log(url);
    //   return this.serviceHttp.get(url);
    // }
    CatalogService.prototype.getProducts = function () {
        return this.serviceHttp.get(this.apiBase + "/Products");
    };
    // Récup d'un produit de la liste à partir de son Id
    // getProductsById(id){
    //   const url = `${this.apiBase}/Products/findOne?filter={"where":{"id":"${id}"}}`;
    //   //console.log(url);
    //   return this.serviceHttp.get(url);
    // }
    CatalogService.prototype.getProductsById = function (id) {
        var url = this.apiBase + "/Products/findOne?filter={\"where\":{\"id\":\"" + id + "\"}}";
        return this.serviceHttp.get(url);
    };
    //exemple pour trouver un produit avec son id
    //http://ng-ecommerce-api.virtuoworks.com/api/Products/findOne?filter={"where":{"id":"5b3a54b9be56c0d8c3495c75"}}
    // et pour la liste des rating=5
    // http://ng-ecommerce-api.virtuoworks.com/api/Products/?filter={"where":{"rating":"5"}}
    // Récup de la liste complète des produits avec un rating de 5
    // getProductsByBestRating(){
    //   const url = `${this.apiBase}/Products/?filter={"where":{"rating":"5"}}`;
    //   //console.log(url);
    //   return this.serviceHttp.get(url);
    // }
    // Transformation en fonction flèche et observable, comme celle de SebG
    CatalogService.prototype.getProductsByRating = function (rating) {
        var url = this.apiBase + "/Products/?filter={\"where\":{\"rating\":\"" + rating + "\"}}";
        return this.serviceHttp.get(url);
    };
    CatalogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/*!***********************************************!*\
  !*** ./src/app/catalog/catalog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n  color: gray;\r\n}"

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Nos produits</h3>\n<hr>\n\n<div class=\"row\">\n  <div *ngFor=\"let produit of produitsList\" class=\"col-sm-6 col-md-4 col-lg-3\">\n    <!-- <app-product-thumb [produit]=\"produit\"></app-product-thumb> -->\n    <app-product-thumb [produit]=\"produit\" [isBst]=\"false\"></app-product-thumb>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(serviceCatalog) {
        this.serviceCatalog = serviceCatalog;
        // TODO
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO
        var maFunctionCallBackProduitsList = function (listeProduitsReturn) {
            _this.produitsList = listeProduitsReturn;
            //okconsole.log(listeProduitsReturn);
        };
        this.serviceCatalog.getProducts().subscribe(maFunctionCallBackProduitsList);
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.css */ "./src/app/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/connect/connect.component.css":
/*!***********************************************!*\
  !*** ./src/app/connect/connect.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <app-signup></app-signup>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-login></app-login>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
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

var ConnectComponent = /** @class */ (function () {
    function ConnectComponent() {
    }
    ConnectComponent.prototype.ngOnInit = function () {
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.css */ "./src/app/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerService = /** @class */ (function () {
    function CustomerService(http, router) {
        this.http = http;
        this.router = router;
        this.apiBase = 'http://ng-ecommerce-api.virtuoworks.com/api';
        //private apiBase: string = "http://localhost/api";
        // private apiBase: string = "http://192.168.105.79/api";
        this.isLoggedIn = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var storedStatus = localStorage.getItem('loggedIn');
        if (storedStatus && storedStatus === '1') {
            var customerInfo = localStorage.getItem('customerInfo');
            if (customerInfo) {
                this.customerInfo = JSON.parse(customerInfo);
            }
            this.updateAuthStatus(true);
        }
    }
    CustomerService.prototype.createAccount = function (signupData) {
        return this.http.post(this.apiBase + "/Customers", signupData);
    };
    CustomerService.prototype.login = function (loginData) {
        var _this = this;
        var str = this.apiBase + "/Customers?filter={\"where\":{\"email\":\"" + loginData.email + "\",\"password\":\"" + loginData.password + "\"}}";
        return this.http.get(str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('this.http.get:', data);
            _this.customerInfo = data[0];
            var status = (data && data.length === 1) ? true : false;
            _this.updateAuthStatus(status);
            return _this.isLoggedIn;
        }));
    };
    CustomerService.prototype.logout = function () {
        this.updateAuthStatus(false);
        this.router.navigate(['/']);
    };
    CustomerService.prototype.updateAuthStatus = function (newStatus) {
        this.isLoggedIn = newStatus;
        if (newStatus) {
            localStorage.setItem('loggedIn', '1');
            localStorage.setItem('customerInfo', JSON.stringify(this.customerInfo));
        }
        else {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('customerInfo');
        }
        this.change.emit(this.isLoggedIn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomerService.prototype, "change", void 0);
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* h3{\r\n  color: gray;\r\n} */\r\n\r\n.carousel-div{\r\n  padding: 10px;\r\n  border: 2px solid gray;\r\n  border-radius: 20px;\r\n}\r\n\r\n.meval{\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-product></app-product> -->\n\n<ngb-carousel class=\"carousel-div\">\n    <ng-template ngbSlide>\n      <img src=\"./assets/images/produits/cast-metaljpg.jpg\" alt=\"Cast metal\">\n      <div class=\"carousel-caption\">\n        <h3>Cast metal</h3>\n        <!-- <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"./assets/images/produits/wooden-puzzle.jpg\" alt=\"Wooden puzzle\">\n      <div class=\"carousel-caption\">\n        <h3>Wooden puzzle</h3>\n        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"./assets/images/produits/wooden-ball-lock.jpg\" alt=\"Wooden ball lock\">\n      <div class=\"carousel-caption\">\n        <h3>Cast metal</h3>\n        <!-- <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->\n      </div>\n    </ng-template>\n  </ngb-carousel>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image/image.component.css":
/*!*******************************************!*\
  !*** ./src/app/image/image.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p\r\n{\r\n  text-align: center;\r\n}\r\n\r\nimg.redimlarge\r\n{\r\n/* display: block; */\r\n/* max-width: 100%; */\r\nheight: 250px;\r\nwidth: auto;\r\n/* float: left; */\r\n}\r\n\r\nimg.redimmedium\r\n{\r\n/* display: block; */\r\n/* max-width: 100%; */\r\n/* max-width: 160px; */\r\nheight: 160px;\r\nwidth: auto;\r\n/* float: left; */\r\n}\r\n\r\nimg.redimsmall\r\n{\r\n/* display: block; */\r\n/* max-width: 100%; */\r\nheight: 50px;\r\nwidth: auto;\r\n/* float: left; */\r\n}"

/***/ }),

/***/ "./src/app/image/image.component.html":
/*!********************************************!*\
  !*** ./src/app/image/image.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p> -->\n  <!-- <img src=\"./assets/images/produits/cast-chain.jpg\" class=\"img-fluid img-thumbnail {{ cssclass }}\"> -->\n  <!-- <img src=\"./assets/images/produits/cast-chain.jpg\" class=\"img-fluid img-thumbnail redimmedium\"> -->\n  <!-- <img src=\"./assets/images/produits/{{ image }}\" class=\"img-fluid img-thumbnail redimmedium\"> -->\n  <!-- <img src=\"./assets/images/produits/{{ image }}\" class=\"img-fluid img-thumbnail redimmedium\"> -->\n  <!-- <img src=\"./assets/images/produits/{{ image }}\" alt=\"{{ imgalt }}\" class=\"img-fluid img-thumbnail {{ cssclass }}\"> -->\n  <!-- <img src=\"{{ imgPath }}{{ image }}\" alt=\"{{ imgalt }}\" class=\"img-fluid img-thumbnail {{ cssclass }}\"> -->\n  <!-- <img src=\"{{ imgPath }}{{ image }}\" alt=\"{{ imgalt }}\" class=\"img-responsive {{ cssclass }}\"> -->\n  <img src=\"{{ imgPath }}{{ image }}\" alt=\"{{ imgalt }}\" class=\"{{ cssclass }}\">  \n<!-- </p> -->\n"

/***/ }),

/***/ "./src/app/image/image.component.ts":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
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

var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
        this.imgPath = "./assets/images/produits/";
    }
    ImageComponent.prototype.ngOnInit = function () {
        // console.log(this.imgPath);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageComponent.prototype, "imgalt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageComponent.prototype, "cssclass", void 0);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/image/image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Déjà client </h2>\r\n\r\n<ngb-alert type=\"danger\" (close)=\"invalidLoginAlert=false\" *ngIf=\"invalidLoginAlert\"><strong>Connexion impossible.</strong><br> Veuillez vérifier votre e-mail ou mot de passe.</ngb-alert>\r\n\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n  <div class=\"form-group\">\r\n    <label for=\"login-email\">E-mail :</label>\r\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" [class.is-invalid]=\"loginForm.get('email').touched && loginForm.get('email').errors\" id=\"login-email\">\r\n    <div *ngIf=\"loginForm.get('email').touched && loginForm.get('email').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"loginForm.get('email').errors.required\">Veuillez saisir votre adresse e-mail.</div>\r\n      <div *ngIf=\"loginForm.get('email').errors.email\">Veuillez saisir une adresse e-mail valide.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"login-password\">Mot de passe :</label>\r\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" [class.is-invalid]=\"loginForm.get('password').touched && loginForm.get('password').errors\" id=\"login-password\">\r\n    <div *ngIf=\"loginForm.get('password').touched && loginForm.get('password').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"loginForm.get('password').errors.required\">Veuillez saisir votre mot de passe.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">Connexion</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerService = customerService;
        this.submitted = false;
        this.invalidLoginAlert = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.invalidLoginAlert = false;
        if (this.loginForm.invalid) {
            console.log('Invalid form');
            return;
        }
        this.customerService.login(this.loginForm.value).subscribe(function (loginResponse) {
            console.log('loginResponse', loginResponse, typeof loginResponse);
            if (loginResponse) {
                console.log('finally logged in');
                _this.router.navigate(['/account']);
            }
            else {
                console.log('finally failed login');
                _this.invalidLoginAlert = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar{\r\n  margin: 10px 10px 30px 10px;\r\n  /* margin-bottom: 50px; */\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Accueil Shop</a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> -->\n  <button class=\"navbar-toggler\" (click)=\"basculerMenu()\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-nav\" aria-controls=\"main-nav\" [attr.aria-expanded]=\"!menuClosed\" aria-label=\"Ouvrir ou fermer le menu principal\">\n  <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"main-nav\" [ngbCollapse]=\"menuClosed\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li\n        class=\"nav-item\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/catalog\">Catalogue</a>\n      </li>\n      <li\n        class=\"nav-item\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/bst\">Best Sellers</a>\n      </li>\n      <!-- MBAD :Mettre en commentaire pour la build Prod -->\n      <li\n        class=\"nav-item active\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/tests\">Tests </a>\n      </li>\n      <!-- MBAD : Mettre en commentaire pour la build Prod -->\n    </ul>\n\n    <ul class=\"navbar-nav\">\n      <li\n        class=\"nav-item\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a routerLink=\"/cart\" class=\"nav-link\">Panier</a>\n      </li>\n\n      <ng-container *ngIf=\"loggedInUser; then jeSuisAuth; else navigationAuth\"></ng-container>\n\n      <ng-template #jeSuisAuth>\n        <li\n          class=\"nav-item\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/account\" class=\"nav-link\">Votre compte</a>\n        </li>\n      </ng-template>\n\n      <ng-template #navigationAuth>\n        <li\n          class=\"nav-item\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/connect\" class=\"nav-link\">Identifiez-vous</a>\n        </li>\n      </ng-template>\n\n    </ul>\n  </div>\n</div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.menuClosed = true;
        this.loggedInUser = false;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var maFunctionCallback = function (event) {
            if (event instanceof (_angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"])) {
                // this.menuClosed = !this.menuClosed;
                _this.menuClosed = true;
            }
        };
        // this.router.events.subscribe(maFunctionCallback);
        this.customerService.change.subscribe(function (loggedInStatus) {
            _this.loggedInUser = loggedInStatus;
        });
        this.loggedInUser = this.customerService.isLoggedIn;
    };
    NavbarComponent.prototype.basculerMenu = function () {
        this.menuClosed = !this.menuClosed;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n  color: gray;\r\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>La page que vous demandez n'existe pas.</h3>\r\n<hr>\r\n\r\n<p>\r\n  <a routerLink=\"/\">Retournez à l'accueil</a>\r\n</p>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ngb-alert [dismissible]=\"false\">\r\n  <strong>Important !</strong> Les moyens de paiement ne sont pas actifs.\r\n</ngb-alert>\r\n\r\n<h2>Paiement</h2>\r\n\r\n<span class=\"oi oi-credit-card\"></span>"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
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

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.css":
/*!*******************************************!*\
  !*** ./src/app/price/price.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vide{\r\n}"

/***/ }),

/***/ "./src/app/price/price.component.html":
/*!********************************************!*\
  !*** ./src/app/price/price.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong>{{ price | currency: 'EUR':'symbol':'0.2-2':'fr' }}</strong>"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
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

var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PriceComponent.prototype, "price", void 0);
    PriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/price/price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/product-thumb/product-thumb.component.css":
/*!***********************************************************!*\
  !*** ./src/app/product-thumb/product-thumb.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produit-box\r\n{\r\n  /* border: 1px solid lightgray; */\r\n  border-radius: 5px;\r\n  /* box-shadow: 2px 2px 10px 1px rgba(50, 50, 50, .4); */\r\n  box-shadow: 1px 1px 4px 1px rgba(50, 50, 50, .1);\r\n  margin: 0px 0px 30px 0px;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/product-thumb/product-thumb.component.html":
/*!************************************************************!*\
  !*** ./src/app/product-thumb/product-thumb.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"produit-box\">\n    <p style=\"text-align: center\">\n        <a routerLink=\"/product/{{ produit.id }}\">\n      <app-image [image]=\"produit.image\" [imgalt]=\"produit.name\" [cssclass]=\"'redimmedium'\"></app-image>\n    </a>\n    </p>\n    <div>\n      <p>\n        <a routerLink=\"/product/{{ produit.id }}\">{{ produit.name }}</a>\n      </p>\n      <ng-container *ngIf=\"isBst; then showRating; else hideRating\"></ng-container>\n      <ng-template #showRating>\n        <p>\n          <ngb-rating [rate]=\"produit.rating\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n        </p>      \n      </ng-template>\n      <ng-template #hideRating>\n        <p>\n          <br>\n        </p>\n      </ng-template>    \n      <p>\n        <app-price [price]=\"produit.price\"></app-price>\n      </p>          \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/product-thumb/product-thumb.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-thumb/product-thumb.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductThumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductThumbComponent", function() { return ProductThumbComponent; });
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

var ProductThumbComponent = /** @class */ (function () {
    function ProductThumbComponent() {
        this.isBst = false;
    }
    ProductThumbComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductThumbComponent.prototype, "produit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductThumbComponent.prototype, "isBst", void 0);
    ProductThumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-thumb',
            template: __webpack_require__(/*! ./product-thumb.component.html */ "./src/app/product-thumb/product-thumb.component.html"),
            styles: [__webpack_require__(/*! ./product-thumb.component.css */ "./src/app/product-thumb/product-thumb.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductThumbComponent);
    return ProductThumbComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n  border: 1px solid black\r\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" *ngIf=\"produit\">\n  \n  <div class=\"order-1 col-sm-6 order-sm-1 col-lg-4 order-lg-1\">\n    <div>\n      <app-image [image]=\"produit.image\" [imgalt]=\"produit.name\" [cssclass]=\"'redimlarge'\"></app-image>  </div>\n  </div>\n  <div class=\"order-2 col-sm-6 order-sm-2 col-lg-4 order-lg-2\">\n    <h2>{{ produit.name }}</h2>\n    <p>\n      <ngb-rating [rate]=\"produit.rating\" max=\"5\" readonly=\"readonly\"></ngb-rating>\n    </p>\n    <p>{{ produit.description }}</p>\n  </div>\n  <div class=\"order-3 col-sm-12 order-sm-3 col-lg-4 order-lg-3\">\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <p>\n          Prix :\n          <app-price [price]=\"produit.price\"></app-price>\n        </p>\n\n        <ng-container *ngIf=\"produit.inStock; then enStockTabPanel; else plusEnStockTabPanel\">\n\n        </ng-container>\n\n        <ng-template #enStockTabPanel>\n          <p class=\"text-success\">\n            en stock\n          </p>\n        </ng-template>\n\n        <ng-template #plusEnStockTabPanel>\n          <p class=\"text-danger\">\n            <strong>Momentanément indisponible</strong>\n          </p>\n        </ng-template>\n\n        <button type=\"button\" class=\"btn btn-danger btn-block\" [attr.disabled]=\"produit.inStock ? null : 'disabled'\" (click)=\"addToCart(produit)\">Ajouter au panier</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <ngb-tabset class=\"col-12\">\n\n    <ngb-tab title=\"Tab Panel 1\">\n      <ng-template ngbTabContent>\n        <div class=\"tab-pane\">\n          <p>Titre 1</p>\n          <p>Possible de faire un card ou jumbotron ici.</p>\n        </div>\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab>\n      <ng-template ngbTabTitle>Tab Panel 2</ng-template>\n      <ng-template ngbTabContent>\n        <div class=\"tab-pane\">\n          <p>Titre 2</p>\n          <p>Possible de faire un card ou jumbotron ici.</p>\n      </div>\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab>\n        <ng-template ngbTabTitle>Tab Panel 3</ng-template>\n        <ng-template ngbTabContent>\n          <div class=\"tab-pane\">\n            <p>Titre 3</p>\n            <p>Possible de faire un card ou jumbotron ici.</p>\n        </div>\n        </ng-template>\n      </ngb-tab>\n  \n  </ngb-tabset>\n</div>\n  \n\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(serviceCatalog, route, router, cartService) {
        this.serviceCatalog = serviceCatalog;
        this.route = route;
        this.router = router;
        this.cartService = cartService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe((params: Params) =>
        // {
        //   // à ce niveau, l'objet n'est pas encore défini, car opération asynchrone..on attend le retour du listener..; mais on affiche donc un objet pas encore instancié : undefined !
        //   //console.log(params.id);
        //   this.serviceCatalog.getProductsById(params.id).subscribe(
        //     (produit: IProduit) =>
        //     {
        //       // console.log(this.product)
        //       this.product = produit;
        //       // à ce niveau, l'objet est bien défini, on a bien le retour de l'objet dans la console
        //       // console.log(this.product);
        //     });
        // });
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            // SebG : IMPORTANT: Utiliser une fonction flèche. 
            _this.serviceCatalog.getProductsById(params.id).subscribe(function (product) {
                // SebG : IMPORTANT: Utiliser une fonction flèche.
                // product.image = "./assets/images/produits/${ product.image }";
                // console.log(product.image);
                // <app-image [image]="produit.image" [imgalt]="produit.name" [cssclass]="'redimmedium'"></app-image>
                _this.produit = product;
                // console.log(product);
                // console.log(this.produit);
            });
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe(); // facultatif, Angular se désinscrira automatiqument
        // de l'observable sur la route. Mais ce n'est pas le cas de tous les observables.
    };
    // addToCart(product: Product): void {
    //   // console.log('Adding to cart:', product);
    //   this.cartService.addProduct(product);
    //   this.router.navigate(['/cart']);
    // }
    ProductComponent.prototype.addToCart = function (product) {
        // console.log('Adding to cart:', product);
        this.cartService.addProduct(product);
        this.router.navigate(['/cart']);
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Créer un compte</h2>\r\n\r\n<ngb-alert type=\"danger\" (close)=\"invalidFormAlert=false\" *ngIf=\"invalidFormAlert\"><strong>Erreur.</strong><br> L'enregistrement a échoué.</ngb-alert>\r\n\r\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-firstname\" class=\"control-label\">Prénom :</label>\r\n    <input type=\"text\" formControlName=\"firstname\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('firstname').touched && signupForm.get('firstname').errors\" id=\"singup-firstname\">\r\n    <div *ngIf=\"signupForm.get('firstname').touched && signupForm.get('firstname').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('firstname').errors.required\">Veuillez saisir votre prénom.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-lastname\" class=\"control-label\">Nom de famille :</label>\r\n    <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('lastname').touched && signupForm.get('lastname').errors\" id=\"singup-lastname\">\r\n    <div *ngIf=\"signupForm.get('lastname').touched && signupForm.get('lastname').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('lastname').errors.required\">Veuillez saisir votre nom de famille.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-email\" class=\"control-label\">E-mail :</label>\r\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('email').touched && signupForm.get('email').errors\" id=\"singup-email\">\r\n    <div *ngIf=\"signupForm.get('email').touched && signupForm.get('email').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('email').errors.required\">Veuillez saisir votre adresse e-mail.</div>\r\n      <div *ngIf=\"signupForm.get('email').errors.email\">Veuillez saisir une adresse e-mail valide.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"singup-password\" class=\"control-label\">Mot de passe :</label>\r\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [class.is-invalid]=\"signupForm.get('password').touched && signupForm.get('password').errors\" id=\"singup-password\">\r\n    <div *ngIf=\"signupForm.get('password').touched && signupForm.get('password').errors\" class=\"text-danger\">\r\n      <div *ngIf=\"signupForm.get('password').errors.required\">Veuillez saisir votre mot de passe.</div>\r\n      <div *ngIf=\"signupForm.get('password').errors.minlength\">Votre mot de passe doit comporter au moins 6 caractères.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">Créer mon compte</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.customerService = customerService;
        this.invalidFormAlert = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.invalidFormAlert = false;
        console.log(this.signupForm);
        if (this.signupForm.valid) {
            this.customerService.createAccount(this.signupForm.value)
                .subscribe(function (data) {
                _this.customerService.login(_this.signupForm.value).subscribe(function (loginResponse) {
                    if (loginResponse) {
                        _this.router.navigate(['/account']);
                    }
                    else {
                        _this.invalidFormAlert = true;
                    }
                });
            });
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/tests/tests.component.css":
/*!*******************************************!*\
  !*** ./src/app/tests/tests.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.redim\r\n{\r\ndisplay: block;\r\nmax-width: 100%;\r\nheight: auto;\r\nwidth: 200px;\r\nfloat: left;\r\n}\r\n\r\nh3{\r\n  color: gray;\r\n}"

/***/ }),

/***/ "./src/app/tests/tests.component.html":
/*!********************************************!*\
  !*** ./src/app/tests/tests.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-success\">Success</button>\n<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n<button type=\"button\" class=\"btn btn-info\">Info</button>\n<button type=\"button\" class=\"btn btn-light\">Light</button>\n<button type=\"button\" class=\"btn btn-dark\">Dark</button>\n\n<button type=\"button\" class=\"btn btn-link\">Link</button> -->\n\n<!-- ******************************************************************* -->\n<!-- <h2>Test date localized</h2>\n<p>Date : {{ todayLocalized }}</p>\n<p>Date : {{ todayLocalized | date:'shortDate' }}</p> -->\n<!-- <p>Date : {{ todayLocalized | date:'longDate' }}</p>\n<p>Date : {{ todayLocalized | date:'fullDate' }}</p> -->\n<!-- <p>Date : {{ todayLocalized | date:'longDate' | uppercase }}</p> -->\n<!-- ******************************************************************* -->\n\n<!-- ******************************************************************* -->\n\n<!-- <h2>Prix produit : </h2>\n<p>{{ prixProduittest }}</p>\n<p>{{ prixProduittest2 }}</p>\n<p>{{ prixProduittest2 | currency: 'EUR':'symbol':'0.2-2':'fr'}}</p> -->\n<!-- ******************************************************************* -->\n\n<!-- ******************************************************************* -->\n<h3>Récup Produit</h3>\n<button type=\"button\" class=\"btn btn-info\" (click)=\"recupererProduits()\">Récup</button>\n<ul>\n  <li *ngFor=\"let nomProduit of products\">{{ nomProduit.name }}\n    <ul>\n      <li>ID : {{ nomProduit.id }}</li>\n      <li>Image : {{ nomProduit.image }}</li>\n      <li>InStock : {{ nomProduit.inStock }}</li>\n      <li>Prix : {{ nomProduit.price }} €</li>\n      <li>rating : {{ nomProduit.rating }}</li>\n      <app-image [image]=\"nomProduit.image\" [cssclass]=\"'redimmedium'\"></app-image>\n    </ul>\n  </li>\n</ul>\n<!-- ******************************************************************* -->\n"

/***/ }),

/***/ "./src/app/tests/tests.component.ts":
/*!******************************************!*\
  !*** ./src/app/tests/tests.component.ts ***!
  \******************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog.service */ "./src/app/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestsComponent = /** @class */ (function () {
    function TestsComponent(serviceCatalog) {
        this.serviceCatalog = serviceCatalog;
        this.todayLocalized = new Date();
        this.prixProduittest = 9.99;
        this.prixProduittest2 = 3.987654321;
        // TODO
    }
    TestsComponent.prototype.ngOnInit = function () {
    };
    TestsComponent.prototype.recupererProduits = function () {
        var _this = this;
        var maFunctionCallBack = function (mesDataHttpReturn) {
            _this.products = mesDataHttpReturn;
            //console.log(mesDataHttpReturn);
        };
        this.serviceCatalog.getProducts().subscribe(maFunctionCallBack);
    };
    TestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tests',
            template: __webpack_require__(/*! ./tests.component.html */ "./src/app/tests/tests.component.html"),
            styles: [__webpack_require__(/*! ./tests.component.css */ "./src/app/tests/tests.component.css")]
        }),
        __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"]])
    ], TestsComponent);
    return TestsComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Local_Datas\IfocopLocal\devdata\ECommerceDynamique_NodeJS\ecommerce.2.0.1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map