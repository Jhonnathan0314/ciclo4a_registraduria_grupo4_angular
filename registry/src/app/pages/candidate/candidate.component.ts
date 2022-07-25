import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { Candidate } from 'src/app/models/candidate.model';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates!: Candidate[];    
  parties?: Party[];
  constructor(private candidateService: CandidateService, private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
    this.isLogged();
    this.parties = [{name:"Partido1"}]
    this.findCandidates();
  }

  isLogged(): void {
    if(this.securityService.getUser() == undefined || this.securityService.getToken() == undefined){
      this.router.navigate(['login']);
    }
  }

  // findCandidateById(id:string): void {
  //   console.log("BY ID: ")
  //   this.candidateService.findById(id).subscribe(
  //     data => {
  //       console.log(data)
  //     },
  //     error => {
  //       console.log(error)
  //     }
  //   )
  // }

  findCandidates(): void {
    console.log("BY ID: ")
    this.candidateService.findAll().subscribe(
      res => {
        console.log(res)
        this.candidates = res.body;
        console.log(this.candidates[0].party?.name);
      },
      error => {
        console.log(error)
      }
    )
  }

}
