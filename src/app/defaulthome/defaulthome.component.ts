import { Component } from '@angular/core';
import { LoginComponent } from '../home/login/login.component';

@Component({
  selector: 'app-defaulthome',
  templateUrl: './defaulthome.component.html',
  styleUrls: ['./defaulthome.component.css']
})
export class DefaulthomeComponent {
  sliderImages: string[] = [
    'https://picsum.photos/200/300?image=1049',
    'https://picsum.photos/200/300?image=1050',
    'https://picsum.photos/200/300?image=1052',
    'https://picsum.photos/200/300?image=1053',
    // Add more image URLs as needed
  ];
}
