import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkoolService } from '../skool.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skool-form',
  templateUrl: './skool-form.component.html',
  styleUrls: ['./skool-form.component.css']
})
export class SkoolFormComponent implements OnInit {
  skoolForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private skoolService: SkoolService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditing = true;
      this.getSkool(id);
    }
    this.createForm();
  }

  createForm() {
    this.skoolForm = new FormGroup({
      skoolId:new FormControl(''),
      skoolName: new FormControl('', [Validators.required]),
      branchId: new FormControl('', [Validators.required]),
      branchName: new FormControl('', [Validators.required]),
      boardId: new FormControl('', [Validators.required]),
      userID: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      estDate: new FormControl('', [Validators.required]),
      geoLatitude: new FormControl('', [Validators.required]),
      geoLongitude: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      lmd: new FormControl('', [Validators.required]),
      lmu: new FormControl('', [Validators.required]),
      organizationId: new FormControl('', [Validators.required])
    });
  }

  getSkool(id: number) {
    this.skoolService.getSkool(id)
      .subscribe(skool => {
        this.skoolForm.patchValue(skool);
      });
  }

  saveSkool() {
    if (this.isEditing) {
      const skoolId = this.route.snapshot.params['id'];
      this.skoolForm.controls['studentId']=skoolId;
      this.skoolService.updateSkool(skoolId,this.skoolForm.value)
        .subscribe(() => {
          this.router.navigate(['/organization/skools']);
        });
    } else {
      this.skoolService.addSkool(this.skoolForm.value)
        .subscribe(() => {
          this.router.navigate(['/organization/skools']);
        });
    }
  }
}
