import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/models/candidate.model';
import { Result } from 'src/app/models/result.model';
import { Table } from 'src/app/models/table.model';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { ResultService } from 'src/app/services/result/result.service';
import { TableService } from 'src/app/services/table/table.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-register-result',
  templateUrl: './update-register-result.component.html',
  styleUrls: ['./update-register-result.component.css']
})
export class UpdateRegisterResultComponent implements OnInit {

  candidates!: Candidate[];
  tables!: Table[];
  result!: Result;
  votes!: Number;
  id_result!: any;
  id_candidate!: any;
  id_table!: string;

  constructor(private resultService: ResultService, private candidateService: CandidateService, private tableService: TableService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(id_result => {
      this.id_result = id_result.get('_id');
      this.getUser();
    });

  }
  getUser() {
    this.resultService.findById(this.id_result).subscribe(
      res => {
        this.result = res;
        this.votes = this.result.votes || 0;
        this.id_candidate = this.result.candidate?._id!;
        this.id_table = this.result.table?._id!;
        this.getTables();
        this.getCandidates()
      }, error => {
        console.log(error);
      }
    )
  }
  getCandidates(): void {
    this.candidateService.findAll().subscribe(
      res => {
        this.candidates = res;
      }
    )
  }
  getTables(): void {
    this.tableService.findAll().subscribe(
      res => {
        this.tables = res;
      }
    )
  }

  updateResult(): void {
    this.result = {
      votes: this.votes,
    };

    this.resultService.update(this.id_result, this.id_candidate, this.id_table, this.result).subscribe(
      data => {
        Swal.fire(
          'Actualizado!',
          'El usuario ha sido actualizado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/pages/users/user'])
      },
      error => {
        console.log(error)
        Swal.fire(
          'Ups, Algo ha sucedido!',
          'El usuario no ha sido actualizado',
          'error'
        )
      }
    )
  }
}
