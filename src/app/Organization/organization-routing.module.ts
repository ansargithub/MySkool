import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './Organization/organization/organization.component';
import { OrganziationEditComponent } from './organziation-edit/organziation-edit.component';
import { OrganiziationListComponent } from './organziation-list/organziation-list.component';
import { OrganziationDeleteComponent } from './organziation-delete/organziation-delete.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardFormComponent } from './board-form/board-form.component';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { SkoolDetailsComponent } from './Skool/skool-details/skool-details.component';
import { SkoolFormComponent } from './Skool/skool-form/skool-form.component';
import { SkoolListComponent } from './Skool/skool-list/skool-list.component';
import { BranchFormComponent } from './Organization/branch/branch-form/branch-form.component';
import { BranchListComponent } from './Organization/branch/branchslist/branchslist.component';
import { StateComponent } from './State/state.component';
import { RegionComponent } from './Region/region.component';

const routes: Routes = [{
  path: '',
  component: OrganiziationListComponent,
  children: [
   
  { path: 'edit/:id', component: OrganziationEditComponent },
  { path: 'list', component: OrganiziationListComponent },
  { path: 'delete/:id', component: OrganziationDeleteComponent },
  /*  {path:'organization',component:OrganizationComponent},*/
]
},
{path:'states',component:StateComponent},
{path:'regions',component:RegionComponent},
{path:'view/:id',component:OrganziationEditComponent},
{path:'add',component:OrganizationComponent},
{ path:'boards',component:BoardListComponent,
  children:[
   { path: 'view/:id', component: BoardDetailsComponent },
  { path: 'edit/:id', component: BoardFormComponent },
  { path: '*', redirectTo: '/boards', pathMatch: 'full' }
  ]

}
,{ path:'skool/new',component:SkoolFormComponent},
{ path:'skools',component:SkoolListComponent,
  children:[
   { path: 'view/:id', component: SkoolDetailsComponent },
  { path: 'edit/:id', component: SkoolFormComponent },
  { path: '*', redirectTo: '/skools', pathMatch: 'full' }
  ]}
  
  ,{ path:'branch/new',component:BranchFormComponent},
{ path:'branchs',component:BranchListComponent,
  children:[
   { path: 'view/:id', component: BranchFormComponent },
  { path: 'edit/:id', component: BranchFormComponent },
  ]

}
,{ path:'board/new',component:BoardFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
