webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Character; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_pagination__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(200);
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
            selector: 'character',template:/*ion-inline-start:"C:\projetos\aulas\ionic-marvel\src\pages\character\character.html"*/'<!-- cabeçalho, <ion-header></ion-header> -->\n\n<ion-header class="header-marvel">\n\n  <ion-row align-items-center>\n\n    <ion-col col-8 offset-4 text-right>\n\n      <ion-row align-items-center>\n\n        <ion-col col-8 col-md-11 class="info-test" text-right>\n\n          <span class="name-test">Aula IONIC </span> Projeto Marvel\n\n        </ion-col>\n\n        <ion-col col-4 col-md-1 text-right>\n\n          <span class="icon-account"> CB </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<!-- corpo, <ion-content></ion-content> -->\n\n<ion-content class="content-marvel">\n\n  <ion-row>\n\n    <ion-col col-12 class="content-page">\n\n      <ion-row class="fixed-info">\n\n        <ion-col col-12 no-padding>\n\n          <ion-row>\n\n            <ion-col class="page-title">\n\n              Busca de personagens\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 class="no-padding-bottom label-up-input">\n\n              Nome do personagem\n\n            </ion-col>\n\n            <ion-col col-12 col-md-4 class="no-padding-top">\n\n              <ion-input class="input-form" [formControl]="filtroCtrl" [(ngModel)]="filtro.descricao" [value]="filtro.descricao" placeholder="Search"></ion-input>\n\n              <ion-icon class="icon-search-character" name="search"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n      <ion-row [hidden]="checking">\n\n        <ion-col col-12 *ngIf="characters.length > 0">\n\n          <ion-row align-items-center>\n\n            <ion-col col-12 class="no-padding-bottom">\n\n              <ion-row>\n\n                <ion-col col-12 col-md-4 class="title-list">\n\n                  Personagem \n\n                </ion-col>\n\n                <ion-col col-12 col-md-4 class="title-list class-md-none">\n\n                  Séries \n\n                </ion-col>\n\n                <ion-col col-12 col-md-4 class="title-list class-md-none">\n\n                  Eventos\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let character of characters" align-items-center>\n\n            <ion-col col-12>\n\n              <ion-row class="white-frame-list" align-items-center (click)="goDetails(character)">\n\n                <ion-col col-12 col-md-4 class="col-character">\n\n                  <ion-row align-items-center>\n\n                    <img *ngIf="character.thumbnail && character.thumbnail.path" [src]="character.thumbnail.path + \'.\' + character.thumbnail.extension" [alt]="character.name" class="character-img">\n\n                    <span class="character-name">{{ character.name }}</span>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-md-4 class="class-md-none">\n\n                  <ion-row *ngFor="let serie of character.series.items">\n\n                    <ion-col no-padding class="character-info">\n\n                      {{serie.name}}\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-md-4 class="class-md-none">\n\n                  <ion-row *ngFor="let event of character.events.items">\n\n                    <ion-col no-padding class="character-info">\n\n                      {{event.name}}\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n\n\n        <ion-col col-12 *ngIf="characters.length == 0" class="none-results">\n\n          Nenhum personagem encontrado!\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row [hidden]="!checking">\n\n        <ion-col col-12>\n\n          <loading></loading>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<!-- rodapé, <ion-footer></ion-footer> -->\n\n<ion-footer class="footer-marvel">\n\n  <ion-row align-items-center>\n\n    <ion-col col-12 text-center>\n\n      <span class="icon-nav-page" text-center (click)="goFirstPage()">\n\n        <ion-icon name="skip-backward"></ion-icon>\n\n      </span>\n\n      <span class="icon-nav-page" text-center (click)="goPreviousPage()">\n\n        <ion-icon name="md-arrow-dropleft"></ion-icon>\n\n      </span>\n\n      <span *ngFor="let page of pagination.pages" [hidden]="page < pagination.getThresholdDown() || page > pagination.getThresholdUp()" [ngClass]="page == pagination.getCurrentPage() ? \'col go-page-active\' : \'col go-page\'" text-center (click)="goPage(page)">\n\n        {{page}}\n\n      </span>\n\n      <span class="icon-nav-page" text-center (click)="goNextPage()">\n\n        <ion-icon name="md-arrow-dropright"></ion-icon>\n\n      </span>\n\n      <span class="icon-nav-page" text-center (click)="goLastPage()">\n\n        <ion-icon name="skip-forward"></ion-icon>\n\n      </span>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\projetos\aulas\ionic-marvel\src\pages\character\character.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_provider__["a" /* Provider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], Character);
    return Character;
}());

//# sourceMappingURL=character.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__(198);
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

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_md5__ = __webpack_require__(418);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character__ = __webpack_require__(101);
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
            selector: 'detail',template:/*ion-inline-start:"C:\projetos\aulas\ionic-marvel\src\pages\character\detail\detail.html"*/'<ion-header class="header-marvel">\n\n  <ion-row align-items-center>\n\n    <ion-col col-8 offset-4 text-right>\n\n      <ion-row align-items-center>\n\n        <ion-col col-8 col-md-11 no-padding class="info-test" text-right>\n\n          <span class="name-test">Leonardo G. Catharin </span> Teste de front-end\n\n        </ion-col>\n\n        <ion-col col-4 col-md-1 no-padding text-right>\n\n          <span class="icon-account"> CB </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<ion-content class="content-marvel">\n\n  <ion-row>\n\n    <ion-col col-12 class="content-page">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-icon class="ion-icon-back" name="arrow-back" (click)="voltar()"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center>\n\n        <ion-col col-12 col-md-2>\n\n          <img *ngIf="character.thumbnail && character.thumbnail.path" [src]="character.thumbnail.path + \'.\' + character.thumbnail.extension" [alt]="character.name" class="character-img">\n\n        </ion-col>\n\n        <ion-col col-12 col-md-9>\n\n          <ion-row class="page-title">{{character.name}}</ion-row>\n\n          <ion-row>\n\n            <span class="character-info" *ngFor="let serie of character.series.items;let ix = index">\n\n              <span>\n\n                {{serie.name}}\n\n                <span *ngIf="ix != character.series.items.length - 1">,&nbsp;</span>\n\n              </span>\n\n            </span>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n        <ion-col col-12 class="page-subtitle">\n\n          Lista de histórias em quadrinhos\n\n          <hr>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row [hidden]="checking">\n\n        <ion-col col-12>\n\n          <ion-row *ngFor="let comic of comics">\n\n            <ion-col col-12>\n\n              <ion-row align-items-center>\n\n                <ion-col col-12 col-md-1>\n\n                  <img *ngIf="comic.thumbnail && comic.thumbnail.path" [src]="comic.thumbnail.path + \'.\' + comic.thumbnail.extension" [alt]="comic.title" class="comic-img">\n\n                </ion-col>\n\n                <ion-col col-12 col-md-11>\n\n                  <span class="comic-name">{{ comic.title }}</span> <br>\n\n                  <span class="comic-description">\n\n                    {{comic.description}}\n\n                  </span>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row [hidden]="!checking">\n\n        <ion-col col-12>\n\n          <loading></loading>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\projetos\aulas\ionic-marvel\src\pages\character\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider__["a" /* Provider */]])
    ], Detail);
    return Detail;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(366);




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_character_character__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_character_detail_detail__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_service_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_loading_loading__ = __webpack_require__(429);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_character_character__["a" /* Character */],
                __WEBPACK_IMPORTED_MODULE_14__pages_character_detail_detail__["a" /* Detail */],
                __WEBPACK_IMPORTED_MODULE_17__components_loading_loading__["a" /* Loading */]
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
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_character_character__["a" /* Character */], name: 'character', segment: 'character' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_character_detail_detail__["a" /* Detail */], name: 'detail', segment: 'character/detail/:id', defaultHistory: [__WEBPACK_IMPORTED_MODULE_13__pages_character_character__["a" /* Character */]] },
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_character_character__["a" /* Character */],
                __WEBPACK_IMPORTED_MODULE_14__pages_character_detail_detail__["a" /* Detail */],
                __WEBPACK_IMPORTED_MODULE_17__components_loading_loading__["a" /* Loading */]
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
                __WEBPACK_IMPORTED_MODULE_16__providers_provider__["a" /* Provider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_service_service__["a" /* Service */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_character_character__ = __webpack_require__(101);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_character_character__["a" /* Character */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\projetos\aulas\ionic-marvel\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\projetos\aulas\ionic-marvel\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 418:
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

/***/ 419:
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

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 201,
	"./af.js": 201,
	"./ar": 202,
	"./ar-dz": 203,
	"./ar-dz.js": 203,
	"./ar-kw": 204,
	"./ar-kw.js": 204,
	"./ar-ly": 205,
	"./ar-ly.js": 205,
	"./ar-ma": 206,
	"./ar-ma.js": 206,
	"./ar-sa": 207,
	"./ar-sa.js": 207,
	"./ar-tn": 208,
	"./ar-tn.js": 208,
	"./ar.js": 202,
	"./az": 209,
	"./az.js": 209,
	"./be": 210,
	"./be.js": 210,
	"./bg": 211,
	"./bg.js": 211,
	"./bm": 212,
	"./bm.js": 212,
	"./bn": 213,
	"./bn-bd": 214,
	"./bn-bd.js": 214,
	"./bn.js": 213,
	"./bo": 215,
	"./bo.js": 215,
	"./br": 216,
	"./br.js": 216,
	"./bs": 217,
	"./bs.js": 217,
	"./ca": 218,
	"./ca.js": 218,
	"./cs": 219,
	"./cs.js": 219,
	"./cv": 220,
	"./cv.js": 220,
	"./cy": 221,
	"./cy.js": 221,
	"./da": 222,
	"./da.js": 222,
	"./de": 223,
	"./de-at": 224,
	"./de-at.js": 224,
	"./de-ch": 225,
	"./de-ch.js": 225,
	"./de.js": 223,
	"./dv": 226,
	"./dv.js": 226,
	"./el": 227,
	"./el.js": 227,
	"./en-au": 228,
	"./en-au.js": 228,
	"./en-ca": 229,
	"./en-ca.js": 229,
	"./en-gb": 230,
	"./en-gb.js": 230,
	"./en-ie": 231,
	"./en-ie.js": 231,
	"./en-il": 232,
	"./en-il.js": 232,
	"./en-in": 233,
	"./en-in.js": 233,
	"./en-nz": 234,
	"./en-nz.js": 234,
	"./en-sg": 235,
	"./en-sg.js": 235,
	"./eo": 236,
	"./eo.js": 236,
	"./es": 237,
	"./es-do": 238,
	"./es-do.js": 238,
	"./es-mx": 239,
	"./es-mx.js": 239,
	"./es-us": 240,
	"./es-us.js": 240,
	"./es.js": 237,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fil": 245,
	"./fil.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./ga": 251,
	"./ga.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-deva": 254,
	"./gom-deva.js": 254,
	"./gom-latn": 255,
	"./gom-latn.js": 255,
	"./gu": 256,
	"./gu.js": 256,
	"./he": 257,
	"./he.js": 257,
	"./hi": 258,
	"./hi.js": 258,
	"./hr": 259,
	"./hr.js": 259,
	"./hu": 260,
	"./hu.js": 260,
	"./hy-am": 261,
	"./hy-am.js": 261,
	"./id": 262,
	"./id.js": 262,
	"./is": 263,
	"./is.js": 263,
	"./it": 264,
	"./it-ch": 265,
	"./it-ch.js": 265,
	"./it.js": 264,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ku": 273,
	"./ku.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mn": 283,
	"./mn.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./mt": 287,
	"./mt.js": 287,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./oc-lnc": 294,
	"./oc-lnc.js": 294,
	"./pa-in": 295,
	"./pa-in.js": 295,
	"./pl": 296,
	"./pl.js": 296,
	"./pt": 297,
	"./pt-br": 298,
	"./pt-br.js": 298,
	"./pt.js": 297,
	"./ro": 299,
	"./ro.js": 299,
	"./ru": 300,
	"./ru.js": 300,
	"./sd": 301,
	"./sd.js": 301,
	"./se": 302,
	"./se.js": 302,
	"./si": 303,
	"./si.js": 303,
	"./sk": 304,
	"./sk.js": 304,
	"./sl": 305,
	"./sl.js": 305,
	"./sq": 306,
	"./sq.js": 306,
	"./sr": 307,
	"./sr-cyrl": 308,
	"./sr-cyrl.js": 308,
	"./sr.js": 307,
	"./ss": 309,
	"./ss.js": 309,
	"./sv": 310,
	"./sv.js": 310,
	"./sw": 311,
	"./sw.js": 311,
	"./ta": 312,
	"./ta.js": 312,
	"./te": 313,
	"./te.js": 313,
	"./tet": 314,
	"./tet.js": 314,
	"./tg": 315,
	"./tg.js": 315,
	"./th": 316,
	"./th.js": 316,
	"./tk": 317,
	"./tk.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 322,
	"./tzm-latn": 323,
	"./tzm-latn.js": 323,
	"./tzm.js": 322,
	"./ug-cn": 324,
	"./ug-cn.js": 324,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-mo": 334,
	"./zh-mo.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
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
webpackContext.id = 426;

/***/ }),

/***/ 429:
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
            selector: "loading",template:/*ion-inline-start:"C:\projetos\aulas\ionic-marvel\src\components\loading\loading.html"*/'<ion-row>\n\n  <ion-col col-12>\n\n    <div align="center" class="g-carregando"> \n\n      <div class="g-carregando-animacao">\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-vermelha"> </div></div>\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-verde"> </div></div>\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-azul"> </div></div>\n\n        <div class="g-carregando-interno"><div class="g-carregando-bolas g-carregando-bola-preta"> </div></div>\n\n      </div>\n\n    </div> \n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\projetos\aulas\ionic-marvel\src\components\loading\loading.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map