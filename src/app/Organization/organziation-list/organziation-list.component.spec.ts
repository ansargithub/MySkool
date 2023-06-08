import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiziationListComponent } from './organziation-list.component';

describe('OrganziationListComponent', () => {
  let component: OrganiziationListComponent;
  let fixture: ComponentFixture<OrganiziationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganiziationListComponent]
    });
    fixture = TestBed.createComponent(OrganiziationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
