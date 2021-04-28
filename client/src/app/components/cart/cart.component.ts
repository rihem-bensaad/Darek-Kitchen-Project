import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   menus: any = [];
   menu = this.menuService.getmenu();

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

}
