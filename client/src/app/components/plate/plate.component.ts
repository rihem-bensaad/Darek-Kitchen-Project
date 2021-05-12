import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { ChefService } from '../../services/chef.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  chefs: any = [];
  menus: any = [];
  id : any = localStorage.getItem('id');
 menuForm = new FormGroup({
    ID_menu : new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    image: new FormControl(''),
   });

  constructor(private menuService: MenuService , private ChefService: ChefService ) { }
  values: any = {};
  filterTerm!: string;
  
  ngOnInit(): void {
    // this.getmenu()
    this.getMenuByChef(this.id)
  }

  // getmenu() {
  //   this.menuService.getmenu().subscribe((data) => {
  //     this.menus = data
  //   })
  // }
updateMenu() {
  this.menuService.updateMenu(this.menuForm.value.ID_menu, this.menuForm.value)
  .subscribe()
  Swal.fire({
    title:'Updated!',
    text:'Your Plate has been updated.',
    icon:'success',
    iconColor: '#DEB28F',
    background: "black",
    confirmButtonColor:'#DEB28F',
    width:'350px',
  })
  setTimeout(() => {
    location.reload()
  }, 1500);
  this.getMenuByChef(this.id)
}

getMenuByChef(id:any){
  this.menuService.getMenuBychef(id).subscribe((data) => {
    this.menus = data
  }) 
}

getvalues(data: any) {
  this.menuForm.setValue(data)
}

}