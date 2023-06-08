import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganziationEditComponent } from './organziation-edit.component';

describe('OrganziationEditComponent', () => {
  let component: OrganziationEditComponent;
  let fixture: ComponentFixture<OrganziationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganziationEditComponent]
    });
    fixture = TestBed.createComponent(OrganziationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
