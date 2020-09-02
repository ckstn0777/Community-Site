import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../signup/password-validator';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  email: string;
  key: string;
  resetFormGroup: FormGroup;

  ngOnInit() {
    this.resetFormGroup = new FormGroup({
      passwordGroup: new FormGroup({
        password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}')]),
        confirmPassword: new FormControl(null, Validators.required)
      }, PasswordValidator.match),
    });

    this.route.queryParams.subscribe((param: Params) => {
      this.email = param.email;
      this.key = param.key;
    });
  }

  constructor(private route: ActivatedRoute, private authService: AuthService) {

  }

  onSubmit() {
    if (this.resetFormGroup.invalid) {
      return;
    }
    this.authService.passwordReset(this.email, this.key, this.resetFormGroup.value.passwordGroup.password);
  }
}
