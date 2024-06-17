import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CustomerCartComponent } from './components/customer-cart/customer-cart.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { CustomerCheckoutComponent } from './components/customer-checkout/customer-checkout.component';
import { WebsiteHomePageComponent } from './sitepage/website-home-page/website-home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SiteComponent,
    ProductViewComponent,
    CustomerCartComponent,
    CategoryProductsComponent,
    CustomerOrdersComponent,
    CustomerCheckoutComponent,
    WebsiteHomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
