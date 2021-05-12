import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-allplates',
  templateUrl: './allplates.component.html',
  styleUrls: ['./allplates.component.css']
})
export class AllplatesComponent implements OnInit {
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

}