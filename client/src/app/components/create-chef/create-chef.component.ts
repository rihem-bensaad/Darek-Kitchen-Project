import { ChefService } from '../../services/chef.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Component, OnInit, Input , NgZone } from '@angular/core';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {
  @Input()
  responses!: Array<any>;

  private hasBaseDropZoneOver: boolean = false;
  public uploader !: FileUploader ;
  private title!: string;
  chefs: any = [];
  selectedFile : any = null;
  base64textString : any
  urlPic : any 

  signupForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    imageCardId: new FormControl('',[Validators.required])
  });

  constructor(private ChefService: ChefService, private http : HttpClient ,   private cloudinary: Cloudinary,private zone: NgZone  ) { }
  filterTerm!: string;
  
ngOnInit(): void {
    this.getChefs()
    this.addChef()

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

  addChef() {

    this.ChefService.postFrom(this.signupForm.value,this.urlPic)
      .subscribe(() => {
        location.reload()
      })
  }

  getChefs() {
    this.ChefService.getChef().subscribe((data) => {
      this.chefs = data
    })
  }
  
  deleteChef(chef:any){
    this.ChefService.deleteChef(chef.ID)
    .subscribe()
    location.reload()
    }


    confirmBox(chef : any){
      Swal.fire({
        title: 'Are you sure want to remove?',
        text: 'You will not be able to recover this file!',
        width:'350px',
        iconColor: '#DEB28F',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor:'#DEB28F',
        background:"black",
        backdrop: "#deb38f93",
        cancelButtonText: 'No, keep it'
      }).then((result) => {      
        if (result.value) {
          this.ChefService.deleteChef(chef.ID)
          .subscribe() 
          Swal.fire({
            title:'Deleted!',
            text:'This Chef has been deleted.',
            icon:'success',
            iconColor: '#DEB28F',
            background:"black",
            confirmButtonColor:'#DEB28F',
            width:'350px',
          })
          this.getChefs()
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title:'Cancelled',
            text:'This Chef is safe :)',
            icon:'error',
            width:'350px',
            background:"black",
            iconColor: '#DEB28F',
            confirmButtonColor:'#DEB28F',
          })
        }
      })
    }
}