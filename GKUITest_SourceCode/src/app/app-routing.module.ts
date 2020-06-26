import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'hierarchy', component: HierarchyComponent },
  { path: 'customer', component: CustomerComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

