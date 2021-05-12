import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  urlPic :any

menuForm = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),

  });
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
  }
  //  addMenu() {
  //   this.menuService.postmenu(this.menuForm.value,this.urlPic).subscribe((data:any)=> {
  //     console.log(data)
  //   })
  //  }
  deleteMenu(menu: any) {
    this.menuService.deletemenu(menu.ID_menu).subscribe(() => {
      console.log("deleted");
    })
  }
}