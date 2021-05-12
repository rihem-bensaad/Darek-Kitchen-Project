import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: any = [];
  menubrand: string = '';
  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  console.log(this.menuService.menu, "menus from service");
    this.getMenus()
  }


getMenus() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
      console.log('data of menus', this.menus);
    })
  }
}