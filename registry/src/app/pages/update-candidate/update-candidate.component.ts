import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { PartyService } from 'src/app/services/party/party.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { Candidate } from 'src/app/models/candidate.model';
import { SecurityService } from 'src/app/services/security/security.service';
@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
  candidate!: Candidate;
  allParties !: Party[];
  parties !: Party[] ;
  idCard: string = "";
  resolutionNumber: string = "";
  name: string = "";
  lastname: string = "";    
  party!:Party;
  id_party!:string;
  public id_candidate!: any;
  constructor(private candidateService: CandidateService,private partyService:PartyService,private securityService: SecurityService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(id_candidate => {
      this.id_candidate = id_candidate.get('_id'); 
      this.getCandidate();
    });
  }
  getCandidate(){
    this.candidateService.findById(this.id_candidate).subscribe( 
      res=>{
        this.candidate = res;
        this.idCard = this.candidate.idCard||"";
        this.resolutionNumber = this.candidate.resolutionNumber||"";
        this.name = this.candidate.name||"";
        this.lastname = this.candidate.lastname||"";
        console.log(this.candidate.party)
        this.parties.push(this.candidate.party!)
        this.getParties();
        console.log(this.resolutionNumber)
        console.log(this.candidate);
      },error => {
        console.log(error);
      }
    )
  }
  getParties():void{
    this.partyService.findAll().subscribe(
      res => {
        console.log("hola")
        this.allParties = res;
        this.allParties.forEach(
          party => {
            console.log(party)
          if(this.candidate.party != party){
            console.log(party)
            this.parties.push(party)
          }
        })
        console.log(this.parties)
      },
      error => {
        console.log(error)
      }
    )
  }
  updateCandidate(): void {
    console.log("BY ID: ")
    this.candidate = {idCard:this.idCard,resolutionNumber:this.resolutionNumber,name:this.name,lastname:this.lastname,party:this.party};
    console.log(this.candidate);
    this.candidateService.update(this.id_candidate,this.id_party||"",this.candidate).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
 
}
