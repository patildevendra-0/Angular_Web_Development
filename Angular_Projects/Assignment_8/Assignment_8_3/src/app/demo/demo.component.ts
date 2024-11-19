import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  @Input() P_Message:any;

  @Output() MyEvent = new EventEmitter();

  public Message_To_Parent()
  {
    this.MyEvent.emit("HELLO FROM CHILD IN THE PARENT")
  }

}
