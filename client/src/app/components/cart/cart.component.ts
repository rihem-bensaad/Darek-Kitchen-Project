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
  quantity: number = 1

  constructor(public menuService: MenuService, public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getorders()
  }

  getorders() {
    this.total=0
    if (localStorage.getItem('MyObject') === null ) {
        localStorage.setItem('MyObject', '');
    }
    else {
      this.cartItem = localStorage.getItem('MyObject')
      this.cartItem = JSON.parse(this.cartItem)
      for (var i = 0; i < this.cartItem.length; i++){
        this.total +=  this.cartItem[i].price
        console.log(this.total,"total total")
      }
     }
  }


 async deleteItem(key:any) {
   this.cartItem = await localStorage.getItem('MyObject')
   const data = JSON.parse(this.cartItem).filter((e: any) => e.ID_menu !== key)
   localStorage.setItem('MyObject', JSON.stringify(data))
   this.getorders()
  }


  incrementquant(id: string) {
    console.log(id);
  }

  decremntQuant(id:string) {

  }

//   getmenuById(ID_menu: number) {
//       console.log(ID_menu);
//     this.menuService.getmenuById(ID_menu).subscribe((data) => {
//       this.menus = data
//     })
// }

}

