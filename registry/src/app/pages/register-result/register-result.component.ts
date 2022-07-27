import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { Result } from 'src/app/models/result.model';
import { Table } from 'src/app/models/table.model';
import { PartyService } from 'src/app/services/party/party.service';
import { ResultService } from 'src/app/services/result/result.service';
import { TableService } from 'src/app/services/table/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-result',
  templateUrl: './register-result.component.html',
  styleUrls: ['./register-result.component.css']
})
export class RegisterResultComponent implements OnInit {

  parties!: Party[];
  tables!: Table[];
  result!: Result;
  votes!: Number;
  id_party!:string;
  id_table!:string;
  constructor(private resultService:ResultService, private partyService:PartyService,private tableService:TableService, private router: Router) { }

  ngOnInit(): void {
    this.getTables();
    this.getPaties()
  }

  getPaties():void{
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
  registerResult(): void{
    this.result={
      votes:this.votes,
    }

    this.resultService.create(this.id_table,this.id_party,this.result).subscribe(
      res => {
        Swal.fire(
          'Creado!',
          'El resultado ha sido creado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/dashboard/result/'])
        console.log(res)
      },
      error => {
        Swal.fire(
          ' Ups! Algo falló',
          'El resultado no ha sido creado, ',
          'error'
        )
        console.log(error)
      }
    )

  }

}
