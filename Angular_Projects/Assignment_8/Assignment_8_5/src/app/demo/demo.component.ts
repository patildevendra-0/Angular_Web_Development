import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public length_no = 0;

  public Process_input(event:Event)
  {
    const input_element = event.target as HTMLInputElement;
    this.length_no = input_element.value.length;
  }

}
