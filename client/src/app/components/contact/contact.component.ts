import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),

  });
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    console.log('llllllll',this.contactForm.value);
    this.contactService.addContact(this.contactForm.value)
    .subscribe((data: any) =>{ console.log(data)})
    // location.reload()
  }
  alertWithSuccess(){  
    console.log('******',this.contactForm.value);

    if(this.contactForm.value.email.length === 0 || this.contactForm.value.message.length === 0 || this.contactForm.value.subject.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the form !'
      })
    } else{ 
      this.handleSubmit()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.contactForm.setValue({email: '', subject: '', message: ''})
  }
    

  }
}
