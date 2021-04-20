import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BrandsComponent} from './components/brands/brands.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { ChefSignupComponent } from './components/chef-signup/chef-signup.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'brands', component: BrandsComponent },
{path:'login',component:UserLoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'chefSignup',component:ChefSignupComponent},
{path:'userSignup',component:UserSignupComponent},
{path: 'service', component: ServiceInfoComponent},
{path: 'admin', component: AdminSignupComponent},
{path: 'dashboard', component: AdminDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
