import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-chef-plates',
  templateUrl: './chef-plates.component.html',
  styleUrls: ['./chef-plates.component.css']
})
export class ChefPlatesComponent implements OnInit {
   btn : any = document.querySelector('input');
   txt : any = document.querySelector('p');
  menus: any
  cartItem:any = []
  filterTerm!: string;
  total: number = 0;
  quantity: number = 0;
  constructor(private menuService: MenuService , public ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getmenu()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }

  addToCart(mymenu: any) {

    this.btn.addEventListener('click', this.addToCart);

    if (localStorage.getItem('MyObject') === null) {
      this.ordersService.orders.push(mymenu)
      this.ordersService.totalPrice = this.ordersService.totalPrice + mymenu.price
      localStorage.setItem('MyObject', JSON.stringify(this.ordersService.orders));
    } else {
      var notexist = true;
      var data = localStorage.getItem('MyObject');
      JSON.parse(data || '{}').forEach((order:any) => {
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
    if (this.btn.value === 'Démarrer la machine') {
      this.btn.value = 'Arrêter la machine';
      this.txt.textContent = 'La machine est démarrée !';
    } else {
      this.btn.value = 'Démarrer la machine';
      this.txt.textContent = 'La machine est arrêtée.';
    }
  }

  //  getBrandId(ID_brands: number) {
    //     this.menuService.getMenuByBrandId(ID_brands).subscribe((data) => {
      //       this.menuService.menu = data
      //       console.log(this.menuService.menu, " data id brand");
//       this.router.navigate(['/menu'])
//     })
//   }
}
