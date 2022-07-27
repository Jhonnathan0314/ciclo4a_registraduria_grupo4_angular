import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  roles!: Role[];
  user!: User;
  pseudonym!: string;
  email!: string;
  password!: string;
  id_role!:string;
  constructor(private roleService:RoleService, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  getRoles():void{
    this.roleService.findAll().subscribe(
      res=>{
        this.roles = res;
      }
    )
  }
  createUser(): void{
    this.user={
      pseudonym:this.pseudonym,
      email:this.email,
      password:this.password
    }

    this.userService.create(this.id_role,this.user).subscribe(
      res => {
        Swal.fire(
          'Creado!',
          'El usuario ha sido creado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/pages/users/user/'])
        console.log(res)
      },
      error => {
        Swal.fire(
          ' Ups! Algo falló',
          'El usuario no ha sido creado, ',
          'error'
        )
        console.log(error)
      }
    )

  }
}
