import { Component } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';
import { User } from 'src/app/data-models/user';
import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  private user:User={};
  errorMessage: string = '';
  constructor(private fb: FormBuilder,private router: Router ,private authuser: AuthService,private userser:UserService) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
 
    // Process login logic
    console.log(this.loginForm.value);
     
  this.user.username=this.loginForm.value.userName;
  this.user.password=this.loginForm.value.password;
  
  //  const hashedPassword = bcrypt.hashSync(this.user.password!, 10); // Hash the password
//this.user.password=hashedPassword;
this.authuser.login(this.user)?.subscribe(result=>
   {
    this.user=result;
    // Login successful, handle the response
    console.log('Logged in successfully');
    this.userser.setCurrentUser(this.user);
    this.router.navigate(['/home']);
    
  },
  (error) => {
    this.errorMessage = error.message;
  }
);

   
    
    
}
}