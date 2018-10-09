import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: string;
  @Input() imgalt: string;
  @Input() cssclass: string;

  imgPath: string = "./assets/images/produits/"; 

  constructor() { }

  ngOnInit() {
    // console.log(this.imgPath);
  }

}
