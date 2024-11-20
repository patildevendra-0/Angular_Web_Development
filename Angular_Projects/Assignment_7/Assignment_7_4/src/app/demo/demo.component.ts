import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Data = "Marvellous Infosystem";


  public Test_1()
  {
    this.Data = this.Data.toUpperCase();
  }

  public Test_2()
  {
    this.Data = this.Data.toLowerCase();
  }

  public Change_text()
  {
    if(this.CheckCase())
    {
      this.Data = this.Data.toLowerCase();
    }
    else
    {
      this.Data = this.Data.toUpperCase();
    }
  }

  public CheckCase():boolean
  {
    if(this.Data === this.Data.toUpperCase())
    {
      return true;
    }
    else
    {
      return false
    }
  }
}


