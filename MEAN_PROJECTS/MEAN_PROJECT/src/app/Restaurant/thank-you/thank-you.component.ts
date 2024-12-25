import { Component ,Input} from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-thank-you',
  imports: [CommonModule],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent {
  @Input() isVisible: boolean = false;
  @Input() isVisible_for_other:boolean = false;

  closePopup() 
  {
    this.isVisible = false;
    this.isVisible_for_other = false;
  }
}
