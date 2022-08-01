import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result.model';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['../report.component.css']
})
export class VotesComponent implements OnInit {

  report_votes!: Result[]

  isLoading: boolean = false;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.findReport();
  }

  findReport(): void {
    this.isLoading = true;
    this.reportService.findReport().subscribe(
      res => {
        this.report_votes = res,
        this.isLoading = false
      },
      error => {
        console.log(error)
      }
    )
  }

}
