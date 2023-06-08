import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Branch } from '../branch';

@Component({
  selector: 'app-branch-dialog',
  templateUrl: './branchdialogue.component.html',
  styleUrls: ['./branchdialogue.component.css']
})
export class BranchDialogueComponent {
  branch: Branch;
  mode: 'view' | 'edit';

  constructor(
    public dialogRef: MatDialogRef<BranchDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.branch = data.branch;
    this.mode = data.mode;
  }
}
