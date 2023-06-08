import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/data-models/organization';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organziation-delete',
  templateUrl: './organziation-delete.component.html',
  styleUrls: ['./organziation-delete.component.css']
})
export class OrganziationDeleteComponent {
  organization?: Organization;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService
  ) {}

  ngOnInit() {
    const organizationId = +this.route.snapshot.paramMap.get('id')!;
    this.getOrganization(organizationId);
  }

  getOrganization(id: number) {
    this.organizationService!.getOrganization(id!).subscribe((organization) => {
      this.organization = organization!;
    });
  }

  deleteOrganization() {
    this.organizationService.deleteOrganization(this.organization!.organizationId!).subscribe(() => {
      this.router.navigate(['/organization-list']);
    });
  }

  cancelDelete() {
    this.router.navigate(['/organization-list']);
  }
}
