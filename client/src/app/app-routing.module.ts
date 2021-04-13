import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BrandsComponent} from './components/brands/brands.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'Brands',component:BrandsComponent},
{path:'About',component:AboutComponent},
{path:'Contact',component:ContactComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
