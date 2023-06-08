import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchListComponent } from './branchslist.component';

describe('BranchslistComponent', () => {
  let component: BranchListComponent;
  let fixture: ComponentFixture<BranchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchListComponent]
    });
    fixture = TestBed.createComponent(BranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
