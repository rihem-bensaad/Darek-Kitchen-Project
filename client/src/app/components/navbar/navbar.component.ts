import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  changeDetection : ChangeDetectionStrategy.Default ,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole : any 
 

  constructor(private router: Router) { }
 
  ngOnInit(): void {
setInterval(()=>{
  this.role()
},1000)
  }
  DecodeToken(token: string): any {
      return jwt_decode(token);    
    }

  logout() {
    localStorage.clear();
    this.userRole = undefined;
    this.router.navigate(['']);
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
