import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkoolFormComponent } from './skool-form.component';

describe('SkoolFormComponent', () => {
  let component: SkoolFormComponent;
  let fixture: ComponentFixture<SkoolFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkoolFormComponent]
    });
    fixture = TestBed.createComponent(SkoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
