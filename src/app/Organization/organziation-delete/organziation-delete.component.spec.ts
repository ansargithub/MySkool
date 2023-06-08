import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganziationDeleteComponent } from './organziation-delete.component';

describe('OrganziationDeleteComponent', () => {
  let component: OrganziationDeleteComponent;
  let fixture: ComponentFixture<OrganziationDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganziationDeleteComponent]
    });
    fixture = TestBed.createComponent(OrganziationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
