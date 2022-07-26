import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/party/party.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.css']
})
export class CreatePartyComponent implements OnInit {
  party!: Party;
  name!: string;
  motton!: string;

  constructor(private partyService:PartyService, private router: Router) { }

  ngOnInit(): void {

  }
  createParty(): void{
    this.party = {
      name: this.name,
      motto: this.motton
    }

    this.partyService.create(this.party).subscribe(
      res => {
        Swal.fire(
          'Creado!',
          'El partido ha sido creado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/dashboard/party'])
        console.log(res)
      },
      error => {
        Swal.fire(
          ' Ups! Algo falló',
          'El partido no ha sido creado, ',
          'error'
        )
        console.log(error)
      }
    )
  }

}
