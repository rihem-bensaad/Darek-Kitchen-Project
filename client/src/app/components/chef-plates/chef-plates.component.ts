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
  cartItem:any = []
  // menus : any = []
  filterTerm!: string;
  constructor(private menuService: MenuService , private msg: CartService, private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getmenu()
       this.msg.getMsg().subscribe((data) => {
        this.menus = data
    })
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }

  addToCart(mymenu: any) {
    var exist = true;
    this.ordersService.orders.forEach((order) => {
      console.log(order, "order");
      if (mymenu.ID_menu == order.ID_menu) {
        exist = false
      }
    })
    if (exist) {
      this.ordersService.orders.push(mymenu)
    }
    console.log(this.ordersService.orders);
  }


//  getBrandId(ID_brands: number) {
//     this.menuService.getMenuByBrandId(ID_brands).subscribe((data) => {
//       this.menuService.menu = data
//       console.log(this.menuService.menu, " data id brand");
//       this.router.navigate(['/menu'])
//     })
//   }





  // add2cart(type: string, plate: string) {
  //   if (type === 'plus') {
  //     this.cart.menu.push(plate);
  //     this.cart.cart = this.cartService.cart+1
  //   }
  //   }



}
