import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CatergoriesComponent } from './components/catergories/catergories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { AdminpageComponent } from './dashboard/adminpage/adminpage.component';


@NgModule({
  declarations: [
    AdminComponent,
    CatergoriesComponent,
    OrdersComponent,
    VendorsComponent,
    SalesComponent,
    ProductsComponent,
    LoginComponent,
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
