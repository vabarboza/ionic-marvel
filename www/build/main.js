webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Provider = /** @class */ (function () {
    function Provider(service) {
        this.service = service;
    }
    Provider.prototype.getAllCharacters = function (pagination, filter) {
        var _this = this;
        var strFilter = '';
        if (filter != '') {
            strFilter = '&nameStartsWith=' + filter;
        }
        var param = '&limit=' + pagination.getLimit() + '&offset=' + pagination.getOffset() + strFilter;
        return new Promise(function (ret) {
            _this.service.getDados('https://gateway.marvel.com/v1/public/characters', param).then(function (data) {
                if (data && data.data && data.data.results) {
                    _this.updatePagination(pagination, data.data);
                    ret(data.data.results);
                }
                else {
                    ret([]);
                }
            }, function (err) {
                ret(false);
            });
        });
    };
    Provider.prototype.getComicsByCharacter = function (character) {
        var _this = this;
        return new Promise(function (ret) {
            _this.service.getDados('https://gateway.marvel.com/v1/public/characters/' + character.id + '/comics', '').then(function (data) {
                if (data && data.data && data.data.results) {
                    ret(data.data.results);
                }
                else {
                    ret([]);
                }
            }, function (err) {
                ret(false);
            });
        });
    };
    Provider.prototype.getCharacterById = function (id) {
        var _this = this;
        return new Promise(function (ret) {
            _this.service.getDados('https://gateway.marvel.com/v1/public/characters/' + id, '').then(function (data) {
                if (data && data.data && data.data.results) {
                    ret(data.data.results);
                }
                else {
                    ret([]);
                }
            }, function (err) {
                ret(false);
            });
        });
    };
    Provider.prototype.updatePagination = function (pagination, data) {
        pagination.setTotal(data.total);
        pagination.setLimit(data.limit);
        pagination.createPages();
    };
    Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* Service */]])
    ], Provider);
    return Provider;
}());

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'grid',template:/*ion-inline-start:"C:\Users\FCV\Desktop\ionic-marvel\src\pages\grid\grid.html"*/'<ion-header class="header-marvel">\n\n</ion-header>\n\n\n\n<!-- conteudo -->\n\n<ion-content class="content-marvel">\n\n    <ion-row>\n\n        <ion-col no-padding offset-1 col-10 class="coluna1">\n\n            <ion-row>\n\n                <ion-col no-padding col-4 offset-1 class="coluna2">\n\n                    teste 1\n\n                </ion-col>\n\n                <ion-col no-padding col-4 offset-1 class="coluna3">\n\n                    teste 2\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n\n\n<!-- rodape -->\n\n<ion-footer class="footer-marvel">\n\n</ion-footer>'/*ion-inline-end:"C:\Users\FCV\Desktop\ionic-marvel\src\pages\grid\grid.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], Grid);
    return Grid;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Character; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_pagination__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Character = /** @class */ (function () {
    function Character(provider, navCtrl) {
        this.provider = provider;
        this.navCtrl = navCtrl;
        this.characters = [];
        this.filtro = {
            descricao: '',
            bkp: ''
        };
        this.pagination = new __WEBPACK_IMPORTED_MODULE_4__util_pagination__["a" /* Pagination */]();
        this.checking = true;
        this.filtroCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.pagination.setLimit(10);
        this.initFilter();
    }
    /* *INICIALIZA FILTRO */
    Character.prototype.initFilter = function () {
        var _this = this;
        this.filtroCtrl.valueChanges.debounceTime(750).subscribe(function (filtro) {
            _this.getAllCharacters();
        });
    };
    /* *RECUPERA PERSONAGENS */
    Character.prototype.getAllCharacters = function () {
        var _this = this;
        this.checking = true;
        if (this.filtro.descricao != this.filtro.bkp) {
            this.pagination.reset();
        }
        this.provider.getAllCharacters(this.pagination, this.filtro.descricao).then(function (characters) {
            _this.filtro.bkp = _this.filtro.descricao;
            _this.characters = [];
            _this.characters = characters;
            _this.checking = false;
        });
    };
    /* PAGINATION */
    Character.prototype.goFirstPage = function () {
        this.pagination.setCurrentPage(1);
        this.getAllCharacters();
    };
    Character.prototype.goLastPage = function () {
        this.pagination.setCurrentPage(this.pagination.getPages()[this.pagination.getPages().length - 1]);
        this.getAllCharacters();
    };
    Character.prototype.goPreviousPage = function () {
        this.pagination.setCurrentPage(this.pagination.getCurrentPage() - 1);
        this.getAllCharacters();
    };
    Character.prototype.goNextPage = function () {
        this.pagination.setCurrentPage(this.pagination.getCurrentPage() + 1);
        this.getAllCharacters();
    };
    Character.prototype.goPage = function (page) {
        this.pagination.setCurrentPage(page);
        this.getAllCharacters();
    };
    /* --- */
    Character.prototype.goDetails = function (character) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* Detail */], { character: character });
    };
    Character = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'character',template:/*ion-inline-start:"C:\Users\FCV\Desktop\ionic-marvel\src\pages\character\character.html"*/'<!-- cabeçalho, <ion-header></ion-header> -->\n\n<ion-header class="header-marvel">\n\n  <ion-row align-items-center>\n\n    <ion-col col-8 offset-4 text-right>\n\n      <ion-row align-items-center>\n\n        <ion-col col-8 col-md-11 class="info-test" text-right>\n\n          <span class="name-test">Aula IONIC </span> Projeto Marvel\n\n        </ion-col>\n\n        <ion-col col-4 col-md-1 text-right>\n\n          <span class="icon-account"> CB </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<!-- corpo, <ion-content></ion-content> -->\n\n<ion-content class="content-marvel">\n\n  <ion-row>\n\n    <ion-col col-12 class="content-page">\n\n      <ion-row class="fixed-info">\n\n        <ion-col col-12 no-padding>\n\n          <ion-row>\n\n            <ion-col class="page-title">\n\n              Busca de personagens\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 class="no-padding-bottom label-up-input">\n\n              Nome do personagem\n\n            </ion-col>\n\n            <ion-col col-12 col-md-4 class="no-padding-top">\n\n              <ion-input class="input-form" [formControl]="filtroCtrl" [(ngModel)]="filtro.descricao" [value]="filtro.descricao" placeholder="Search"></ion-input>\n\n              <ion-icon class="icon-search-character" name="search"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n      <ion-row [hidden]="checking">\n\n        <ion-col col-12 *ngIf="characters.length > 0">\n\n          <ion-row align-items-center>\n\n            <ion-col col-12 class="no-padding-bottom">\n\n              <ion-row>\n\n                <ion-col col-12 col-md-4 class="title-list">\n\n                  Personagem \n\n                </ion-col>\n\n                <ion-col col-12 col-md-4 class="title-list class-md-none">\n\n                  Séries \n\n                </ion-col>\n\n                <ion-col col-12 col-md-4 class="title-list class-md-none">\n\n                  Eventos\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let character of characters" align-items-center>\n\n            <ion-col col-12>\n\n              <ion-row class="white-frame-list" align-items-center (click)="goDetails(character)">\n\n                <ion-col col-12 col-md-4 class="col-character">\n\n                  <ion-row align-items-center>\n\n                    <img *ngIf="character.thumbnail && character.thumbnail.path" [src]="character.thumbnail.path + \'.\' + character.thumbnail.extension" [alt]="character.name" class="character-img">\n\n                    <span class="character-name">{{ character.name }}</span>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-md-4 class="class-md-none">\n\n                  <ion-row *ngFor="let serie of character.series.items">\n\n                    <ion-col no-padding class="character-info">\n\n                      {{serie.name}}\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-md-4 class="class-md-none">\n\n                  <ion-row *ngFor="let event of character.events.items">\n\n                    <ion-col no-padding class="character-info">\n\n                      {{event.name}}\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 *ngIf="characters.length == 0" class="none-results">\n\n          Nenhum personagem encontrado!\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row [hidden]="!checking">\n\n        <ion-col col-12>\n\n          <loading></loading>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<!-- rodapé, <ion-footer></ion-footer> -->\n\n<ion-footer class="footer-marvel">\n\n  <ion-row align-items-center>\n\n    <ion-col col-12 text-center>\n\n      <span class="icon-nav-page" text-center (click)="goFirstPage()">\n\n        <ion-icon name="skip-backward"></ion-icon>\n\n      </span>\n\n      <span class="icon-nav-page" text-center (click)="goPreviousPage()">\n\n        <ion-icon name="md-arrow-dropleft"></ion-icon>\n\n      </span>\n\n      <span *ngFor="let page of pagination.pages" [hidden]="page < pagination.getThresholdDown() || page > pagination.getThresholdUp()" [ngClass]="page == pagination.getCurrentPage() ? \'col go-page-active\' : \'col go-page\'" text-center (click)="goPage(page)">\n\n        {{page}}\n\n      </span>\n\n      <span class="icon-nav-page" text-center (click)="goNextPage()">\n\n        <ion-icon name="md-arrow-dropright"></ion-icon>\n\n      </span>\n\n      <span class="icon-nav-page" text-center (click)="goLastPage()">\n\n        <ion-icon name="skip-forward"></ion-icon>\n\n      </span>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\FCV\Desktop\ionic-marvel\src\pages\character\character.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_provider__["a" /* Provider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], Character);
    return Character;
}());

//# sourceMappingURL=character.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_md5__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
        this.publicKey = '03fea40fe0eff0e36bf2335761cc8f56';
        this.privateKey = 'bd30a6085573379d650ac4760568f4bff312301f';
    }
    Service.prototype.getDados = function (url, parameters) {
        var _this = this;
        var ts = this.generateTs();
        return new Promise(function (ret) {
            _this.http.get(url + '?ts=' + ts + '&apikey=' + _this.publicKey + '&hash=' + _this.getHash(ts) + parameters, {}).map(function (map) { return map.json(); }).subscribe(function (response) {
                if (response) {
                    ret(response);
                }
                else {
                    ret(false);
                }
            }, function (erro) {
                ret(false);
            });
        });
    };
    Service.prototype.getHash = function (ts) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__util_md5__["a" /* md5 */])(ts + this.privateKey + this.publicKey);
    };
    Service.prototype.generateTs = function () {
        return Math.floor(100000 + Math.random() * 900000);
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Detail = /** @class */ (function () {
    function Detail(navCtrl, navParams, provider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        /* id para testes: 1011334 */
        this.character = {
            id: 0,
            comics: {
                available: 0,
                collectionURI: '',
                items: [],
                returned: 0
            },
            description: '',
            events: {
                available: 0,
                collectionURI: '',
                items: [],
                returned: 0
            },
            modified: '',
            name: '',
            resourceURI: '',
            series: {
                available: 0,
                collectionURI: '',
                items: [],
                returned: 0
            },
            stories: {
                available: 0,
                collectionURI: '',
                items: [],
                returned: 0
            },
            thumbnail: {
                path: '',
                extension: ''
            },
            urls: []
        };
        this.comics = [];
        this.checking = true;
        this.id = this.navParams.get('id');
        /* caso - via url */
        if (this.id) {
            this.provider.getCharacterById(this.id).then(function (character) {
                _this.character = character[0];
                if (_this.character) {
                    _this.getComicsByCharacter();
                }
            });
            /* caso - via clique lista */
        }
        else {
            /* get objeto personagem */
            this.character = this.navParams.get('character') || this.character;
            /* corrige url */
            this.navParams.data.id = this.character.id;
            this.id = this.character.id;
            if (this.character) {
                this.getComicsByCharacter();
            }
        }
    }
    Detail.prototype.voltar = function () {
        this.navCtrl.pop() || this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__character__["a" /* Character */]);
    };
    /* *RECUPERA PERSONAGENS */
    Detail.prototype.getComicsByCharacter = function () {
        var _this = this;
        this.checking = true;
        this.provider.getComicsByCharacter(this.character).then(function (comics) {
            _this.comics = comics;
            _this.checking = false;
        });
    };
    Detail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'detail',template:/*ion-inline-start:"C:\Users\FCV\Desktop\ionic-marvel\src\pages\character\detail\detail.html"*/'<ion-header class="header-marvel">\n\n  <ion-row align-items-center>\n\n    <ion-col col-8 offset-4 text-right>\n\n      <ion-row align-items-center>\n\n        <ion-col col-8 col-md-11 no-padding class="info-test" text-right>\n\n          <span class="name-test">Leonardo G. Catharin </span> Teste de front-end\n\n        </ion-col>\n\n        <ion-col col-4 col-md-1 no-padding text-right>\n\n          <span class="icon-account"> CB </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<ion-content class="content-marvel">\n\n  <ion-row>\n\n    <ion-col col-12 class="content-page">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-icon class="ion-icon-back" name="arrow-back" (click)="voltar()"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col col-12 col-md-2>\n\n          <img *ngIf="character.thumbnail && character.thumbnail.path" [src]="character.thumbnail.path + \'.\' + character.thumbnail.extension" [alt]="character.name" class="character-img">\n\n        </ion-col>\n\n        <ion-col col-12 col-md-9>\n\n          <ion-row class="page-title">{{character.name}}</ion-row>\n\n          <ion-row>\n\n            <span class="character-info" *ngFor="let serie of character.series.items;let ix = index">\n\n              <span>\n\n                {{serie.name}}\n\n                <span *ngIf="ix != character.series.items.length - 1">,&nbsp;</span>\n\n              </span>\n\n            </span>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n        <ion-col col-12 class="page-subtitle">\n\n          Lista de histórias em quadrinhos\n\n          <hr>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row [hidden]="checking">\n\n        <ion-col col-12>\n\n          <ion-row *ngFor="let comic of comics">\n\n            <ion-col col-12>\n\n              <ion-row align-items-center>\n\n                <ion-col col-12 col-md-1>\n\n                  <img *ngIf="comic.thumbnail && comic.thumbnail.path" [src]="comic.thumbnail.path + \'.\' + comic.thumbnail.extension" [alt]="comic.title" class="comic-img">\n\n                </ion-col>\n\n                <ion-col col-12 col-md-11>\n\n                  <span class="comic-name">{{ comic.title }}</span> <br>\n\n                  <span class="comic-description">\n\n                    {{comic.description}}\n\n                  </span>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row [hidden]="!checking">\n\n        <ion-col col-12>\n\n          <loading></loading>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\FCV\Desktop\ionic-marvel\src\pages\character\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider__["a" /* Provider */]])
    ], Detail);
    return Detail;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(367);




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_grid_grid__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_character_character__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_character_detail_detail__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_service_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_provider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_loading_loading__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/* PAGES */



/* SERVIÇO */

/* PROVIDERS */

/* COMPONENTS */

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_grid_grid__["a" /* Grid */],
                __WEBPACK_IMPORTED_MODULE_14__pages_character_character__["a" /* Character */],
                __WEBPACK_IMPORTED_MODULE_15__pages_character_detail_detail__["a" /* Detail */],
                __WEBPACK_IMPORTED_MODULE_18__components_loading_loading__["a" /* Loading */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    statusbarPadding: true,
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_character_character__["a" /* Character */], name: 'character', segment: 'character' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_character_detail_detail__["a" /* Detail */], name: 'detail', segment: 'character/detail/:id', defaultHistory: [__WEBPACK_IMPORTED_MODULE_14__pages_character_character__["a" /* Character */]] },
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_grid_grid__["a" /* Grid */],
                __WEBPACK_IMPORTED_MODULE_14__pages_character_character__["a" /* Character */],
                __WEBPACK_IMPORTED_MODULE_15__pages_character_detail_detail__["a" /* Detail */],
                __WEBPACK_IMPORTED_MODULE_18__components_loading_loading__["a" /* Loading */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
                Screen,
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_provider__["a" /* Provider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_service_service__["a" /* Service */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_grid_grid__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        // rootPage:any = Character;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_grid_grid__["a" /* Grid */];
        this.platform.ready().then(function () {
            if (platform.is("ios")) {
                statusBar.styleDefault();
                statusBar.overlaysWebView(false);
            }
            else {
                statusBar.styleLightContent();
            }
            setTimeout(function () {
                splashScreen.hide();
            }, 100);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\FCV\Desktop\ionic-marvel\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\FCV\Desktop\ionic-marvel\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 199,
	"./af.js": 199,
	"./ar": 200,
	"./ar-dz": 201,
	"./ar-dz.js": 201,
	"./ar-kw": 202,
	"./ar-kw.js": 202,
	"./ar-ly": 203,
	"./ar-ly.js": 203,
	"./ar-ma": 204,
	"./ar-ma.js": 204,
	"./ar-sa": 205,
	"./ar-sa.js": 205,
	"./ar-tn": 206,
	"./ar-tn.js": 206,
	"./ar.js": 200,
	"./az": 207,
	"./az.js": 207,
	"./be": 208,
	"./be.js": 208,
	"./bg": 209,
	"./bg.js": 209,
	"./bm": 210,
	"./bm.js": 210,
	"./bn": 211,
	"./bn-bd": 212,
	"./bn-bd.js": 212,
	"./bn.js": 211,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-au": 226,
	"./en-au.js": 226,
	"./en-ca": 227,
	"./en-ca.js": 227,
	"./en-gb": 228,
	"./en-gb.js": 228,
	"./en-ie": 229,
	"./en-ie.js": 229,
	"./en-il": 230,
	"./en-il.js": 230,
	"./en-in": 231,
	"./en-in.js": 231,
	"./en-nz": 232,
	"./en-nz.js": 232,
	"./en-sg": 233,
	"./en-sg.js": 233,
	"./eo": 234,
	"./eo.js": 234,
	"./es": 235,
	"./es-do": 236,
	"./es-do.js": 236,
	"./es-mx": 237,
	"./es-mx.js": 237,
	"./es-us": 238,
	"./es-us.js": 238,
	"./es.js": 235,
	"./et": 239,
	"./et.js": 239,
	"./eu": 240,
	"./eu.js": 240,
	"./fa": 241,
	"./fa.js": 241,
	"./fi": 242,
	"./fi.js": 242,
	"./fil": 243,
	"./fil.js": 243,
	"./fo": 244,
	"./fo.js": 244,
	"./fr": 245,
	"./fr-ca": 246,
	"./fr-ca.js": 246,
	"./fr-ch": 247,
	"./fr-ch.js": 247,
	"./fr.js": 245,
	"./fy": 248,
	"./fy.js": 248,
	"./ga": 249,
	"./ga.js": 249,
	"./gd": 250,
	"./gd.js": 250,
	"./gl": 251,
	"./gl.js": 251,
	"./gom-deva": 252,
	"./gom-deva.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./gu": 254,
	"./gu.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it-ch": 263,
	"./it-ch.js": 263,
	"./it.js": 262,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ku": 271,
	"./ku.js": 271,
	"./ky": 272,
	"./ky.js": 272,
	"./lb": 273,
	"./lb.js": 273,
	"./lo": 274,
	"./lo.js": 274,
	"./lt": 275,
	"./lt.js": 275,
	"./lv": 276,
	"./lv.js": 276,
	"./me": 277,
	"./me.js": 277,
	"./mi": 278,
	"./mi.js": 278,
	"./mk": 279,
	"./mk.js": 279,
	"./ml": 280,
	"./ml.js": 280,
	"./mn": 281,
	"./mn.js": 281,
	"./mr": 282,
	"./mr.js": 282,
	"./ms": 283,
	"./ms-my": 284,
	"./ms-my.js": 284,
	"./ms.js": 283,
	"./mt": 285,
	"./mt.js": 285,
	"./my": 286,
	"./my.js": 286,
	"./nb": 287,
	"./nb.js": 287,
	"./ne": 288,
	"./ne.js": 288,
	"./nl": 289,
	"./nl-be": 290,
	"./nl-be.js": 290,
	"./nl.js": 289,
	"./nn": 291,
	"./nn.js": 291,
	"./oc-lnc": 292,
	"./oc-lnc.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./tg": 313,
	"./tg.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tk": 315,
	"./tk.js": 315,
	"./tl-ph": 316,
	"./tl-ph.js": 316,
	"./tlh": 317,
	"./tlh.js": 317,
	"./tr": 318,
	"./tr.js": 318,
	"./tzl": 319,
	"./tzl.js": 319,
	"./tzm": 320,
	"./tzm-latn": 321,
	"./tzm-latn.js": 321,
	"./tzm.js": 320,
	"./ug-cn": 322,
	"./ug-cn.js": 322,
	"./uk": 323,
	"./uk.js": 323,
	"./ur": 324,
	"./ur.js": 324,
	"./uz": 325,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 325,
	"./vi": 327,
	"./vi.js": 327,
	"./x-pseudo": 328,
	"./x-pseudo.js": 328,
	"./yo": 329,
	"./yo.js": 329,
	"./zh-cn": 330,
	"./zh-cn.js": 330,
	"./zh-hk": 331,
	"./zh-hk.js": 331,
	"./zh-mo": 332,
	"./zh-mo.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 423;

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagination; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Pagination = /** @class */ (function () {
    function Pagination() {
        this.currentPage = 1;
        this.pages = [];
        this.threshold = 1;
        this.thresholdDown = 1;
        this.thresholdUp = 2;
        if (window.screen.width > 992) {
            this.threshold = 2;
            this.thresholdUp = 3;
        }
        ;
    }
    Pagination.prototype.getOffset = function () {
        return this.offset;
    };
    Pagination.prototype.setOffset = function () {
        this.offset = this.limit * (this.currentPage - 1);
    };
    Pagination.prototype.getLimit = function () {
        return this.limit;
    };
    Pagination.prototype.setLimit = function (limit) {
        this.limit = limit;
    };
    Pagination.prototype.getTotal = function () {
        return this.total;
    };
    Pagination.prototype.setTotal = function (total) {
        this.total = total;
    };
    Pagination.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    Pagination.prototype.setCurrentPage = function (currentPage) {
        if (currentPage > 0 && currentPage <= this.pages[this.pages.length - 1]) {
            this.currentPage = currentPage;
            this.setOffset();
            this.setThresholdDown();
            this.setThresholdUp();
        }
    };
    Pagination.prototype.createPages = function () {
        var totalPages = Math.ceil(this.total / this.limit);
        this.pages = [];
        for (var i = 1; i <= totalPages; i++) {
            this.pages.push(i);
        }
    };
    Pagination.prototype.getPages = function () {
        return this.pages;
    };
    Pagination.prototype.getThresholdUp = function () {
        return this.thresholdUp;
    };
    Pagination.prototype.getThresholdDown = function () {
        return this.thresholdDown;
    };
    Pagination.prototype.setThresholdUp = function () {
        this.thresholdUp = this.currentPage + this.threshold;
    };
    Pagination.prototype.setThresholdDown = function () {
        this.thresholdDown = this.currentPage - this.threshold;
    };
    Pagination.prototype.reset = function () {
        this.setCurrentPage(1);
    };
    Pagination = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
        __metadata("design:paramtypes", [])
    ], Pagination);
    return Pagination;
}());

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Loading = /** @class */ (function () {
    function Loading() {
    }
    Loading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "loading",template:/*ion-inline-start:"C:\Users\FCV\Desktop\ionic-marvel\src\components\loading\loading.html"*/'<ion-row>\n\n  <ion-col col-12>\n\n    <div align="center" class="g-carregando"> \n\n      <div class="g-carregando-animacao">\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-vermelha"> </div></div>\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-verde"> </div></div>\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-azul"> </div></div>\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-preta"> </div></div>\n\n      </div>\n\n    </div> \n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\FCV\Desktop\ionic-marvel\src\components\loading\loading.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ })

},[337]);
//# sourceMappingURL=main.js.map