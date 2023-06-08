import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkoolListComponent } from './skool-list.component';

describe('SkoolListComponent', () => {
  let component: SkoolListComponent;
  let fixture: ComponentFixture<SkoolListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkoolListComponent]
    });
    fixture = TestBed.createComponent(SkoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
