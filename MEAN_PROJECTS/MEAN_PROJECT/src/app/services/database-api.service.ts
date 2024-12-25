import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { UserData } from '../Restaurant/Models/User.model';
import { DishData } from '../Restaurant/Models/Dish.model';
import { BookTableData } from '../Restaurant/Models/BookTable.model';
@Injectable({
  providedIn: 'root'  
})
export class DatabaseApiService {

  Connection_URL = "http://localhost:8000/"
  constructor(private HTTP:HttpClient) {}

  
  Insert_New_Dish()
  {

  }

  Delete_Existing_Dish()
  {

  }

  Get_All_Dish()
  {
      return this.HTTP.get(this.Connection_URL+"getalldishes").pipe(map((response:any)=>response.data||response));
  }

  Get_All_Dish_():Observable<DishData[]>
  {
    return this.HTTP.get<DishData[]>(this.Connection_URL+"getalldishes");
  }

  Get_All_Users():Observable<UserData[]>
  {
    return this.HTTP.get<UserData[]>(this.Connection_URL+"getallusers");
  }

  Get_All_Bookings()
  {
    return this.HTTP.get<BookTableData[]>(this.Connection_URL+"getallbookings");
  }

  Update_Existing_Dish()
  {

  }

    Create_New_User(user:any):Observable<any>
    {
      return this.HTTP.post(this.Connection_URL+"adduser",user);
    }

    Book_new_table(user:any)
    {
      return this.HTTP.post(this.Connection_URL+"addtable",user);
    }

    Add_New_Dish(Data:any)
    {
      return this.HTTP.post(this.Connection_URL+"adddish",Data);
    }

    Contact_us_entry(Data:any)
    {
      return this.HTTP.post(this.Connection_URL+"addcontact",Data);
    }

    Delete_user_by_id(id:string)
    {
      console.log(id);
      return this.HTTP.delete(this.Connection_URL+`deleteuser/${id}`);
    }

    Delete_Dish_by_Id(id:string)
    {
      return this.HTTP.delete(this.Connection_URL+`deletedish/${id}`);
    }

    Delete_booking_by_Id(id:string)
    {
      return this.HTTP.delete(this.Connection_URL+`deletetable/${id}`);
    }

  
}
