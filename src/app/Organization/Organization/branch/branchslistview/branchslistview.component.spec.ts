import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchListViewComponent } from './branchslistview.component';

describe('BranchslistComponent', () => {
  let component: BranchListViewComponent;
  let fixture: ComponentFixture<BranchListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchListViewComponent]
    });
    fixture = TestBed.createComponent(BranchListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
