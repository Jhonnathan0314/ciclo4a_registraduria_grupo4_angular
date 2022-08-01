import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table.model';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['../report.component.css']
})
export class TablesComponent implements OnInit {

  reportTables!: Table[];

  isLoading: boolean = false;


  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.getReportTables();
  }

  getReportTables(){
    this.isLoading = true;
    this.tableService.findAll().subscribe(
        res=>{
            this.reportTables = res
            this.isLoading = false
        }

    )
  }

}
