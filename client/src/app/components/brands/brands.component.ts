import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { MenuService } from '../../services/menu.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  menu: any = [];
  brands: any = [];

 brandCategory: string = "";
  brandName: string='';
  category: string='';
  logo: string='';

  constructor(public brandService: BrandService, private menuService: MenuService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getbrand().subscribe((data) => {
      this.brands = data
      console.log('brands component loaded', this.brands);
      })
  }

//   getBrandId(ID_brands: number) {
//     this.menuService.getMenuByBrandId(ID_brands).subscribe((data) => {
//       this.menuService.menu = data
//       console.log(this.menuService.menu, " data id brand");
//       this.router.navigate(['/menu'])
//     })
//   }

}