import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Assignment_8_3';


  public Message_P_C = "Hello from parent in child"
  public Rec_Meesgae = " ";
}
