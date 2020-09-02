import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/auth/signup/password-validator';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  mode: string;
  userData = {
    email: '',
    nickname: '',
    firstname: '',
    lastname: '',
    avatar: '',
    gender: ''
  };
  form: FormGroup;
  imagePreview: string;
  imageNew: boolean;

  constructor(private authService: AuthService) {

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

    this.form = new FormGroup({
      image: new FormControl(null, {validators: [Validators.required], asyncValidators : [mimeType]}),
      passwordGroup: new FormGroup({
        password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}')]),
        confirmPassword: new FormControl(null, Validators.required)
      }, PasswordValidator.match),
      nickName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,20}')])
    });

  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imagePreview = reader.result as string;
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
}
