import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(public serviceCatalog: CatalogService) {
    // TODO
  }

  products: any;

  todayLocalized: Date = new Date();
  prixProduittest = 9.99;
  prixProduittest2 = 3.987654321;

  ngOnInit() {
  }

  recupererProduits(){
    const maFunctionCallBack = (mesDataHttpReturn) =>{
      this.products = mesDataHttpReturn;
      //console.log(mesDataHttpReturn);
    }
    this.serviceCatalog.getProducts().subscribe(maFunctionCallBack);      
  }
}
