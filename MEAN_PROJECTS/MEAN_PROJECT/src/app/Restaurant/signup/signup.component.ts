import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserData } from '../Models/User.model';
import { DatabaseApiService } from '../../services/database-api.service';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,CommonModule,ThankYouComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})



export class SignupComponent {
  backgroundUrl = 'top-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk.jpg'; 
  isPopupVisible: boolean = false;


  Userobj = new UserData();

  constructor(private Db_service: DatabaseApiService) { }


  Signupform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, { validators: this.passwordMatch });


  passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirm_password = control.get('confirmPassword');

    if (password && confirm_password && password.value !== confirm_password.value) {
      return { mismatch: true };
    }
    return null;
  }

  onSubmit() 
  {
    if (this.Signupform.valid) {
      this.Userobj.username = this.Signupform.value.username || '';
      this.Userobj.password = this.Signupform.value.password || '';
      
      console.log(this.Userobj);

      this.Db_service.Create_New_User(this.Userobj).subscribe(
        response => 
        {
          console.log(response);
          this.isPopupVisible = true;
        },
        error => 
        {
          console.log(error);
        }
      );
    }

    setTimeout(() => {
      this.clear_form_feilds();
    }, 3000);
  }

  clear_form_feilds()
  {
      this.Signupform.reset();
  }

}
