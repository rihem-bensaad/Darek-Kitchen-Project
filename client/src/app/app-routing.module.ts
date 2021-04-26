import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BrandsComponent} from './components/brands/brands.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { MenuComponent } from './components/menu/menu.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import {BrandsAdminComponent } from './components/brands-admin/brands-admin.component'



const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'brands', component: BrandsComponent },
{path:'login',component:UserLoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'userSignup',component:UserSignupComponent},
{ path: 'addBrand', component: AddBrandComponent },
{ path: 'dashboard', component: AdminDashboardComponent },
{path: 'menu', component: MenuComponent},
{path:'getusers', component : GetUserComponent},
{path:'getbrands',component: BrandsAdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
