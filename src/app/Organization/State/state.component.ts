
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StateService } from './state.service';
import { State } from './state';
import { MatDialogContent } from '@angular/material/dialog';
import { StateViewDialogComponent } from './stateviewdialog.component';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateList: MatTableDataSource<State>;
  stateForm: FormGroup;
  showForm: boolean = false;
  formMode: 'add' | 'edit';
  selectedState: State;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.buildStateForm();
    this.loadStateList();
  }

  buildStateForm() {
    this.stateForm = this.fb.group({
      stateName: ['', Validators.required]
    });
  }

  loadStateList() {
    this.stateService.getStates().subscribe((states: State[]) => {
      this.stateList = new MatTableDataSource<State>(states);
    });
  }

  onAddState() {
    this.formMode = 'add';
    this.stateForm.reset();
    this.showForm = true;
  }

  onSaveState() {
    if (this.formMode === 'add') {
      this.stateService.addState(this.stateForm.value).subscribe(() => {
        this.loadStateList();
        this.showForm = false;
      });
    } else if (this.formMode === 'edit') {
      this.stateService.editState(this.selectedState.stateID, this.stateForm.value).subscribe(() => {
        this.loadStateList();
        this.showForm = false;
      });
    }
  }

  onEditState(state: State) {
    this.formMode = 'edit';
    this.selectedState = state;
    this.stateForm.patchValue({'stateName':state.stateName});
    this.showForm = true;
  }

  onViewState(state: State) {
    // Show a dialog or navigate to a new view to display state details
    // Example: using MatDialog to show a dialog
    const dialogRef = this.dialog.open(StateViewDialogComponent, {
      width: '400px',
      data: { state }
    });
  }

  onDeleteState(state: State) {
    if (confirm('Are you sure you want to delete this state?')) {
      this.stateService.deleteState(state.stateID).subscribe(() => {
        this.loadStateList();
      });
    }
  }

  onCancel() {
    this.showForm = false;
  }
}

/* @Component({
  selector: 'app-state-view-dialog',
  templateUrl:'./statedialog.html'
  
})
export class StateViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  get state(): State {
    return this.data.state;
  }
} */
