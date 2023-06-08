import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';
import { BranchDialogueComponent } from '../branchdialogue/branchdialogue.component';

@Component({
  selector: 'app-branchslist',
  templateUrl: './branchslist.component.html',
  styleUrls: ['./branchslist.component.css']
})
export class BranchListComponent implements OnInit {
  displayedColumns: string[] = ['branchId', 'branchName', 'city', 'state', 'actions'];
  dataSource: MatTableDataSource<Branch>;

  constructor(private branchService: BranchService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadBranches();
  }

  loadBranches() {
    this.branchService.getBranches().subscribe((branches: Branch[]) => {
      this.dataSource = new MatTableDataSource<Branch>(branches);
    });
  }

  onView(branch: Branch) {
    this.dialog.open(BranchDialogueComponent, {
      width: '400px',
      data: {
        branch,
        mode: 'view'
      }
    });
  }

  onEdit(branch: Branch) {
    this.dialog.open(BranchDialogueComponent, {
      width: '400px',
      data: {
        branch,
        mode: 'edit'
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.loadBranches();
      }
    });
  }

  onDelete(branch: Branch) {
    if (confirm('Are you sure you want to delete this branch?')) {
      this.branchService.deleteBranch(branch.branchId).subscribe(() => {
        this.loadBranches();
      });
    }
  }
}
