import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any = [];
  brandCategory: string = "";

  brands: any = [];
  brandForm = new FormGroup({
    ID_brands : new FormControl(''),
    brandName: new FormControl(''),
    category: new FormControl(''),
    logo: new FormControl('')
   });

  values: any = {};
  showMyContainer: boolean = false;

  constructor(private brandService: BrandService, private adminService: AdminService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getBrands()
    this.getusers()
  }

  getBrands() {
    this.brandService.getbrand().subscribe((data) => {
      this.brands = data
      console.log('get from dashboard', this.brands);
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
  }

  getvalues(data: any) {
    this.brandForm.setValue(data)
  }

   getusers() {
    this.userService.getUser().subscribe((data) => {
      this.users = data
    })
  }
   deleteUser(brand: any) {
    this.adminService.DeleteUser(brand.ID_user).subscribe(() => {
      this.getusers()
    })
    console.log("deleted");
  }
}
