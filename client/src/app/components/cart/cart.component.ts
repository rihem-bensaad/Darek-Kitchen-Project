import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';

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

  constructor(private menuService: MenuService , private msg: CartService) { }

  ngOnInit(): void {
    this.getmenu();

    this.msg.getMsg().subscribe(menu => {
      console.log(menu);
    })

  }
    getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
    }

}
