import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { IProduit } from '../interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  constructor(public serviceCatalog: CatalogService) { 
    // TODO
  }

  produitsList: IProduit[];

  ngOnInit() {
    // TODO
    const maFunctionCallBackProduitsList = (listeProduitsReturn: IProduit[]) =>{
    this.produitsList = listeProduitsReturn;
    //okconsole.log(listeProduitsReturn);
    }
    this.serviceCatalog.getProducts().subscribe(maFunctionCallBackProduitsList);
  }

}
