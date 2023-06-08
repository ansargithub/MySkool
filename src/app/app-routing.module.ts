import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './home/mainpage/mainpage.component';
import { SliderComponent } from './home/slider/slider.component';
import { DefaulthomeComponent } from './defaulthome/defaulthome.component';
import { LoginComponent } from './home/login/login.component';
import { AuthGuard} from './AuthGuard';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'main', component: MainpageComponent  },
  { path: 'dashboard', component: SliderComponent , canActivate: [AuthGuard], data: { role: ['admin','user'] } },
  { path: 'home', component: HomeComponent  },
  {path:'organization',loadChildren:()=>import('./Organization/organization.module').then(m=>m.OrganizationModule) },
  /* {path:'organization',loadChildren:()=>import('./Organization/organization.module').then(m=>m.OrganizationModule), canActivate: [AuthGuard], data: { role: 'user' } }, */
  {path:'books',loadChildren:()=>import('./book/books/books.module').then(m=>m.BooksModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
