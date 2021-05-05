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
  total: number = 1
  quantity: number = 1
  range : any = []
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
        let arr = []
        for (let j = 1; j <= this.cartItem[i].quantity; j++){
          arr.push(j)
          this.cartItem[i]['total']=this.cartItem[i].price
        }
        this.cartItem[i].quantity = arr
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


//   getmenuById(ID_menu: number) {
//       console.log(ID_menu);
//     this.menuService.getmenuById(ID_menu).subscribe((data) => {
//       this.menus = data
//     })
// }

  getQuantity(quantity: any, item: any) {
    this.cartItem.map((itemm: any) => {
      if (itemm.title == item.title) {
        itemm.total = Number(quantity.value) * Number(item.price)
        return itemm
      } else {
        return itemm
      }
    })
    this.total = this.cartItem.reduce((accumulator: any, element: any) =>
      (accumulator + element.total), 0
    )

}
}

