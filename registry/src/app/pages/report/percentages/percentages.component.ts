import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-percentages',
  templateUrl: './percentages.component.html',
  styleUrls: ['../report.component.css']
})
export class PercentagesComponent implements OnInit {
  data: any;
  result!:any[];
  chartOptions: any;


  // subscription: Subscription;

  // config: AppConfig;

  constructor(private reportService:ReportService) { }

  ngOnInit() {
    this.getPercentages();
    this.data = {
        labels: [this.result[0].name,'B','C'],
        datasets: [
            {
                data: [this.result[0].name, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };

    // this.config = this.configService.config;
    // this.updateChartOptions();
    // this.subscription = this.configService.configUpdate$.subscribe(config => {
    //     this.config = config;
    //     this.updateChartOptions();
    // });
}
getPercentages(){
  this.reportService.findPercentages().subscribe(
    res=>{
      this.result = res;
    }
  )
}
// updateChartOptions() {
//   this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
// }

getLightTheme() {
    return {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    }
}

getDarkTheme() {
    return {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        }
    }
}
}