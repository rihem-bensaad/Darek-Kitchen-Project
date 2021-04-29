import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ChefService} from '../../services/chef.service';

@Component({
  selector: 'app-chef-plates',
  templateUrl: './chef-plates.component.html',
  styleUrls: ['./chef-plates.component.css']
})
export class ChefPlatesComponent implements OnInit {
  menus : any = []
  filterTerm!: string;
  constructor(private menuService: MenuService , private chefService : ChefService) { }

  ngOnInit(): void {
    this.getmenu()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }


}
