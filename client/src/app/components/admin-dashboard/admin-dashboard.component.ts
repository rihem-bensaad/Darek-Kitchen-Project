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
  category: string='';
  logo: string = '';
  ID_brands: Number = 0;

  constructor(private brandService: BrandService, private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
    this.getBrands()
  }

  // editBrand(this.brandName, this.category, this.logo) {
  //   this.brandName = brandName;
  //   this.category = category;
  //   this.logo = logo;

  // }
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

  updateBrand() {
    this.adminService.UpdateBrand(this.ID_brands, this.brandName, this.category, this.logo)
      .subscribe(() => {
        this.router.navigate([''])
      })
      console.log("updated");
    }
}
