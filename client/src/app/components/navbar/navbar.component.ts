import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BrandService} from '../../services/brand.service'

@Component({
  selector: 'app-navbar',
  changeDetection : ChangeDetectionStrategy.Default ,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole : any


  constructor(private router: Router , private brandService: BrandService) { }

  ngOnInit(): void {
setInterval(()=>{
  this.role()
},300)
  }
  DecodeToken(token: string): any {
      return jwt_decode(token);
    }

  logout() {
    localStorage.clear();
    this.userRole = undefined;
    this.router.navigate(['']);
  }
  selectBrand($event:Event) {
    console.log(($event.target as Element).id)
    this.brandService.brandCategory = ($event.target as Element).id
    this.router.navigate(['/brands'])


}
role(){
  const dataUser = (JSON.parse(localStorage.data).token)
       console.log(dataUser)
  if(this.DecodeToken(dataUser)['role']==='user'){
    this.userRole='user'
  }else if(this.DecodeToken(dataUser)['role']==='admin'){
    this.userRole = 'admin'
  }else if(this.DecodeToken(dataUser)['role']===undefined){
   this.userRole = undefined
}

  }

}
