import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { MenuComponent } from './components/menu/menu.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { BrandsAdminComponent } from './components/brands-admin/brands-admin.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { CreateChefComponent } from './components/create-chef/create-chef.component';
import { LoggedHomeComponent } from './components/logged-home/logged-home.component';
import { ManagementComponent } from './components/management/management.component';
import { AddPlateComponent } from './components/add-plate/add-plate.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PlateComponent } from './components/plate/plate.component';
import { ChefPlatesComponent } from './components/chef-plates/chef-plates.component';

import { AgmCoreModule } from '@agm/core';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './pipes/highlight.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import {SocketioService } from './services/socketio.service';
import { AllplatesComponent } from './components/allplates/allplates.component';


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
    MenuComponent,
    AddMenuComponent,
    GetUserComponent,
    BrandsAdminComponent,
    CartComponent,
    FilterBrandPipe,
    CreateChefComponent,
    LoggedHomeComponent,
    ManagementComponent,
    AddPlateComponent,
    OrdersComponent,
    PlateComponent,
    ChefPlatesComponent,
    FilterPipe,
    HighlightDirective,
    AllplatesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    IvyCarouselModule,
    Ng2SearchPipeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCd5u5gpZZmsYjRJmOEL8B6DuCKL40pE5M',
      libraries: ['places']
    }),
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'rbktn11' } as CloudinaryConfiguration),

  ],
  providers: [SocketioService],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
