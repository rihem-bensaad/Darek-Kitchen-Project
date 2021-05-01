import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-chef-plates',
  templateUrl: './chef-plates.component.html',
  styleUrls: ['./chef-plates.component.css']
})
export class ChefPlatesComponent implements OnInit {
  menus: any
  total : number = 0;
  cartItem:any = []
  filterTerm!: string;
  data : any = this.ordersService.orders
  constructor(private menuService: MenuService , private msg: CartService, public ordersService:OrdersService) { }

  ngOnInit(): void {
    
    this.getmenu()
    //    this.msg.getMsg().subscribe((data) => {
    //     this.menus = data
    // })
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }

  addToCart(mymenu: any) {

    if (localStorage.getItem('MyObject') === null) {
      this.ordersService.orders.push(mymenu)
      this.ordersService.totalPrice = this.ordersService.totalPrice + mymenu.price
      localStorage.setItem('MyObject', JSON.stringify(this.ordersService.orders));
    } else {
      var notexist = true;
      var data = localStorage.getItem('MyObject')
    JSON.parse(data || '{}').forEach((order:any) => {
      console.log(order, "order");
      if (mymenu.ID_menu == order.ID_menu) {
        notexist = false
      }
    })
      if (notexist) {
        this.ordersService.orders = JSON.parse(data || '{}')
        this.ordersService.orders.push(mymenu)
        this.ordersService.totalPrice = this.ordersService.totalPrice + mymenu.price
        localStorage.setItem('MyObject', JSON.stringify(this.ordersService.orders));
      }
    }
    console.log(localStorage,'localStorage');
  }



//  getBrandId(ID_brands: number) {
//     this.menuService.getMenuByBrandId(ID_brands).subscribe((data) => {
//       this.menuService.menu = data
//       console.log(this.menuService.menu, " data id brand");
//       this.router.navigate(['/menu'])
//     })
//   }
}
