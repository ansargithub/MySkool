import { Component } from '@angular/core';
import { User } from 'src/app/data-models/user';
import { AuthService } from 'src/app/services/auth-service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
private user?:User|null;
private myauthser:AuthService;
  
  constructor(private authser:AuthService) {
    this.myauthser=authser;
   }

   checklogin()
   {
    return this.authser.isLoggedIn();

   }
  ngOnInit() {
    // Check if the user is already logged in
    this.user=this.authser.getUser();

  }
 toggleMenu(): void {
    // Code to toggle the left side menu
  }
  
}
