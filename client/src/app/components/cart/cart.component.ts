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
  total: any = 1
  quantity: number = 1
  range : any = []
  array: any = []
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
          this.cartItem[i]['total'] = this.cartItem[i].price
          if (!this.cartItem[i]['qty']) {
            this.cartItem[i]['qty'] = 1;
          }
        }
        if (this.cartItem[i].quantity instanceof Array  ) {

        } else {
          this.cartItem[i].quantity = arr
        }
        this.total +=  this.cartItem[i].price
      }
      localStorage.setItem('MyObject', JSON.stringify(this.cartItem))
      this.total = localStorage.getItem('total')
      this.total = Number( JSON.parse(this.total))
    }
  }


 async deleteItem(key:any) {
   if (localStorage.getItem('MyObject')!==null) {
    this.cartItem = await localStorage.getItem('MyObject')
    const data = JSON.parse(this.cartItem).filter((e: any) => e.ID_menu !== key)
    localStorage.setItem('MyObject', JSON.stringify(data))
    this.getorders()
   }else if (localStorage.getItem('MyObject')===this.array) {
    localStorage.removeItem('MyObject')
   } 
  }



  getQuantity(quantity: any, item: any) {
    localStorage.setItem('Quantity', JSON.stringify(item.total))
    this.quantity=1
    this.cartItem = this.cartItem.map((itemm: any) => {
      if (itemm.title == item.title) {
        itemm.total = Number(quantity.value) * Number(item.price)
        itemm.qty = quantity.value
        const qq = [quantity.value]
        itemm.quantity.forEach((e: any) => {
          if (e == quantity.value) {

          } else {
            qq.push(e)
          }
        })
        item.quantity = qq;
        return itemm
      } else {
        return itemm
      }
    })
    this.total = this.cartItem.reduce((accumulator: any, element: any) => (accumulator + element.total), 0)
    localStorage.setItem('MyObject', JSON.stringify(this.cartItem))
    localStorage.setItem('total',JSON.stringify(this.total))
  }
}