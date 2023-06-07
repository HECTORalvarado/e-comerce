import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { NgxPayPalModule } from "ngx-paypal";
import {
  SocialLoginModule, 
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { CookieService } from 'ngx-cookie-service';

// Components
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductInventoryComponent } from './components/product-inventory/product-inventory.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { AddressComponent } from './components/address/address.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    OrdersComponent,
    CartComponent,
    ProductCategoriesComponent,
    ProductInventoryComponent,
    OrderStatusComponent,
    OrderDetailComponent,
    CartDetailComponent,
    PaymentComponent,
    InvoiceComponent,
    InvoiceDetailComponent,
    AddressComponent,
    LoginComponent,
    AdministrationComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxPayPalModule,
    FontAwesomeModule,
    MaterialModule,
    SocialLoginModule
  ],
  providers: [
    SocialLoginModule,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '28648532381-m1150g6n1kr4doo3kd63nlipugslf7ej.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
