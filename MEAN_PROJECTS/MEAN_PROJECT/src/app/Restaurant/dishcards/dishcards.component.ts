import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DatabaseApiService } from '../../services/database-api.service';
@Component({
  selector: 'app-dishcards',
  imports: [NgFor],
  templateUrl: './dishcards.component.html',
  styleUrl: './dishcards.component.css'
})
export class DishcardsComponent implements OnInit
{
  dishes:any[] = [];

  constructor(private DB_service:DatabaseApiService){}

  ngOnInit()
  {
      this.DB_service.Get_All_Dish().subscribe(
        (response:any)=>
        {
          this.dishes = Array.isArray(response)?response:response.data;
          console.log(this.dishes);
        },
        (error:any)=>
        {
           console.error(error);
        }
        
      )
  }

}
