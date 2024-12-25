import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './Restaurant/page-not-found/page-not-found.component';
import { LoginComponent } from './Restaurant/login/login.component';
import { SignupComponent } from './Restaurant/signup/signup.component';
import { DashboardComponent } from './Restaurant/dashboard/dashboard.component';
import { BookTableComponent } from './Restaurant/book-table/book-table.component';
import { AddDishComponent } from './Restaurant/add-dish/add-dish.component';
import { ContactusComponent } from './Restaurant/contactus/contactus.component';
import { TablesComponent } from './Restaurant/tables/tables.component';

export const routes: Routes = 
[
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path:'login',component:LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'booktable', component: BookTableComponent },
    { path: 'adddish', component: AddDishComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'tables', component: TablesComponent },
    { path: '**', component: PageNotFoundComponent},  
];
