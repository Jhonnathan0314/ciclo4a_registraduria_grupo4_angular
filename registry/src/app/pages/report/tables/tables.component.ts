import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result.model';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['../report.component.css']
})
export class TablesComponent implements OnInit {

  reportTables!: Result[];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getReportTables();
  }

  getReportTables(){
    this.reportService.findReport().subscribe(
        res=>{
            this.reportTables = res;
        }

    )
  }

}
