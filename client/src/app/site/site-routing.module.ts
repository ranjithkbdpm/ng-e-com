import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { LoginComponent } from './login/login.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CustomerCartComponent } from './components/customer-cart/customer-cart.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { CustomerCheckoutComponent } from './components/customer-checkout/customer-checkout.component';
import { WebsiteHomePageComponent } from './sitepage/website-home-page/website-home-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: '', redirectTo:'homepage', pathMatch:'full' },
  { path: '', component: WebsiteHomePageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'category-products', component: CategoryProductsComponent},
  { path: 'product-view', component: ProductViewComponent},
  { path: 'customer-cart', component: CustomerCartComponent},
  { path: 'customer-orders', component: CustomerOrdersComponent},
  { path: 'customer-checkout', component: CustomerCheckoutComponent},
  { path: 'homepage', component: WebsiteHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
