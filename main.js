(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rohit/Documents/angularfirebase-student-app/src/main.ts */"zUnb");


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

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAkH8edRyQOx74XW93FEiUwj7tA0p0CmwQ",
        authDomain: "angularfirebase-student-1c427.firebaseapp.com",
        databaseURL: "https://angularfirebase-student-1c427-default-rtdb.firebaseio.com",
        projectId: "angularfirebase-student-1c427",
        storageBucket: "angularfirebase-student-1c427.appspot.com",
        messagingSenderId: "80216372317",
        appId: "1:80216372317:web:05845c0f29c90b13f709b4",
    }
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

/***/ "H6Qt":
/*!******************************************************************!*\
  !*** ./src/app/add-bulk-students/add-bulk-students.component.ts ***!
  \******************************************************************/
/*! exports provided: AddBulkStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBulkStudentsComponent", function() { return AddBulkStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/crud.service */ "vMIF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class AddBulkStudentsComponent {
    constructor(crudApi, toastr) {
        this.crudApi = crudApi;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    uploadExcel(e) {
        try {
            const fileName = e.target.files[0].name;
            Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! xlsx */ "EUZL", 7)).then(xlsx => {
                let jsonData = null;
                const reader = new FileReader();
                // const file = ev.target.files[0];
                reader.onload = (event) => {
                    const data = reader.result;
                    this.workBook = xlsx.read(data, { type: 'binary' });
                    jsonData = this.workBook.SheetNames.reduce((initial, name) => {
                        const sheet = this.workBook.Sheets[name];
                        initial[name] = xlsx.utils.sheet_to_json(sheet);
                        return initial;
                    }, {});
                    this.userData = jsonData[Object.keys(jsonData)[0]];
                    // console.log("=======>", this.userData);
                };
                reader.readAsBinaryString(e.target.files[0]);
            });
        }
        catch (e) {
            console.log('error', e);
        }
    }
    addUsers() {
        if (this.userData) {
            var currData = {};
            this.userData.forEach(element => {
                currData['firstName'] = element.firstName;
                currData['lastName'] = element.lastName;
                currData['email'] = element.email;
                currData['mobileNumber'] = element.mobileNumber;
                this.crudApi.AddStudent(currData);
                this.toastr.success(currData['firstName'] + ' successfully added!');
            });
        }
        else {
            this.toastr.error('please upload a file first !');
        }
    }
}
AddBulkStudentsComponent.ɵfac = function AddBulkStudentsComponent_Factory(t) { return new (t || AddBulkStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
AddBulkStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBulkStudentsComponent, selectors: [["app-add-bulk-students"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-8", "form-group"], ["type", "file", "placeholder", "Upload file", "accept", ".xlsx", 1, "form-control", 3, "change"], [1, "col-md-2", "form-group"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]], template: function AddBulkStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddBulkStudentsComponent_Template_input_change_4_listener($event) { return ctx.uploadExcel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBulkStudentsComponent_Template_button_click_7_listener() { return ctx.addUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYnVsay1zdHVkZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'angularfirebase-student-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 0, consts: [[1, "navbar", "navbar-dark", "fixed-top", "bg-dark", "flex-md-nowrap", "p-0", "shadow"], ["routerLink", "/view-students", 1, "navbar-brand", "col-sm-3", "col-md-2", "mr-0"], [1, "dasboard-text"], [1, "navbar-nav", "px-3"], [1, "nav-item", "text-nowrap"], ["routerLink", "/register-student", 1, "nav-link"], [1, "user-image", 2, "background-image", "url('assets/user.jpg')"], [1, "container-fluid"], [1, "row"], [1, "col-md-2", "d-md-block", "bg-light", "sidebar"], [1, "sidebar-sticky"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/register-student", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/view-students", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/add-bulk-students", "routerLinkActive", "active", 1, "nav-link"], ["role", "main", 1, "col-md-9", "ml-sm-auto", "col-lg-10", "px-4"], [1, "inner-adjust"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Hello Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Student ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Students List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Add bulk students ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "main", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@media (min-width: 992px) {\n  .col-lg-10[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .px-4[_ngcontent-%COMP%] {\n    padding-right: 1.5rem !important;\n    padding-left: 15rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNBO0lBQ0ksY0FBQTtJQUNBLFdBQUE7RUFERjs7RUFJRjtJQUNJLGdDQUFBO0lBQ0EsOEJBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xuLmNvbC1sZy0xMCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgfVxuLnB4LTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXJlbSFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-student/add-student.component */ "uQyH");
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-student/edit-student.component */ "jCzW");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-list/student-list.component */ "qVQE");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _add_bulk_students_add_bulk_students_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-bulk-students/add-bulk-students.component */ "H6Qt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { a} from '@angular/animations';
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__["AddStudentComponent"],
        _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_8__["EditStudentComponent"],
        _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentListComponent"],
        _add_bulk_students_add_bulk_students_component__WEBPACK_IMPORTED_MODULE_13__["AddBulkStudentsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();


/***/ }),

/***/ "jCzW":
/*!********************************************************!*\
  !*** ./src/app/edit-student/edit-student.component.ts ***!
  \********************************************************/
/*! exports provided: EditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function() { return EditStudentComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/crud.service */ "vMIF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







function EditStudentComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please enter firstname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditStudentComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name shouldn't be less than 2 words ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditStudentComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please provide email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditStudentComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please enter correct email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditStudentComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please provide contact number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditStudentComponent_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Use numbers only number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditStudentComponent {
    constructor(crudApi, fb, location, actRoute, router, toastr) {
        this.crudApi = crudApi;
        this.fb = fb;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.updateStudentData();
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.crudApi.GetStudent(id).valueChanges().subscribe(data => {
            this.editForm.setValue(data);
        });
    }
    get firstName() {
        return this.editForm.get('firstName');
    }
    get lastName() {
        return this.editForm.get('lastName');
    }
    get email() {
        return this.editForm.get('email');
    }
    get mobileNumber() {
        return this.editForm.get('mobileNumber');
    }
    updateStudentData() {
        this.editForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
            lastName: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]+$')]]
        });
    }
    goBack() {
        this.location.back();
    }
    updateForm() {
        this.crudApi.UpdateStudent(this.editForm.value);
        this.toastr.success(this.editForm.controls['firstName'].value + ' updated successfully');
        this.router.navigate(['view-students']);
    }
}
EditStudentComponent.ɵfac = function EditStudentComponent_Factory(t) { return new (t || EditStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
EditStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditStudentComponent, selectors: [["app-edit-student"]], decls: 40, vars: 8, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "h2"], [1, "btn-toolbar", "mb-2", "mb-md-0"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "row"], [1, "col-lg-12"], [1, "pricing-header", "form-block", "mx-auto"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-lg-5", "col-md-12", "col-sm-12"], [1, "col-md-12", "mb-3"], ["type", "text", "formControlName", "firstName", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "text", "formControlName", "mobileNumber", "required", "", 1, "form-control"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [1, "error"]], template: function EditStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit Student Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditStudentComponent_Template_button_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditStudentComponent_Template_form_ngSubmit_10_listener() { return ctx.updateForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EditStudentComponent_p_18_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EditStudentComponent_p_19_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditStudentComponent_p_29_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, EditStudentComponent_p_30_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mobile number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, EditStudentComponent_p_35_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, EditStudentComponent_p_36_Template, 4, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Update Student ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName.touched && ctx.firstName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName.errors == null ? null : ctx.firstName.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.touched && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.errors == null ? null : ctx.email.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileNumber.touched && ctx.mobileNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileNumber.errors == null ? null : ctx.mobileNumber.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXN0dWRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "qVQE":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/crud.service */ "vMIF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function StudentListComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Student ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentListComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudentListComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.exportToFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentListComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudentListComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.downloadAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No student added yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Add Student ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentListComponent_div_12_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StudentListComponent_div_12_tr_17_Template_input_ngModelChange_2_listener($event) { const student_r11 = ctx.$implicit; return student_r11.isSelected = $event; })("change", function StudentListComponent_div_12_tr_17_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.isAllSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudentListComponent_div_12_tr_17_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const student_r11 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.deleteStudent(student_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", student_r11.isSelected)("value", student_r11.$key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](student_r11.$key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", student_r11.firstName, " ", student_r11.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](student_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](student_r11.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-student/", student_r11.$key, "");
} }
const _c0 = function (a1) { return { itemsPerPage: 7, currentPage: a1 }; };
function StudentListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StudentListComponent_div_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.masterSelected = $event; })("change", function StudentListComponent_div_12_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.checkUncheckAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Student Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Student name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StudentListComponent_div_12_tr_17_Template, 17, 8, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.masterSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 2, ctx_r5.Student, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r5.p)));
} }
class StudentListComponent {
    constructor(crudApi, toastr) {
        this.crudApi = crudApi;
        this.toastr = toastr;
        this.p = 1;
        this.hideWhenNoStudent = false;
        this.noData = false;
        this.preLoader = true;
    }
    ngOnInit() {
        this.masterSelected = false;
        this.dataState();
        let s = this.crudApi.GetStudentsList();
        s.snapshotChanges().subscribe(data => {
            this.Student = [];
            data.forEach(item => {
                let a = item.payload.toJSON();
                a['$key'] = item.key;
                a['isSelected'] = false;
                this.Student.push(a);
            });
        });
    }
    dataState() {
        this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
            this.preLoader = false;
            if (data.length <= 0) {
                this.hideWhenNoStudent = false;
                this.noData = true;
            }
            else {
                this.hideWhenNoStudent = true;
                this.noData = false;
            }
        });
    }
    deleteStudent(student) {
        if (window.confirm('Are sure you want to delete this student ?')) {
            this.crudApi.DeleteStudent(student.$key);
            this.toastr.success(student.firstName + ' successfully deleted!');
        }
    }
    exportToFile() {
        let tbl = document.getElementById("dataTable");
        let wb = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].table_to_book(tbl);
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](wb, "student_data" + '.xlsx');
    }
    downloadAll() {
        let ws = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].json_to_sheet(this.Student);
        const workbook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_0__["writeFile"](workbook, "all_student_data.xlsx");
    }
    checkUncheckAll() {
        for (var i = 0; i < this.Student.length; i++) {
            this.Student[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    }
    isAllSelected() {
        this.masterSelected = this.Student.every(function (student) {
            return student.isSelected == true;
        });
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.Student.length; i++) {
            if (this.Student[i].isSelected)
                this.checkedList.push(this.Student[i].$key);
        }
        this.checkedList = JSON.stringify(this.checkedList);
        console.log(this.checkedList);
    }
}
StudentListComponent.ɵfac = function StudentListComponent_Factory(t) { return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudentListComponent, selectors: [["app-student-list"]], decls: 14, vars: 6, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "h2"], ["routerLink", "/register-student", "class", "btn btn-success", 4, "ngIf"], ["class", "btn btn-info", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "pricing-header", "mx-auto"], ["class", "no-data text-center", 4, "ngIf"], ["class", "table-responsive", "id", "dataTable", 4, "ngIf"], ["autoHide", "true", "responsive", "true", 3, "pageChange"], ["routerLink", "/register-student", 1, "btn", "btn-success"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "no-data", "text-center"], ["src", "assets/preloader.gif", "alt", "No student", 1, "preloader-icon"], ["src", "assets/no-student.svg", "alt", "No student", 1, "nodata-msg"], [1, "nodata-msg"], ["id", "dataTable", 1, "table-responsive"], [1, "table", "table-bordered", "table-responsive-sm", "table-responsive-md", "table-responsive-lg"], ["type", "checkbox", "name", "list_name", "value", "m1", 3, "ngModel", "ngModelChange", "change"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "list_name", 3, "ngModel", "value", "ngModelChange", "change"], ["scope", "row"], [1, "text-center", "action-block"], [1, "mr-2", "btn", "btn-outline-primary", "btn-sm", 3, "routerLink"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"]], template: function StudentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Students List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StudentListComponent_a_4_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StudentListComponent_a_6_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StudentListComponent_a_8_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, StudentListComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StudentListComponent_div_11_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, StudentListComponent_div_12_Template, 19, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "pagination-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function StudentListComponent_Template_pagination_controls_pageChange_13_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideWhenNoStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideWhenNoStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideWhenNoStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.preLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideWhenNoStudent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "uQyH":
/*!******************************************************!*\
  !*** ./src/app/add-student/add-student.component.ts ***!
  \******************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/crud.service */ "vMIF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AddStudentComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please enter atleast first name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddStudentComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name shouldn't be less than 2 words");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddStudentComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please provide email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddStudentComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please enter correct email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddStudentComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please provide contact number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddStudentComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Use numbers only number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddStudentComponent {
    constructor(crudApi, fb, toastr) {
        this.crudApi = crudApi;
        this.fb = fb;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.crudApi.GetStudentsList();
        this.studenForm();
    }
    studenForm() {
        this.studentForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
            lastName: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[1-9]{1}[0-9]{9}$/)]]
        });
    }
    get firstName() {
        return this.studentForm.get('firstName');
    }
    get lastName() {
        return this.studentForm.get('lastName');
    }
    get email() {
        return this.studentForm.get('email');
    }
    get mobileNumber() {
        return this.studentForm.get('mobileNumber');
    }
    ResetForm() {
        this.studentForm.reset();
    }
    submitStudentData() {
        this.crudApi.AddStudent(this.studentForm.value);
        this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!');
        this.ResetForm();
    }
}
AddStudentComponent.ɵfac = function AddStudentComponent_Factory(t) { return new (t || AddStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AddStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddStudentComponent, selectors: [["app-add-student"]], decls: 35, vars: 8, consts: [[1, "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "h2"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-5", "col-md-12", "col-sm-12"], [1, "col-md-12", "mb-3"], ["type", "text", "formControlName", "firstName", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "text", "formControlName", "mobileNumber", "required", "", 1, "form-control"], [1, "form-group", "text-right"], ["type", "button", 1, "btn", "btn-secondary", "gap-right", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "error"]], template: function AddStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddStudentComponent_Template_form_ngSubmit_3_listener() { return ctx.submitStudentData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddStudentComponent_p_11_Template, 4, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddStudentComponent_p_12_Template, 4, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddStudentComponent_p_22_Template, 4, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddStudentComponent_p_23_Template, 4, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mobile number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AddStudentComponent_p_28_Template, 4, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddStudentComponent_p_29_Template, 4, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddStudentComponent_Template_button_click_31_listener() { return ctx.ResetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Add Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.studentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName.touched && ctx.firstName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName.errors == null ? null : ctx.firstName.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.touched && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.errors == null ? null : ctx.email.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileNumber.touched && ctx.mobileNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileNumber.errors == null ? null : ctx.mobileNumber.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.studentForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vMIF":
/*!****************************************!*\
  !*** ./src/app/shared/crud.service.ts ***!
  \****************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");


class CrudService {
    constructor(db) {
        this.db = db;
    }
    // Create Student
    AddStudent(student) {
        this.studentsRef.push({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            mobileNumber: student.mobileNumber
        });
    }
    // Fetch Single Student Object
    GetStudent(id) {
        this.studentRef = this.db.object('students-list/' + id);
        return this.studentRef;
    }
    // Fetch Students List
    GetStudentsList() {
        this.studentsRef = this.db.list('students-list');
        return this.studentsRef;
    }
    // Update Student Object
    UpdateStudent(student) {
        this.studentRef.update({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            mobileNumber: student.mobileNumber
        });
    }
    // Delete Student Object
    DeleteStudent(id) {
        this.studentRef = this.db.object('students-list/' + id);
        this.studentRef.remove();
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_bulk_students_add_bulk_students_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-bulk-students/add-bulk-students.component */ "H6Qt");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-student/add-student.component */ "uQyH");
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-student/edit-student.component */ "jCzW");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-list/student-list.component */ "qVQE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', redirectTo: '/view-students', pathMatch: 'full' },
    { path: 'register-student', component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_2__["AddStudentComponent"] },
    { path: 'view-students', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_4__["StudentListComponent"] },
    { path: 'edit-student/:id', component: _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_3__["EditStudentComponent"] },
    { path: 'add-bulk-students', component: _add_bulk_students_add_bulk_students_component__WEBPACK_IMPORTED_MODULE_1__["AddBulkStudentsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map