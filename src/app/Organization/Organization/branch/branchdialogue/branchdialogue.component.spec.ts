import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDialogueComponent } from './branchdialogue.component';
describe('BranchDialogueComponent', () => {
  let component: BranchDialogueComponent;
  let fixture: ComponentFixture<BranchDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchDialogueComponent]
    });
    fixture = TestBed.createComponent(BranchDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
