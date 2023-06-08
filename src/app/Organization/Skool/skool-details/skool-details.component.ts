// skool-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkoolService } from '../skool.service';

@Component({
  selector: 'app-skool-details',
  templateUrl: './skool-details.component.html',
  styleUrls: ['./skool-details.component.css']
})
export class SkoolDetailsComponent implements OnInit {
  skool: any = {};

  constructor(
    private route: ActivatedRoute,
    private skoolService: SkoolService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getSkool(id);
  }

  getSkool(id: number) {
    this.skoolService.getSkool(id).subscribe(
      skool => {
        this.skool = skool;
      },
      error => {
        console.log(error);
      }
    );
  }
}
