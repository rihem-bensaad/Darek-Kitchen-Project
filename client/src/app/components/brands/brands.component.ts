import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  name: string;
  category: string;
  logo: string;

  constructor() { }

  ngOnInit(): void {
  }

    getBrands() {

 }
}
