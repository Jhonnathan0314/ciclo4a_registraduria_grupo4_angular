import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/models/permission.model';
import { PermissionService } from 'src/app/services/permission/permission.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  permission!: Permission;
  permissions!: Permission[];

  id!: string;

  constructor(private permissionService: PermissionService, @Inject(DOCUMENT) document: Document, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.permissionService.findAll().subscribe(
      data => {
        this.permissions = data
      },
      error => {
        console.log(error)
      }
    )
  }

  update(id: any): void {
    this.router.navigate(['/pages/permissions/update/' + id])
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
        this.permissionService.delete(id).subscribe(
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
