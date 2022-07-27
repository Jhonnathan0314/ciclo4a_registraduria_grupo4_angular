import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role/role.service';
import { Role } from 'src/app/models/role.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  update(id: any): void {
    this.router.navigate(['/pages/roles/update/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: 'Estas seguro que desea eliminar el rol?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.roleService.delete(id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'El permiso ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              'Eliminado!',
              'El permiso ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          }
        );
      }
    });
  }

}
