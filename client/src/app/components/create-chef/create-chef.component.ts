import { Component, OnInit } from '@angular/core';
import { ChefService } from '../../services/chef.service';


@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {
  chefs: any = [];
  constructor(private ChefService: ChefService) { }

  ngOnInit(): void {
    this.getChefs()
  }
  getChefs() {
    this.ChefService.getChef().subscribe((data) => {
      this.chefs = data
    })
  }
}