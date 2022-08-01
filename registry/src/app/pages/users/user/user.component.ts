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
  isLoading: boolean = false;
   
  constructor(private userService: UserService,private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
 
  getUsers(): void {
    this.isLoading = true;
    this.userService.findAll().subscribe(
      res => {
        this.users = res,
        this.isLoading = false
      },
      error => {
        console.log(error)
      }
    )
  }

  update(id: any): void {
    this.router.navigate(['/pages/users/update/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: 'Estas seguro que desea eliminar el usuario?',
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
              'Eliminado!',
              'El usuario ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          }
        );
      }
    });
  }
}
