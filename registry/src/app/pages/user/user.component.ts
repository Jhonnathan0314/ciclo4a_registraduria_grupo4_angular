import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users!: User[];    
  constructor(private userService: UserService,private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

 
  getUsers(): void {
    this.userService.findAll().subscribe(
      res => {
        this.users = res;
        console.log(res[0].role.name)
      },
      error => {
        console.log(error)
      }
    )
  }

  update(id: any): void {
    this.router.navigate(['/dashboard/update-user/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: 'Estas seguro que desea eliminar el permiso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.userService.delete(id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              'Ups! Algo ha sucedido',
              'El usuario no ha sido eliminado',
              'error'
            )
            this.ngOnInit();
          }
        );
      }
    });
  }
}
