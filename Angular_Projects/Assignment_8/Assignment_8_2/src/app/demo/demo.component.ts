import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

  public UserInput = " ";
  @Output() public MyEvent = new EventEmitter();


  public button_click()
  {
    this.MyEvent.emit(this.UserInput);
  }

}
