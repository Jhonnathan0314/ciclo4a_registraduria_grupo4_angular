import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/party/party.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  parties!: Party[];

  constructor(@Inject(DOCUMENT) private document: Document, private partyService:PartyService, private router: Router ) { }

  ngOnInit(): void {
    this.getParties();
  }

  getParties(){
    this.partyService.findAll().subscribe(
      res =>{
        this.parties = res;
      }, 
      error =>{
        console.error(error);
      } 

    )
  }

  update(id: any): void {
    this.router.navigate(['/pages/parties/update/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Partido',
      text: 'Esta seguro que desea eliminar el partido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.partyService.delete(id).subscribe(
          res => {
            Swal.fire(
              'Eliminado!',
              'El partido ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              'Ups, Algo ha sucedido!',
              'El partido no ha sido eliminado correctamente',
              'error'
            )
            this.ngOnInit();
          }
        );
      }
    });
  }


  move_left(): void {
    let movePixel = 570;
    let container = this.document.querySelector(".container__content-hide");
    if(container != null){
      container!.scrollLeft = container!.scrollLeft - movePixel;
    }
  }

  move_right():void {
    let movePixel = 570;
    let container = this.document.querySelector(".container__content-hide");
    if(container != null){
      container!.scrollLeft = container!.scrollLeft + movePixel;
    }
  }

}
