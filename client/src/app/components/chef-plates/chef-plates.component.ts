import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-chef-plates',
  templateUrl: './chef-plates.component.html',
  styleUrls: ['./chef-plates.component.css']
})
export class ChefPlatesComponent implements OnInit {
  menus : any = []
  constructor(private menuService: MenuService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getmenu()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }
addToCart(product:string) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
