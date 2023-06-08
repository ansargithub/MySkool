import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/data-models/organization';
import { OrganizationService } from 'src/app/services/organization.service';
import { UserskoolService } from 'src/app/services/userskool.service';
//  find a issue in the code at runtimes result in error objct not found  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-organziation-edit',
  templateUrl: './organziation-edit.component.html',
  styleUrls: ['./organziation-edit.component.css']
})
export class OrganziationEditComponent {
  organization?: Organization;
  userName?:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,private userskool:UserskoolService
  ) {}

  ngOnInit() {
    this.organization=new Organization();
    const organizationId = +this.route.
    snapshot.paramMap.get('id')!;
    this.getOrganization(organizationId);
    this.userName=this.userskool.get("userName")!;
    
  }

  getOrganization(id: number) {
    this.organizationService.getOrganization(id)?.subscribe((organization) => {
      this.organization = organization;
      
    });
  }

  updateOrganization() {
    this.organization!.userId=this.userName!;
    this.organizationService.updateOrganization(this.organization!).subscribe(() => {
      this.router.navigate(['/organization/list']);
    });
  }

  deleteOrganization() {
    this.organizationService.deleteOrganization(this.organization!.organizationId!).subscribe(() => {
      this.router.navigate(['/organization/list']);
    });
  }
}
