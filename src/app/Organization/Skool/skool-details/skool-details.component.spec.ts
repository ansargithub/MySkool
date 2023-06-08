import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkoolDetailsComponent } from './skool-details.component';

describe('SkoolDetailsComponent', () => {
  let component: SkoolDetailsComponent;
  let fixture: ComponentFixture<SkoolDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkoolDetailsComponent]
    });
    fixture = TestBed.createComponent(SkoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
