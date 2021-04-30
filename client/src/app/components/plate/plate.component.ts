import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { ChefService } from '../../services/chef.service';


@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  chefs: any = [];
  menus: any = [];
 menuForm = new FormGroup({
    ID_menu : new FormControl(''),
    title: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    location: new FormControl('')
   });

  constructor(private menuService: MenuService , private ChefService: ChefService) { }
  filterTerm!: string;
  ngOnInit(): void {
    this.getmenu()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }
updateMenu() {
  this.menuService.updateMenu(this.menuForm.value.ID_brands, this.menuForm.value)
  
  .subscribe(()=> {
    location.reload()
  })
}


}

