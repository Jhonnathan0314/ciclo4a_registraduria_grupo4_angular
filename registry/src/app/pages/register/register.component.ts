import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;
  username: string = "";
  email: string = "";
  password: string = "";
  repeat_password: string = "";

  error_message: string = "";
  class_error: string = "hide";

  reg_exp_email: RegExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    if (this.validateForm()) {
      this.user = {
        pseudonym: this.username,
        email: this.email,
        password: this.password,
      }
      this.userService.create(this.user).subscribe(
        res => {
          this.userService.defaultRole(res._id!).subscribe(
            res => {
              Swal.fire(
                'Su usuario ha sido creado!',
                'Ahora, por favor inicie sesión',
                'success'
              )
              this.router.navigate(['/security/login'])
            },
            error => {
              console.log(error)
            }
          )
        },
        error => {
          console.log(error)
          Swal.fire(
            'Ups! Algo ha fallado',
            'Por favor, vuela a realizar el registro',
            'error'
          )
          this.ngOnInit();
        }
      );
    }
  }

  validateForm(): boolean {
    let span = this.document.getElementById("error");
    this.class_error = "hide";
    if (this.password != this.repeat_password) {
      this.class_error = "error";
      this.error_message = "Las contraseñas no coinciden";
      return false;
    }
    if (this.password.length < 8) {
      this.class_error = "error";
      this.error_message = "La contraseña debe tener minimo 8 caracteres alfanumericos";
      return false;
    }
    if (!this.reg_exp_email.test(this.email)) {
      this.class_error = "error";
      this.error_message = "Email invalido";
      return false;
    }
    if (this.username.length < 4) {
      this.class_error = "error";
      this.error_message = "Nombre de usuario invalido";
      return false;
    }
    // if (this.class_error != "error") {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
  }

}
