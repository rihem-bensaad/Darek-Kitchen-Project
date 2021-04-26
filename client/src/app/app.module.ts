import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { UserSignupComponent } from './components/user-signup/user-signup.component';

import { UserLoginComponent } from './components/user-login/user-login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { BrandsAdminComponent } from './components/brands-admin/brands-admin.component';
import { LoggedHomeComponent } from './components/logged-home/logged-home.component';
import { ManagementComponent } from './components/management/management.component';
import { AddPlateComponent } from './components/add-plate/add-plate.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PlateComponent } from './components/plate/plate.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    BrandsComponent,
    AboutComponent,
    ContactComponent,
    UserSignupComponent,
    UserLoginComponent,
    AddBrandComponent,
    AdminDashboardComponent,
    AddBrandComponent,
    ListUserComponent,
    MenuComponent,
    AddMenuComponent,
    GetUserComponent,
    BrandsAdminComponent,
    LoggedHomeComponent,
    ManagementComponent,
    AddPlateComponent,
    OrdersComponent,
    PlateComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    IvyCarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
