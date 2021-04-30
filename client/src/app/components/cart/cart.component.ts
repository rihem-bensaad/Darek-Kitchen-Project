import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  menus: any = [];
  total: number = 0;
  menu = this.menuService.getmenu();
  cartItem = []

  constructor(public menuService: MenuService ) { }

  ngOnInit(): void {
    this.Cartetails()

  }

  getmenuById(ID_menu: number) {
      console.log(ID_menu);

    this.menuService.getmenuById(ID_menu).subscribe((data) => {
      this.menus = data
    })
    }

//  calcTotal(items) {
//     let total = 0;
//     items.forEach((item) => {
//         total += (item.price * item.quantity);
//     });
//    this.total = total;
//   }
getCartDetails:any=[]

  Cartetails() {
    if (localStorage.getItem('localCart')) {
      // this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      console.log(this.getCartDetails);

    }

    }


}

