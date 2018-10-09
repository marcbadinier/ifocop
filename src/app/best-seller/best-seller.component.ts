import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { IProduit } from '../interfaces';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})

export class BestSellerComponent implements OnInit {

  constructor(public serviceCatalog: CatalogService) { 
    // TODO
  }

  produitRating: IProduit[]; 

  ngOnInit() {
    // TODO
    const maFunctionCallBackRating = (listeProduitsReturn: IProduit[]) =>{
      this.produitRating = listeProduitsReturn;
      // console.log(listeProduitsReturn);
      // console.log(this.produitRating);      
    }
    this.serviceCatalog.getProductsByRating(5).subscribe(maFunctionCallBackRating);
  }
}
