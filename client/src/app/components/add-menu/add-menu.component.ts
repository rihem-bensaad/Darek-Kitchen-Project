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
menuForm = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl('')
  });
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
  }
   addMenu() {
    this.menuService.postmenu(this.menuForm.value).subscribe((data:any)=> {
      console.log(data)
    })
  }
}
