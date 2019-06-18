(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module-ngfactory"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/array.md":
/*!*****************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/array.md ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data = [\n  {\n    id: 1,\n    name: \"Leanne Graham\",\n    username: \"Bret\",\n    email: \"Sincere@april.biz\"\n  },\n  {\n    id: 2,\n    name: \"Ervin Howell\",\n    username: \"Antonette\",\n    email: \"Shanna@melissa.tv\"\n  },\n  \n  // ... list of items\n  \n  {\n    id: 11,\n    name: \"Nicholas DuBuque\",\n    username: \"Nicholas.Stanton\",\n    email: \"Rey.Padberg@rosamond.biz\"\n  }\n];"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/basic-full.md":
/*!**********************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/basic-full.md ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-data',\n  styles: [],\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleDataComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID'\n      },\n      name: {\n        title: 'Full Name'\n      },\n      username: {\n        title: 'User Name'\n      },\n      email: {\n        title: 'Email'\n      }\n    }\n  };\n  \n  data = [\n    {\n      id: 1,\n      name: \"Leanne Graham\",\n      username: \"Bret\",\n      email: \"Sincere@april.biz\"\n    },\n    // ... other rows here\n    {\n      id: 11,\n      name: \"Nicholas DuBuque\",\n      username: \"Nicholas.Stanton\",\n      email: \"Rey.Padberg@rosamond.biz\"\n    }\n  ];\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/data-template.md":
/*!*************************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/data-template.md ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/directive.md":
/*!*********************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/directive.md ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@NgModule({\n  imports: [\n    // ...\n    \n    Ng2SmartTableModule,\n    \n    // ...\n  ],\n  declarations: [ ... ]\n})\n// ..."

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/install.md":
/*!*******************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/install.md ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "npm install --save ng2-smart-table"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/require.md":
/*!*******************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/require.md ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Ng2SmartTableModule } from 'ng2-smart-table';"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/settings.md":
/*!********************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/settings.md ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "settings = {\n  columns: {\n    id: {\n      title: 'ID'\n    },\n    name: {\n      title: 'Full Name'\n    },\n    username: {\n      title: 'User Name'\n    },\n    email: {\n      title: 'Email'\n    }\n  }\n};"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/template.md":
/*!********************************************************************************************************************************!*\
  !*** /Users/nixa/Development/Projects/Akveo/ng2-smart-table/node_modules/raw-loader!./src/app/pages/demo/snippets/template.md ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "./src/app/pages/demo/demo.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/demo/demo.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_DemoComponent, View_DemoComponent_0, View_DemoComponent_Host_0, DemoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DemoComponent", function() { return RenderType_DemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoComponent_0", function() { return View_DemoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DemoComponent_Host_0", function() { return View_DemoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponentNgFactory", function() { return DemoComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component.ngfactory */ "./src/app/shared/components/header/header.component.ngfactory.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/highlight.directive */ "./src/app/shared/directives/highlight.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_components_basic_example_basic_example_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/basic-example/basic-example.component.ngfactory */ "./src/app/shared/components/basic-example/basic-example.component.ngfactory.js");
/* harmony import */ var _shared_components_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/basic-example/basic-example.component */ "./src/app/shared/components/basic-example/basic-example.component.ts");
/* harmony import */ var _shared_components_basic_example_basic_example_data_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/basic-example/basic-example-data.component.ngfactory */ "./src/app/shared/components/basic-example/basic-example-data.component.ngfactory.js");
/* harmony import */ var _shared_components_basic_example_basic_example_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/basic-example/basic-example-data.component */ "./src/app/shared/components/basic-example/basic-example-data.component.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo.component */ "./src/app/pages/demo/demo.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_DemoComponent = [];
var RenderType_DemoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_DemoComponent, data: {} });

function View_DemoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "header-component", [["tagline", "Quick Start & Demo"]], null, null, null, _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [], { tagline: [0, "tagline"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 119, "section", [["class", "main-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#getting-started"], ["id", "getting-started"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Getting Started"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Hello and Welcome! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#installation"], ["id", "installation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Installation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The library is available as npm package, so all you need to do is to run the following command: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "code", [["class", "bash"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This command will create a record in your `package.json` file and install the package into the npm modules folder."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#examples"], ["id", "examples"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Examples"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "a", [["aria-hidden", "true"], ["class", "anchor"], ["href", "#minimal-setup"], ["id", "minimal-setup"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "octicon octicon-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Minimal Setup Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" First thing you need to do is to import the ng2-smart-table directives into your component. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](37, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Then register it by adding to the list of directives of your module: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](45, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 14, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Now, we need to configure the table and add it into the template. The only "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["required"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" setting for the component to start working is a columns configuration."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Let's register "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" property inside of the component where we want to have the table and configure some columns ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](59, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Settings documentation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["): "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](66, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Finally let's put the ng2-smart-table component inside of the template: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](74, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" At this step you will have a minimally configured table which should look something like this: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 1, "basic-example", [], null, null, null, _shared_components_basic_example_basic_example_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_BasicExampleComponent_0"], _shared_components_basic_example_basic_example_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_BasicExampleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 49152, null, 0, _shared_components_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["BasicExampleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" All functions are available by default and you don't need to configure them somehow, so you already able to add/edit/delete rows, sort or filter the table, etc. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" But it feels like something is missing... Right, there is no data in the table by default. To add some, let's create an array property with a list of objects in the component. Please note that object keys are same as in the columns configuration. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](88, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](89, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["And pass the data to the table:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 5, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](97, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Now you have some data in the table:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 1, "basic-example-data", [], null, null, null, _shared_components_basic_example_basic_example_data_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_BasicExampleDataComponent_0"], _shared_components_basic_example_basic_example_data_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_BasicExampleDataComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](103, 49152, null, 0, _shared_components_basic_example_basic_example_data_component__WEBPACK_IMPORTED_MODULE_9__["BasicExampleDataComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" That's it for a minimal setup, our final component should look like this, pretty simple, huh? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 8, "pre", [["class", "with-source"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 1, "a", [["class", "source"], ["href", "https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/shared/components/basic-example/basic-example-data.component.ts"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 2, "code", [["class", "typescript"], ["highlight", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](112, 4210688, null, 0, _shared_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightCodeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](113, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Full component documentation you can find "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 118).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](118, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](119, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."]))], function (_ck, _v) { var currVal_0 = "Quick Start & Demo"; _ck(_v, 1, 0, currVal_0); var currVal_6 = _ck(_v, 59, 0, "/documentation"); _ck(_v, 58, 0, currVal_6); var currVal_14 = _ck(_v, 119, 0, "/documentation"); _ck(_v, 118, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.snippets.install; _ck(_v, 19, 0, currVal_1); var currVal_2 = _co.snippets.require; _ck(_v, 37, 0, currVal_2); var currVal_3 = _co.snippets.directive; _ck(_v, 45, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).href; _ck(_v, 57, 0, currVal_4, currVal_5); var currVal_7 = _co.snippets.settings; _ck(_v, 66, 0, currVal_7); var currVal_8 = _co.snippets.template; _ck(_v, 74, 0, currVal_8); var currVal_9 = _co.snippets.array; _ck(_v, 89, 0, currVal_9); var currVal_10 = _co.snippets.dataTemplate; _ck(_v, 97, 0, currVal_10); var currVal_11 = _co.snippets.basicFull; _ck(_v, 113, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 118).target; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 118).href; _ck(_v, 117, 0, currVal_12, currVal_13); }); }
function View_DemoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo", [], null, null, null, View_DemoComponent_0, RenderType_DemoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _demo_component__WEBPACK_IMPORTED_MODULE_10__["DemoComponent"], [], null, null)], null, null); }
var DemoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo", _demo_component__WEBPACK_IMPORTED_MODULE_10__["DemoComponent"], View_DemoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/demo/demo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/demo/demo.component.ts ***!
  \**********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.snippets = {
            install: __webpack_require__(/*! raw-loader!./snippets/install.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/install.md"),
            require: __webpack_require__(/*! raw-loader!./snippets/require.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/require.md"),
            directive: __webpack_require__(/*! raw-loader!./snippets/directive.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/directive.md"),
            settings: __webpack_require__(/*! raw-loader!./snippets/settings.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/settings.md"),
            template: __webpack_require__(/*! raw-loader!./snippets/template.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/template.md"),
            array: __webpack_require__(/*! raw-loader!./snippets/array.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/array.md"),
            dataTemplate: __webpack_require__(/*! raw-loader!./snippets/data-template.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/data-template.md"),
            basicFull: __webpack_require__(/*! raw-loader!./snippets/basic-full.md */ "../../node_modules/raw-loader/index.js!./src/app/pages/demo/snippets/basic-full.md"),
        };
    }
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/pages/demo/demo.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/pages/demo/demo.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: DemoModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModuleNgFactory", function() { return DemoModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _demo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.module */ "./src/app/pages/demo/demo.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.component.ngfactory */ "./src/app/pages/demo/demo.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-completer */ "../../node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo.component */ "./src/app/pages/demo/demo.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var DemoModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _demo_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DemoComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_6__["LocalDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_6__["LocalDataFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_6__["RemoteDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_6__["RemoteDataFactory"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_completer__WEBPACK_IMPORTED_MODULE_6__["CompleterService"], ng2_completer__WEBPACK_IMPORTED_MODULE_6__["CompleterService"], [ng2_completer__WEBPACK_IMPORTED_MODULE_6__["LocalDataFactory"], ng2_completer__WEBPACK_IMPORTED_MODULE_6__["RemoteDataFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_completer__WEBPACK_IMPORTED_MODULE_6__["Ng2CompleterModule"], ng2_completer__WEBPACK_IMPORTED_MODULE_6__["Ng2CompleterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵa"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵn"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵn"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵw"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵw"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵy"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵbd"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"], _demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", component: _demo_component__WEBPACK_IMPORTED_MODULE_11__["DemoComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/pages/demo/demo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/demo/demo.module.ts ***!
  \*******************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.component */ "./src/app/pages/demo/demo.component.ts");

var DEMO_COMPONENTS = [
    _demo_component__WEBPACK_IMPORTED_MODULE_0__["DemoComponent"],
];
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/shared/components/basic-example/basic-example.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/basic-example/basic-example.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_BasicExampleComponent, View_BasicExampleComponent_0, View_BasicExampleComponent_Host_0, BasicExampleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BasicExampleComponent", function() { return RenderType_BasicExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleComponent_0", function() { return View_BasicExampleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BasicExampleComponent_Host_0", function() { return View_BasicExampleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponentNgFactory", function() { return BasicExampleComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../dist/ng2-smart-table/ng2-smart-table.ngfactory */ "../../dist/ng2-smart-table/ng2-smart-table.ngfactory.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "../../dist/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-example.component */ "./src/app/shared/components/basic-example/basic-example.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_BasicExampleComponent = [];
var RenderType_BasicExampleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BasicExampleComponent, data: {} });

function View_BasicExampleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-smart-table", [], null, null, null, _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ɵbo_0"], _dist_ng2_smart_table_ng2_smart_table_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ɵbo"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ɵbo"], [], { settings: [0, "settings"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.settings; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BasicExampleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "basic-example", [], null, null, null, View_BasicExampleComponent_0, RenderType_BasicExampleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _basic_example_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleComponent"], [], null, null)], null, null); }
var BasicExampleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("basic-example", _basic_example_component__WEBPACK_IMPORTED_MODULE_3__["BasicExampleComponent"], View_BasicExampleComponent_Host_0, {}, {}, []);



/***/ })

}]);
//# sourceMappingURL=demo-demo-module-ngfactory-es5.js.map