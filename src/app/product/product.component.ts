import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from'@angular/router';

import { Subscription } from 'rxjs';

import { CatalogService } from '../catalog.service';
import { IProduit } from '../interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit, OnDestroy {

  produit: IProduit;
  
  private paramsSubscription: Subscription;  

  constructor(
    private serviceCatalog: CatalogService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() 
  {
    // this.route.params.subscribe((params: Params) =>
    // {
    //   // à ce niveau, l'objet n'est pas encore défini, car opération asynchrone..on attend le retour du listener..; mais on affiche donc un objet pas encore instancié : undefined !
    //   //console.log(params.id);
    //   this.serviceCatalog.getProductsById(params.id).subscribe(
    //     (produit: IProduit) =>
    //     {
    //       // console.log(this.product)
    //       this.product = produit;
    //       // à ce niveau, l'objet est bien défini, on a bien le retour de l'objet dans la console
    //       // console.log(this.product);
    //     });
    // });

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      // SebG : IMPORTANT: Utiliser une fonction flèche. 
      this.serviceCatalog.getProductsById(params.id).subscribe((product: IProduit) => {
        // SebG : IMPORTANT: Utiliser une fonction flèche.
        // product.image = "./assets/images/produits/${ product.image }";
        // console.log(product.image);
        // <app-image [image]="produit.image" [imgalt]="produit.name" [cssclass]="'redimmedium'"></app-image>
        this.produit = product;
        // console.log(product);
        // console.log(this.produit);
      });
      
    });
  }


  ngOnDestroy() {
    this.paramsSubscription.unsubscribe(); // facultatif, Angular se désinscrira automatiqument
    // de l'observable sur la route. Mais ce n'est pas le cas de tous les observables.
  }

  // addToCart(product: Product): void {
  //   // console.log('Adding to cart:', product);
  //   this.cartService.addProduct(product);
  //   this.router.navigate(['/cart']);
  // }
  addToCart(product: IProduit): void {
    // console.log('Adding to cart:', product);
    this.cartService.addProduct(product);
    this.router.navigate(['/cart']);
  }


}