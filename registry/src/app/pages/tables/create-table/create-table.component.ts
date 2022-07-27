import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';
import { TableService } from 'src/app/services/table/table.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {

  table!:Table;
  name!: string;
  numberIds!: Number;
  constructor(private tableService:TableService, private router: Router ) { }

  ngOnInit(): void {
  }
  createTable(): void{
    this.table = {
      name:this.name,
      numberIds:this.numberIds
    }
    this.tableService.create(this.table).subscribe(
      res => {
        Swal.fire(
          'Creado!',
          'La mesa ha sido creada correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/pages/tables/table'])
        console.log(res)
      },
      error => {
        Swal.fire(
          ' Ups! Algo falló',
          'La mesa no ha sido creada.',
          'error'
        )
        console.log(error)
      }
    );
    
  }

}
