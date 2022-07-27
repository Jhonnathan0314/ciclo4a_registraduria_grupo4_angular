import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  roles!: Role[];
  user!: User;
  pseudonym!: string;
  email!: string;
  password!: string;
  role_user!: Role;
  id_role!:string;
  id_user!:any;
  constructor(private roleService:RoleService, private userService:UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(id_candidate => {
      this.id_user = id_candidate.get('_id'); 
      this.getUser();
    });
  }
  getUser(){
    this.userService.findById(this.id_user).subscribe( 
      res=>{
        this.user = res;
        this.pseudonym = this.user.pseudonym||"";
        this.email = this.user.email||"";
        this.role_user = this.user.role!;
        this.id_role = this.user.role?._id!;
        this.getRoles();
      },error => {
        console.log(error);
      }
    )
  }
  getRoles():void{
    this.roleService.findAll().subscribe(
      res => {
        this.roles = res;
      },
      error => {
        console.log(error)
      }
    )
  }
  updateUser(): void {
    console.log("BY ID: ")
    this.user = {
      pseudonym:this.pseudonym,
      email:this.email,
      password:this.password
    };

    this.userService.update(this.id_user ,this.user).subscribe(
      data => {
        this.userService.addRole(this.id_user,this.id_role,this.user).subscribe(
          data => {
            Swal.fire(
              'Actualizado!',
              'El usuario ha sido actualizado correctamente',
              'success'
            )
            this.ngOnInit();
            this.router.navigate(['/pages/users/user'])
          }
        )
      },
      error => {
        console.log(error)
        Swal.fire(
          'Ups, Algo ha sucedido!',
          'El usuario no ha sido actualizado',
          'error'
        )
      }
    )
  }
}
