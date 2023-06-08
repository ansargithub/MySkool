import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { OrganizationService } from 'src/app/services/organization.service';
import { OrganizationModule } from '../../organization.module';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  organizationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationService) {
    this.organizationForm = this.formBuilder.group({

      OrganizationName: ['', Validators.required],
      GroupName: ['', Validators.required],
      LedgerCode: ['', Validators.required],
      EstDate: ['', Validators.required]
      
    });
  }

  submitForm() {
    if (this.organizationForm.valid) {
      const organization = this.organizationForm.value;
      organization.userId='test';
      // Call the service method to add the organization
      this.organizationService.addOrganization(organization).subscribe(
        response => {
          console.log('Organization added successfully:', response);
          // Reset the form after successful submission
          this.organizationForm.reset();
          
        },
        error => {
          console.error('Error adding organization:', error);
        }
      );
    }
  }
}
