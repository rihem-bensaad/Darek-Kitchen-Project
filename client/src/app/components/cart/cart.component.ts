import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  menus: any = [];
  cartTotal = 0;
  menu = this.menuService.getmenu();
  cartItem = []

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getmenu();

  }
    getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
    }

}
