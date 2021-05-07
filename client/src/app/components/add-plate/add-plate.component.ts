import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-plate',
  templateUrl: './add-plate.component.html',
  styleUrls: ['./add-plate.component.css']
})


export class AddPlateComponent implements OnInit {
  base64textString : any
  urlPic !: any 
  menuForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });
 
  menus : any = []
  constructor(private menuService: MenuService, private router: Router, private http : HttpClient ,   private cloudinary: Cloudinary ) { }

  ngOnInit(): void {
    this.getmenu()
   
  }
  _handleReaderLoaded(readerEvt:any) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           
           var url ='https://api.cloudinary.com/v1_1/dm1xlu8ce/image/upload'
var data = {
file: 'data:image/jpeg;base64,' + btoa(binaryString) ,
upload_preset: 'kgiezron'
}
this.http.post<any>(url,data)
.subscribe((result) => {

this.urlPic= result.url  
})
   }
cloudy(link:any){
var files = link.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
}

}

   addMenu() {
    this.menuService.postmenu(this.menuForm.value,this.urlPic)
    .subscribe()
    
      location.reload()
   }

  deleteMenu(menu: any) {
    this.menuService.deletemenu(menu.ID_menu)
    .subscribe() 
     location.reload()
  }

  getmenu() {
    this.menuService.getmenu().subscribe((data) => {
      this.menus = data
    })
  }
 

}