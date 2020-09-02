import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "post", component: PostCreateComponent, canActivate: [AuthGuard] }, // 잘못된 접근을 막을 수 있음
  {
    path: "post/:postId",
    component: PostCreateComponent,
    canActivate: [AuthGuard],
  }, // 잘못된 접근을 막을 수 있음
];
// {scrollPositionRestoration: 'top'}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
