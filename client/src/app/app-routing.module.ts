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

const routes: Routes = [
{path:'',component:HomePageComponent},
{ path: 'Brands', component: BrandsComponent },
{path:'login',component:UserLoginComponent},
{path:'About',component:AboutComponent},
{path:'Contact',component:ContactComponent},
{path:'ChefSignup',component:ChefSignupComponent},
{path:'UserSignup',component:UserSignupComponent},
{path:'Service',component:ServiceInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
