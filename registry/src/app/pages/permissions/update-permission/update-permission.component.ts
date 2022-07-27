import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from 'src/app/models/permission.model';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.css']
})
export class UpdatePermissionComponent implements OnInit {

  permission!: Permission;
  url!: string;
  method!: string;

  constructor(private permissionService: PermissionService, private router: Router, private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.saveData();
  }

  saveData(): void {
    let id = this.activeRoute.snapshot.params['_id'];
    this.permissionService.findById(id).subscribe(
      data => {
        this.url = data.url!,
        this.method = data.method!
      }
    )
  }

  updatePermission(): void {
    let id = this.activeRoute.snapshot.params['_id'];
    if(id){
      this.permissionService.findById(id).subscribe(
        permission => {
          this.permission = {
            url: this.url,
            method: this.method
          }
          this.permissionService.update(id, this.permission).subscribe(
            data => {
              this.router.navigate(['/dashboard/permission'])
            },
            error => {
              console.log(error)
            }
          )
        },
        error => {
          console.log(error)
        }
      )
    }
  }

}
