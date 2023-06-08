import { TestBed } from '@angular/core/testing';

import { SkoolService } from './skool.service';

describe('SkoolService', () => {
  let service: SkoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
