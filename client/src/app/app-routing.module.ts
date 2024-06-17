import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
     { path: '', redirectTo:'/site', pathMatch:'full' },     
    //  site page for customers
     { path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
     //  admin page 
     { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
     { path:'**', component:NopageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
