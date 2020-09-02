import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  email: string;
  sumitBool: boolean;

  ngOnInit() {
    this.sumitBool = false;
  }

  constructor(private authService: AuthService) {

  }

  onNgSubmit(emailForm: NgForm) {
    if (emailForm.invalid) {
      return;
    }
    this.sumitBool = true;
    this.authService.confirmUser(emailForm.value.email);
  }
}
