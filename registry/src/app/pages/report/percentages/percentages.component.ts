import { Component, OnInit } from '@angular/core';
import { Percentage } from 'src/app/models/percentage.model';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
    selector: 'app-percentages',
    templateUrl: './percentages.component.html',
    styleUrls: ['../report.component.css']
})
export class PercentagesComponent implements OnInit {

    percentages!: Percentage[];

    isLoading: boolean = false;

    constructor(private reportService: ReportService) { }

    ngOnInit() {
        this.getPercentages()
    }

    getPercentages() {
        this.isLoading = true;
        this.reportService.findPercentages().subscribe(
            res => {
                this.percentages = res,
                this.isLoading = false;            },
            error => {
                console.log(error)
            }
        )
    }

}