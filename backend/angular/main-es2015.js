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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--공통 해더...-->\n<app-header></app-header>\n<!-- <app-ifix-document></app-ifix-document> -->\n\n<!--태블릿, 데스크탑 용 바디-->\n<router-outlet *ngIf=\"mobileQuery.matches\" [class.example-is-mobile]=\"mobileQuery.matches\"></router-outlet>\n<!-- \n<data-table></data-table> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/help/help.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/help/help.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"justify-content: center\">\n    <div class=\"col-lg-5 col-md-8 col-10 mt-5\">\n      <h1>Forgot Password</h1>\n      <form\n        class=\"form-signin\"\n        #emailForm=\"ngForm\"\n        (ngSubmit)=\"onNgSubmit(emailForm)\"\n        novalidate\n        *ngIf=\"!sumitBool\"\n      >\n        <h6 class=\"mt-4\">Your email address</h6>\n        <input\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          class=\"form-control\"\n          placeholder=\"name@email.com\"\n          required\n          ngModel\n          #email=\"ngModel\"\n        />\n        <mat-error *ngIf=\"email.invalid && email.touched\"\n          >Please enter a valid email.</mat-error\n        >\n        <button\n          class=\"btn btn-primary mt-5\"\n          type=\"submit\"\n          [disabled]=\"emailForm.invalid\"\n          [class.disabled]=\"emailForm.invalid\"\n        >\n          Send instruction\n        </button>\n      </form>\n      <br />\n      <small *ngIf=\"sumitBool\"\n        >You should receive an email shortly. <br />\n        If you still need assistance, contact <span>dtk@u-medi.com</span></small\n      >\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoding\"></mat-spinner>\n<div class=\"text-center mt-5\">\n  <h1>로그인</h1>\n  <form\n    class=\"form-signin\"\n    #loginForm=\"ngForm\"\n    (ngSubmit)=\"onNgSubmit(loginForm)\"\n    novalidate\n  >\n    <label for=\"email\" class=\"sr-only\">email</label>\n    <input\n      type=\"email\"\n      id=\"email\"\n      name=\"email\"\n      class=\"form-control\"\n      placeholder=\"email\"\n      required\n      email\n      ngModel\n      #email=\"ngModel\"\n    />\n    <mat-error *ngIf=\"email.invalid && email.touched\"\n      >Please enter a valid email.</mat-error\n    >\n\n    <label for=\"password\" class=\"sr-only\">password</label>\n    <input\n      type=\"password\"\n      id=\"password\"\n      name=\"password\"\n      class=\"form-control\"\n      placeholder=\"password\"\n      pattern=\"(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}\"\n      required\n      ngModel\n      #password=\"ngModel\"\n    />\n    <mat-error *ngIf=\"password.invalid && password.touched\"\n      >Please enter a valid password.</mat-error\n    >\n\n    <button\n      class=\"btn btn-lg btn-block mt-5\"\n      type=\"submit\"\n      [disabled]=\"loginForm.invalid\"\n      [class.disabled]=\"loginForm.invalid\"\n    >\n      Sign in\n    </button>\n  </form>\n  <a routerLink=\"/help\"><small style=\"color: gray\">Forgot Password</small></a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/reset/reset.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/reset/reset.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"justify-content: center\">\n    <div class=\"col-lg-5 col-md-8 col-10 mt-5\">\n      <h1>Reset Password</h1>\n      <form\n        class=\"form-signin\"\n        [formGroup]=\"resetFormGroup\"\n        (ngSubmit)=\"onSubmit()\"\n        novalidate\n      >\n        <small>Enter your new password for your account</small>\n\n        <div formGroupName=\"passwordGroup\">\n          <h6 class=\"mt-4\">New Password</h6>\n          <input\n            type=\"password\"\n            id=\"password\"\n            class=\"form-control\"\n            formControlName=\"password\"\n          />\n          <mat-error\n            *ngIf=\"\n              resetFormGroup.get('passwordGroup').get('password').invalid &&\n              resetFormGroup.get('passwordGroup').get('password').touched\n            \"\n            >Please enter a valid password.</mat-error\n          >\n\n          <h6 class=\"mt-4\">Confirm Password</h6>\n          <input\n            type=\"password\"\n            id=\"confirmPassword\"\n            class=\"form-control\"\n            formControlName=\"confirmPassword\"\n          />\n          <mat-error\n            *ngIf=\"\n              resetFormGroup.get('passwordGroup').invalid &&\n              resetFormGroup.get('passwordGroup').touched\n            \"\n            >It doesn't match.</mat-error\n          >\n        </div>\n        <button\n          class=\"btn btn-primary mt-5\"\n          type=\"submit\"\n          [disabled]=\"resetFormGroup.invalid\"\n          [class.disabled]=\"resetFormGroup.invalid\"\n        >\n          Rest Password\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-5 container\">\n  <form\n    class=\"form-signin\"\n    [formGroup]=\"signupForm\"\n    (ngSubmit)=\"onSubmit()\"\n    novalidate\n  >\n    <div class=\"text-field\">\n      <h3 class=\"field-group-name\">개인정보</h3>\n      <hr />\n      <div class=\"form-group\">\n        <label for=\"lastName\">성</label>\n        <input\n          type=\"text\"\n          id=\"lastName\"\n          class=\"form-control\"\n          formControlName=\"lastName\"\n        />\n        <mat-error\n          *ngIf=\"\n            signupForm.get('lastName').invalid &&\n            signupForm.get('lastName').touched\n          \"\n          >Please enter a valid last name.</mat-error\n        >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstName\">이름</label>\n        <input\n          type=\"text\"\n          id=\"firstName\"\n          class=\"form-control\"\n          formControlName=\"firstName\"\n        />\n        <mat-error\n          *ngIf=\"\n            signupForm.get('firstName').invalid &&\n            signupForm.get('firstName').touched\n          \"\n          >Please enter a valid first name.</mat-error\n        >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"avatar\" class=\"mr-2\">성별 : </label>\n        <div class=\"form-check form-check-inline\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"gender\"\n            value=\"male\"\n            formControlName=\"gender\"\n            id=\"male\"\n            checked\n          />\n          <label class=\"form-check-label\" for=\"inlineRadio1\" for=\"male\"\n            >남자</label\n          >\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"gender\"\n            value=\"female\"\n            formControlName=\"gender\"\n            id=\"female\"\n          />\n          <label class=\"form-check-label\" for=\"inlineRadio2\" for=\"female\"\n            >여자</label\n          >\n        </div>\n      </div>\n      <h3 class=\"field-group-name\">계정</h3>\n      <hr />\n      <div class=\"form-group\" style=\"text-align: left\">\n        <label for=\"email\">이메일*</label>\n        <input\n          type=\"email\"\n          id=\"email\"\n          class=\"form-control\"\n          formControlName=\"email\"\n        />\n        <mat-error\n          *ngIf=\"\n            signupForm.get('email').invalid && signupForm.get('email').touched\n          \"\n          >Please enter a valid email.</mat-error\n        >\n      </div>\n      <div formGroupName=\"passwordGroup\">\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"m-0\">비밀번호*</label><br />\n          <small\n            >비밀번호는 최소 6글자 특수문자, 대소문자 알파벳 형태여야\n            합니다.</small\n          >\n          <input\n            type=\"password\"\n            id=\"password\"\n            class=\"form-control\"\n            formControlName=\"password\"\n          />\n          <mat-error\n            *ngIf=\"\n              signupForm.get('passwordGroup').get('password').invalid &&\n              signupForm.get('passwordGroup').get('password').touched\n            \"\n            >Please enter a valid password.</mat-error\n          >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"confirmPassword\">비밀번호 확인*</label>\n          <input\n            type=\"password\"\n            id=\"confirmPassword\"\n            class=\"form-control\"\n            formControlName=\"confirmPassword\"\n          />\n          <mat-error\n            *ngIf=\"\n              signupForm.get('passwordGroup').invalid &&\n              signupForm.get('passwordGroup').touched\n            \"\n            >It doesn't match.</mat-error\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nickname\">닉네임*</label>\n        <input\n          type=\"text\"\n          id=\"nickname\"\n          class=\"form-control\"\n          formControlName=\"nickName\"\n        />\n        <mat-error\n          *ngIf=\"\n            signupForm.get('nickName').invalid &&\n            signupForm.get('nickName').touched\n          \"\n          >Please enter a valid nick name(at least 3 characters).</mat-error\n        >\n      </div>\n      <button\n        class=\"btn btn-lg btn-block mt-5\"\n        type=\"submit\"\n        [disabled]=\"signupForm.invalid\"\n      >\n        Sign in\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/body.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/body.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--본문...-->\n<div class=\"container\" style=\"height: 100%\">\n  <div class=\"row container-row\" style=\"height: 100%\">\n    <!--이 nav는 태블릿 이상일때만 보임...스마트폰에서는 이게 app-haader에 들어감. 로그인,회원가입창일시에는 안보임-->\n    <nav class=\"col-md-3 col-lg-2 bg-light d-none d-sm-block\">\n      <app-nav></app-nav>\n    </nav>\n    <div class=\"col-md-9 col-lg-9 container-main\">\n      <hr />\n      <!--헤더에 있는 검색창이 메인화면으로 이동-->\n      <div class=\"mobile-search d-sm-block d-md-none mt-1\">\n        <form\n          class=\"form-inline\"\n          #searchForm=\"ngForm\"\n          (ngSubmit)=\"onNgSubmit(searchForm)\"\n          navalidate\n        >\n          <input\n            class=\"form-control search col-9\"\n            type=\"search\"\n            placeholder=\"Search\"\n            aria-label=\"Search\"\n            name=\"searchInput\"\n            ngModel\n            #searchInput\n            required\n          />\n          <button class=\"btn btn-outline-success sbtn col-3\" type=\"submit\">\n            Search\n          </button>\n        </form>\n      </div>\n      <main #contentArea>\n        <router-outlet></router-outlet>\n      </main>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/catergory/catergory.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/catergory/catergory.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--[infiniteScrollDistance]=\"2\"라는 뜻은 80%(100% - 20%)가 스크롤되었을 때 이벤트가 트리거됨-->\n<!-- infiniteScrollThrottle: 이 이벤트는 사용자가 스크롤을 중지한 후 이 몇 밀리초 후에 트리거된다 -->\n<div\n    infiniteScroll\n    [infiniteScrollDistance]=\"2\"\n    (scrolled)=\"onScrollDown()\"\n    style=\"width:100%;\"\n    class=\"newly-post-parent\"\n  >\n  <app-catergory-popular></app-catergory-popular>\n  <div>\n    <img src=\"../../assets/images/banner2.jpg\" class=\"d-lg-none banner\" [routerLink]=\"['/catergory', 'Camp Humphreys', '799']\">\n  </div>\n  <app-catergory-newly></app-catergory-newly>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/catergory/new-post/catergory-newly.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/catergory/new-post/catergory-newly.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row newly-post\">\n    <div class=\"col-12 newly-post-title\">\n      <h4>{{ catergory[0].name }} 새 게시글</h4>\n    </div>\n    <div class=\"col-11 newly-post-content\" *ngFor=\"let post of posts\">\n      <div class=\"post-cotent\">\n        <!--왼쪽(좋아요)-->\n        <div class=\"post-left\">\n          <button (click)=\"increase(post?.post_no)\">\n            <svg\n              aria-hidden=\"true\"\n              class=\"svg-icon m0 iconArrowUpLg\"\n              width=\"36\"\n              height=\"36\"\n              viewBox=\"0 0 36 36\"\n            >\n              <path d=\"M2 26h32L18 10 2 26z\" [attr.fill]=\"voteUpColor\"></path>\n            </svg>\n          </button>\n          <div class=\"votes\">{{ post?.likes }}</div>\n          <button (click)=\"decrease(post?.post_no)\">\n            <svg\n              aria-hidden=\"true\"\n              class=\"svg-icon m0 iconArrowDownLg\"\n              width=\"36\"\n              height=\"36\"\n              viewBox=\"0 0 36 36\"\n            >\n              <path d=\"M2 10h32L18 26 2 10z\" [attr.fill]=\"voteDownColor\"></path>\n            </svg>\n          </button>\n        </div>\n\n        <!--중앙( 제목 / 내용/ 작성자 )-->\n        <div class=\"post-center\">\n          <div class=\"title\">\n            <a\n              [routerLink]=\"['/catergory', catergory[0].fileNav, post?.post_no]\"\n              >{{ post.title }}</a\n            >\n          </div>\n          <div class=\"content\" [innerHTML]=\"post?.curtContent\"></div>\n          <div class=\"writer\">\n            <img [src]=\"post?.avatar\" class=\"avatar\" />\n            {{ post?.writer }}\n            <small class=\"text-muted\">{{\n              post?.post_date | date: \"yyyy-MM-dd hh:mm a\":\"UTC\"\n            }}</small>\n          </div>\n        </div>\n\n        <!--오른쪽(대표이미지)-->\n        <div class=\"post-right\">\n          <img [src]=\"post?.img_path\" *ngIf=\"post?.img_path ? true : false\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"col-11 newly-post-content finish\" *ngIf=\"isFinish\">Finish</div>\n    <mat-spinner *ngIf=\"isLoding\"></mat-spinner>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/catergory/popular-post/catergory-popular.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/catergory/popular-post/catergory-popular.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"description clearfix\">\n    <div class=\"post-hash\">\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let hashTag of catergory[0].hashTag\"\n          >#{{ hashTag }}</mat-chip\n        >\n      </mat-chip-list>\n    </div>\n    <div class=\"space\"></div>\n    <button\n      class=\"btn btn-info post-button\"\n      routerLink=\"/post\"\n      [queryParams]=\"{ catergory: catergory[0].name }\"\n      *ngIf=\"isAuth\"\n    >\n      <span style=\"position: relative; top: -2px\">\n        <mat-icon style=\"position: relative; top: 5px\">post_add</mat-icon>\n        <span>New Post</span>\n      </span>\n    </button>\n  </div>\n  <div class=\"row hot-post\">\n    <div class=\"col-12 hot-post-title\">\n      <h4>{{ catergory[0].name }} 인기 게시글</h4>\n    </div>\n    <div class=\"col-12 hot-post-content\">\n      <div class=\"row\">\n        <div\n          class=\"col-lg-4 col-sm-6 pt-3 pb-3\"\n          *ngFor=\"let post of popularPost\"\n        >\n          <mat-card>\n            <mat-card-header>\n              <div class=\"mat-card-avatar\">\n                <!-- <img [src]=\"post.avatar\" /> -->\n              </div>\n              <div class=\"mat-card-header-text\">\n                <mat-card-title\n                  ><a\n                    [routerLink]=\"[\n                      '/catergory',\n                      catergory[0].fileNav,\n                      post.post_no\n                    ]\"\n                    >{{ post.title }}</a\n                  ></mat-card-title\n                >\n                <mat-card-subtitle>{{ post.writer }}</mat-card-subtitle>\n              </div>\n            </mat-card-header>\n            <div class=\"mat-card-body\" style=\"line-height: 200px\">\n              <img\n                class=\"mat-card-image\"\n                mat-card-image\n                [src]=\"post.img_path\"\n                *ngIf=\"post.img_path; else elseBlock\"\n              />\n              <ng-template #elseBlock\n                ><img\n                  class=\"mat-card-image\"\n                  mat-card-image\n                  src=\"../../../assets/images/logo3.jpg\"\n              /></ng-template>\n            </div>\n            <mat-card-content>\n              <p _ngcontent-tkn-c193=\"\">{{ post.content }}</p>\n            </mat-card-content>\n            <!--\n              <mat-card-actions>\n                <button class=\"btn btn-primary\">Like</button>\n              </mat-card-actions>\n              -->\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-popular-post></app-popular-post>\n\n<app-new-post></app-new-post>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/home/new-post/new-post.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/home/new-post/new-post.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mb-3\">\n    <h3 class=\"mat-headline\">새 게시글</h3>\n  </div>\n  <div class=\"row\">\n    <div\n      class=\"col-lg-4 col-md-6 col-sm-12 m-0 post\"\n      *ngFor=\"let post of newlyPost\"\n    >\n      <h5 class=\"catergory\">{{ post.catergory }}</h5>\n      <div\n        class=\"newly-post-content\"\n        [routerLink]=\"['/catergory', post.catergory, post.post_no]\"\n      >\n        <h4 class=\"post-title\">{{ post.title }}</h4>\n        <p class=\"post-content\">{{ post.curtContent }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/home/popular-post/popular-post.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/home/popular-post/popular-post.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mb-3 mat-headline\">\n    <h3 style=\"font-size: 1.5rem !important\" class=\"pt-2\">인기 게시글</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 popular-post\" *ngFor=\"let post of popularPost\">\n      <div class=\"col-12 post-catergory\">\n        <h5 class=\"catergory\">{{ post.catergory }}</h5>\n      </div>\n      <div\n        class=\"row no-gutters hot-post-content\"\n        [routerLink]=\"['/catergory', post.catergory, post.post_no]\"\n      >\n        <div class=\"col-4 hot-post-image\">\n          <img\n            [src]=\"post.img_path\"\n            class=\"img-fluid\"\n            *ngIf=\"post.img_path; else elseBlock\"\n          />\n          <ng-template #elseBlock\n            ><img class=\"img-fluid\" src=\"../../../assets/images/logo3.jpg\"\n          /></ng-template>\n        </div>\n        <div class=\"col-8\">\n          <div class=\"card-body\">\n            <h6 class=\"card-title\">{{ post.title }}</h6>\n            <p class=\"card-text\">{{ post.curtContent }}</p>\n            <p class=\"card-text\">\n              <small class=\"text-muted\">{{\n                post.post_date | date: \"yyyy-MM-dd hh:mm a\":\"UTC\"\n              }}</small>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/nav/nav.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/nav/nav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-sticky d-none d-sm-block\">\n  <ul class=\"nav flex-column\">\n    <li *ngFor=\"let cg of catergory; let i = index\" class=\"nav-item\">\n      <a\n        class=\"nav-link\"\n        [routerLink]=\"['/catergory', cg.fileNav]\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        >{{ cg.name }}</a\n      >\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/search/search.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/search/search.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"search\">\n    <h4>{{searchInput}}</h4>\n    <small>Search results</small>\n  </div>\n  <div\n        infiniteScroll\n        [infiniteScrollDistance]=\"2\"\n        [scrollWindow]=\"true\"\n        (scrolled)=\"onScrollDown()\"\n        style=\"width:100%;\"\n        class=\"newly-post-parent\"\n      >\n    <div class=\"col-11 newly-post-content\" *ngFor=\"let post of posts\">\n      <div class=\"post-cotent\">\n          <!--(좋아요)-->\n        <div class=\"post-left\">\n          <button>\n            <svg aria-hidden=\"true\" class=\"svg-icon m0 iconArrowUpLg\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\">\n              <path d=\"M2 26h32L18 10 2 26z\"></path>\n            </svg>\n          </button>\n          <div class=\"votes\">{{post.likes}}</div>\n          <button>\n            <svg aria-hidden=\"true\" class=\"svg-icon m0 iconArrowDownLg\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\">\n              <path d=\"M2 10h32L18 26 2 10z\"></path>\n            </svg>\n          </button>\n        </div>\n        <!--(대표이미지)-->\n        <div class=\"post-center\">\n          <img [src]=post.img_path *ngIf=\"post.img_path?true:false\">\n        </div>\n        <!--( 제목 / 내용/ 작성자 )-->\n        <div class=\"post-right\">\n          <div class=\"title\">\n            <a [routerLink]=\"['/catergory', post.catergory, post.post_no]\"><div [innerHTML]=\"post.title\"></div></a>\n          </div>\n          <div class=\"content\" [innerHTML]=post.curtContent></div>\n          <div class=\"writer\">\n            <small class=\"text-muted\">{{post.post_date | date: \"yyyy-MM-dd hh:mm a\"}}</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/user/post/user-post.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/user/post/user-post.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-post\">\n  <h4 class=\"mt-5\">Post</h4>\n  <div\n        infiniteScroll\n        [infiniteScrollDistance]=\"2\"\n        [scrollWindow]=\"true\"\n        (scrolled)=\"onScrollDown()\"\n        style=\"width:100%;\"\n        class=\"newly-post-parent\"\n      >\n    <div class=\"col-12 newly-post-content\" *ngFor=\"let post of posts\">\n      <div class=\"post-cotent\">\n          <!--(좋아요)-->\n        <div class=\"post-left\">\n          <button>\n            <svg aria-hidden=\"true\" class=\"svg-icon m0 iconArrowUpLg\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\">\n              <path d=\"M2 26h32L18 10 2 26z\"></path>\n            </svg>\n          </button>\n          <div class=\"votes\">{{post.likes}}</div>\n          <button>\n            <svg aria-hidden=\"true\" class=\"svg-icon m0 iconArrowDownLg\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\">\n              <path d=\"M2 10h32L18 26 2 10z\"></path>\n            </svg>\n          </button>\n        </div>\n        <!--(대표이미지)-->\n        <div class=\"post-center\">\n          <img [src]=post.img_path *ngIf=\"post.img_path?true:false\">\n        </div>\n        <!--( 제목 / 내용/ 작성자 )-->\n        <div class=\"post-right\">\n          <div class=\"title\">\n            <a [routerLink]=\"['/catergory', post.catergory, post.post_no]\"><div [innerHTML]=\"post.title\"></div></a>\n          </div>\n          <div class=\"content\" [innerHTML]=post.curtContent></div>\n          <div class=\"writer\">\n            <small class=\"text-muted\">{{post.post_date | date: \"yyyy-MM-dd hh:mm a\"}}</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/user/setting/user-setting.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/user/setting/user-setting.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-setting\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n  <div class=\"row mt-5\">\n    <div class=\"col-lg-5\">\n      <div class=\"user-image\">\n        <h4 class=\"m-0 user-image-h4\">Image</h4>\n        <div class=\"user-image-content\">\n          <img [src]=\"userData.avatar\" class=\"avatar\" *ngIf=\"!imageNew\">\n          <div *ngIf=\"mode==='update'\">\n            <img [src]=\"imagePreview\" class=\"avatar\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"filePicker.click()\">\n              <i class=\"fas fa-plus\"></i> Add Profile Picture\n            </button>\n            <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\n            <button type=\"button\" class=\"btn btn-outline-dark\">default picture</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-7\">\n      <div>\n        <h4>Account</h4>\n        <table class=\"table table-bordered\" *ngIf=\"mode==='select'\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Email address</th>\n              <td>{{userData.email}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\" rowspan=\"2\">Change password</th>\n              <td>New password</td>\n            </tr>\n            <tr>\n              <td>Confirm new password</td>\n            </tr>\n          </tbody>\n        </table>\n        <div formGroupName=\"passwordGroup\" *ngIf=\"mode==='update'\">\n        <table class=\"table table-bordered\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Email address</th>\n              <td>{{userData.email}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\" rowspan=\"2\">Change password</th>\n              <td><input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"New password\"></td>\n            </tr>\n            <tr>\n              <td><input type=\"password\" id=\"confirmPassword\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Confirm new password\"></td>\n            </tr>\n          </tbody>\n        </table>\n        <small style=\"color:red;\">Please enter at least 6 characters including case and special characters.</small>\n        </div>\n      </div>\n      <div class=\"mt-5\">\n        <h4>Profile</h4>\n        <table class=\"table table-bordered\">\n          <tbody>\n            <tr>\n              <th scope=\"row\">Nickname</th>\n              <td *ngIf=\"mode==='select'\">{{userData.nickname}}</td>\n              <td *ngIf=\"mode==='update'\"><input type=\"text\" id=\"nickname\" class=\"form-control\" formControlName=\"nickName\" [value]=\"userData.nickname\"></td>\n            </tr>\n            <tr>\n              <th scope=\"row\">First name</th>\n              <td>{{userData.firstname}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Last name</th>\n              <td>{{userData.lastname}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Gender</th>\n              <td>{{userData.gender}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"button-div\">\n    <button type=\"button\" class=\"btn update\" *ngIf=\"mode==='select'\"(click)=\"onUpdate()\">Update</button>\n    <button class=\"btn update\" *ngIf=\"mode==='update'\" type=\"submit\" [disabled]=\"form.invalid\">Save</button>\n  </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/user/user.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/user/user.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tab\">\n    <a routerLink=\"/user/setting\" [class.active]=\"kind==='setting'\">User Settings</a>\n    <a routerLink=\"/user/post\" [class.active]=\"kind==='post'\">Your Post</a>\n  </div>\n  <app-user-setting *ngIf=\"kind==='setting'\"></app-user-setting>\n  <app-user-post *ngIf=\"kind==='post'\"></app-user-post>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{data.message}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--태블릿용, 데스크탑용 헤더-->\n<mat-toolbar class=\"d-none d-sm-block\">\n  <mat-toolbar-row>\n    <div\n      class=\"col-2 header-left\"\n      style=\"font-weight: 700; cursor: pointer\"\n      routerLink=\"/\"\n    >\n      개발자's Community\n    </div>\n    <div class=\"col-6 header-center\">\n      <form\n        class=\"form-inline\"\n        #searchForm=\"ngForm\"\n        (ngSubmit)=\"onNgSubmit(searchForm)\"\n        navalidate\n      >\n        <input\n          class=\"form-control search\"\n          type=\"search\"\n          placeholder=\"Search\"\n          aria-label=\"Search\"\n          name=\"searchInput\"\n          ngModel\n          #searchInput\n          required\n        />\n        <button mat-stroked-button class=\"signup\" type=\"submit\">검색</button>\n      </form>\n    </div>\n    <div class=\"col-4 header-right\">\n      <button\n        mat-stroked-button\n        class=\"login\"\n        routerLink=\"/login\"\n        *ngIf=\"!userIsAuthenticated\"\n      >\n        로그인\n      </button>\n      <button\n        mat-flat-button\n        class=\"signup\"\n        routerLink=\"/signup\"\n        *ngIf=\"!userIsAuthenticated\"\n      >\n        회원가입\n      </button>\n\n      <button\n        mat-button\n        [matMenuTriggerFor]=\"user\"\n        *ngIf=\"userIsAuthenticated\"\n        class=\"user_btn\"\n      >\n        <img [src]=\"userData.avatar\" class=\"user\" />\n      </button>\n      <mat-menu #user=\"matMenu\">\n        <button mat-menu-item routerLink=\"/user/setting\">\n          <mat-icon>account_box</mat-icon>\n          User settings\n        </button>\n        <button mat-menu-item routerLink=\"/user/post\">\n          <mat-icon>work</mat-icon>\n          Your post\n        </button>\n        <!--\n        <div *ngFor=\"let email of adminEmail\">\n          <div *ngif=\"email?.email === 'dongun8943@gmail.com' \">\n            <button mat-menu-item routerLink=\"/ifix/document\">\n              <mat-icon>work</mat-icon>\n              iFix Document\n            </button>\n          </div>\n        </div>\n        -->\n        <!--\n        <button mat-menu-item routerLink=\"/ifix/document\">\n          <mat-icon>work</mat-icon>\n          iFix Document\n        </button>\n        -->\n        <button mat-menu-item (click)=\"onLogout()\">\n          <mat-icon>exit_to_app</mat-icon>\n          Sign out\n        </button>\n      </mat-menu>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<!--모바일용 헤더-->\n<div\n  *ngIf=\"mobileQuery.matches\"\n  [class.example-is-mobile]=\"mobileQuery.matches\"\n>\n  <mat-toolbar class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <div\n      class=\"col-2 header-left\"\n      style=\"font-weight: 700; cursor: pointer\"\n      routerLink=\"/\"\n    >\n      개발자's Community\n    </div>\n    <span class=\"spacer\"> </span>\n    <button\n      class=\"catergory-button\"\n      mat-icon-button\n      [matMenuTriggerFor]=\"menu\"\n      aria-label=\"Example icon-button with a menu\"\n      *ngIf=\"!userIsAuthenticated\"\n    >\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>\n        <mat-icon>person</mat-icon>\n        <span><a routerLink=\"/login\">login</a></span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>person_add</mat-icon>\n        <span><a routerLink=\"/signup\">signup</a></span>\n      </button>\n    </mat-menu>\n    <button\n      mat-button\n      [matMenuTriggerFor]=\"user\"\n      *ngIf=\"userIsAuthenticated\"\n      class=\"user_btn\"\n    >\n      <img [src]=\"userData.avatar\" class=\"user\" />\n    </button>\n    <mat-menu #user=\"matMenu\">\n      <button mat-menu-item routerLink=\"/user/setting\">\n        <mat-icon>account_box</mat-icon>\n        User settings\n      </button>\n      <button mat-menu-item routerLink=\"/user/post\">\n        <mat-icon>work</mat-icon>\n        Your post\n      </button>\n      <button mat-menu-item (click)=\"onLogout()\">\n        <mat-icon>exit_to_app</mat-icon>\n        Sign out\n      </button>\n    </mat-menu>\n  </mat-toolbar>\n  <mat-sidenav-container\n    class=\"example-sidenav-container\"\n    [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"\n  >\n    <mat-sidenav\n      #snav\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n      [fixedInViewport]=\"mobileQuery.matches\"\n      fixedTopGap=\"56\"\n    >\n      <mat-nav-list\n        *ngFor=\"let cg of catergory; let i = index\"\n        class=\"nav-item\"\n        (click)=\"sidenavClose()\"\n      >\n        <div class=\"nav-icon\">\n          <i [class]=\"cg.className\"></i>\n        </div>\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/catergory', cg.fileNav]\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          style=\"font-size: 0.8rem\"\n          >{{ cg.name }}</a\n        >\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <!--모바일용 바디-->\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post/post-create/post-create.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post/post-create/post-create.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <form [formGroup]=\"postForm\" (submit)=\"onNgSubmit()\" novalidate>\n      <div class=\"row justify-content-md-center\">\n        <div class=\"post-header\">\n          <label class=\"input-group-text title-label\">Title</label>\n          <input\n            type=\"text\"\n            class=\"form-control title-input mr-5\"\n            formControlName=\"title\"\n            placeholder=\"Post Title\"\n            >\n          <div class=\"input-group catergory-select\">\n            <select class=\"custom-select\" formControlName=\"catergory\">\n              <option [ngValue]=\"null\" disabled>Choose a catergory</option>\n              <option *ngFor=\"let cg of catergory\" [ngValue]=\"cg.name\"> <!--이게 주의할 점이 body로 넘겨줄때는 name, queryString으로 넘겨줄때는 fileNav로 해야함...-->\n                {{ cg.name }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <span *ngIf=\"postForm.get('title').invalid && postForm.get('title').touched\" style=\"color:red;\">The title is three to fifty characters long.</span>\n      <br/>\n      <div class=\"row justify-content-md-center\">\n        <!--\n          <div [ngxSummernote]=\"config\" (summernoteModelChange)=\"myEventHanlder($event)\"></div>\n        -->\n        <!--\n        <div [ngxSummernote]=\"config\" (imagePath)=\"getImagePath($event)\" name=\"content\" #content=\"ngModel\" required ngModel></div>\n        -->\n        <div [ngxSummernote]=\"config\" formControlName=\"content\"></div>\n      </div>\n      <div class=\"post-footer\">\n        <button class=\"btn save\" [disabled]=\"postForm.invalid\" [class.disabled]=\"postForm.invalid\">save</button>\n      </div>\n    </form>\n    <!--<p>Form value: {{ postForm.value | json }}</p> -->\n    <!--\n    <div [innerHTML]=\"content\">\n    </div>\n    -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post/post-list/post-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post/post-list/post-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n  <!--제목-->\n  <h3 class=\"title\">{{post.title}}</h3>\n  <!--작성자/아바타 + 작성일자-->\n  <div class=\"write\">\n    <div>\n      <div>\n        <img [src]=\"post?.avatar\" class=\"avatar mr-2\">\n        <small class=\"text-muted\">{{post.writer}}</small>\n      </div>\n      <small class=\"text-muted\">{{post.post_date | date: \"yyyy-MM-dd hh:mm a\":\"UTC\"}}</small>\n      <div *ngIf=\"userNickname === post.writer\" style=\"display: inline-block;\">\n        <small class=\"text-muted span-text\"><a [routerLink]=\"['/post', post.post_no]\"class=\"modify\">modify</a></small>\n        <small class=\"text-muted span-text\"><a (click)=\"onDelete(post.post_no)\" class=\"delete\">delete</a></small>\n      </div>\n      <!--\n      <div class=\"content-identity\">\n        <i class=\"far fa-eye\"></i> {{post?.views}} views\n      </div>\n      -->\n    </div>\n  </div>\n  <hr>\n  <div class=\"content\" [innerHTML]=\"post.content | sanitizeHtml\"></div>\n  <div class=\"voteblame\">\n      <a class=\"ab-btn-vote\" (click)=\"onVote(1)\">\n        <span class=\"vote-top\">\n          <i class=\"far fa-thumbs-up\" *ngIf=\"!isLike; else elseBlock1\"></i>\n          <ng-template #elseBlock1><i class=\"fas fa-thumbs-up\"></i></ng-template>\n          <small class=\"voted-count\">{{likeHate?.total_like}}</small>\n        </span>\n        <span class=\"vote-bottom\">Likes</span>\n      </a>\n      <a class=\"ab-btn-vote ml-3\" (click)=\"onVote(-1)\">\n          <span class=\"vote-top\">\n            <i class=\"far fa-thumbs-down\" *ngIf=\"!isHate; else elseBlock2\"></i>\n            <ng-template #elseBlock2><i class=\"fas fa-thumbs-down\"></i></ng-template>\n            <small class=\"voted-count\">{{likeHate?.total_hate}}</small>\n          </span>\n          <span class=\"vote-bottom\">Hates</span>\n        </a>\n  </div>\n  <!--댓글-->\n  <!--cols는 이 요소의 너비를 나타내는 속성으로, 한 줄에 몇 글자까지 들어가게 할 지를 정합니다.\n  rows는 textarea의 높이를 나타내는 속성으로, 이 요소의 높이가 몇 줄로 나타날지를 정해줍니다. -->\n  <h5 class=\"mt-5\">Comments {{post.reply_cnt}}</h5>\n  <div class=\"comments\">\n    <form #replyForm=\"ngForm\" (ngSubmit)=\"onNgReplySubmit(replyForm)\" novalidate>\n      <textarea name=\"reply\" required ngModel #reply=\"ngModel\"></textarea>\n      <button class=\"btn register\" type=\"submit\" [disabled]=\"replyForm.invalid\">send</button>\n    </form>\n  </div>\n  <div class=\"article-comments\">\n    <ul class=\"reply\" *ngFor=\"let reply of replys; let i = index\">\n      <li>\n        <div class=\"comment-box\">\n          <div class=\"info\">{{reply.writer}}</div>\n          <div class=\"text-wrap\">{{reply.content}}</div>\n          <div class=\"info-base\">{{reply.reply_date | date: \"yyyy-MM-dd hh:mm\":\"UTC\"}} | <a style=\"cursor: pointer;\" (click)=\"onReplyDelete(i, reply.reply_no)\">delete</a></div>\n          <div class=\"box-tool\">\n            <a class=\"box-btn-reply\" (click)=\"selectItem(reply.reply_no)\" style=\"cursor: pointer;\">\n              <strong class=\"reply_txt\">reply {{reply.count}}</strong>\n              <span class=\"reply_cnt\"></span>\n            </a>\n          </div>\n          <div class=\"reply-comments comments\" [class.active]=\"reply.reply_view\">\n            <ul class=\"reply\" *ngFor=\"let rreply of rreplys; let i = index\">\n              <li>\n                <div class=\"comment-box\">\n                  <div class=\"info\">{{rreply.writer}}</div>\n                  <div class=\"text-wrap\">{{rreply.content}}</div>\n                  <div class=\"info-base\">{{rreply.reply_date | date: \"yyyy-MM-dd hh:mm\":\"UTC\"}} | <a style=\"cursor: pointer;\" (click)=\"onReplyDelete(i, rreply.reply_no, reply.reply_no)\">delete</a></div>\n                </div>\n              </li>\n            </ul>\n            <form #rreplyForm=\"ngForm\" (ngSubmit)=\"onNgRReplySubmit(rreplyForm, reply.reply_no)\" novalidate>\n              <!--input tpye=hidden은 어떻게 값을 전달하는 거지. 전달이 안됨. -->\n              <textarea name=\"rreply\" required ngModel #rreply=\"ngModel\"></textarea>\n              <button class=\"btn register\" type=\"submit\" [disabled]=\"rreplyForm.invalid\">send</button>\n            </form>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"addButton\" class=\"add-button\">\n    <button class=\"btn btn-primar\" (click)=\"onloadReply()\">더보기</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"]
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app-rounting.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-rounting.module.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post-create/post-create.component */ "./src/app/post/post-create/post-create.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");







const routes = [
    { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: "post", component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: "post/:postId",
        component: _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
];
// {scrollPositionRestoration: 'top'}
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _google_analytics_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-analytics-events-service */ "./src/app/google-analytics-events-service.ts");






let AppComponent = class AppComponent {
    constructor(router, googleAnalyticsEventsService, media, authService) {
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.authService = authService;
        this.isView = true;
        this.mobileQuery = media.matchMedia('(min-width: 576px)');
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    submitEvent() {
        this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
    // 로그인, 회원가입일때는 전체화면을 위한...
    ngDoCheck() {
        this.href = this.router.url;
        if (this.href === '/login' || this.href === '/signup') {
            this.isView = false;
        }
        else {
            this.isView = true;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _google_analytics_events_service__WEBPACK_IMPORTED_MODULE_5__["GoogleAnalyticsEventsService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _body_body_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/body.module */ "./src/app/body/body.module.ts");
/* harmony import */ var _app_rounting_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-rounting.module */ "./src/app/app-rounting.module.ts");
/* harmony import */ var _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/post-create/post-create.component */ "./src/app/post/post-create/post-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _post_ngx_summernote_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/ngx-summernote.directive */ "./src/app/post/ngx-summernote.directive.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth-intercepter */ "./src/app/auth/auth-intercepter.ts");
/* harmony import */ var _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/post-list/post-list.component */ "./src/app/post/post-list/post-list.component.ts");
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sanitize-html-pipe */ "./src/app/sanitize-html-pipe.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_11__["PostCreateComponent"],
            _post_ngx_summernote_directive__WEBPACK_IMPORTED_MODULE_13__["NgxSummernoteDirective"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
            _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__["PostListComponent"],
            _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_18__["SanitizeHtmlPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _app_rounting_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _body_body_module__WEBPACK_IMPORTED_MODULE_9__["BodyModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__["RecaptchaV3Module"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_16__["AuthIntercepter"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true },
            {
                provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__["RECAPTCHA_V3_SITE_KEY"],
                useValue: "6Lf128MUAAAAAH841QayrFoQj0y0C6GCFYpanXh5",
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-intercepter.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-intercepter.ts ***!
  \******************************************/
/*! exports provided: AuthIntercepter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthIntercepter", function() { return AuthIntercepter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthIntercepter = class AuthIntercepter {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        // 헤더에 토큰을 추가해서 요청
        return next.handle(authRequest);
    }
};
AuthIntercepter.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthIntercepter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthIntercepter);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help/help.component */ "./src/app/auth/help/help.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/auth/reset/reset.component.ts");







const routers = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"] },
    { path: 'reset', component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"] },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routers)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
// 인증되지 않은 사용자가 잘못된 경로로 접근하려고 할 때, 클라이언트 단에서 막음


class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }
];


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help/help.component */ "./src/app/auth/help/help.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/auth/reset/reset.component.ts");










let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
            _help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
            _reset_reset_component__WEBPACK_IMPORTED_MODULE_9__["ResetComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






const BACKED_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BACKED_URL;
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isAuthenticated = false;
        this.userAuthority = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // 상태변화리스너 생성
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getUserData() {
        return {
            userId: this.userId,
            userNickname: this.nickname,
            avatar: this.avatar
        };
    }
    // 사용자 인증여부 반환
    getIsAuth() {
        return this.isAuthenticated;
    }
    // 토큰 반환
    getToken() {
        return this.token;
    }
    // 처음 화면 로딩할때 실행되는 함수 -> 토큰 재설정
    autoAuthUser() {
        // 로컬 저장소에 저장되어있는 정보를 불러온다
        const authInformation = this.getAuthData();
        if (!authInformation) { // 정보가 없다면 그냥 패스
            return;
        }
        // 토큰 유효성 검사
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.nickname = authInformation.nickname;
            this.avatar = authInformation.avatar;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    // 로그인 처리
    login(email, password, token) {
        // 형식틀을 정형화시킴
        const postData = {
            email: email,
            password: password,
            token: token
        };
        // 로그인 정보를 서버에 보냄
        this.http.post(BACKED_URL + '/user/login', postData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            // 토큰 검사
            if (token) {
                const expiresInDuration = response.expiresIn;
                // 토큰 유효시간이 되면 자동 로그아웃되도록! 토큰은 메모리에만 저장되기때문에
                // reload하면 로그아웃되보리는 문제가 발생함
                this.setAuthTimer(expiresInDuration);
                this.userId = response.userId;
                this.nickname = response.nickname;
                this.avatar = response.avatar;
                console.log(this.avatar);
                this.isAuthenticated = true;
                // local storage는 브라우저가 관리하는 저장소. 거기다가 저장해줘야 reload하거나
                // 껏다가 켜도 유지가 됨
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000); // 실제 종료시간 측정
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.userId, this.nickname, this.avatar);
                this.authStatusListener.next(true);
                this.router.navigate(['/']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    // 회원가입 처리
    createUser(email, password, firstName, lastName, nickName, gender, token) {
        const authCreateData = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            nickName: nickName,
            gender: gender,
            token: token
        };
        this.http.post(BACKED_URL + '/user/signup', authCreateData)
            .subscribe(() => {
            // 회원가입 성공적이면 메인페이지로 이동
            alert('Please authenticate with the e-mail you used to sign up.');
            this.router.navigate(['/']);
        }, error => {
            // 에러발생
            this.authStatusListener.next(false);
        });
    }
    logout() {
        this.token = null;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    // 토큰 유효시간이 되면 자동으로 로그아웃 되도록..
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
            alert('Automatically logged out over time.');
        }, duration * 1000); // ms단위이기 때문에
    }
    // 로컬저장소에 저장하는 메소드
    saveAuthData(token, expirationDate, userId, nickname, avatar) {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('avatar', avatar);
    }
    // 로그아웃시 로컬저장소에 삭제하는 메소드
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('nickname');
        localStorage.removeItem('avatar');
    }
    // 로컬저장소에 저장한걸 불러오는 메소드
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expirationDate');
        const userId = localStorage.getItem('userId');
        const nickname = localStorage.getItem('nickname');
        const avatar = localStorage.getItem('avatar');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            nickname: nickname,
            avatar: avatar
        };
    }
    // 회원정보 요청
    getUserAccount() {
        const queryParams = `?email=${this.getUserData().userId}`;
        // 로그인 정보를 서버에 보냄
        return this.http.get(BACKED_URL +
            '/user/search' + queryParams);
    }
    // 회원정보 수정
    setUserAccount(password, imagePath, nickname) {
        let postData;
        // 이미지 객체인 경우 -> form 형식 전달
        if (typeof (imagePath) === 'object') {
            postData = new FormData();
            postData.append("email", this.getAuthData().userId);
            postData.append("password", password);
            postData.append("image", imagePath);
            postData.append("nickname", nickname);
        }
        else { // 이미지 경로인 경우 -> json형식 전달
            postData = { email: this.getAuthData().userId, password: password, image: imagePath, nickname: nickname };
        }
        this.http.put(BACKED_URL + '/user', postData)
            .subscribe(() => {
            alert('Member information has been modified successfully. Please log in again.');
            this.logout();
            this.router.navigate(['/']);
        });
    }
    // 비번 리셋을 위한 확인 이메일
    confirmUser(email) {
        console.log('이거 진짜 2번 보내지는거냐?');
        this.http.get(BACKED_URL + '/user/confirm?email=' + email)
            .subscribe(() => {
        });
    }
    passwordReset(email, key, password) {
        const postData = {
            email: email,
            key: key,
            password: password,
        };
        console.log(postData);
        // 게시글 정보를 서버에 전송
        this.http.post(BACKED_URL + '/user/passwordReset', postData)
            .subscribe(() => {
            alert('Password setting is complete. Please sign in again.');
            this.router.navigate(['/login']);
        });
    }
    getUserAuthority() {
        this.http.get(BACKED_URL + '/user/authority')
            .subscribe((email) => {
            this.userAuthority.next(email);
            // console.log(email);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/help/help.component.css":
/*!**********************************************!*\
  !*** ./src/app/auth/help/help.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top:100px;\n}\n\n.logo {\n  max-width: 300px;\n}\n\nh1, h6{\n  font-weight: bold;\n}\n\n.row {\n  margin:0px;\n}\n\nspan {\n  color:#FF9000;\n}\n\n@media (max-width: 580px) {\n  :host {\n    margin-top:0px;\n  }\n  * {\n    font-size: 0.9rem;\n  }\n  .logo {\n    max-width: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDoxMDBweDtcbn1cblxuLmxvZ28ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuaDEsIGg2e1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yb3cge1xuICBtYXJnaW46MHB4O1xufVxuc3BhbiB7XG4gIGNvbG9yOiNGRjkwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICB9XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4gIC5sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/help/help.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/help/help.component.ts ***!
  \*********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let HelpComponent = class HelpComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.sumitBool = false;
    }
    onNgSubmit(emailForm) {
        if (emailForm.invalid) {
            return;
        }
        this.sumitBool = true;
        this.authService.confirmUser(emailForm.value.email);
    }
};
HelpComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-help',
        template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/help/help.component.html"),
        styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/auth/help/help.component.css")]
    })
], HelpComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 250px;\n}\n@media (max-width: 580px) {\n  :host {\n    margin-top: 0px;\n  }\n}\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n.text-center {\n  text-align: center !important;\n  height: 100%;\n}\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\nmat-spinner {\n  margin: auto;\n  z-index: 2;\n}\n.logo {\n  max-width: 300px;\n}\nbutton {\n  background-color: #e599f7;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDI1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb250LXdlaWdodC1ub3JtYWwge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB6LWluZGV4OiAyO1xufVxuLmxvZ28ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OTlmNztcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router, recaptchaV3Service) {
        this.authService = authService;
        this.router = router;
        this.recaptchaV3Service = recaptchaV3Service;
        // 로그인 상태 검사를 하기 위해...
        this.isLoding = false;
        this.recentToken = '';
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            if (authStatus) { // 로그인 성공하면
                this.isLoding = false;
                this.authService.getUserAuthority();
            }
            else { // 로그인 실패하면
                this.isLoding = false;
            }
        });
    }
    onNgSubmit(loginForm) {
        if (loginForm.invalid) {
            return;
        }
        this.singleExecutionSubscription = this.recaptchaV3Service.execute('login')
            .subscribe((token) => {
            this.recentToken = token;
            this.isLoding = true;
            this.authService.login(loginForm.value.email, loginForm.value.password, this.recentToken);
        });
    }
    ngOnDestroy() {
        if (this.singleExecutionSubscription) {
            this.singleExecutionSubscription.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["ReCaptchaV3Service"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/reset/reset.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/reset/reset.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top:100px;\n}\n\n.logo {\n  max-width: 300px;\n}\n\nh1, h6{\n  font-weight: bold;\n}\n\n.row {\n  margin:0px;\n}\n\nspan {\n  color:#FF9000;\n}\n\n@media (max-width: 580px) {\n  :host {\n    margin-top:0px;\n  }\n  * {\n    font-size: 0.9rem;\n  }\n  .logo {\n    max-width: 200px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6MTAwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbmgxLCBoNntcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucm93IHtcbiAgbWFyZ2luOjBweDtcbn1cbnNwYW4ge1xuICBjb2xvcjojRkY5MDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgfVxuICAqIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAubG9nbyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/reset/reset.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/reset/reset.component.ts ***!
  \***********************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _signup_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/password-validator */ "./src/app/auth/signup/password-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ResetComponent = class ResetComponent {
    constructor(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.resetFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            passwordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}')]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }, _signup_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].match),
        });
        this.route.queryParams.subscribe((param) => {
            this.email = param.email;
            this.key = param.key;
        });
    }
    onSubmit() {
        if (this.resetFormGroup.invalid) {
            return;
        }
        this.authService.passwordReset(this.email, this.key, this.resetFormGroup.value.passwordGroup.password);
    }
};
ResetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-reset',
        template: __webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/reset/reset.component.html"),
        styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/auth/reset/reset.component.css")]
    })
], ResetComponent);



/***/ }),

/***/ "./src/app/auth/signup/password-validator.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/password-validator.ts ***!
  \***************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class PasswordValidator {
    static match(form) {
        // 매개변수로 전달받은 검증 대상 폼 모델에서 password와 confirmPassword을 취득
        const password = form.get('password').value;
        const confirmPassword = form.get('confirmPassword').value;
        // password와 confirmPassword의 값을 비교한다.
        if (password !== confirmPassword) {
            // 검증에 실패한 경우, 에러 객체를 반환한다.
            return { match: { password, confirmPassword } };
        }
        else {
            // 검증에 성공한 경우, null을 반환한다.
            return null;
        }
    }
}


/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 100px;\n}\n@media (max-width: 580px) {\n  :host {\n    margin-top: 0px;\n  }\n}\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n.logo {\n  width: 300px;\n  height: 200px;\n}\n.text-center {\n  text-align: center !important;\n  height: 100%;\n}\n.form-signin {\n  padding: 15px;\n  margin: auto;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.text-field {\n  padding: 50px 10%;\n  border-radius: 10px;\n  background-color: #f2f3f4;\n}\n.form-group {\n  text-align: left;\n}\n.form-group label {\n  font-weight: 600;\n}\n.field-group-name {\n  width: 100%;\n  text-align: left;\n}\ninput[type=\"file\"] {\n  visibility: hidden;\n}\nbutton {\n  background-color: #e599f7;\n  color: white;\n}\n.scroll {\n  overflow-y: scroll;\n  height: 180px;\n  margin-top: 18px;\n  border: 1px #bbb solid;\n}\n.policy_cont {\n  padding: 12px;\n  line-height: 20px;\n  color: #555;\n  text-align: left;\n  font-size: 0.9em;\n}\n.policy_check {\n  text-align: right;\n  margin-top: 17px;\n  font-size: 11.65px;\n  color: #333;\n}\n.checkbox {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  padding-left: 16px;\n}\n.checkbox input[type=\"checkbox\"],\nlabel {\n  cursor: pointer;\n}\n@media (max-width: 575.98px) {\n  form * {\n    font-size: 90%;\n  }\n  .form-signin {\n    width: 90%;\n  }\n}\n@media (min-width: 575.98px) and (max-width: 1000px) {\n  .form-signin {\n    width: 60%;\n  }\n}\n@media (min-width: 1000px) {\n  .form-signin {\n    width: 40%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLmxvZ28ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybS1zaWduaW4ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb250LXdlaWdodC1ub3JtYWwge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWZpZWxkIHtcbiAgcGFkZGluZzogNTBweCAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjQ7XG59XG4uZm9ybS1ncm91cCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZmllbGQtZ3JvdXAtbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5OWY3O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBib3JkZXI6IDFweCAjYmJiIHNvbGlkO1xufVxuLnBvbGljeV9jb250IHtcbiAgcGFkZGluZzogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLnBvbGljeV9jaGVjayB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDExLjY1cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICBmb3JtICoge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG4gIC5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NS45OHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuZm9ybS1zaWduaW4ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-validator */ "./src/app/auth/signup/password-validator.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");






let SignupComponent = class SignupComponent {
    constructor(authService, recaptchaV3Service) {
        this.authService = authService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.isLoding = false;
        this.recentToken = "";
    }
    ngOnInit() {
        // 리엑티브 폼 방식의 구현 / 검증
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[ㄱ-ㅎ|가-힣|a-z|A-Z]{1,20}"),
            ]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[ㄱ-ㅎ|가-힣|a-z|A-Z]{2,20}"),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            }),
            passwordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}"),
                ]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }, _password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].match),
            nickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]{3,20}"),
            ]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("male"),
        });
    }
    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }
        this.singleExecutionSubscription = this.recaptchaV3Service
            .execute("login")
            .subscribe((token) => {
            this.recentToken = token;
            this.isLoding = true;
            this.authService.createUser(this.signupForm.value.email, this.signupForm.value.passwordGroup.password, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.nickName, this.signupForm.value.gender, this.recentToken);
        });
    }
    ngOnDestroy() {
        if (this.singleExecutionSubscription) {
            this.singleExecutionSubscription.unsubscribe();
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["ReCaptchaV3Service"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/body/body-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/body/body-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BodyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyRoutingModule", function() { return BodyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _catergory_catergory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catergory/catergory.component */ "./src/app/body/catergory/catergory.component.ts");
/* harmony import */ var _body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post/post-list/post-list.component */ "./src/app/post/post-list/post-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/body/user/user.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/body/search/search.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/body/home/home.component.ts");










const routes = [
    {
        path: '',
        component: _body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }
        ]
    },
    {
        path: 'catergory',
        component: _body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
        children: [
            { path: ':postId', component: _catergory_catergory_component__WEBPACK_IMPORTED_MODULE_3__["CatergoryComponent"] }
        ]
    },
    {
        path: 'catergory',
        component: _body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
        children: [
            { path: ':postId/:post_no', component: _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"] }
        ],
    },
    {
        path: 'user',
        component: _body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
        children: [
            { path: ':kinds', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
        ]
    },
    {
        path: 'search',
        component: _body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
        children: [
            { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] }
        ]
    }
];
let BodyRoutingModule = class BodyRoutingModule {
};
BodyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BodyRoutingModule);



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nnav {\n  background-color: white !important;\n}\n.banner {\n  max-width:160px;\n  height: 600px;\n  margin-top: 130px;\n  margin-left : 20px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJhbm5lciB7XG4gIG1heC13aWR0aDoxNjBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0IDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _catergory_catergory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catergory/catergory.service */ "./src/app/body/catergory/catergory.service.ts");





let BodyComponent = class BodyComponent {
    constructor(router, location, catergoryService) {
        this.router = router;
        this.location = location;
        this.catergoryService = catergoryService;
        this.yScrollStack = [];
    }
    ngAfterViewInit() {
        this.loactionEvent = this.location.subscribe((ev) => {
            // console.log('location : ' + ev.url);
            this.lastPoppedUrl = ev.url;
            this.loactionEvent.unsubscribe();
        });
        this.routerEvent = this.router.events.subscribe((ev) => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // console.log('NavigationStart : ' + ev.url + ', ' + this.lastPoppedUrl);
                if (ev.url !== this.lastPoppedUrl) {
                    this.catergoryService.setyScrollStack(window.scrollY);
                }
            }
            else if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // console.log('NavigationEnd : ' + ev.url + ', ' + this.lastPoppedUrl);
                if (ev.url === this.lastPoppedUrl) { // 이전 url과 같으면.. 그니까 되돌아가는거면 복원
                    this.lastPoppedUrl = undefined;
                    // this.catergoryService.getyScrollStack();
                    // console.log('복원 : ' + this.catergoryService.getyScrollStack());
                    window.scrollTo(0, this.catergoryService.getyScrollStack());
                }
                else { // 아니라면 탑
                    window.scrollTo(0, 0);
                }
                this.routerEvent.unsubscribe();
            }
        });
    }
    ngOnInit() {
    }
    onNgSubmit(searchForm) {
        if (searchForm.invalid) {
            return;
        }
        this.router.navigate(['/search'], { queryParams: { searchInput: searchForm.value.searchInput } });
    }
    ngOnDestroy() {
    }
};
BodyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _catergory_catergory_service__WEBPACK_IMPORTED_MODULE_4__["CatergoryService"] }
];
BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-body',
        template: __webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/body.component.html"),
        styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
    })
], BodyComponent);



/***/ }),

/***/ "./src/app/body/body.module.ts":
/*!*************************************!*\
  !*** ./src/app/body/body.module.ts ***!
  \*************************************/
/*! exports provided: BodyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyModule", function() { return BodyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/body/nav/nav.component.ts");
/* harmony import */ var _body_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body-routing.module */ "./src/app/body/body-routing.module.ts");
/* harmony import */ var _body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/body/user/user.component.ts");
/* harmony import */ var _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/setting/user-setting.component */ "./src/app/body/user/setting/user-setting.component.ts");
/* harmony import */ var _user_post_user_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/post/user-post.component */ "./src/app/body/user/post/user-post.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/body/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.module */ "./src/app/body/home/home.module.ts");
/* harmony import */ var _catergory_catergory_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catergory/catergory.module */ "./src/app/body/catergory/catergory.module.ts");















let BodyModule = class BodyModule {
};
BodyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
            _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_9__["UserSettingComponent"],
            _user_post_user_post_component__WEBPACK_IMPORTED_MODULE_10__["UserPostComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
            _catergory_catergory_module__WEBPACK_IMPORTED_MODULE_14__["CatergoryModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _body_routing_module__WEBPACK_IMPORTED_MODULE_5__["BodyRoutingModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
        ]
    })
], BodyModule);



/***/ }),

/***/ "./src/app/body/catergory/catergory.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/catergory/catergory.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvY2F0ZXJnb3J5L2NhdGVyZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/body/catergory/catergory.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/catergory/catergory.component.ts ***!
  \*******************************************************/
/*! exports provided: CatergoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergoryComponent", function() { return CatergoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _catergory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catergory.service */ "./src/app/body/catergory/catergory.service.ts");



let CatergoryComponent = class CatergoryComponent {
    constructor(catergoryService) {
        this.catergoryService = catergoryService;
    }
    // 스크롤 복원과 무한 스크롤간의 문제 해결법...
    // 1. 네이버나 이런 단순 사이트 같은 경우에는 스크롤 복원만 고려해주면 이전 스크롤 복원하는 거는 쉬움.
    // 인스타그램 경우에는 이미지 위주라서... 이미지는 캐시에 저장하고, 스크롤 이동시에는 스크롤 주위에 약간의 데이터 태그만 보여줌.
    // 위, 아래는 마진, 패딩으로 채움. 실제 데이터 태그는 부분적이고 유동적임.
    // 신기한건... 이런 데이터들은 어디에 저장되는 걸까??
    // 스크롤 위치는 session에 페이지 마다 저장됨. 이걸 이용해서 다시 페이지 접속시 해당페이지로 이동할 수 있는 거임.
    // 서버와 통신에서 불러오는 거는 처음 불러올때만.. 이후에는 안 불러오던데? 서버와 통신을 안함.
    onScrollDown() {
        this.catergoryService.onScrollDownEvent.next();
    }
};
CatergoryComponent.ctorParameters = () => [
    { type: _catergory_service__WEBPACK_IMPORTED_MODULE_2__["CatergoryService"] }
];
CatergoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catergory',
        template: __webpack_require__(/*! raw-loader!./catergory.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/catergory/catergory.component.html"),
        styles: [__webpack_require__(/*! ./catergory.component.css */ "./src/app/body/catergory/catergory.component.css")]
    })
], CatergoryComponent);



/***/ }),

/***/ "./src/app/body/catergory/catergory.module.ts":
/*!****************************************************!*\
  !*** ./src/app/body/catergory/catergory.module.ts ***!
  \****************************************************/
/*! exports provided: CatergoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergoryModule", function() { return CatergoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _catergory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catergory.component */ "./src/app/body/catergory/catergory.component.ts");
/* harmony import */ var _new_post_catergory_newly_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-post/catergory-newly.component */ "./src/app/body/catergory/new-post/catergory-newly.component.ts");
/* harmony import */ var _popular_post_catergory_popular_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popular-post/catergory-popular.component */ "./src/app/body/catergory/popular-post/catergory-popular.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _body_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../body-routing.module */ "./src/app/body/body-routing.module.ts");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");









let CatergoryModule = class CatergoryModule {
};
CatergoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _catergory_component__WEBPACK_IMPORTED_MODULE_2__["CatergoryComponent"],
            _new_post_catergory_newly_component__WEBPACK_IMPORTED_MODULE_3__["CatergoryNewlyComponent"],
            _popular_post_catergory_popular_component__WEBPACK_IMPORTED_MODULE_4__["CatergoryPopularComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _body_routing_module__WEBPACK_IMPORTED_MODULE_6__["BodyRoutingModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"]
        ]
    })
], CatergoryModule);



/***/ }),

/***/ "./src/app/body/catergory/catergory.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/body/catergory/catergory.service.ts ***!
  \*****************************************************/
/*! exports provided: CatergoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergoryService", function() { return CatergoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






const BACKED_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKED_URL;
let CatergoryService = class CatergoryService {
    constructor(http) {
        this.http = http;
        this.onScrollDownEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.postsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.posts = [];
        this.yScrollStack = [];
    }
    // 스크롤 저장
    setyScrollStack(yScroll) {
        console.log('스크롤 저장 : ' + yScroll);
        this.yScrollStack.push(yScroll);
    }
    // 스크롤 불러오기
    getyScrollStack() {
        console.log('스크롤 호출 : ');
        return this.yScrollStack.pop();
    }
    // 게시글 리스트 불러오기(5개씩)
    getPosts(catergory, pages, router) {
        if (this.router === router && router !== undefined) { // 라우터에 변화가 없다면 기존 posts를 전달
            this.postsChanged.next({
                change: false,
                posts: this.posts.slice(),
                pages: this.pages,
                finish: this.finish
            });
        }
        else if (router === undefined) { // 단순히 스크롤 다운에 경우
            this.pages = pages;
            const queryParams = `?catergory=${catergory}&pages=${this.pages}`;
            this.http.get(BACKED_URL + '/post' + queryParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((postData) => {
                return postData.posts.map(post => {
                    return {
                        post_no: post.post_no,
                        title: post.title,
                        writer: post.writer,
                        avatar: post.avatar,
                        content: post.content,
                        curtContent: post.content.replace(/(<([^>]+)>)/ig, ""),
                        likes: post.likes,
                        views: post.views,
                        catergory: post.catergory,
                        post_date: post.post_date,
                        img_path: post.img_path,
                        reply_cnt: null
                    };
                });
            })).subscribe((transformedPosts) => {
                if (transformedPosts.length === 0) {
                    this.finish = true;
                }
                this.posts.push(...transformedPosts);
                this.postsChanged.next({
                    change: false,
                    posts: this.posts.slice(),
                    pages: this.pages,
                    finish: this.finish
                });
                // return true;
            });
        }
        else if (this.router !== router) { // 카테고리가 바뀐경우
            this.posts = [];
            this.pages = 1;
            this.finish = false;
            this.router = router;
            const queryParams = `?catergory=${catergory}&pages=${this.pages}`;
            this.http.get(BACKED_URL + '/post' + queryParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((postData) => {
                return postData.posts.map(post => {
                    return {
                        post_no: post.post_no,
                        title: post.title,
                        writer: post.writer,
                        avatar: post.avatar,
                        content: post.content,
                        curtContent: post.content.replace(/(<([^>]+)>)/ig, ""),
                        likes: post.likes,
                        views: post.views,
                        catergory: post.catergory,
                        post_date: post.post_date,
                        img_path: post.img_path,
                        reply_cnt: null
                    };
                });
            })).subscribe((transformedPosts) => {
                this.posts.push(...transformedPosts);
                this.postsChanged.next({
                    change: true,
                    posts: this.posts.slice(),
                    pages: this.pages,
                    finish: this.finish
                });
                // return true;
            });
        }
    }
};
CatergoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CatergoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
    })
], CatergoryService);



/***/ }),

/***/ "./src/app/body/catergory/new-post/catergory-newly.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/body/catergory/new-post/catergory-newly.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newly-post {\n  border: 1px solid rgba(0,0,0, 0.3);\n  box-shadow: 0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);\n  margin-bottom: 50px;\n}\n.newly-post .newly-post-title {\n  background-color: rgba(0,0,0, .03);\n  padding: 10px;\n  font-family: 'Anton', sans-serif;\n}\n.newly-post-parent {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  overflow-y: scroll;\n}\n.newly-post .newly-post-content {\n  padding: 20px;\n}\n.newly-post-content {\n  border-bottom: 1px solid rgba(0,0,0, 0.3);\n  box-shadow: 0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);\n  margin:10px auto;\n}\n.search-results {\n  height: 20rem;\n}\n/*개별 포스트 레이아웃 설정*/\n.post-cotent {\n  width:100%;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n}\n.post-left, .post-center, .post-right {\n  /*border: 1px solid black;*/\n  height:100px;\n  flex-shrink: 0;\n}\n/*포스트 left*/\n.post-left {\n  text-align:center;\n  flex-basis: 10%;\n}\n.post-left button {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: none;\n  box-shadow: none;\n}\n.votes {\n  font-size: 1.2rem;\n}\n/*포스트 center*/\n.post-center {\n  flex-basis: 70%;\n  flex-shrink: 1;\n  height: 100%;\n  overflow: hidden;\n}\n.title {\n  font-size: 1.2rem;\n  font-family: 'Bree Serif', serif;\n  padding: 5px;\n  font-weight: bold;\n}\n.title a {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  color: black;\n}\n.content {\n  font-family: 'PT Sans', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #777;\n  padding: 5px;\n}\n.writer {\n  padding: 5px;\n}\n.avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: 50% 50%;\n  overflow: hidden;\n}\n/*포스트 right*/\n.post-right {\n  flex-basis: 20%;\n  text-align: center;\n  line-height: 100px;\n  height: 100%;\n  /*border: 1px solid black;*/\n}\n.post-right img {\n  width: auto; height: auto;\n  max-width: 206px;\n  max-height: 100px;\n  margin: 0 !important;\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .post-right img  {\n    max-width: 140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .post-right img {\n    max-width: 100px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .post-right img {\n    max-width: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .post-right img {\n    max-width: 70px;\n  }\n}\n.finish {\n  background-color: lightskyblue;\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 20px;\n}\n@media (max-width: 580px) {\n  * {\n    font-size: 0.8rem !important;\n  }\n  .content {\n    max-height: 40px;\n  }\n}\n/*\n.post-cotent {\n  padding: 5px;\n}\n.post-title, .post-cotent {\n  display: block;\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9jYXRlcmdvcnkvbmV3LXBvc3QvY2F0ZXJnb3J5LW5ld2x5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkRBQTZEO0VBQzdELG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlDQUF5QztFQUN6Qyw2REFBNkQ7RUFDN0QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxVQUFVO0VBQ1YsbUJBQVk7RUFBWixZQUFZO0VBQ1osOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFDQSxZQUFZO0FBQ1o7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXLEVBQUUsWUFBWTtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBOzs7Ozs7O0NBT0MiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2NhdGVyZ29yeS9uZXctcG9zdC9jYXRlcmdvcnktbmV3bHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdseS1wb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwwLDAsLjI0KSwwIDAgMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5uZXdseS1wb3N0IC5uZXdseS1wb3N0LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgLjAzKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XG59XG4ubmV3bHktcG9zdC1wYXJlbnQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5uZXdseS1wb3N0IC5uZXdseS1wb3N0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm5ld2x5LXBvc3QtY29udGVudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLDAgMCAycHggcmdiYSgwLDAsMCwuMTIpO1xuICBtYXJnaW46MTBweCBhdXRvO1xufVxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgaGVpZ2h0OiAyMHJlbTtcbn1cbi8q6rCc67OEIO2PrOyKpO2KuCDroIjsnbTslYTsm4Mg7ISk7KCVKi9cbi5wb3N0LWNvdGVudCB7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ucG9zdC1sZWZ0LCAucG9zdC1jZW50ZXIsIC5wb3N0LXJpZ2h0IHtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xuICBoZWlnaHQ6MTAwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLyrtj6zsiqTtirggbGVmdCovXG4ucG9zdC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGZsZXgtYmFzaXM6IDEwJTtcbn1cbi5wb3N0LWxlZnQgYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnZvdGVzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4vKu2PrOyKpO2KuCBjZW50ZXIqL1xuLnBvc3QtY2VudGVyIHtcbiAgZmxleC1iYXNpczogNzAlO1xuICBmbGV4LXNocmluazogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHNlcmlmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRpdGxlIGEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjNzc3O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ud3JpdGVyIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLmF2YXRhciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi8q7Y+s7Iqk7Yq4IHJpZ2h0Ki9cbi5wb3N0LXJpZ2h0IHtcbiAgZmxleC1iYXNpczogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG59XG4ucG9zdC1yaWdodCBpbWcge1xuICB3aWR0aDogYXV0bzsgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDIwNnB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLnBvc3QtcmlnaHQgaW1nICB7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnBvc3QtcmlnaHQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAucG9zdC1yaWdodCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucG9zdC1yaWdodCBpbWcge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgfVxufVxuXG4uZmluaXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgKiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgfVxufVxuXG4vKlxuLnBvc3QtY290ZW50IHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnBvc3QtdGl0bGUsIC5wb3N0LWNvdGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/catergory/new-post/catergory-newly.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/body/catergory/new-post/catergory-newly.component.ts ***!
  \**********************************************************************/
/*! exports provided: CatergoryNewlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergoryNewlyComponent", function() { return CatergoryNewlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _nav_nav_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../nav/nav.model */ "./src/app/body/nav/nav.model.ts");
/* harmony import */ var src_app_shared_like_hate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/like-hate.service */ "./src/app/shared/like-hate.service.ts");
/* harmony import */ var _catergory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../catergory.service */ "./src/app/body/catergory/catergory.service.ts");








let CatergoryNewlyComponent = class CatergoryNewlyComponent {
    constructor(postsService, route, authService, likeHateService, catergoryService) {
        this.postsService = postsService;
        this.route = route;
        this.authService = authService;
        this.likeHateService = likeHateService;
        this.catergoryService = catergoryService;
        this.isFinish = false;
        this.voteUpColor = 'black';
        this.voteDownColor = 'black';
        this.posts = [];
    }
    ngOnInit() {
        const nav = new _nav_nav_model__WEBPACK_IMPORTED_MODULE_5__["Nav"]();
        this.pages = 1;
        this.postsChangedEvent = this.catergoryService.postsChanged.subscribe((postData) => {
            this.isLoding = false;
            if (postData.change === true) { // 처음부터 리셋
                this.pages = postData.pages;
                this.posts = postData.posts;
                this.isFinish = false;
                window.scrollTo(0, 0);
            }
            else { // 그전꺼 불러오기
                this.pages = postData.pages;
                this.posts = postData.posts;
                if (postData.finish === true) {
                    this.isFinish = true;
                }
            }
        });
        // url이 바뀔때마다 처리 -> 카테고리 정보를 얻어옴
        this.route.params.subscribe((params) => {
            this.catergoryName = params.postId; // 현경로
            this.catergory = nav.catergory.filter((catergory) => {
                return catergory.fileNav === this.catergoryName;
            });
            this.isLoding = true;
            this.isFinish = false;
            // 해당 카테고리에 맞는 포스트를 요청
            this.catergoryService.getPosts(this.catergoryName, this.pages, params.postId);
        });
        // scrollDownEvnet발생시...
        this.scrollDownEvent = this.catergoryService.onScrollDownEvent.subscribe(() => {
            this.isLoding = true;
            this.pages++;
            this.catergoryService.getPosts(this.catergoryName, this.pages);
        });
    }
    // 공감수 +1 증가
    increase(postNo) {
        // 공감수는 그냥 누르자마다 표면상 1증가시키면 되는거고,
        // 뒷처리는 해줘야지. (로그인 여부도 확인하고))
        if (!this.authService.getIsAuth()) {
            alert('login ahead!!');
            return;
        }
        // 내가 눌렀는지 여부도 판단해야하는데...? 하하하하하...ㅡㅡ
        this.posts.forEach(post => {
            if (post.post_no === Number(postNo)) {
                post.likes++;
            }
        });
        this.voteUpColor = 'lightblue';
        this.voteDownColor = 'black';
        this.likeHateService.setLikeCount(postNo, this.authService.getUserData().userNickname, 1);
    }
    // 공감수 -1 감소
    decrease(postNo) {
        if (!this.authService.getIsAuth()) {
            alert('login ahead!!');
            return;
        }
        this.posts.forEach(post => {
            if (post.post_no === Number(postNo)) {
                post.likes--;
            }
        });
        this.voteUpColor = 'black';
        this.voteDownColor = 'lightblue';
        this.likeHateService.setLikeCount(postNo, this.authService.getUserData().userNickname, -1);
    }
    ngOnDestroy() {
        this.scrollDownEvent.unsubscribe();
        this.postsChangedEvent.unsubscribe();
    }
};
CatergoryNewlyComponent.ctorParameters = () => [
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_like_hate_service__WEBPACK_IMPORTED_MODULE_6__["LikeHateService"] },
    { type: _catergory_service__WEBPACK_IMPORTED_MODULE_7__["CatergoryService"] }
];
CatergoryNewlyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catergory-newly',
        template: __webpack_require__(/*! raw-loader!./catergory-newly.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/catergory/new-post/catergory-newly.component.html"),
        styles: [__webpack_require__(/*! ./catergory-newly.component.css */ "./src/app/body/catergory/new-post/catergory-newly.component.css")]
    })
], CatergoryNewlyComponent);



/***/ }),

/***/ "./src/app/body/catergory/popular-post/catergory-popular.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/body/catergory/popular-post/catergory-popular.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description {\n  margin-top: 60px;\n  margin-bottom: 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.clearfix:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.post-hash {\n  flex-basis: 80%;\n}\n.space {\n  flex-basis: 7%;\n}\n.post-button {\n  flex-basis: 13%;\n}\n.mat-card {\n  height: 100%;\n}\n.hot-post {\n  border: 1px solid rgba(0,0,0, 0.3);\n  box-shadow: 0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);\n}\n@media (max-width: 580px) {\n  .description  {\n    margin-top:0px;\n  }\n  * {\n    font-size: 0.8rem !important;\n  }\n}\n.hot-post > .hot-post-title {\n  background-color: rgba(0,0,0, .03);\n  padding: 10px;\n  font-family: 'Anton', sans-serif;\n}\n.host-post > .hot-post-content {\n  padding: 20px;\n}\n.mat-card {\n  padding: 13px;\n}\n.mat-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.mat-card-avatar img {\n  width: 100%;\n  height: 100%;\n}\n.mat-card-header-text {\n  margin: 0px !important;\n}\n.mat-card-title a {\n  font-size: 1.1rem;\n  font-family: 'Bree Serif', serif;\n  color: black;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 52px;\n}\n.mat-card-body {\n  height: 200px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.mat-card img {\n  width: auto; height: auto;\n  max-width: 327px;\n  max-height: 180px;\n  margin: 0 !important;\n  vertical-align: middle;\n}\n@media (min-width: 1200px) and (max-width: 1400px) {\n  .mat-card img {\n    max-width: 250px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .mat-card img {\n    max-width: 150px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .mat-card img {\n    max-width: 200px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .mat-card img {\n    max-width: 200px;\n  }\n}\n@media (max-width: 400px) {\n  .mat-card img {\n    max-width: 250px;\n  }\n}\nmat-card-content p {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.banner {\n  margin: 20px 0;\n  max-height: 150px;\n  width: 100%;\n  cursor: pointer;\n}\n/*\n  text-overflow: ellipsis (상자 테두리에 닿게 되면 오버플로우 된 문자들을 ... 으로 바꾼다.)\n\n  대신 조건이 필요하다.\n  1) display: block일것\n  2) 고정된 width, height값이 있을것.\n  3) white-space:nowrap일것\n  4) oveflow:hidden일것\n\n  대신 이건 한줄일때만 가능해짐...\n\n  여러줄의 경우일때 : https://stackoverflow.com/questions/15909489/text-overflow-ellipsis-on-two-lines\n  드디어 성공함.\n*/\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9jYXRlcmdvcnkvcG9wdWxhci1wb3N0L2NhdGVyZ29yeS1wb3B1bGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBOzs7Ozs7Ozs7Ozs7O0NBYUMiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2NhdGVyZ29yeS9wb3B1bGFyLXBvc3QvY2F0ZXJnb3J5LXBvcHVsYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuLnBvc3QtaGFzaCB7XG4gIGZsZXgtYmFzaXM6IDgwJTtcbn1cbi5zcGFjZSB7XG4gIGZsZXgtYmFzaXM6IDclO1xufVxuLnBvc3QtYnV0dG9uIHtcbiAgZmxleC1iYXNpczogMTMlO1xufVxuXG4ubWF0LWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG90LXBvc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwuMjQpLDAgMCAycHggcmdiYSgwLDAsMCwuMTIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5kZXNjcmlwdGlvbiAge1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICB9XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5ob3QtcG9zdCA+IC5ob3QtcG9zdC10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC4wMyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xufVxuLmhvc3QtcG9zdCA+IC5ob3QtcG9zdC1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDEzcHg7XG59XG4ubWF0LWNhcmQtYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWF0LWNhcmQtYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNhcmQtdGl0bGUgYSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCBzZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWluLWhlaWdodDogNTJweDtcbn1cbi5tYXQtY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1jYXJkIGltZyB7XG4gIHdpZHRoOiBhdXRvOyBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzI3cHg7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLm1hdC1jYXJkIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5tYXQtY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5tYXQtY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5tYXQtY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubWF0LWNhcmQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG59XG5tYXQtY2FyZC1jb250ZW50IHAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJhbm5lciB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICjsg4HsnpAg7YWM65GQ66as7JeQIOuLv+qyjCDrkJjrqbQg7Jik67KE7ZSM66Gc7JqwIOuQnCDrrLjsnpDrk6TsnYQgLi4uIOycvOuhnCDrsJTqvrzri6QuKVxuXG4gIOuMgOyLoCDsobDqsbTsnbQg7ZWE7JqU7ZWY64ukLlxuICAxKSBkaXNwbGF5OiBibG9ja+ydvOqyg1xuICAyKSDqs6DsoJXrkJwgd2lkdGgsIGhlaWdodOqwkuydtCDsnojsnYTqsoMuXG4gIDMpIHdoaXRlLXNwYWNlOm5vd3JhcOydvOqyg1xuICA0KSBvdmVmbG93OmhpZGRlbuydvOqyg1xuXG4gIOuMgOyLoCDsnbTqsbQg7ZWc7KSE7J2865WM66eMIOqwgOuKpe2VtOynkC4uLlxuXG4gIOyXrOufrOykhOydmCDqsr3smrDsnbzrlYwgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTkwOTQ4OS90ZXh0LW92ZXJmbG93LWVsbGlwc2lzLW9uLXR3by1saW5lc1xuICDrk5zrlJTslrQg7ISx6rO17ZWoLlxuKi9cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/body/catergory/popular-post/catergory-popular.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/body/catergory/popular-post/catergory-popular.component.ts ***!
  \****************************************************************************/
/*! exports provided: CatergoryPopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergoryPopularComponent", function() { return CatergoryPopularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _nav_nav_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../nav/nav.model */ "./src/app/body/nav/nav.model.ts");






let CatergoryPopularComponent = class CatergoryPopularComponent {
    constructor(route, postService, authService) {
        this.route = route;
        this.postService = postService;
        this.authService = authService;
    }
    ngOnInit() {
        this.isAuth = this.authService.getIsAuth();
        const nav = new _nav_nav_model__WEBPACK_IMPORTED_MODULE_5__["Nav"]();
        // 현재 카테고리를 url를 통해 알아내는 코드
        this.route.params.subscribe((param) => {
            this.catergoryName = param.postId;
            this.catergory = nav.catergory.filter((catergory) => {
                return catergory.fileNav === this.catergoryName;
            });
            this.postService.getPopularPosts(this.catergoryName); // 알아낸 카테고리를 통해 이 카테고리에 인기글을 요청
        });
        // 이 카테고리에 인기글을 요청한 결과
        this.popularPostSub = this.postService.popularPostUpdated
            .subscribe((posts) => {
            this.popularPost = posts;
            this.popularPost.forEach((post) => {
                post.content = post.content.replace(/(<([^>]+)>)/ig, "");
            });
        });
    }
    ngOnDestroy() {
        this.popularPostSub.unsubscribe();
    }
};
CatergoryPopularComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
CatergoryPopularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catergory-popular',
        template: __webpack_require__(/*! raw-loader!./catergory-popular.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/catergory/popular-post/catergory-popular.component.html"),
        styles: [__webpack_require__(/*! ./catergory-popular.component.css */ "./src/app/body/catergory/popular-post/catergory-popular.component.css")]
    })
], CatergoryPopularComponent);



/***/ }),

/***/ "./src/app/body/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/body/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/body/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/body/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/body/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/body/home/home.module.ts":
/*!******************************************!*\
  !*** ./src/app/body/home/home.module.ts ***!
  \******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/body/home/home.component.ts");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/body/home/new-post/new-post.component.ts");
/* harmony import */ var _popular_post_popular_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popular-post/popular-post.component */ "./src/app/body/home/popular-post/popular-post.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _body_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../body-routing.module */ "./src/app/body/body-routing.module.ts");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
            _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__["NewPostComponent"],
            _popular_post_popular_post_component__WEBPACK_IMPORTED_MODULE_4__["PopularPostComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _body_routing_module__WEBPACK_IMPORTED_MODULE_6__["BodyRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/body/home/main-post.service.ts":
/*!************************************************!*\
  !*** ./src/app/body/home/main-post.service.ts ***!
  \************************************************/
/*! exports provided: MainPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPostService", function() { return MainPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const BACKED_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BACKED_URL;
let MainPostService = class MainPostService {
    constructor(http) {
        this.http = http;
    }
    // 인기 게시글 조회
    getPopularPosts() {
        return this.http.get(BACKED_URL + '/post/main-popular');
    }
    // 최신 게시글 조회
    getNewlyPosts() {
        return this.http.get(BACKED_URL + '/post/main-newly');
    }
};
MainPostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MainPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainPostService);



/***/ }),

/***/ "./src/app/body/home/new-post/new-post.component.css":
/*!***********************************************************!*\
  !*** ./src/app/body/home/new-post/new-post.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: lightgray;\n  padding: 20px;\n  min-height: 400px;\n}\n.mat-headline {\n  font-family: 'Anton', sans-serif;\n  margin: 0;\n}\n.catergory {\n  font-family: Georgia;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  background-color: #E5E8E8;\n  border-radius: 10px / 10px;\n  padding: 10px 0;\n}\n.newly-post-content:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.post-title {\n  font-size: 1.1rem;\n  font-family: 'Bree Serif', serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 42px;\n}\n.post-content {\n  font-size: 1rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 580px) {\n  * {\n    font-size: 0.95rem !important;\n  }\n  .card-text {\n    min-height: 40px;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ob21lL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxTQUFTO0FBQ1g7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDRFQUE0RTtBQUM5RTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaG9tZS9uZXctcG9zdC9uZXctcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cbi5tYXQtaGVhZGxpbmUge1xuICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuLmNhdGVyZ29yeSB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xuICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RThFODtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAvIDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5uZXdseS1wb3N0LWNvbnRlbnQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCBzZXJpZjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG59XG4ucG9zdC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA2O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJkLXRleHQge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/body/home/new-post/new-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/body/home/new-post/new-post.component.ts ***!
  \**********************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-post.service */ "./src/app/body/home/main-post.service.ts");



let NewPostComponent = class NewPostComponent {
    constructor(mainPostService) {
        this.mainPostService = mainPostService;
    }
    ngOnInit() {
        this.mainPostService.getNewlyPosts()
            .subscribe((postData) => {
            this.newlyPost = postData.posts;
            this.newlyPost.forEach((post) => {
                post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
            });
        });
    }
};
NewPostComponent.ctorParameters = () => [
    { type: _main_post_service__WEBPACK_IMPORTED_MODULE_2__["MainPostService"] }
];
NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-post',
        template: __webpack_require__(/*! raw-loader!./new-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/home/new-post/new-post.component.html"),
        styles: [__webpack_require__(/*! ./new-post.component.css */ "./src/app/body/home/new-post/new-post.component.css")]
    })
], NewPostComponent);



/***/ }),

/***/ "./src/app/body/home/popular-post/popular-post.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/body/home/popular-post/popular-post.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n  margin-top:40px;\n  min-height: 400px;\n}\n@media (max-width: 580px) {\n  :host {\n    margin-top:0px;\n  }\n}\n.mat-headline h3 {\n font-family: 'Anton', sans-serif;\n}\n.post-catergory {\n  width: 100%;\n  background-color: #FF9000;\n  border-radius: 25px / 25px;\n  padding: 10px 0;\n}\n.popular-post {\n  margin-bottom: 30px;\n  font-size: 1.2rem;\n}\n.catergory {\n  font-family: Georgia;\n  margin: 0;\n  text-align: center;\n}\n.hot-post-image {\n  height: 150px;\n  text-align: center;\n}\n.hot-post-image img {\n  width: auto; height: auto;\n  max-width: 100%;\n  max-height: 150px;\n  margin: 0 !important;\n  padding: 1.25rem 0;\n}\n.hot-post-content:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.card-title {\n  font-size: 1.1rem;\n  font-family: 'Bree Serif', serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-text {\n  font-size: 1rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 48px;\n}\n.banner {\n  margin: 20px 0;\n  max-height: 150px;\n  width: 100%;\n  cursor: pointer;\n}\n@media (max-width: 580px) {\n  * {\n    font-size: 0.85rem !important;\n  }\n  .card-text {\n    min-height: 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ob21lL3BvcHVsYXItcG9zdC9wb3B1bGFyLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtDQUNDLGdDQUFnQztBQUNqQztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaG9tZS9wb3B1bGFyLXBvc3QvcG9wdWxhci1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOjQwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgfVxufVxuLm1hdC1oZWFkbGluZSBoMyB7XG4gZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XG59XG4ucG9zdC1jYXRlcmdvcnkge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAvIDI1cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5wb3B1bGFyLXBvc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5jYXRlcmdvcnkge1xuICBmb250LWZhbWlseTogR2VvcmdpYTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG90LXBvc3QtaW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG90LXBvc3QtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IGF1dG87IGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMDtcbn1cblxuLmhvdC1wb3N0LWNvbnRlbnQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHNlcmlmO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuLmJhbm5lciB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAqIHtcbiAgICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZC10ZXh0IHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/body/home/popular-post/popular-post.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/body/home/popular-post/popular-post.component.ts ***!
  \******************************************************************/
/*! exports provided: PopularPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularPostComponent", function() { return PopularPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-post.service */ "./src/app/body/home/main-post.service.ts");



let PopularPostComponent = class PopularPostComponent {
    constructor(mainPostService) {
        this.mainPostService = mainPostService;
    }
    ngOnInit() {
        this.mainPostService.getPopularPosts()
            .subscribe((postData) => {
            this.popularPost = postData.posts;
            this.popularPost.forEach((post) => {
                post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
            });
        });
    }
};
PopularPostComponent.ctorParameters = () => [
    { type: _main_post_service__WEBPACK_IMPORTED_MODULE_2__["MainPostService"] }
];
PopularPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popular-post',
        template: __webpack_require__(/*! raw-loader!./popular-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/home/popular-post/popular-post.component.html"),
        styles: [__webpack_require__(/*! ./popular-post.component.css */ "./src/app/body/home/popular-post/popular-post.component.css")]
    })
], PopularPostComponent);



/***/ }),

/***/ "./src/app/body/nav/nav.component.css":
/*!********************************************!*\
  !*** ./src/app/body/nav/nav.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  top: 80px;\n  width: 12%;\n}\n@media (min-width: 768px) and (max-width: 1199.98px) {\n  :host {\n    width: 14%;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 768px) {\n  :host {\n    position: static;\n    width: 100%;\n    margin-top: 64px;\n  }\n}\n.nav-subtitle {\n  padding-top: 20px;\n}\n.nav-item {\n  width: 100%;\n}\nul > li {\n  padding: 0.5rem 1rem;\n  display: -webkit-box;\n  display: flex;\n}\nul > li:hover,\nul > li > a:active {\n  background-color: #ffe3e3;\n  border-radius: 25px / 25px;\n  cursor: pointer;\n  opacity: 1;\n}\n.nav-icon {\n  flex-basis: 10%;\n  display: inline-block;\n  line-height: 40px;\n}\n.nav-icon i {\n  font-size: 1.2rem;\n}\n.nav-link {\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  height: 100%;\n  font-weight: bold;\n  flex-basis: 90%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDgwcHg7XG4gIHdpZHRoOiAxMiU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxNCU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICB9XG59XG4ubmF2LXN1YnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG51bCA+IGxpIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbnVsID4gbGk6aG92ZXIsXG51bCA+IGxpID4gYTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlM2UzO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IC8gMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubmF2LWljb24ge1xuICBmbGV4LWJhc2lzOiAxMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4ubmF2LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxleC1iYXNpczogOTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/body/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/body/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.model */ "./src/app/body/nav/nav.model.ts");



let NavComponent = class NavComponent {
    constructor() {
    }
    ngOnInit() {
        const nav = new _nav_model__WEBPACK_IMPORTED_MODULE_2__["Nav"]();
        this.catergory = nav.catergory;
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/body/nav/nav.component.css")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/body/nav/nav.model.ts":
/*!***************************************!*\
  !*** ./src/app/body/nav/nav.model.ts ***!
  \***************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
class Nav {
    constructor() {
        this.catergory = [
            {
                name: "Web",
                fileNav: "Web",
            },
            {
                name: "App",
                fileNav: "App",
            },
            {
                name: "Desktop",
                fileNav: "Desktop",
            },
            {
                name: "AI",
                fileNav: "AI",
            },
            {
                name: "Games",
                fileNav: "Games",
            },
        ];
    }
}


/***/ }),

/***/ "./src/app/body/search/search.component.css":
/*!**************************************************!*\
  !*** ./src/app/body/search/search.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n  height: 100%;\n  margin-top:100px;\n}\n.search {\n  height: 100px;\n}\n.post-cotent {\n  width:100%;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n}\n.post-left, .post-center, .post-right {\n  /*border: 1px solid black;*/\n  height:100px;\n  flex-shrink: 0;\n}\n/*포스트 left*/\n.post-left {\n  text-align:center;\n  flex-basis: 10%;\n  background-color: #ddddddd0;\n}\n.post-left button {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: none;\n  box-shadow: none;\n}\n.votes {\n  font-size: 1.2rem;\n}\n/*포스트 center*/\n.post-center {\n  flex-basis: 20%;\n  text-align: center;\n  line-height: 100px;\n  height: 100%;\n  /*border: 1px solid black;*/\n}\n.post-center img {\n  width: auto; height: auto;\n  max-width: 206px;\n  max-height: 100px;\n  margin: 0 !important;\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .post-center img  {\n    max-width: 140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .post-center img {\n    max-width: 100px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .post-center img {\n    max-width: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .post-center img {\n    max-width: 70px;\n  }\n}\n.post-right {\n  flex-basis: 70%;\n  flex-shrink: 1;\n  height: 100%;\n  overflow: hidden;\n}\n.title {\n  font-size: 1.2rem;\n  font-family: 'Bree Serif', serif;\n  padding: 5px;\n  font-weight: bold;\n}\n.title a div{\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  color: black;\n}\n.content {\n  font-family: 'PT Sans', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #777;\n  padding: 5px;\n}\n@media (max-width: 580px) {\n  :host {\n    margin-top:0px;\n    padding: 0;\n  }\n  * {\n    font-size: 0.85rem !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFZO0VBQVosWUFBWTtFQUNaLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLGFBQWE7QUFDYjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDoxMDBweDtcbn1cbi5zZWFyY2gge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLnBvc3QtY290ZW50IHtcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5wb3N0LWxlZnQsIC5wb3N0LWNlbnRlciwgLnBvc3QtcmlnaHQge1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG4gIGhlaWdodDoxMDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4vKu2PrOyKpO2KuCBsZWZ0Ki9cbi5wb3N0LWxlZnQge1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZmxleC1iYXNpczogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkZDA7XG59XG4ucG9zdC1sZWZ0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi52b3RlcyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLyrtj6zsiqTtirggY2VudGVyKi9cbi5wb3N0LWNlbnRlciB7XG4gIGZsZXgtYmFzaXM6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xufVxuLnBvc3QtY2VudGVyIGltZyB7XG4gIHdpZHRoOiBhdXRvOyBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMjA2cHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAucG9zdC1jZW50ZXIgaW1nICB7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnBvc3QtY2VudGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnBvc3QtY2VudGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wb3N0LWNlbnRlciBpbWcge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgfVxufVxuXG4ucG9zdC1yaWdodCB7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCBzZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZSBhIGRpdntcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzc3NztcbiAgcGFkZGluZzogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/body/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/body/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");




let SearchComponent = class SearchComponent {
    constructor(activatedRoute, postsService) {
        this.activatedRoute = activatedRoute;
        this.postsService = postsService;
        this.posts = [];
        this.isFinish = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.posts = [];
            this.pages = 1;
            this.isLoding = this.isFinish = false;
            this.searchInput = params['searchInput'];
            this.postsService.getSearchPost(this.searchInput, this.pages)
                .subscribe((searchPost) => {
                this.isLoding = false;
                this.posts = this.posts.concat(searchPost.posts);
                this.posts.forEach((post) => {
                    post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
                    /*
                              const rgxp = new RegExp(this.searchInput, 'g');
                              const repl = '<span class="marker">' + this.searchInput + '</span>';
                              post.title = post.title.replace(this.searchInput, repl);
                    */
                    post.title = post.title.replace(new RegExp(this.searchInput, "gi"), match => {
                        return '<span class="marker">' + match + '</span>';
                    });
                    post.curtContent = post.curtContent.replace(new RegExp(this.searchInput, "gi"), match => {
                        return '<span class="marker">' + match + '</span>';
                    });
                });
            });
        });
    }
    onScrollDown() {
        this.isLoding = true;
        this.pages++;
        this.postsService.getSearchPost(this.searchInput, this.pages)
            .subscribe((searchPost) => {
            if (searchPost.posts.length === 0) {
                this.isFinish = true;
            }
            this.isLoding = false;
            this.posts = this.posts.concat(searchPost.posts);
            this.posts.forEach((post) => {
                post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
                /*
                          const rgxp = new RegExp(this.searchInput, 'g');
                          const repl = '<span class="marker">' + this.searchInput + '</span>';
                          post.title = post.title.replace(this.searchInput, repl);
                */
                post.title = post.title.replace(new RegExp(this.searchInput, "gi"), match => {
                    return '<span class="marker">' + match + '</span>';
                });
                post.curtContent = post.curtContent.replace(new RegExp(this.searchInput, "gi"), match => {
                    return '<span class="marker">' + match + '</span>';
                });
            });
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/body/search/search.component.css")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/body/user/post/user-post.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/user/post/user-post.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  background-color: #FF9000;\n  color: white;\n  height: 40px;\n  line-height: 40px;\n  width:20%;\n  text-align: center;\n}\n.post-cotent {\n  width:100%;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n}\n.post-left, .post-center, .post-right {\n  /*border: 1px solid black;*/\n  height:100px;\n  flex-shrink: 0;\n}\n/*포스트 left*/\n.post-left {\n  text-align:center;\n  flex-basis: 10%;\n  background-color: #ddddddd0;\n}\n.post-left button {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: none;\n  box-shadow: none;\n}\n.votes {\n  font-size: 1.2rem;\n}\n/*포스트 center*/\n.post-center {\n  flex-basis: 20%;\n  text-align: center;\n  line-height: 100px;\n  height: 100%;\n  /*border: 1px solid black;*/\n}\n.post-center img {\n  width: auto; height: auto;\n  max-width: 206px;\n  max-height: 100px;\n  margin: 0 !important;\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .post-center img  {\n    max-width: 140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .post-center img {\n    max-width: 100px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .post-center img {\n    max-width: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .post-center img {\n    max-width: 70px;\n  }\n}\n.post-right {\n  flex-basis: 70%;\n  flex-shrink: 1;\n  height: 100%;\n  overflow: hidden;\n}\n.title {\n  font-size: 1.2rem;\n  font-family: 'Bree Serif', serif;\n  padding: 5px;\n  font-weight: bold;\n}\n.title a div{\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  color: black;\n}\n.content {\n  font-family: 'PT Sans', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #777;\n  padding: 5px;\n}\n@media (max-width: 580px) {\n  :host {\n    padding: 0;\n  }\n  * {\n    font-size: 0.85rem !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS91c2VyL3Bvc3QvdXNlci1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFZO0VBQVosWUFBWTtFQUNaLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLGFBQWE7QUFDYjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvdXNlci9wb3N0L3VzZXItcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOjIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBvc3QtY290ZW50IHtcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5wb3N0LWxlZnQsIC5wb3N0LWNlbnRlciwgLnBvc3QtcmlnaHQge1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG4gIGhlaWdodDoxMDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4vKu2PrOyKpO2KuCBsZWZ0Ki9cbi5wb3N0LWxlZnQge1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZmxleC1iYXNpczogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkZDA7XG59XG4ucG9zdC1sZWZ0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi52b3RlcyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLyrtj6zsiqTtirggY2VudGVyKi9cbi5wb3N0LWNlbnRlciB7XG4gIGZsZXgtYmFzaXM6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xufVxuLnBvc3QtY2VudGVyIGltZyB7XG4gIHdpZHRoOiBhdXRvOyBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMjA2cHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAucG9zdC1jZW50ZXIgaW1nICB7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnBvc3QtY2VudGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnBvc3QtY2VudGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wb3N0LWNlbnRlciBpbWcge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgfVxufVxuXG4ucG9zdC1yaWdodCB7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCBzZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZSBhIGRpdntcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzc3NztcbiAgcGFkZGluZzogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/body/user/post/user-post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/user/post/user-post.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostComponent", function() { return UserPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");




let UserPostComponent = class UserPostComponent {
    constructor(authService, postsService) {
        this.authService = authService;
        this.postsService = postsService;
        this.posts = [];
        this.isFinish = false;
        this.nickname = this.authService.getUserData().userNickname;
    }
    ngOnInit() {
        this.posts = [];
        this.pages = 1;
        this.isLoding = this.isFinish = false;
        this.postsService.getMyPosts(this.nickname, this.pages)
            .subscribe((myPost) => {
            this.isLoding = false;
            this.posts = this.posts.concat(myPost.posts);
            this.posts.forEach((post) => {
                post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
            });
        });
    }
    onScrollDown() {
        this.isLoding = true;
        this.pages++;
        this.postsService.getMyPosts(this.nickname, this.pages)
            .subscribe((myPost) => {
            this.isLoding = false;
            this.posts = this.posts.concat(myPost.posts);
            this.posts.forEach((post) => {
                post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
            });
        });
    }
};
UserPostComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
UserPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-post',
        template: __webpack_require__(/*! raw-loader!./user-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/user/post/user-post.component.html"),
        styles: [__webpack_require__(/*! ./user-post.component.css */ "./src/app/body/user/post/user-post.component.css")]
    })
], UserPostComponent);



/***/ }),

/***/ "./src/app/body/user/setting/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/body/user/setting/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
        fileReader.addEventListener("loadend", () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = "";
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/body/user/setting/user-setting.component.css":
/*!**************************************************************!*\
  !*** ./src/app/body/user/setting/user-setting.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-image {\n  width: 80%;\n  display: block;\n  margin: 0 auto;\n}\n.user-image-h4 {\n  width: 100%;\n}\n.user-image-content {\n  margin-top: 5px;\n  width: 100%;\n  background-color: #adadad;\n  height: 400px;\n  padding: 10px;\n}\nh4 {\n  background-color: #FF9000;\n  color: white;\n  height: 40px;\n  line-height: 40px;\n  width:30%;\n  text-align: center;\n}\n.avatar {\n  display: block;\n  margin: 0 auto;\n  width: auto; height: auto;\n  max-width: 200px;\n  max-height: 200px;\n}\n.user-image-content button {\n  display: block;\n  margin: 20px auto;\n\n}\n.update {\n  min-width: 200px;\n  font-size: 1.2rem;\n  background-color: #FF9000;\n  border-color: #FF9000;\n  color: white;\n}\n.button-div {\n  width: 100%;\n  margin-top: 50px;\n  text-align: center;\n}\ninput[type=\"file\"] {\n  display: none;\n}\n@media (max-width: 580px) {\n  * {\n    font-size: 0.85rem !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS91c2VyL3NldHRpbmcvdXNlci1zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVyxFQUFFLFlBQVk7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3VzZXIvc2V0dGluZy91c2VyLXNldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnVzZXItaW1hZ2UtaDQge1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyLWltYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhZGFkO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOjMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF2YXRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGF1dG87IGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG4udXNlci1pbWFnZS1jb250ZW50IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggYXV0bztcblxufVxuLnVwZGF0ZSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MDAwO1xuICBib3JkZXItY29sb3I6ICNGRjkwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24tZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAqIHtcbiAgICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/body/user/setting/user-setting.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/body/user/setting/user-setting.component.ts ***!
  \*************************************************************/
/*! exports provided: UserSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingComponent", function() { return UserSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_signup_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/signup/password-validator */ "./src/app/auth/signup/password-validator.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/body/user/setting/mime-type.validator.ts");






let UserSettingComponent = class UserSettingComponent {
    constructor(authService) {
        this.authService = authService;
        this.userData = {
            email: '',
            nickname: '',
            firstname: '',
            lastname: '',
            avatar: '',
            gender: ''
        };
    }
    ngOnInit() {
        this.imageNew = false;
        this.mode = 'select';
        this.userData.email = this.authService.getUserData().userId;
        this.userData.nickname = this.authService.getUserData().userNickname;
        this.authService.getUserAccount()
            .subscribe((userDate) => {
            this.userData.firstname = userDate.first_name;
            this.userData.lastname = userDate.last_name;
            this.userData.avatar = userDate.avatar;
            this.userData.gender = userDate.gender;
        });
    }
    onUpdate() {
        this.mode = 'update';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]] }),
            passwordGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}')]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            }, src_app_auth_signup_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].match),
            nickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9]{3,20}')])
        });
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.imagePreview = reader.result;
        });
        reader.readAsDataURL(file);
        this.imageNew = true;
    }
    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.authService.setUserAccount(this.form.value.passwordGroup.password, this.form.value.image, this.form.value.nickName);
        /*
        this.authService.createUser(
          this.signupForm.value.email,
          this.signupForm.value.passwordGroup.password,
          this.signupForm.value.firstName,
          this.signupForm.value.lastName,
          this.signupForm.value.nickName,
          this.signupForm.value.gender
        );
        */
    }
};
UserSettingComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
UserSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-setting',
        template: __webpack_require__(/*! raw-loader!./user-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/user/setting/user-setting.component.html"),
        styles: [__webpack_require__(/*! ./user-setting.component.css */ "./src/app/body/user/setting/user-setting.component.css")]
    })
], UserSettingComponent);



/***/ }),

/***/ "./src/app/body/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/body/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n  height: 100%;\n  margin-top:100px;\n}\n.tab {\n  display: -webkit-box;\n  display: flex;\n}\n.tab a {\n  flex-basis: 50%;\n  text-align: center;\n  color: white;\n  height: 50px;\n  line-height: 50px;\n  text-decoration: none;\n  background-color: #a39f9f;\n  font-size: 1.2rem;\n}\n.active {\n  background-color: #FF9000 !important;\n}\n@media (max-width: 580px) {\n  :host {\n    margin-top:0px;\n  }\n  * {\n    font-size: 0.85rem !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6MTAwcHg7XG59XG4udGFiIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWIgYSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzOWY5ZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTAwMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICB9XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/body/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/body/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UserComponent = class UserComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((param) => {
            this.kind = param.kinds;
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/body/user/user.component.css")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            let errorMessage = "An unknown error occurred!";
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            console.log(errorMessage);
            // 에러 컴포넌트 호출 -> 에러컴포넌트는 에러다이어로그를 보여줌
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ErrorComponent = class ErrorComponent {
    constructor(data) {
        this.data = data;
        console.log(data.message);
    }
};
ErrorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrorComponent);



/***/ }),

/***/ "./src/app/google-analytics-events-service.ts":
/*!****************************************************!*\
  !*** ./src/app/google-analytics-events-service.ts ***!
  \****************************************************/
/*! exports provided: GoogleAnalyticsEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsEventsService", function() { return GoogleAnalyticsEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoogleAnalyticsEventsService = class GoogleAnalyticsEventsService {
    emitEvent(eventCategory, eventAction, eventLabel = null, eventValue = null) {
        ga('send', 'event', { eventCategory, eventLabel, eventAction, eventValue });
    }
};
GoogleAnalyticsEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GoogleAnalyticsEventsService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  max-width: 100%;\n  max-height: 50px;\n}\n.header-left a {\n  line-height: 60px;\n}\n@media (max-width: 800px) {\n  mat-toolbar-row {\n    padding: 0 1%;\n  }\n  .header-left {\n    padding-right: 0;\n  }\n  .header-right {\n    padding: 0;\n  }\n  .header-center {\n    padding: 0;\n  }\n}\n@media (max-width: 576px) {\n  .example-toolbar a {\n    line-height: 50px;\n  }\n  .logo {\n    max-width: 80%;\n    max-height: 50px;\n  }\n}\n@media (min-width: 800px) and (max-width: 1200px) {\n  mat-toolbar-row {\n    padding: 0 3%;\n  }\n}\n@media (min-width: 1200px) and (max-width: 1800px) {\n  mat-toolbar-row {\n    padding: 0 5%;\n  }\n}\n@media (min-width: 1800px) {\n  mat-toolbar-row {\n    padding: 0 10%;\n  }\n}\n.sbtn {\n  width: 15%;\n  padding: 0.375rem 1%;\n}\ninput {\n  width: 60% !important;\n  margin-right: 10px;\n}\n.header-right {\n  text-align: right;\n}\nmat-toolbar {\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  background-color: #ffe3e3;\n}\n.login,\n.signup {\n  margin-left: 10px;\n}\n.login {\n  border: solid 1px #da77f2;\n  color: #da77f2;\n}\n.signup {\n  background-color: #eebefa;\n  color: white;\n}\n.user {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: 50% 50%;\n  overflow: hidden;\n}\n.user_btn {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: none;\n  box-shadow: none;\n}\n.user_btn:hover {\n  background: none;\n}\n/*-----------------휴대폰 적용 CSS---------------------------------- */\n.example-toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n.example-is-mobile .example-toolbar {\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n  width: 100%;\n}\n.example-toolbar > h1 {\n  display: inline;\n  line-height: 56px;\n}\nh1.example-app-name {\n  margin-left: 8px;\n}\n.example-is-mobile .example-sidenav-container {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\nmat-icon {\n  color: white;\n}\nmat-sidenav {\n  width: 220px;\n  padding: 10px;\n}\nexample-toolbar button,\nh1 {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.spacer {\n  -webkit-box-flex: 5;\n          flex-grow: 5;\n}\n.nav-icon {\n  flex-basis: 10%;\n  display: inline-block;\n  line-height: 40px;\n}\n.nav-icon i {\n  font-size: 1.2rem;\n}\n.nav-link {\n  display: inline-block;\n  text-decoration: none;\n  height: 100%;\n  font-weight: bold;\n  flex-basis: 90%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0EsaUVBQWlFO0FBQ2pFO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFFQTtFQUNFLDhFQUE4RTtFQUM5RSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7O0VBRUUsbUJBQVk7VUFBWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFZO1VBQVosWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuLmhlYWRlci1sZWZ0IGEge1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBtYXQtdG9vbGJhci1yb3cge1xuICAgIHBhZGRpbmc6IDAgMSU7XG4gIH1cbiAgLmhlYWRlci1sZWZ0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIC5oZWFkZXItcmlnaHQge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmhlYWRlci1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZXhhbXBsZS10b29sYmFyIGEge1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgbWF0LXRvb2xiYXItcm93IHtcbiAgICBwYWRkaW5nOiAwIDMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTgwMHB4KSB7XG4gIG1hdC10b29sYmFyLXJvdyB7XG4gICAgcGFkZGluZzogMCA1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xuICBtYXQtdG9vbGJhci1yb3cge1xuICAgIHBhZGRpbmc6IDAgMTAlO1xuICB9XG59XG5cbi5zYnRuIHtcbiAgd2lkdGg6IDE1JTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMSU7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaGVhZGVyLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTNlMztcbn1cbi5sb2dpbixcbi5zaWdudXAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sb2dpbiB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkYTc3ZjI7XG4gIGNvbG9yOiAjZGE3N2YyO1xufVxuLnNpZ251cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWJlZmE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXJfYnRuIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnVzZXJfYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS3tnLTrjIDtj7Ag7KCB7JqpIENTUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5leGFtcGxlLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtdG9vbGJhciA+IGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaW5lLWhlaWdodDogNTZweDtcbn1cblxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxubWF0LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuZXhhbXBsZS10b29sYmFyIGJ1dHRvbixcbmgxIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnNwYWNlciB7XG4gIGZsZXgtZ3JvdzogNTtcbn1cblxuLm5hdi1pY29uIHtcbiAgZmxleC1iYXNpczogMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLm5hdi1pY29uIGkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbGV4LWJhc2lzOiA5MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _body_nav_nav_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../body/nav/nav.model */ "./src/app/body/nav/nav.model.ts");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HeaderComponent = class HeaderComponent {
    constructor(changeDetectorRef, media, authService, postsService, router) {
        this.authService = authService;
        this.postsService = postsService;
        this.router = router;
        this.adminEmail = [];
        // 인증 여부 판단
        this.userIsAuthenticated = false;
        this.mobileQuery = media.matchMedia('(max-width: 576px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
        const nav = new _body_nav_nav_model__WEBPACK_IMPORTED_MODULE_4__["Nav"]();
        this.catergory = nav.catergory;
        // 인증여부가져옴
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.userData = this.authService.getUserData();
        // 상태변화감시
        this.authoListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userData = this.authService.getUserData();
        });
        this.userAuthoritySub = this.authService.userAuthority.subscribe(adminemail => {
            this.adminEmail = adminemail.email;
            console.log(this.adminEmail[0]);
            // console.log(this.adminEmail[0].email);
        });
    }
    onLogout() {
        this.authService.logout();
    }
    onNgSubmit(searchForm) {
        if (searchForm.invalid) {
            return;
        }
        this.router.navigate(['/search'], { queryParams: { searchInput: searchForm.value.searchInput } });
    }
    sidenavClose() {
        this.snav.close();
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.authoListenerSubs.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('snav', { static: false })
], HeaderComponent.prototype, "snav", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/post/ngx-summernote.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/post/ngx-summernote.directive.ts ***!
  \**************************************************/
/*! exports provided: NgxSummernoteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSummernoteDirective", function() { return NgxSummernoteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

var NgxSummernoteDirective_1;





let NgxSummernoteDirective = NgxSummernoteDirective_1 = class NgxSummernoteDirective {
    constructor(el, zone, http) {
        this.zone = zone;
        this.http = http;
        // summernoteModel directive as output: update model if editor contentChanged
        this.summernoteModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.imageUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.imagePath = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // summernoteInit directive as output: send manual editor initialization
        this.summernoteInit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._options = {
            immediateAngularModelUpdate: false,
            angularIgnoreAttrs: null,
            placeholder: '',
            tabsize: 2,
            height: 100,
            uploadImagePath: '',
            toolbar: [
                // [groupName, [list of button]]
                ['misc', ['codeview', 'undo', 'redo', 'codeBlock']],
                // ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                ['fontsize', ['fontname', 'fontsize', 'color']],
                ['para', ['style0', 'ul', 'ol', 'paragraph', 'height']],
                ['insert', ['table', 'picture', 'link', 'video', 'audio', 'hr']],
            ],
            fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times'],
            callbacks: {
                onPaste: (e) => {
                },
                onImageUpload: (files) => {
                    console.log("image upload");
                    this.uploadImage(files);
                },
            }
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._oldModel = null;
        // Begin ControlValueAccesor methods.
        this.onChange = (_) => { };
        this.onTouched = () => { };
        const element = el.nativeElement;
        // check if the element is a special tag
        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) !== -1) {
            this._hasSpecialTag = true;
        }
        // jquery wrap and store element
        this._$element = $(element);
        this.zone = zone;
    }
    set ngxSummernote(options) {
        if (options.buttons) {
            Object.assign(options.buttons, this._options.buttons);
        }
        this._options = Object.assign(this._options, options);
    }
    // summernoteModel directive as input: store initial editor content
    set summernoteModel(content) {
        this.updateEditor(content);
    }
    ngOnInit() {
        this._options.toolbar;
        // check if output summernoteInit is present. Maybe observers is private and
        // should not be used?? TODO how to better test that an output directive is present.
        if (!this.summernoteInit.observers.length) {
            this.createEditor();
        }
        else {
            // TODO not sure it works now...
            this.generateManualController();
        }
    }
    ngOnChanges(changes) {
        if (this._editorInitialized && changes) {
            if (changes.ngxSummernoteDisabled && !changes.ngxSummernoteDisabled.firstChange &&
                changes.ngxSummernoteDisabled.currentValue !== changes.ngxSummernoteDisabled.previousValue) {
                if (changes.ngxSummernoteDisabled.currentValue) {
                    this._$element.summernote('disable');
                }
                else {
                    this._$element.summernote('enable');
                }
            }
        }
    }
    ngOnDestroy() {
        this.destroyEditor();
    }
    // Form model content changed.
    writeValue(content) {
        this.updateEditor(content);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    // Update editor with model contents.
    updateEditor(content) {
        if (JSON.stringify(this._oldModel) === JSON.stringify(content)) {
            return;
        }
        this._oldModel = content;
        this._$element.html(content);
        if (this._editorInitialized) {
            this._$element.summernote('code', content);
        }
        else {
            this._$element.html(content);
        }
    }
    // update model if editor contentChanged
    updateModel(content) {
        // console.log("update model", content)
        this.zone.run(() => {
            let modelContent = null;
            if (this._hasSpecialTag) {
                const attributeNodes = this._$element[0].attributes;
                const attrs = {};
                for (let i = 0; i < attributeNodes.length; i++) {
                    const attrName = attributeNodes[i].name;
                    if (this._options.angularIgnoreAttrs && this._options.angularIgnoreAttrs.indexOf(attrName) !== -1) {
                        continue;
                    }
                    attrs[attrName] = attributeNodes[i].value;
                }
                if (this._$element[0].innerHTML) {
                    attrs[this.INNER_HTML_ATTR] = this._$element[0].innerHTML;
                }
                modelContent = attrs;
            }
            else {
                const returnedHtml = content || '';
                if (typeof returnedHtml === 'string') {
                    modelContent = returnedHtml;
                }
            }
            this._oldModel = modelContent;
            // Update summernoteModel
            this.summernoteModelChange.emit(modelContent);
            // Update form model.
            this.onChange(content);
        });
    }
    initListeners() {
        const self = this;
        if (!this._$element) {
            return;
        }
        this._$element.on('summernote.init', function () {
            setTimeout(function () {
                self.updateModel();
            }, 0);
        });
        this._$element.on('summernote.change', function (event, contents, $editable) {
            setTimeout(function () {
                self.updateModel(contents);
            }, 0);
        });
        this._$element.on('summernote.blur', function () {
            setTimeout(function () {
                self.onTouched();
                self.blur.emit();
            }, 0);
        });
        if (this._options.immediateAngularModelUpdate) {
            this._editor.on('keyup', function () {
                setTimeout(function () {
                    self.updateModel();
                }, 0);
            });
        }
    }
    createEditor() {
        if (this._editorInitialized) {
            return;
        }
        this.setContent(true);
        // this.initListeners(); // issue #31
        // init editor
        this.zone.runOutsideAngular(() => {
            this._editor = this._$element.summernote(this._options).data('summernote').$note;
            this.initListeners(); // issue #31
            if (this.ngxSummernoteDisabled) {
                this._$element.summernote('disable');
            }
        });
        this._editorInitialized = true;
    }
    setHtml() {
        this._$element.summernote('code', this._model || '', true);
    }
    setContent(firstTime = false) {
        // console.log("set content", firstTime, this._oldModel, this._model)
        const self = this;
        // Set initial content
        if (this._model || this._model === '') {
            this._oldModel = this._model;
            if (this._hasSpecialTag) {
                const tags = this._model;
                // add tags on element
                if (tags) {
                    for (const attr in tags) {
                        if (tags.hasOwnProperty(attr) && attr !== this.INNER_HTML_ATTR) {
                            this._$element.attr(attr, tags[attr]);
                        }
                    }
                    if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                        this._$element[0].innerHTML = tags[this.INNER_HTML_ATTR];
                    }
                }
            }
            else {
                self.setHtml();
            }
        }
    }
    destroyEditor() {
        if (this._editorInitialized) {
            this._editor.off('keyup');
            this._$element.summernote('destroy'); // TODO not sure it works now...
            this._editorInitialized = false;
        }
    }
    getEditor() {
        if (this._$element) {
            return this._$element.summernote.bind(this._$element);
        }
        return null;
    }
    // send manual editor initialization
    // TODO not sure it works now...
    generateManualController() {
        const controls = {
            initialize: this.createEditor.bind(this),
            destroy: this.destroyEditor.bind(this),
            getEditor: this.getEditor.bind(this),
        };
        this.summernoteInit.emit(controls);
    }
    uploadImage(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = new FormData();
            this.imageUpload.emit({ uploading: true });
            data.append('image', files[0]);
            if (this._options.uploadImagePath) {
                this.http.post(this._options.uploadImagePath, data)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response && typeof response.path === 'string' && response.path), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(e => {
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('An error occured while uploading' + e);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('');
                }))
                    .subscribe(dataIn => {
                    this.imagePath.emit(dataIn);
                    if (dataIn) {
                        this._$element.summernote('insertImage', dataIn);
                        this.imageUpload.emit({ uploading: false });
                    }
                    else {
                        this.insertFromDataURL(files);
                    }
                }, (e) => {
                    this.insertFromDataURL(files);
                });
            }
            else {
                // this.insertFromDataURL(files);
            }
        });
    }
    insertFromDataURL(files) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            this._$element.summernote('insertImage', reader.result);
            this.imageUpload.emit({ uploading: false, encoding: 'base64' });
        };
        reader.onerror = error => console.error(error);
    }
};
NgxSummernoteDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], NgxSummernoteDirective.prototype, "ngxSummernote", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], NgxSummernoteDirective.prototype, "summernoteModel", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NgxSummernoteDirective.prototype, "summernoteModelChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NgxSummernoteDirective.prototype, "imageUpload", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NgxSummernoteDirective.prototype, "imagePath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NgxSummernoteDirective.prototype, "summernoteInit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NgxSummernoteDirective.prototype, "blur", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], NgxSummernoteDirective.prototype, "ngxSummernoteDisabled", void 0);
NgxSummernoteDirective = NgxSummernoteDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        // tslint:disable-next-line:directive-selector
        selector: '[ngxSummernote]',
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => NgxSummernoteDirective_1),
                multi: true
            }]
    })
], NgxSummernoteDirective);



/***/ }),

/***/ "./src/app/post/post-create/post-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 120px;\n}\n.content {\n  width: 70%;\n  margin: 0 auto;\n}\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n@media (max-width: 580px) {\n  :host {\n    margin-top: 50px;\n  }\n  .content {\n    width: 90%;\n  }\n  * {\n    font-size: 0.8rem;\n  }\n}\n.post-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  padding: 0;\n  width: 100%;\n}\n.title-label {\n  flex-basis: 10%;\n}\n.title-input {\n  flex-basis: 55%;\n}\n.catergory-select {\n  flex-basis: 25%;\n}\n.post-footer {\n  text-align: right;\n  margin: 50px;\n}\n.save {\n  min-width: 200px;\n  font-size: 1.2rem;\n  background-color: #ff9000;\n  border-color: #ff9000;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gICoge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG4ucG9zdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUtbGFiZWwge1xuICBmbGV4LWJhc2lzOiAxMCU7XG59XG4udGl0bGUtaW5wdXQge1xuICBmbGV4LWJhc2lzOiA1NSU7XG59XG4uY2F0ZXJnb3J5LXNlbGVjdCB7XG4gIGZsZXgtYmFzaXM6IDI1JTtcbn1cblxuLnBvc3QtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogNTBweDtcbn1cbi5zYXZlIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkwMDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.ts ***!
  \***********************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_body_nav_nav_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/body/nav/nav.model */ "./src/app/body/nav/nav.model.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");








const BACKED_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BACKED_URL;
let PostCreateComponent = class PostCreateComponent {
    constructor(postService, route, router, recaptchaV3Service) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.recaptchaV3Service = recaptchaV3Service;
        this.mode = 'create';
        this.recentToken = '';
        const nav = new src_app_body_nav_nav_model__WEBPACK_IMPORTED_MODULE_6__["Nav"]();
        this.catergory = nav.catergory;
        this.currentCatergory = this.route.snapshot.queryParams.catergory;
    }
    ngOnInit() {
        // summernote 초기 속성 정의
        this.config = {
            placeholder: '',
            tabsize: 2,
            height: '500px',
            uploadImagePath: BACKED_URL + '/post/image',
            toolbar: [
                ['misc', ['codeview', 'undo', 'redo']],
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                ['fontsize', ['fontname', 'fontsize', 'color']],
                ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
                ['insert', ['table', 'picture', 'link', 'video', 'hr']]
            ],
            fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
        };
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('postId')) { // 게시글 id가 url에 존재한다면 이것은 게시글 modify모드라는 소리임.
                this.mode = 'edit';
                this.postId = paramMap.get('postId');
                // 그 게시글에 값을 불러와서 form을 그에 맞게 초기화시켜줌.
                this.postService.getEachPost(this.postId).subscribe(postData => {
                    this.post = postData.post;
                    this.postForm.setValue({
                        'title': this.post.title,
                        'catergory': this.post.catergory,
                        'content': this.post.content
                    });
                });
            }
            else { // 그게 아니라면 게시글을 새로 생성한다는 의미.
                this.mode = 'create';
                this.postId = null;
            }
        });
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)] }),
            catergory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.currentCatergory, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    }
    /* 게시글 업데이트 시마다 content저장
    myEventHanlder(state: any) {
      this.content = state;
    }
    */
    // 이미지 경로 얻기
    /*
    getImagePath(imagePath) {
      this.imagePath.push(imagePath);
    }
  */
    // 대표이미지 설정 지원은 안되는듯함.
    // content에서 img src 값을 뽑아내는 방법밖에는 없을듯...
    onNgSubmit() {
        if (this.postForm.invalid) {
            return;
        }
        this.singleExecutionSubscription = this.recaptchaV3Service.execute('post')
            .subscribe((token) => {
            this.recentToken = token;
            const rex = /<img[^>]+src="([^">]+)/g; // 이미지 src추출 정규식
            this.imagePath = rex.exec(this.postForm.value.content);
            if (this.imagePath === null) {
                this.realImagePath = null;
            }
            else {
                this.realImagePath = this.imagePath[1];
            }
            if (this.mode === 'create') {
                // console.log(this.postForm.value.title, this.postForm.value.catergory, this.postForm.value.content, this.imagePath[0]);
                this.postService.addPost(this.postForm.value.title, this.postForm.value.catergory, this.postForm.value.content, this.realImagePath, this.recentToken);
            }
            else {
                this.postService.updatePost(this.postId, this.postForm.value.title, this.postForm.value.content, this.realImagePath);
            }
        });
        /*
            if (this.imagePath[0] === null) {
              console.log('???');
              // this.imagePath[0] = null;
            } else {
              // this.imagePath[0] = this.imagePath[1];
            }
          */
        //  중요한 사실이 뭔지알아? rex.exec 일회용이야...
    }
    ngOnDestroy() {
        if (this.singleExecutionSubscription) {
            this.singleExecutionSubscription.unsubscribe();
        }
    }
};
PostCreateComponent.ctorParameters = () => [
    { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["ReCaptchaV3Service"] }
];
PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mypage-post',
        template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/post/post-create/post-create.component.html"),
        styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/post/post-create/post-create.component.css")]
    })
], PostCreateComponent);



/***/ }),

/***/ "./src/app/post/post-list/post-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top:100px;\n}\n.post {\n  /*border: 1px solid black;*/\n  width: 80%;\n  margin: 0 auto;\n}\n.title {\n  text-align: center;\n  font-size: 1.75rem !important;\n}\n.avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: 50% 50%;\n  overflow: hidden;\n}\n.write {\n  overflow: hidden;\n}\n.delete, .modify {\n  text-decoration: none;\n  color: #999 !important;\n  cursor: pointer;\n}\n.content-identity {\n  float: right;\n}\n.content {\n  margin-bottom: 100px;\n}\n.comments {\n  display: -webkit-box;\n  display: flex;\n}\nform {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\ntextarea {\n  width: 80%;\n  height: 80px;\n}\n.article-comments {\n  background: #f5f5f5;\n  border-top: #d5d5d5 solid 1px;\n  padding: 0 15px;\n}\n.article-comments {\n  display: block;\n  margin: 30px 0;\n}\n.reply {\n  overflow: hidden;\n  padding: 0;\n  font-family: '돋움','dotum',Helvetica,sans-serif;\n  list-style: none;\n}\n.comment-box {\n  padding: 15px 0;\n  border-bottom: 1px solid #e2e2e2;\n}\n.info {\n  padding-bottom: 1px;\n  display: inline-block;\n  overflow: hidden;\n  max-width: 50%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  color: #2a2a2a;\n  font-weight: 700;\n}\n.text-wrap {\n  overflow: hidden;\n  font-size: 13px;\n  line-height: 18px;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n.info-base {\n  position: relative;\n  padding: 2px 0 0 0;\n  font-size: 12px;\n  font-family: tahoma,helvetica,sans-serif;\n  color: #999;\n}\n/*추천수디자인*/\n.voteblame {\n  text-align: center;\n}\n.ab-btn-vote {\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  border-radius: 5em;\n  border: 1px solid #999;\n  position: relative;\n  cursor: pointer;\n}\n.vote-top {\n  display: block;\n  margin-top: 0.75em;\n  line-height: 1.5em;\n  font-size: 1.25em;\n}\n.vote-bottom {\n  font-size: 0.75em;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  word-break: break-all;\n}\n.box-btn-reply {\n  overflow: hidden;\n  position: relative;\n  height: 23px;\n  padding: 0 7px;\n  font-size: 12px;\n  line-height: 15px;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  color: #000;\n}\n.reply_txt {\n  display: inline-block;\n  margin-top: 6px;\n  vertical-align: top;\n}\n.reply_cnt {\n  display: inline-block;\n  padding: 4px 0 0 5px;\n  font-weight: 700;\n  vertical-align: top;\n  font-family: tahoma,helvetica,sans-serif;\n}\n.reply-comments {\n  display: none;\n}\n.active {\n  display: block;\n}\n.reply-comments {\n  padding-left: 20px;\n}\n.span-text:before {\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 10px;\n  margin: 0 7px 0 10px;\n  background-color: #ebebeb;\n  vertical-align: baseline;\n}\nbutton {\n  background-color: #FF9000;\n  color: white;\n}\n.add-button {\n  position: relative;\n  min-height: 22px;\n  text-align: center;\n  margin: 25px 0;\n}\n/*innerHTML요소는 cSS가 안먹히는 문제가 발생...*/\n/*https://medium.com/sjk5766/angular-innerhtml-style-%EB%B0%98%EC%98%81%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%AC%B8%EC%A0%9C-4f0abbaae661*/\n@media (max-width: 580px) {\n  :host {\n    margin-top:0px;\n  }\n  .post {\n    /*border: 1px solid black;*/\n    width: 90%;\n    margin: 0 auto;\n  }\n  * {\n    font-size : 0.75rem !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxXQUFXO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0EsbUNBQW1DO0FBQ25DLDZJQUE2STtBQUU3STtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDoxMDBweDtcbn1cbi5wb3N0IHtcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjc1cmVtICFpbXBvcnRhbnQ7XG59XG4uYXZhdGFyIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyaXRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kZWxldGUsIC5tb2RpZnkge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50LWlkZW50aXR5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmFydGljbGUtY29tbWVudHMge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3JkZXItdG9wOiAjZDVkNWQ1IHNvbGlkIDFweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmFydGljbGUtY29tbWVudHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG4ucmVwbHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogJ+uPi+ybgCcsJ2RvdHVtJyxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5jb21tZW50LWJveCB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG59XG4uaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnRleHQtd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLmluZm8tYmFzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMnB4IDAgMCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiB0YWhvbWEsaGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOTk5O1xufVxuLyrstpTsspzsiJjrlJTsnpDsnbgqL1xuLnZvdGVibGFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYi1idG4tdm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udm90ZS10b3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMC43NWVtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuLnZvdGUtYm90dG9tIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5ib3gtYnRuLXJlcGx5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5yZXBseV90eHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5yZXBseV9jbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAwIDAgNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LWZhbWlseTogdGFob21hLGhlbHZldGljYSxzYW5zLXNlcmlmO1xufVxuLnJlcGx5LWNvbW1lbnRzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZXBseS1jb21tZW50cyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNwYW4tdGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luOiAwIDdweCAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyNXB4IDA7XG59XG4vKmlubmVySFRNTOyalOyGjOuKlCBjU1PqsIAg7JWI66i57Z6I64qUIOusuOygnOqwgCDrsJzsg50uLi4qL1xuLypodHRwczovL21lZGl1bS5jb20vc2prNTc2Ni9hbmd1bGFyLWlubmVyaHRtbC1zdHlsZS0lRUIlQjAlOTglRUMlOTglODElRUIlOTAlOTglRUMlQTclODAtJUVDJTk1JThBJUVCJThBJTk0LSVFQiVBQyVCOCVFQyVBMCU5Qy00ZjBhYmJhYWU2NjEqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICB9XG4gIC5wb3N0IHtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyovXG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAqIHtcbiAgICBmb250LXNpemUgOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/post/post-list/post-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.ts ***!
  \*******************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_like_hate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/like-hate.service */ "./src/app/shared/like-hate.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let PostListComponent = class PostListComponent {
    constructor(router, postService, authService, likeHateService, recaptchaV3Service) {
        this.router = router;
        this.postService = postService;
        this.authService = authService;
        this.likeHateService = likeHateService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.isLike = false;
        this.isHate = false;
        this.recentToken = '';
    }
    ngOnInit() {
        this.pages = 1;
        this.addButton = false;
        this.userNickname = this.authService.getUserData().userNickname;
        this.postNo = this.router.url.split('/')[3];
        this.postService.getEachPost(this.postNo)
            .subscribe((postData) => {
            this.post = postData.post;
            if (this.post.reply_cnt > this.pages * 10) {
                this.addButton = true;
            }
        });
        this.likeHateService.getLikeHateCount(this.postNo, this.userNickname);
        this.likeHateSub = this.likeHateService.getlikeHateUpdatedUpdateListener()
            .subscribe((likeHate) => {
            this.likeHate = likeHate;
            if (this.userNickname !== undefined) {
                if (this.likeHate.mylike === 'Y') {
                    this.isLike = true;
                }
                else {
                    this.isLike = false;
                }
                if (this.likeHate.myhate === 'Y') {
                    this.isHate = true;
                }
                else {
                    this.isHate = false;
                }
            }
        });
        // 초기 댓글 호출 시.
        this.replys = [];
        this.postService.getReply(this.postNo, this.pages)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((replyData) => {
            return replyData.reply.map(reply => {
                return {
                    post_no: reply.post_no,
                    reply_no: reply.reply_no,
                    writer: reply.writer,
                    content: reply.content,
                    reply_date: reply.reply_date,
                    count: reply.count - 1,
                    reply_view: false
                };
            });
        }))
            .subscribe((transformedReply) => {
            this.replys = this.replys.concat(transformedReply);
            if (this.post.reply_cnt > this.pages * 10) {
                this.addButton = true;
            }
            else {
                this.addButton = false;
            }
        });
    }
    // 댓글 저장
    onNgReplySubmit(replyForm) {
        // 로그인하지 않은 사용자는 댓글 못씀
        if (!this.authService.getIsAuth()) {
            alert('login ahead!');
            return;
        }
        // 댓글에 아무것도 안쓰면 저장못함
        if (replyForm.invalid) {
            return;
        }
        const content = replyForm.value.reply;
        this.singleExecutionSubscription = this.recaptchaV3Service.execute('reply')
            .subscribe((token) => {
            this.recentToken = token;
            this.postService.addReply(this.postNo, this.authService.getUserData().userNickname, content, this.recentToken).subscribe((replyNo) => {
                this.replys.push({
                    post_no: this.post.post_no,
                    reply_no: replyNo.replyNo,
                    writer: this.userNickname,
                    content: content,
                    reply_date: new Date(),
                    count: 0,
                    reply_view: false
                });
            });
            replyForm.reset();
        });
    }
    // 덧글 저장
    onNgRReplySubmit(replyForm, replyParentNo) {
        if (!this.authService.getIsAuth()) {
            alert('login ahead!');
            return; // 로그인하지 않은 사용자는 댓글 못씀
        }
        if (replyForm.invalid) {
            return; // 댓글에 아무것도 안쓰면 저장못함
        }
        const content = replyForm.value.rreply;
        this.singleExecutionSubscription = this.recaptchaV3Service.execute('reply')
            .subscribe((token) => {
            this.recentToken = token;
            this.postService.addRReply(this.postNo, this.authService.getUserData().userNickname, replyForm.value.rreply, replyParentNo, this.recentToken)
                .subscribe((replyNo) => {
                this.rreplys.push({
                    post_no: this.post.post_no,
                    reply_no: replyNo.replyNo,
                    writer: this.userNickname,
                    content: content,
                    reply_date: new Date(),
                    count: 0,
                    reply_view: false
                });
            });
            replyForm.reset();
        });
    }
    // 덧글 보기 선택
    selectItem(replyNo) {
        this.replys.forEach((replys) => {
            if (replys.reply_no === replyNo) {
                replys.reply_view = !replys.reply_view;
            }
            if (replys.reply_view === true) {
                if (replys.reply_no === replyNo) {
                }
                else {
                    replys.reply_view = false;
                }
            }
        });
        this.rreplySub = this.postService.getRReply(this.postNo, replyNo, 1)
            .subscribe((replys) => {
            this.rreplys = replys.reply;
        });
    }
    // 더보기 버튼 클릭시
    onloadReply() {
        this.pages++;
        this.postService.getReply(this.postNo, this.pages)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((replyData) => {
            return replyData.reply.map(reply => {
                return {
                    post_no: reply.post_no,
                    reply_no: reply.reply_no,
                    writer: reply.writer,
                    content: reply.content,
                    reply_date: reply.reply_date,
                    count: reply.count - 1,
                    reply_view: false
                };
            });
        }))
            .subscribe((transformedReply) => {
            this.replys = this.replys.concat(transformedReply);
            if (this.post.reply_cnt > this.pages * 10) {
                this.addButton = true;
            }
            else {
                this.addButton = false;
            }
        });
    }
    // 게시글 삭제
    onDelete(postNo) {
        this.postService.deletePost(postNo);
    }
    // 좋아요, 싫어요
    onVote(likeHate) {
        this.likeHateService.setLikeCount(this.postNo, this.userNickname, likeHate);
    }
    // 댓, 답글 삭제
    onReplyDelete(idx, replyNo, parent) {
        const result = confirm('Are you sure you want to delete the comments?');
        if (result) {
            this.postService.deleteReply(this.postNo, replyNo, parent).subscribe(() => {
                if (!parent) { // 댓글일때
                    this.replys.splice(idx, 1);
                }
                else { // 답글일때
                    this.rreplys.splice(idx, 1);
                }
            });
        }
        else {
        }
    }
    ngOnDestroy() {
        this.likeHateSub.unsubscribe();
        if (this.singleExecutionSubscription) {
            this.singleExecutionSubscription.unsubscribe();
        }
    }
};
PostListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_like_hate_service__WEBPACK_IMPORTED_MODULE_5__["LikeHateService"] },
    { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["ReCaptchaV3Service"] }
];
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/post/post-list/post-list.component.html"),
        styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/post/post-list/post-list.component.css")]
    })
], PostListComponent);



/***/ }),

/***/ "./src/app/sanitize-html-pipe.ts":
/*!***************************************!*\
  !*** ./src/app/sanitize-html-pipe.ts ***!
  \***************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], SanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/shared/like-hate.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/like-hate.service.ts ***!
  \*********************************************/
/*! exports provided: LikeHateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeHateService", function() { return LikeHateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





const BACKED_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BACKED_URL;
let LikeHateService = class LikeHateService {
    constructor(http) {
        this.http = http;
        this.likeHateUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getlikeHateUpdatedUpdateListener() {
        return this.likeHateUpdated.asObservable();
    }
    // 공감 비공감 처리하기
    setLikeCount(postNo, nickname, like) {
        const postData = {
            postNo: postNo,
            nickname: nickname,
            like: like
        };
        this.http.post(BACKED_URL + '/post/like', postData)
            .subscribe(() => {
            this.getLikeHateCount(postNo, nickname);
        });
    }
    // 공감 비공감 불러오기
    getLikeHateCount(postNo, nickname) {
        const queryParams = `?postNo=${postNo}&nickname=${nickname}`;
        this.http.get(BACKED_URL + '/post/like' + queryParams)
            .subscribe((likeData) => {
            this.likeHateUpdated.next(likeData.likeHate);
        });
    }
};
LikeHateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LikeHateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LikeHateService);



/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








const BACKED_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BACKED_URL;
let PostService = class PostService {
    constructor(http, router, authService, location) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.location = location;
        this.posts = []; // 개별 게시글
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.popularPostUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    // 상태변화리스너 생성(게시글이 업데이트되면 알려줘야...)
    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }
    // 인기 게시글 조회
    getPopularPosts(catergory) {
        const queryParams = `?catergory=${catergory}`;
        this.http.get(BACKED_URL + '/post/popular' + queryParams)
            .subscribe((popularData) => {
            this.popularPostUpdated.next(popularData.posts);
        });
    }
    // 개별 게시글 조회
    getEachPost(postNo) {
        console.log('dd');
        return this.http.get(BACKED_URL + '/post/postEach/' + postNo);
    }
    // 게시글 저장하기
    addPost(title, catergory, content, imagePath, token) {
        let writer = this.authService.getUserData().userNickname;
        const postData = {
            title: title,
            writer: writer,
            catergory: catergory,
            content: content,
            imagePath: imagePath,
            token: token
        };
        // 게시글 정보를 서버에 전송
        this.http.post(BACKED_URL + '/post', postData)
            .subscribe(() => {
            alert('Saved successfully');
            this.postsUpdated.next(this.posts);
            this.location.back();
            // this.router.navigate(['/']);
        });
    }
    // 게시글 삭제
    deletePost(postNo) {
        const result = confirm('Are you sure you want to delete it?');
        if (result) {
            this.http.delete(BACKED_URL + '/post/' + postNo)
                .subscribe(() => {
                alert('Deleted successfully');
                this.router.navigate(['/']);
            });
        }
        else {
            alert('Canceled');
        }
    }
    // 게시글 수정
    updatePost(postNo, title, content, imagePath) {
        const postData = {
            title: title,
            content: content,
            imagePath: imagePath
        };
        this.http.put(BACKED_URL + '/post/' + postNo, postData)
            .subscribe(() => {
            alert('Modified successfully');
            this.router.navigate(['/']);
        });
    }
    // 댓글 저장하기
    addReply(postNo, nickname, reply, token) {
        const postData = {
            postNo: postNo,
            nickname: nickname,
            reply: reply,
            token: token
        };
        return this.http.post(BACKED_URL + '/reply', postData);
    }
    // 댓글 불러오기
    getReply(postNo, pages) {
        const queryParams = `?postNo=${postNo}&pages=${pages}`;
        return this.http.get(BACKED_URL + '/reply' + queryParams);
    }
    // 덧글 저장하기
    addRReply(postNo, nickname, reply, parent, token) {
        const postData = {
            postNo: postNo,
            nickname: nickname,
            reply: reply,
            parent: parent,
            token: token
        };
        return this.http.post(BACKED_URL + '/reply/reply', postData);
    }
    // 덧글 조회하기
    getRReply(postNo, parent, pages) {
        const queryParams = `?postNo=${postNo}&parent=${parent}&pages=${pages}`;
        return this.http.get(BACKED_URL + '/reply/reply' + queryParams);
    }
    // 사용자 검색
    getSearchPost(searchInput, pages) {
        const queryParams = `?search=${searchInput}&pages=${pages}`;
        // 백엔드 통신
        return this.http.get(BACKED_URL + '/post/search' + queryParams);
    }
    // 내 게시글 조회
    getMyPosts(nickname, pages) {
        const queryParams = `?nickname=${nickname}&pages=${pages}`;
        // 백엔드 통신
        return this.http.get(BACKED_URL + '/post/mypost' + queryParams);
    }
    // 댓.답글 삭제
    deleteReply(postNo, replyNo, parent) {
        const queryParams = `?postNo=${postNo}&replyNo=${replyNo}&parent=${parent}`;
        return this.http.delete(BACKED_URL + '/reply/reply' + queryParams);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



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
const environment = {
    production: false,
    BACKED_URL: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\Community-Site\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map