import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BrandsComponent} from './components/brands/brands.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
// import { AuthGuard } from './components/auth.guard';
// import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';

// import { AuthGuard } from './components/auth.guard';
// import { 
//   AuthGuardService as AuthGuard 
// } from './components/auth-guard.service'
// import { RoleGuardService as RoleGuard } from './components/role-guard.service'



const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'brands', component: BrandsComponent },
{path:'login',component:UserLoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
// {path:'user',component:UserNavbarComponent },
{path:'userSignup',component:UserSignupComponent},
{path: 'dashboard', component: AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
