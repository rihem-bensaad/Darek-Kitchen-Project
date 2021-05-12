import { Component, OnInit } from '@angular/core';
import { ChefService} from '../../services/chef.service'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})


export class ManagementComponent implements OnInit {
  chefs: any = []
  constructor(private chefService: ChefService) { }

  ngOnInit(): void {
    this.getchef()
  }


  getchef() {
    this.chefService.getChef().subscribe((data) => {
      this.chefs = data
    })
  }

}