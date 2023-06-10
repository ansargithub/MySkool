import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';
import { Organization } from 'src/app/data-models/organization';
import { OrganizationService } from 'src/app/services/organization.service';
import { StateService } from 'src/app/Organization/State/state.service';
import { RegionService } from 'src/app/Organization/Region/region.service';
import { SkoolService } from 'src/app/Organization/Skool/skool.service';
import { State } from 'src/app/Organization/State/state';
import { Region } from 'src/app/Organization/Region/region';
import { state } from '@angular/animations';

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
  skools:any[];
  states:State[];
  regions:Region[];
  organizaton:Organization;
  selstate:State;
  constructor(private branchService: BranchService,private orgservice:OrganizationService,
    private skoolserv:SkoolService,private stateserv:StateService,private regionserv:RegionService
    ) { }

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

   /*  this.skoolserv.getSkools().subscribe((skools)=>{ this.skools=skools;}) */

    this.stateserv.getStates().subscribe((states=>{this.states=states;}));
    this.regionserv.getRegions().subscribe((regions=>{this.regions=regions;}));
  }
 getskoolsorg()
 {
  this.skoolserv.getSkoolbyorg(this.branch.organizationId).subscribe((skools)=>{ this.skools=skools;})

 }
setregion(myval:number)
{
   
  if (myval!)
  {
    this.stateserv.getState(myval).subscribe((stated)=>{
      
      this.selstate=stated;
    
      if (this.selstate!=null)
      {
        this.branch.regionId=this.selstate.regionId;
        
      }
    });
   
  }
  
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
