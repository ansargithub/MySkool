import { Component } from '@angular/core';
import { User } from './data-models/user';
import { AuthService } from './services/auth-service';
import { UserskoolService } from './services/userskool.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkoolApp1';
  private user?:User|null;
private myauthser:AuthService;
  
  constructor(private authser:AuthService,private userskool:UserskoolService) {
    this.myauthser=authser;
   }

   checklogin()
   {
    return this.authser.isLoggedIn();

   }
  ngOnInit() {
    // Check if the user is already logged in
    this.user=this.authser.getUser();
    this.userskool.set("userName","FirstUser");

  }
 toggleMenu(): void {
    // Code to toggle the left side menu
  }
  
}
