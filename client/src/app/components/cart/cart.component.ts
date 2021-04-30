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
  cartItem : any = []

  constructor(public menuService: MenuService, public ordersService: OrdersService) { }

  ngOnInit(): void {

    this.getorders()
  }


 getorders() {
    const mydata = localStorage.getItem('MyObject')
   this.cartItem = mydata
    JSON.parse(this.cartItem)
    console.log(this.cartItem, 'jjjjjjjj')

  }



//   getmenuById(ID_menu: number) {
//       console.log(ID_menu);
//     this.menuService.getmenuById(ID_menu).subscribe((data) => {
//       this.menus = data
//     })
// }

}

