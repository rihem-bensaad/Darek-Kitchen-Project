import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
    brands: any = [];

  brandName: string='';

  constructor(private brandService: BrandService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getBrands()

  }
    getBrands() {
    this.brandService.getbrand().subscribe((data) => {
      this.brands = data
      console.log('data of brands', this.brands);
      })
  }
    deleteBrand(brand: any) {
      this.adminService.DeleteBrand(brand.ID_brands).subscribe(() => {
        this.getBrands()
      })
      console.log("deleted");
    }
    updateBrand(brand: any) {
      this.adminService.UpdateBrand(brand.ID_brands).subscribe(() => {
        this.getBrands()
      })
      console.log("updated");
    }

}
