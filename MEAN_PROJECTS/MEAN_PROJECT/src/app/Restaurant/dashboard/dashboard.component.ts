import { Component } from '@angular/core';
import { NavBarCuroselComponent } from "../nav-bar-curosel/nav-bar-curosel.component";
import { DishcardsComponent } from "../dishcards/dishcards.component";
import { CuroselComponent } from "../curosel/curosel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NavBarCuroselComponent, DishcardsComponent, CuroselComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent 
{
  backgroundUrl = 'loginpage_background.webp'; 
}
