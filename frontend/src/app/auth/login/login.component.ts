import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  // 로그인 상태 검사를 하기 위해...
  isLoding = false;
  private authStatusSub: Subscription;

  public recentToken: string = '';
  private singleExecutionSubscription: Subscription;


  constructor(public authService: AuthService, public router: Router, private recaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        if (authStatus) { // 로그인 성공하면
          this.isLoding = false;
          this.authService.getUserAuthority();
        }
        else { // 로그인 실패하면
          this.isLoding = false;
        }
      }
    );
  }

  onNgSubmit(loginForm: NgForm) {
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
}
