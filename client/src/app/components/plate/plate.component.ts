import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ChefService } from '../../services/chef.service';


@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  chefs: any = [];
  menus: any = [];

  constructor(private menuService: MenuService , private ChefService: ChefService) { }
  filterTerm!: string;
  ngOnInit(): void {
    this.getmenu()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }
}

