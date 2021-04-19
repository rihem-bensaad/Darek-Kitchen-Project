import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service'

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: any = [];

  brandName: string='';
  category: string='';
  logo: string='';

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getbrand().subscribe((data) => {
      this.brands = data
      console.log('data of brands', this.brands);
      })
 }
}
