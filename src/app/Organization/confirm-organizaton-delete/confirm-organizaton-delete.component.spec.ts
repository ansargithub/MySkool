import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrganizatonDeleteComponent } from './confirm-organizaton-delete.component';

describe('ConfirmOrganizatonDeleteComponent', () => {
  let component: ConfirmOrganizatonDeleteComponent;
  let fixture: ComponentFixture<ConfirmOrganizatonDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmOrganizatonDeleteComponent]
    });
    fixture = TestBed.createComponent(ConfirmOrganizatonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
