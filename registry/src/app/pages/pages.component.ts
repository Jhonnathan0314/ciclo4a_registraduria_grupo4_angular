import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role.model';
import { SecurityService } from '../services/security/security.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  role_name!: string;    

  constructor(private userService: UserService, private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
    this.isLogged();
    this.getRole();
  }

  isLogged(): void {
    if(this.securityService.getUser() == undefined || this.securityService.getToken() == undefined){
      this.router.navigate(['/security/login']);
    }
  }

  findAll(): void {
    let user: string = this.securityService.getUser();
    this.userService.findAll().subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  getRole(): void {
    console.log("BY ID: ")
    let user: string = this.securityService.getUser();
    this.userService.findById(user).subscribe(
      res => {
        this.role_name = res.role!.name!;
        console.log(this.role_name)
      },
      error => {
        console.log(error)
      }
    )
  }
}
