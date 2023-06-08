import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';
import { Organization } from 'src/app/data-models/organization';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  @Output() onSave = new EventEmitter<Branch>();
  @Output() onCancel = new EventEmitter<void>();
  branch: Branch = new Branch();
  title: string;
  organizations:Organization[];
  constructor(private branchService: BranchService,private orgservice:OrganizationService) { }

  ngOnInit() {
    // Set the appropriate title based on the mode (Add/Edit)
    this.title = this.branchService.isEditMode ? 'Edit Branch' : 'Add Branch';
    // If in Edit mode, populate the form with the existing branch data
    if (this.branchService.isEditMode) {
      this.branch = this.branchService.getCurrentBranch();
    }
    this.orgservice.getOrganizations().subscribe((organizations) => {
      this.organizations = organizations;
    });
  }

  onSubmit() {
    if (this.branchService.isEditMode) {
      // Update an existing branch
      this.branchService.updateBranch(this.branch).subscribe(() => {
        // Emit an event to notify the parent component
        this.onSave.emit(this.branch);
      });
    } else {
      // Add a new branch
      this.branchService.addBranch(this.branch).subscribe(() => {
        // Emit an event to notify the parent component
        this.onSave.emit(this.branch);
      });
    }
  }

  /* onCancel() {
    // Emit an event to notify the parent component
    this.onCancel.emit();
  } */
}
