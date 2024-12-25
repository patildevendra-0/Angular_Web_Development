import { Component } from '@angular/core';
import { NavBarCuroselComponent } from "../nav-bar-curosel/nav-bar-curosel.component";
import { CommonModule } from '@angular/common';
import { FormControl,FormsModule,Validators,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BookTableData } from '../Models/BookTable.model';
import { DatabaseApiService } from '../../services/database-api.service';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-book-table',
  imports: [NavBarCuroselComponent,CommonModule,ReactiveFormsModule,ThankYouComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent 
{
  backgroundUrl = 'tables-chairs-arranged-empty-coffee-shop.webp'; 
  BookTable_Obj = new BookTableData;
  isPopupVisible:boolean = false;

  constructor(private DB_service:DatabaseApiService){}

  Booktable = new FormGroup
  ({
    fullName : new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    tablenumber:new FormControl('',[Validators.required]),
    bookingTime:new FormControl('',[Validators.required]),
    guestCount:new FormControl('',[Validators.required]),
    specialRequests:new FormControl(''),
  })

  BookTable_Click()
  {
    if(this.Booktable.valid)
    {
       this.BookTable_Obj.name = this.Booktable.value.fullName || '';
       this.BookTable_Obj.phone = Number(this.Booktable.value.phone) || 0;
       this.BookTable_Obj.guestcount = Number(this.Booktable.value.guestCount) || 0;
       this.BookTable_Obj.specialrequest = this.Booktable.value.specialRequests || '';
       this.BookTable_Obj.tableNumber = this.Booktable.value.tablenumber || '';

       this.DB_service.Book_new_table(this.BookTable_Obj).subscribe(
         response=>
         {
             console.log(response);
             this.isPopupVisible = true;
         },
         error =>
         {
              console.log(error);
         }
       )
    }

    setTimeout(()=>{
      this.clearForm_feilds();
    },3000);
  }

  clearForm_feilds()
  {
    this.Booktable.reset();
  }
}
