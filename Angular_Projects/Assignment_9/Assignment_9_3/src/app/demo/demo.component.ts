import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberoperationsPipe } from '../numberoperations.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,NumberoperationsPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public iValue = 0;
}
