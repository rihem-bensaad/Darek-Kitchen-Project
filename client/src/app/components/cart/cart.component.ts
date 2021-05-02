import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  menus: any = [];
  menu = this.menuService.getmenu();
  cartItem: any = []
  total: number = 0

  constructor(public menuService: MenuService, public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getorders()
    console.log(this.cartItem,'cart itemmmmmmmmmmmm');
  }
  getorders() {
    if (localStorage.getItem('MyObject') === null ) {
        localStorage.setItem('MyObject', '');
    }
    else {
      this.cartItem = localStorage.getItem('MyObject')
      // this.total = localStorage.getItem('MyObject')
      this.cartItem = JSON.parse(this.cartItem)
      // this.total = JSON.parse(this.total)
     }
  }

  getTotal(price: number) {
    return this.total += price
  }
  deleteItem(ele: any) {
    localStorage.removeItem(ele)
  }

//   getmenuById(ID_menu: number) {
//       console.log(ID_menu);
//     this.menuService.getmenuById(ID_menu).subscribe((data) => {
//       this.menus = data
//     })
// }

}

