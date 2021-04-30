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
  cartItem : any = this.ordersService.orders

  constructor(public menuService: MenuService, public ordersService: OrdersService) { }

  ngOnInit(): void {

  }


  getorders() {
    var retrievedObject = localStorage.getItem('myObject');
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }



  getmenuById(ID_menu: number) {
      console.log(ID_menu);
    this.menuService.getmenuById(ID_menu).subscribe((data) => {
      this.menus = data
    })
}

}

