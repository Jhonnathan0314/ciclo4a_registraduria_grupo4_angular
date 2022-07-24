import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security/security.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role: Role = { }    

  constructor(private userService: UserService, private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(): void {
    if(this.securityService.getUser() == undefined || this.securityService.getToken() == undefined){
      this.router.navigate(['login']);
    }
  }

  findUserById(): void {
    console.log("BY ID: ")
    let user: string = this.securityService.getUser();
    this.userService.findById(user).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

}
