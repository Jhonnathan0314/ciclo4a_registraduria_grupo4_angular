import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
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
