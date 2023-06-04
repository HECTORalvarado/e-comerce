import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
