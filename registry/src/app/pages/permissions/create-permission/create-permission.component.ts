import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/models/permission.model';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.css']
})
export class CreatePermissionComponent implements OnInit {

  permission!: Permission;
  url!: string;
  method!: string;

  constructor(private permissionService: PermissionService, private router: Router) { }

  ngOnInit(): void {
  }

  createPermission(): void {
    this.permission = {
      url: this.url,
      method: this.method
    }
    this.permissionService.create(this.permission).subscribe(
      data => {
        console.log("CREADO: " + data);
        this.router.navigate(['dashboard/permission'])
      },
      error => {
        console.log(error);
      }
    )
  }

}
