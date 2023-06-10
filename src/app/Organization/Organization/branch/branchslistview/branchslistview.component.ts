import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Branch } from '../branch';
import { BranchService } from '../branch.service';
import { BranchDialogueComponent } from '../branchdialogue/branchdialogue.component';

@Component({
  selector: 'app-branchslist',
  templateUrl: './branchslistview.component.html',
  styleUrls: ['./branchslistview.component.css']
})
export class BranchListViewComponent implements OnInit {
  displayedColumns: string[] = ['branchId', 'branchName', 'institution','boardName','organization','city', 'stateName', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(private branchService: BranchService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadBranches();
  }

  loadBranches() {
    this.branchService.getBrancheslist().subscribe((branches: any[]) => {
      this.dataSource = new MatTableDataSource<any>(branches);
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
