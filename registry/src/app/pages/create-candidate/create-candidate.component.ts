import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { PartyService } from 'src/app/services/party/party.service';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { Candidate } from 'src/app/models/candidate.model';
import { SecurityService } from 'src/app/services/security/security.service';

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
  party!:Party;
  id_party!:string;
  constructor(private candidateService: CandidateService,private partyService:PartyService,private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
    this.getParties();
  }
  getParties():void{
    this.partyService.findAll().subscribe(
      res => {
        console.log(res)
        this.parties = res.body;
      },
      error => {
        console.log(error)
      }
    )
  }
  createCandidate(): void {
    this.candidate = {idCard:this.idCard,resolutionNumber:this.resolutionNumber,name:this.name,lastname:this.lastname,party:this.party};
    console.log(this.id_party);
    this.candidateService.create(this.id_party||"",this.candidate).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
