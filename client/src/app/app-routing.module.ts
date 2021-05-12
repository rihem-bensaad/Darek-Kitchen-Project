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
import {CreateChefComponent } from './components/create-chef/create-chef.component';
import {BrandsAdminComponent } from './components/brands-admin/brands-admin.component'
import { LoggedHomeComponent } from './components/logged-home/logged-home.component';
import { ManagementComponent } from './components/management/management.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddPlateComponent } from './components/add-plate/add-plate.component';
import { PlateComponent } from './components/plate/plate.component';
import { ChefPlatesComponent } from './components/chef-plates/chef-plates.component';
import { CartComponent } from './components/cart/cart.component';
import { GuardGuard } from './guard/guard.guard';
import { AllplatesComponent } from './components/allplates/allplates.component';



const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'brands', component: BrandsComponent },
{path:'login',component:UserLoginComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'userSignup',component:UserSignupComponent},
{ path: 'addBrand', component: AddBrandComponent },
{ path: 'dashboard', component: AdminDashboardComponent, canActivate: [GuardGuard] },
{path: 'menu', component: MenuComponent},
{path:'getusers', component : GetUserComponent},
{path:'getbrands',component: BrandsAdminComponent},
{path:'createchef',component: CreateChefComponent},
{path:'welcome',component:LoggedHomeComponent},
{path:'manage',component: ManagementComponent},
{path:'order',component : OrdersComponent},
{path:'addplate',component:AddPlateComponent},
{path:'plate',component:PlateComponent},
{path:'chefplates',component:ChefPlatesComponent},
{ path: 'cart', component: CartComponent },
{ path: '', pathMatch: 'full', redirectTo: '/login' },
{ path:'**', redirectTo:'/login'},

{path: 'cart', component: CartComponent },
{path: 'plates', component:AllplatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
