import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{

  backgroundUrl = 'loginpage_background.webp'; 

  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })
  constructor(private router:Router){}

  OnSubmit_Login_Form()
  {
    if(this.loginForm.valid)
    {
      this.Validate_Credentials();
    }
    else
    {
      console.log("Form is in valide ")
    }
  }

  Validate_Credentials()
  {
    const { username, password } = this.loginForm.value;

    console.log("USERANME :",username , "PASSWORD : ",password);

    const DB_username = 'admin';
    const DB_Password = 'admin';

    if (username === DB_username && password === DB_Password) {
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid credentials');
    }
  }

  onClick()
  {
      this.router.navigate(["/signup"]);
  }

}
