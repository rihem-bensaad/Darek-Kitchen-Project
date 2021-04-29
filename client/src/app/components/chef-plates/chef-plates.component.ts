import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-chef-plates',
  templateUrl: './chef-plates.component.html',
  styleUrls: ['./chef-plates.component.css']
})
export class ChefPlatesComponent implements OnInit {
  menus: any
  cartItem:any = []
  constructor(private menuService: MenuService, private cartService: CartService, private msg: CartService) { }

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

  addToCart() {
    this.cartService.addToCart(this.menus.ID_menu);
    console.log(this.menus);
    console.log(this.menus.ID_menu);


  window.alert('Your plate has been added to the cart!');
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
