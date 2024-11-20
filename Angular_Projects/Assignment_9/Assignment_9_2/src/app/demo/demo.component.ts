import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPipe } from '../add.pipe';
import { MultiplicationPipe } from '../multiplication.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,AddPipe,MultiplicationPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Input_Number = 0;
  public Input_Add_num = 0;
  public Input_Mul_num = 0;
}
