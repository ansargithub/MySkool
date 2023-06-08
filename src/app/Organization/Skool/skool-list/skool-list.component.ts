// skool-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SkoolService } from '../skool.service';

@Component({
  selector: 'app-skool-list',
  templateUrl: './skool-list.component.html',
  styleUrls: ['./skool-list.component.css']
})
export class SkoolListComponent implements OnInit {
  skools: any[];

  constructor(private skoolService: SkoolService) {}

  ngOnInit() {
    this.getSkools();
  }

  getSkools() {
    this.skoolService.getSkools().subscribe(
      skools => {
        this.skools = skools;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteSkool(id: number) {
    if (confirm('Are you sure you want to delete this school?')) {
      this.skoolService.deleteSkool(id).subscribe(
        () => {
          this.getSkools();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}

