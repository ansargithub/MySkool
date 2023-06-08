import { Component, OnInit } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';

import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    // Code to toggle the left side menu
  }

}
