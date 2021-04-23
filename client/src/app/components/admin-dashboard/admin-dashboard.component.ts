import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  brands: any = [];
  brandForm = new FormGroup({
    ID_brands : new FormControl(''),
    brandName: new FormControl(''),
    category: new FormControl(''),
    logo: new FormControl('')
   });

  values: any = {};


  constructor(private brandService: BrandService, private adminService: AdminService, private router: Router) { }

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

  updateBrand() {
    console.log("myId", this.brandForm);

    this.adminService.UpdateBrand(this.brandForm.value.ID_brands, this.brandForm.value)

      .subscribe(() => {
        location.reload()
      })
    console.log("updated");
  }
  getvalues(data: any) {
    console.log("data new" , data);
    this.brandForm.setValue(data)
}
}
