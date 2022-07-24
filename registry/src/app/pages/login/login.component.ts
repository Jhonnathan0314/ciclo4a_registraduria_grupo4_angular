import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';
import { DOCUMENT } from '@angular/common';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  hide_password: string = "assets/images/show-pass.png";
  class_error: string = "hide";

  reg_exp_email: RegExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

  constructor(private securityService: SecurityService, private router: Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.securityService.checkActualSession();
  }

  showHide(): void {
    let input = this.document.getElementById("password_input");
    if (this.hide_password == "assets/images/show-pass.png") {
      this.hide_password = "assets/images/hidden-pass.png";
      input!.setAttribute("type", "text");
    } else {
      this.hide_password = "assets/images/show-pass.png";
      input!.setAttribute("type", "password");
    }
  }

  login(): void {
    if (this.validateForm()) {
      let user_data: User = {
        email: this.email,
        password: this.password
      }
      this.securityService.login(user_data).subscribe(
        data => {
          console.log(data),
          this.router.navigate(['dashboard']),
          this.securityService.saveSessionData(data)
      },
        error => {
          console.log(error),
          this.class_error = "error",
          this.password = ""
        }
      );
    }
  }

  validateForm(): boolean {
    if (!this.reg_exp_email.test(this.email)) {
      this.class_error = "error";
      console.log("email error: " + this.email)
      return false;
    }
    return true;
  }

}
