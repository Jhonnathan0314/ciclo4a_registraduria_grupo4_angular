import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/result.model';
import { ResultService } from 'src/app/services/result/result.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  results!:Result[];
  constructor(@Inject(DOCUMENT) private document: Document, private resultService: ResultService, private router:Router) { }

  ngOnInit(): void {
    this.getResults()
  }

  getResults(){
    this.resultService.findAll().subscribe(
      res=>{
        this.results = res;
      }
    )
  }

  update(id: any): void {
    this.router.navigate(['/dashboard/update-register-result/' + id])
  }

  delete(id: any): void {
    Swal.fire({
      title: 'Eliminar Resultado',
      text: 'Esta seguro que desea eliminar el resultado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.resultService.delete(id).subscribe(
          res => {
            Swal.fire(
              'Eliminado!',
              'El resultado ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              'Ups, Algo ha sucedido!',
              'El resultado no ha sido eliminado correctamente',
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
