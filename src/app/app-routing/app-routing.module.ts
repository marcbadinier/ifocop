import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from '../catalog/catalog.component';
import { TestsComponent } from '../tests/tests.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { BestSellerComponent } from '../best-seller/best-seller.component';

import { AccountComponent } from '../account/account.component';
import { AuthGuardService } from '../auth-guard.service';
import { CartComponent } from '../cart/cart.component';
import { ConnectComponent } from '../connect/connect.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { PaymentComponent } from '../payment/payment.component';


const tabRouting: Routes = [
  {// url : /
    path: '', component: HomeComponent
  },
  {// url : /component catalog
    path: 'catalog', component: CatalogComponent
  },
  {// url : /component BestSeller
    path: 'bst', component: BestSellerComponent
  },
  {// url : /component product/:id
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'connect', component: ConnectComponent
  },
  {
    path: 'account', component: AccountComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },

  // MBAD : Mettre en commentaire pour la build Prod
  {// url : /component tests
    path: 'tests', component: TestsComponent
  },
  // MBAD : Mettre en commentaire pour la build Prod

  // pour le chemin default dessous, toujours à laisser en dernier dans la liste du router
  {// url : n'importe quel chemin : le default
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    // CommonModule
    [RouterModule.forRoot(tabRouting)]
  ],
  exports:[RouterModule],
  //Cette propriété ne sert à rien dans le routage. Déclarée par défaut lors de la création auto
  // declarations: [] 
})
export class AppRoutingModule { }
