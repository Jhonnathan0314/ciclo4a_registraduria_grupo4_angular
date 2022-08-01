import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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

  role_name: string = localStorage.getItem('role')?.toString()!; 
  firstLogin: boolean = true;

  constructor(private userService: UserService, private securityService: SecurityService, private router: Router, @Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(): void {
    if(this.securityService.getUser() == undefined || this.securityService.getToken() == undefined || this.securityService.getRoleName() == undefined){
      this.router.navigate(['/security/login']);
    }
    if(this.role_name == undefined && this.firstLogin) {
      this.role_name = localStorage.getItem('role')?.toString()!; 
      this.firstLogin = false;
    }
  }
}
