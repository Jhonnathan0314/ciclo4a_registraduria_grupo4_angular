import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/party/party.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-party',
  templateUrl: './update-party.component.html',
  styleUrls: ['./update-party.component.css']
})
export class UpdatePartyComponent implements OnInit {

  party!: Party;
  _id!: string;
  name!: string;
  motto!: string;

  constructor(private partyService: PartyService, private router: Router, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.saveData();
  }

  saveData(): void {
    this._id = this.activeRoute.snapshot.params['_id'];
    this.partyService.findById(this._id).subscribe(
      res => {
        this.name = res.name!,
          this.motto = res.motto!
      }
    )
  }

  updateParty(): void {
    this.party = {
      name: this.name,
      motto: this.motto
    }
    this.partyService.update(this._id, this.party).subscribe(
      data => {
        Swal.fire(
          'Actualizado!',
          'El partido ha sido actualizado correctamente',
          'success'
        )
        this.ngOnInit();
        this.router.navigate(['/dashboard/party'])
      },
      error => {
        console.log(error)
        Swal.fire(
          'Ups, Algo ha sucedido!',
          'El partido no ha sido actualizado',
          'error'
        )
      }
    );
  }

}
