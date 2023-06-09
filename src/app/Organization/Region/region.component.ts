import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegionService } from './region.service';
import { Region } from './region';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions: any[] = [];
  regionForm!: FormGroup;
  isEditMode = false;
  selectedRegionId: number | null = null;
  selectedRegion: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private regionService: RegionService
  ) {}

  ngOnInit() {
    this.regionForm = this.formBuilder.group({
      regionId: ['', Validators.required],
      regionName: ['', Validators.required]
    });

    this.loadRegions();
  }

  loadRegions() {
    this.regionService.getRegions().subscribe(
      (data: any) => {
        this.regions = data;
      },
      error => {
        this.snackBar.open('Failed to load regions.', 'Error', {
          duration: 3000
        });
      }
    );
  }

  addRegion() {
    if (this.regionForm.invalid) {
      this.snackBar.open('Please fill all the fields.', 'Error', {
        duration: 3000
      });
      return;
    }

    if (this.isEditMode && this.selectedRegionId !== null) {
      this.updateRegion();
    } else {
      this.regionService.addRegion(this.regionForm.value).subscribe(
        (response: any) => {
          this.snackBar.open('Region added successfully.', 'Success', {
            duration: 3000
          });
          this.loadRegions();
          this.clearForm();
        },
        error => {
          this.snackBar.open('Failed to add region.', 'Error', {
            duration: 3000
          });
        }
      );
    }
  }

  editRegion(region: any) {
    this.regionForm.patchValue({
      regionId: region.regionId,
      regionName: region.regionName
    });
    this.isEditMode = true;
    this.selectedRegionId = region.regionId;
  }

  updateRegion() {
    if (this.regionForm.invalid || this.selectedRegionId === null) {
      this.snackBar.open('Please fill all the fields.', 'Error', {
        duration: 3000
      });
      return;
    }

    this.regionService.updateRegion(this.selectedRegionId, this.regionForm.value).subscribe(
      (response: any) => {
        this.snackBar.open('Region updated successfully.', 'Success', {
          duration: 3000
        });
        this.loadRegions();
        this.clearForm();
        this.isEditMode = false;
        this.selectedRegionId = null;
      },
      error => {
        this.snackBar.open('Failed to update region.', 'Error', {
          duration: 3000
        });
      }
    );
  }

  deleteRegion(regionId: number) {
    if (confirm('Are you sure you want to delete this region?')) {
      this.regionService.deleteRegion(regionId).subscribe(
        (response: any) => {
          this.snackBar.open('Region deleted successfully.', 'Success', {
            duration: 3000
          });
          this.loadRegions();
        },
        error => {
          this.snackBar.open('Failed to delete region.', 'Error', {
            duration: 3000
          });
        }
      );
    }
  }

  viewRegion(region: any) {
    this.selectedRegion = region;
  }

  clearForm() {
    this.regionForm.reset();
  }
}
