import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-curosel',
  imports: [],
  templateUrl: './nav-bar-curosel.component.html',
  styleUrl: './nav-bar-curosel.component.css'
})
export class NavBarCuroselComponent 
{

  constructor(private router:Router) {}

  contact_click()
  {
      this.router.navigate(["/contact"])
  }

  book_table_click()
  {
    this.router.navigate(["/booktable"])
  }

  add_dish_click()
  {
    this.router.navigate(["/adddish"])
  }

  admin_click()
  {
    this.router.navigate(["/tables"])
  }

}
