import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  email: string = "";
  password: string = "";
  repeat_password: string = "";

  error_message: string = "";
  class_error: string = "hide";

  reg_exp_email: RegExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    let span = this.document.getElementById("error");
    this.class_error = "hide";
    if(this.password != this.repeat_password){
      this.class_error = "error";
      this.error_message = "Las contraseñas no coinciden";
    }
    if(this.password.length < 8) {
      this.class_error = "error";
      this.error_message = "La contraseña debe tener minimo 8 caracteres alfanumericos";
    }
    if(!this.reg_exp_email.test(this.email)){
      this.class_error = "error";
      this.error_message = "Email invalido";
    }
    if(this.username.length < 4){
      this.class_error = "error";
      this.error_message = "Nombre de usuario invalido";
    }
    if(this.class_error != "error"){
      this.router.navigate(['/login']);
    }
  }

}
