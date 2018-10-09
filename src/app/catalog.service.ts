import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduit } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  // private apiBase: string = "http://ng-ecommerce-api.virtuoworks.com/api";
  private apiBase: string = "http://localhost/api";
  // private apiBase: string = "http://192.168.105.79/api";
  
  constructor(private serviceHttp: HttpClient)
    {
      // TODO
    }

  // Récup de la liste complète des produits
  // getProducts(){
  //   const url = `${this.apiBase}/Products`;
  //   // console.log(url);
  //   return this.serviceHttp.get(url);
  // }
  getProducts(): Observable<IProduit[]>
  {
    return this.serviceHttp.get<IProduit[]>(`${this.apiBase}/Products`);
  }

  // Récup d'un produit de la liste à partir de son Id
  // getProductsById(id){
  //   const url = `${this.apiBase}/Products/findOne?filter={"where":{"id":"${id}"}}`;
  //   //console.log(url);
  //   return this.serviceHttp.get(url);
  // }
  getProductsById(id: string): Observable<IProduit> {
    const url = `${this.apiBase}/Products/findOne?filter={"where":{"id":"${id}"}}`;
    return this.serviceHttp.get<IProduit>(url);
  }

  //exemple pour trouver un produit avec son id
  //http://ng-ecommerce-api.virtuoworks.com/api/Products/findOne?filter={"where":{"id":"5b3a54b9be56c0d8c3495c75"}}
  // et pour la liste des rating=5
  // http://ng-ecommerce-api.virtuoworks.com/api/Products/?filter={"where":{"rating":"5"}}

  
  // Récup de la liste complète des produits avec un rating de 5
  // getProductsByBestRating(){
  //   const url = `${this.apiBase}/Products/?filter={"where":{"rating":"5"}}`;
  //   //console.log(url);
  //   return this.serviceHttp.get(url);
  // }
  // Transformation en fonction flèche et observable, comme celle de SebG
  getProductsByRating(rating: number): Observable<IProduit[]> {
    const url = `${this.apiBase}/Products/?filter={"where":{"rating":"${rating}"}}`;    
    return this.serviceHttp.get<IProduit[]>(url);
  }

  // Exemples de requêtes tirées du code de SebG
  // Faire des essais avec de la requête 'SQL classique'
    /*
  Ordre décroissant
  http://ng-ecommerce-api.virtuoworks.com/api/Products?filter={"order":"name DESC"}

  {"where":{"id":"5b3a54b9be56c0d8c3495c75"}, "limit":1, "order":"name ASC"}

  {"where":{"id":{"neq":"5b3a54b9be56c0d8c3495c76"}}, "limit":3, "order":"name ASC"}
  */

}
