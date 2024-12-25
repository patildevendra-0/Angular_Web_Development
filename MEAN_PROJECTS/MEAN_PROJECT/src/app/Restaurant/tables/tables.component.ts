import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../../services/database-api.service';
import { UserData } from '../Models/User.model';
import { Router } from '@angular/router';
import { DishData } from '../Models/Dish.model';
import { BookTableData } from '../Models/BookTable.model';
import { NavBarCuroselComponent } from '../nav-bar-curosel/nav-bar-curosel.component';

@Component({
  selector: 'app-tables',
  imports: [NgFor,NavBarCuroselComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {
  users: UserData[] = [];
  Dishes: DishData[] = [];
  bookings: BookTableData[] = [];

  constructor(private service: DatabaseApiService, private router: Router) { }

  ngOnInit(): void {
    this.service.Get_All_Users().subscribe((data: UserData[]) => { this.users = data });
    this.service.Get_All_Dish_().subscribe((data: DishData[]) => { this.Dishes = data });
    this.service.Get_All_Bookings().subscribe((data: BookTableData[]) => { this.bookings = data });
  }

  onEdit(data: any) {

  }

  onDelete(data: any) {
    console.log("----------------------", data);
  }

  Delete_user(id: string) {
    this.service.Delete_user_by_id(id).subscribe(
      (response: any) => {
        console.log(response.message);
        this.users = this.users.filter(user=>user._id !==id);
      },
      (error) => {
        console.error("Error deleting user:", error);
      }
    );
  }

  Delete_booking(id: string) {
    this.service.Delete_booking_by_Id(id).subscribe(
      (response: any) => {
        console.log(response)
        this.Dishes = this.Dishes.filter(dish=>dish._id !==id);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  Delete_Dish(id:string)
  {
    this.service.Delete_Dish_by_Id(id).subscribe(
      (response:any)=>{
        console.log(response);
        this.bookings = this.bookings.filter(booking=>booking._id !==id);
      },
      (error)=>
      {
        console.error(error);
      }
    )
  }

}
