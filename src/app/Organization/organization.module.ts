import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MaterialModule } from '../material.module';

import { OrganizationComponent } from './Organization/organization/organization.component';
import { OrganiziationListComponent } from './organziation-list/organziation-list.component';
import { OrganziationEditComponent } from './organziation-edit/organziation-edit.component';
import { OrganziationDeleteComponent } from './organziation-delete/organziation-delete.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { ConfirmOrganizatonDeleteComponent } from './confirm-organizaton-delete/confirm-organizaton-delete.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { BoardFormComponent } from './board-form/board-form.component';
import { SkoolListComponent } from './Skool/skool-list/skool-list.component';
import { SkoolFormComponent } from './Skool/skool-form/skool-form.component';
import { SkoolDetailsComponent } from './Skool/skool-details/skool-details.component';
import { BranchFormComponent } from './Organization/branch/branch-form/branch-form.component';
import { BranchListComponent } from './Organization/branch/branchslist/branchslist.component';
import { BranchDialogueComponent } from './Organization/branch/branchdialogue/branchdialogue.component';
import { StateComponent } from './State/state.component';
import { RegionComponent } from './Region/region.component';
import { StateViewDialogComponent } from './State/stateviewdialog.component';
import { BranchListViewComponent } from './Organization/branch/branchslistview/branchslistview.component';
@NgModule({
  declarations: [
 OrganizationComponent,
 OrganiziationListComponent,
 OrganziationEditComponent,
 OrganziationDeleteComponent,
 ConfirmOrganizatonDeleteComponent,
 BoardListComponent,
 BoardDetailsComponent,
 BoardFormComponent,
 SkoolListComponent,
 SkoolFormComponent,
 SkoolDetailsComponent,
 BranchFormComponent,
BranchListComponent,
 BranchDialogueComponent,
 StateComponent,
 RegionComponent,StateViewDialogComponent,BranchListViewComponent,
 
 

  ],
  imports: [
CommonModule,
FormsModule,ReactiveFormsModule,MatCommonModule,
MaterialModule,OrganizationRoutingModule,
  ]
})
export class OrganizationModule { }
