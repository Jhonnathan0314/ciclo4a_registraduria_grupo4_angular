import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.securityService.logout();
  }

}
