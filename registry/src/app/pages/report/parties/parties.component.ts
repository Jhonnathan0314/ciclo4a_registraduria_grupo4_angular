import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { reportParty } from 'src/app/models/reportParty.model';
import { Table } from 'src/app/models/table.model';
import { PartyService } from 'src/app/services/party/party.service';
import { ReportService } from 'src/app/services/report/report.service';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['../report.component.css']
})
export class PartiesComponent implements OnInit {

  reportParties!:reportParty[];
  parties!: Party[];
  tables!: Table[];
  votes!: Number;
  name_party!:string;
  id_table!:string;

  isLoading: boolean = false;

  constructor(private reportService: ReportService, private partyService: PartyService, private tableService: TableService, private router: Router) {
    this.getTables();
    this.getParties();
   }

  ngOnInit(): void {
    this.getReport();
  }

  getParties():void{
    this.partyService.findAll().subscribe(
      res=>{
        this.parties = res;
      }
    )
  }

  getTables():void{
    this.tableService.findAll().subscribe(
      res=>{
        this.tables = res;
      }
    )
  }

  getReport(){
    this.isLoading = true;
    this.reportService.findPartiesReport().subscribe(
        res => {
            this.reportParties = res,
            this.isLoading = false
        }
    )
  }

}
