import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/models/candidate.model';
import { Result } from 'src/app/models/result.model';
import { Table } from 'src/app/models/table.model';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { ResultService } from 'src/app/services/result/result.service';
import { TableService } from 'src/app/services/table/table.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-result',
  templateUrl: './register-result.component.html',
  styleUrls: ['./register-result.component.css']
})
export class RegisterResultComponent implements OnInit {

  candidates!: Candidate[];
  tables!: Table[];
  result!: Result;
  votes!: Number;
  id_candidate!:string;
  id_table!:string;

  constructor(private resultService:ResultService, private candidateService:CandidateService,private tableService:TableService, private router: Router) { }

  ngOnInit(): void {
    this.getTables();
    this.getCandidates()
  }

  getCandidates():void{
    this.candidateService.findAll().subscribe(
      res=>{
        this.candidates = res;
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
      votes: this.votes,
    }

    this.resultService.create(this.id_table, this.id_candidate, this.result).subscribe(
      res => {
        Swal.fire(
          'Creado!',
          'El resultado ha sido creado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/pages/results/result/'])
        console.log(res)
      },
      error => {
        Swal.fire(
          'Ups! Algo falló',
          'El resultado no ha sido creado, ',
          'error'
        )
        console.log(error)
      }
    )

  }

}
