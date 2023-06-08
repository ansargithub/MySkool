import { Component, OnInit ,Inject} from '@angular/core';
import { Organization } from 'src/app/data-models/organization';
import { OrganizationService } from 'src/app/services/organization.service';
import { ConfirmOrganizatonDeleteComponent } from '../confirm-organizaton-delete/confirm-organizaton-delete.component';
import { Router,RouterLink } from '@angular/router';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/AlertDialogComponent/alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-organziation-list',
  templateUrl: './organziation-list.component.html',
  styleUrls: ['./organziation-list.component.css']
})
export class OrganiziationListComponent implements OnInit {
  organizations: Organization[]|undefined;

  displayedColumns = ['organizationName','groupName','actions']; // here we say that we want to just display 1 column - firstNam
  constructor(private organizationService: OrganizationService,private dialog: MatDialog,private router:Router) {}

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations() {
    this.organizationService.getOrganizations().subscribe((organizations) => {
      this.organizations = organizations;
    });
  }
  deleteOrganization(id:number)
  {
    console.log(id);
    const dialogRef = this.dialog.open(ConfirmOrganizatonDeleteComponent, {
      width: '300px',
      data: {
        message: 'Are you sure you want to delete this Organization?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Call the delete service method
        console.log(result);
        this.organizationService.deleteOrganization(id).subscribe(response => {
          // Handle success response
          
          console.log('Organization Record deleted successfully:', response);
          this.openAlertDialog();
        
          this.router.navigate(['/organization']);
          // Refresh the student list or perform any other necessary action
        },
        error => {
          // Handle error response
          console.error('Error deleting student:', error);
          // Handle the error appropriately
        }
          //this.router.navigate(['/organization-list']);
        );
       
    }});
  }

  openAlertDialog() {
    this.dialog.open(AlertDialogComponent, {
      data: {
        icon: 'Check',
        message: 'Organization Record Deleted Successfully'
      }
    });
  }
 openAlertDialogAsync() {
    setTimeout(() => {
      this.dialog.open(AlertDialogComponent, {
        data: {
          icon: 'Check',
          message: 'This Alert Dialog opened asynchronously'
        }
      });
    }, 200);
  }

  throwError() {
    throw new Error('An error has occurred');
  }

  throwErrorAsync() {
    setTimeout(() => {
      throw new Error('An Asynchronous error has occurred');
    }, 200);
  }

}

  
