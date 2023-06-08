import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { MatCommonModule } from '@angular/material/core';

import { MaterialModule } from './material.module';
import { MainpageComponent } from './home/mainpage/mainpage.component';
import { LoginComponent } from './home/login/login.component';
import { SliderComponent } from './home/slider/slider.component';
import { DefaulthomeComponent } from './defaulthome/defaulthome.component';
import { TreeComponent } from './tree/tree.component';
import { HeaderComponent } from './home/header/header.component';
import { LefttreeComponent } from './home/lefttree/lefttree.component';
import { FooterComponent } from './home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertDialogComponent } from './AlertDialogComponent/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainpageComponent,
    LoginComponent,
    SliderComponent,
    DefaulthomeComponent,
    TreeComponent,
    HeaderComponent,
    LefttreeComponent,
    FooterComponent,
    AlertDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSlideToggleModule,MaterialModule,MatCommonModule,HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
