import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefttreeComponent } from './lefttree.component';

describe('LefttreeComponent', () => {
  let component: LefttreeComponent;
  let fixture: ComponentFixture<LefttreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LefttreeComponent]
    });
    fixture = TestBed.createComponent(LefttreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
