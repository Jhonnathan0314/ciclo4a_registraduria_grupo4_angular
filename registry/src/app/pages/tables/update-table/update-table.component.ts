import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';
import { TableService } from 'src/app/services/table/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-table',
  templateUrl: './update-table.component.html',
  styleUrls: ['./update-table.component.css']
})
export class UpdateTableComponent implements OnInit {

  table!: Table;
  _id!: string;
  numberIds!: Number;
  totalVotes!: Number;

  constructor(private tableService: TableService, private router: Router, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.saveData();
  }

  saveData(): void {
    this._id = this.activeRoute.snapshot.params['_id'];
    this.tableService.findById(this._id).subscribe(
      res => {
          this.numberIds = res.numberIds!,
          this.totalVotes = res.totalVotes!
      }
    )
  }

  updateTable(): void {
    this.table = {
      numberIds: this.numberIds,
      totalVotes: this.totalVotes
    }
    this.tableService.update(this._id, this.table).subscribe(
      data => {
        Swal.fire(
          'Actualizado!',
          'El partido ha sido actualizado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/pages/tables/table'])
      },
      error => {
        console.log(error)
        Swal.fire(
          'Ups, Algo ha sucedido!',
          'El partido no ha sido actualizado',
          'error'
        )
      }
    );
  }
}
