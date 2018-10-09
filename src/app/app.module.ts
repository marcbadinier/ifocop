import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from  '@angular/common';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TestsComponent } from './tests/tests.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PriceComponent } from './price/price.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { ImageComponent } from './image/image.component';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './connect/connect.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestsComponent,
    CatalogComponent,
    PriceComponent,
    NotFoundComponent,
    HomeComponent,
    ProductComponent,
    BestSellerComponent,
    ImageComponent,
    ProductThumbComponent,
    SignupComponent,
    LoginComponent,
    ConnectComponent,
    AccountComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
