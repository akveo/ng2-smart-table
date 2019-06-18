(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-examples-module-ngfactory"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/create-source.md":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/create-source.md ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "source: LocalDataSource; // add a property to the component\n\nconstructor() {\n  this.source = new LocalDataSource(this.data); // create the source\n}"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/custom-editor-module.md":
/*!************************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/custom-editor-module.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@NgModule({\n  imports: [\n    // ...\n  ],\n  entryComponents: [CustomEditorComponent, CustomRenderComponent],\n  declarations: [\n    // ...\n    CustomEditorComponent,\n    CustomRenderComponent,\n  ],\n})"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/hide-filters.md":
/*!****************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/hide-filters.md ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "settings = {\n  columns: {\n    id: {\n      title: 'ID',\n      filter: false\n    },\n    name: {\n      title: 'Full Name',\n      filter: false\n    },\n    username: {\n      title: 'User Name',\n      filter: false\n    },\n    email: {\n      title: 'Email',\n      filter: false\n    }\n  }\n};"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search-table.md":
/*!****************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/search-table.md ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "onSearch(query: string = '') {\n  this.source.setFilter([\n    // fields we want to include in the search\n    {\n      field: 'id',\n      search: query\n    },\n    {\n      field: 'name',\n      search: query\n    },\n    {\n      field: 'username',\n      search: query\n    },\n    {\n      field: 'email',\n      search: query\n    }\n  ], false); \n  // second parameter specifying whether to perform 'AND' or 'OR' search \n  // (meaning all columns should contain search query or at least one)\n  // 'AND' by default, so changing to 'OR' by setting false here\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search.md":
/*!**********************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/search.md ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({ \n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-full.md":
/*!***************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/source-full.md ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-source',\n  styles: [],\n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleSourceComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID',\n        filter: false\n      },\n      name: {\n        title: 'Full Name',\n        filter: false\n      },\n      username: {\n        title: 'User Name',\n        filter: false\n      },\n      email: {\n        title: 'Email',\n        filter: false\n      }\n    }\n  };\n  \n  data = [\n    // ... our data here\n  ];\n  \n  source: LocalDataSource;\n  \n  constructor() {\n    this.source = new LocalDataSource(this.data);\n  }\n\n  onSearch(query: string = '') {\n    this.source.setFilter([\n      // fields we want to include in the search\n      {\n        field: 'id',\n        search: query\n      },\n      {\n        field: 'name',\n        search: query\n      },\n      {\n        field: 'username',\n        search: query\n      },\n      {\n        field: 'email',\n        search: query\n      }\n    ], false);\n    // second parameter specifying whether to perform 'AND' or 'OR' search \n    // (meaning all columns should contain search query or at least one)\n    // 'AND' by default, so changing to 'OR' by setting false here\n  }\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-require.md":
/*!******************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/source-require.md ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-template.md":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/examples/snippets/source-template.md ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_AdvancedExamplesCustomEditorComponent, View_AdvancedExamplesCustomEditorComponent_0, View_AdvancedExamplesCustomEditorComponent_Host_0, AdvancedExamplesCustomEditorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedExamplesCustomEditorComponent", function() { return RenderType_AdvancedExamplesCustomEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExamplesCustomEditorComponent_0", function() { return View_AdvancedExamplesCustomEditorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExamplesCustomEditorComponent_Host_0", function() { return View_AdvancedExamplesCustomEditorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExamplesCustomEditorComponentNgFactory", function() { return AdvancedExamplesCustomEditorComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-example-custom-editor.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AdvancedExamplesCustomEditorComponent = [];
var RenderType_AdvancedExamplesCustomEditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdvancedExamplesCustomEditorComponent, data: {} });

function View_AdvancedExamplesCustomEditorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdvancedExamplesCustomEditorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "advanced-example-custom-editor", [], null, null, null, View_AdvancedExamplesCustomEditorComponent_0, RenderType_AdvancedExamplesCustomEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExamplesCustomEditorComponent"], [], null, null)], null, null); }
var AdvancedExamplesCustomEditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("advanced-example-custom-editor", _advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExamplesCustomEditorComponent"], View_AdvancedExamplesCustomEditorComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdvancedExamplesCustomEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExamplesCustomEditorComponent", function() { return AdvancedExamplesCustomEditorComponent; });
/* harmony import */ var _custom_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-editor.component */ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/* harmony import */ var _custom_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-render.component */ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts");
/* harmony import */ var _custom_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-filter.component */ "./src/app/pages/examples/custom-edit-view/custom-filter.component.ts");



var AdvancedExamplesCustomEditorComponent = /** @class */ (function () {
    function AdvancedExamplesCustomEditorComponent() {
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                link: '<a href="http://www.google.com">Google</a>',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    filter: {
                        type: 'custom',
                        component: _custom_filter_component__WEBPACK_IMPORTED_MODULE_2__["CustomFilterComponent"]
                    }
                },
                name: {
                    title: 'Full Name',
                    type: 'custom',
                    renderComponent: _custom_render_component__WEBPACK_IMPORTED_MODULE_1__["CustomRenderComponent"],
                },
                username: {
                    title: 'User Name',
                },
                link: {
                    title: 'Link',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: _custom_editor_component__WEBPACK_IMPORTED_MODULE_0__["CustomEditorComponent"],
                    },
                },
            },
        };
    }
    return AdvancedExamplesCustomEditorComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_AdvancedExamplesTypesComponent, View_AdvancedExamplesTypesComponent_0, View_AdvancedExamplesTypesComponent_Host_0, AdvancedExamplesTypesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedExamplesTypesComponent", function() { return RenderType_AdvancedExamplesTypesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExamplesTypesComponent_0", function() { return View_AdvancedExamplesTypesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExamplesTypesComponent_Host_0", function() { return View_AdvancedExamplesTypesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExamplesTypesComponentNgFactory", function() { return AdvancedExamplesTypesComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _advanced_example_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-example-types.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AdvancedExamplesTypesComponent = [];
var RenderType_AdvancedExamplesTypesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdvancedExamplesTypesComponent, data: {} });

function View_AdvancedExamplesTypesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdvancedExamplesTypesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "advanced-example-types", [], null, null, null, View_AdvancedExamplesTypesComponent_0, RenderType_AdvancedExamplesTypesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _advanced_example_types_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExamplesTypesComponent"], [], null, null)], null, null); }
var AdvancedExamplesTypesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("advanced-example-types", _advanced_example_types_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExamplesTypesComponent"], View_AdvancedExamplesTypesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdvancedExamplesTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExamplesTypesComponent", function() { return AdvancedExamplesTypesComponent; });
var AdvancedExamplesTypesComponent = /** @class */ (function () {
    function AdvancedExamplesTypesComponent() {
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                comments: 'Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.',
                passed: 'Yes',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                comments: "Vix iudico graecis in? Malis eirmod consectetuer duo ut?\n                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",
                passed: 'Yes',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                comments: 'Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.',
                passed: 'No',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                comments: 'Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                comments: "Quo viris appellantur an, pro id eirmod oblique iuvaret,\n                timeam omittam comprehensam ad eam? Eos id dico gubergren,\n                cum dicant qualisque ea, id vim ferri moderatius?",
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                comments: 'Audire appareat sententiae qui no. Sed no rebum vitae quidam.',
                passed: 'No',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                comments: "Mel dicat sanctus accusata ut! Eu sit choro vituperata,\n                qui cu quod gubergren elaboraret, mollis vulputate ex cum!",
                passed: 'Yes',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                comments: 'Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.',
                passed: 'No',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                comments: 'In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                comments: "Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.\n                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",
                passed: 'Yes',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
                comments: 'Lorem ipsum dolor sit amet, mea dolorum detraxit ea?',
                passed: 'No',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    editor: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'name',
                                titleField: 'name',
                                descriptionField: 'email',
                            },
                        },
                    },
                },
                username: {
                    title: 'User Name',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
                                    value: '<b>Samantha</b>',
                                    title: 'Samantha',
                                }],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    type: 'string',
                },
                comments: {
                    title: 'Comments',
                    editor: {
                        type: 'textarea',
                    },
                },
                passed: {
                    title: 'Passed',
                    editor: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                        },
                    },
                },
            },
        };
    }
    return AdvancedExamplesTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ngfactory.js ***!
  \**************************************************************************************************/
/*! exports provided: RenderType_ButtonViewComponent, View_ButtonViewComponent_0, View_ButtonViewComponent_Host_0, ButtonViewComponentNgFactory, RenderType_BasicExampleButtonViewComponent, View_BasicExampleButtonViewComponent_0, View_BasicExampleButtonViewComponent_Host_0, BasicExampleButtonViewComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ButtonViewComponent", function() { return RenderType_ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ButtonViewComponent_0", function() { return View_ButtonViewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ButtonViewComponent_Host_0", function() { return View_ButtonViewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonViewComponentNgFactory", function() { return ButtonViewComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicExampleButtonViewComponent", function() { return RenderType_BasicExampleButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleButtonViewComponent_0", function() { return View_BasicExampleButtonViewComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleButtonViewComponent_Host_0", function() { return View_BasicExampleButtonViewComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleButtonViewComponentNgFactory", function() { return BasicExampleButtonViewComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example-button-view.component */ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ButtonViewComponent = [];
var RenderType_ButtonViewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ButtonViewComponent, data: {} });

function View_ButtonViewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.renderValue; _ck(_v, 1, 0, currVal_0); }); }
function View_ButtonViewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button-view", [], null, null, null, View_ButtonViewComponent_0, RenderType_ButtonViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_1__["ButtonViewComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ButtonViewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("button-view", _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_1__["ButtonViewComponent"], View_ButtonViewComponent_Host_0, { value: "value", rowData: "rowData" }, { save: "save" }, []);

var styles_BasicExampleButtonViewComponent = [];
var RenderType_BasicExampleButtonViewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicExampleButtonViewComponent, data: {} });

function View_BasicExampleButtonViewComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_BasicExampleButtonViewComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "basic-example-button-view", [], null, null, null, View_BasicExampleButtonViewComponent_0, RenderType_BasicExampleButtonViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_1__["BasicExampleButtonViewComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BasicExampleButtonViewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("basic-example-button-view", _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_1__["BasicExampleButtonViewComponent"], View_BasicExampleButtonViewComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ButtonViewComponent, BasicExampleButtonViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonViewComponent", function() { return ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleButtonViewComponent", function() { return BasicExampleButtonViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var ButtonViewComponent = /** @class */ (function () {
    function ButtonViewComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonViewComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ButtonViewComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    return ButtonViewComponent;
}());

var BasicExampleButtonViewComponent = /** @class */ (function () {
    function BasicExampleButtonViewComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
                button: {
                    title: 'Button',
                    type: 'custom',
                    renderComponent: ButtonViewComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                            alert(row.name + " saved!");
                        });
                    }
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                button: 'Button #1',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                button: 'Button #2',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                button: 'Button #3',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                button: 'Button #4',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                button: 'Button #5',
            },
        ];
    }
    BasicExampleButtonViewComponent.prototype.ngOnInit = function () {
    };
    return BasicExampleButtonViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: RenderType_BasicExampleCustomActionsComponent, View_BasicExampleCustomActionsComponent_0, View_BasicExampleCustomActionsComponent_Host_0, BasicExampleCustomActionsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicExampleCustomActionsComponent", function() { return RenderType_BasicExampleCustomActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleCustomActionsComponent_0", function() { return View_BasicExampleCustomActionsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleCustomActionsComponent_Host_0", function() { return View_BasicExampleCustomActionsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleCustomActionsComponentNgFactory", function() { return BasicExampleCustomActionsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-custom-actions.component */ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_BasicExampleCustomActionsComponent = [];
var RenderType_BasicExampleCustomActionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicExampleCustomActionsComponent, data: {} });

function View_BasicExampleCustomActionsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, [[null, "custom"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("custom" === en)) {
        var pd_0 = (_co.onCustom($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, { custom: "custom" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_BasicExampleCustomActionsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "basic-example-custom-actions", [], null, null, null, View_BasicExampleCustomActionsComponent_0, RenderType_BasicExampleCustomActionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleCustomActionsComponent"], [], null, null)], null, null); }
var BasicExampleCustomActionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("basic-example-custom-actions", _basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleCustomActionsComponent"], View_BasicExampleCustomActionsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicExampleCustomActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleCustomActionsComponent", function() { return BasicExampleCustomActionsComponent; });
var BasicExampleCustomActionsComponent = /** @class */ (function () {
    function BasicExampleCustomActionsComponent() {
        this.settings = {
            actions: {
                custom: [
                    {
                        name: 'view',
                        title: 'View ',
                    },
                    {
                        name: 'edit',
                        title: 'Edit ',
                    },
                    {
                        name: 'delete',
                        title: 'Delete ',
                    },
                    {
                        name: 'duplicate',
                        title: 'Duplicate ',
                    },
                ],
            },
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                }
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
        ];
    }
    BasicExampleCustomActionsComponent.prototype.onCustom = function (event) {
        alert("Custom event '" + event.action + "' fired on row \u2116: " + event.data.id);
    };
    return BasicExampleCustomActionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ngfactory.js ***!
  \**************************************************************************************************/
/*! exports provided: RenderType_CustomViewEditExamplesComponent, View_CustomViewEditExamplesComponent_0, View_CustomViewEditExamplesComponent_Host_0, CustomViewEditExamplesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomViewEditExamplesComponent", function() { return RenderType_CustomViewEditExamplesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomViewEditExamplesComponent_0", function() { return View_CustomViewEditExamplesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomViewEditExamplesComponent_Host_0", function() { return View_CustomViewEditExamplesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomViewEditExamplesComponentNgFactory", function() { return CustomViewEditExamplesComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advanced_example_types_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-example-types.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ngfactory.js");
/* harmony import */ var _advanced_example_types_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-example-types.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts");
/* harmony import */ var _advanced_example_custom_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-example-custom-editor.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ngfactory.js");
/* harmony import */ var _advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-example-custom-editor.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts");
/* harmony import */ var _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/highlight.directive */ "./src/app/shared/directives/highlight.directive.ts");
/* harmony import */ var _basic_example_button_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-example-button-view.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ngfactory.js");
/* harmony import */ var _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-example-button-view.component */ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts");
/* harmony import */ var _basic_example_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-example-custom-actions.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ngfactory.js");
/* harmony import */ var _basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-example-custom-actions.component */ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts");
/* harmony import */ var _custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-edit-view-examples.component */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_CustomViewEditExamplesComponent = [];
var RenderType_CustomViewEditExamplesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomViewEditExamplesComponent, data: {} });

function View_CustomViewEditExamplesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Customized edit and view cells examples"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#types"], ["id", "types"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Select, Completer and Textarea column types"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" An example on how to use select, completer, textarea column types:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "advanced-example-types", [], null, null, null, _advanced_example_types_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AdvancedExamplesTypesComponent_0"], _advanced_example_types_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AdvancedExamplesTypesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, null, 0, _advanced_example_types_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedExamplesTypesComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#custom-editor-renderer"], ["id", "custom-editor-renderer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Custom editor/renderer column type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["An example on how to use a custom cell editor and/or custom cell renderer:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "advanced-example-custom-editor", [], null, null, null, _advanced_example_custom_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AdvancedExamplesCustomEditorComponent_0"], _advanced_example_custom_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AdvancedExamplesCustomEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 49152, null, 0, _advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_4__["AdvancedExamplesCustomEditorComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["When implementing a custom editor or renderer remember to add it to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["entryComponents"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" and to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["declarations"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" part of your module"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_5__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 18, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["For the custom cell editor:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" To inherit the methods needed to interact with the table you can either extend the component with the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DefaultEditor"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" class or implement the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Editor"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" interface and reproduce the same methods on your component."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["For the custom cell renderer:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" In this example the custom component is applying a "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [".toUpperCase()"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" to one of the columns. You can implement the ViewCell interface to make sure you are setting up your component correctly.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#buttonview"], ["id", "buttonview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Button View\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["An example on how to use custom button view:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "basic-example-button-view", [], null, null, null, _basic_example_button_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_BasicExampleButtonViewComponent_0"], _basic_example_button_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_BasicExampleButtonViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 114688, null, 0, _basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_7__["BasicExampleButtonViewComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#customactions"], ["id", "multiselect"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Custom actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["An example on how to use custom actions:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/basic-example-custom-actions.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 1, "basic-example-custom-actions", [], null, null, null, _basic_example_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_BasicExampleCustomActionsComponent_0"], _basic_example_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_BasicExampleCustomActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](78, 49152, null, 0, _basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_9__["BasicExampleCustomActionsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 67, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.snippets.customEditorModule; _ck(_v, 36, 0, currVal_0); }); }
function View_CustomViewEditExamplesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "custom-edit-view-examples", [], null, null, null, View_CustomViewEditExamplesComponent_0, RenderType_CustomViewEditExamplesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_10__["CustomViewEditExamplesComponent"], [], null, null)], null, null); }
var CustomViewEditExamplesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("custom-edit-view-examples", _custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_10__["CustomViewEditExamplesComponent"], View_CustomViewEditExamplesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CustomViewEditExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomViewEditExamplesComponent", function() { return CustomViewEditExamplesComponent; });
var CustomViewEditExamplesComponent = /** @class */ (function () {
    function CustomViewEditExamplesComponent() {
        this.snippets = {
            customEditorModule: __webpack_require__(/*! raw-loader!../snippets/custom-editor-module.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/custom-editor-module.md"),
        };
    }
    return CustomViewEditExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-editor.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_CustomEditorComponent, View_CustomEditorComponent_0, View_CustomEditorComponent_Host_0, CustomEditorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomEditorComponent", function() { return RenderType_CustomEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomEditorComponent_0", function() { return View_CustomEditorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomEditorComponent_Host_0", function() { return View_CustomEditorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEditorComponentNgFactory", function() { return CustomEditorComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-editor.component */ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_CustomEditorComponent = [];
var RenderType_CustomEditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomEditorComponent, data: {} });

function View_CustomEditorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { name: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, { url: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, { htmlValue: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Name: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [[1, 0], ["name", 1]], null, 2, "input", [["class", "form-control short-input"]], [[8, "name", 0], [8, "disabled", 0], [8, "placeholder", 0]], [[null, "click"], [null, "keyup"], [null, "keydown.enter"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (_co.updateValue() !== false);
        ad = (pd_1 && ad);
    } if (("keydown.enter" === en)) {
        var pd_2 = (_co.onEdited.emit($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.esc" === en)) {
        var pd_3 = (_co.onStopEditing.emit() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Url: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, [[2, 0], ["url", 1]], null, 2, "input", [["class", "form-control short-input"]], [[8, "name", 0], [8, "disabled", 0], [8, "placeholder", 0]], [[null, "click"], [null, "keyup"], [null, "keydown.enter"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (_co.updateValue() !== false);
        ad = (pd_1 && ad);
    } if (("keydown.enter" === en)) {
        var pd_2 = (_co.onEdited.emit($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown.esc" === en)) {
        var pd_3 = (_co.onStopEditing.emit() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, [[3, 0], ["htmlValue", 1]], null, 0, "div", [], [[8, "hidden", 0], [8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "form-control short-input"; var currVal_4 = _co.inputClass; _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_8 = "form-control short-input"; var currVal_9 = _co.inputClass; _ck(_v, 11, 0, currVal_8, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.cell.getId(); var currVal_1 = !_co.cell.isEditable(); var currVal_2 = _co.cell.getTitle(); _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _co.cell.getId(); var currVal_6 = !_co.cell.isEditable(); var currVal_7 = _co.cell.getTitle(); _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7); var currVal_10 = true; var currVal_11 = _co.cell.getValue(); _ck(_v, 12, 0, currVal_10, currVal_11); }); }
function View_CustomEditorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CustomEditorComponent_0, RenderType_CustomEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, _custom_editor_component__WEBPACK_IMPORTED_MODULE_2__["CustomEditorComponent"], [], null, null)], null, null); }
var CustomEditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _custom_editor_component__WEBPACK_IMPORTED_MODULE_2__["CustomEditorComponent"], View_CustomEditorComponent_Host_0, { cell: "cell", inputClass: "inputClass" }, { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" }, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEditorComponent", function() { return CustomEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");



var CustomEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomEditorComponent, _super);
    function CustomEditorComponent() {
        return _super.call(this) || this;
    }
    CustomEditorComponent.prototype.ngAfterViewInit = function () {
        if (this.cell.newValue !== '') {
            this.name.nativeElement.value = this.getUrlName();
            this.url.nativeElement.value = this.getUrlHref();
        }
    };
    CustomEditorComponent.prototype.updateValue = function () {
        var href = this.url.nativeElement.value;
        var name = this.name.nativeElement.value;
        this.cell.newValue = "<a href='" + href + "'>" + name + "</a>";
    };
    CustomEditorComponent.prototype.getUrlName = function () {
        return this.htmlValue.nativeElement.innerText;
    };
    CustomEditorComponent.prototype.getUrlHref = function () {
        return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
    };
    return CustomEditorComponent;
}(ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["DefaultEditor"]));



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-filter.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-filter.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_CustomFilterComponent, View_CustomFilterComponent_0, View_CustomFilterComponent_Host_0, CustomFilterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomFilterComponent", function() { return RenderType_CustomFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomFilterComponent_0", function() { return View_CustomFilterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomFilterComponent_Host_0", function() { return View_CustomFilterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFilterComponentNgFactory", function() { return CustomFilterComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-filter.component */ "./src/app/pages/examples/custom-edit-view/custom-filter.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_CustomFilterComponent = [];
var RenderType_CustomFilterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomFilterComponent, data: {} });

function View_CustomFilterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [["number", 1]], null, 8, "input", [["class", "form-control"], ["type", "number"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = "form-control"; var currVal_9 = _co.inputClass; _ck(_v, 2, 0, currVal_8, currVal_9); var currVal_10 = _co.inputControl; _ck(_v, 6, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.column.title; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_CustomFilterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CustomFilterComponent_0, RenderType_CustomFilterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 0, _custom_filter_component__WEBPACK_IMPORTED_MODULE_3__["CustomFilterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomFilterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _custom_filter_component__WEBPACK_IMPORTED_MODULE_3__["CustomFilterComponent"], View_CustomFilterComponent_Host_0, { query: "query", inputClass: "inputClass", column: "column" }, { filter: "filter" }, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-filter.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-filter.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFilterComponent", function() { return CustomFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");





var CustomFilterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomFilterComponent, _super);
    function CustomFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        return _this;
    }
    CustomFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.delay))
            .subscribe(function (value) {
            _this.query = value !== null ? _this.inputControl.value.toString() : '';
            _this.setFilter();
        });
    };
    CustomFilterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.query) {
            this.query = changes.query.currentValue;
            this.inputControl.setValue(this.query);
        }
    };
    return CustomFilterComponent;
}(ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["DefaultFilter"]));



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-render.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-render.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_CustomRenderComponent, View_CustomRenderComponent_0, View_CustomRenderComponent_Host_0, CustomRenderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomRenderComponent", function() { return RenderType_CustomRenderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomRenderComponent_0", function() { return View_CustomRenderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomRenderComponent_Host_0", function() { return View_CustomRenderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRenderComponentNgFactory", function() { return CustomRenderComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-render.component */ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_CustomRenderComponent = [];
var RenderType_CustomRenderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomRenderComponent, data: {} });

function View_CustomRenderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](0, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.renderValue; _ck(_v, 0, 0, currVal_0); }); }
function View_CustomRenderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CustomRenderComponent_0, RenderType_CustomRenderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _custom_render_component__WEBPACK_IMPORTED_MODULE_1__["CustomRenderComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomRenderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _custom_render_component__WEBPACK_IMPORTED_MODULE_1__["CustomRenderComponent"], View_CustomRenderComponent_Host_0, { value: "value", rowData: "rowData" }, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-render.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRenderComponent", function() { return CustomRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var CustomRenderComponent = /** @class */ (function () {
    function CustomRenderComponent() {
    }
    CustomRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    return CustomRenderComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/examples.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/examples/examples.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_ExamplesComponent, View_ExamplesComponent_0, View_ExamplesComponent_Host_0, ExamplesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ExamplesComponent", function() { return RenderType_ExamplesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExamplesComponent_0", function() { return View_ExamplesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ExamplesComponent_Host_0", function() { return View_ExamplesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponentNgFactory", function() { return ExamplesComponentNgFactory; });
/* harmony import */ var _examples_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples.component.scss.shim.ngstyle */ "./src/app/pages/examples/examples.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component.ngfactory */ "./src/app/shared/components/header/header.component.ngfactory.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples.component */ "./src/app/pages/examples/examples.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ExamplesComponent = [_examples_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ExamplesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ExamplesComponent, data: {} });

function View_ExamplesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "header-component", [["tagline", "Examples"]], null, null, null, _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [], { tagline: [0, "tagline"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 35, "div", [["class", "main-content with-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 31, "nav", [["class", "fixed-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Examples"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 28, "ul", [["class", "examples-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "a", [["routerLink", "./using-filters"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Standalone & Advanced filters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "a", [["routerLink", "./populate-from-server"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loading data from server"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 5, "a", [["routerLink", "./custom-editors-viewers"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Custom editors and viewers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "a", [["routerLink", "./various"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Various"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "div", [["class", "main-content-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var currVal_0 = "Examples"; _ck(_v, 1, 0, currVal_0); var currVal_3 = "./using-filters"; _ck(_v, 9, 0, currVal_3); var currVal_4 = "active"; _ck(_v, 10, 0, currVal_4); var currVal_7 = "./populate-from-server"; _ck(_v, 16, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 17, 0, currVal_8); var currVal_11 = "./custom-editors-viewers"; _ck(_v, 23, 0, currVal_11); var currVal_12 = "active"; _ck(_v, 24, 0, currVal_12); var currVal_15 = "./various"; _ck(_v, 30, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 31, 0, currVal_16); _ck(_v, 37, 0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href; _ck(_v, 8, 0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href; _ck(_v, 15, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href; _ck(_v, 22, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).target; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).href; _ck(_v, 29, 0, currVal_13, currVal_14); }); }
function View_ExamplesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "examples", [], null, null, null, View_ExamplesComponent_0, RenderType_ExamplesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"], [], null, null)], null, null); }
var ExamplesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("examples", _examples_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesComponent"], View_ExamplesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/examples.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/examples/examples.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".with-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.with-sidebar[_ngcontent-%COMP%]   .main-content-body[_ngcontent-%COMP%] {\n  padding-left: 16rem;\n}\n.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 1rem;\n  margin-top: 2rem;\n  position: fixed;\n  top: 0;\n  padding-top: 290px;\n  width: 16rem;\n  font-size: 0.875rem;\n}\n.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  list-style: none;\n  margin-bottom: 0.875rem;\n}\n.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n}\n.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%] {\n  display: block;\n}\n.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .examples-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@media screen and (max-width: 64em) {\n  .with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .with-sidebar[_ngcontent-%COMP%] {\n    padding: 2rem 4rem;\n  }\n}\n@media screen and (max-width: 42em) {\n  .with-sidebar[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXhhL0RldmVsb3BtZW50L1Byb2plY3RzL0FrdmVvL25nMi1zbWFydC10YWJsZS9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvcGFnZXMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvcGFnZXMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNETjtBRElJO0VBQ0UsZUFBQTtFQUNBLE1BQUE7QUNGTjtBRElNO0VBQ0UsY0FBQTtBQ0ZSO0FET007RUFDRSxpQkFBQTtBQ0xSO0FEV0E7RUFFSTtJQUNFLGFBQUE7RUNUSjtBQUNGO0FEYUE7RUFDRTtJQUNFLGtCQUFBO0VDWEY7QUFDRjtBRGNBO0VBQ0U7SUFDRSxrQkFBQTtFQ1pGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL3BhZ2VzL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpdGgtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubWFpbi1jb250ZW50LWJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMTZyZW07XG4gIH1cblxuICAuZml4ZWQtc2lkZWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMjkwcHg7XG4gICAgd2lkdGg6IDE2cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG5cbiAgICAuYmFjay10b3Age1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XG4gICAgfVxuXG4gICAgJi5zY3JvbGxlZCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG5cbiAgICAgIC5iYWNrLXRvcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5leGFtcGxlcy1tZW51IHtcbiAgICAgIGEuYWN0aXZlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLndpdGgtc2lkZWJhciB7XG4gICAgLmZpeGVkLXNpZGViYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLndpdGgtc2lkZWJhciB7XG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyZW0pIHtcbiAgLndpdGgtc2lkZWJhciB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG59XG4iLCIud2l0aC1zaWRlYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndpdGgtc2lkZWJhciAubWFpbi1jb250ZW50LWJvZHkge1xuICBwYWRkaW5nLWxlZnQ6IDE2cmVtO1xufVxuLndpdGgtc2lkZWJhciAuZml4ZWQtc2lkZWJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMjkwcHg7XG4gIHdpZHRoOiAxNnJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi53aXRoLXNpZGViYXIgLmZpeGVkLXNpZGViYXIgLmJhY2stdG9wIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud2l0aC1zaWRlYmFyIC5maXhlZC1zaWRlYmFyIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTtcbn1cbi53aXRoLXNpZGViYXIgLmZpeGVkLXNpZGViYXIuc2Nyb2xsZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cbi53aXRoLXNpZGViYXIgLmZpeGVkLXNpZGViYXIuc2Nyb2xsZWQgLmJhY2stdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2l0aC1zaWRlYmFyIC5maXhlZC1zaWRlYmFyIC5leGFtcGxlcy1tZW51IGEuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLndpdGgtc2lkZWJhciAuZml4ZWQtc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDJlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLndpdGgtc2lkZWJhciB7XG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MmVtKSB7XG4gIC53aXRoLXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/examples/examples.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/examples/examples.component.ts ***!
  \******************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/examples.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/pages/examples/examples.module.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: ExamplesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModuleNgFactory", function() { return ExamplesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.module */ "./src/app/pages/examples/examples.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples.component.ngfactory */ "./src/app/pages/examples/examples.component.ngfactory.js");
/* harmony import */ var _filter_filter_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/filter-examples.component.ngfactory */ "./src/app/pages/examples/filter/filter-examples.component.ngfactory.js");
/* harmony import */ var _server_server_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/server-examples.component.ngfactory */ "./src/app/pages/examples/server/server-examples.component.ngfactory.js");
/* harmony import */ var _custom_edit_view_custom_edit_view_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-edit-view/custom-edit-view-examples.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ngfactory.js");
/* harmony import */ var _various_various_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./various/various-examples.component.ngfactory */ "./src/app/pages/examples/various/various-examples.component.ngfactory.js");
/* harmony import */ var _custom_edit_view_custom_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-edit-view/custom-editor.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ngfactory.js");
/* harmony import */ var _custom_edit_view_custom_render_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-edit-view/custom-render.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/custom-render.component.ngfactory.js");
/* harmony import */ var _custom_edit_view_custom_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-edit-view/custom-filter.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/custom-filter.component.ngfactory.js");
/* harmony import */ var _custom_edit_view_basic_example_button_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-edit-view/basic-example-button-view.component.ngfactory */ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-completer */ "../../node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples.component */ "./src/app/pages/examples/examples.component.ts");
/* harmony import */ var _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./filter/filter-examples.component */ "./src/app/pages/examples/filter/filter-examples.component.ts");
/* harmony import */ var _server_server_examples_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./server/server-examples.component */ "./src/app/pages/examples/server/server-examples.component.ts");
/* harmony import */ var _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./custom-edit-view/custom-edit-view-examples.component */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/* harmony import */ var _various_various_examples_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./various/various-examples.component */ "./src/app/pages/examples/various/various-examples.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var ExamplesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_examples_module__WEBPACK_IMPORTED_MODULE_1__["ExamplesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ExamplesComponentNgFactory"], _filter_filter_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FilterExamplesComponentNgFactory"], _server_server_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ServerExamplesComponentNgFactory"], _custom_edit_view_custom_edit_view_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CustomViewEditExamplesComponentNgFactory"], _various_various_examples_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["VariousExamplesComponentNgFactory"], _custom_edit_view_custom_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["CustomEditorComponentNgFactory"], _custom_edit_view_custom_render_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CustomRenderComponentNgFactory"], _custom_edit_view_custom_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CustomFilterComponentNgFactory"], _custom_edit_view_basic_example_button_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["ButtonViewComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_15__["LocalDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_15__["LocalDataFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_15__["RemoteDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_15__["RemoteDataFactory"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_15__["CompleterService"], ng2_completer__WEBPACK_IMPORTED_MODULE_15__["CompleterService"], [ng2_completer__WEBPACK_IMPORTED_MODULE_15__["LocalDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_15__["RemoteDataFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_completer__WEBPACK_IMPORTED_MODULE_15__["Ng2CompleterModule"], ng2_completer__WEBPACK_IMPORTED_MODULE_15__["Ng2CompleterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵa"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵn"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵn"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵw"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵy"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵbd"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["Ng2SmartTableModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__["Ng2SmartTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _examples_module__WEBPACK_IMPORTED_MODULE_1__["ExamplesModule"], _examples_module__WEBPACK_IMPORTED_MODULE_1__["ExamplesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () { return [[{ path: "", component: _examples_component__WEBPACK_IMPORTED_MODULE_19__["ExamplesComponent"], children: [{ path: "", redirectTo: "using-filters" }, { path: "using-filters", component: _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_20__["FilterExamplesComponent"] }, { path: "populate-from-server", component: _server_server_examples_component__WEBPACK_IMPORTED_MODULE_21__["ServerExamplesComponent"] }, { path: "custom-editors-viewers", component: _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_22__["CustomViewEditExamplesComponent"] }, { path: "various", component: _various_various_examples_component__WEBPACK_IMPORTED_MODULE_23__["VariousExamplesComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/pages/examples/examples.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/examples/examples.module.ts ***!
  \***************************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _filter_advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/advanced-example-filters.component */ "./src/app/pages/examples/filter/advanced-example-filters.component.ts");
/* harmony import */ var _various_advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./various/advanced-example-confirm.component */ "./src/app/pages/examples/various/advanced-example-confirm.component.ts");
/* harmony import */ var _custom_edit_view_advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-edit-view/advanced-example-custom-editor.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts");
/* harmony import */ var _custom_edit_view_advanced_example_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-edit-view/advanced-example-types.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts");
/* harmony import */ var _server_advanced_example_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/advanced-example-server.component */ "./src/app/pages/examples/server/advanced-example-server.component.ts");
/* harmony import */ var _server_basic_example_load_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/basic-example-load.component */ "./src/app/pages/examples/server/basic-example-load.component.ts");
/* harmony import */ var _various_basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./various/basic-example-multi-select.component */ "./src/app/pages/examples/various/basic-example-multi-select.component.ts");
/* harmony import */ var _custom_edit_view_custom_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-edit-view/custom-editor.component */ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/* harmony import */ var _filter_basic_example_source_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter/basic-example-source.component */ "./src/app/pages/examples/filter/basic-example-source.component.ts");
/* harmony import */ var _custom_edit_view_custom_render_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-edit-view/custom-render.component */ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts");
/* harmony import */ var _custom_edit_view_custom_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-edit-view/custom-filter.component */ "./src/app/pages/examples/custom-edit-view/custom-filter.component.ts");
/* harmony import */ var _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter/filter-examples.component */ "./src/app/pages/examples/filter/filter-examples.component.ts");
/* harmony import */ var _server_server_examples_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server/server-examples.component */ "./src/app/pages/examples/server/server-examples.component.ts");
/* harmony import */ var _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-edit-view/custom-edit-view-examples.component */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/* harmony import */ var _custom_edit_view_basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom-edit-view/basic-example-custom-actions.component */ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts");
/* harmony import */ var _various_various_examples_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./various/various-examples.component */ "./src/app/pages/examples/various/various-examples.component.ts");
/* harmony import */ var _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-edit-view/basic-example-button-view.component */ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts");

















var EXAMPLES_COMPONENTS = [
    _filter_advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_0__["AdvancedExampleFiltersComponent"],
    _various_advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_1__["AdvancedExampleConfirmComponent"],
    _custom_edit_view_advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedExamplesCustomEditorComponent"],
    _custom_edit_view_advanced_example_types_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExamplesTypesComponent"],
    _server_advanced_example_server_component__WEBPACK_IMPORTED_MODULE_4__["AdvancedExampleServerComponent"],
    _server_basic_example_load_component__WEBPACK_IMPORTED_MODULE_5__["BasicExampleLoadComponent"],
    _various_basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_6__["BasicExampleMultiSelectComponent"],
    _filter_basic_example_source_component__WEBPACK_IMPORTED_MODULE_8__["BasicExampleSourceComponent"],
    _custom_edit_view_custom_editor_component__WEBPACK_IMPORTED_MODULE_7__["CustomEditorComponent"],
    _custom_edit_view_custom_render_component__WEBPACK_IMPORTED_MODULE_9__["CustomRenderComponent"],
    _custom_edit_view_custom_filter_component__WEBPACK_IMPORTED_MODULE_10__["CustomFilterComponent"],
    _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_11__["FilterExamplesComponent"],
    _server_server_examples_component__WEBPACK_IMPORTED_MODULE_12__["ServerExamplesComponent"],
    _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_13__["CustomViewEditExamplesComponent"],
    _various_various_examples_component__WEBPACK_IMPORTED_MODULE_15__["VariousExamplesComponent"],
    _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_16__["BasicExampleButtonViewComponent"],
    _custom_edit_view_basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_14__["BasicExampleCustomActionsComponent"],
    _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_16__["ButtonViewComponent"],
];
var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/pages/examples/filter/advanced-example-filters.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/examples/filter/advanced-example-filters.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: RenderType_AdvancedExampleFiltersComponent, View_AdvancedExampleFiltersComponent_0, View_AdvancedExampleFiltersComponent_Host_0, AdvancedExampleFiltersComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedExampleFiltersComponent", function() { return RenderType_AdvancedExampleFiltersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExampleFiltersComponent_0", function() { return View_AdvancedExampleFiltersComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExampleFiltersComponent_Host_0", function() { return View_AdvancedExampleFiltersComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleFiltersComponentNgFactory", function() { return AdvancedExampleFiltersComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-example-filters.component */ "./src/app/pages/examples/filter/advanced-example-filters.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AdvancedExampleFiltersComponent = [];
var RenderType_AdvancedExampleFiltersComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdvancedExampleFiltersComponent, data: {} });

function View_AdvancedExampleFiltersComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdvancedExampleFiltersComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "advanced-example-filters", [], null, null, null, View_AdvancedExampleFiltersComponent_0, RenderType_AdvancedExampleFiltersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExampleFiltersComponent"], [], null, null)], null, null); }
var AdvancedExampleFiltersComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("advanced-example-filters", _advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExampleFiltersComponent"], View_AdvancedExampleFiltersComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/filter/advanced-example-filters.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/examples/filter/advanced-example-filters.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdvancedExampleFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleFiltersComponent", function() { return AdvancedExampleFiltersComponent; });
var AdvancedExampleFiltersComponent = /** @class */ (function () {
    function AdvancedExampleFiltersComponent() {
        this.data = [
            {
                id: 4,
                name: 'Patricia Lebsack',
                email: 'Julianne.OConner@kory.org',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                email: 'Lucio_Hettinger@annie.ca',
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                email: 'Karley_Dach@jasper.info',
                passed: 'Yes',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                email: 'Telly.Hoeger@billy.biz',
                passed: 'No',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                email: 'Sherwood@rosamond.me',
                passed: 'Yes',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                email: 'Chaim_McDermott@dana.io',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                email: 'Rey.Padberg@karina.biz',
                passed: 'No',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                email: 'Rey.Padberg@rosamond.biz',
                passed: 'Yes',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Select...',
                            list: [
                                { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                                { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                                { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
                            ],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    filter: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'email',
                                titleField: 'email',
                            },
                        },
                    },
                },
                passed: {
                    title: 'Passed',
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                            resetText: 'clear',
                        },
                    },
                },
            },
        };
    }
    return AdvancedExampleFiltersComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/filter/basic-example-source.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/examples/filter/basic-example-source.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_BasicExampleSourceComponent, View_BasicExampleSourceComponent_0, View_BasicExampleSourceComponent_Host_0, BasicExampleSourceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicExampleSourceComponent", function() { return RenderType_BasicExampleSourceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleSourceComponent_0", function() { return View_BasicExampleSourceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleSourceComponent_Host_0", function() { return View_BasicExampleSourceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleSourceComponentNgFactory", function() { return BasicExampleSourceComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _basic_example_source_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-source.component */ "./src/app/pages/examples/filter/basic-example-source.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_BasicExampleSourceComponent = [];
var RenderType_BasicExampleSourceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicExampleSourceComponent, data: {} });

function View_BasicExampleSourceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [["search", 1]], null, 0, "input", [["class", "search"], ["placeholder", "Search..."], ["type", "text"]], null, [[null, "keydown.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown.enter" === en)) {
        var pd_0 = (_co.onSearch(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.source; var currVal_1 = _co.settings; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_BasicExampleSourceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "basic-example-source", [], null, null, null, View_BasicExampleSourceComponent_0, RenderType_BasicExampleSourceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _basic_example_source_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleSourceComponent"], [], null, null)], null, null); }
var BasicExampleSourceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("basic-example-source", _basic_example_source_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleSourceComponent"], View_BasicExampleSourceComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/filter/basic-example-source.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/examples/filter/basic-example-source.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicExampleSourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleSourceComponent", function() { return BasicExampleSourceComponent; });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");

var BasicExampleSourceComponent = /** @class */ (function () {
    function BasicExampleSourceComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    filter: false,
                },
                name: {
                    title: 'Full Name',
                    filter: false,
                },
                username: {
                    title: 'User Name',
                    filter: false,
                },
                email: {
                    title: 'Email',
                    filter: false,
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
            },
        ];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"](this.data);
    }
    BasicExampleSourceComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
            {
                field: 'username',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    return BasicExampleSourceComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/filter/filter-examples.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/pages/examples/filter/filter-examples.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_FilterExamplesComponent, View_FilterExamplesComponent_0, View_FilterExamplesComponent_Host_0, FilterExamplesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FilterExamplesComponent", function() { return RenderType_FilterExamplesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FilterExamplesComponent_0", function() { return View_FilterExamplesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FilterExamplesComponent_Host_0", function() { return View_FilterExamplesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExamplesComponentNgFactory", function() { return FilterExamplesComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/highlight.directive */ "./src/app/shared/directives/highlight.directive.ts");
/* harmony import */ var _basic_example_source_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-example-source.component.ngfactory */ "./src/app/pages/examples/filter/basic-example-source.component.ngfactory.js");
/* harmony import */ var _basic_example_source_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-source.component */ "./src/app/pages/examples/filter/basic-example-source.component.ts");
/* harmony import */ var _advanced_example_filters_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-example-filters.component.ngfactory */ "./src/app/pages/examples/filter/advanced-example-filters.component.ngfactory.js");
/* harmony import */ var _advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced-example-filters.component */ "./src/app/pages/examples/filter/advanced-example-filters.component.ts");
/* harmony import */ var _filter_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-examples.component */ "./src/app/pages/examples/filter/filter-examples.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_FilterExamplesComponent = [];
var RenderType_FilterExamplesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_FilterExamplesComponent, data: {} });

function View_FilterExamplesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Customized filters examples"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#separate-filter"], ["id", "separate-filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Standalone Filter Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Say you don't need to have a filter field in the each table column or the requirements says that search field should be placed outside of the table?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Fortunately this is super easy to achieve, to do this we need to slightly modify our basic component example.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 3, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#data-source"], ["id", "data-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Data Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" First thing you need to know is that all the data operations against the table "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["must"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" be done using the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["DataSource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" table property. DataSource is an abstraction around your data which allows you easily modify the table data or subscribe to events to modify the table behaviour.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" To access the DataSource we either can take it from the table or pass it instead of our "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["data array"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". Let's do the second option as it requires less code and is more demonstrative. Let's import the DataSource class by modifying the import statement:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 9, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Note that the import now contains a "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["LocalDataSource"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" class (the word "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Local"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" here means that the data is processed locally in a browser, not on the server side)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Then let's create a DataSource instance and pass our data array into it as a constructor parameter:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](47, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Now let's pass the source to the table instead of the data array:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](55, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" At this point if you look at the result there will be no difference comparing to the first example. Basically if you pass an array to the table component first thing it will do is wrap LocalDataSource object around your array as we did here manually."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Now, having the DataSource we basically could change the table data in any way we need to - filter it, sort, paginate to some page, create/delete/modify the rows. In our example we need to be able to filter the data outside of the table, firstly let's add a search filed to the template with a listener:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](65, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And the listener code which asks the DataSource to filter the data:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](73, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Last thing, let's hide the default table filters to not conflict with our standalone one:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](81, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And done! Now the table has a standalone search field:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "basic-example-source", [], null, null, null, _basic_example_source_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BasicExampleSourceComponent_0"], _basic_example_source_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BasicExampleSourceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 49152, null, 0, _basic_example_source_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleSourceComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Same way you can modify the data of the table, for example by adding a row from a third party form or listening to some external event. Here's a full component code:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 8, "pre", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/basic-example-source.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](97, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#filters"], ["id", "filters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Checkbox, Select and Completer filter types"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" An example on how to use the built-in column filter types:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/advanced-example-filters.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 1, "advanced-example-filters", [], null, null, null, _advanced_example_filters_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AdvancedExampleFiltersComponent_0"], _advanced_example_filters_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AdvancedExampleFiltersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](109, 49152, null, 0, _advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_5__["AdvancedExampleFiltersComponent"], [], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.snippets.sourceRequire; _ck(_v, 31, 0, currVal_0); var currVal_1 = _co.snippets.createSource; _ck(_v, 47, 0, currVal_1); var currVal_2 = _co.snippets.sourceTemplate; _ck(_v, 55, 0, currVal_2); var currVal_3 = _co.snippets.search; _ck(_v, 65, 0, currVal_3); var currVal_4 = _co.snippets.searchTable; _ck(_v, 73, 0, currVal_4); var currVal_5 = _co.snippets.hideFilters; _ck(_v, 81, 0, currVal_5); var currVal_6 = _co.snippets.sourceFull; _ck(_v, 97, 0, currVal_6); }); }
function View_FilterExamplesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "filter-examples", [], null, null, null, View_FilterExamplesComponent_0, RenderType_FilterExamplesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _filter_examples_component__WEBPACK_IMPORTED_MODULE_6__["FilterExamplesComponent"], [], null, null)], null, null); }
var FilterExamplesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("filter-examples", _filter_examples_component__WEBPACK_IMPORTED_MODULE_6__["FilterExamplesComponent"], View_FilterExamplesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/filter/filter-examples.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/examples/filter/filter-examples.component.ts ***!
  \********************************************************************/
/*! exports provided: FilterExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExamplesComponent", function() { return FilterExamplesComponent; });
var FilterExamplesComponent = /** @class */ (function () {
    function FilterExamplesComponent() {
        this.snippets = {
            sourceRequire: __webpack_require__(/*! raw-loader!../snippets/source-require.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-require.md"),
            createSource: __webpack_require__(/*! raw-loader!../snippets/create-source.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/create-source.md"),
            sourceTemplate: __webpack_require__(/*! raw-loader!../snippets/source-template.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-template.md"),
            search: __webpack_require__(/*! raw-loader!../snippets/search.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search.md"),
            searchTable: __webpack_require__(/*! raw-loader!../snippets/search-table.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search-table.md"),
            sourceFull: __webpack_require__(/*! raw-loader!../snippets/source-full.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-full.md"),
            hideFilters: __webpack_require__(/*! raw-loader!../snippets/hide-filters.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/hide-filters.md"),
        };
    }
    return FilterExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/advanced-example-server.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/examples/server/advanced-example-server.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_AdvancedExampleServerComponent, View_AdvancedExampleServerComponent_0, View_AdvancedExampleServerComponent_Host_0, AdvancedExampleServerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedExampleServerComponent", function() { return RenderType_AdvancedExampleServerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExampleServerComponent_0", function() { return View_AdvancedExampleServerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExampleServerComponent_Host_0", function() { return View_AdvancedExampleServerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleServerComponentNgFactory", function() { return AdvancedExampleServerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _advanced_example_server_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-example-server.component */ "./src/app/pages/examples/server/advanced-example-server.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AdvancedExampleServerComponent = [];
var RenderType_AdvancedExampleServerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdvancedExampleServerComponent, data: {} });

function View_AdvancedExampleServerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.source; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdvancedExampleServerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "advanced-example-server", [], null, null, null, View_AdvancedExampleServerComponent_0, RenderType_AdvancedExampleServerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _advanced_example_server_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExampleServerComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]], null, null)], null, null); }
var AdvancedExampleServerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("advanced-example-server", _advanced_example_server_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExampleServerComponent"], View_AdvancedExampleServerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/server/advanced-example-server.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/server/advanced-example-server.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdvancedExampleServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleServerComponent", function() { return AdvancedExampleServerComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");


var AdvancedExampleServerComponent = /** @class */ (function () {
    function AdvancedExampleServerComponent(http) {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                albumId: {
                    title: 'Album',
                },
                title: {
                    title: 'Title',
                },
                url: {
                    title: 'Url',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["ServerDataSource"](http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
    }
    return AdvancedExampleServerComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/basic-example-load.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/examples/server/basic-example-load.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_BasicExampleLoadComponent, View_BasicExampleLoadComponent_0, View_BasicExampleLoadComponent_Host_0, BasicExampleLoadComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicExampleLoadComponent", function() { return RenderType_BasicExampleLoadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleLoadComponent_0", function() { return View_BasicExampleLoadComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleLoadComponent_Host_0", function() { return View_BasicExampleLoadComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleLoadComponentNgFactory", function() { return BasicExampleLoadComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _basic_example_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-load.service */ "./src/app/pages/examples/server/basic-example-load.service.ts");
/* harmony import */ var _basic_example_load_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-example-load.component */ "./src/app/pages/examples/server/basic-example-load.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BasicExampleLoadComponent = [];
var RenderType_BasicExampleLoadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicExampleLoadComponent, data: {} });

function View_BasicExampleLoadComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.source; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_BasicExampleLoadComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "basic-example-load", [], null, null, null, View_BasicExampleLoadComponent_0, RenderType_BasicExampleLoadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _basic_example_load_service__WEBPACK_IMPORTED_MODULE_3__["BasicExampleLoadService"], _basic_example_load_service__WEBPACK_IMPORTED_MODULE_3__["BasicExampleLoadService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _basic_example_load_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleLoadComponent"], [_basic_example_load_service__WEBPACK_IMPORTED_MODULE_3__["BasicExampleLoadService"]], null, null)], null, null); }
var BasicExampleLoadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("basic-example-load", _basic_example_load_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleLoadComponent"], View_BasicExampleLoadComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/server/basic-example-load.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/server/basic-example-load.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicExampleLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleLoadComponent", function() { return BasicExampleLoadComponent; });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _basic_example_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example-load.service */ "./src/app/pages/examples/server/basic-example-load.service.ts");


var BasicExampleLoadComponent = /** @class */ (function () {
    function BasicExampleLoadComponent(service) {
        var _this = this;
        this.service = service;
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    editable: false,
                    addable: false,
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"]();
        this.service.getData().then(function (data) {
            _this.source.load(data);
        });
    }
    return BasicExampleLoadComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/basic-example-load.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/server/basic-example-load.service.ts ***!
  \*********************************************************************/
/*! exports provided: BasicExampleLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleLoadService", function() { return BasicExampleLoadService; });
var BasicExampleLoadService = /** @class */ (function () {
    function BasicExampleLoadService() {
    }
    // emulating request to the server
    BasicExampleLoadService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.generateData());
            }, 2000);
        });
    };
    BasicExampleLoadService.prototype.getNewExampleObj = function (n) {
        n = typeof n !== 'undefined' ? n : Math.random() * 1000;
        return {
            id: n,
            name: "Jack London " + n,
            username: "jack_london_" + n,
            email: "jack_london_" + n + "@example.com",
        };
    };
    BasicExampleLoadService.prototype.generateData = function () {
        var data = [];
        for (var i = 0; i < BasicExampleLoadService.DATA_SIZE; i++) {
            data.push(this.getNewExampleObj(i));
        }
        return data;
    };
    BasicExampleLoadService.DATA_SIZE = 500;
    return BasicExampleLoadService;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/server-examples.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/pages/examples/server/server-examples.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_ServerExamplesComponent, View_ServerExamplesComponent_0, View_ServerExamplesComponent_Host_0, ServerExamplesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ServerExamplesComponent", function() { return RenderType_ServerExamplesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServerExamplesComponent_0", function() { return View_ServerExamplesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ServerExamplesComponent_Host_0", function() { return View_ServerExamplesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerExamplesComponentNgFactory", function() { return ServerExamplesComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_example_load_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-example-load.component.ngfactory */ "./src/app/pages/examples/server/basic-example-load.component.ngfactory.js");
/* harmony import */ var _basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-example-load.service */ "./src/app/pages/examples/server/basic-example-load.service.ts");
/* harmony import */ var _basic_example_load_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-load.component */ "./src/app/pages/examples/server/basic-example-load.component.ts");
/* harmony import */ var _advanced_example_server_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-example-server.component.ngfactory */ "./src/app/pages/examples/server/advanced-example-server.component.ngfactory.js");
/* harmony import */ var _advanced_example_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advanced-example-server.component */ "./src/app/pages/examples/server/advanced-example-server.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_examples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server-examples.component */ "./src/app/pages/examples/server/server-examples.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ServerExamplesComponent = [];
var RenderType_ServerExamplesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ServerExamplesComponent, data: {} });

function View_ServerExamplesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Get data from external source example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#from-server"], ["id", "from-server"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Loading From Server Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" This example shows how to pass the data loaded from some API to the table DataSource.\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 5, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/server/basic-example-load.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "basic-example-load", [], null, null, null, _basic_example_load_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_BasicExampleLoadComponent_0"], _basic_example_load_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_BasicExampleLoadComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__["BasicExampleLoadService"], _basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__["BasicExampleLoadService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 49152, null, 0, _basic_example_load_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleLoadComponent"], [_basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__["BasicExampleLoadService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#server"], ["id", "server"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Server Data Source Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" An example on how to load data user Server DataSource:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/server/advanced-example-server.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "advanced-example-server", [], null, null, null, _advanced_example_server_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AdvancedExampleServerComponent_0"], _advanced_example_server_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AdvancedExampleServerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 49152, null, 0, _advanced_example_server_component__WEBPACK_IMPORTED_MODULE_5__["AdvancedExampleServerComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], null, null)], null, null); }
function View_ServerExamplesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "server-examples", [], null, null, null, View_ServerExamplesComponent_0, RenderType_ServerExamplesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _server_examples_component__WEBPACK_IMPORTED_MODULE_7__["ServerExamplesComponent"], [], null, null)], null, null); }
var ServerExamplesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("server-examples", _server_examples_component__WEBPACK_IMPORTED_MODULE_7__["ServerExamplesComponent"], View_ServerExamplesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/server/server-examples.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/examples/server/server-examples.component.ts ***!
  \********************************************************************/
/*! exports provided: ServerExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerExamplesComponent", function() { return ServerExamplesComponent; });
var ServerExamplesComponent = /** @class */ (function () {
    function ServerExamplesComponent() {
    }
    return ServerExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/various/advanced-example-confirm.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/examples/various/advanced-example-confirm.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_AdvancedExampleConfirmComponent, View_AdvancedExampleConfirmComponent_0, View_AdvancedExampleConfirmComponent_Host_0, AdvancedExampleConfirmComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdvancedExampleConfirmComponent", function() { return RenderType_AdvancedExampleConfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExampleConfirmComponent_0", function() { return View_AdvancedExampleConfirmComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdvancedExampleConfirmComponent_Host_0", function() { return View_AdvancedExampleConfirmComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleConfirmComponentNgFactory", function() { return AdvancedExampleConfirmComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-example-confirm.component */ "./src/app/pages/examples/various/advanced-example-confirm.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AdvancedExampleConfirmComponent = [];
var RenderType_AdvancedExampleConfirmComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AdvancedExampleConfirmComponent, data: {} });

function View_AdvancedExampleConfirmComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, [[null, "deleteConfirm"], [null, "editConfirm"], [null, "createConfirm"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("deleteConfirm" === en)) {
        var pd_0 = (_co.onDeleteConfirm($event) !== false);
        ad = (pd_0 && ad);
    } if (("editConfirm" === en)) {
        var pd_1 = (_co.onSaveConfirm($event) !== false);
        ad = (pd_1 && ad);
    } if (("createConfirm" === en)) {
        var pd_2 = (_co.onCreateConfirm($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, { deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.source; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AdvancedExampleConfirmComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "advance-example-comfirm", [], null, null, null, View_AdvancedExampleConfirmComponent_0, RenderType_AdvancedExampleConfirmComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExampleConfirmComponent"], [], null, null)], null, null); }
var AdvancedExampleConfirmComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("advance-example-comfirm", _advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedExampleConfirmComponent"], View_AdvancedExampleConfirmComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/various/advanced-example-confirm.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/examples/various/advanced-example-confirm.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdvancedExampleConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleConfirmComponent", function() { return AdvancedExampleConfirmComponent; });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");

var AdvancedExampleConfirmComponent = /** @class */ (function () {
    function AdvancedExampleConfirmComponent() {
        this.settings = {
            delete: {
                confirmDelete: true,
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                notShownField: true,
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                notShownField: true,
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                notShownField: false,
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                notShownField: false,
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                notShownField: false,
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                notShownField: false,
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                notShownField: false,
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                notShownField: true,
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                notShownField: false,
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                notShownField: false,
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
                notShownField: true,
            }
        ];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"](this.data);
    }
    AdvancedExampleConfirmComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AdvancedExampleConfirmComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    AdvancedExampleConfirmComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    return AdvancedExampleConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/various/basic-example-multi-select.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/examples/various/basic-example-multi-select.component.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RenderType_BasicExampleMultiSelectComponent, View_BasicExampleMultiSelectComponent_0, View_BasicExampleMultiSelectComponent_Host_0, BasicExampleMultiSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicExampleMultiSelectComponent", function() { return RenderType_BasicExampleMultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleMultiSelectComponent_0", function() { return View_BasicExampleMultiSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleMultiSelectComponent_Host_0", function() { return View_BasicExampleMultiSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleMultiSelectComponentNgFactory", function() { return BasicExampleMultiSelectComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-multi-select.component */ "./src/app/pages/examples/various/basic-example-multi-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_BasicExampleMultiSelectComponent = [];
var RenderType_BasicExampleMultiSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicExampleMultiSelectComponent, data: {} });

function View_BasicExampleMultiSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { source: [0, "source"], settings: [1, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data; var currVal_1 = _co.settings; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_BasicExampleMultiSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "basic-example-multi-select", [], null, null, null, View_BasicExampleMultiSelectComponent_0, RenderType_BasicExampleMultiSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleMultiSelectComponent"], [], null, null)], null, null); }
var BasicExampleMultiSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("basic-example-multi-select", _basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleMultiSelectComponent"], View_BasicExampleMultiSelectComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/various/basic-example-multi-select.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/examples/various/basic-example-multi-select.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicExampleMultiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleMultiSelectComponent", function() { return BasicExampleMultiSelectComponent; });
var BasicExampleMultiSelectComponent = /** @class */ (function () {
    function BasicExampleMultiSelectComponent() {
        this.settings = {
            selectMode: 'multi',
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
            },
        ];
    }
    return BasicExampleMultiSelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/various/various-examples.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/pages/examples/various/various-examples.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_VariousExamplesComponent, View_VariousExamplesComponent_0, View_VariousExamplesComponent_Host_0, VariousExamplesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VariousExamplesComponent", function() { return RenderType_VariousExamplesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VariousExamplesComponent_0", function() { return View_VariousExamplesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VariousExamplesComponent_Host_0", function() { return View_VariousExamplesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariousExamplesComponentNgFactory", function() { return VariousExamplesComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advanced_example_confirm_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-example-confirm.component.ngfactory */ "./src/app/pages/examples/various/advanced-example-confirm.component.ngfactory.js");
/* harmony import */ var _advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-example-confirm.component */ "./src/app/pages/examples/various/advanced-example-confirm.component.ts");
/* harmony import */ var _basic_example_multi_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example-multi-select.component.ngfactory */ "./src/app/pages/examples/various/basic-example-multi-select.component.ngfactory.js");
/* harmony import */ var _basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-example-multi-select.component */ "./src/app/pages/examples/various/basic-example-multi-select.component.ts");
/* harmony import */ var _various_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./various-examples.component */ "./src/app/pages/examples/various/various-examples.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_VariousExamplesComponent = [];
var RenderType_VariousExamplesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_VariousExamplesComponent, data: {} });

function View_VariousExamplesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Various examples"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#confirm"], ["id", "confirm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Confirm Action Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" An example on how to confirm an action before it's applied to the table:\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/advanced-example-confirm.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "advance-example-comfirm", [], null, null, null, _advanced_example_confirm_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_AdvancedExampleConfirmComponent_0"], _advanced_example_confirm_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_AdvancedExampleConfirmComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, null, 0, _advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedExampleConfirmComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#multiselect"], ["id", "multiselect"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Multi select"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["An example on how to use multi select mode:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 4, "div", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/basic-example-multi-select.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "basic-example-multi-select", [], null, null, null, _basic_example_multi_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_BasicExampleMultiSelectComponent_0"], _basic_example_multi_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_BasicExampleMultiSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 49152, null, 0, _basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_4__["BasicExampleMultiSelectComponent"], [], null, null)], null, null); }
function View_VariousExamplesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "various-examples", [], null, null, null, View_VariousExamplesComponent_0, RenderType_VariousExamplesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _various_examples_component__WEBPACK_IMPORTED_MODULE_5__["VariousExamplesComponent"], [], null, null)], null, null); }
var VariousExamplesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("various-examples", _various_examples_component__WEBPACK_IMPORTED_MODULE_5__["VariousExamplesComponent"], View_VariousExamplesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/examples/various/various-examples.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/examples/various/various-examples.component.ts ***!
  \**********************************************************************/
/*! exports provided: VariousExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariousExamplesComponent", function() { return VariousExamplesComponent; });
var VariousExamplesComponent = /** @class */ (function () {
    function VariousExamplesComponent() {
    }
    return VariousExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=examples-examples-module-ngfactory-es5.js.map