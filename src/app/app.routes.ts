import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'thankyou', component:ThankyouComponent},
];
