import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule, MatCardModule, MatFormFieldModule, MatTreeModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './api/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { userService } from './login/user.service';
@NgModule({
  declarations: [
    AppComponent,
    HierarchyComponent,
    CustomerComponent,
    OrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [ApiService, HttpClient, userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
