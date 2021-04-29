import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { AdminService } from '../../services/admin.service';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';


@Component({
  selector: 'app-brands-admin',
  templateUrl: './brands-admin.component.html',
  styleUrls: ['./brands-admin.component.css']
})
export class BrandsAdminComponent implements OnInit {

  menus: any = [];
  brands: any = [];
  brandCategory: string = "";

  brandForm = new FormGroup({
    ID_brands : new FormControl(''),
    brandName: new FormControl(''),
    category: new FormControl(''),
    logo: new FormControl('')
   });

  values: any = {};
  
  constructor(private brandService: BrandService, private adminService: AdminService,
    private router: Router,private menuService: MenuService) { }
    filterTerm!: string;
  ngOnInit(): void {
    this.getmenu()

  }

  getBrands() {
    this.brandService.getbrand().subscribe((data) => {
      this.brands = data
      console.log('admin brands', this.brands);
    })
  }

  deleteBrand(brand: any) {
    this.adminService.DeleteBrand(brand.ID_brands)
    .subscribe()
      location.reload()
    console.log("deleted");
  }

  updateBrand() {
    console.log("myId", this.brandForm);

    this.adminService.UpdateBrand(this.brandForm.value.ID_brands, this.brandForm.value)

      .subscribe(() => {
        location.reload()
      })
  }
  

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }
  deleteMenu(menu: any) {
    this.menuService.deletemenu(menu.ID_menu)
    .subscribe() 
     location.reload()
  }
  getvalues(data: any) {
    this.brandForm.setValue(data)
  }
}
