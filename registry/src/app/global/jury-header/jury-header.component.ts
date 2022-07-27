import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-jury-header',
  templateUrl: './jury-header.component.html',
  styleUrls: ['./jury-header.component.css']
})
export class JuryHeaderComponent implements OnInit {

  user_id!: string;
  pseudonym!: string;
  email!: string;
  role_name!: string;

  constructor(private securityService: SecurityService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user_id = this.securityService.getUser();
    this.getUser();
  }

  logout(): void {
    this.securityService.logout();
  }

  getUser(): void {
    this.userService.findById(this.user_id).subscribe(
      data => {
        this.pseudonym = data.pseudonym!,
        this.email = data.email!,
        this.role_name = data.role!.name!
      },
      error => {
        console.log(error)
      }
    )
  }

}
