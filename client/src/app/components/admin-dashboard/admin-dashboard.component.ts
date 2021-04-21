import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
    brands: any = [];

  brandName: string='';

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
