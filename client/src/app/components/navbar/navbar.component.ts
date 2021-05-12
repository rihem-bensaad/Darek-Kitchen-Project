import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BrandService } from '../../services/brand.service';
import { OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-navbar',
  changeDetection : ChangeDetectionStrategy.Default ,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole: any;
  // totalOrders: number = 0


  constructor(private router: Router, private brandService: BrandService,
    // private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.role()
    },100)
  }
  DecodeToken(token: string): any {
      return jwt_decode(token);
    }

  logout() {
    localStorage.removeItem('MyObject')
    localStorage.clear();
    this.userRole = undefined;
    this.router.navigate(['']);
  }
  
role(){
  const dataUser = (JSON.parse(localStorage.data).token)
  if(this.DecodeToken(dataUser)['role']==='user'){
    this.userRole='user'
  }else if(this.DecodeToken(dataUser)['role']==='admin'){
    this.userRole = 'admin'
  }else if(this.DecodeToken(dataUser)['role']==='chef'){
   this.userRole = 'chef'
}else if(this.DecodeToken(dataUser)['role']===undefined){
  this.userRole = undefined
}

  }
}