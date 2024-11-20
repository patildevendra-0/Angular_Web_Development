import { Component } from '@angular/core';
import { SecoundComponentComponent } from '../secound-component/secound-component.component';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [SecoundComponentComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

}
