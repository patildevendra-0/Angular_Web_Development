import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ReversePipe,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
    public input_text = " ";
}
