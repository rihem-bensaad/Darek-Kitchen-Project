import { ChefService } from '../../services/chef.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Component, OnInit, Input , NgZone } from '@angular/core';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';


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

  constructor(private ChefService: ChefService, private http : HttpClient ,   private cloudinary: Cloudinary,private zone: NgZone , ) { }
  filterTerm!: string;
  
ngOnInit(): void {
    this.getChefs()
    this.addChef()
    // const uploaderOptions: FileUploaderOptions = {
    //   url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
    //   // Upload files automatically upon addition to upload queue
    //   autoUpload: true,
    //   // Use xhrTransport in favor of iframeTransport
    //   isHTML5: true,
    //   // Calculate progress independently for each uploaded file
    //   removeAfterUpload: true,
    //   // XHR request headers
    //   headers: [
    //     {
    //       name: 'X-Requested-With',
    //       value: 'XMLHttpRequest'
    //     }
    //   ]
    // };



    // this.uploader = new FileUploader(uploaderOptions);

    // this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    //   // Add Cloudinary unsigned upload preset to the upload form
    //   form.append('upload_preset', this.cloudinary.config().upload_preset);

    //   // Add file to upload
    //   form.append('file', fileItem);

    //   // Use default "withCredentials" value for CORS requests
    //   fileItem.withCredentials = false;
    //   return { fileItem, form };
    // };
  }
    // onFileSelected(event : any){
    //   console.log(event);
    //   this.selectedFile = <File>event.target.files[0] 
    // }
    // onUpload(){
    //   const fd = new FormData();
    //   fd.append('image', this.selectedFile, this.selectedFile.name);
    //   this.http.post('/', fd)
    //   .subscribe(res => {
    //     console.log(res);
        
    //   })
    // }
    

  
     deleteChef(chef:any){
      this.ChefService.deleteChef(chef.ID)
      .subscribe()
      location.reload()
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
  
}
