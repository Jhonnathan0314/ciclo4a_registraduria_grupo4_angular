import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  role!: Role;
  name!: string;
  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
  }

  createRole(){
    this.role = {name:this.name}
    this.roleService.create(this.role).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['dashboard/role']);
      },error=>{
        console.log(error)
      }
    )
    
  }

}
