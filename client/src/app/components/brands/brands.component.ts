import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';



@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: any = [];
 brandCategory: string = "";
  brandName: string='';
  category: string='';
  logo: string='';

  constructor(public brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getbrand().subscribe((data) => {
      this.brands = data
      console.log('brands component loaded', this.brands);
      })
  }

}
