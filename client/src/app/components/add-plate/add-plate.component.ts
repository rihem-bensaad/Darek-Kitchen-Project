import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
  chef_id !: number 
  menus : any = []
  id : any = localStorage.getItem('id');
  constructor(private menuService: MenuService, private router: Router, private http : HttpClient ,   private cloudinary: Cloudinary ) { }

  ngOnInit(): void {
   this.getMenuByChef(this.id)
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
    this.menuService.postmenu(this.menuForm.value,this.urlPic,this.id)
    .subscribe()
      location.reload()
   }

  deleteMenu(menu: any) {
    this.menuService.deletemenu(menu.ID_menu)
    .subscribe() 
     location.reload()
  }
  confirmBox(menu : any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      width:'350px',
      iconColor: '#DEB28F',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor:'#DEB28F',
      background: "black",
      backdrop: "#deb38f93",
      cancelButtonText: 'No, keep it'
    }).then((result) => {      
      if (result.value) {
        this.menuService.deletemenu(menu.ID_menu)
        .subscribe() 
        Swal.fire({
          title:'Deleted!',
          text:'Your Plate has been deleted.',
          icon:'success',
          iconColor: '#DEB28F',
          background: "black",
          confirmButtonColor:'#DEB28F',
          width:'350px',
        })
        // this.getmenu()
        this.getMenuByChef(this.id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title:'Cancelled',
          text:'Your Plate is safe :)',
          icon:'error',
          width:'350px',
          iconColor: '#DEB28F',
          background: "black",
          confirmButtonColor:'#DEB28F',
        })
      }
    })
  }


  // getmenu() {
  //   this.menuService.getmenu().subscribe((data) => {
  //     this.menus = data
  //   })
  // }
 getMenuByChef(id:any){
   this.menuService.getMenuBychef(id).subscribe((data) => {
     this.menus = data
   }) 
 }

}