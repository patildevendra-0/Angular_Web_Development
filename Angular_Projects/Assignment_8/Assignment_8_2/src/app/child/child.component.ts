import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public Data:any;
  @Output() public MyEvent = new EventEmitter();

  public Send_data_C_To_P()
  {
     this.MyEvent.emit(this.Data);
  }
}
