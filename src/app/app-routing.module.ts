import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LoginComponent } from './components/login/login.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { GuardGuard } from './guard.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path: 'pages/user', component:UserComponent, canActivate:[GuardGuard]},
  {path: 'pages/address', component:AddressComponent},
  {path: 'pages/orders', component:OrdersComponent},
  {path: 'pages/order-status', component:OrderStatusComponent},
  {path: 'pages/order-detail', component:OrderDetailComponent},
  {path: 'pages/products', component:ProductsComponent},
  {path: 'pages/categories', component:ProductCategoriesComponent},
  {path: 'pages/inventory', component:ProductInventoryComponent},
  {path: 'pages/cart', component:CartComponent},
  {path: 'pages/cart-detail', component:CartDetailComponent},
  {path: 'pages/payment', component:PaymentComponent},
  {path: 'pages/invoice', component:InvoiceComponent},
  {path: 'pages/invoice-detail', component:InvoiceDetailComponent},
  {path: 'pages/login', component:LoginComponent},
  {path: 'pages/administration', component:AdministrationComponent},
  {path: 'pages/addPoducts', component: AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
