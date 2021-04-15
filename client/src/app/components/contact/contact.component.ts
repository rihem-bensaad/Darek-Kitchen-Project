import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ContactService} from '../../services/contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),

  });
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    console.log(this.contactForm.value);
    this.contactService.addContact(this.contactForm.value)
    .subscribe((data: any) =>{ console.log(data)})
    location.reload()
  }
}
