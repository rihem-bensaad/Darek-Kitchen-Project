import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { AdminService } from '../../services/admin.service';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands-admin',
  templateUrl: './brands-admin.component.html',
  styleUrls: ['./brands-admin.component.css']
})
export class BrandsAdminComponent implements OnInit {
  total : number = 0;
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
  confirmBox(menu : any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      width:'350px',
      iconColor: '#DEB28F',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor:'#DEB28F',
      background:"black",
      backdrop: "#deb38f93",
      cancelButtonText: 'No, keep it'
    }).then((result) => {      
      if (result.value) {
        this.menuService.deletemenu(menu.ID_menu)
        .subscribe() 
        Swal.fire({
          title:'Deleted!',
          text:'This Plate has been deleted.',
          icon:'success',
          iconColor: '#DEB28F',
          background:"black",
          confirmButtonColor:'#DEB28F',
          width:'350px',
        })
        location.reload()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title:'Cancelled',
          text:'This Plate is safe :)',
          icon:'error',
          width:'350px',
          iconColor: '#DEB28F',
          background:"black",
          confirmButtonColor:'#DEB28F',
        })
      }
    })
  }
  getvalues(data: any) {
    this.brandForm.setValue(data)
  }
}