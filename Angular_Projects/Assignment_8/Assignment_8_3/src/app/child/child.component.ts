import { Component, EventEmitter, Output,Input } from '@angular/core';
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
  @Output() public Event_1 = new EventEmitter();
  
  public InputData:any;
  @Input() public ParentData = " ";

  public Child_Send_data()
  {
    this.Event_1.emit(this.InputData);
  }


}
