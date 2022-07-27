import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { Candidate } from 'src/app/models/candidate.model';
import Swal from 'sweetalert2';
import { PartyService } from 'src/app/services/party/party.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates!: Candidate[];    
  parties!: Party[];
  filterParty!: Party;
  constructor(private candidateService: CandidateService,private partyService: PartyService, private router: Router) { }

  ngOnInit(): void {
    
    this.getParties();
    console.log(this.parties)
    this.getCandidates();
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
 

  getCandidates(): void {
    this.candidateService.findAll().subscribe(
      res => {
        console.log(res)
        this.candidates = res;
      },
      error => {
        console.log(error)
      }
    )
  }

  update(id: any): void {
    this.router.navigate(['/pages/candidates/update-candidate/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Permiso',
      text: 'Estas seguro que desea eliminar el candidato?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.candidateService.delete(id).subscribe(
          data => {
            Swal.fire(
              'Eliminado!',
              'El permiso ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              'Eliminado!',
              'El permiso ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          }
        );
      }
    });
  }

}
