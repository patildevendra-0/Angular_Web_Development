import { Component } from '@angular/core';
import { NavBarCuroselComponent } from "../nav-bar-curosel/nav-bar-curosel.component";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactData } from '../Models/Contact.model';
import { DatabaseApiService } from '../../services/database-api.service';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-contactus',
  imports: [NavBarCuroselComponent, CommonModule, ReactiveFormsModule,ThankYouComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  backgroundUrl = 'telephone-laptop-flat-lay-with-workspace-yellow-background.webp';
  isPopupVisible:boolean = false;
  Contact_obj = new ContactData();

  constructor(private DB_service: DatabaseApiService) { }

  ContactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })

  Contact_form_submit() {
    if (this.ContactForm.valid) {
      this.Contact_obj.name = this.ContactForm.value.fullName || '';
      this.Contact_obj.email = this.ContactForm.value.email || '';
      this.Contact_obj.subject = this.ContactForm.value.subject || '';
      this.Contact_obj.message = this.ContactForm.value.message || '';

      this.DB_service.Contact_us_entry(this.Contact_obj).subscribe(
        response => {
          console.log(response);
          this.isPopupVisible = true;
        },
        error => {
          console.log(error);
        }
      )

      setTimeout(()=>{
        this.clear_form_feilds();
      },3000);

    }
  }

  clear_form_feilds()
  {
    this.ContactForm.reset();
  }


}
