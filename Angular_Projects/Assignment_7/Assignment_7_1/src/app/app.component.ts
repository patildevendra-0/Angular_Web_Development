import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecoundComponent } from './secound/secound.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,SecoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment_7_1';
}
