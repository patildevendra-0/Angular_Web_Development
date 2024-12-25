import { Component, OnInit } from '@angular/core';
import { NavBarCuroselComponent } from "../nav-bar-curosel/nav-bar-curosel.component";
import { DatabaseApiService } from '../../services/database-api.service';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { DishData } from '../Models/Dish.model';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-add-dish',
  imports: [NavBarCuroselComponent,CommonModule,ReactiveFormsModule,ThankYouComponent],
  templateUrl: './add-dish.component.html',
  styleUrl: './add-dish.component.css'
})
export class AddDishComponent 
{
  Dishobj = new DishData();
  Selected_Image:File |null = null;
  isPopupVisible:boolean = false;
  constructor(private DB_service:DatabaseApiService){}

  AddDishForm = new FormGroup
  ({
    dishImage:new FormControl('',[Validators.required]),
    dishName:new FormControl('',[Validators.required]),
    dishDetails:new FormControl('',[Validators.required]),
    dishPrice:new FormControl('',[Validators.required])
  })


  backgroundUrl = 'top-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk.webp'; 

  AddDish_Click()
  {
    if(this.AddDishForm.valid)
    {
      this.Dishobj.name = this.AddDishForm.value.dishName || '';
      this.Dishobj.imageFile = this.Selected_Image;
      this.Dishobj.description = this.AddDishForm.value.dishDetails || '';
      this.Dishobj.price = Number(this.AddDishForm.value.dishPrice);

      this.DB_service.Add_New_Dish(this.Dishobj).subscribe(
        response=>
        {
          console.log(response);
          this.isPopupVisible = true;
        },
        error=>
        {
          console.log(error);
        }
      )
    }
    
    setTimeout(()=>{
      this.clear_Form_feilds();
    },3000);

  }

  onFileSelected(event:any)
  {
    const File = event.target.files[0];
    if(File)
    {
      this.Selected_Image = File;
    }
  }

  clear_Form_feilds()
  {
    this.AddDishForm.reset();
  }


}
