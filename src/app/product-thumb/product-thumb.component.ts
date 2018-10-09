import { Component, OnInit, Input } from '@angular/core';
import { IProduit } from '../interfaces';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {

  @Input() produit: IProduit;
  @Input() isBst: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
