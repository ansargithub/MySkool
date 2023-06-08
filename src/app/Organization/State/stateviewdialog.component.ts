import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { State } from './state';

@Component({
  selector: 'app-state-view-dialog',
  templateUrl: './state-view-dialog.component.html'
})
export class StateViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StateViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { state: State }
  ) {}

  get state(): State {
    return this.data.state;
  }
}

