import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-plate',
  templateUrl: './add-plate.component.html',
  styleUrls: ['./add-plate.component.css']
})


export class AddPlateComponent implements OnInit {
  menuForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl('')
  });

  menus : any = []
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.getmenu()
   
  }
   addMenu() {
    this.menuService.postmenu(this.menuForm.value)
    .subscribe()
      location.reload()
   }

  deleteMenu(menu: any) {
    this.menuService.deletemenu(menu.ID_menu)
    .subscribe() 
     location.reload()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }


}