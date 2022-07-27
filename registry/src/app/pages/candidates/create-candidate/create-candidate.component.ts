import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { PartyService } from 'src/app/services/party/party.service';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { Candidate } from 'src/app/models/candidate.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  candidate!: Candidate;
  parties !: Party[];
  idCard: string = "";
  resolutionNumber: string = "";
  name: string = "";
  lastname: string = "";    
  id_party!:string;

  constructor(private candidateService: CandidateService,private partyService:PartyService, private router: Router) { }

  ngOnInit(): void {
    this.getParties();
  }

  getParties(): void {
    this.partyService.findAll().subscribe(
      res => {
        this.parties = res;
      },
      error => {
        console.log(error)
      }
    )
  }
  
  createCandidate(): void {
    this.candidate = {idCard:this.idCard,resolutionNumber:this.resolutionNumber,name:this.name,lastname:this.lastname};
    this.candidateService.create(this.id_party||"",this.candidate).subscribe(
      res => {
        Swal.fire(
          'Creado!',
          'El candidato ha sido creado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/pages/candidates/candidate'])
        console.log(res)
      },
      error => {
        Swal.fire(
          ' Ups! Algo falló',
          'El candidato no ha sido creado, ',
          'error'
        )
        console.log(error)
      }
    )
  }
}
