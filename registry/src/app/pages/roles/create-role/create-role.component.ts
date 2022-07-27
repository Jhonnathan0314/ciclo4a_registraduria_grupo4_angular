import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role/role.service';
import Swal from 'sweetalert2';
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
        Swal.fire(
          'Creado!',
          'El rol ha sido creado correctamente',
          'success'
        )
        this.router.navigate(['/pages/roles/role']);
        this.ngOnInit();
        console.log(res)
      },error=>{
        console.log(error)
      }
    )
    
  }
}
