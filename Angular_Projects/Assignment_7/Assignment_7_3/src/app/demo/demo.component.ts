import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-demo',
  imports: [NgIf],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

  public bFlag = false;

  public Change_Text()
  {
      if(this.bFlag == true)
      {
        this.bFlag = false;
      }
      else
      {
        this.bFlag = true;
      }
  }

}
