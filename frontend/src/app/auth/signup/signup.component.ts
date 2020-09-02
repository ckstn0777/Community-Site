import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PasswordValidator } from "./password-validator";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";
import { ReCaptchaV3Service } from "ng-recaptcha";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  isLoding = false;
  private authStatusSub: Subscription;

  public recentToken: string = "";
  private singleExecutionSubscription: Subscription;

  constructor(
    public authService: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  ngOnInit() {
    // 리엑티브 폼 방식의 구현 / 검증
    this.signupForm = new FormGroup({
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern("[ㄱ-ㅎ|가-힣|a-z|A-Z]{1,20}"),
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern("[ㄱ-ㅎ|가-힣|a-z|A-Z]{2,20}"),
      ]),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      passwordGroup: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.pattern(
              "(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}"
            ),
          ]),
          confirmPassword: new FormControl(null, Validators.required),
        },
        PasswordValidator.match
      ),
      nickName: new FormControl(null, [
        Validators.required,
        Validators.pattern("[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]{3,20}"),
      ]),
      gender: new FormControl("male"),
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
        this.authService.createUser(
          this.signupForm.value.email,
          this.signupForm.value.passwordGroup.password,
          this.signupForm.value.firstName,
          this.signupForm.value.lastName,
          this.signupForm.value.nickName,
          this.signupForm.value.gender,
          this.recentToken
        );
      });
  }

  ngOnDestroy() {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }
}
