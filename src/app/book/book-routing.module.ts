import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
const routes: Routes = [{
  path: '',component: BookListComponent,
  children: [
   
  { path: 'edit/:id', component: BookAddComponent },
  { path: 'view/:id', component: BookViewComponent },
  
  { path: 'delete/:id', component: BookAddComponent },
  /*  {path:'organization',component:OrganizationComponent},*/
]
},
{path:'add',component:BookAddComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
