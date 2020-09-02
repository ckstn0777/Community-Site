import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { ResetComponent } from './reset/reset.component';

const routers: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'help', component: HelpComponent },
  { path: 'reset', component: ResetComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
