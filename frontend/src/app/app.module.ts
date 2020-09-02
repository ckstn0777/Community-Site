import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AngularMaterialModule } from "./angular-material.module";
import { AuthModule } from "./auth/auth.module";
import { BodyModule } from "./body/body.module";
import { AppRoutingModule } from "./app-rounting.module";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSummernoteDirective } from "./post/ngx-summernote.directive";
import { ErrorComponent } from "./error/error.component";
import { ErrorInterceptor } from "./error-interceptor";
import { AuthIntercepter } from "./auth/auth-intercepter";
import { PostListComponent } from "./post/post-list/post-list.component";
import { SanitizeHtmlPipe } from "./sanitize-html-pipe";
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import {
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSortModule,
  MatPaginatorModule,
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent,
    NgxSummernoteDirective,
    ErrorComponent,
    PostListComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    BodyModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    /*NgxSummernoteModule*/
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6Lf128MUAAAAAH841QayrFoQj0y0C6GCFYpanXh5",
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent], // 진입 컴포넌트는 NgModule가 시작되하거나 라우팅되면서 접속 주소가 변경될 때 사용됩니다.
  // 컴포넌트는 용도에 따라 두 종류로 구분할 수 있습니다. 하나는 템플릿에서 셀렉터로 사용하는 컴포넌트이며,
  // 다른 하나는 모듈에서 명시적으로 지정하는 진입 컴포넌트입니다.
})
export class AppModule {}
