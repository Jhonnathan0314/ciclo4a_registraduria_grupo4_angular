import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';
import { TableService } from 'src/app/services/table/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables!: Table[];

  constructor(private tableService:TableService, private router: Router ) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(){
    this.tableService.findAll().subscribe(
      res =>{
        this.tables = res;
      }, 
      error =>{
        console.error(error);
      } 

    )
  }

  update(id: any): void {
    this.router.navigate(['/dashboard/update-table/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: 'Esta seguro que desea eliminar la tabla?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.tableService.delete(id).subscribe(
          res => {
            Swal.fire(
              'Eliminado!',
              'La table ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              'Ups! Algo ha salido mal!',
              'La tabla no ha sido eliminada',
              'error'
            )
            this.ngOnInit();
          }
        );
      }
    });
  }

}
