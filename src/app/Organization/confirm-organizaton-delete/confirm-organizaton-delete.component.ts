import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-organizaton-delete',
  templateUrl: './confirm-organizaton-delete.component.html',
  styleUrls: ['./confirm-organizaton-delete.component.css']
})
export class ConfirmOrganizatonDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmOrganizatonDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
