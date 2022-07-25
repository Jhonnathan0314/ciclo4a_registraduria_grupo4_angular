import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role/role.service';
import { Role } from 'src/app/models/role.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  
    // Declaración de variables
  roles!: Role[];
  
  constructor(private roleService: RoleService, private router: Router) { }
  

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    this.roleService.findAll().subscribe(
      res => {
        this.roles = res;
      },error =>{
        console.log(error)
      }
    )
  }

  deleteRole(id:any){
    this.roleService.delete(id).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['dashboard/role']);
      },error =>{
        console.log(error)
      }
    )
  }

}
